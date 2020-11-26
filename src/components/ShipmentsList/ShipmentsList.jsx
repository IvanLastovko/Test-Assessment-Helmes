import React from 'react';
import './ShipmentsList.scss';
import ShipmentListItem from '../ShipmentListItem/ShipmentListItem';

class ShipmentsList extends React.Component {
   render() {
      return (
         <div className='ShipmentsListBox'>
            {
               this.props.shipments.map((shipment) => {
                  return <ShipmentListItem key={shipment.name} route_id={`${shipment.name}`} />
               })
            }
         </div>
      )
   }

}

export default ShipmentsList;