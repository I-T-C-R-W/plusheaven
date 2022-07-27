// import dependencies
import { CeramicClient } from "@ceramicnetwork/http-client";
import { EthereumAuthProvider } from "@ceramicnetwork/blockchain-utils-linking";
import { DIDDataStore } from "@glazed/did-datastore";
import { DIDSession } from "@glazed/did-session";

// set ceramic client to local node
const ceramic = new CeramicClient("http://127.0.0.1:7007");

// set up aliases from schema and definition generated in local node
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

// set up data store instance
const dataStore = new DIDDataStore({ ceramic, model: aliases });

export default function Ceramic() {
  // authenticate user and set up ceramic did from the authenticated wallet
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

  // checks for window.ethereum before calling the authentication function
  async function auth() {
    if (window.ethereum == null) {
      throw new Error("No injected Ethereum provider found");
    }

    await authenticateWithEthereum(window.ethereum);
  }

  // get winning number stored on ceramic via the PlusHeavenDefinition
  async function getWinningNumber() {
    try {
      const getWinningNumber = await dataStore.get("PlusHeavenDefinition");

      renderWinningNumber(getWinningNumber);
    } catch (error) {
      console.error(error);
    }
  }

  // console log the result
  function renderWinningNumber(winningNumber) {
    if (!winningNumber) console.log("No winning number");
    console.log("Winning Number: ", winningNumber);
  }

  // write data to the PlusHeavenDefinition, using the model struture. //!Merge() updates the provided fields with the provided data. Set() rewrites the entire model.
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

  // call the authenticate and callback functions passed.
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
      {/* call the writeData function. Can be modified to take a certain input */}
      <button onClick={async () => await writeData()}>Update</button>
      {/* call connect() using auth and getWinningNumber */}
      <button onClick={async () => await connectWallet(auth, getWinningNumber)}>
        Connect and Retrieve
      </button>
    </div>
  );
}
