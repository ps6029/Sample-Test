function caculateAge(birthYear, currentYear) {
	currentYear = new Date().getFullYear();
       if (birthYear !== "" && currentYear !== "") {
                     if (currentYear > birthYear) {
                   var result = currentYear - birthYear;
                   alert("You are either " + (result - 1) + " or " + result);
               } else alert("Your Birth Year can not be greater than your Current Year");
            } else alert("Please fill in the fields !!");
   }