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
  })
};
//Prompt customer for quantity
function howMany(){

}
//purchase function to buy item//
function makePurchase(){

}
//check inventory to see if the item exist///
function checkInventory(){

}
//check to see if user wants to quit (optional)//