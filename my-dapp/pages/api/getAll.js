// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app, database } from "./Firebase";
import { doc, getDocs, collection, getFirestore } from "firebase/firestore";

export default async function handler(req, res) {
  const dbInstance = collection(database, "bet-cids");

  const user = req.query.user_address;
  const docs = await getDocs(dbInstance);

  if (docs) {
    const data = docs.docs.map((doc) => {
      const data = doc.data();
      const user_address = doc.id;

      return { user_address, ...data };
    });
    res.status(200).json({ data });
  } else {
    res.status(404).json({ NotFound: "No such document!" });
  }
}
