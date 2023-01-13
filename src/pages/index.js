import React from "react"
import ShopLayout from "./shop/ShopLayout";
import AccountLayout from "./account/AccountLayout";
import AddressLayout from "./account/AddressLayout";
import Layout from "./categories/Layout";

const HomePage = React.lazy(() => import('./home/Home'));
const ShopPage = React.lazy(() => import('./shop/Shop'));
const WishListPage = React.lazy(() => import('./wishlist/WishList'));
const SignInPage = React.lazy(() => import('./authpage/SignIn'));
const SignUpPage = React.lazy(() => import('./authpage/SignUp'));
const CartPage = React.lazy(() => import('./cart/Cart'));
const ProductPage = React.lazy(() => import('./shop/Product'));
const DetailsPage = React.lazy(() => import('./account/Details'));
const OrdersPage = React.lazy(() => import('./account/Orders'));
const DashboardPage = React.lazy(() => import('./account/Dashboard'));
const AddressPage = React.lazy(() => import('./account/Address'));
const BillingAddressPage = React.lazy(() => import('./account/BillingAddress'));
const ShippingAddressPage = React.lazy(() => import('./account/ShippingAddress'));
const CheckoutPage = React.lazy(() => import ('./checkout/Checkout'))
const BedPage = React.lazy(() => import('./categories/Beds'))
const ChairPage = React.lazy(() => import('./categories/Chair'))
const TablePage = React.lazy(() => import('./categories/Table'))
const KitchenPage = React.lazy(() => import('./categories/Kitchen'))

export {
    HomePage,
    SignInPage,
    SignUpPage,
    ShopPage,
    WishListPage,
    CartPage,
    CheckoutPage,
    ShopLayout,
    ProductPage,
    AccountLayout,
    DetailsPage,
    OrdersPage,
    DashboardPage,
    AddressPage,
    BillingAddressPage,
    ShippingAddressPage,
    AddressLayout,
    BedPage,
    ChairPage,
    TablePage,
    Layout,
    KitchenPage
}