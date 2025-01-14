import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserList from "./UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UserList />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
]);
export default router;
