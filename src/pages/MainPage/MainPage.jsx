import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import './MainPage.scss';
import ShipmentsList from '../../components/ShipmentsList/ShipmentsList';

class MainPage extends React.Component {
   render() {
      return (
         <div className='mainPage'>
            <h1>Current Number of Shipments: {this.props.shipmentsCount}</h1>
            <a href='/createshipment'>
               <ButtonGroup classes={{ root: 'insertMenuNavBar' }} disableElevation variant="contained" color="primary">
                  <Button classes={{
                     root: `new-shipment`
                  }}>
                     Create New Shipment
            </Button>
               </ButtonGroup>
            </a>
            <ShipmentsList shipments={this.props.shipments} />
         </div>
      )
   }

}

export default MainPage;