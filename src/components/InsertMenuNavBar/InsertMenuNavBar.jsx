import React from 'react';

import { ButtonGroup, Button } from '@material-ui/core'

import './InsertMenuNavBar.scss';

class InsertMenuNavBar extends React.Component {
   render() {
      return (
         <div className='insertMenuNavBar'>
            <ButtonGroup classes={{ root: 'insertMenuNavBar' }} disableElevation variant="contained" color="primary">
               <Button
                  onClick={() => this.props.handleParcelCLick()}
                  classes={{
                     root: `package-type parcel ${this.props.isParcelSelected ? 'disabled' : 'enabled'}`
                  }}>Parcel</Button>
               <Button
                  onClick={() => this.props.handleLetterCLick()}
                  classes={{
                     root: `package-type letter ${!this.props.isParcelSelected ? 'disabled' : 'enabled'}`
                  }}>Letter</Button>
            </ButtonGroup>
         </div>
      )
   }

}

export default InsertMenuNavBar;