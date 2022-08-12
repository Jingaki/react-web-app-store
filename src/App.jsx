import { useState }from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [userInput, setUserInput] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');
  const [products] = useState([
    {
      name: 'Huawei Mates',
      cost: '$280.00',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-s--.jpg'
    },
    {
      name: 'Sony Xperia Z5',
      cost: '$550.00',
      image: 'https://www.pdevice.com/wp-content/uploads/2015/09/Sony-Xperia-Z5-600x476.jpeg',
    },
    {
      name: 'Xiaomi Mi 41',
      cost: '$350.00',
      image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/T1C.d_BsJT1RXrhCrK.jpg',
    },
    {      
      name: 'Huawei G8 4G',
      cost: '$350.00',
      image: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/4A/87/rBVaWFzP4rmAU_baAAFa433xiGQ453.jpg',      
    },
    {      
      name: 'Iphone Rose Gold',
      cost: '$280.00',
      image: 'https://s13emagst.akamaized.net/products/2204/2203306/images/res_6a4c9591fc9ad83393c74081883d0e4c.jpg',      
    },
    {      
      name: 'Galaxy Core Prime',
      cost: '$399.00',
      image: 'https://www.kickmobiles.com/images/thumbs/0018697_samsung-galaxy-core-prime_808.jpeg',      
    },
    {      
      name: 'Apple Iphone 6S',
      cost: '$550.00',
      image: 'https://s13emagst.akamaized.net/products/2043/2042039/images/res_e93b547a99be92798ade765f1d7c5d02.jpg',      
    },
  ]);

  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) =>{
    setCart(cart.filter((product)=> product !== productToRemove));
  };

  const buyProduct = (productToBuy) =>{
    //navigateTo(PAGE_BUY);
    console.log("temp");
  }

  const clearList = () =>{
    setCart(cart.filter((products)=>null));
  }
  
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  

  const renderProducts = () => (
    <>
      <div class="container">
        <div class="row">
          <div class = "col-3 font-weight-bold">Col 1</div>
          <div class = "col-3">Col 1</div>
          <div class = "col-3">Col 1</div>
          <div class = "col-3">Col 1</div>
        </div>

        <h1> Products</h1>
        <div class="container">
          <div className = "products">
            <div class="row">
              {products.filter((val)=>{
                if(userInput ==""){
                  return val
                }else if(val.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())){
                  return val
                }

                
              }).map((product, idx) =>(             
                <div class = "col-3">
                  <div className="product" key ={idx}>
                  
                    <h3>{product.name}</h3>
                  
                    <h3>{product.cost}</h3>
                  
                    <h3><img src={product.image} width="100" alt='banana'/></h3>

                    <button class ="btn btn-secondary" onClick={() =>addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>                
              ))}
            </div>            
          </div>
        </div>
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <div class="container">
        <div className = "products">
          <div class="row">
            {cart.filter((val)=>{
                if(userInput ==""){
                  return val
                }else if(val.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())){
                  return val
                }

                
              }).map((product, idx) =>(
              <div class = "col-3">
                <div className="product" key ={idx}>

                  <h3>{product.name}</h3>
                  
                  <h3>{product.cost}</h3>
                  
                  <h3><img src={product.image} width="100" alt='banana'/></h3>
                  
                  <img class ="btn btn-default" src = "https://www.svgrepo.com/show/79440/delete-button.svg" 
                  alt='banana' width="100" onClick={() =>removeFromCart(product, idx)}></img>     
                  
                  <img class ="ImgBtn" src = "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                  alt='banana' width="100" onClick={() =>buyProduct(product)}></img>  
                </div>
              </div>
            ))}
          </div>   
        </div>
      </div>
      </>
  );

  return (
    <div className="App">
      <div class="menu" >
        
        <button>Home</button>
        <button>All brands</button>
        <button>Latest</button>
        <button>Featured</button>
        <button>About</button>
        <button>Blog</button>
        <button>Contact</button> 
        
      </div>   
      <header class = "navbar-right">
        
          <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
            Products ({products.length})
          </button>
          <button onClick={() => navigateTo(PAGE_CART)}>
            My Whishlist
          </button>
        
      </header>
      
        <button onClick={() => clearList()}>
            Clear List
        </button>
        <form>
        <input
          placeholder="Search"
          value={userInput}
          onChange={handleChange}
        />
      </form>

           
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()} 
      <footer>Contact info + btns</footer>

    </div>
  );
}

export default App;
