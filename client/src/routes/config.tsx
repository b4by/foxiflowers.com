import { lazy } from "react";
import routes from "./routes";

export default [
  {
    path: routes.HOME,
    page: lazy(() => import("@/pages/HomePage/HomePage")),
  },
  {
    path: routes.PRODUCTS,
    page: lazy(() => import("@/pages/ProductsPage/ProductsPage")),
  },
  {
    path: routes.PRODUCT,
    page: lazy(() => import("@/pages/ProductPage/ProductPage")),
  },
  {
    path: routes.CART,
    page: lazy(() => import("@/pages/ShoppingCartPage/ShoppingCartPage")),
  },
  {
    path: routes.DELIVERY,
    page: lazy(() => import("@/pages/DeliveryPage/DeliveryPage")),
  },
  {
    path: routes.PAYMENTS,
    page: lazy(() => import("@/pages/PaymentsPage/PaymentsPage")),
  },
  {
    path: routes.ABOUT,
    page: lazy(() => import("@/pages/AboutPage/AboutPage")),
  },
  {
    path: routes.CONTACTS,
    page: lazy(() => import("@/pages/ContactsPage/ContactsPage")),
  },
  {
    path: routes.PRIVACY,
    page: lazy(() => import("@/pages/PrivacyPage/PrivacyPage")),
  },
  {
    path: routes.POPD,
    page: lazy(() => import("@/pages/PopdPage/PopdPage")),
  },
  {
    path: routes.TERMS,
    page: lazy(() => import("@/pages/TermsPage/TermsPage")),
  },
];
