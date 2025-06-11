import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.tsx';
import { DiaryPage } from './pages/DiaryPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/diary",
    element: <DiaryPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
