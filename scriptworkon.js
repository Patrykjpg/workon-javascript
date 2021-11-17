var user1 = {
    firstname: 'Jan',
    lastname: 'Kowalski',
    age: 30
}
var user2 = {
    firstname: 'bartek',
    lastname: 'nowak',
    age: 20
}
var user3 = {
    firstname: 'kamil',
    lastname: 'wisniewski',
    age: 10
}
const newArray = [user1.age, user2.age, user3.age]
console.log(newArray)
console.log(user1)
// suma wszystkich lat uzytkownikow
const sum = newArray.reduce(function(total, item, index, array){
    return total + item;
})
console.log(sum)
// sortowanie uzytkownikow
newArray.sort(function (a,b){return b - a;})
console.log(newArray)
newArray.sort(function (a,b){return a - b;})
console.log(newArray)
const nameArray = [user1.firstname, user2.firstname, user3.firstname]
console.log(nameArray)