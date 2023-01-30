const url = `https://kea-alt-del.dk/t7/api/products?limit=25&start=20`;

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

/*
{
    "id": 1163,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2011,
    "usagetype": "Sports",
    "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
    "price": 895,
    "discount": null,
    "brandname": "Nike",
    "soldout": 0
}

 <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
        alt="Sahara Team India Fanwear Round Neck Jersey" />
      <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
      <p class="subtle">Tshirts | Nike</p>
      <p class="price"><span>Prev.</span> DKK 1595,-</p>
      <div class="discounted">
        <p>Now DKK 1560,-</p>
        <p>-34%</p>
      </div>
      <a href="product.html">Read More</a>
*/
