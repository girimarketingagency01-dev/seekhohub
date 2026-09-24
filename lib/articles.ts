import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(
  process.cwd(),
  "content/articles"
);

export function getAllArticles() {
  const files = fs.readdirSync(articlesDirectory);

  const articles = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");

      const fullPath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        author: data.author,
        image: data.image,
        content,
      };
    });

  return articles.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}