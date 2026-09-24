const fs = require("fs");
const path = require("path");

const outputDir = path.join(
  process.cwd(),
  "content",
  "articles"
);

const articles = [
  {
    category: "AI & Tech",
    posts: [
      "10 AI Tools That Can Make Your Daily Work Easier",
      "What Is Generative AI and How Does It Work?",
      "Best AI Tools for Students",
      "How AI Is Changing the Way We Work",
      "AI vs Traditional Software: What Is the Difference?",
      "How to Use AI for Better Research",
      "What Is Machine Learning in Simple Words?",
      "Best Productivity Apps You Should Know About",
      "How to Stay Safe While Using AI Tools",
      "The Future of AI: What to Expect"
    ]
  },
  {
    category: "Career",
    posts: [
      "How to Create a Professional Resume",
      "10 Skills That Can Improve Your Career",
      "How to Prepare for a Job Interview",
      "Common Resume Mistakes You Should Avoid",
      "How to Find Work From Home Jobs",
      "How to Write a Professional Cover Letter",
      "How to Improve Your Communication Skills",
      "How to Build a Strong LinkedIn Profile",
      "How to Answer Tell Me About Yourself",
      "How to Choose the Right Career"
    ]
  },
  {
    category: "Education",
    posts: [
      "How to Study More Effectively",
      "Best Study Techniques for Students",
      "How to Make Better Notes",
      "How to Prepare for Online Exams",
      "How to Improve Your Concentration",
      "How to Create a Daily Study Routine",
      "Why Time Management Matters for Students",
      "How to Learn Difficult Subjects Easily",
      "How to Avoid Procrastination While Studying",
      "Useful Online Resources for Students"
    ]
  },
  {
    category: "How-To",
    posts: [
      "How to Create a Gmail Account",
      "How to Take a Screenshot on Windows",
      "How to Convert PDF to Word",
      "How to Compress a PDF File",
      "How to Clear Browser Cache",
      "How to Create a Strong Password",
      "How to Backup Your Important Files",
      "How to Share Files Online",
      "How to Scan Documents With Your Phone",
      "How to Protect Your Online Accounts"
    ]
  },
  {
    category: "Finance",
    posts: [
      "What Is a Savings Account?",
      "How to Create a Monthly Budget",
      "What Is a Credit Score?",
      "How to Save Money Every Month",
      "Debit Card vs Credit Card",
      "What Is Compound Interest?",
      "How to Track Your Monthly Expenses",
      "Emergency Fund: What Is It and Why It Matters",
      "How to Avoid Common Online Payment Scams",
      "Basic Personal Finance Tips for Beginners"
    ]
  },
  {
    category: "Business",
    posts: [
      "How to Start a Small Business",
      "Business Ideas You Can Start From Home",
      "How to Create a Business Plan",
      "Why Every Business Needs a Website",
      "How Digital Marketing Helps Small Businesses",
      "How to Get Your First Customers",
      "How to Build a Strong Brand",
      "Common Mistakes New Businesses Make",
      "How to Use Social Media for Business",
      "How to Improve Customer Experience"
    ]
  },
  {
    category: "Lifestyle",
    posts: [
      "Simple Habits That Can Improve Your Day",
      "How to Build a Better Morning Routine",
      "Easy Ways to Stay Organized",
      "How to Reduce Screen Time",
      "Simple Tips for Better Sleep",
      "How to Manage Your Daily Routine",
      "Easy Ways to Stay Productive at Home",
      "How to Create a Healthy Work-Life Balance",
      "Simple Ways to Spend Less Time on Your Phone",
      "How to Build Better Daily Habits"
    ]
  },
  {
    category: "Digital",
    posts: [
      "What Is Digital Marketing?",
      "SEO Explained for Beginners",
      "What Is Social Media Marketing?",
      "How Google Search Works",
      "What Is Email Marketing?",
      "How Websites Get Traffic",
      "What Is Content Marketing?",
      "SEO vs Paid Advertising",
      "How to Create Better Social Media Content",
      "Digital Marketing Skills You Should Learn"
    ]
  }
];

const imagePool = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  "https://images.unsplash.com/photo-1454165205744-3b78555e5572",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createContent(title, category) {
  return `# ${title}

${title} is an important topic for people who want to learn, improve their skills and make better decisions.

In this guide, we will explain the topic in simple language and cover the important things you should know.

## What You Should Know

Understanding the basics is the first step. Start with the most important concepts and gradually explore more advanced information.

## Important Points

- Understand the basics before moving to advanced topics.
- Use reliable information whenever possible.
- Practice what you learn.
- Keep your knowledge updated.

## Practical Tips

Start with small steps and apply what you learn in real situations. Consistency is often more useful than trying to learn everything at once.

## Conclusion

Learning about ${title.toLowerCase()} can help you make better decisions and improve your knowledge.

Keep learning with SeekhoHub for more useful guides, information and practical tips.
`;
}

let count = 0;

fs.mkdirSync(outputDir, { recursive: true });

articles.forEach((categoryData) => {
  categoryData.posts.forEach((title, index) => {
    const slug = slugify(title);
    const image = `${imagePool[index % imagePool.length]}?auto=format&fit=crop&w=1200&q=80`;

    const fileContent = `---
title: "${title}"
description: "A simple and practical guide about ${title.toLowerCase()}."
category: "${categoryData.category}"
date: "2026-09-${String(24 - Math.min(index, 23)).padStart(2, "0")}"
author: "SeekhoHub"
image: "${image}"
---

${createContent(title, categoryData.category)}
`;

    fs.writeFileSync(
      path.join(outputDir, `${slug}.md`),
      fileContent,
      "utf8"
    );

    count++;
  });
});

console.log(`Created ${count} articles successfully.`);