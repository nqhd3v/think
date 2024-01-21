import firebase from "@/services/firebase";
import { getThinkImage, verifyConfByField } from "@/services/firebase/think";
import { getDownloadURL } from "firebase-admin/storage";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const createPassCode = searchParams.get("create_pass_code");
  const filename = searchParams.get("filename");
  if (!createPassCode || !filename) {
    return Response.json({}, { status: 403 });
  }
  const isValid = await verifyConfByField(createPassCode, "createPassCode");
  if (!isValid) {
    return Response.json({}, { status: 403 });
  }

  const url = await getThinkImage(filename);
  return Response.json({ url });
}
