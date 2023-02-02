const url = `https://kea-alt-del.dk/t7/api/products?limit=50&start=2`;

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukter);
}

function visProdukter(data) {
  const skabelon = document.querySelector("template").content;
  const container = document.querySelector("main");
  data.forEach((produkt) => {
    const kopi = skabelon.cloneNode(true);
    console.log({ container });
    kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
    kopi.querySelector("img").alt = produkt.productdisplayname;
    kopi.querySelector("h3").textContent = produkt.productdisplayname;
    kopi.querySelector(".price").textContent = produkt.price;
    kopi.querySelector("a").href = `product.html?id=${produkt.id}`;
    if (produkt.soldout) {
      kopi.querySelector("article").classList.add("soldOut");
    }
    if (produkt.discount) {
      kopi.querySelector("article").classList.add("onSale");
      kopi.querySelector(".discounted p").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
      kopi.querySelector(".discounted p+p span").textContent = produkt.discount;
    }
    container.appendChild(kopi);
  });
}

getData();
