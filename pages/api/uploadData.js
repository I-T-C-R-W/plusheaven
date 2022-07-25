// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app, database } from "./Firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const dbInstance = collection(database, "bet-cids");

export default async function handler(req, res) {
  const cid = req.body.cid;
  const user_address = req.body.user_address;

  try {
    const data = { cid };

    await setDoc(doc(dbInstance, user_address), data);
    res.status(200).json({ Success: "Data Uploaded" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
