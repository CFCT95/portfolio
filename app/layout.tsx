import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Torres — QA Automation Engineer",
  description:
    "QA Automation Engineer specializing in building reliable automation systems that eliminate manual work and ship quality faster.",
  keywords: [
    "QA Automation Engineer",
    "Python Automation",
    "Software Quality",
    "Test Automation",
    "AWS",
    "Cristian Torres",
  ],
  authors: [{ name: "Cristian Torres" }],
  openGraph: {
    title: "Cristian Torres — QA Automation Engineer",
    description:
      "QA Automation Engineer specializing in building reliable automation systems that eliminate manual work and ship quality faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
