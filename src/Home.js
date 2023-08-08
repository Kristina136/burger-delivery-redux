import "./App.css";
import Component from "./Filter/Component";
import Dishes from "./Dishes/Dishes";
import Cart from "./Cart/Cart";

function Home() {
  return (
    <div>
      <div className="free">
        <h3>
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/nolan/64/delivery.png"
            alt="delivery"
          />{" "}
          Free delivery from 30${" "}
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/nolan/64/delivery.png"
            alt="delivery"
          />{" "}
        </h3>
      </div>

      <div className="app">
        <div className="container">
          <Component />
          <Cart />
        </div>
        <div className="container">
          <Dishes />
        </div>
      </div>
    </div>
  );
}

export default Home;
