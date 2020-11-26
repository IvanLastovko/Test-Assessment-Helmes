export const checkDate = (date) => {
   const [formYear, formMonth, formDate] = date.split('-');
   const current = new Date();
   const currentDate = current.getDate();
   const currentMonth = current.getMonth() + 1;
   const currentYear = current.getFullYear();

   if (formDate === undefined || formMonth === undefined || formYear === undefined) {
      console.log('Invalid Shipment Date');
      return false
   }

   if (formYear > currentYear) {
      return formYear + '-' + formMonth + '-' + formDate;
   } else if (parseInt(formYear) === currentYear && formMonth > currentMonth) {
      return formYear + '-' + formMonth + '-' + formDate;
   } else if (parseInt(formYear) === currentYear && parseInt(formMonth) === currentMonth && formDate > currentDate) {
      return formYear + '-' + formMonth + '-' + formDate;
   }

   console.log('Invalid Shipment Date');
   return false;
}