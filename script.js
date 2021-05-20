import Countdown from './coutdown.js';

const diasPara = new Countdown('1 April 2022 23:59:59 GMT-0300')

const anoNovo = new Countdown('31 December 2023 23:59:59 GMT-0300')

setInterval(()=> {
    console.log(anoNovo.total)
}, 1000)
// console.log(diasPara.days)
// console.log(diasPara.hours)
// console.log(diasPara.minutes)
// console.log(diasPara.seconds)
