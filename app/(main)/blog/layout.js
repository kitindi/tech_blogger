import "../../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tech Blogger",
  description: "Get informed about the latest tech news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
