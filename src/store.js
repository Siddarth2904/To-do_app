import { createStore } from "redux";
import rootreducers from "./redux/reducer/main";

const store=createStore(
    rootreducers
);

export default store;
