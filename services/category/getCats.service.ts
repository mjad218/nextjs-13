import { API_URL } from "../../config";

const getCats = async () => {
  const res = await fetch(API_URL + "categories", { cache: "no-store" });
  if (!res.ok) {
    throw "ERROR Fetching Categories";
  }
  const categories = await res.json();
  return categories;
};

export default getCats;
