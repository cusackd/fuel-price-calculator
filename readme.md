#Fuel Price Calculator for NodeJS 

Require the module
```sh
var fuelPrice = require('fuel-price-calculator');
```
Calculate the price of the following 

Trip cost MPG
```sh
var fuelPrice = require('fuel-price-calculator');

fuelPrice.mpgPrice(fuelPrice, distanceMiles, mpg);
```

Trip cost Lp100Km
```sh
var fuelPrice = require('fuel-price-calculator');

fuelPrice.lp100kmPrice(fuelPrice, distanceKm, lp100km);
```
