Date.prototype.getElapsedTime = function() {
  var diffDate = new Date(new Date() - this);
  return "Equipped with <b>" + (diffDate.getFullYear() - 1970) + " Years, "  + diffDate.getMonth() + " Month(s), " +  + (diffDate.getDate() - 1) + " Day(s) </b>" + "of Professional Experience in Software Product Development.";
};

var from = new Date("01/01/2021 00:00:00");
document.getElementById("exp").innerHTML = from.getElapsedTime();
