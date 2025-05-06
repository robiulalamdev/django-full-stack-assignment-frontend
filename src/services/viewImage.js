import { GLOBAL_CONFIGS } from "../lib/configs";

export const viewImage = (path) => {
  if (!path) return "";
  if (path.includes("http")) {
    return path;
  }
  return `https://res.cloudinary.com/${GLOBAL_CONFIGS.CLOUDINARY_CLOUD_NAME}/${[
    path,
  ]}`;
};
