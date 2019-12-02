$(document).ready(function() {
  // find drugs stores using yelp api when 'drugstore' button clicked
  $('#drugstore').click(findDrugStore);

  function findDrugStore(){
    console.log('in here');
    // yelp works
    // var yelpApiKey = '';
    // var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=drugstores&location=Akron, OH";
    // $.ajax({
    //   url: queryURL,
    //   headers: {
    //     "Authorization": "Bearer " + yelpApiKey + "",
    //   },
    //   method: "GET",
    //   dataType: "json",
    // }).then(function (response) {
    //   Results = response;
    //   console.log("Results");
    //   console.log(Results.businesses);
    //   for (var i = 0; i < Results.businesses.length; i++) {
        // console.log(Results.businesses[i].name);
        // console.log(Results.businesses[i].location.address1);
        // console.log(Results.businesses[i].location.city);
        // console.log(Results.businesses[i].location.zip_code);
        // console.log(Results.businesses[i].location);
        // console.log(Results.businesses[i].phone);
        // $('#results').append(Results.businesses[i].name)
        // $('#results').append("<br>");
        $('#results').text('Real data would go here.')
      }
    // });
  // }
  
  // when 'x' or 'close' button clicked, remove search results
  $('#closer1').click(clearIt);
  $('#closer2').click(clearIt);
  // clearIt removes search results
  function clearIt() {
    console.log('???????????')
    $('#results').empty();
  }
  
});

