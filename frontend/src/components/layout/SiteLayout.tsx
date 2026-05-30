import { Outlet } from 'react-router-dom';
import { systemSans } from '../font/google';
import Footer from './Footer';
import Navbar from './Navbar';

export default function SiteLayout() {
  return (
    <div className={systemSans.className}>
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
