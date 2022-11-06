const IS_PROD = process.env.NEXT_PUBLIC_ENVIRONMENT !== "dev";

const API_URL = IS_PROD
  ? "https://api.qawalleb.com/"
  : "http://localhost:8080/";

const FRONT_END_URL_URL = IS_PROD
  ? "https://qawalleb.com"
  : "http://localhost:3000";

const GoogleStorageURL = `https://storage.googleapis.com/`;
const AvatarsBucketName = `qawalleb-avatars`;
const PhotosBucketName = `qawalleb-photos`;
const VersionsBucketName = `qawalleb-templates`;

export {
  API_URL,
  IS_PROD,
  FRONT_END_URL_URL,
  GoogleStorageURL,
  VersionsBucketName,
  PhotosBucketName,
  AvatarsBucketName,
};
