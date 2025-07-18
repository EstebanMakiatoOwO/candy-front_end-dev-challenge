import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { HistoryPage } from '@/pages/HistoryPage';
import { PremiumPage } from '@/pages/PremiumPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'premium', element: <PremiumPage /> },
    ],
  },
]);
