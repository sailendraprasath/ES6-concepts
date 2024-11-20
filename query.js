let getListOfProducts = document.querySelector(".List-of-products");

function renderProducts(getProducts) {
  getListOfProducts.innerHTML = getProducts
    .map((singleproduct) => `<p>${singleproduct.title}</p>`)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();
    console.log(result);
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (error) {
    console.log("May error happens check the syntax", error);
  }
}
fetchListOfProducts();
