(() => {
  "use strict";
  document.querySelector("#root").textContent = (function (...t) {
    let e = 0;
    return [10, 12].forEach((t) => (e += t)), e;
  })();
})();
