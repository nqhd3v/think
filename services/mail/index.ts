import { $mail } from "./request";

export const send = async (
  receipts: { email: string; name: string }[],
  content: {
    text: string;
    title: string;
  }
): Promise<{
  sent: { Email: string; MessageID: string; MessageUUID: string }[];
}> => {
  return $mail.post("v3/send", {
    FromEmail: "no-reply@nqhuy.dev",
    FromName: "nqh.d3v",
    Recipients: receipts.map((r) => ({
      Email: r.email,
      Name: r.name,
    })),
    Subject: content.title,
    "Html-part": content.text,
  });
};
