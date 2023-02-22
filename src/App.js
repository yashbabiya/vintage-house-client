import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import BuyerDashboard from "./components/Dashboards/BuyerDashboard";
import SellerDashboard from "./components/Dashboards/SellerDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrPage from "./pages/ErrPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import rootReducer from "./reducers";


function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard/seller" element={<SellerDashboard/>}/>
          <Route exact path="/dashboard/buyer" element={<BuyerDashboard/>}/>
          <Route exact path="/dashboard/admin" element= {<AdminDashboard/>}/>
          <Route path="*" element={<ErrPage/>}/>  
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
