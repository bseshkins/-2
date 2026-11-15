const swatches = document.querySelectorAll(".swatch");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const variant = swatch.dataset.mug;
    if (!variant) return;

    document.body.dataset.variant = variant;

    swatches.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === swatch));
    });
  });
});

const cartButton = document.getElementById("addToCart");

if (cartButton) {
  let revertTimer;

  cartButton.addEventListener("click", () => {
    cartButton.classList.add("is-added");
    cartButton.textContent = "Добавлено ✓";

    clearTimeout(revertTimer);
    revertTimer = setTimeout(() => {
      cartButton.classList.remove("is-added");
      cartButton.textContent = "В корзину";
    }, 2200);
  });
}
