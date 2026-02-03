import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  useScrollToHash();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
