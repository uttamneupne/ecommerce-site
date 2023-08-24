import { Carousel } from "react-bootstrap"

export const  SliderComponent = ({data,title,showCaption=false}) => {
    return(<>
        
     <Carousel>
      {
        data && data.map ((item,index) => (
            <Carousel.Item interval={500} key={index}>
        <img
          className="d-block w-100"
          src={item.image}
          alt={item.title}
        />
        {
            showCaption ? <>
             <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item?.slogan}</p>
        </Carousel.Caption>
        </> :<></>
        }
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        ))
      }
      
      
    </Carousel>
    </>)
}