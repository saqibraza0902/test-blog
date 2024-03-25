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
    // console.log(id);
    // if (id) {
    // console.log(id);
    // const colRef = doc(db, "Blogs", id);
    // const usersRef = collection(db, "Blogs");
    // const q = query(usersRef, where("slug", "==", id));
    // const snap = await getDocs(q);
    // const data = snap.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    // const snapshot = await getDoc(colRef);
    // const data = { id: snapshot.id, ...snapshot.data() };
    // const newdata = {
    //   ...data[0],
    // };
    // console.log(newdata);
    return new NextResponse(JSON.stringify({ newdata: "" }));
    // }
    // if (newid) {
    //   const usersRef = doc(db, "Blogs", newid);
    //   const snapshot = await getDoc(usersRef);
    //   const data = { id: snapshot.id, ...snapshot.data() };
    //   return new NextResponse(JSON.stringify(data));
    // }
    // return new NextResponse(JSON.stringify({}));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
