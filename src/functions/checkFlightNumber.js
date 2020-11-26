export const checkFlightNumber = (flightNumber) => {
   let re_letters = /^[A-Za-z]+$/;
   let re_numbers = /^[0-9]+$/;

   let letters = flightNumber[0] + flightNumber[1];
   let numbers = '';
   for (let i = 2; i < 6; i++) {
      numbers += flightNumber[i]
   }

   if (flightNumber.length === 6 && re_letters.test(letters) && re_numbers.test(numbers)) {
      return flightNumber.toUpperCase();
   } else {
      console.log('Invalid Flight Number');
      
      return false;
   }
}