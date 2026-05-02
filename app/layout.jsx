import "./globals.css";

export const metadata = {
  title: "SafeNest | Home Help Verification",
  description: "Verify maids, drivers and home staff in Hyderabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
