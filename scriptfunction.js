// function mojaFunkcja(parametr1, parametr2){
    
//     console.log(parametr1, parametr2)
//     console.log(arguments)
// }

// // let mojaFunkcja = function (parametr1, parametr2){
    
// //     console.log(parametr1, parametr2)
// //     console.log(arguments)
// // }

// let mojaFunkcja2 = mojaFunkcja

// mojaFunkcja(1, 2)


// // IIFE 
// // samo wykonujaca sie funckja
// let samowywolujaca = function (parametr1, parametr2){
//     console.log(parametr1, parametr2)
// }(1,2)

// console.log(typeof mojaFunkcja)


// let nazwafunkcji = function (param1, param2){
//     return function(){
//         console.log('to jest wewnetrzna funckja')
//     }
// }
// nazwafunkcji()()







// setTimeout(function(){
//     console.log('cos')
// }, 2000)


// let aaa = function(){
//     console.log('po 5 sek cos')
// }
// setTimeout(aaa, 5000)


// function nana(){
//     console.log('po 5 sek cos, mordo')
// }
// let timeout = setTimeout(nana, 5000)

// clearTimeout(timeout)


// let i = 0
// function petla(){
//     console.log('cos tam')
//     i++

//     if(i===10) clearInterval(interval)
// }
// let interval = setInterval(petla, 2000)








setInterval(showtime, 1000)
function showtime() {
    let time = new Date()
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec

    document.getElementById('clock').innerHTML = currentTime
}
showtime()


let makeclock = function(){
    let now = new Date()

    let dateString = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds()

    document.getElementById('clock2').innerHTML = dateString
}
setInterval(makeclock, 1)