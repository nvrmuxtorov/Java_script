// let school = [
//  {
// id:1,
// name:"Yusuf",
// last_name:"O'rinboyev",
// age:7,
// },
// {
//     id:2,
//     name:"Anvar",
//     last_name:"Muxtorov",
//     age:7,
//     },

//     {
//         id:1,
//         name:"Bunyod",
//         last_name:"Ulashev",
//         age:6,
//         },
//         {
//             id:1,
//             name:"Baxodir",
//             last_name:"Xakimzaarov",
//             age:7,
//             },
//             {
//                 id:1,
//                 name:"Abror",
//                 last_name:"Rahmatov",
//                 age:6,
//                 },
//                 {
//                     id:1,
//                     name:"Shohista",
//                     last_name:"Sobirov",
//                     age:6,
//                 },

//                     {
//                         id:1,
//                         name:"Aziz",
//                         last_name:"Nabiyev",
//                         age:7,
//                         },
                    
// ]
// let accepted=0,not_accepted=0;
// for (let i = 0; i < school.length; i++) {

//   if (school[i].age===7) {
//     accepted++
//   }else{
//     not_accepted++
//   }
// }
// console.log(`Maktabga qabul qilinganlar :${accepted}   ; Qabul qilinmaganlar: ${not_accepted} `);


// let university = [
//   {
//  id:1,
//  name:"Yusuf",
//  last_name:"O'rinboyev",
//  age:19,
//  gpa:4

//  },
//  {
//      id:2,
//      name:"Anvar",
//      last_name:"Muxtorov",
//      age:18,
//      gpa:5
//      },
//      {
//          id:3,
//          name:"Bunyod",
//          last_name:"Ulashev",
//          age:19,
//          gpa:4
//          },
//          {
//              id:4,
//              name:"Baxodir",
//              last_name:"Xakimzaarov",
//              age:19,
//              gpa:4
//              },
//              {
//                  id:5,
//                  name:"Abror",
//                  last_name:"Rahmatov",
//                  age:20,
//                  gpa:3
//                  },
//                  {
//                      id:6,
//                      name:"Shohista",
//                      last_name:"Sobirov",
//                      age:19,
//                      gpa:3
//                      },
//                      {
//                          id:7,
//                          name:"Aziz",
//                          last_name:"Nabiyev",
//                          age:17,
//                      gpa:4
//                          },
                  
//                           {
//                          id:8,
//                          name:"Diyor",
//                          last_name:"Xolmamatov",
//                          age:18,
//                          gpa:3
//                          },
//                          {
//                              id:9,
//                              name:"Ahhmat",
//                              last_name:"Xonkelov",
//                              age:17,
//                              gpa:4
//                              },
                
//                                  {
//                                  id:10,
//                                  name:"Qodirali",
//                                  last_name:"Ulashev",
//                                  age:19,
//                                  gpa:5
//                                  },
//                                  {
//                                      id:11,
//                                      name:"Sanjar",
//                                      last_name:"Fayzullayev",
//                                      age:19,
//                                      gpa:5
//                                      },
//                                      {
//                                          id:12,
//                                          name:"Nodir",
//                                          last_name:"Tursunov",
//                                          age:20,
//                                          gpa:4
//                                          },
//                                          {
//                                              id:13,
//                                              name:"Shuhrat",
//                                              last_name:"Sobirov",
//                                              age:18,
//                                              gpa:3
//                                              },
                         
                         
//                                              {
//                                                  id:14,
//                                                  name:"Aziz",
//                                                  last_name: "Amonov",
//                                                  age:18,
//                                                  gpa:4
//                                                  },                                 
//  ]
//  let great=0, good=0, bad=0,not_passed=0;
//  for (let i = 0; i < university.length; i++) {
//   if (university[i].gpa===5) {
//     great++
//   }else if (university[i].gpa===4) {
//     good++
//   }else if (university[i].gpa===3) {
//     bad++
//   } else if (university[i].gpa===2) {
// not_accepted++
//   }
//  }
//  console.log(`al'o baho olganlar :${great}`);
//  console.log(`qonirali baho olganlar :${good}`);
//  console.log(`qoniqarsiz baho olganlar :${bad}`);
//  console.log(`imtihondan yiqilganlar  :${not_accepted}`);


// let str='aaa@bbb@ccc'  ;
// console.log(str.replaceAll("@","!"))



// let str = "HELLOWORLD",san=[]
// for (let i = 1; i < str.length; i++) {
//   san[i]=String.fromCharCode(str.charCodeAt(i) +32)
// }
// san.unshift(str.slice(0,1))
// console.log(san.join(""));

let bank={
name:"Anvar",
code:1444,
money:4000000,
bank_money:10_000_000_000,
}



let names = prompt("ismigizni kiriting")
if (names==bank.name) {
let password = +prompt("porolinggizni kiriting")
    if (password===bank.code) {
        let money=+prompt("olmoqchi bolgan pulni kiriting (minimal summu:5000,max summa 50000000):")
if ((money-((money*1)/100))<=bank.money && money>=5000&&money<=50_000_000) {
    console.log(`yechib oldingiz :${money} \n  kompensatsiya :${((money*1)/100)} \n   qoldi:${bank.money-((money+((money*1)/100)))} \n bankdagi pul: ${bank.bank_money+((money*1)/100)}`);
}else{
    console.log("hisobigizda yetorli mablag yuq, yoki minmimal va maxsimal summa kiritilga ");
}
    }else{
    alert("parolingiz xato xato")

    }
}else{
    alert("ismingiz xato")
}