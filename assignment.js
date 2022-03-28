// https://github.com/limon-programming-hero/assignment
//problem 1
function kilometerToMeter(kiloMeter) {
    if (kiloMeter >= 0) {
        var meter = kiloMeter * 1000;
        return meter;
    }
    else {
        var wrong = "Distance can't be in negative valued.";
        return wrong;
    }
}
var totalMeter = kilometerToMeter(2.4);
console.log(totalMeter);

//problem 2 
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var price = watch * 50 + phone * 100 + laptop * 500;
        return price;
    }
    else {
        var wrong = "Items can't be in negative valued.";
        return wrong;
    }
}
var totalPrice = budgetCalculator(3, 5, 6);
console.log(totalPrice);

//problem 3
function hotelCost(numOfNight) {
    var cost;
    if (numOfNight < 0) {
        var wrong = "This is a wrong value."
        return wrong;
    }
    else if (numOfNight <= 10) {
        cost = numOfNight * 100;
        return cost;
    }
    else if (numOfNight <= 20) {
        cost = (numOfNight - 10) * 80 + 10 * 100;
        return cost;
    }
    else {
        cost = (numOfNight - 20) * 50 + 10 * 80 + 10 * 100;
        return cost;
    }
}
var totalCost = hotelCost(45);
console.log(totalCost);

//problem 4
function megaFriend(allFriend) {
    var large = allFriend[0];
    for (var i = 0; i < allFriend.length; i++) {
        if (large.length < allFriend[i].length) {
            large = allFriend[i];
        }
    }
    var allLarge = [large];
    for (var i = 0; i < allFriend.length; i++) {
        if (large.length == allFriend[i].length && large != allFriend[i]) {
            allLarge.push(allFriend[i]);
        }
    }

    return allLarge;
}
var friends = ["abul", "kallu", "nishad", "polash", "ashar", "ashik"];
var largestName = megaFriend(friends);
console.log(largestName);