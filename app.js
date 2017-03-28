$('document').ready(function(){

	var box = $('.box');
	var reset =$('#reset');
	var color = 'white';
	var colors =  'red violet navy blue green yellow white'

	box.on('click', function(){
		$(this).addClass(color);
	});

	box.on('dblclick', function(){
		$(this).removeClass(color);
	});

	reset.on('click', function(){
		box.removeClass(colors);
	});

	$('#red').on('click', function() {
    color = 'red';
  	});

  	$('#violet').on('click', function() {
    color = 'violet';
  	});

  	$('#blue').on('click', function() {
    color = 'blue';
  	});

  	$('#navy').on('click', function() {
    color = 'navy';
  	});

  	$('#green').on('click', function() {
    color = 'green';
  	});

  	$('#yellow').on('click', function() {
    color = 'yellow';
  	});

  	$('#white').on('click', function() {
    color = 'white';
  	});

})