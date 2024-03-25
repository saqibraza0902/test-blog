import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const get_blogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
export const getAllPortfolio = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/portfolio`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export const getSinglePost = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/singlepost?id=${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export const getSinglePortfolio = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/portfolio/${slug}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
export const deleteDocument = async (documentId: string) => {
  try {
    const a = await deleteDoc(doc(db, "Portfolio", documentId));
    console.log("Document successfully deleted!", a);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
export const deleteCollectible = async (documentId: string) => {
  try {
    const a = await deleteDoc(doc(db, "Collectibles", documentId));
    console.log("Document successfully deleted!", a);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
export const deleteBlog = async (documentId: string) => {
  try {
    const a = await deleteDoc(doc(db, "Blogs", documentId));
    console.log("Document successfully deleted!", a);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
export const get_tags = async () => {
  try {
    const colRef = collection(db, "Tags");
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.log(error);
  }
};
