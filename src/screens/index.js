module.exports = {
  get Home() {
    return require('./Home').default;
  },
  get Shop() {
    return require('./Shop').default;
  },
  get Favorite() {
    return require('./Favorite').default;
  },
};
