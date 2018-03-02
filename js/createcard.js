'use strict';


// -------------------------------------------------- //
// This function creates the card                     //
// -------------------------------------------------- //

function createCard(bestBuyData){
  let card = `  <!-- Card -->
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
  <div class="card mb-5">
      <img class="my-5 img-fluid" src="${bestBuyData.cardImage}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${bestBuyData.cardName}</h5>
        <div id="accordion">
          <div class="card-header bg-dark border-info" id="headingOne">
            <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne${bestBuyData.sku}" aria-expanded="true" aria-controls="collapseOne">
              Description
            </button>
          </div> <!-- // headingOne -->
          
          <div id="collapseOne${bestBuyData.sku}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body py-3 px-1">
              ${bestBuyData.productDescription}
              </div> 
          </div> <!-- // collapseOne -->
          
          <div class="card-header bg-dark border-info" id="headingTwo">
              <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseTwo${bestBuyData.sku}" aria-expanded="false" aria-controls="collapseTwo">
                Product Info
              </button>
          </div><!-- // headingTwo-->

          <!-- Product Info -->
          <div id="collapseTwo${bestBuyData.sku}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <!-- Table Start -->
            <table class="table table-sm table-hover table-bordered"> 
                <tbody>
                  <tr>
                    <th scope="row">Rating: </th>
                    <td> ${bestBuyData.customerReviewAverage} </td>
                  </tr>
                  <tr>
                    <th scope="row">Brand</th>
                    <td>${bestBuyData.manufacturer}</td>
                  </tr>
                  <tr>
                    <th scope="row">MSRP</th>
                    <td>${bestBuyData.regularPrice }</td>
                  </tr>
                  <tr>
                    <th scope="row">Model #</th>
                    <td class="model-number">${bestBuyData.modelNumber}</td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td>${bestBuyData.color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Screen Size</th>
                    <td>${bestBuyData.screenSizeIn} inches</td>
                  </tr>
                  <tr>
                    <th scope="row">OS</th>
                    <td>${bestBuyData.mobileOperatingSystem}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dimensions</th>
                    <td>${bestBuyData.height} x ${bestBuyData.width} x ${bestBuyData.depth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Weight</th>
                    <td>${bestBuyData.weight}</td>
                  </tr>
                  <tr>
                    <th scope="row">UPC</th>
                    <td>${bestBuyData.upc}</td>
                  </tr>
                  <tr>
                    <th scope="row">Warraty</th>
                    <td>${bestBuyData.warranty}</td>
                  </tr>
                </tbody>
              </table> <!-- // table -->
          </div> <!-- // Product Info -->

          <!-- Product Review -->
          <div class="card-header w-50 d-inline bg-warning float-left">
            <!-- Button trigger modal -->
            <button type="button" data-toggle="modal" data-target="#modal${bestBuyData.sku}" class="modal-review btn btn-link collapsed text-white" >
              Review
            </button>
            
              <!-- Modal -->
            <div class="modal fade" id="modal${bestBuyData.sku}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">${bestBuyData.cardName}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body youtube-body${bestBuyData.sku}">
                      
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-block btn-warning btn-lg" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
          </div> <!-- // Product Review -->

          <!-- More Images -->
          <div class="card-header w-50 d-inline bg-dark float-right">
              <button type="button" data-toggle="modal" data-target="#exampleModalCenter2" class="btn btn-link collapsed text-white" >
                More Images
              </button>

              <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">More Images</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body image-search${bestBuyData.sku}">
                       <!-- Images -->
                    </div>
                      <div class="modal-footer">
                    </div>
                  </div>
                </div>
              </div>
          </div> <!-- // More Images -->
          
        </div> <!-- // Accordion -->
      </div> <!-- // Card-Body -->
    </div> 
  </div>
  <!-- // Card -->`;

  return card;
}