import {
  getThinkById,
  getThinkImage,
  verifyConfByField,
} from "@/services/firebase/think";
import Joi from "joi";
import { v4 } from "uuid";

export async function GET(
  req: Request,
  { params }: { params: { thinkId: string } }
) {
  const { searchParams } = new URL(req.url);
  const passCode = searchParams.get("passCode") || undefined;
  const { thinkId } = params;

  const { error } = Joi.object({
    thinkId: Joi.string().uuid().required(),
  }).validate({
    thinkId,
  });

  if (error) {
    return Response.json(
      {
        isError: true,
        error,
      },
      {
        status: 400,
      }
    );
  }

  const data = await getThinkById(thinkId);
  if (thinkId === "c0nf1g" || !data)
    return Response.json({
      id: "fake@" + v4(),
      title: "nothing to think",
      content: ["this think looks like not in my brain!?"],
      category: [],
    });
  if (data.private && !passCode) {
    return Response.json(
      {
        ...data,
        content: ["this think is private", "send with passkey to read it :<"],
      },
      {
        statusText: "think need something to remember",
      }
    );
  }
  const isValid = await verifyConfByField(
    passCode as string,
    "pass__readPrivateThink"
  );
  if (!isValid) {
    return Response.json(
      {
        ...data,
        content: ["this think is private", "send with passkey to read it :<"],
      },
      { statusText: "trigger invalid to remember" }
    );
  }
  const thinkContentPromises = (data.content as string[]).map(
    async (contentPart) => {
      if (contentPart.startsWith("gs:")) {
        const imgUrl = await getThinkImage(contentPart.replace("gs:", ""));
        return `img:${imgUrl}`;
      }
      return contentPart;
    }
  );
  const thinkContentTransformed = await Promise.all(thinkContentPromises);
  return Response.json({ ...data, content: thinkContentTransformed });
}
