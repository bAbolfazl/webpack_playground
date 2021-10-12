import { sum } from "./utils.js";

import "../css/mainStyles.scss";

const root = document.querySelector("#root");

root.textContent = sum(10, 12);
