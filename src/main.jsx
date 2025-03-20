// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import routes from './routes/Routes'
// import { CartContext } from "../utils/cardContext";

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}></RouterProvider>
)
