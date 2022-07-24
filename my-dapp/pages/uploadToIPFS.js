import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Web3Storage, File } from "web3.storage";
// import { Blob } from "buffer";

export default function uploadToIPFS() {
  const router = useRouter();
  const [data, setData] = useState({});

  /**
   * @param upload_data: Object containing user address and cid of uploaded data
   * @action calls uploadData endpoint and passes "upload_data" to it. API handles the rest
   * */
  const uploadData = async (upload_data) => {
    const response = await fetch("http://localhost:3000/api/uploadData/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upload_data),
    });

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
    }

    await response.json();
  };

  //<!---------------------------------------- upload to ipfs -------------------------------------------------------------//
  // get access token from env
  function getAccessToken() {
    return process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN;
  }

  // start web3storage instance
  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  // generate dummy data to test upload to ipfs via web3.storage
  async function generateData() {
    const uploadData = {
      wallet_address: "address",
      bet_amount: 50,
      bet: 1,
      bet_round: 500,
      drawn_number: 34,
      state_round: 1,
      state_number: 23,
    };

    return uploadData;
  }

  /**
   * @action calls the generateData() function to get the payload. Then converts the data to a buffer and finally a web3.Storage File
   * @returns File
   */
  async function makeFile() {
    const obj = await generateData();
    const blob = Buffer.from(JSON.stringify(obj));

    const file = [new File([blob], "user_data.json")];

    return file;
  }

  /**
   * @action fetches client from makeStorageClient(), data from generateData(), and file from makeFile(). Then uploads the file to IPFS via client.put()
   * @yields after actions are done, it calls uploadData with a payload.
   */
  async function storeData() {
    const client = makeStorageClient();
    const obj = await generateData();

    const file = await makeFile();
    const cid = await client.put(file);

    const temp_data = {
      user_address: obj.wallet_address,
      cid,
    };

    await uploadData(temp_data);
  }

  // calling the storeData function
  // storeData();

  //<!---------------------------------------- end upload to ipfs -------------------------------------------------------------//
}
