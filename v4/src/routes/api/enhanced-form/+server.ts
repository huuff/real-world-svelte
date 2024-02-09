import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const content = await request.text();
  console.log(`Received at /api/enhanced-form: ${JSON.stringify(content)}`);

  return new Response("OK!");
};
