import { createClient } from "@sanity/client";
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string;

export const client = createClient({
  projectId: projectId,
  dataset: "dev",
  apiVersion: "2024-01-01",
  useCdn: false,
});