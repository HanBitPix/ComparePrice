'use strict';

// -------------------------------------------------- //
// Selecting the category                             //
// -------------------------------------------------- //

// Default Selected
let selectedCategory = 'Laptops'; 

$('.category button').on('click',function(e){
  e.preventDefault();
  $('.category button').removeClass('active');
  $(this).addClass('active');
  selectedCategory = $(this).text();

  // Checks to see selected category than the header category will change
  if (selectedCategory === 'Laptops'){
    $('.search-title').text('Search for Laptops');
  }
  else if (selectedCategory === 'Phones'){
    $('.search-title').text('Search for Phones');
  } 
  else {
    $('.search-title').text('Search for Tablets');
  }

  // Returns current selected category
  return selectedCategory;
});

// -------------------------------------------------- //
// User searching for item                            //
// -------------------------------------------------- //

// Empty Search Value Default
let searchValue = ''; 

$('#searchButton').on('click', function(e){
  e.preventDefault();

  // Resets the search result
  $('.searchResults').html('');

  // Inputs the search value into the variable
  searchValue = $('#search').val();

  // Resets the search input
  $('#search').val('');

  // Calling BestBuy API
  bestBuyCall();
});
