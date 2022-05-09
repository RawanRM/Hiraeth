//NOTE: HERE "HOME" is considered as an HTML tag just like <h1>/<img> etc, so when using it, 
//check line 25 in App.js
function Home(){
    return(
        <div className="App" style={{backgroundImage: 'url("https://cdn.wallpapersafari.com/49/65/XExWvy.jpg")'}}>
      <h1>🌱 H I R A E T H 🌱</h1>
      <h4>Welcome Back Home</h4>
      <img src="https://i.pinimg.com/736x/29/ce/df/29cedfa5902243d83f9d5b0f2cc1c8a2.jpg" width="700"/>
       </div>
    );
}
export default Home;