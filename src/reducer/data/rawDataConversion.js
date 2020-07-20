const rawDataConversion = (rawOffers) =>
  rawOffers.map((offer) => ({

    city: offer[`city`] || `Minsk`,
    previewImage: offer[`preview_image`] || `string`,
    images: offer[`images`] || [],
    title: offer[`title`] || `string`,
    isFavorite: offer[`is_favorite`] || false,
    isPremium: offer[`is_premium`] || false,
    rating: offer[`rating`] || 3,
    type: offer[`type`] || `string`,
    bedrooms: offer[`bedrooms`] || 5,
    maxAdults: offer[`max_adults`] || 10,
    price: offer[`price`] || 10,
    goods: offer[`goods`] || [],
    host: {
      id: offer[`host`][`id`] || 10,
      name: offer[`host`][`name`] || `string`,
      isPro: offer[`host`][`is_pro`] || false,
      avatarUrl: offer[`host`][`avatar_url`] || `string`,
    },
    description: offer[`description`] || `string`,
    location: offer[`location`] || {},
    id: offer[`id`] || 10,
  }));

export default rawDataConversion;
