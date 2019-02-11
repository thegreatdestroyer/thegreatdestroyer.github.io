function changeDiv(){
  var searching = document.getElementById("searching").value;  
  var div = document.createElement("div");
  div.innerHTML = "<p>Hello World</p>";
  document.getElementById("searched").appendChild(div);
}