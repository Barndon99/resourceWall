$(document).ready(function() {

  const renderCategories = function() {

  }

  const createCategories = function() {

  }

  const loadCategories = function() {
    console.log("IM HERE")
    $.ajax({
      method: "GET",
      url: "/api/categories"
    }).done((categories) => {
        console.log(categories);
    }).catch((err) => {
      console.log(err);
    });

  }
  loadCategories();
});
