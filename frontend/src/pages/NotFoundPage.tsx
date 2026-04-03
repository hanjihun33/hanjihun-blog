import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-5 py-24 text-center">
      <div className="text-primary-600 text-sm font-semibold tracking-[0.3em] uppercase">Not Found</div>
      <h1 className="mt-4 text-3xl md:text-5xl font-bold text-surface-900">찾을 수 없는 페이지입니다.</h1>
      <p className="mt-4 text-surface-500">주소가 바뀌었거나 아직 옮겨지지 않은 페이지입니다.</p>
      <Link
        className="inline-flex mt-8 px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition-colors shadow-md shadow-primary-200"
        to="/"
      >
          홈으로 돌아가기
      </Link>
    </div>
  );
}
