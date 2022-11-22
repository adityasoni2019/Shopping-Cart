const productArray = [
    {
        id: "1", 
        title: "coffee", 
        price: 4.99
    },
    {
        id: "2", 
        title: "sunglasses", 
        price: 9.99
    },
    {
        id: "3", 
        title: "camera", 
        price: 34.99
    }
]

function getProductData(id){
    let productData = productArray.find(product_traverse=> product_traverse.id==id);

    if(productData == undefined) console.log("Product doesn't exist for id: " + id);

    return productData; 
}


export {productArray, getProductData}; 