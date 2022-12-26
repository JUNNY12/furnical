import { useRoutes } from "react-router-dom";
import 
{
    Home,
    SignIn,
    SignUp,
    WishList,
    Shop ,
    Cart,
    Product,
    ShopLayout,
    AccountLayout,
    Dashboard,
    Details,
    Address,
    Orders,
    ShippingAddress,
    BillingAddress,
    AddressLayout,
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
            path: '/account',
            element: <AccountLayout />,
            children:[
              {path:'dashboard', element:<Dashboard/>},
              {path: 'details', element: <Details />},
              {path: 'address', element:<AddressLayout />,
                children:[
                    {index:true, element:<Address />},
                    {path: 'edit-billing', element:<BillingAddress />},
                    {path: 'edit-shipping', element: <ShippingAddress />}
                ]
             },
              {path: 'orders', element: <Orders />},
            ]
          },
      
        {
            path:'/shop',
            element:<ShopLayout />,
            children:[
                {index:true, element:<Shop />},
                {path:'item/:id' , element:<Product/>}
            ]
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