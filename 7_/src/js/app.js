import { sum } from "./utils.ts";

import "../css/mainStyles.scss";

const root = document.querySelector("#root");

root.textContent = sum(10, 12);
