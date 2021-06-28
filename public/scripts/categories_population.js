//Keep queries in Routes this file should be used to dynamically render EJS
$(document).ready(function() {
  var colors = ['red','blue','green','yellow','cyan','orange'];
  //Adds a new DIV containing categories to the DOM
  const renderCategories = function(categories) {
    //$("body").empty();
    // loops through categories
    for (const category of categories) {
      // calls createCategory for each category
      const $category = createCategoryElement(category);
      $('#categories .container').append($category);
    }
  };

  const createCategoryElement = function(category) {
    const name = category.name;

    const $category = `
    <div class="div-color">${name}</div>
    `;

    return $category;
  };

  const loadCategories = function() {
    $.ajax({
      type: "GET",
      url: "/categories/get"
    }).done(function (data) {
      renderCategories(data);
      $('.div-color').each(function(){
        var new_color = colors[Math.floor(Math.random()*colors.length)];
        var new_color1 = colors[Math.floor(Math.random()*colors.length)];
        $(this).css({
          'background-color': new_color,
          'color': new_color1
        });
      });
    });
  };
  loadCategories();

});
module.exports = { getResourceById };
