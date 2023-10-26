
window.onload = function() {

    let elements = Array.from(document.body.getElementsByTagName('*'));
    elements.forEach(element => {
      element.style.display = "none";
    });
  
    elements.sort((a, b) => {
      return Array.from(document.body.getElementsByTagName('*')).indexOf(a) - Array.from(document.body.getElementsByTagName('*')).indexOf(b);
    });
    
    let i = 0;
  
    function fadeIn() {
      if (i >= elements.length) return;
  
      let element = elements[i];
      element.style.display = "block";
      element.style.opacity = 0;
  
      let opacity = 0;
  
      let timer = setInterval(function() {
        if (opacity >= 1) {
          clearInterval(timer);
          setTimeout(function() {
            i++;
            fadeIn();
          }, 50);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    }
  
    fadeIn();
};
