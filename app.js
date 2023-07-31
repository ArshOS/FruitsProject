
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const guava = new Fruit({
    name: "Guava",
    rating: 9,
    review: "Great fruit."
});

guava.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     score: 10,
//     review: "Best"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Sour"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     score: 3,
//     review: "Bad"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("InsertMany seccess.")
//     }
// });

Fruit.find(function(err, fruits) {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
        console.log(fruit.name);
    });
});

Person.updateOne({name: "John"}, {favouriteFruit: guava}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Update success");
    }
});

// Fruit.deleteMany({name: "Peach"}, function(err) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Delete success");
//     }
// });

