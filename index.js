function main() {
  const cuadrado = document.querySelector(".cuadrado-rojo");
  console.log(cuadrado);
  let posicion = cuadrado.offsetLeft;
  console.log("posicion original " + posicion);
  console.log(cuadrado);
  let nuevaPo = parseInt(posicion);
  document.addEventListener("keydown", (event) => {
    let key = event.key;
    console.log(key, "resultado " + posicion, nuevaPo); // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (key == "ArrowLeft") {
      nuevaPo--;
    }
    if (key == "ArrowRight") {
      nuevaPo++;
    }
    cuadrado.style.marginLeft = nuevaPo + "px";
  });
}
main();
