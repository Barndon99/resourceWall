//This needs to be added to the <script> tags within users .ejs page
$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  const renderSavedResources = function(savedResources) {
    //$("body").empty();
    // loops through resources
    for (const resource of savedResources) {
      const $savedResource = createSavedResourceElement(resource);
      //This query will need to target the saved resources container
      $('.saved-resources').append($savedResource);
    }
  };

  const createSavedResourceElement = function(resource) {
    const title = resource.title;
    const description = resource.description;
    const url = resource.url;
    const id = resource.id;

    const $savedResource = `
    <a href="/resources/${id}">
      <span class="resource-title">${title}</span> </a>
      <span class="resource-description">${description}</span>
      <span class="resource-url-link"><a href="${url}" target="_blank">URL</span>
    `;

    return $savedResource;
  };

  const loadSavedResources = function() {
    $.ajax({
      type: "GET",
      url: "/user/1/saved_resources"
    }).done(function (data) {
      renderSavedResources(data);
    });
  };


  loadSavedResources();
});
