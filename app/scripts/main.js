console.log('\'Allo \'Allo!');


(function(){

	'use strict';

	var researchMethods = [
		{
			'name': 'Card Sorting',
			'icon': 'cards.png',
			'text' :'We developed card sorting later in our research phase as a low-commitment, more casual way to approach families waiting for a loved one in surgery. The primary purpose of the card sort was to learn the information that is most important to families in the waiting room. We also wanted to learn why certain information was important. As families talked through their thinking, the reasons behind their choices became clear.'
		},
		{
			'name': 'Surveys',
			'icon': 'cards.png',
			'text' :'We implemented a survey study to more easily collect data across a larger sample of families in the waiting room so we could draw comparisons. We wanted to learn general information about these families as well as get a sense of their satisfaction with the information received during the operation. We also wanted to evaluate families’ feeling of obligation to stay in the waiting room and understand why they felt that way.'
		},
		{
			'name': 'Directed Storytelling',
			'icon': 'cards.png',
			'text' :'As interviewing families in a high-anxiety state was not appropriate, we focused on hospital staff instead. These expert interviews shed light on the waiting room landscape. Hospital workers regularly interface with families and so they have observed longitudinal trends. Their experience provided insights to issues not necessarily observable on a single day.'
		},
		{
			'name': 'Diaries',
			'icon': 'cards.png',
			'text' :'We conducted a diary study to help understand the human component of the waiting room. Diaries provided information about the thoughts and feelings of families while waiting as well as issues experienced by desk attendants. In a sensitive environment like a hospital, formal interviews with families are not necessarily appropriate. Diaries offered a way to circumvent this sensitivity. Diaries also provided longitudinal data about how waiting room experiences change over time. By answering the same questions every hour, we hoped to see trends throughout the day.'
		},
		{
			'name': 'Observations',
			'icon': 'cards.png',
			'text' :'Observations provided insight into how families interact in the waiting room, how people actually use waiting room technologies, and the role of hospital staff. Additionally, observations made in non-surgical waiting rooms provided understanding into how departmental differences impact the waiting room experience.'
		}
	];

	// researchMethods.forEach(function(m){
	// 	var template = _.template($('#research-template').html());
	// 	$('#research-content').html(template(m));
	// });

	$('#team').on('click', '.team-member',function(){
		$('.profile').css({'display':'block'});
		$('#team-members').addClass('out');
		setTimeout(function(){
			$('.profile').removeClass('out');
		},150);
		setTimeout(function(){
			$('#team-members').css({'display':'none'});
		},310);
	});

	$('#team').on('click', '.back', function(){
		$('#team-members').css({'display':'block'});
		$('.profile').addClass('out');
		setTimeout(function(){
			$('#team-members').removeClass('out');
		},150);
		setTimeout(function(){
			$('.profile').css({'display':'none'});
		},310);
	});


	// initalize nav listeners
	$("li").find("a").click(function(e) {

		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top
		},500);

	});

	// initalize slider
	var count = 0;
	var template = _.template($('#research-template').html());
	count = (count+1)%researchMethods.length;
	$('#research-content').html(template(researchMethods[count]));
	(function(){
		$('.next').on('click', function(){
			var template = _.template($('#research-template').html());
			count = (count+1)%researchMethods.length;
			$('#research-content').html(template(researchMethods[count]));
		});
		$('.back').on('click', function(){
			var template = _.template($('#research-template').html());
			count = (count ==0 ) ? researchMethods.length-1 : count-1;
			$('#research-content').html(template(researchMethods[count]));
		});
	})();

})();