import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {MemoryRouter} from "react-router-dom";

const cityOffersMock = [
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/14.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg", "https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/16.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/18.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`],
    "title": `Amazing and Extremely Central Flat`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2,
    "type": `room`,
    "bedrooms": 1,
    "maxAdults": 2,
    "price": 250,
    "goods": [`Breakfast`, `Laptop friendly workspace`, `Towels`, `Fridge`, `Air conditioning`, `Washer`, `Dishwasher`, `Baby seat`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    "location": {
      "latitude": 52.37154,
      "longitude": 4.889976,
      "zoom": 16
    },
    "id": 1
  }, {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/14.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg", "https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/16.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/18.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`],
    "title": `Amazing and Extremely Central Flat`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2,
    "type": `room`,
    "bedrooms": 1,
    "maxAdults": 2,
    "price": 250,
    "goods": [`Breakfast`, `Laptop friendly workspace`, `Towels`, `Fridge`, `Air conditioning`, `Washer`, `Dishwasher`, `Baby seat`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    "location": {
      "latitude": 52.37154,
      "longitude": 4.889976,
      "zoom": 16
    },
    "id": 1
  }, {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/14.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg", "https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/16.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/18.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`],
    "title": `Amazing and Extremely Central Flat`,
    "isFavorite": false,
    "isPremium": false,
    "rating": 3.2,
    "type": `room`,
    "bedrooms": 1,
    "maxAdults": 2,
    "price": 250,
    "goods": [`Breakfast`, `Laptop friendly workspace`, `Towels`, `Fridge`, `Air conditioning`, `Washer`, `Dishwasher`, `Baby seat`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "isPro": true,
      "avatarUrl": `img/avatar-angelina.jpg`
    },
    "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    "location": {
      "latitude": 52.37154,
      "longitude": 4.889976,
      "zoom": 16
    },
    "id": 1
  }
];

const currentOfferMock = {
  "city": {
    "name": `Amsterdam`,
    "location": {
      "latitude": 52.37454,
      "longitude": 4.897976,
      "zoom": 13
    }
  },
  "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
  "images": [`https://es31-server.appspot.com/six-cities/static/hotel/5.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/2.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/14.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/9.jpg", "https://es31-server.appspot.com/six-cities/static/hotel/11.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/1.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/16.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/18.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`, `https://es31-server.appspot.com/six-cities/static/hotel/12.jpg`],
  "title": `Amazing and Extremely Central Flat`,
  "isFavorite": false,
  "isPremium": false,
  "rating": 3.2,
  "type": `room`,
  "bedrooms": 1,
  "maxAdults": 2,
  "price": 250,
  "goods": [`Breakfast`, `Laptop friendly workspace`, `Towels`, `Fridge`, `Air conditioning`, `Washer`, `Dishwasher`, `Baby seat`],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "isPro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
  "location": {
    "latitude": 52.37154,
    "longitude": 4.889976,
    "zoom": 16
  },
  "id": 1
};

const hotelCommentsMock = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: `Alena`,
      avatarUrl: `url`,
    },
    rating: 10,
    comment: `text`,
    date: `april 2020`,
  }
];

const userInformationMock = {
  id: 10,
  email: `mail`,
  name: `Petr`,
  avatarUrl: `avater`,
  isPro: true,
};

it(`App is correcctly render`, ()=> {

  const tree = renderer.create(<MemoryRouter><App
    city={`Amstrdam`}
    changeCity={jest.fn()}
    cityList={[]}
    cityOffers={cityOffersMock}
    isAuthorizationRequired={true}
    sendAuthorizationRequest={jest.fn()}
    userInformation={userInformationMock}
    openDetailOffer={jest.fn()}
    currentOffer={currentOfferMock}
    hotelComments={hotelCommentsMock}
    nearOffers={cityOffersMock}
  /></MemoryRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
