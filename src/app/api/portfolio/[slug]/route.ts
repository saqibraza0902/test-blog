import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    // console.log("Params", params);
    // const urlObject = new URL(req.url);
    // const id = urlObject.searchParams.get("id");

    if (params.slug) {
      const colRef = doc(db, "Portfolio", params.slug);
      const snapshot = await getDoc(colRef);
      const data = { id: snapshot.id, ...snapshot.data() };
      return new NextResponse(JSON.stringify(data));
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
