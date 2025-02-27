import SideBarLayout from "../_containers/SidebarLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SideBarLayout>{children}</SideBarLayout>;
}
