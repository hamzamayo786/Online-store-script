// -------------------------------------Sorting code here


function sortColumn(columnIndex) {
  var table = document.getElementById("myTable");
  var rows = Array.from(table.getElementsByTagName("tr")).slice(1);
  
  rows.sort(function(a, b) {
    var valueA = a.getElementsByTagName("td")[columnIndex].textContent;
    var valueB = b.getElementsByTagName("td")[columnIndex].textContent;
    return valueB.localeCompare(valueA);
  });

  // Remove existing rows from the table
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Reinsert the sorted rows into the table
  for (var i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
}


// ------------------------------------------For session control coding below


document.addEventListener('DOMContentLoaded', function (){
  const loginForm = document.getElementById('loginForm');
  const messageElement = document.getElementById('message');
  const logoutButton = document.getElementById('logoutButton');
  const tableBody = document.getElementById('table-body');
  const loading = document.getElementById('onload');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', username);

    messageElement.style.display = 'block';
    loginForm.style.marginTop = '0';
    logoutButton.style.display = 'block';
    loginForm.style.display = 'none';
  });

    loading.addEventListener('click', function () {
    // Clear the session
    tableBody.style.display = 'table-row-group';

  });

  logoutButton.addEventListener('click', function () {
    // Clear the session
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('username');

    messageElement.style.display = 'none';
    logoutButton.style.display = 'none';
    loginForm.style.display = 'block';
    loginForm.style.marginTop = '50px';
    loginForm.style.marginLeft = '25%';
    // document.write("logged out successfully");

  });



  // Check session status on page load
  if (sessionStorage.getItem('loggedIn') === 'true') {
    const loggedInUsername = sessionStorage.getItem('username');
     messageElement.style.display = 'block';
    loginForm.style.marginTop = '0';
    logoutButton.style.display = 'block';
    loginForm.style.display = 'none';
  }
});





// -------------------------------------------------------api connection coding




fetch('https://jsonplaceholder.typicode.com/todos')
.then((data)=>{
  return data.json();
  // console.log(data);
})
.then((objectdata)=>{
  // console.log(objectdata[1]);
  let tableData="";
  objectdata.map((values)=>{
    tableData += ` <tr>
           <td>${values.id}</td>
          <td>${values.title}</td>
          </tr>
    `;
  });
  document.getElementById("table-body").innerHTML = tableData;


})


// -------------------------------------------------------- All tested code below

// document.addEventListener('DOMContentLoaded', function () {
//   const tableBody = document.getElementById('table-body');

//   fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(dataWrapper => {
//     const jsonData = dataWrapper.data; // Adjust the key accordingly

//     jsonData.forEach(dataItem => {
//       // ... your code to populate the table
//       const row = document.createElement('tr');
//         row.innerHTML = `
//           <td>${dataItem.id}</td>
//           <td>${dataItem.title}</td>
//           <td>${dataItem.brand}</td>
//         `;
//         tableBody.appendChild(row);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// });




// document.addEventListener('DOMContentLoaded', function () {
//   const tableBody = document.getElementById('table-body');

//   // Fetch JSON data from API (replace with your API URL)
  // fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(jsonData => {
//       // Loop through JSON data and populate the table
//       jsonData.forEach(dataItem => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
          // <td>${dataItem.id}</td>
          // <td>${dataItem.title}</td>
          // <td>${dataItem.brand}</td>
//         `;
//         tableBody.appendChild(row);
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// });








// .then(products =>{
//   products.forEach(product =>{
//     const markup = ` <tr>
//                      <td>${product.id} </td>
//                      <td>${product.title} </td>
//                      <td>${product.description} </td>
//                      <td>${product.price} </td>
//                      <td>${product.discountPercentage} </td>

//                  </tr>`;
//         document.querySelector('tbody').insertAdjacentHTML('beforeend', markup);
//   });



    // let insert = document.querySelector("#data-output");
    // let out="";
    // // console.log(products);
    // let product;
    // for(product of products){
    //    out += `
    //             <tr>
    //                 <td>${product.id} </td>
    //                 <td>${product.title} </td>
    //                 <td>${product.description} </td>
    //                 <td>${product.price} </td>
    //                 <td>${product.discountPercentage} </td>

    //             </tr>
    // `; 
    // }
    // insert.innerHTML = out;
// })
// .catch(error => console.log(error));


// -------------------------------------Sorting code here

// function sort(){
//   const table = document.getElementById("myTable");
//   const headers = table.querySelectorAll("th button");

//   headers.forEach((header) => {
//     header.addEventListener("click", function(){
//       const columnIndex = Array.from(headers).indexOf(header);
//       const rows = Array.from(table.querySelectorAll("tbody tr"));

//       rows.sort((a, b)=>{
//         const aValue = a.querySelectorAll("td")[columnIndex].textContent;
//         const bValue = b.querySelectorAll("td")[columnIndex].textContent;
//         return aValue.localeCompare(bValue, {
//           numeric: true,
//         });
//       });
//       const tbody = table.querySelectorAll("tbody");
//       tbody.innerHTML="";
//       rows.forEach((row)=> tbody.appendChild(row));



//     });
//   });

// }

