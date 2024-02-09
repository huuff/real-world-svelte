import type { PageServerLoad } from "./$types";
import { readdirSync } from "node:fs";

function findPages(root: string): string[] {
  const result: string[] = [];

  for (const path of readdirSync(root, { withFileTypes: true })) {
    if (path.isFile() && /\.svelte$/.test(path.name)) {
      result.push(path.path);
    } else if (path.isDirectory()) {
      result.push(...findPages(path.path + "/" + path.name));
    }
  }

  return result;
}

export const load: PageServerLoad = async ({ params }) => {
  const root = "./src/routes";
  const files = findPages(root);

  const routes = files.map((file) => file.replace(root, "")).filter((route) => route !== "");

  return { routes };
};
