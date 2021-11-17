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


const persons = [
    {
        firstname: 'jan',
        lastname: 'kowalski',
        age: '10'
    },
    {
        firstname: 'adam',
        lastname: 'nowak',
        age: '20'       
    },
    {
        firstname: 'ewa',
        lastname: 'nowak',
        age: '25'  
    }
]
console.log(persons)

let SUMA = 0
// suma lat uzytkownikow
// persons.forEach(function(item){
//     SUMA += item.age
// })

const Sum = persons.reduce(function(total, item){
    return total += item.age;
},0)
console.log('suma lat wszystkich uzytkownikow wynosi: '+SUMA)
// tablica z imionami
const names = []
persons.forEach(function(item){
    names.push(item.firstname)
})
console.log(names)
// 

const sortedpersons = persons.sort(function (a,b){
    return a.age - b.age;
})
console.log(sortedpersons)