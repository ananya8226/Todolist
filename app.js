const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

console.log(date);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const items =["Buy Food", "Cook Food", "Eat Food"];
const workItems=[];  // when we declare an arrayas as 'const', we can push new values to array but we can't assign it another array. 

app.get("/", function(req, res){

	const day = date.getDate();
	res.render("list", {listTitle: day, newListItems:items});

});

app.post("/", function(req, res){
    const item = req.body.newItem;
    if(req.body.list === "Work"){ //since the post action of the form is defined on "/", so on adding items it comes to this section and adds items to items list, so we need to check and add items to their respective lists.
    	workItems.push(item);
    res.redirect("/work");
    }
    else{
    items.push(item);
}
	//We can't render newListItem here bcoz when we reload our site, it will be inside app.get area
	res.redirect("/");
	//item is initialised in post method so on redirecting it will go back to get method and display item 

});

app.get("/work", function(req, res){
	res.render("list", {listTitle: "Work List", newListItems:workItems});
});

app.post("/work", function(req, res){
	const item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});


app.listen(3000, function(){
	console.log("Server startrd on port 3000");
});