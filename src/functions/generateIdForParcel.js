export const generateIdForParcel = () => {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let charactersLength = characters.length;
   const addTwoLetters = () => {
      for (let i = 0; i < 2; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
   }
   const addSixNumbers = () => {
      for (let i = 0; i < 6; i++) {
         result += Math.floor(Math.random() * 10);
      }
   }
   addTwoLetters();
   addSixNumbers();
   addTwoLetters();

   return result;
}

