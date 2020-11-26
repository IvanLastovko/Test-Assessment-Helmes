import React from 'react';
import './InsertMenu.scss';
import InsertParcel from '../InsertParcel/InsertParcel';
import InsertLetter from '../InsertLetter/InsertLetter';
import InsertMenuNavBar from '../InsertMenuNavBar/InsertMenuNavBar';

class InsertMenu extends React.Component {
   constructor() {
      super();
      this.state = {
         isParcelSelected: true
      }
   }

   handleParcelCLick = () => {
      if (!this.state.isParcelSelected) {
         this.setState({
            isParcelSelected: true
         })
      }
   }
   handleLetterCLick = () => {
      if (this.state.isParcelSelected) {
         this.setState({
            isParcelSelected: false
         })
      }
   }


   render() {
      console.log('RENDERED')
      return (
         <div className='insertMenu-box'>
            <InsertMenuNavBar isParcelSelected={this.state.isParcelSelected} handleLetterCLick={this.handleLetterCLick} handleParcelCLick={this.handleParcelCLick} />
            {this.state.isParcelSelected
               ? <InsertParcel />
               : <InsertLetter />}
         </div>
      )
   }

}

export default InsertMenu;