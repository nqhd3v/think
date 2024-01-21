import {
  createNewThink,
  getThinks,
  verifyConfByField,
} from "@/services/firebase/think";
import { TNewThink, TThinkCategory } from "@/types/think";
import Joi from "joi";

const THINK_CATEGORIES: TThinkCategory[] = ["love", "life", "work", "health"];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = searchParams.get("size") || undefined;
  const category = searchParams.get("category") || undefined;
  const lastItem = searchParams.get("last") || undefined;

  const { error } = Joi.object({
    size: Joi.number().optional(),
    category: Joi.string()
      .valid(...THINK_CATEGORIES)
      .optional(),
    lastItem: Joi.string().uuid().optional(),
  }).validate({
    size,
    category,
    lastItem,
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

  const data = await getThinks(
    category as TThinkCategory,
    lastItem,
    size ? Number(size) : undefined
  );
  return Response.json(data);
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const createPassCode = searchParams.get("create_pass_code");
  if (!createPassCode) {
    return Response.json({}, { status: 403 });
  }
  const isValid = await verifyConfByField(createPassCode, "createPassCode");
  if (!isValid) {
    return Response.json({}, { status: 403 });
  }
  const body = await req.json();
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.array().items(Joi.string()).required(),
    category: Joi.string()
      .valid(...THINK_CATEGORIES)
      .required(),
    private: Joi.boolean().optional(),
    ts: Joi.number().optional(),
  }).validate(body);
  if (error) {
    return Response.json(error, { status: 400 });
  }

  const data = await createNewThink(body as TNewThink);
  return Response.json(data);
}
