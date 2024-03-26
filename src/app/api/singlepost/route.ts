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
import { parse } from "url";

export const GET = async (req: any) => {
  try {
    // const urlObject = new URL(req.url);
    // const id = urlObject.searchParams.get("id");
    // const newid = urlObject.searchParams.get("newid");
    const { query: queryParams } = parse(req.url, true); // Rename 'query' to 'queryParams'
    const { id, newid } = queryParams;
    if (id) {
      const usersRef = collection(db, "Blogs");
      const q = query(usersRef, where("slug", "==", id));
      const snap = await getDocs(q);
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const newdata = {
        ...data[0],
      };
      return new NextResponse(JSON.stringify(newdata));
    }
    if (newid) {
      const abc: any = newid;
      const usersRef = doc(db, "Blogs", abc);
      const snapshot = await getDoc(usersRef);
      const data = { id: snapshot.id, ...snapshot.data() };
      return new NextResponse(JSON.stringify(data));
    }

    return new NextResponse(JSON.stringify({ id: id, new: newid }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
