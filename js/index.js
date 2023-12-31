/* // Раскидать людей в разные массивы в зависимости от их почты
/* let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
let emails = {
    org: [],
    net: [],
    info: []
}
let other = []



for (let item of users){ 


    let xvast = item.email.split('.').at(-1)

    if(xvast === 'org'){
        emails.org.push(item.email)
    } else if(xvast === 'net'){
        emails.net.push(item.email)
    }else if(xvast === 'info'){
        emails.info.push(item.email)
    } else {

        other.push(item.email)
    }
    
}





  console.log(other , emails);


  for (let i = 0; i < users.length ; i++ ){ 
      
      
      let xvast = item.email.split('.').at(-1)
      
      if(xvast === 'org'){
          emails.org.push(item.email)
        } else if(xvast === 'net'){
        emails.net.push(item.email)
    }else if(xvast === 'info'){
        emails.info.push(item.email)
    } else {
        
        other.push(item.email)
    }
    
}





console.log( users[i]);





 
      let arr = [
          {
              "userId": 1,
              "id": 1,
              "title": "delectus aut au`tem",
              "completed": false
          },
          {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": false
          },
          {
              "userId": 1,
              "id": 3,
              "title": "fugiat veniam minus",
              "completed": false
          },
          {
              "userId": 1,
              "id": 4,
              "title": "et porro tempora",
    
              "completed": 
  true
          },
          {
              "userId": 1,
              "id": 5,
              "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
              "completed": false
          },
          {
              "userId": 1,
              "id": 6,
              "title": "qui ullam ratione quibusdam voluptatem quia omnis",
              "completed": false
          },
          {
              "userId": 1,
              "id": 7,
              "title": "illo expedita consequatur quia in",
              "completed": false
          },
          {
              "userId": 1,
              "id": 8,
              "title": "quo adipisci enim quam ut ab",
              "completed": true
          },
          {
              "userId": 1,
     
              "id": 9,
              "title": "molestiae perspiciatis ipsa",
              "completed": false
          },
          {
              "userId": 1,
              "id": 10,
              "title": "illo est ratione doloremque quia maiores aut",
              "completed": true
          },
      ]
      let a = {
          count: 0,
          arr: []
      }
     
      let b = {
          count: 0,
          arr: []
      }

     

      arr.forEach(item => {
        if (item.completed === true) {
          a.push(item);
        } else {
            b.push(item.id)
        }
      });





      console.log(other , emails);
      console.log(a)
      console.log(b)
      console.log( users[i]);








 */



/* let pwd 

do {
    pwd = +prompt('password')


    
  
} while(pwd !== 123456) 


console.log(  pwd 
    );
  */

/* сделать три попытки в пороль 
*/





/*  const passwords = [ '123123', ];
 let a = 3;
 let i=1;
 let pwd;
 
 while (i <= a) {
   input = prompt('Введите пароль:');
 
   if (input === null) {
     break;
   }
   for (const pass of passwords) {
     if (pass === input) {
       alert('Добро пожаловать!');
       break;
     } 
     else if (i < a) {
       alert(`Неверный пароль, у вас осталось ${a - i} попыток`);
       break;
     } else {
       alert('У вас закончились попытки, аккаунт заблокирован!');
       break;
     }
   }
   i += 1;
 }
*/

/*  let products = [
     {   
         name: "milk",
         type: "milk",
         price: 16000
     },
     {   
         name: "cheese",
         type: "milk",
         price: 25999
     },
     {   
         name: "tvorog",
         type: "milk",
         price: 12000
     },
     {   
         name: "govyadina",
         type: "meat",
         price: 90000
     },
     {   
         name: "baranina",
         type: "meat",
         price: 94000
     },
     {   
         name: "kuryatina",
         type: "meat",
         price: 45000
     },
     {   
         name: "vodka",
         type: "alcohol",
         price: 20000
     },
     {   
         name: "tekila",
         type: "alcohol",
         price: 50000
     },
     {   
         name: "pivo",
         type: "alcohol",
         price: 17000
     },
     {   
         name: "champain",
         type: "alcohol",
         price: 100000
     },
 ]
 
 let categories = [
     {
         type: "milk",
         count: 0,
         totsl : 0
     },
     {
         type: "milk",
         count: 0,
         totsl : 0
     },

     {
         type: "milk",
         count: 0,
         totsl : 0
     }
  */


/* let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    
{
    id: Math.random(),
    name: 'Maxmud',
    info: {
        school: '777',
        faculity: '3dsmax'
    },
},
{
    id: Math.random(),
    name: 'Muxammad',
    info: {
        school: '5555',
        faculity: 'Backend'
    },
},
]


 
  
    
    let categories = [
        {
            course: ' SMM',
            count: 0
        },
        {
            course: 'PROGRAMMING',
            count: 0
        },
        {
            course: '  3DSMAX',
            count: 0
        },
        {
            course: ' DIZAYN',
            count: 0
        },
        {       
            course: '   BACKEND',
            count: 0
        },
    ]
   

for (let arr of categories ){
    for (let item of categories ){
if (arr.type === item.type){
    item.conn++
    item.total += arr.price
}
}
}


console.table(categories)




*/





/* document.write(`2 * ${i} = ${2 * i } <br/> `)
for(let i = 1; k= 10; i ++){
    for(let k = 1; k <= 3; k++){
        document.write()
    }
    document.write(`<hr/>`)


}


for (let i = 1; i <= 10 ; i++){
for(let k = 1; 
)

} */





