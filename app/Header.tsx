import LiveDateTime from "./LiveDateTime";

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

const mobileNav = [
  { label: "Home", icon: "⌂" },
  { label: "Search", icon: "⌕" },
  { label: "Topics", icon: "▦" },
  { label: "Saved", icon: "♡" },
  { label: "Menu", icon: "☰" },
];

export default function Header() {
  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="fixed left-0 right-0 top-0 z-[60] hidden border-b border-slate-200 bg-white lg:block">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-2 text-xs text-slate-500">
          <LiveDateTime />

          <div className="flex items-center gap-5">
            <span className="font-medium">English</span>
            <span className="font-medium">हिंदी</span>
            <a href="#" className="hover:text-[#1685c1]">
              About
            </a>
            <a href="#" className="hover:text-[#1685c1]">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="fixed left-0 right-0 top-[33px] z-50 border-b border-[#0a2345] bg-[#0d2b55] text-white shadow-md lg:top-[33px]">
        <div className="mx-auto flex h-[64px] max-w-[1380px] items-center px-3 lg:h-[72px] lg:px-5">
          
          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label="Open menu"
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-md text-2xl hover:bg-white/10 lg:hidden"
          >
            ☰
          </button>

          {/* LOGO */}
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-sm font-black text-[#0d2b55] lg:h-14 lg:w-14">
              SH
            </div>

            <div className="leading-none">
              <div className="text-[22px] font-black tracking-tight lg:text-[28px]">
                Seekho<span className="text-[#35a8e8]">Hub</span>
              </div>

              <div className="mt-1 hidden text-[8px] font-medium tracking-[0.2em] text-blue-200 sm:block">
                LEARN • EXPLORE • GROW
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            <a
              href="/"
              className="border-b-2 border-[#35a8e8] py-[25px] text-sm font-bold"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-semibold hover:text-[#35a8e8]"
            >
              AI & Tech
            </a>

            <a
              href="#"
              className="text-sm font-semibold hover:text-[#35a8e8]"
            >
              Career
            </a>

            <a
              href="#"
              className="text-sm font-semibold hover:text-[#35a8e8]"
            >
              Education
            </a>

            <a
              href="#"
              className="text-sm font-semibold hover:text-[#35a8e8]"
            >
              How-To
            </a>

            <a
              href="#"
              className="text-sm font-semibold hover:text-[#35a8e8]"
            >
              More ▾
            </a>
          </nav>

          {/* SEARCH */}
          <button
            type="button"
            aria-label="Search"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-2xl hover:bg-white/10 lg:ml-5"
          >
            ⌕
          </button>
        </div>
      </header>

      {/* CATEGORY NAVIGATION */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1380px] gap-2 overflow-x-auto px-3 py-2 lg:px-5">
          {categories.map((category) => (
            <a
              href="#"
              key={category}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#1685c1] hover:text-[#1685c1] lg:text-sm"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* SPACE FOR FIXED DESKTOP HEADER */}
<div className="hidden h-[105px] lg:block" />

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 bg-white lg:hidden">
        <div className="grid h-[64px] grid-cols-5">
          {mobileNav.map((item, index) => (
            <a
              href="#"
              key={item.label}
              className={`flex flex-col items-center justify-center gap-1 ${
                index === 0 ? "text-[#0d2b55]" : "text-slate-500"
              }`}
            >
              <span className="text-[21px] leading-none">
                {item.icon}
              </span>

              <span className="text-[10px] font-semibold">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* SPACE FOR FIXED MOBILE NAV */}
      <div className="h-[64px] lg:hidden" />
    </>
  );
}