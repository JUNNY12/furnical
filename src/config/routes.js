import { useRoutes } from "react-router-dom";
import 
{
    Home,
    SignIn,
    SignUp,
    WishList,
    Shop 
} from "../pages";
import Auth from "../pages/authpage/Auth";

export function Routes (){
    return useRoutes([
        {
            path:'/',
            element:<Home />
        },
      
        {
            path: '/account',
            element: <Auth />,
            children:[
              {element:<SignIn />, index:true},
              {path: 'register', element: <SignUp />},
            ]
          },
      
        {
            path:'/shop',
            element:<Shop />
        },
        {
            path:'/wishlist',
            element:<WishList />
        },

    ])
}