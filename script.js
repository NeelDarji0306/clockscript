const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
console.log(name)

let printDate = setInterval(function(){
    let date = new Date();;
    // document.querySelectorAll(".clock div")[0].innerHTML = "Today is "+date.getDate()+" "+getMonthName(date.getMonth())+", "+date.getFullYear() + "<br />"
    document.querySelectorAll(".clock div")[0].innerHTML = "Today is "+date.getDate()+" "+month[date.getMonth()]+", "+date.getFullYear() + "<br />"
    document.querySelectorAll(".clock div")[1].innerHTML = date.getHours() + " : " + date.getMinutes() +  " : " + date.getSeconds();
    document.querySelectorAll(".clock div")[0].classList.add("date-head");
    document.querySelectorAll(".clock div")[1].classList.add("time");
},1000)


// function getMonthName(month){
//     switch (month) {
//         case 0:
//             return "January"
//             break;
//         case 1:
//             return "February"
//             break;
//         case 2:
//             return "March"
//             break;
//         case 3:
//             return "April"
//             break;
//         case 4:
//             return "May"
//             break;
//         case 5:
//             return "June"
//             break;
//         case 6:
//             return "July"
//             break;
//         case 7:
//             return "Augest"
//             break;
//         case 8:
//             return "September"
//             break;
//         case 9:
//             return "October"
//             break;
//         case 10:
//             return "November"
//             break;
//         case 11:
//             return "December"
//             break;
//         default:
//             break;
//     }
// }