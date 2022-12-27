import React from "react"
import SignUp from "./authpage/SignUp";
import SignIn from "./authpage/SignIn";
import Cart from "./cart/Cart";
import Product from "./shop/Product"
import ShopLayout from "./shop/ShopLayout";
import AccountLayout from "./account/AccountLayout";
import Address from "./account/Address";
import Dashboard from "./account/Dashboard"
import Orders from "./account/Orders";
import Details from "./account/Details"
import BillingAddress from "./account/BillingAddress";
import ShippingAddress from "./account/ShippingAddress";
import AddressLayout from "./account/AddressLayout";

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

export {
    HomePage,
    SignInPage,
    SignUpPage,
    ShopPage,
    WishListPage,
    CartPage,
    ShopLayout,
    ProductPage,
    AccountLayout,
    DetailsPage,
    OrdersPage,
    DashboardPage,
    AddressPage,
    BillingAddressPage,
    ShippingAddressPage,
    AddressLayout
}