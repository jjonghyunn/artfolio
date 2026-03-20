export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  timestamp: string;
  permalink: string;
  children?: {
    data: { id: string; media_url: string; media_type: string }[];
  };
}

export interface InstagramProfile {
  id: string;
  name: string;
  biography?: string;
  profile_picture_url?: string;
}

export async function getInstagramProfile(): Promise<InstagramProfile | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !userId) return null;

  const res = await fetch(
    `https://graph.facebook.com/v25.0/${userId}?fields=id,name,biography,profile_picture_url&access_token=${token}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) return null;
  return res.json();
}

export async function getInstagramMedia(): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !userId) {
    console.error("Instagram env vars missing");
    return [];
  }

  const fields =
    "id,caption,media_type,media_url,thumbnail_url,timestamp,permalink,children{media_url,media_type}";

  const res = await fetch(
    `https://graph.facebook.com/v25.0/${userId}/media?fields=${fields}&limit=50&access_token=${token}`,
    { next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    console.error("Instagram API error:", res.status, await res.text());
    return [];
  }

  const json = await res.json();
  return json.data ?? [];
}
