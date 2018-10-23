function loadallthreads()
{
  var slides = document.getElementsByClassName("next");
  for(var i = 0; i < slides.length; i++)
  {
    slides.item(i).click();
  }
}

chrome.runtime.sendMessage({storage : 'doremove'},
    function(result) {
        if (result.doremove) {
          // Remove top top bar
          // var element = document.getElementById("header-813");
          // element.parentElement.removeChild(element);
          //
          // var element = document.getElementById("header-815");
          // element.parentElement.removeChild(element);
          var element = document.getElementById("ctl02_ctl01_header");
          element.parentElement.removeChild(element);
          var element = document.getElementById("ctl02_ctl01_content");
          element.parentElement.removeChild(element);
          setTimeout(loadallthreads,2000);
          setTimeout(loadallthreads,5000);
      }
    }
);
