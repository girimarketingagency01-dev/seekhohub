import Link from "next/link";
import { getAllArticles } from "../lib/articles";

const categories = [
  "AI & Tech",
  "Career",
  "Education",
  "How-To",
  "Finance",
  "Business",
  "Lifestyle",
  "Digital",
];

export default function Home() {
  const articles = getAllArticles();

  const featured = articles.slice(0, 5);
  const latest = articles.slice(0, 12);

  return (
    <main className="bg-white">

      {/* HERO / FEATURED */}
      <section className="mx-auto max-w-[1380px] px-4 py-8 lg:px-5 lg:py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm font-bold uppercase tracking-wide text-[#1685c1]">
              Featured
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#111] lg:text-4xl">
              Explore Useful Knowledge
            </h1>

            <p className="mt-2 max-w-2xl text-base text-slate-600">
              Practical guides, useful information and interesting ideas
              across technology, career, education, finance and more.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* MAIN FEATURED ARTICLE */}
          {featured[0] && (
            <Link
              href={`/article/${featured[0].slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[260px] overflow-hidden bg-slate-100 lg:h-[390px]">
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-md bg-[#0d2b55] px-3 py-1 text-xs font-bold text-white">
                  {featured[0].category}
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h2 className="text-2xl font-bold leading-tight text-[#111] lg:text-3xl">
                  {featured[0].title}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {featured[0].description}
                </p>

                <div className="mt-4 text-sm text-slate-500">
                  {featured[0].date} • {featured[0].author}
                </div>
              </div>
            </Link>
          )}

          {/* SMALL FEATURED ARTICLES */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {featured.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-[150px] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="text-xs font-bold uppercase text-[#1685c1]">
                    {article.category}
                  </div>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-[#111]">
                    {article.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVERTISEMENT SPACE */}
      <div className="mx-auto max-w-[1380px] px-4 lg:px-5">
        <div className="flex h-[90px] items-center justify-center border border-dashed border-slate-300 bg-slate-50 text-xs font-medium text-slate-400">
          Advertisement
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <section className="mx-auto max-w-[1380px] px-4 py-10 lg:px-5">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#1685c1]">
              Fresh from SeekhoHub
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#111] lg:text-3xl">
              Latest Articles
            </h2>
          </div>

          <Link
            href="#categories"
            className="hidden text-sm font-bold text-[#1685c1] sm:block"
          >
            Explore Topics →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-[170px] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="text-xs font-bold uppercase text-[#1685c1]">
                  {article.category}
                </div>

                <h3 className="mt-2 line-clamp-3 text-lg font-bold leading-snug text-[#111]">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <section
        id="categories"
        className="border-t border-slate-200 bg-[#f7f9fb]"
      >
        <div className="mx-auto max-w-[1380px] px-4 py-10 lg:px-5">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-[#1685c1]">
              Explore
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#111]">
              Browse by Topic
            </h2>
          </div>

          <div className="space-y-12">
            {categories.map((category) => {
              const categoryArticles = articles
                .filter((article) => article.category === category)
                .slice(0, 4);

              if (categoryArticles.length === 0) {
                return null;
              }

              return (
                <div key={category}>
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-2xl font-bold text-[#111]">
                      {category}
                    </h3>

                    <Link
                      href="#"
                      className="text-sm font-bold text-[#1685c1]"
                    >
                      View All →
                    </Link>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/article/${article.slug}`}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="h-[150px] overflow-hidden bg-slate-100">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-4">
                          <h4 className="line-clamp-3 text-lg font-bold leading-snug text-[#111]">
                            {article.title}
                          </h4>

                          <p className="mt-2 text-xs text-slate-500">
                            {article.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / COMMUNITY */}
      <section className="mx-auto max-w-[1380px] px-4 py-12 lg:px-5">
        <div className="rounded-2xl bg-[#0d2b55] px-6 py-10 text-center text-white lg:px-10">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Keep Learning With SeekhoHub
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 lg:text-base">
            Discover useful articles, practical guides and fresh ideas
            across technology, career, education, finance and everyday life.
          </p>
        </div>
      </section>

    </main>
  );
}