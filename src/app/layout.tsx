import type { Metadata } from "next";
import "./globals.css";

// Using custom font links instead of Next.js font optimization

export const metadata: Metadata = {
  title: "Eduly.ai - Real-time AI Tutoring Assistant",
  description: "Supercharge your tutoring with AI. Real-time assistance for tutors and parents to deliver effective, personalized learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Inter:wght@300;400;500;600;700;800&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Castoro', serif" }}
      >
        {children}
      </body>
    </html>
  );
}
