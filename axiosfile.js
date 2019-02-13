$(document).ready(function(){
  $("#searchbutton").click(function(){
      $("#search").toggle();
  });
  
  $("#searchWiki").click(function(){
      var q = document.getElementById("searchid").value;
$('#results').html('');                
      $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + q, function(data){
          $('#results').append('<h2>Top 15 Wiki Search Results for "' + q + '"</h2>');
          $.each(data.query.pages, function (i) {
              $('#results').append("<p><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid + 
                  "' target='_blank'>" + data.query.pages[i].title + "</a></p>");
          });
          
      });
  });
  
  $("#clearSearch").click(function(){
      document.getElementById("searchid").value = "";
      document.getElementById("results").innerHTML = "";
  });    
  
});