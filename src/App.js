
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import ProductLIst from './Components/ProductLIst';
import ProductDetails from './Components/ProductDetails';


function App() {
  const products = [    
     {       id: 0,  
            imgSrc:         "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",   
            name: "AirPods",     
            price: "6,99 $",   
     },    
     {       id: 1,      
             imgSrc: "https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg", 
            name: "Smart watch",      
           price: "8,64 $",     
      },    
      {       id: 2,      
              imgSrc:         "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg", 
              name: "Iphone 11 ",      
              price: "150 $"
      }, 
      ]

  return (
    <div className="App">
      <Router>
       <Navigation/>
       <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/productlist" render={()=><ProductLIst products={products}/>}/>
      <Route path="/productlist/:id" render={(props)=><ProductDetails products={products} {...props}/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
