$(() => {
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const header = $('#topnav');
    const headerHeight = header.height();
    const transitionPointOne = $('#portfolio').offset().top - headerHeight;
    const transitionPointTwo = $('#contacts').offset().top - headerHeight;

    if (scrollTop > transitionPointOne && scrollTop < transitionPointTwo) {
      header.addClass('alt-header');
      $('a').removeClass('current-link');
      $('#portfolioLink').addClass('current-link');
    } else if (scrollTop > transitionPointTwo) {
      $('a').removeClass('current-link');
      $('#contactsLink').addClass('current-link');
      header.removeClass('alt-header');
    } else {
      $('a').removeClass('current-link');
      $('#aboutLink').addClass('current-link');
      header.removeClass('alt-header');
    }
  });
});

$('header a').on('click', function (e) {
  e.preventDefault();
  scrollToAnchor($(this).attr('href').substr(1));
});

function scrollToAnchor(id) {
  let aTag = $('#' + id);
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}
