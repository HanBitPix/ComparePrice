'use strict';

// Best Buy Ajax 

// $('#allStores, #bestBuyButton').on('click', function(e){
const bestBuyCall = function(){
  if (selectedCategory === 'Movies' || selectedCategory === 'Games'){
    // Hold the category when looking for in best buy
    let searchCategory = '';
    if(selectedCategory === 'Movies'){
      searchCategory = 'Movie';
    }
    else{
      searchCategory = 'Game';
    }
    $.ajax({
      url: `https://api.bestbuy.com/v1/products(name=${searchValue}*&type=\"${searchCategory}")`, 
      dataType: 'JSON',
      type: 'GET',
      data:{
        apiKey: 'vrjst2v5zsgemp3jq44xwmz9',
        format: 'json',
        pageSize: 10,
        page: 1
      },
      success: function(data) {
        console.log(data);
        console.log(data.products);
        $.each(data.products, function(index, item){
          if (data.products[index].image === null){
            let cardImage = 'images/no-image.png';
            let cardName = data.products[index].name;
            let cardPrice = data.products[index].salePrice;
            $('.searchResults').append(createCard(cardImage, cardName, cardPrice));
          }
          else{
            let cardImage = data.products[index].image;
            let cardName = data.products[index].name;
            let cardPrice = data.products[index].salePrice;
            $('.searchResults').append(createCard(cardImage, cardName, cardPrice));
          }
        });
      }
    }); // End of Ajax Call
  } // End of if statement
  else{

    console.log('Best Buy does not sell books!');
  }
}; // End Best Buy Search