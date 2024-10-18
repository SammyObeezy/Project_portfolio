import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../App";
import DashboardLayout from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Lazy-loaded components
const NotFound = React.lazy(() => import("../components/NotFound"));
const Home = React.lazy(() => import("../Home/Home"));
const Shop = React.lazy(() => import("../shop/Shop"));
const About = React.lazy(() => import("../components/About"));
const Blog = React.lazy(() => import("../components/Blog"));
const SingleBook = React.lazy(() => import("../shop/SingleBook"));
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));
const UploadBook = React.lazy(() => import("../Dashboard/UploadBook"));
const ManageBooks = React.lazy(() => import("../Dashboard/ManageBooks"));
const EditBooks = React.lazy(() => import("../Dashboard/EditBooks"));
const SignUp = React.lazy(() => import("../components/SignUp"));
const Login = React.lazy(() => import("../components/Login"));
const Logout = React.lazy(() => import("../components/Logout"));
const Contact = React.lazy(() => import("../components/Contact"));
const FAQs = React.lazy(() => import("../components/Faqs"));
const TermsOfUse = React.lazy(() => import("../components/Terms"));
const PrivacyPolicy = React.lazy(() => import("../components/Privacy"));

const BASE_URL = "http://localhost:5000"; // Hardcoded base URL

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/faqs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FAQs />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/terms",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TermsOfUse />
          </Suspense>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SingleBook />
          </Suspense>
        ),
        loader: ({ params }) => fetch(`${BASE_URL}/book/${params.id}`),
      },
      {
        path: "*", // Catch-all for undefined routes
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UploadBook />
          </Suspense>
        ),
      },
      {
        path: "/admin/dashboard/manage",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ManageBooks />
          </Suspense>
        ),
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditBooks />
          </Suspense>
        ),
        loader: ({ params }) => fetch(`${BASE_URL}/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "logout",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Logout />
      </Suspense>
    ),
  },
]);

export default router;
