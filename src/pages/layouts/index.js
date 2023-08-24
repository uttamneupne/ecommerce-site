import {Outlet} from "react-router-dom"
import { HomeMenu } from "../fe/components/menu.component"

const HomePagelayout = () => {
    return(<>

    <HomeMenu/>
    <Outlet />
    </>)
}

export default HomePagelayout;