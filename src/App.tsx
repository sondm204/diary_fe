import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DiaryPage } from './pages/DiaryPage';



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

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
