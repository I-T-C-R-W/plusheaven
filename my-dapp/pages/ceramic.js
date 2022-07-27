//main.js

import { CeramicClient } from "@ceramicnetwork/http-client";
import { EthereumAuthProvider } from "@ceramicnetwork/blockchain-utils-linking";
import { DIDDataStore } from "@glazed/did-datastore";
import { DIDSession } from "@glazed/did-session";
import NextCors from "nextjs-cors";

const ceramic = new CeramicClient("http://127.0.0.1:7007");

const aliases = {
  schema: {
    PlusHeavenSchema:
      "ceramic://kjzl6cwe1jw147k9ht44vvs0hgc2d4e930z8jjbynn223lmu6aur80kdzowv1x1",
  },
  definitions: {
    PlusHeavenDefinition:
      "ceramic://kjzl6cwe1jw148jylas2dxhxbcd12y0e8438k3agjq8kt6m9dmng58owl1r220u",
  },
  tiles: {},
};

const dataStore = new DIDDataStore({ ceramic, model: aliases });

export default function Ceramic() {
  async function authenticateWithEthereum(ethereumProvider) {
    const accounts = await ethereumProvider.request({
      method: "eth_requestAccounts",
    });

    const authProvider = new EthereumAuthProvider(
      ethereumProvider,
      accounts[0]
    );

    const session = new DIDSession({ authProvider });

    const did = await session.authorize();

    ceramic.did = did;

    console.log("done!");
  }

  async function auth() {
    if (window.ethereum == null) {
      throw new Error("No injected Ethereum provider found");
    }

    await authenticateWithEthereum(window.ethereum);
  }

  async function getWinningNumber() {
    try {
      const getWinningNumber = await dataStore.get("PlusHeavenDefinition");

      renderWinningNumber(getWinningNumber);
    } catch (error) {
      console.error(error);
    }
  }

  function renderWinningNumber(winningNumber) {
    if (!winningNumber) console.log("No winning number");
    console.log("Winning Number: ", winningNumber);
  }

  async function writeData() {
    try {
      const winningNumber = { winning_number: "927349" };

      await dataStore.merge("PlusHeavenDefinition", winningNumber);

      const getWinningNumber = await dataStore.get("PlusHeavenDefinition");

      renderWinningNumber(getWinningNumber);
    } catch (error) {
      console.error(error);
    }
  }

  async function connectWallet(authFunction, callback) {
    try {
      console.log("Connecting...");
      await authFunction();
      console.log("Break");
      await callback();
      console.log("Connected!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={async () => await writeData()}>Update</button>
      <button onClick={async () => await connectWallet(auth, getWinningNumber)}>
        Connect and Retrieve
      </button>
    </div>
  );
}
