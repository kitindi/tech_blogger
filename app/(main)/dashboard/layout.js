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
        <main className="mx-auto  grid grid-cols-12">
          <div className="h-screen col-span-2 pl-10 pt-10 border-gray-200 border-r ">
            <Sidebar />
          </div>
          <div className="col-span-10  pt-10 pl-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
