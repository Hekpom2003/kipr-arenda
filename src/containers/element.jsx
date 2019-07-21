import React from 'react';
import './element.scss';
import {Swiper} from 'react-id-swiper';

class Element extends React.Component {
  render() {

    console.log('Element', this.props);

    return (
      <div className="section-item">
        <div className="__wrapper">
          <div className="__image">
            <div className="__background">
              {this.props.slider[0].type == 'video'&& <elementVideo videoId={this.props.slider[0].url}/>|| this.props.slider[0].type == 'image' && <img href="this.props.slider[0].url"/>}
            </div>

            <div className="__articul">ID {this.props.id}</div>

            <div className="__zoom">
              <i className="fa fa-search-plus"/>
            </div>

            <div className="__fav-list ">
              <i className="fa fa-heart"/>
            </div>
          </div>

        </div>

        <div className="__name">
          <a href={this.props.url}> {this.props.name}</a>
        </div>

        <div className="__price-box">
          <div className="__period">
            <div className="select-box js-period-factor-change" data-group="period-factor">
              <div className="select-box__selected">за сутки</div>
              <ul className="select-box__items">
                <li data-period-factor="day" className="is-active">за сутки</li>
                <li data-period-factor="week">за неделю</li>
                <li data-period-factor="month">за месяц</li>
                <li data-period-factor="half-year" data-period-suffix="/мес"> &gt; 6 мес</li>
              </ul>
            </div>

          </div>

          <div className="__price">
            <div className="__price-items">
              <div className="__price-item">
                <div className="value">
                  <ul className="prices js-choose-currency" data-current-currency="">
                    <li className=""
                        data-price-day="3 062"
                        data-price-week="21 434"
                        data-price-month="77 162"
                        data-price-half-year="462 974"
                        data-currency-code="RUB">
                      45
                    </li>
                    <li className=""
                        data-price-day="53"
                        data-price-week="371"
                        data-price-month="1 336"
                        data-price-half-year="8 014"
                        data-currency-code="USD">
                      45
                    </li>
                    <li className="is-active"
                        data-price-day="45"
                        data-price-week="315"
                        data-price-month="1 134"
                        data-price-half-year="6 804"
                        data-currency-code="EUR">
                      45
                    </li>
                    <li className=""
                        data-price-day="41"
                        data-price-week="287"
                        data-price-month="1 033"
                        data-price-half-year="6 199"
                        data-currency-code="GBP">
                      45
                    </li>
                    <li className=""
                        data-price-day="1 419"
                        data-price-week="9 933"
                        data-price-month="35 759"
                        data-price-half-year="214 553"
                        data-currency-code="UAH">
                      45
                    </li>
                    <li className=""
                        data-price-day="17 731"
                        data-price-week="124 117"
                        data-price-month="446 821"
                        data-price-half-year="2 680 927"
                        data-currency-code="KZT">
                      45
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="select-box" data-group="currency">
              <div className="select-box__selected">€</div>
              <ul className="select-box__items">
                <li className="" data-currency-code="RUB"><i className="fa fa-rub"></i></li>
                <li className="" data-currency-code="USD">$</li>
                <li className="is-active" data-currency-code="EUR">€</li>
                <li className="" data-currency-code="GBP">£</li>
                <li className="" data-currency-code="UAH">₴</li>
                <li className="" data-currency-code="KZT">₸</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="__props-box">
          <div className="__props">
            <div className="__prop" data-toggle="tooltip" data-original-title="Количество гостей">
              <i className="fa fa-user"/>
              {this.props.properties.countGuests}
            </div>
            <div className="__prop" data-toggle="tooltip" data-original-title="Количество спален">
              <i className="fa fa-bed"/>
              {this.props.properties.countBedRooms}
            </div>
            <div className="__prop" data-toggle="tooltip" data-original-title="Регион">
              <i className="fa fa-map-marker"/>
              {this.props.properties.location}
            </div>
          </div>

          <div className="__detail-link">
            <div className="__detail-link--absolute">
              <a href="/services/arenda-nedvizhimosti/famagusta_1842/"
                 className="eye-button__item">
                <div className="eye-button__text">Смотреть</div>
                <div className="eye-button__icon"><i className="fa fa-eye"></i></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Element;