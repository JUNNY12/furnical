import { useRoutes } from "react-router-dom";
import 
{
    HomePage,
    SignInPage,
    SignUpPage,
    WishListPage,
    ShopPage,
    CartPage,
    ProductPage,
    ShopLayout,
    AccountLayout,
    DashboardPage,
    DetailsPage,
    AddressPage,
    OrdersPage,
    ShippingAddressPage,
    BillingAddressPage,
    AddressLayout,
} from "../pages";
import Auth from "../pages/authpage/Auth";
import { useSelector } from 'react-redux'

export function Routes (){
    const isAuth = useSelector((state) => state.auth.isAuthenticated)
    const userAuth = useSelector((state) => state.auth.user)

    return useRoutes([
        {
            path:'/',
            element:<HomePage />
        },
      
        {
            path: '/auth',
            element: <Auth isAuth={isAuth} />,
            children:[
              {path:'login', element:<SignInPage />},
              {path: 'register', element: <SignUpPage />},
            ]
          },
          {
            path: '/account',
            element: <AccountLayout userAuth={userAuth} />,
            children:[
              {path:'dashboard', element:<DashboardPage />},
              {path: 'details', element: <DetailsPage />},
              {path: 'address', element:<AddressLayout />,
                children:[
                    {index:true, element:<AddressPage />},
                    {path: 'edit-billing', element:<BillingAddressPage />},
                    {path: 'edit-shipping', element: <ShippingAddressPage />}
                ]
             },
              {path: 'orders', element: <OrdersPage />},
            ]
          },
      
        {
            path:'/shop',
            element:<ShopLayout />,
            children:[
                {index:true, element:<ShopPage />},
                {path:'item/:slug' , element:<ProductPage/>}
            ]
        },
        {
            path:'/wishlist',
            element:<WishListPage />
        },

        {
            path:'/cart',
            element:<CartPage />
        },
    ])
}