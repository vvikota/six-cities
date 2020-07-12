
const rawDataConversion = (rawData) => ({
  id: rawData[`id`] || 0,
  email: rawData[`email`] || `email`,
  name: rawData[`name`] || `name`,
  avatarUrl: rawData[`avatar_url`] || `strins`,
  isPro: rawData[`is_pro`] || false,
});

export default rawDataConversion;
