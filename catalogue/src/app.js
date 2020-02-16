
const express = require("express");
const cors = require("cors");

// Import ORM for Product
const Product = require("./routers/product");
const Order = require("./routers/order");
const OrderDetails = require("./routers/orderDetails");
const Customer = require("./routers/customer");

// Create express instance
const app = express();

// Adds json "body" field to the "request" parameter via middleware.
app.use(express.json());
app.use(cors());

// Add routers to express
app.use(Product);
app.use(Order);
app.use(OrderDetails);
app.use(Customer);

// Export for use by index.js
module.exports = app;

//
//
// var cart = [];
// var theuser = null;
// var theuserid = null;
// var server = http.createServer(function (request, response) {
//
//     var path = url.parse(request.url).pathname;
//     var url1 = url.parse(request.url);
//     if (request.method == 'POST') {
//         switch (path) {
//
//
//             /* TODO */
//             case "/newProduct":
//
//
//                 break;
//         } //switch
//     } else {
//         switch (path) {
//
//
//             case "/getProducts"    :
//                 console.log("getProducts");
//                 response.writeHead(200, {
//                     'Content-Type': 'text/html',
//                     'Access-Control-Allow-Origin': '*'
//                 });
//                 var query = "SELECT * FROM products ";
//
//
//                 db.query(
//                     query,
//                     [],
//                     function (err, rows) {
//                         if (err) throw err;
//                         console.log(JSON.stringify(rows, null, 2));
//                         response.end(JSON.stringify(rows));
//                         console.log("Products sent");
//                     }
//                 );
//
//                 break;
//             case "/getProduct"    :
//                 console.log("getProduct");
//                 var body = "";
//                 request.on('data', function (data) {
//                     body += data;
//                 });
//
//                 request.on('end', function () {
//                     var product = JSON.parse(body);
//                     response.writeHead(200, {
//                         'Content-Type': 'text/html',
//                         'Access-Control-Allow-Origin': '*'
//                     });
//                     console.log(JSON.stringify(product, null, 2));
//                     var query = "SELECT * FROM products where productID=" +
//                         product.id;
//
//
//                     db.query(
//                         query,
//                         [],
//                         function (err, rows) {
//                             if (err) throw err;
//                             console.log(JSON.stringify(rows, null, 2));
//                             response.end(JSON.stringify(rows[0]));
//                             console.log("Products sent");
//                         }
//                     );
//
//                 });
//
//
//                 break;
//
//
//         }
//     }
//
//
// });
//
// server.listen(3002);
