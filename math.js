///exercitiul 2

// function tellFortune(N, Z, Y, X) {
//     return  X + Y + Z + N;
//    }

   var Z = ["Roxane", "Helen", "Tom", "Bogdan"];
   var X = ["Developer", "Seller", "Singer", "Mechanic"];
   var Y = ["Bucharest", "Montreal", "Rome", "Paris"];
   var N = ["1", "2", "3", "4"];

   var numOfKids = Math.floor(Math.random()*4+1);
   var partner = Z[Math.floor(Math.random()*4)];
   var job = X[Math.floor(Math.random()*4)];
   var city = Y[Math.floor(Math.random()*4)];

   console.log(" You area " + job + " in " + city + " married to " + partner + " and have " + numOfKids + " children ");