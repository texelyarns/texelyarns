import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeLoader from "./theme-loader";
import ThemeSwitcher from "./components/ThemeSwitcher";

export const metadata = {
  title: "Texel Yarns",
  description: "Premium cotton yarn manufacturing company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <ThemeLoader theme="green" />
        <ThemeSwitcher />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
