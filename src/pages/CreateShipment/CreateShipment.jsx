import React from 'react';
import './CreateShipment.scss';
import { ButtonGroup, Button } from '@material-ui/core';
import { generateIdForShipment } from '../../functions/generateIdForShipment';

class CreateShipment extends React.Component {

   constructor() {
      super();
      this.state = {
         airport: '',
         flightNumber: '',
         date: '',
         time: ''
      }

   }
   componentDidMount() {
      const shipmentID = generateIdForShipment();
      this.setState({
         shipmentID: shipmentID
      })
   }

   handleInputChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;

      if ((name === 'airport' && value.length > 3) || (name === 'flightNumber' && value.length > 6) ) {
         this.setState({
            ...this.state
         });
      } else {
         this.setState({
            [name]: value
         });
      }
   }

   render() {      
      return (

         <div className='CreateShipment'>

            <ButtonGroup classes={{ root: `create-new-shipment` }} disableElevation variant="contained" color="primary">
               <Button
                  // type="submit"
                  form="create-shipment-form"
                  onClick={() => this.props.handleCreateNewShipmentFormButtonClick(this.state)}
                  classes={{
                     root: `create-new-shipment`
                  }}>
                  Create New Shipment
               </Button>
            </ButtonGroup>


            <form id="create-shipment-form" className='create-shipment-form'>
               <div className='make-space-25px'></div>
               <p className='create-shipment-ID'>
                  Shipment ID: {this.state.shipmentID}
               </p>
               <br />
               <label className='create-shipment-label'>
                  Airport: <input
                     autoFocus
                     value={this.state.airport}
                     className='airport-input'
                     name="airport"
                     type="text"
                     onChange={this.handleInputChange} />
               </label>
               <label className='create-shipment-label'>
                  Flight number: <input
                     value={this.state.flightNumber}
                     name="flightNumber"
                     placeholder='<LLNNNN> - L – letter, N – digit'
                     className='flight-number-input'
                     type="text"
                     onChange={this.handleInputChange} />
               </label>
               <label className='create-shipment-label'>
                  Flight date/time: <input
                     value={this.state.date}
                     name="date"
                     type="date"
                     onChange={this.handleInputChange} />
                  <input
                     value={this.state.time}
                     name="time"
                     type="time"
                     onChange={this.handleInputChange} />
               </label>
            </form>
         </div>
      )
   }

}

export default CreateShipment;