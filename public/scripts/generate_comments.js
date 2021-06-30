$(document).ready(function() {
  //Adds a new DIV containing categories to the DOM
  const renderComments = function(Comments) {
    //$("body").empty();
    // loops through categories
    for (const comment of Comments) {
      const $comment = createCommentElement(comment);
      $('.comment-container').append($comment);
    }
  };

  const createCommentElement = function(comment) {
    const name = comment.id;
    const comments = comment.comments;

    const $comment = `
    <div>
      <p>${name}</p>
      <p>${comments}</p>
    </div>
    `;

    return $comment;
  };

  const loadComments = function() {
    $.ajax({
      type: "GET",
      url: `/resources/:id/get`
    }).done(function (data) {
      renderComments(data);
    }).catch((err) => {
      console.log("error:", err);
    });
  };
  loadComments();
});
