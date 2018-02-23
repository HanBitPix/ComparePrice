'use strict';

// MiTDqLZ7QB3ublocuX2Hz7AkdXUP9Al69vrlqOr4

// $.ajax({
//   url: 'http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemSearch&', 
//   type: 'GET',
//   data:{
//     AWSAccessKeyId: 'AKIAJAUHXHZIUYPV7ESA',
//     AssociateTag: 'mobilead0bb5a-20',
//     SearchIndex: 'Apparel'
//     Keywords: 'Shirt',
//     format: 'json'
//   },
//   success: function(data) {
//     console.log(data);
//   }
// }); // End of Ajax Call



const newJSON = JSON.parse('http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJFGGUFCVTOQSKVIQ&AssociateTag=mobilead0bb5a-2101&Keywords=batman&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2018-02-23T20%3A01%3A04.000Z&Signature=CDwOS%2F%2BWE0sSKO48KRevg6JZk%2BP5GwnGPfCLJ1cDvh4%3D');
console.log(newJSON);