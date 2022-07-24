// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app, database } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const user = req.query.user_address;
  const docRef = doc(database, "bet-cids", user);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    res.status(200).json({ data });
  } else {
    res.status(404).json({ NotFound: "No such document!" });
  }
}
