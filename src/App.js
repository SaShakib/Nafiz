import Products from './Products';
import AddProduct from './AddProduct';
import "./CSS/App.scss";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route index element={<Products />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
