import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/theme/ThemeProvider";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aniw App",
  description:
    "Get an opportunity to search and view posts, files and 3D models from a large list published on the site, as well as create your owns. Interact with other users by rating the items on the site as well as commenting and replying to comments.",
  keywords: ["Posts", "Files", "3D Models", "Users", "Comments", "Dark mode"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <StoreProvider>
            <div className="wrapper">{children}</div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
