import {products} from './products.jsx';
import { useParams } from 'react-router-dom';   
function ProductDetails(){
    const {id} = useParams();
    const product = products.find(product => product.id === parseInt(id));
    return(
        <div style={{height:'100%',width:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
            <img src={product.image} alt={product.name} style={{objectFit:'contain', width:'auto', height:'50%', padding:'1rem'}}/>
            <div style={{color:'black', height:'50%', width:'50%', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', padding:'1rem'}}>
                <h1 style={{color:'black', fontSize:'1.5rem'}}> {product.name} </h1>
                <p>Price: ${product.price.toFixed(2)}</p>
                <button className='hoverColor' style={{padding:'1rem', borderRadius:'5px'}}>Add to Cart</button>
            </div>
        </div>
    )

    
}
export default ProductDetails;