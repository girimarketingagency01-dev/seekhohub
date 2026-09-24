import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllArticles } from "../../../lib/articles";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const articles = getAllArticles();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | SeekhoHub",
    };
  }

  return {
    title: `${article.title} | SeekhoHub`,
    description: article.description,

    alternates: {
      canonical: `https://seekhohub.in/article/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      url: `https://seekhohub.in/article/${article.slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const articles = getAllArticles();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[900px] px-4 py-8 lg:px-6 lg:py-12">

        {/* CATEGORY */}
        <div className="mb-4">
          <span className="text-sm font-bold uppercase tracking-wide text-[#1685c1]">
            {article.category}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold leading-tight text-[#111] sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {article.description}
        </p>

        {/* AUTHOR + DATE */}
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        {/* ARTICLE IMAGE */}
        <div className="mt-8 flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#edf2f7] sm:h-[360px]">
          <span className="text-6xl font-black text-[#b7c8d9]">
            SH
          </span>
        </div>

        {/* ARTICLE CONTENT */}
        <article className="mt-10">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-[#111]">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mb-4 mt-10 text-2xl font-bold text-[#111]">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mb-3 mt-8 text-xl font-bold text-[#111]">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-5 text-[17px] leading-8 text-[#333]">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="mb-6 list-disc space-y-2 pl-6 text-[17px] leading-8 text-[#333]">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-8 text-[#333]">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li>{children}</li>
              ),

              strong: ({ children }) => (
                <strong className="font-bold text-[#111]">
                  {children}
                </strong>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1685c1] underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

      </div>
    </main>
  );
}