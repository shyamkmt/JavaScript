// console.log('Time and Date');

let todayDate = new Date();
// // console.log(Date());
// console.log(todayDate);
// console.log(todayDate.toString());
// // console.log(todayDate.toLocaleTimeString());
// console.log(todayDate.toLocaleString());
// console.log(todayDate.toJSON());
// console.log(todayDate.toLocaleTimeString());

// console.log(typeof todayDate);

// let createdDate = new Date(2023, 7, 27);

let createdDate = new Date(2023, 11, 27, 2,10,12);
// let createdDate = new Date("2023-12-22, 2:10:12 PM");
// console.log(createdDate.toLocaleString());

// let timeStamp = Date.now();
// console.log(timeStamp);
// console.log( timeStamp.getTime() );

// console.log( Date.now());    // Mili Sec.
// console.log(Date.now()/1000)
// console.log( Math.floor(Date.now()/1000) )

let newDate = new Date();
// console.log(newDate.getDay() +1);

console.log(newDate.toLocaleString( 'default', {
   hour12: "3:00 PM"
})
)