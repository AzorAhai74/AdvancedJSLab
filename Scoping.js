let fruits = ['apples', 'oranges', 'bananas'];
let favFruit;
function printFruit() {
    favFruit = fruits[2];
    console.log(fruits[0]);
}

function printFavFruit() {
    console.log(favFruit);
}

printFruit();
printFavFruit();

