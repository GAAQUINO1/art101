
  $('#action').click(function(){
  $.ajax({
    // API endpoint
    url: "https://api.nasa.gov/planetary/apod?api_key=1LNHker1CPcOXqJCX1ysHhunQ8KGflPvskGisnk1",  
    // Any data to send
  //    data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    //dataType : "json",
    // If the request succeeds
// data is passed back
})
.done(function(data) {
    console.log("Success:", data);
    var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    $("#title").html(data.title)
       $("#output").append("<img src=" + data.url + ">");
       $("#output").append("<p>" + data.explanation);
})
});
