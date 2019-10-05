var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
   console.log(" ");
   console.log("<<<<<<<<<<<<<<Welcome to Bamazon!!>>>>>>>>>>>>>>>");
   console.log(" ");
   
   
});

connection.connect(function(err){
  connection.query("SELECT * FROM products", function(err, res){
    if(err){
      console.log("error connet"+ err.stack);      
    }
    loadProducts()
  })
})
function loadProducts(){
  connection.query("SELECT * FROM products", function(err,res){
    if(err) throw err;
    console.table(res);
    whichItem();
  })
}

//Prompt the customer for a product ID//
function whichItem(){
  inquirer
  .prompt({
    name:"userPick",
    type:"input",
    message: "What is the ID of the item you would like to purchase?"
  }).then(function(ans){
    connection.query("SELECT product_name,price FROM products WHERE id=?", [ans.userPick],function(err,res){
      if(err) throw err;
      console.table(res);
      howMany();
    })
  })
};
//Prompt customer for quantity
function howMany(){
inquirer
.prompt({
  name:"amount",
  type:"input",
  message: "How many would you like to purchase?"
}).then(function(ans){
connection.query("SELECT * FROM products WHERE ?", {id: ans.amount}, function(err, res){
  var stock = res[0].stock_quantity;
  var bought = ans.amount;
  if(stock >= bought){
    console.log("Your in luck we have "+ stock + " in stock!!" );
    makePurchase();
     }else{
       console.log("Sorry waiting for new shipment...");
       connection.end();
       
     }
  
   
})

})

}
//purchase function to buy item//
function makePurchase(){

}
//check inventory to see if the item exist///
function checkInventory(){

}
//check to see if user wants to quit (optional)//