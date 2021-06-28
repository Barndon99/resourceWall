//Keep queries in Routes this file should be used to dynamically render EJS
$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  const renderResources = function(resources) {
    //$("body").empty();
    // loops through categories
    for (const resource of resources) {
      // calls createCategory for each category
      const $resource = createResourceElement(resource);
      $('body').append($resource);
    }
  };

  const createResourceElement = function(resource) {
    const name = resource.id;
    const url = resource.url;

    const $resource = `
    <div><p>${name}</p></div>
    <div><p>${url}</p></div>
    `;

    return $resource;
  };

  const loadResources = function() {
    $.ajax({
      type: "GET",
      url: "/resources/get"
    }).done(function (data) {
      renderResources(data);
    });
  };
  loadResources();
});
