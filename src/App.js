import logo from "./logo.svg";
import "./App.css";
//note: here im importing the ARRAY "products"
import products from "./products"

function Menu(props){
  return(
    
    <div>
      <img src = {props.image}/>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>

  );
}
function App() {
  const menItems = products.map(item => <Menu image ={item.image} name={item.name} price={item.price} />)
  return (
    <div className="App">
      <h1>H I R A E T H</h1>
      <h4>Welcome Back Home</h4>
      <img src="https://i.pinimg.com/736x/29/ce/df/29cedfa5902243d83f9d5b0f2cc1c8a2.jpg"/>
      {menItems}
    </div>
  );
}

export default App;
