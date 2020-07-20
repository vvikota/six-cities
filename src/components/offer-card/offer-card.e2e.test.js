import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const mock = {
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

Enzyme.configure({adapter: new Adapter()});

describe(`OfferCard`, () => {

  it(`Click on card-image, correctly works`, () => {
    const clickHandler = jest.fn();
    const app = shallow(<OfferCard
      offer={mock}
      onMouseEnter={jest.fn()}
      setId={clickHandler}
    />);

    const imageLink = app.find(`.image-link`);
    imageLink.simulate(`click`, {preventDefault() {}});

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`click on card-title correctly works`, () => {
    const clickHandler = jest.fn();
    const app = shallow(<OfferCard
      offer={mock}
      onMouseEnter={jest.fn()}
      setId={clickHandler}
    />);

    const titleLink = app.find(`.place-card__name-link`);
    titleLink.simulate(`click`, {preventDefault: jest.fn()});

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

