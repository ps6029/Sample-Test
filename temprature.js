function celsiusToFahrenheit(temp) {
       if (temp !== "") {
               var celsius = temp;
               var fahrenheit = (((celsius * 9) / 5) + 32);
               alert(celsius + " Celsius to " + fahrenheit.toFixed(2) + "Fahrenheit");
       } else alert("Please fill in the fields !!");
   }
 
   function fahrenheitToCelsius(temp) {
       if (temp !== "") {
               var fahrenheit = temp;
               var celsius = (((fahrenheit - 32) * 5) / 9);
               alert(fahrenheit + "Fahrenheit to " + celsius.toFixed(2) + "Celsius");
       } else alert("Please fill in the fields !!");
   }