//single threaded
//synchronous // tasks are completed one after another
console.log(1);
console.log(2);
console.log(3);
console.log(4);

//asynchronous //  tasks can be started now and finished later wihtout block the rest of the program

console.log("start")

setTimeout(() => {
    console.log("cofee will be served after 5mins")
},5000)

console.log("start cutting the vegetables");

let count  = 5;
const Interval = setInterval(() => {
    const stockprice = (100 + Math.random() * 10) .toFixed(2);
    console.log("StockPrice", + stockprice);
    count--;
   if(count == 0)
   {
    clearInterval(Interval);
    console.log("Stock price fixed :" , stockprice);
    }
},5000) //for every 5 seconds the stock price will be changed.
