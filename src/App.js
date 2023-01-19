import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
