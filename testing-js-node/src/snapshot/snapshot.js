const snapShotObject = (geo) => ({
  id: geo.id,
  latitude: geo.latitude,
  longitude: geo.longitude,
  active: geo.active,
});
const href = (link) => ({
  link: link.link,
});
module.exports = {
  snapShotObject,
  href
};
