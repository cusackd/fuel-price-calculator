function mpgPrice (fuelPrice, distanceMiles, mpg) {
  var price = (distanceMiles / mpg) * fuelPrice;
  return price;
}

function lp100kmPrice (fuelPrice, distanceKm, lp100km) {
  var price = ((lp100km / 100) * distanceKm) * fuelPrice;
  return price;
}

exports.mpgPrice = mpgPrice;
exports.lp100kmPrice = lp100kmPrice;
