import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "../Layout/homeLayout"
import MainPage from "../Pages/Home/mainPage"
import SignIn from "../Pages/Home/signIn"
import SignUp from "../Pages/Home/signUp"
import Product from "../Pages/Home/productPage"
import ProductDetail from "../Pages/Home/ProductDetail"
import DashBoard from "../Layout/dashBoardLayout"
import Guarantee from "../Pages/Home/guaranteePage"
import Refund from "../Pages/Home/refundPage"
import ListUser from "../Pages/DashBoard/listUser"
import ListRoles from "../Pages/DashBoard/listRoles"
import MainDash from "../Pages/DashBoard/dashBoardPage"
import ListStatff from "../Pages/DashBoard/listStatff";
import TimeKeeping from "../Pages/DashBoard/timeKeeping"
import Profiles from "../Pages/DashBoard/proFiles"
import Setting from "../Pages/DashBoard/setting"
import ListCategory from "../Pages/DashBoard/listCategory"
import ListProduct from "../Pages/DashBoard/listProduct"


export default function HomePage() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Product/:categoryName" element={<Product />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/Guarantee" element={<Guarantee />} />
            <Route path="/Refund" element={<Refund />} />
          </Route>
          <Route element={<DashBoard />}>
            <Route path="/MainDash" element={<MainDash />} />
            <Route path="/ListUser" element={<ListUser />} />
            <Route path="/ListRoles" element={<ListRoles />} />
            <Route path="/ListStaff" element={<ListStatff />} />
            <Route path="/TimeKeeping" element={<TimeKeeping />} />
            <Route path="/Profiles" element={<Profiles />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/ListCategory" element={<ListCategory />} />
            <Route path="/ListProduct" element={<ListProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
