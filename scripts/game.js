$(function(){
	// Fuction to generate a random number
	var randomGenerator=function(max){
		var number=0;
		while(number<60 || number>max)
			number = Math.random() * 1500;
		return number;
	}

	// Function to generate the cards dynamically
	var generateCards=function(){
		var cards="";
		for(var j=0;j<13;j++)
		{
			cards+='<div id="hearts'+j+'" class="card text-center hearts-card" data-id="hearts'+ j +'" draggable="true" ondragstart="drag(event)"><h3>Hearts</h3><h2>'+(j+1)+'</h2></div>'+
				'<div id="diamonds'+j+'" class="card text-center diamonds-card" data-id="diamonds'+ j +'" draggable="true" ondragstart="drag(event)"><h3>Diamonds</h3><h2>'+(j+1)+'</h2></div>'+
				'<div id="spades'+j+'" class="card text-center spades-card" data-id="spades'+ j +'" draggable="true" ondragstart="drag(event)"><h3>Spades</h3><h2>'+(j+1)+'</h2></div>'+
				'<div id="clubs'+j+'" class="card text-center clubs-card" data-id="clubs'+ j +'" draggable="true" ondragstart="drag(event)"><h3>Clubs</h3><h2>'+(j+1)+'</h2></div>'
		}
		$('#cards-container').html(cards);
		scatterCards();
	}

	// Function to give position to cards
	var scatterCards=function(){
		var top, left;
		for(var i=0;i<52;i++)
		{
			top = randomGenerator(300);
			left = randomGenerator(1100);
			$(".card").eq(i).css("top", top+'px').css("left", left+'px');
		}
	}	

	// Function to attach events
	var attachEvents=function(){
		$('#new-game-btn').bind('click', newGame);
	}

	// Function to start a new game
	var newGame=function(){
		generateCards();
		attachEvents();	
	}

	newGame();
	
})