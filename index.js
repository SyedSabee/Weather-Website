async function getData() {
  const city = search.value;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d7df08269dmshefdec9b1458191cp1fc554jsndc64945202fe",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    temp.innerHTML = result.temp;
    ws.innerHTML = result.wind_speed;
    hmdty.innerHTML = result.humidity;
  } catch (error) {
    console.error(error);
  }
}
