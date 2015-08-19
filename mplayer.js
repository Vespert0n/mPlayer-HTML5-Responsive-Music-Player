var player = $('#mplayeraudio')[0];

$('.play').click(function(){
	player.play();
	$(this).toggleClass('hide');
	$('.pause').toggleClass('hide');
});
$('.pause').click(function(){
	player.pause();
	$(this).toggleClass('hide');
	$('.play').toggleClass('hide');
});
$(player).bind('play', function(){
    $('.play').addClass('hide');
    $('.pause').removeClass('hide');
});
$(player).bind('pause', function(){
    $('.play').removeClass('hide');
    $('.pause').addClass('hide');
});
$(player).bind('ended', function(){
	$('.pause, .play').toggleClass('hide');
});

$(player).bind('timeupdate', function(){
    $('.progress-slider').slider({ value: this.currentTime });
});

$(player).bind('volumechange', function(){
	$('.volume-slider').slider({ value: this.volume });
});

$(".volume-slider").slider({
    range: "min",
    min: 0,
    value: 0.5,
    max: 1,
    step: (1/$(this).width()),
    slide: function( event, ui ) {
        player.volume = ui.value;
    }
});
$(".progress-slider").slider({
    range: "min",
    min: 0,
    value: 0,
    max: player.duration,
    step: 1/player.duration,
    slide: function( event, ui ) {
        player.currentTime = ui.value;
    }
});
$('.volume-slider, .progress-slider').draggable();