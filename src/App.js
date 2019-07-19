import React from 'react';
import Filter from './components/filter';
import Icons from './components/icons';
import Elements from './components/elements';
import './App.scss';

class App extends React.Component {
  render() {

    console.log('App',this.props.match.params);

    return (
      <div className="catalog-section">
        <div className="catalog-section__top-row">
          <Filter/>
          <Icons/>
        </div>

        <Elements/>

      </div>
    );
  }
}

export default App;
