function myFunction(dots,more,myBtn) {
    var dots = document.getElementById(dots);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(myBtn);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "&#9660;";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "&#9650;";
      moreText.style.display = "inline";
    }
  }