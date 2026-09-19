const API_URL = process.env.NEXT_PUBLIC_API_URL;

const checkResponse = async (res) => {
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  const contentType = res.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error("API did not return JSON");
  }

  return res.json();
};

export const BookCardSingle = async (id) => {
  const res = await fetch(
    `${API_URL}/bookpost/published/${id}`,
    {
      cache: "no-store",
    }
  );

  return checkResponse(res);
};

export const FeaturedData = async () => {
  const res = await fetch(
    `${API_URL}/bookpost/published/six`,
    {
      cache: "no-store",
    }
  );

  return checkResponse(res);
};

export const getProduct = async (page = 1) => {
  const res = await fetch(
    `${API_URL}/bookpost/published?page=${page}`,
    {
      cache: "no-store",
    }
  );

  return checkResponse(res);
};