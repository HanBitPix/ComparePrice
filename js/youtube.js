'use strict';

// Youtube Search URL
const YT_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';



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
      let videoID = data.items[0].id.videoId;
      let youtube = `<iframe width="100%" height="360" src="https://www.youtube.com/embed/${videoID}?controls=1"></iframe>`;
      console.log(youtube);
      
      $('.modal-review').parent('.card-header').find(`.${idNumber}`).append(youtube);
    }
  }); // End of Ajax Call
}; 