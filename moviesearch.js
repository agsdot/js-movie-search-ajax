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
          var list = $('#results');
          var result = $('<li data-id="' + imdbid + '"></li>');
          var link = $('<a href="#"></a>');
          link.append(title, year);
          result.append(link);
          list.append(result);
          // var el = "<li data-id='" + imdbid + "'>" + title + ' (' + year + ') ' + "</li>";
          // $(el).appendTo('#results');
        }

      }
    });
  });

  $('#results').on('click', 'li', specifics);

  function specifics() {
    var imdbid = $(this).attr('data-id');
    $.ajax({
      url: 'http://www.omdbapi.com/?plot=full&i=' + imdbid,
      method: 'get',
      dataType: 'json',
      success: function(detailview){
          $('#movieresult').html('');

          var title = detailview['Title'];
          var year = detailview['Year'];
          var plot = ('<p>' + detailview['Plot'] + '</p>');
          var poster = ('<img src="' + detailview['Poster'] + '"/>');
          var actors = detailview['Actors'];
          var movieInfo = $('#movieresult');
          movieInfo.append(title, poster, plot);

      }

    });

  }

});

//http://www.omdbapi.com/?i=&t=matrix

//http://www.omdbapi.com/?i=&s=matrix multiple results