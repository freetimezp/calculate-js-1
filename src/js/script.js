$(document).ready(function(){

	let selectL = document.querySelector('#selectLength');
	let selectW = document.querySelector('#selectWidth');

	$('.form-button').on('click', function() {
		$('.form-popup').addClass('active');
		selectL.onchange = function() {

		};
		selectW.onchange = function() {

		};
		let l = selectL.value;
    let w = selectW.value;
    let area = l * w;

	  document.getElementById("sl").innerHTML = l;
	  document.getElementById("sw").innerHTML = w;
	  document.getElementById("area").innerHTML = area;

	  let needPacks = area / 4;
	  let resultEight = Math.floor(needPacks / 8);
	  let resultSix = Math.floor(needPacks / 6);

	  let a = needPacks % 8;
	  let b = needPacks % 6;

	  if( a == 0 || b == 0 ) {
	  	document.getElementById("packsSix").innerHTML = 0;
	  	document.getElementById("packsEight").innerHTML = resultEight;
	  } 

	});

	$('.popup-button').on('click', function() {
		$('.form-popup').removeClass('active');
	});

});

