import "./globals.css";
import NavBar from "@/components/NavbarClient";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kingdom Call",
  description: "Thy Kingdom Come, Thy Will Be Done",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-lato">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
