module.exports = {
  get Home() {
    return require('./Home').default;
  },
  get Shop() {
    return require('./Shop').default;
  },
  get Favorites() {
    return require('./Favorites').default;
  },
};
