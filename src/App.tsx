import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/page/home'
import { BlogPage } from './page/blog'

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={ROUTER}/>
    </>
  )
}

export default App
