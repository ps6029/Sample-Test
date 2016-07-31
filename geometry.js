function calcCircumfrence(radius) {
       if (radius !== "") {
               var pi = 3.142;
               var circumference = 2 * pi * radius;
               alert("The circumference is " + circumference);
       } else alert("Please fill in the fields !!");
   }
 
   function calcArea(radius) {
       if (radius !== "") {
               var pi = 3.142;
               var area = pi * radius * radius;
               alert("The area is " + area);
       } else alert("Please fill in the fields !!");
   }