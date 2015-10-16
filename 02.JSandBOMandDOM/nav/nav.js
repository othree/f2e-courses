
window.onload = function () {

  document.getElementById('nav-button').addEventListener('click', function () {
    var navlist = document.getElementById('nav-list');
    var classes = navlist.className;

    if (/active/.test(classes)) {
      navlist.className = classes.replace('active', '');
    } else {
      navlist.className = classes + ' active';
    }

  }, false);

};
