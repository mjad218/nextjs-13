import { API_URL } from "../../config";

export const getTemplates = async (
  page: number = 0,
  keyword?: string,
  categoryId?: number,
  tags?: any,
  price?: any,
  stars?: number
) => {
  const priceStr = price?.join(",") ? `&price=${price?.join(",")}` : "";
  const tagsStr = tags?.join(",") ? `&tags=${tags?.join(",")}` : "";
  const keywordStr = keyword ? `&keyword=${keyword}` : "";

  const categoryStr = categoryId ? `&category=${categoryId}` : "";
  const starsStr = stars ? `&stars=${stars}` : "";
  const queryStr = `?page=${page}${keywordStr}${categoryStr}${starsStr}${priceStr}${tagsStr}`;
  const res = await fetch(`${API_URL}templates${queryStr}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw {
      message: res.statusText,
      status: res.status,
    };
  }
  return await res.json();
};
