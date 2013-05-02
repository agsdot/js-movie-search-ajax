$(document).ready(function(){
  // alert('ready');
  var moviehash;

  $('form').keyup('click', function(event){
    // alert('submit');


    event.preventDefault();
    var form = $(this);
    var inputwithspace = $('#movieinput').val();
    var inputhtmlfriendly = inputwithspace.replace(' ', '%20');


    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + inputhtmlfriendly,
      method: 'get',
      dataType: 'json',
      success: function(movielist){
        results = movielist['Search'];
        $('ul#results').html('');
        for(var i = 0; i < results.length; i += 1 ){
          var movie = results[i];
          var title = movie["Title"];
          var year = movie["Year"];
          var imdbid = movie["imdbID"];

          var el = "<li>"+title + ' (' + year + ') ' + "</li>";
          $(el).appendTo('#results');
        };

      }
    });


  });

});

//http://www.omdbapi.com/?i=&t=matrix

//http://www.omdbapi.com/?i=&s=matrix multiple results