import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./fe/home.page";
import LoginPage from "./fe/auth/login.page";
import RegisterPage from "./fe/auth/register.page";
import { ErrorPage } from "./error.page";
import CategoryDetail from "./fe/category-detail.page";
import HomePagelayout from "./layouts";
import Adminlayout from "./layouts/admin.layout";

const Routing = () => {
    return (<>
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePagelayout />}>
            <Route index element={<HomePage/>}/>
            <Route path ="login"  element={<LoginPage/>}/>
            <Route path ="register"  element={<RegisterPage/>}/>
            <Route path ="category/:catSlug"  element={<CategoryDetail/>}/>
            <Route path ="*"  element={<ErrorPage/>}/>
          </Route>

         
         <Route path="/admin" element={<Adminlayout />}></Route>
        </Routes>
        </BrowserRouter>
    </>)

}

export default Routing;