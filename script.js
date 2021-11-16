const a = 10

console.log(a.toPrecision(3))
// wyswietlenie ilosci miejsc od poczatku liczby
console.log(a.toFixed(3))
// wyswietlenie ilosci miejsc po przecinku



const b = 10.93
console.log(parseInt(b))
// liczba calkowita


const randomNum = getRandomNumber(10,100)
// generator liczb 
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomNum)



const c = "to jest string nan jest"

console.log(c.indexOf("jest"))
console.log(c.lastIndexOf("jest"))
console.log(c.indexOf("jest", 6))



// const d = "to jest string"
// const e = "to jest string"
// d = d.replace("jest", "nie jest")
// e = e.replace(/jest/g, "nie jest")
// console.log(d)
// console.log(e)





// trim() ->obcina białe znaki na początku i na końcu tekstu





var zamiana = "bądź albo nie bądź"

zamiana = zamiana.replace(/ą/g, 'a').replace(/ź/g, 'z')
console.log(zamiana)






const array = [
    'contant1',
    'content2',
    'content3'
]
const array2 = [
    'contant1',
    'content2',
    'content3'
]
const array3 = [
    'contant1',
    'content2',
    'content3'
]
const array4 = [
    'contant1',
    'content2',
    'content3'
]
let j = array3.unshift("new content first")
let h = array3.push("new content")
let f = array.pop()
let g = array2.shift()
let k = array4.splice(1,1, "parametr 1", "parametr 2")
// pierwszy parametr ktory index i ile elementow usuwamy
console.log(array)
console.log(array2)
console.log(array3)
console.log(array4)

const array5 = [
    'contant1',
    'content2',
    'content3'
]

const fg = 'content2'
let gh = array5.splice(array5.indexOf(fg))
console.log(array5)





const array11 = [
    'contant1',
    'content2',
    'content3'
]

const newArray = array11.slice(1,2)

console.log(newArray)
console.log(array11)






const array15 = [
    'content2',
    'content3',
    'content1',
    'content4'
]
array15.sort()
console.log(array15)


const arrayNumber = [1,2,3,4,5,6,7,8,9]

arrayNumber.sort(function (a, b) {return b -a;})

console.log(arrayNumber)




const arrayE = ['el 1', 'el 2', 'el 3']

arrayE.forEach(function(item, index){
console.log(item)
console.log(index)
console.log('-----')
console.log('element o indexie: ' + index + " " + " " + item)
})

// const arrayB = arrayE.map(function (item, index){
//     return index;
// })
// console.log(arrayB)


// const arrayC = arrayE.filter(function(item, index){
//     return item < 1;
// })
// console.log(arrayC)


const arrayNum2 = [1,2,3,4,5,6]

const sum = arrayNum2.reduce(function(total, item, index, array){
    return total + item;
})
console.log(sum)

let A = 0; 
arrayNum2.forEach(function(total,item,index){
    A += item;
})
console.log(A)






// !!!!!!!!!!!!!!!!!!!!!
var arrayXD = [1,2,3,4,5]
var AD = arrayXD.every(function (item) {return item > 5; })
var ad = arrayXD.some(function (item) {return item >2; })
// var adf = 5
// adf.forEach(function(item,index){
//     adf < item
// })
// console.log(adf)
console.log(ad)
console.log(AD)

var ac = arrayXD.findIndex(function (item) {return item > 2; })
console.log(ac)







var person = {
    firstname: 'Jan',
    lastname: 'Kowalski',
    age: 30,
    bornCity: 'Warszawa',
    sayHi: function() {
        return "cześć, jestem" + " " + this.firstname + " " + this.lastname;
    },
    setEmail: function(email){
        this.email = email
    }
}
console.log(person)
console.log(person.age)
console.log(person['bornCity'])
console.log(person.sayHi())
person.email = 'test@gmail.com'
console.log(person.email)


// funkcja sortujaca po wieku od najstarszego i najmlodszego i odwrotnie
// suma wszystkich lat uzytkownikow
// dodatkowa tablica przechowuje tylko imiona uzytkownikow





var person1 = {
    firstname: 'Jan',
    lastname: 'Kowalski',
    age: 30
}
var person2 = {
    firstname: 'bartek',
    lastname: 'nowak',
    age: 20
}
var person3 = {
    firstname: 'kamil',
    lastname: 'wisniewski',
    age: 10
}

// person1.sort();

const newAge = person1.age + " " + person2.age + " " + person3.age
console.log(newAge.parseFloat())
// const sumAA = newAgeN.reduce(function(total, item, index, array){
//     return total + item;
// })
// console.log(sumAA)

// const SUMA = person1.age.reduce(function(total, item, index, array){
//     return total + item;
// })

