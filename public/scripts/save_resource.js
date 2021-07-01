$(document).ready(() => {

  $('#saveButton').click(() => {
    const local = window.location.href;
    const id = Number(local.substring(local.indexOf('s/') + 2));

    $.ajax({
      type: "POST",
      url: `/resources/save`,
      data: { resourceId: id }
    }).done(function (data) {
      console.log(window.location.href)
    }).catch((err) => {
      console.log("error:", err);
    });
  });
})
