
/* BEGIN EXERCISE 1 */
// var user = {
//     name: 'mr smith',
//     profession: 'dandy fella',
//     age: 100000,
//     //<---add reset() method here
//     reset:function(){
//         for ( var prop in user){
//             user[prop] = null;
//         }
//     }
// }


// user.reset();

// console.log(user.name); //null
// console.log(user.profession); //null
// console.log(user.age); //null

// for (prop in user){
//     console.log(prop);
// }

/************************************************************************/

/*var House = {
    rooms: 6,
    bedrooms: 4,
    bathrooms: 2,
    deck: 1,
    windows: 10,
    logRooms:function(){
        console.log("Bedrooms: " + this.bedrooms + " Bathrooms: " + this.bathrooms);
    }
}

var mansion = Object.create(House);
mansion.bedrooms = 8;

var castle = Object.create(mansion);
castle.bathrooms = 5;
castle.bedrooms = 10;

House.logRooms();
mansion.logRooms();
castle.logRooms();
console.log(mansion.windows);
console.log(typeof(castle));
console.log(castle.hasOwnProperty("windows"));*/

/**********************************************************************/

var House = {
    rooms: 6,
    bedrooms: 4,
    bathrooms: 2,
    deck: 1,
    windows: 10,
    logRooms:function(){
        console.log("Bedrooms: " + this.bedrooms + " Bathrooms: " + this.bathrooms);
    }
}

for (var prop in House){
    var value = House[prop];
    console.log(House[prop]);
}
