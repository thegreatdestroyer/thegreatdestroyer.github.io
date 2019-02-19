function changeDiv(){
  var searching = document.getElementById("searching").value;  
  var div = document.createElement("div");
  div.innerHTML = searching;
  document.getElementById("searched").innerHTML = searching;
}


function perebor(arr) {
  for (var i=0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++){
  console.log(arr[i][j]);
    }
  }
}

  perebor([[1,2,3], [4,5,6], [7,8,9]]);