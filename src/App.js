import logo from "./logo.svg";
import "./App.css";
//note: here im importing the ARRAY "products"
// import products from "./products"
import Home from "./components/Home"
import MenuList from "./components/MenuList";
// import Menu from "./components/MenuList";
import MenuItem from "./components/MenuItem";
//NOTE: import turns GREY if it is NOT USED in the code below.


function App() {
  //this is the LIST COMPONENT
  // const menItems = products.map(item => <Menu image ={item.image} name={item.name} price={item.price} />)
  return (
    <>
    <Home/>
    <MenuList/>
    <MenuItem/>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   }
// })

export default App;
