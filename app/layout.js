export const metadata = {
  title: "CuanBook Builder",
  description: "AI Ebook Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
