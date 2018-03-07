'use strict';

// -------------------------------------------------- //
// Google Custom Image Search API Call                //
// -------------------------------------------------- //

const imageSearch = function(modelNumber, idNum){

  $.ajax({
    url: `https://www.googleapis.com/customsearch/v1`,
    dataType: 'JSON',
    type: 'GET',
    data:{
      key: 'AIzaSyCAUWDxfSqkVGpNt_797Fze1NxeD9M8Ssc',
      q: modelNumber,
      client: 'google-csbe',
      cx: '008975268109802782687:7h6c926txfm',
      searchType: 'image'
    },
    success: function(data) {
      // To hold the HTML for all the images for the product
      let imageHTML = '';

      // Loops through the total results for the images
      $.each(data.items, function(index, item){
        let imageLink = data.items[index].link;
        imageHTML = `<a role="link" href="${imageLink}" target="_blank"><img class="img-thumbnail float-left" src="${imageLink}"/></a>`;
        $(`.${idNum}`).append(imageHTML);
      }); // End of each loop

    } // End of Success
  }); // End of Ajax Call
}; // Enf of Function