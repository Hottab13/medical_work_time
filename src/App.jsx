import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import { Admin } from "./pages/Admin";
import { DoctorOffice } from "./pages/DoctorOffice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/*<Route path="*" element={<Errorpage />} />
      <Route index path="/" element={<Navigate to="events" replace />} />
     
  <Route path="event/:id" element={<EventProfilepage />} />*/}
      <Route path="admin" element={<Admin />} />
      <Route path="doctor_office" element={<DoctorOffice />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
