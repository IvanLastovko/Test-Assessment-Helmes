import React from 'react';

import FlightIcon from '@material-ui/icons/Flight';
import './ShipmentListItem.scss';

class ShipmentListItem extends React.Component {
   constructor(){
      super();
      this.state = {
         route_id: ''
      }
   }
   componentDidMount(){
      this.setState({
         route_id: this.props.route_id
      })
   }
   render() {
      return (
         <a href={`/shipments/${this.state.route_id}`} className='ShipmentListItemBox'>
               <h1><FlightIcon style={{ fontSize: 30 }} /> {this.state.route_id}</h1>
         </a>
      )
   }

}

export default ShipmentListItem;