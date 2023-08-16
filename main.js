function myFunction() {
    var x = document.getElementById("top");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
