'use strict';

// Best Buy Ajax Call

// $('#allStores, #bestBuyButton').on('click', function(e){

const imageSearch = function(modelNumber, idNum){

  $.ajax({
    url: `https://www.googleapis.com/customsearch/v1`,
    dataType: 'JSON',
    type: 'GET',
    data:{
      key: 'AIzaSyAVcOT1p5bkAnfm4jT-_A-o-eIaKEmNeHE',
      q: modelNumber,
      client: 'google-csbe',
      cx: '008975268109802782687:7h6c926txfm',
      searchType: 'image'
    },
    success: function(data) {
      console.log(data);
      let imageHTML = '';

      $.each(data.items, function(index, item){
        let imageLink = data.items[index].link;
        imageHTML = `<a href="${imageLink}" target="_blank"><img class="img-thumbnail float-left" src="${imageLink}"/></a>`;
        $(`.${idNum}`).append(imageHTML);
      });

    } // End of Success
  }); // End of Ajax Call
}; // Enf of Function