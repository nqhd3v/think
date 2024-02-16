import {
  TNewThink,
  TThink,
  TThinkCategory,
  TThinkConfig,
  TThinkFs,
} from "@/types/think";
import { v4 } from "uuid";
import firebase from ".";
import { getDownloadURL } from "firebase-admin/storage";

export const createNewThink = async (data: TNewThink) => {
  try {
    const id = v4();
    await firebase
      .firestore()
      .collection("think")
      .doc(id)
      .set({
        ...data,
        private: !!data.private,
        id,
        ts: data.ts || Date.now(),
      });

    return id;
  } catch (err: any) {
    console.error("Error when save new THINK:", err.message);
    return null;
  }
};

export const getThinkById = async (
  id: TThinkFs["id"]
): Promise<TThinkFs | null> => {
  try {
    const doc = await firebase.firestore().collection("think").doc(id).get();
    if (!doc.exists) return null;
    return doc.data() as TThink;
  } catch (err: any) {
    console.error("Error when retrieve THINK by id:", err.message);
    return null;
  }
};

export const getThinks = async (
  category?: TThinkCategory,
  startAfterId?: string,
  size = 20
): Promise<TThinkFs[]> => {
  try {
    let query = firebase
      .firestore()
      .collection("think")
      .orderBy("ts", "desc")
      .limit(size);
    if (category) {
      query = query.where("category", "array-contains", category);
    }
    if (startAfterId) {
      const lastDoc = await firebase
        .firestore()
        .collection("think")
        .doc(startAfterId)
        .get();
      query = query.startAfter(lastDoc);
    }
    const snapshot = await query.get();

    if (snapshot.docs.length === 0) {
      return [];
    }
    return snapshot.docs
      .map((doc) => {
        if (!doc.exists) return null;
        const d = doc.data() as TThinkFs;
        if (d.private) d.content = null;
        return d;
      })
      .filter((item) => item) as TThinkFs[];
  } catch (err: any) {
    console.error("error when retrieve thinks:", err.message);
    return [];
  }
};

export const getThinkConfig = async (): Promise<TThinkConfig | null> => {
  try {
    const doc = await firebase
      .firestore()
      .collection("think")
      .doc("c0nf1g")
      .get();
    if (!doc.exists) return null;
    return doc.data() as TThinkConfig;
  } catch (err: any) {
    console.error("error when creating new think:", err.message);
    return null;
  }
};

export const verifyConfByField = async (
  inp: string,
  field: keyof TThinkConfig
): Promise<boolean> => {
  const conf = await getThinkConfig();
  if (!conf || !conf[field]) {
    console.error("no conf found");
    return false;
  }
  return Array.isArray(conf[field])
    ? conf[field].includes(inp)
    : conf[field] === inp;
};

export const getThinkImage = async (filename: string) => {
  const fileRef = firebase
    .storage()
    .bucket(`${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`)
    .file(filename);
  return await getDownloadURL(fileRef);
};
