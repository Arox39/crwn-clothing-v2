import Home from "./routes/home/home.component";
import Nav from "./components/nav/nav.component";

import { Routes, Route} from "react-router-dom";

const Shop = () => { return <div>Shop</div>}
const Signin = () => { return <div>sign-in</div>}


const App = () => {
  
  return(
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  )
};

export default App;
