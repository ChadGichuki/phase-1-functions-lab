// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42;
    } return 42 - street;
}

function distanceFromHqInFeet(street) {
    let blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
}

function distanceTravelledInFeet(start, finish) {
    if (finish > start) {
        return((finish - start) * 264);
    } return((start - finish) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <=400 ) {
        return 0;
    } else if (distance >400 && distance <=2000) {
        return ((distance - 400) * 0.02);
    } else if (distance >2000 && distance <=2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}