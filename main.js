

let user = {
    // Properties
    firstName: "zouhair",
    lastName: "begdar",
    // nested object
    adresse: {
        usa: "ohayo",
        morocco : "oualidia",
     },

    //  Methode 
    getFullName: function ()
    {
        return `Full Name : ${user.firstName} ${user.lastName}`
    }

};
console.log(user.firstName);  //Dote Notation 
console.log(user.adresse.usa);  //Dote Notation 
console.log(user["lastName"]); // Bracket Notation
console.log(user["adresse"]["usa"]); // Bracket Notation


console.log(user.getFullName());