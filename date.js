// module.exports.getDate = getDate; We can use a shortcut as specified in next line
exports.getDate = getDate;

function getDate(){

const today = new Date(); // javascript 

 const options = {
 	weekday: "long",
 	day: "numeric",
 	month: "long"
 }
   
    return today.toLocaleDateString("en-US", options);
 
};

// Another way of writing this eg :

module.exports.getDay= getDay;

var getDay = function(){

const today = new Date(); // javascript 

 const options = {
 	weekday: "long"
 }
   
   return today.toLocaleDateString("en-US", options);
   
};

//Another way:

module.exports.getMonth= function(){

let today = new Date(); // javascript 

 let options = {
 	month: "long"
 }
   
   return today.toLocaleDateString("en-US", options);
   
};