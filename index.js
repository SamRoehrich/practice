window.onload = function () {
  const body = document.getElementById("body");
  const elements = [];
  let x = 0;

  function handleClick(idx, e) {
    alert(`div ${idx} clicked`);
    e.stopPropagation();
  }

  for (let i = 1; i < 4; i++) {
    let element = document.createElement("div");
    element.id = `div${i}`;
    element.innerHTML = `div${i}`;
    element.addEventListener("click", (e) => handleClick(i, e));
    elements.push(element);
  }

  while (x < elements.length) {
    if (x + 1 < elements.length) {
      elements[x].appendChild(elements[x + 1]);
    }
    x++;
  }

  body.appendChild(elements[0]);
};
