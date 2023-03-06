import { Provider } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import GamePage from "./Components/GamePage/GamePage";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import OrderPage from "./Components/OrderPage/OrderPage";
import { store } from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app">
            <Route path=":title" element={<GamePage />} />
          </Route>
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
