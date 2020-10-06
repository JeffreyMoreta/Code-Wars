var number = function (busStops) {
  let passengers = 0,
    departure = 0;
  busStops.forEach(([on, off]) => {
    passengers += on;
    departure += off;
  });
  return passengers - departure >= 0 ? passengers - departure : 0;
};
