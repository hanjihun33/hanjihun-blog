import { Outlet } from 'react-router-dom';
import { inter } from '../font/google';
import Footer from './Footer';
import Navbar from './Navbar';

export default function SiteLayout() {
  return (
    <div className={inter.className}>
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
