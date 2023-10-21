import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { Admin } from "./pages/Admin";
import { DoctorOffice } from "./pages/DoctorOffice";
import { Loginpage } from "./pages/Loginpage";
import { RequireAuth } from "./hoc/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Loginpage />} />
      <Route
        path="admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />
      <Route
        path="doctor"
        element={
          <RequireAuth>
            <DoctorOffice />
          </RequireAuth>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
