function calculateSupply(age, amount) {
       if (age !== "" && amount !== "") {
               if (age <= 80) {
                   var maxYear = 80;
                   var totalSupplyAge = maxYear - age;
                   var result = totalSupplyAge * amount;
                   alert("You will need " + result + " to last you until the ripe old age of " + maxYear);
               } else alert("Sorry!");
       } else alert("Please fill in the fields !!");
   }