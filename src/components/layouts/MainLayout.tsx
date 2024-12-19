import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const MainLayout = ({ children, showFooter = true }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout; 