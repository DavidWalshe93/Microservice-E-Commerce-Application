// Created by David Walshe on 16/02/2020

const getProducts = () => {
    $.ajax({
        dataType: "json",
        url: "http://localhost:3002/getProducts",
        success: (data) => {
            displayProducts(data, "products")
        }
    })
};

const displayProduct = (data) => {
    $('#productTable').bootstrapTable("load", data);
};

// const displayProducts = (data) => {
//     let headers = [
//         "Product Name", "Price", "Picture", "Quantity", "Buy Button"];
//     let table = "<div class='container-fluid'>";
//     table += "<table class=\"table table-striped\">";
//     table += "<thead><tr>";
//     headers.forEach(header => {
//         table += '<th >' + header + '</th>';
//     });
//     table += "</tr></thead>";
//     table += "<tbody>";
//     data.forEach(product => {
//         table += "<tr>"
//         table += "<td>" + product.name + "</td>";
//         table += "<td>" + product.price + "</td>";
//         table += "<td><img src='" + product.image + "' style='width:104px; height:100px; '</td>";
//         table += "<td>quantity <input type='text' value='1' name='quantity'" + product.productID +
//             " id='quant'" + product.productID + "></td>";
//         table += "<td> <button></button>
//         table += "</tr>"
//     });
//     table += "</tbody>";
//
//
// };