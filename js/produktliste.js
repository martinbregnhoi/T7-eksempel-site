const url = `https://kea-alt-del.dk/t7/api/products`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukter);
}

function visProdukter(data) {
  console.log(data);
}

getProduct();
