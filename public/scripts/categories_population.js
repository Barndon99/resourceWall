$(document).ready(function() {
  console.log("MADE IT IN");
  //Adds a new DIV containing categories to the DOM
  const renderCategories = function(categories) {
    //$("body").empty();
    // loops through categories
    for (const category of categories) {
      // calls createCategory for each category
      const $category = createCategoryElement(category);
      $('body').append($category);
    }
  };

  const createCategoryElement = function(category) {
    const name = category.name;

    const $category = `
    <div><p>${name}</p></div>
    `;

    return $category;
  };

  const loadCategories = function() {
    $.ajax({
      type: "GET",
      url: "/api/categories/"
    }).done(function (data) {
      renderCategories(data);
    });
  };
  loadCategories();
});
//Keep queries in Routes this file should be used to dynamically render EJS

module.exports = { getResourceById };
