// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app, database } from "./Firebase";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const db = getFirestore();

export default async function handler(req, res) {
  const user = req.query.user_address;
  const cid = req.body.cid;

  try {
    const docRef = doc(database, "bet-cids", user);
    await updateDoc(docRef, { cid });

    res.status(200).json({ Success: "Data Updated!" });
  } catch (error) {
    res.status(404).json({ error });
  }
}
