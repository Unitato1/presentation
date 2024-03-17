function change_bg_color() {
    const curr_color = document.body.style.backgroundColor;
    document.body.style.backgroundColor =
      curr_color === "black" ? "white" : "black";
    document.body.style.color = curr_color === "black" ? "black" : "white";
}
const btn = document.querySelector("#changecolor");
btn.addEventListener("click", change_bg_color);