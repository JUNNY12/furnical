import { useRoutes } from "react-router-dom";
import 
{
    Home,
    SignIn,
    SignUp,
    WishList,
    Shop ,
    Cart
} from "../pages";
import Auth from "../pages/authpage/Auth";

export function Routes (){
    return useRoutes([
        {
            path:'/',
            element:<Home />
        },
      
        {
            path: '/auth',
            element: <Auth />,
            children:[
              {path:'login', element:<SignIn />},
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

        {
            path:'/cart',
            element:<Cart />
        },
    ])
}