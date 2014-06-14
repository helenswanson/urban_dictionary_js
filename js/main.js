// var Request = unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat")
//   .headers({
//     "X-Mashape-Authorization": "G7UexxBeNHYYtO26A2TAqoSQaGPNpk3z"
//   })
//   .end(function (response) {
//     console.log(response);
// });




$(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault();
     $(this).html("Loading"); // Change text of button
     console.log("This happened!!!!");

     $.ajaxSetup({headers: {"X-Mashape-Authorization": "G7UexxBeNHYYtO26A2TAqoSQaGPNpk3z"}});
     $.ajax({
        url: "https://mashape-community-urban-dictionary.p.mashape.com/define?callback=definition&term=" + $('input[name="first_name"]').val(),
        complete: function(jqXHR, textStatus) {
            console.log("Completed: "+textStatus);
            $("#submit-button").html("Load Again"); // Change back text of button
            $("#submit-button").toggleClass("btn-primary"); // Revert back to default grey
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error: "+textStatus+" "+errorThrown);
        },
        success: function(data, textStatus, jqXHR) {
            console.log("Success: "+textStatus);
        },
     });
  });
});

function definition(response) {
  console.log(response);
  debugger;
  $.each(response.responseData.entries, function (i,newsItem) {
      $("#newsfeed").append("<li>"+newsItem.title+"</li>");
  });
}



// // Node version of Ruby request
// var Request = unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat")
//   .headers({
//     "X-Mashape-Authorization": "G7UexxBeNHYYtO26A2TAqoSQaGPNpk3z"
//   })
//   .end(function (response) {
//     console.log(response);
//   });

// $.ajax({
//   url: 'foo/bar'
//   headers: { 'x-m-custom-header': 'some value'}
// })
