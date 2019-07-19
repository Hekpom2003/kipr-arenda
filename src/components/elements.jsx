import React from 'react';
import Element from '../containers/element';
import { connect } from 'react-redux';
import Preloader from '../containers/preloader';
import { ELEMENTS__SET_IN_STORE } from '../constants';

class Elements extends React.Component {

  componentDidMount() {
    this.props.setInStore();
    // fetch()
    // .then(res => res.json())
    // .then(json => this.props.setInStore(json));
  }

  render() {
    if (this.props.elements.length === 0) {
      return (
        <Preloader/>
      )
    } else {
      return (
        <div className={'catalog-elements'}>
          {
            this.props.elements.map((item, index) => <Element key={index} {...item} />)
          }
        </div>
      );
    }

  }
}

const mapStateProp = state => ({
  elements: state.elements
});

const mapDispachProps = dispatch => {
  return {
    setInStore: payload => dispatch({ type: ELEMENTS__SET_IN_STORE, payload }),
  }
};


export default connect(mapStateProp, mapDispachProps)(Elements);