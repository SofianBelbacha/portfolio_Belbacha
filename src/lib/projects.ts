import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

export const getProjects = async () => {
  const q = query(collection(db, "projects"), orderBy("createdAt", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};
