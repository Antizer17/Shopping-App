

function ProductPage(){
    
const products = [
    {
        id: 1,
        name: "Asus ROG Azoth Extreme RGB Tri-Mode Wireless Mechanical Gaming Keyboard",
        price: 299.99,
        image: "https://www.startech.com.bd/image/cache/catalog/keyboard/asus/rog-azoth-extreme/rog-azoth-extreme-01-500x500.webp"
 },
    {
        id: 2,
        name: "Asus ROG Gladius III Wireless AimPoint Gaming Mouse",
        price: 199.99,
        image: "https://www.startech.com.bd/image/cache/catalog/mouse/asus/rog-gladius-iii-wireless-aimpoint/rog-gladius-iii-wireless-aimpoint-01-500x500.webp"
    },
    {
        id: 3,
        name: "AOC AGON PRO AG276QKD 26.5\" 480Hz QHD OLED Gaming Monitor",
        price: 399.99,
        image: "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-ag276qkd/agon-pro-ag276qkd-001-500x500.webp" 

}]



    return(
        <div style={{width:'100%',height:'100%'}}>
            <h1>Products</h1>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {products.map(product => 
            <div key={product.id} style={{border:'2px solid black',width:'10%',height:'auto', padding:'1rem', margin:'1rem', borderRadius:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price.toFixed(2)}</p>
                <img src={product.image} alt={product.name} style={{objectFit:'contain', width:'100%', height:'auto'}}/>
            </div> )}
            </div>

        </div>

    )
}
export default ProductPage





