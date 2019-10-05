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
// created function to prompt user on store options///
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