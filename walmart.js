'use strict';

//open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev"

// WalMart Ajax Call

const walmartCall = function(){
  // Hold the category when looking for
  let searchCategory = '';

  if(selectedCategory === 'Movies'){
    searchCategory = 4096;
  }
  else if (selectedCategory === 'Games'){
    searchCategory = 2636;
  }
  else{
    searchCategory = 3920;
  }
  $.ajax({
    url: 'http://api.walmartlabs.com/v1/search', 
    type: 'GET',
    data:{
      query: searchValue,
      format: 'json',
      apiKey: 'mmc8rwzfejva28snuf5mpsaw',
      categoryId: searchCategory,
      start: 1,
      numItems: 25
    },
    success: function(data) {
      console.log(data);

      $.each(data.items, function(index, item){
        let cardImage = data.items[index].largeImage;
        let cardName = data.items[index].name;
        let cardPrice = data.items[index].salePrice;
        $('.searchResults').append(createWalMartCard(cardImage, cardName, cardPrice));
      });
    }
  }); // End of Ajax Call
}; // End Walmrt Search