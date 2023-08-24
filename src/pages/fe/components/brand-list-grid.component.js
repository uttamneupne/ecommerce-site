import { Container,Row,Col } from "react-bootstrap"
import { GridList } from "../../../components/grid/grid-6-col.component"
export const HomeBrandGrid = () => {
    return(<>
    <Container>
      <Row>
        <Col className="bg-light customeheader" >
        <h4> Brandlogo.</h4>
        </Col>
      </Row>
      <hr/>
      <Row>
        <GridList/>
        <GridList/>
        <GridList/>
        <GridList/>
        <GridList/>
        <GridList/>
      </Row>
    </Container>
    </>)
}