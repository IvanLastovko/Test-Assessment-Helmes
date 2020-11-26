import React from 'react';
import './InsertParcel.scss';

class InsertParcel extends React.Component {
   render() {
      return (
         <div className='insertParcelBox'>
            <form className='insertParcelform'>
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

export default InsertParcel;