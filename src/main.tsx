import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.tsx';
import { DiaryPage } from './pages/DiaryPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {HeroUIProvider} from "@heroui/react";
import { ViewPage } from './pages/ViewPage.tsx';


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
  },
  {
    path: "/view",
    element: <ViewPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className=" text-foreground bg-background font-inter">
        <RouterProvider router={router} />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
