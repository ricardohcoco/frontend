import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Home from "../HomeDishes/Home"
import { Container} from './styles'
import AddDishesPage from "../AddDishes/AddDishes"
import AddDishes from "../../components/AddDishes/AddDishes"
import DishesDetails from "../DishesDetails/DishesDetails"

function Details() {
  
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-dishes" element={<AddDishesPage />} />
          <Route path="/add-dishes-post" element={<AddDishes />} />
          <Route path="/dishes-details/:id" element={<DishesDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Details
