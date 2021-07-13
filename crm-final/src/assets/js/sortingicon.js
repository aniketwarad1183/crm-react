//const { $ } = require("protractor")

function showIcon() {
  $("#sorticon > thead > tr > th").each(function () {
    $(this).addClass("headerSortUp");
  });
  $("#sorticon > thead > tr > th").click(function () {
    const classname = $(this).attr('class');
    if (classname == "headerSortUp") {
      $(this).attr('class', 'headerSortDown');
    } else { $(this).attr('class', 'headerSortUp'); }
  });
}