/* for ( let i = 5; i > 0; i--){

    for (let k = 0; k < i; k --){
        document.write(`*`)
    }
    document.write(`<dr/>`) 
} */
/* let companies = [
    {
        id: 1,
        name: 'baxtMen',
        budget: 200000,
        tax: 19,
        expenses: [10000, 2000, 60000]
    },
    {
        id: 2,
        name: 'nosfrush',
        budget: 1000,
        tax: 0,
        expenses: [50, 100, 10]
    },
    {
        id: 3,
        name: 'artyomida',
        budget: 400000,
        tax: 23,
        expenses: [5000,14000,3000]
    },
    {
        id: 4,
        name: 'azizas',
        budget: 150000,
        tax: 0,
        expenses: [5000,6000,4000]
    },
    {
        id: 5,
        name: 'openBobur',
        budget: 500,
        tax: 12,
        expenses: [10,30,5]
    },
    {
        id: 6,
        name: 'IS_buildings',
        budget: 1000000,
        tax: 21,
        expenses: [500000, 25000, 10000]
    },
    {
        id: 7,
        name: 'XOJIK_RADAR',
        budget: 40000,
        tax: 12,
        expenses: [500, 2500, 1000]
    },
]


let  b = companies.reduce((a,b) =>{
    return a + b.budget
} ,0)



let  arr = companies.reduce((a,b) =>{
    return a + b.tax
} ,0)

console.log(b,arr);




 */





/* let companies = [{
    id: 1,
    name: 'baxtMen',
    budget: 200000,
    tax: 19,
    expenses: [10000, 2000, 60000]
},
{
    id: 2,
    name: 'nosfrush',
    budget: 1000,
    tax: 0,
    expenses: [50, 100, 10]
},
{
    id: 3,
    name: 'artyomida',
    budget: 400000,
    tax: 23,
    expenses: [5000, 14000, 3000]
},
{
    id: 4,
    name: 'azizas',
    budget: 150000,
    tax: 0,
    expenses: [5000, 6000, 4000]
},
{
    id: 5,
    name: 'openBobur',
    budget: 500,
    tax: 12,
    expenses: [10, 30, 5]
},
{
    id: 6,
    name: 'IS_buildings',
    budget: 1000000,
    tax: 21,
    expenses: [500000, 25000, 10000]
},
{
    id: 7,
    name: 'XOJIK_RADAR',
    budget: 40000,
    tax: 12,
    expenses: [500, 2500, 1000]
},
]
 */
// 1. Посчитать общие расходы каждой компании
// 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
// 3. Find highest tax payer


/* let tax_max = {}
let tax_min = {}

for(let company of companies) {
let expenses = 0

for(let expense of company.expenses) {
    expenses += expense
}

let tax_sum = company.tax * company.budget / 100
let profit = company.budget - (tax_sum + expenses) 
console.log(`Company name: ${company.name}; Profit: ${profit}, Expenses witout tax: ${expenses} `);

}


 */
/* let user = {
    name: "Alex",
    age: 29,
    isMarried: false
}
let user_second = {
    name: "Jamshud",
    age: 12,
    isMarried: true
}


function sayHi(data){
    if( data === 18 &&  data === "A") {
alert( m)
    }else
}
    sayHi(user)
    sayHi(user_second)

 */





/*  let companies = [{
     id: 1,
     name: 'baxtMen',
     budget: 200000,
     tax: 19,
     expenses: [10000, 2000, 60000]
 },
 {
     id: 2,
     name: 'nosfrush',
     budget: 1000,
     tax: 0,
     expenses: [50, 100, 10]
 },
 {
     id: 3,
     name: 'artyomida',
     budget: 400000,
     tax: 23,
     expenses: [5000, 14000, 3000]
 },
 {
     id: 4,
     name: 'azizas',
     budget: 150000,
     tax: 0,
     expenses: [5000, 6000, 4000]
 },
 {
     id: 5,
     name: 'openBobur',
     budget: 500,
     tax: 12,
     expenses: [10, 30, 5]
 },
 {
     id: 6,
     name: 'IS_buildings',
     budget: 1000000,
     tax: 21,
     expenses: [500000, 25000, 10000]
 },
 {
     id: 7,
     name: 'XOJIK_RADAR',
     budget: 40000,
     tax: 12,
     expenses: [500, 2500, 1000]
 },
]

// 1. Посчитать общие расходы каждой компании
// 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
// 3. Find highest tax payer
let tax_max = {}
let tax_min = {}

for(let company of companies) {
 let expenses = 0

 for(let expense of company.expenses) {
     expenses += expense
 }

 let tax_sum = company.tax * company.budget / 100
 let profit = company.budget - (tax_sum + expenses) 
 console.log(`Company name: ${company.name}; Profit: ${profit}, Expenses witout tax: ${expenses} `);
}

*/










/* let a = total * broken / 100

console.log(a);
 */



/* let  a = prompt ("назавите число ") 

console.log(a / 100); */




/* function findLongestName(...nums) {

    let ln = ``

    for (let num of nums) {

        if (num < ln) {

            ln = num

        }

    }

    return ln

}

console.log(

    findLongestName(0, 2, 5, 4849, 4479)
);
 */


let n = prompt ("Назавите число"); 
let fibonacci = [0, 1]; 

for (i = 2; i < n; i ++) {
  
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}





console.log(fibonacci.slice(0,n));


/* дз 02 */


/* from random import randint
 
N = 10
a = []
for i in range(N):
    a.append(randint(1, 99))
print(a)
 
i = 0
while i < N - 1:
    j = 0
    while j < N - 1 - i:
        if a[j] > a[j+1]:
            a[j], a[j+1] = a[j+1], a[j]
        j += 1
    i += 1
 
print(a)
 */






































































