export const metadata = {
  title: "Tech Blogger",
  description: "Get informed about the latest tech news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  );
}
