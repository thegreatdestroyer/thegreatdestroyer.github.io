function changeDiv(){
  var searching = document.getElementById("searching").value;  
  var div = document.createElement("div");
  div.innerHTML = searching;
  document.getElementById("searched").innerHTML = searching;
}