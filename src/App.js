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
          <Route
            path="https://mytsak7444.github.io/Game-Store-React/"
            element={<HomePage />}
          />
          <Route path="https://mytsak7444.github.io/Game-Store-React/app">
            <Route path=":title" element={<GamePage />} />
          </Route>
          <Route
            path="https://mytsak7444.github.io/Game-Store-React/order"
            element={<OrderPage />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
