export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{width: "100vw", height: "100vh", backgroundColor: "gray"}}>{children}</body>
    </html>
  );
}
