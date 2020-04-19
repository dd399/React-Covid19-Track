import React from 'react';

import { Cards, CountryPicker, Charts } from './Components';
import { fetchData } from './Api/';
import styles from './App.module.css';
import CoronaImage from '../src/Images/CoronaVirusHeader-Final-3.jpg';

//import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        
        <Charts data={data} country={country} />
        {/* <Chart data={data} country={country} />  */}
      </div>
    );
  }
}

export default App;