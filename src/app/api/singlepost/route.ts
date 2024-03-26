import { db } from "@/utils/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    // const urlObject = new URL(req.url);
    // const id = urlObject.searchParams.get("id");
    // const newid = urlObject.searchParams.get("newid");
    // if (id) {
    //   const usersRef = collection(db, "Blogs");
    //   const q = query(usersRef, where("slug", "==", id));
    //   const snap = await getDocs(q);
    //   const data = snap.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   const newdata = {
    //     ...data[0],
    //   };
    //   return new NextResponse(JSON.stringify(newdata));
    // }
    // if (newid) {
    //   const usersRef = doc(db, "Blogs", newid);
    //   const snapshot = await getDoc(usersRef);
    //   const data = { id: snapshot.id, ...snapshot.data() };
    //   return new NextResponse(JSON.stringify(data));
    // }
    return new NextResponse(JSON.stringify({ msg: "Hello" }));
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: err }));
  }
};
