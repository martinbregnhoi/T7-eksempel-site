const id = 1651;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

/* 
async function getProduct() {
  const resp = await fetch(url);
  const data = await resp.json();
  visProdukt(data);
} */

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = produkt.productdisplayname;
}

getProduct();
