const mockLeaflet = {
  map() {
    return {
      setView: jest.fn(),
    };
  },
  icon() {
    return {};
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  }
};

export default mockLeaflet;
