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
  console.log($(this).text());
  selectedCategory = $(this).text();

  if (selectedCategory === 'Laptops'){
    $('.search-title').text('Search for Laptops');
  }
  else if (selectedCategory === 'Phones'){
    $('.search-title').text('Search for Phones');
  } 
  else {
    $('.search-title').text('Search for Tablets');
  }
  return selectedCategory;
});

// -------------------------------------------------- //
// User searching for item                            //
// -------------------------------------------------- //

let searchValue = ''; 

$('#searchButton').on('click', function(e){
  e.preventDefault();

  // Resets the search result
  $('.searchResults').html('');

  // Inputs the search value into the variable
  searchValue = $('#search').val();

  // Resets the search input
  $('#search').val('');

  // Logs users search value
  console.log(`User searching for: ${searchValue}`);

  // Calling BestBuy API
  bestBuyCall();
});
