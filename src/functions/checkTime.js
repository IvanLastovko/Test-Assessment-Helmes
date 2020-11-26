export const checkTime = (time) => {

   if(time.length === 0){
      console.log('Invalid Shipment Time');
      return false;
   }
   const [formHours, formMinutes] =  time.split(':');

   return formHours + formMinutes;
   
}