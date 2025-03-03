import Sidebar from "@/components/Sidebar";
import "../../globals.css";

export const metadata = {
  title: "Tech Blogger",
  description: "Get informed about the latest tech news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <main className="mx-auto  grid grid-cols-12 bg-gray-100">
          <div className="h-screen col-span-2 pl-10 pt-5 bg-white border-r ">
            <Sidebar />
          </div>
          <div className="col-span-10 pt-5  pl-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
