$(document).ready(function () {
  // Click
  $(".search_button").click(function () {
    let CountryValue = $(".search_input").val();
    let FinalURL = `https://restcountries.com/v3.1/name/${CountryValue}?fullText=true`;
    fetch(FinalURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        $(".capital_city").text(`Capital City: ${data[0].capital[0]}`);
        $(".flag").html(`<img src="${data[0].flags.svg}" class="flag-svg"/>`);
        $(".continent").text(`Continent: ${data[0].continents[0]}`);
        $(".population").text(`Population: ${data[0].population}`);
        $(".native-name").html(
          `Location: <a href="${data[0].maps.googleMaps}" target="_blank">Click</a>`
        );
      });
  });
});
