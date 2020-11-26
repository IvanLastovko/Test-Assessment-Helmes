export const generateIdForShipment = () => {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   let charactersLength = characters.length;
   const addCharacters = (howManyCharacters) => {
      for (let i = 0; i < howManyCharacters; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
   }

   addCharacters(3);
   result += '-';
   addCharacters(6)

   return result;
}
