import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Web3Storage, File } from "web3.storage";
// import { Blob } from "buffer";

export default function getDataFromIPFS() {
  /**
   * @param upload_data: Object containing user address and cid of uploaded data
   * @action calls uploadData endpoint and passes "upload_data" to it. API handles the rest
   * */
  const getDataFromFirebase = async (address) => {
    const response = await fetch(
      `http://localhost:3000/api/getData?user_address=${address}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  };

  //<!---------------------------------------- get to ipfs -------------------------------------------------------------//
  // get access token from env
  function getAccessToken() {
    return process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN;
  }

  // start web3storage instance
  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  /**
   * @param data: payload containing cid
   * @returns data about the provided cid
   * */
  async function retrieveCIDInfo(data) {
    const cid = data.cid;

    const client = makeStorageClient();
    const res = await client.get(cid);

    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`);
    }

    // request succeeded! do something with the response object here...
    return res;
  }

  /**
   * @action gets the cid info by passing the result of getDataFromFirebase() into retrieveCIDInfo(). The result is then used to structure a url and the data is retrieved using the url
   * @returns res: json containing bet, bet_amount, bet_round, drawn_number, state_number, state_round, and wallet_address
   */
  async function getData() {
    const retrieve = await retrieveCIDInfo(
      await getDataFromFirebase("address")
    );
    const files = await retrieve.files();
    const url = await fetch(`https://${files[0].cid}.ipfs.dweb.link/`, {
      method: "GET",
      mode: "cors",
    });

    const res = await url.json();
    return res;
  }

  // calling trial()
  (async function () {
    await getData();
  })();

  //<!---------------------------------------- end get to ipfs -------------------------------------------------------------//
}
