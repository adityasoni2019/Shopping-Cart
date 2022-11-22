import { Row, Col} from "react-bootstrap";
import { productArray, getProductData } from "../productStore";
import ProductCard from "../Components/product_card";

function Store(){
    return (
        <>
            <h1 align = "center" className="p-3">Welcome to the store</h1>
            
            <Row ex = {1} md = {4} className = "g-4">
                {productArray.map((product, idx) => (
                    <Col align = "center" key= {idx}>
                        <ProductCard product = {product}/>
                    </Col>
                ))}
            </Row>
            
        </>
    )
}

export default Store;