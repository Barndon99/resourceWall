//This needs to be added to the users .ejs page
$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  const renderOwnedResources = function(ownedResources) {
    //$("body").empty();
    // loops through resources
    for (const resource of ownedResources) {
      const $ownedResource = createOwnedResourceElement(resource);
      //This query will need to target the owned resources container
      $('body').append($ownedResource);
    }
  };

  const createOwnedResourceElement = function(resource) {
    const title = resource.title;
    const description = resource.description;
    const url = resource.url;

    const $ownedResource = `
    <div><p>${title}</p></div>
    <div><p>${description}</p></div>
    <div><p>${url}</p></div>
    `;

    return $ownedResource;
  };

  const loadOwnedResources = function() {
    $.ajax({
      type: "GET",
      url: "/users/owned_resources"
    }).done(function (data) {
      renderOwnedResources(data);
    });
  };
  loadOwnedResources();s
});
