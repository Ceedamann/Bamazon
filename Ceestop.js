var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log(" ");
    console.log("<<<<<<<<<<<<<<Welcome to CeeStop!!>>>>>>>>>>>>>>>");
    console.log(" ");
    menuchoice();

});
// create function to prompt user on store options///
function menuchoice() {
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Make a purchase..",
                "Quit"
            ]
        })
        .then(function (ans) {
            switch (ans.choice) {
                case "Make a purchase..":
                    loadProducts();
                    break;
                case "Quit":
                    connection.end();
                    break;
            }
        });
}
//create function to load store products and ask user what they would like to purchase//
function loadProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
        inquirer
        //prompt user to select id from table//
        .prompt([{
            name: "choice",
            type: "input",
            message: "What is the ID of the item you would like to purchase?",
            validate:function(value){
                if(isNaN(value)=== false){
                    return true;
                }
                return false;
            }
        },
        //prompt how many would like to purchase///
        {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?",
            validate:function(value){
                if (isNaN(value)=== false){
                    return true;
                }
                return false;
            }
        }
    ])
    // checking to see if item is in stock///
    .then(function(ans){
        connection.query("SELECT * FROM products WHERE ?", {id:ans.choice},function(err,res){
            var stock = res[0].stock_quantity;
            var bought = ans.amount;
            var amountDue = res[0].price * bought;
            if (stock >= bought){
                //updating the database//
                var stockLeft = stock - bought;
                connection.query(
                    "UPDATE products SET ? WHERE ?",[{
                        stock_quantity: stockLeft
                    },
                    {
                        id: ans.choice
                    }
                ],
                function(err){
                    if (err) throw err;
                    console.log("Purchse completed...\n ");
                    console.log("You Owe... $ " + amountDue);
                    
                    menuchoice();
                })
            }
            else{
                console.log("Sorry waiting for new shipment!!");
                menuchoice();
                
            }
        });
    });

    });
}