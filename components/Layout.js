import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pb-[8rem]">{children}</main>
      <Footer />
    </>
  );
}
