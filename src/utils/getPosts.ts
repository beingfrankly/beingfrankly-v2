export default async function getPosts(limit?: number) {
  const URL = limit ? import.meta.env.API_URL + '?' + new URLSearchParams({ limit: limit.toString() }) : import.meta.env.API_URL ;
  const result = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
    },
  }).then((response) => response.json());

  return import.meta.env.PROD ? result.filter(post => post.published) : result;
}
