import { getCollection } from "astro:content";

export async function getBlog(paginate) {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts
    .filter((post) => post.data.pubDate)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );
    


  return paginate(sortedPosts, { pageSize: 4 });
}
const allPosts = await getCollection("blog");
export const category = [
  ...new Set(allPosts.map((post) => post.data.category).flat()),
];