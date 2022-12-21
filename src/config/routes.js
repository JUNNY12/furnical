import { useRoutes } from "react-router-dom";
import 
{
    Home,
    SignIn,
    SignUp,
    WishList,
    Shop 
} from "../pages";

export function Routes (){
    return useRoutes([
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<SignIn />
        },
        {
            path:'/register',
            element:<SignUp />
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