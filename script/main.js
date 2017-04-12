var detectUpScrollAndToggleHeader = () => {
  let lastScrollTop = 0;
  let initialTop = $(window).scrollTop();
  $(window).on('scroll', function() {
    st = $(this).scrollTop();

    st <= lastScrollTop||lastScrollTop===0 ? document.getElementById('portfolio').classList.remove('active'):
      document.getElementById('portfolio').classList.add('active');

    st < 0 ? false:lastScrollTop = st;
    console.log(lastScrollTop);
  });
}


var detectScrollLength = (leng, id) => {

  $(window).on('scroll', function() {
    st = $(this).scrollTop();
    st <= leng ? document.getElementById(id).classList.remove('active'):
      document.getElementById(id).classList.add('active');
    console.log(st);
  });
}

detectScrollLength(140,'portfolio');
detectScrollLength(370,'gh');
detectScrollLength(480,'mail');
detectScrollLength(710,'facebook');
