import { getCollection } from "astro:content";
import slugify  from "slugify";

export const toSlug = (text) => {
  return slugify(text, {
    lower: true,
    strict: true,
  });
};

export async function getSortedPosts() {
  const allPosts = await getCollection("blog");
  return allPosts
    .filter((post) => post.data.pubDate)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );
}

export async function getBlogPagination(paginate) {
  const sortedPosts = await getSortedPosts();
  return paginate(sortedPosts, {
    pageSize: 4,
  });
}

export async function getTagsPagination(paginate) {
  const sortedPosts = await getSortedPosts();
  const uniqueCategories = [
    ...new Set(sortedPosts.map((post) => post.data.tags).flat()),
  ];

  return uniqueCategories.flatMap((tags) => {
    const filteredPosts = sortedPosts.filter((post) =>
      post.data.tags.includes(tags)
    );

    const slug = toSlug(tags);

    return paginate(filteredPosts, {
      params: { slug: slug },
      pageSize: 2,
      props: { tags },
    });
  });
}

const allPosts = await getCollection("blog");
export const tags = [
  ...new Set(allPosts.map((post) => post.data.tags).flat()),
];
