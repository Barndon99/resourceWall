//Keep queries in Routes this file should be used to dynamically render EJS
$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  console.log("HERE");
  const renderResources = function(resources) {
    //$("body").empty();
    // loops through categories
    for (const resource of resources) {
      const $resource = createResourceElement(resource);
      $('.container').append($resource);
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
      url: "/resources/"
    }).done(function (data) {
      renderResources(data);
    });
  };
  loadResources();
});
