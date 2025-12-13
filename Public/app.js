const productForm = document.getElementById("productForm")
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let price = Number(document.getElementById("price").value);
      let qty = Number(document.getElementById("qty").value);

      const total = price * qty;

      const obj = { name, price, qty, total };
      // const form = new FormData(productForm);
      // const obj = Object.fromEntries(form.entries())
      obj.total = obj.price * obj.qty;
      let products = JSON.parse(localStorage.getItem("product")) || [];

      products.push(obj);

      localStorage.setItem("product", JSON.stringify(products));
      productForm.reset()

      // const ls = localStorage.setItem("product", JSON.stringify(obj));
      // const item = JSON.parse(localStorage.getItem("product"));
      // console.log(item, typeof "item");

      const tbody = document.getElementById("tbody");
      tbody.innerHTML = "";
      products.forEach(element => {
        tbody.innerHTML += `
                     <tr>
                       <td>${element.name}</td>
                       <td>${element.price}</td>
                       <td>${element.qty}</td>
                       <td>${element.total}</td>
                     </tr>
                   `;
      });
    });