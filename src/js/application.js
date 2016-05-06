'use strict';

document.addEventListener('DOMContentLoaded', function() {

  /* ==========================================================================
     Creates a new Senna app
     ========================================================================== */

  var app = new senna.App();
  app.setBasePath('/src');
  app.addSurfaces('posts');
  app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
  app.dispatch();

  /* ==========================================================================
     Locks scroll position during navigation
     ========================================================================== */

var isLoading = false;
var scrollSensitivity = 0;

app.on('startNavigate', function(event) {
  isLoading = true;
  scrollSensitivity = 0;

  if (!event.replaceHistory) {
    app.setUpdateScrollPosition(false);
  }
});

app.on('endNavigate', function() {
  isLoading = false;

  app.setUpdateScrollPosition(true);
});

  /* ==========================================================================
     Infinite scrolling logic
     ========================================================================== */

document.addEventListener('scroll', function() {
  if (window.pageYOffset < 0) {
    return;
  }

  scrollSensitivity++;

  if (isLoading || scrollSensitivity < 5) {
    return;
  }

    if (window.innerHeight * 0.5 > getScrollDistanceToBottom()) {
    loadNextPage();
  }
});

function loadNextPage() {
  if (!app.pendingNavigate && window.nextPage) {
    // Goes to the next page using senna.App
    app.navigate(window.nextPage);
  }
}

function getScrollDistanceToBottom() {
    return document.body.offsetHeight - window.pageYOffset - window.innerHeight;
  }

});