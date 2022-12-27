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

export function Routes (){
    return useRoutes([
        {
            path:'/',
            element:<HomePage />
        },
      
        {
            path: '/auth',
            element: <Auth />,
            children:[
              {path:'login', element:<SignInPage />},
              {path: 'register', element: <SignUpPage />},
            ]
          },
          {
            path: '/account',
            element: <AccountLayout />,
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
                {path:'item' , element:<ProductPage/>}
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