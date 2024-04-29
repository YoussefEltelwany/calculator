
function Minus (Number1, Number2){

   var Number1 = parseInt(document.getElementById("frist").value);

   var Number2 = parseInt(document.getElementById("last").value);


   var MinusResult =Number1 -Number2 ;
    
   document.getElementById("result").value =MinusResult ;

}

function sum (Number1, Number2){

   var Number1 = parseInt(document.getElementById("frist").value);

   var Number2 = parseInt(document.getElementById("last").value);

   var sumResult =Number1 + Number2 ;
    
   document.getElementById("result").value =sumResult ;

}

function ksma (Number1, Number2){

var Number1 = parseInt(document.getElementById("frist").value);

var Number2 = parseInt(document.getElementById("last").value);

   
      var ksmaResult =Number1 / Number2 ;
     
      if(Number2 == 0 ){
         ksmaResult= ("can't divid by 0");
         }
      
      document.getElementById("result").value =ksmaResult ;
   
   }

 
function darb (Number1, Number2){

   var Number1 = parseInt(document.getElementById("frist").value);

   var Number2 = parseInt(document.getElementById("last").value);

      var DarbResult =Number1 * Number2 ;
       
      document.getElementById("result").value =DarbResult ;
   
   }










// let friends = ["ahmed", "Sameh", "yousef", "asmaa", "amgad" ];

// let numbers = [ 11 ,3,4, 8, 55 ,7,2 ];


// let filterFriends = friends.filter(function(el){

//    return el.startsWith("a")  ;
// })
// console.log(filterFriends);


// let evenNumber = numbers.filter(function(el){


//    return el % 2 === 0 ;

// })

// console.log(evenNumber)


// let addMap = numbers.map(function(el){
//    return el + el
// })
 
// console.log(addMap)
  






// let mex = "asu473654uhd"; 

 
// let mexed = mex.split("").filter(function(ele){

//    return !isNaN(parseInt(ele))

//  }) .map(function(ele){
   
// return ele * ele 
// }).join("|")

// console.log(mexed)







// let myFriend = [ 1, 2,"ahmed", "Sameh", "yousef", "asmaa", "amgad"];
// let onlyName = [];

// for(let i = 0 ; i  < myFriend.length; i++){

//    if(typeof myFriend[i] === "string" ){
//       onlyName.push(myFriend[i]);
//    }
 
// }

// console.log(onlyName);





// let nums = [10,20,30,40,50];


// let add =nums.reduce(function(acc,current,index,arr){

//    console.log(`Acc => ${acc}`);
//    console.log(`current element =>${current}`);
//    console.log(`index element =>${index}`);
//    console.log(`array =>${arr}`);
//    console.log(acc+current);
//    console.log(`###########`);
//    return acc+current
// },5)
// console.log(add);






// let theBigest =["bla" ,"dsbfbfdjnv","efrt" , "jghrt"];

// let check =theBigest.reduce(function(acc,current){

//       console.log(`Acc => ${acc}`);
//       console.log(`current element =>${current}`);
//       console.log(acc.length> current.length? acc :current);
//       console.log(`###########`);
//       return acc.length> current.length? acc :current;
//    })
//    console.log(check);




// let remove =[ "Y", "@", "o", "@","U" , "@","s", "@", "e", "@", "f" ]
 
// let final =remove.filter(function(ele){
//    return !ele.startsWith("@");
// }).reduce(function(acc,current){
//  return `${acc}  ${current}`;
// });
// console.log(final);




// let day = 1;

// switch(day){
//    case 0 :
//       console.log("saturday");
//       break;

//          case 1 : 
//           console.log("sunday");
//           break;
//       default:
//          console.log("not found");

// }




// let day ="Wednesday";

// switch(day){

   
//    case "Wednesday" :
//       console.log("From 10:00 AM To 7:00 PM");
//       break;

//       default : 
//       console.log( "Its Not A Valid Day")
      
// }


 


// let user = {
//   theName : "youssef",
//   age: 21,
   
//   sayHello: function(){
//      return 'hello';
//   },
// };


// console.log(user.theName);
// console.log(user.age);
// console.log(user.sayHello());





// let user ={
//    name:"youssef",
//    age :21,
//    skils: ["html", "css", "js"],
//    available: false,
//    addres:{
//       ksa : "reyadh",
//       egypt: {
//          one : "Giza",
//          two : "cairo",
//       }  , 
//    } ,
//    checkAv: function(){
//       if (user.available === true ){
//         return 'he is free'
//       }
//       else {
//          return 'not free'
//       }
//    }
// }

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["skils"].join("|"));
// console.log(user["addres"]["egypt"]["one"]);
// console.log(user.checkAv());






// let member={
//    name:"elzero",
//    age:38,
//    country:"Egypt",
//    fullDetails:function(){
//       return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
//    }
// }



// // Create Your Object Here

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt







// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };



// let finalObject= Object.assign({a:1},threeNums,twoNums)
// // // Create Your Object Here in One Line

// console.log(finalObject);

// // /*
// //   a: 1
// //   b: 2
// //   c: 3
// //   d: 4
// //   e: 5
// //   f: 6
// // */






