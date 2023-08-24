
import { useState,useEffect } from "react"
import { SliderComponent } from "../../../components/slider/slider.component"
import { bannerData } from "../../mock.data"

export const HomeBannerSlider = ()=> {
  //data
  let [data, setData] = useState()

  useEffect(() =>
  {
    //todo: api consume
   

    setData(bannerData)
  }, [])
    return(<>
      <SliderComponent data={data} title="" showCaption={true} />
    </>)
}   

