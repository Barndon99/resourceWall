//Keep queries in Routes this file should be used to dynamically render EJS
$(document).ready(function() {
  var mainColors = ['#00a651', '#a491c5', '#71d0f6', '#44bead', '#57bfda', '#e5d5c1', '#affaaf', '#6015a1', '#ff99ff', '#99ffcc', '#82063c', '#210fee', '#f61eb7', '#c8f464', '#59ec53'];
  var fontColors = ['#57bfda','#00a651','#ff0d19','#f0d214','#44bead', '#71d0f6', '#ee1ce0'];
  //Adds a new DIV containing categories to the DOM
  $('.div-color').each(function(){
    var new_color = mainColors[Math.floor(Math.random()*mainColors.length)];
    var new_color1 = fontColors[Math.floor(Math.random()*fontColors.length)];
    $(this).css({
      'background-color': new_color,
      'color': new_color1,
      'background-image': `url(${"/images/dots.png"})`,
    });
  });

  $(".div-color").hover(function(){
    var new_color = mainColors[Math.floor(Math.random()*mainColors.length)];
    $(this).css(
      'background-color', new_color,);
    }, function(){
    $(this).css('background-color', new_color,);
  });
  //const renderCategories = function(categories) {
  //  //$("body").empty();
  //  // loops through categories
  //  for (const category of categories) {
  //    // calls createCategory for each category
  //    const $category = createCategoryElement(category);
  //    $('#categories .container').append($category);
  //  }
  //};

  //const createCategoryElement = function(category) {
  //  const name = category.name;
  //  const id = category.id;
//
  //  const $category = `
  //  <a href="/categories/${id}/resources"><div class="div-color">${name}</div><a>
  //  `;
//
  //  return $category;
  //};

  //const loadCategories = function() {
  //  $.ajax({
  //    type: "GET",
  //    url: "/categories/get"
  //  }).done(function (data) {
  //    renderCategories(data);
  //    $('.div-color').each(function(){
  //      var new_color = mainColors[Math.floor(Math.random()*mainColors.length)];
  //      var new_color1 = fontColors[Math.floor(Math.random()*fontColors.length)];
  //      $(this).css({
  //        'background-color': new_color,
  //        'color': new_color1,
  //        'background-image': `url(${"/images/dots.png"})`
  //      });
  //    });
//
  //    $(".div-color").hover(function(){
  //      var new_color = mainColors[Math.floor(Math.random()*mainColors.length)];
  //      $(this).css(
  //        'background-color', new_color,);
  //      }, function(){
  //      $(this).css('background-color', new_color,);
  //    });
//
  //  });
  //};
  //loadCategories();
});
