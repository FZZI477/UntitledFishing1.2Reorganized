// Time and weather configuration

const PERIOD_MS = 10 * 60 * 1000;

const WEATHER_MS = 5 * 60 * 1000;

const SUN_MASK_PRICE = 300;

const locationOrder = ["gravitas", "aurora", "shark", "grandreef"];

const weatherData = {
      Clear:{haste:0,luckMult:1,luckAdd:0,life:1,value:1},
      Rainy:{haste:-7.5,luckMult:1,luckAdd:10,life:1,value:1},
      Windy:{haste:5,luckMult:1,luckAdd:0,life:1,value:1},
      Stormy:{haste:30,luckMult:1,luckAdd:-10,life:.9,value:1},
      Sunny:{haste:0,luckMult:1,luckAdd:0,life:1.1,value:1},
      Rainbow:{haste:0,luckMult:3,luckAdd:0,life:1,value:1.2},
      Starstorm:{haste:0,luckMult:2,luckAdd:0,life:1,value:1.33},
      Eclipse:{haste:0,luckMult:1,luckAdd:0,life:1,value:1},
      "Acid Rain":{haste:0,luckMult:1,luckAdd:50,steadyAdd:-30,life:1,value:1},
      Drought:{haste:0,luckMult:1,luckAdd:0,life:1,value:1},
      Flood:{haste:0,luckMult:1,luckAdd:0,life:1,value:1},
      Tsunami:{haste:0,luckMult:1,luckAdd:0,life:1,value:1}
    };
