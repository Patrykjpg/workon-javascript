// const date = new Date(2021, 11, 24, 17, 30, 45)
// const date = new Date()
// console.log(date.getFullYear())
// date.setTime(1000)
// console.log(date)

const date = new Date(2021,11,15)
const now = new Date()

let diff = now - date

console.log(diff)



const dateAge = new Date(1997,6,2)
const nowAge = new Date()

let age = nowAge - dateAge
console.log(age / 1000 / 3600 / 24 / 365)









// 1 === 1 ? fn() : fn2()
// ? if true
// : else false



const a = 1

switch(a){
    case 1:
        console.log('a jest rowne jeden jej!!')
        break;
    case 2:
        console.log('a jest rowne dwa jej!!')
        break;

        default:
            console.log('ani jeden warunek nie jest prawdziwy nananaan')
}





petla for
for (i = 1; i <= 5; i++){
    if (i===2) continue
    // pomija 2 
    if (i ===4) break
    // zatrzymuje dzialanie petli
    console.log(i)
}

let i = 0
while (i < 10){
    console.log(i)
    i++;
}


do {
    console.log(i)
    i++
} while (i < 10)


// petle specyficzne dla tablicy

var persons = [
    'jan',
    'adam',
    'ewa'
]

for (item of persons) {
    console.log(item)
}

// petle specyficzne dla obiektow

var persona = {
    name: 'jan',
    age: '34',
    email: 'superemail@email.com'
}

for (item in persona){
    // nazwa wlasciwiosci obiektu, ale nie wartosci
    console.log(item)
    console.log(persona[item])
}









// wyswietlic za pomoca petli wszystkie parrzyste liczby do 1000

for (i=0; i <= 1000; i++){
    if(i % 2 !=0)
    console.log(i)
}




for (i=0; i<5; i++){
    for(j=0; j<10; j++){
        console.log(i + " " + j)
    }
}