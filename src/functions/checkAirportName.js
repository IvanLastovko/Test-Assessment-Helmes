export const checkAirportName = (airportName) => {

   let re = /^[A-Za-z]+$/;   
   if(airportName.length === 3 && re.test(airportName)){
      return airportName.toUpperCase()
   } else {
      console.log('Invalid Airport Name');

      return false;
   }
   
}