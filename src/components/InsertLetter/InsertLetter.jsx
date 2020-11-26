import React from 'react';
import './InsertLetter.scss';

class InsertLetter extends React.Component {
   render() {
      return (
         <div className='insertLetterBox'>
            <form className='insertLetterform'>
               <div className='make-space-25px'></div>
               <label>
                  Is going:
                  <input
                     name="a"
                     type="text" />
               </label>
               <br />
               <label>
                  Number of guests:
                  <input
                     name="b"
                     type="text" />
               </label>
            </form>
         </div>
      )
   }

}

export default InsertLetter;