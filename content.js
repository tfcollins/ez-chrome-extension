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
      }
    }
);
