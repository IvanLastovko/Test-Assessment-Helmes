import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CreateShipment from './pages/CreateShipment/CreateShipment';
import { checkAirportName } from './functions/checkAirportName';
import { checkFlightNumber } from './functions/checkFlightNumber';
import { checkDate } from './functions/checkDate';
import { checkTime } from './functions/checkTime';
// import InsertMenu from './components/InsertMenu/InsertMenu';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shipments:
        [
          {
            name: 'LK345672PL',
            airport: 'TTL'
          },
          {
            name: 'LK345672PL1',
            airport: 'TTL'
          },
          {
            name: 'LK345672PL12',
            airport: 'TTL'
          },
          {
            name: 'LK345672PL13',
            airport: 'TTL'
          },
          {
            name: 'YT789456ER',
            airport: 'GWZ'
          },
          {
            name: 'WE145236BH',
            airport: 'GWZ'
          }
        ]
    }

    // ['LK345672PL', 'YT789456ER', 'WE145236BH']
  }

  // componentDidMount() {
  //   const joined = this.state.shipments.concat({
  //     name: 'WE145236BH',
  //     airport: 'EST'
  //   })
  //   this.setState({
  //     shipments: joined
  //   })
  // }

  handleCreateNewShipmentFormButtonClick = (state) => {
    console.log('state', state);
    let { airport, flightNumber, date, time } = state;


    // Check if entered Flight Number, Airport name, Date & Time are valid
    // Date & Time cannot be before tomorrows date.
    
    airport = checkAirportName(airport);
    flightNumber = checkFlightNumber(flightNumber);
    date = checkDate(date);
    time = checkTime(time);
    console.log('After checking ', airport, flightNumber, date, time);

    // Do fetch call to database and load shipment data to 'shipments' table

  }

  render() {
    console.log('State', this.state);
    const shipmentsCount = this.state.shipments.length;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <MainPage shipments={this.state.shipments} shipmentsCount={shipmentsCount} />
          </Route>
          <Route path='/shipments/:id' >
            <h1>This is a page</h1>
          </Route>
          <Route exact path='/createshipment'>
            <CreateShipment handleCreateNewShipmentFormButtonClick={this.handleCreateNewShipmentFormButtonClick} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
