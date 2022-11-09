import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { name },
    method,
  } = req;

  switch (method) {
    case "POST":
      const response = await fetch(
        "https://hooks.slack.com/workflows/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",
        {
          method: "POST",
          body: JSON.stringify({
            pokemon: name,
            who: "ben.cheng@preface.education",
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );

      res.status(200).json({ success: response.ok, name });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
