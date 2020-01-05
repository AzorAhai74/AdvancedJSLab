let fruits = ['apples', 'oranges', 'bananas'];

function printFruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
}



printFruit();

let leastFav = fruits[1];


myName();
function myName() {
    console.log('Hello my name is Byron');
};


let baldwin = function() {
    console.log('This is my last name');
}

baldwin();
