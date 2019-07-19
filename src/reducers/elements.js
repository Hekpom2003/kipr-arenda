import { ELEMENTS__SET_IN_STORE } from '../constants';

const initialState = [
  {
    id: 100,
    name: 'Name building',
    slider: [
      {type: 'video',url:'url1'},
      {type: 'image',url:'https://severnyi-kipr.ru/upload/resize_cache/iblock/8e4/358_190_2/8e40b37d16662b77217fa5167cfd9c21.jpg'},
    ],
    prices: [
      {code: 'RUB', value: 500 },
      {code: 'GBP', value: 23 },
    ],
    properties: {
      countGuests: 4,
      countBedRooms: 1,
      location: 'Фамагуста',
    },
    url: '/url/'
  },
  {
    id: 101,
    name: 'Name building 1',
    slider: [
      {type: 'image',url:'https://severnyi-kipr.ru/upload/resize_cache/iblock/d1b/358_190_2/d1bda95acdb9557349d04667fb0bbd52.jpg'},
      {type: 'image',url:'https://severnyi-kipr.ru/upload/resize_cache/iblock/d1b/358_190_2/d1bda95acdb9557349d04667fb0bbd52.jpg'},
      {type: 'image',url:'https://severnyi-kipr.ru/upload/resize_cache/iblock/d1b/358_190_2/d1bda95acdb9557349d04667fb0bbd52.jpg'},
    ],
    prices: [
      {code: 'RUB', value: 5001},
      {code: 'GBP', value: 230 },
    ],
    properties: {
      countGuests: 4,
      countBedRooms: 1,
      location: 'Фамагуста-17',
    },
    url: '/url-17/'

  }
];

export default function filter(state = initialState, action) {
  switch (action.type) {
    case ELEMENTS__SET_IN_STORE:
      return [...state,   {
        id: 102,
        name: 'Name building 1',
        slider: [
          {type: 'video',url:'url1'},
          {type: 'image',url:'url2'},
        ],
        prices: [
          {code: 'RUB', value: 5001},
          {code: 'GBP', value: 230 },
        ],
        properties: {
          countGuests: 4,
          countBedRooms: 1,
          location: 'Фамагуста-17',
        },
        url: '/url-17/'

      }]
      // return [...action.payload]
  }
  return state;
}