import products from "../products";
// const keyId = products.id;
function MenuItem(props){
    
    return(
      <div>
           <img src = {props.image} height={150} width={150}/>
           <h4>{props.name}</h4>
           <p>{props.price}</p>

      </div>
    );
}
export default MenuItem;

