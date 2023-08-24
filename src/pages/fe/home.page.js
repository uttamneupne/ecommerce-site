import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";

//import { HomeMenu } from "./components/menu.component";
import { HomeBannerSlider } from "./components/sliders.component";
import { HomeCategoryGrid } from "./components/category-list-grid.component";
import { HomeBrandGrid } from "./components/brand-list-grid.component";
//import AbstractModalHeader from "react-bootstrap/esm/AbstractModalHeader";
//import { getAllByAltText } from "@testing-library/react";
//import { useState } from "react";

const HomePage = (props) => {

// let [loggedInUser] = useState({
//   name: "Uttam Neupane",
//   _id: 123,
//   image: ""
// })

  return (<> 

    <HomeBannerSlider/>

    <HomeCategoryGrid/>
    
    <HomeBrandGrid/>
  
  </>)

}

export default HomePage;


