// const shopData = async (url) => {
//     try {
//     const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyYTYyZWFhY2FhMjAwMTU1MmE1OGUiLCJpYXQiOjE2MzU5NTIxNzQsImV4cCI6MTYzNzE2MTc3NH0.r6UjMr4j4TPX6MjOXPj-pP_7YwXBiQtSDlt1HroH9aw"
//         }
//     })
//     console.log(response)

//     if (!response.ok) {
//         throw "Something went wrong"
//     }
    
//     const body = await response.json()

//     return body

//     } catch (error) {
//         alert('Error:' + error)
//     } finally {
//         console.log('Finally!')
//     }
// }

// const displayProduct = (array) => {
//     const ul = document.getElementById("currentProduct")
//     ul.innerHTML = ""

//     if (array) {
//         array.forEach(product => {
//             const li = document.createElement("li")
//             li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-item-center")
//             li.innerHTML = `<span>$(product.name)</span><span class="badge badge-dark">$(product.price)€</span>`

//             ul.appendChild(li)
//         })
//     }
// }

// window.onload = async () => {
//     const url = 'https://striveschool-api.herokuapp.com/api/product/'

//     const products = await shopData(url)
//     displayProduct(products)


// }

<script>
    const BASE_URL = "https://striveschool-api.herokuapp.com/api/product";
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyYTYyZWFhY2FhMjAwMTU1MmE1OGUiLCJpYXQiOjE2MzU5NTIxNzQsImV4cCI6MTYzNzE2MTc3NH0.r6UjMr4j4TPX6MjOXPj-pP_7YwXBiQtSDlt1HroH9aw",
    });
    const getProducts = (callback) => {
      fetch(BASE_URL, { headers })
        .then((res) => res.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    };
    window.onload = function () {
      getProducts((error, data) => {
        console.log(data, error)
        if (error) {
          console.log({ error });
        } else {
          const content = document.querySelector(".card-columns");
          content.innerHTML = "";
          data.forEach((product) => {
            content.innerHTML += `<div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
               ${product.description}
            </p>
          </div>
        </div>`;
          });
        }
      });
    };
  </script>