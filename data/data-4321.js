const data =  {
  "Headline": {
    "EffectiveDate": "2020-09-19T08:00:00-05:00",
    "EffectiveEpochDate": 1600520400,
    "Severity": 4,
    "Text": "Pleasant this weekend",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://m.accuweather.com/en/us/san-antonio-tx/78205/extended-weather-forecast/351198?lang=en-us",
    "Link": "http://www.accuweather.com/en/us/san-antonio-tx/78205/daily-weather-forecast/351198?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2020-09-17T07:00:00-05:00",
      "EpochDate": 1600344000,
      "Temperature": {
        "Minimum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 41,
        "IconPhrase": "Partly cloudy w/ t-storms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/san-antonio-tx/78205/daily-weather-forecast/351198?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/san-antonio-tx/78205/daily-weather-forecast/351198?day=1&lang=en-us"
    }
  ]
}
module.exports = {data}
