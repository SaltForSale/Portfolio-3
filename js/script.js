document.addEventListener('DOMContentLoaded', function () {
  var currentTime = new Date().getSeconds();
  if (currentTime % 2 == 0) {
    document.body.classList.add('start-bg');
  }
  else {
    document.body.classList.add('start-bg-day');
  }
});

var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function() {
    chain.currentTime = 0;
		chain.play();
});