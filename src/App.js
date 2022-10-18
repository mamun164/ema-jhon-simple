
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Inventory from './componets/Inventory/Inventory';
import Orders from './componets/Orders/Orders';
import Shop from './componets/Shop/Shop';
import Main from './layout/Main';
import { productAndCartLoader } from './loderes/productAndCartLoder';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: ()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'orders',
          loader: productAndCartLoader,
          element:<Orders></Orders>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        },
      ]
    },
    
  ])
  return (
    <div >
    <RouterProvider
    router={router}></RouterProvider>
    </div>
  );
}

export default App;
