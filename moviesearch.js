$(document).ready(function(){
  var moviehash;

  $('form').keyup('click', function(event){
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

          var el = "<li data-id='" + imdbid + "'>" + title + ' (' + year + ') ' + "</li>";
          $(el).appendTo('#results');
        }

      }
    });
  });

  $('li').on('click', 'data-id', function(){

  })

});

//http://www.omdbapi.com/?i=&t=matrix

//http://www.omdbapi.com/?i=&s=matrix multiple results