import { getCollection } from "astro:content";
import slugify  from "slugify";
import { Projects } from "@/components/sections/Work.astro";

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

// Works projleri için fonksiyonlar
export async function getSortedProjects() {
  return Projects
    .filter((project) => project.pubDate)
    .sort(
      (a, b) =>
        new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
    );
}

export async function getWorkPagination(paginate) {
  const sortedProjects = await getSortedProjects();
  return paginate(sortedProjects, {
    pageSize: 4,
  });
}

export async function getWorkTagsPagination(paginate) {
  const sortedProjects = await getSortedProjects();
  const uniqueWorks = [
    ...new Set(sortedProjects.map((project) => project.tags).flat()),
  ];
 
  return uniqueWorks.flatMap((works) => {
    const filteredProjects = sortedProjects.filter((project) =>
      project.tags.includes(works)
    );

    const slug = toSlug(works);

    return paginate(filteredProjects, {
      params: { slug: slug },
      pageSize: 2,
      props: { works },
    });
  });
}

// Works tag'lerini almak için basit fonksiyon
export function getWorkTagsList() {
  return [
    ...new Set(Projects.map((project) => project.tags).flat()),
  ];
}

