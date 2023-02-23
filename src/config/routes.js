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
    CheckoutPage,
    OrdersPage,
    ShippingAddressPage,
    BillingAddressPage,
    AddressLayout,
    Layout,
    BedPage,
    TablePage,
    KitchenPage,
    ChairPage,
    NotFoundPage
} from "../pages";
import Auth from "../pages/authpage/Auth";
import { useSelector } from 'react-redux'

export function Routes (){
    const userAuth = useSelector((state) => state.auth.user)

    return useRoutes([
        {
            path:'*',
            element:<NotFoundPage />
        },
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
        {
            path:'/checkout',
            element:<CheckoutPage />
        },
        {
            path:'/categories',
            element:<Layout />,
            children:[
                {
                    path:'tables',
                    element:<TablePage/>
                },
                {
                    path:'beds',
                    element:<BedPage/>
                },
                {
                    path:'kitchens',
                    element:<KitchenPage/>
                },
                {
                    path:'chairs',
                    element:<ChairPage/>
                },
            ]
        }
    ])
}