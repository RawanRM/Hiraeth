import products from "../products";
import MenuItem from "./MenuItem";

// function Menu(props){
//     return(
      
//       <div>
//         <img src = {props.image} height={150} width={150}/>
//         <h4>{props.name}</h4>
//         <p>{props.price}</p>
//       </div>
  
//     );
//   }

function MenuList(){
    const menItems = products.map(item => <MenuItem key={item.id} image ={item.image} name={item.name} price={item.price} />);
    return (
        <div >
            {menItems}
        </div>
    );
}

export default MenuList;