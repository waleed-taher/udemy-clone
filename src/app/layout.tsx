import "./globals.css";

export const metadata = {
  title: "Udemy Clone",
  description:
    "Udemy Clone Made By NEXT JS TAILWINDCSS DRIZZLE ORM POSTRGRES SQL AND DEPLOYED ON VERCEL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
