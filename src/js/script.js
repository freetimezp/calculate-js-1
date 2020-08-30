$(document).ready(function(){

	let selectL = document.querySelector('#selectLength');
	let selectW = document.querySelector('#selectWidth');

	$('.form-button').on('click', function() {
		$('.form-popup').addClass('active');

		// selectL.onchange = function() {

		// };
		// selectW.onchange = function() {

		// };
		
		let l = selectL.value;
    let w = selectW.value;
    let area = l * w;

    let needPacks = area / 4;
	  let resultEight = Math.floor(needPacks / 8);
	  let resultSix = Math.floor(needPacks / 6);

	  document.getElementById("sl").innerHTML = l;
	  document.getElementById("sw").innerHTML = w;
	  document.getElementById("area").innerHTML = area;
	  document.getElementById("needPacks").innerHTML = needPacks;


	  let a = needPacks % 8;
	  let aE = needPacks / 8;

	  let b = needPacks % 6;
	  let bS = needPacks / 6;

	  let i = 0;
	  let y = 0;

	  if ( needPacks <= 6 ) {
	  	document.getElementById("packsSix").innerHTML = 1;
	  	document.getElementById("packsEight").innerHTML = 0;
	  } else if ( a == 0 && resultEight == aE ) {
	  	document.getElementById("packsSix").innerHTML = 0;
	  	document.getElementById("packsEight").innerHTML = resultEight;
	  } else if ( b == 0 ) {
	  		i = needPacks;
	  		do {
	  			i = i - 6;
	  			y = y + 1;
				} while ( i % 8 !== 0 );
	  		document.getElementById("packsSix").innerHTML = y ;
	  		document.getElementById("packsEight").innerHTML = i / 8;
	  } else if ( needPacks % 2 == 1 ) {
	  		i = needPacks + 1;
	  		do {
	  			i = i - 6;
	  			y = y + 1;
				} while ( i % 8 !== 0 );
	  		document.getElementById("packsSix").innerHTML = y ;
	  		document.getElementById("packsEight").innerHTML = i / 8;
	  } else if ( a > 0 || b > 0 ) {
	  		i = needPacks;
	  		do {
	  			i = i - 6;
	  			y = y + 1;
				} while ( i % 8 !== 0 );
	  		document.getElementById("packsSix").innerHTML = y ;
	  		document.getElementById("packsEight").innerHTML = i / 8;
	  }

	});

	$('.popup-button').on('click', function() {
		$('.form-popup').removeClass('active');
			i = 0;
	 	  y = 0;
	});

});

