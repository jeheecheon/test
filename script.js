const getElementById = document.getElementById.bind(document);

const dvh = getElementById("dvh");
const svh = getElementById("svh");
const lvh = getElementById("lvh");

function handleResize() {
  dvh.innerHTML = `dvh height: ${dvh.offsetHeight}`;
  svh.innerHTML = `svh height: ${svh.scrollHeight}`;
  lvh.innerHTML = `lvh height: ${lvh.clientHeight}`;
}

handleResize();
window.addEventListener("resize", handleResize);
