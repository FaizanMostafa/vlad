import React from "react";
import { Provider } from 'react-redux';
import Navigation from "./navigation";
import store from "./redux/store";
import './App.css';
import "mdbreact";

export default function App() {
  return (
    <div className="homepage">
      <Provider store={store} >
        <Navigation />
      </Provider>
    </div>
  );
}
