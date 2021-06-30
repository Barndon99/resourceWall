//This needs to be added to the users .ejs page
$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  const renderOwnedResources = function(ownedResources) {
    //$("body").empty();
    // loops through resources
    for (const resource of ownedResources) {
      const $ownedResource = createOwnedResourceElement(resource);
      //This query will need to target the owned resources container
      $('.owned-resources').append($ownedResource);
    }
  };

  const createOwnedResourceElement = function(resource) {
    const title = resource.title;
    const description = resource.description;
    const url = resource.url;
    const id = resource.id;

    const $ownedResource = `
    <a href="/resources/${id}">
    <div class="resource-card">
      <p>${title}</p>
      <p>${description}</p>
      <p>${url}</p>
    </div>
    <a>
    `;

    return $ownedResource;
  };

  const loadOwnedResources = function() {
    $.ajax({
      type: "GET",
      url: `/user/1/owned_resources`
    }).done(function (data) {
      renderOwnedResources(data);
    });
  };
  loadOwnedResources();
});
