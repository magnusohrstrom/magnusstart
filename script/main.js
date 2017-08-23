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


var detectScrollLength = (leng, id, className) => {

  $(window).on('scroll', function() {
    st = $(this).scrollTop();
    st <= leng ? document.getElementById(id).classList.remove('active'):
      document.getElementById(id).classList.add(className);
    console.log(st);
  });
}

detectScrollLength(140,'portfolio','active');
detectScrollLength(370,'gh','active');
detectScrollLength(470, 'gh','translate-top');
detectScrollLength(590,'mail','active');
detectScrollLength(610, 'mail','translate-top');
detectScrollLength(760,'facebook','active');
detectScrollLength(790, 'facebook','translate-top');
