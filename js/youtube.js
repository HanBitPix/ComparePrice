'use strict';

// Youtube Search URL
const YT_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// -------------------------------------------------- //
// YouTube API Call                                   //
// -------------------------------------------------- //

const youtubeVideo = function(modelNumber, idNumber){

  $.ajax({
    url: YT_SEARCH_URL,
    dataType: 'JSON',
    type: 'GET',
    data:{
      part: 'snippet',
      key: 'AIzaSyCE045-TJH8I_VJOD7nW2PNRzSqr8ItfBI',
      q: `${modelNumber} review`,
      maxResults: 1,
      type: 'video'
    },
    success: function(data) {

      // Puts the link for the first video found into the variable
      let videoID = data.items[0].id.videoId;

      // Creates the html and puts the videID variable inside it
      let youtube = `<iframe width="100%" height="360" src="https://www.youtube.com/embed/${videoID}?controls=1"></iframe>`;

      // Puts the video html into the body modal of the review
      $('.modal-review').parent('.card-header').find(`.${idNumber}`).append(youtube);
      
    } // End of Success
  }); // End of Ajax Call
}; // End of Function