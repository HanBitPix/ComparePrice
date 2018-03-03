'use strict';

// Best Buy Ajax Call

const bestBuyCall = function(){

  // Checks to see the current set category
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
  // --------------------------------------

  $.ajax({
    url: `https://api.bestbuy.com/v1/products(name=${searchValue}*&productTemplate=${selectedCategory})`, //&productTemplate=${selectedCategory})
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
        let cardImage = '';

        // Will hold all of the product data
        let bestBuyData = {};
        
        // Checks to see if the product has an image or not
        if (data.products[index].image === null){
          cardImage = 'images/no-image.png';
          bestBuyData.cardImage = cardImage;
        } else {
          cardImage = data.products[index].image;
          bestBuyData.cardImage = cardImage;
        }

        // Retrieving Data and inputing as an Object
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

        // Special Class Name for the modal body to place the video
        let specialSku = `youtube-body${bestBuyData.sku}`;
        
        // Will input all the BestBuy Data into creating the product card
        $('.searchResults').append(createCard(bestBuyData));
        
        // Special Class Name for the modal body to place the images
        let specialSku2 = `image-search${bestBuyData.sku}`; 

        // Calling the Google Custom Search API to retrieve images
        imageSearch(bestBuyData.modelNumber, specialSku2);

        // Calling the YouTube API to retrieve video for each product
        youtubeVideo(bestBuyData.modelNumber, specialSku);
      
      }); // End of each
    } // End of Success
  }); // End of Ajax Call
}; // End Best Buy Search