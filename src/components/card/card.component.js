import { Card, } from "react-bootstrap"

const CardComponent = () => {
    return (
        <>
        <Card >
          <Card.Img variant="top" src="https://static-01.daraz.com.np/p/7393036f2eaf276a2cd5a813827a7fd5.png" />
          <Card.Body className="text-center">
            
             
            <Card.Title as ={"a"} className="h5" style={{textDecoration: "none", cursor:"pointer"}}>
              Card Title
              </Card.Title>
            
          </Card.Body>
        </Card>
        </>
    )
} 

export default CardComponent;
