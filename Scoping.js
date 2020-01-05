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

