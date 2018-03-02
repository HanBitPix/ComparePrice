'use strict';

// Best Buy Ajax Call

// $('#allStores, #bestBuyButton').on('click', function(e){

const imageSearch = function(modelNumber, idNum){

  $.ajax({
    url: `https://www.googleapis.com/customsearch/v1`,
    dataType: 'JSON',
    type: 'GET',
    data:{
      key: 'AIzaSyCE045-TJH8I_VJOD7nW2PNRzSqr8ItfBI',
      q: modelNumber,
      client: 'google-csbe',
      cx: '008975268109802782687:7h6c926txfm',
      searchType: 'image'
    },
    success: function(data) {
      console.log(data);
      let arrayImage = [];
      let imageHTML = '';

      $.each(data.items, function(index, item){
        arrayImage.push(data.items[index].link);

       
      });
      console.log(arrayImage);

      for (let i = 0; i < arrayImage.length; i++){
        imageHTML += `<a href="${arrayImage[i]}" target="_blank"><img class="img-thumbnail float-left" src="${arrayImage[i]}"/></a>`;
      }

      $(`.${idNum}`).append(imageHTML);

    } // End of Success
  }); // End of Ajax Call
}; // Enf of Function