'use strict';

// Best Buy Ajax Call

// $('#allStores, #bestBuyButton').on('click', function(e){
const bestBuyCall = function(){

  if(selectedCategory === 'Laptops'){
    console.log('its laptops');
    selectedCategory = 'Laptop_Computers';
  } 
  else if(selectedCategory === 'Phones'){
    console.log('its phones');
    selectedCategory = 'Cell_Phones';
  }
  else if(selectedCategory === 'Tablets'){
    console.log('its tablets');
    selectedCategory = 'Tablets';
  }

  $.ajax({
    url: `https://api.bestbuy.com/v1/products(name=${searchValue}*&productTemplate=${selectedCategory})`, //&productTemplate=${selectedCategory})
    dataType: 'JSON',
    type: 'GET',
    data:{
      apiKey: 'vrjst2v5zsgemp3jq44xwmz9',
      format: 'json',
      pageSize: 20,
      page: 1
    },
    success: function(data) {
      console.log(data);
      console.log(data.products);
         
      $.each(data.products, function(index, item){

        let cardImage = '';
        let bestBuyData = {};
        
        if (data.products[index].image === null){
          cardImage = 'images/no-image.png';
          bestBuyData.cardImage = cardImage;
        } else {
          cardImage = data.products[index].image;
          bestBuyData.cardImage = cardImage;
        }

        bestBuyData.modelNumber = data.products[index].modelNumber;

        bestBuyData.productDescription = data.products[index].longDescription;
        bestBuyData.cardName = data.products[index].name;
        bestBuyData.cardPrice = data.products[index].salePrice;
        bestBuyData.upc = data.products[index].upc;
        bestBuyData.sku = data.products[index].sku;
        bestBuyData.customerReviewAverage = data.products[index].customerReviewAverage;
        bestBuyData.manufacturer = data.products[index].manufacturer;
        bestBuyData.regularPrice = data.products[index].regularPrice;
        bestBuyData.color = data.products[index].color;
        bestBuyData.screenSizeIn = data.products[index].screenSizeIn;
        bestBuyData.mobileOperatingSystem = data.products[index].mobileOperatingSystem;
        bestBuyData.weight = data.products[index].weight;
        bestBuyData.warranty = data.products[index].warrantyLabor;

        // Dimensions
        bestBuyData.width = data.products[index].width;
        bestBuyData.height = data.products[index].height;
        bestBuyData.depth = data.products[index].depth;     

        let specialSku = `youtube-body${bestBuyData.sku}`;
        
        
        $('.searchResults').append(createCard(bestBuyData));
        
        let specialSku2 = `image-search${bestBuyData.sku}`; 

        imageSearch(bestBuyData.modelNumber, specialSku2);
        youtubeVideo(bestBuyData.modelNumber, specialSku);
        
      }); // End of each
    }
  }); // End of Ajax Call
}; // End Best Buy Search