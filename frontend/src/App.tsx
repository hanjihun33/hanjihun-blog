import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogListPage from './pages/BlogListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogListPage />} />
        <Route path="blogs/:postId" element={<BlogDetailPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="develop/blogs" element={<BlogListPage />} />
        <Route path="develop/blogs/:postId" element={<BlogDetailPage />} />
        <Route path="introduce/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
