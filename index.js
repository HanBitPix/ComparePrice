'use strict';

console.log('index.js loaded');

// -------------------------------------------------- //
// Selecting the category                             //
// -------------------------------------------------- //

let selectedCategory = 'Movies'; 

$('.category button').on('click',function(e){
  e.preventDefault();
  $('.category button').removeClass('active');
  $(this).addClass('active');
  console.log($(this).text());
  return selectedCategory = $(this).text();
});

// -------------------------------------------------- //

// -------------------------------------------------- //
// User searching for item                           //
// -------------------------------------------------- //

let searchValue = ''; 

$('#searchButton').on('click', function(e){
  e.preventDefault();
  $('.searchResults').html('');
  searchValue = $('#search').val();
  $('#search').val('');
  console.log(`User searching for: ${searchValue}`);

  // If Books is selected than the Best Search results will be disabled
  // because Best Buy does not sell books
  if(selectedCategory === 'Books'){
    alert('BestBuy does not sell books so there will be no results from Best Buy.');
    $('#bestBuyButton').addClass('disabled');
  }else{
    $('#bestBuyButton').removeClass('disabled');
    bestBuyCall();
  }
});

// -------------------------------------------------- // 


// -------------------------------------------------- //
// This function creates the card                        //
// -------------------------------------------------- //

function createCard(cardImage, cardName, cardPrice){
  let card = `<!-- Card -->
  <div class="col-6 col-md-4 col-xl-3">
    <div class="card mb-4">
      <img class="card-img-top" src="${cardImage}" alt="Card image cap">
      <div class="card-body">
        <h6 class="">${cardName}</h6>
        <h6 class="my-1 cardPrice">$${cardPrice}</h6>
      </div>
      <div class="py-1 bg-yellow card-footer">
        <small>Best Buy</small>
      </div>
    </div>
  </div>
  <!-- /Card -->`;

  return card;
}

// -------------------------------------------------- || 


