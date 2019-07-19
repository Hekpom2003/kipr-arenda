import React from 'react';
import './filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.showCalendar = this.showCalendar.bind(this);
    this.showRegion = this.showRegion.bind(this);
    this.showGuests = this.showGuests.bind(this);
    this.showBedrooms = this.showBedrooms.bind(this);
    this.chooseprice = this.chooseprice.bind(this);
  }

  showCalendar() {
  }

  showRegion() {
  }

  showGuests() {
  }

  showBedrooms() {
  }

  chooseprice() {
  }

  doAction(action) {
    switch (action) {
      case 'showCalendar':
        return this.showCalendar();
      case 'showRegion':
        return this.showRegion();
      case 'showGuests':
        return this.showGuests();
      case 'showBedrooms':
        return this.showBedrooms();
      case 'chooseprice':
        return this.chooseprice();
      default:
        return false;
    }
  }

  render() {

    const items = [
      { name: 'Даты', action: 'showCalendar' },
      { name: 'Регион', action: 'showRegion' },
      { name: 'Количество гостей', action: 'showGuests' },
      { name: 'Спальни', action: 'showBedrooms' },
      { name: 'Цена', action: 'chooseprice' },
    ];

    return (
      <div className={'catalog-filter'}>
        {
          items.map(item => {
            return (
              <div key={item.action} className="catalog-filter__item">
                <div className="catalog-filter__value"
                     onClick={() => this.doAction(item.action)}>{item.name}</div>
              </div>
            )
          })
        }

      </div>
    );
  }
}

export default Filter;