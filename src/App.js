
import './App.css';
import Connexion from './Components/CONNEXION/Connexion';
import { BrowserRouter as Router, Route, Switch,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dish_details from './Components/DISH_DETAILS/Dish_details';
import Home from './Components/HOMEPAGE/Home';
import Inscription from './Components/Inscription/Inscription';
import Notfond from './Components/Notfond';
import Navbar from './Components/HOMEPAGE/HEADER/Navbar/Navbar'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/inscription',
      element:<Inscription/>
    },
    {
      path:'/connexion',
      element:<Connexion/>
    },
    {
      path:'/plat',
      element:<Dish_details/>
    },
    {
      path:'*',
      element:<Notfond/>
    },
    {
      path:'/navb',
      element:<Navbar/>
    }
  ])
  return (

    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
