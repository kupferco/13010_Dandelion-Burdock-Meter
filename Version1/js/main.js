

var meter;

function init(){
	meter = new Meter();
	meter.init();
}


function Meter(){

	this.svg = document.getElementById('MeterSVG');
	this.svgContent = $(this.svg).find("#document");

	this.arrow1 = document.getElementById('Arrow1SVG');
	this.arrow2 = document.getElementById('Arrow2SVG');
	this.arrow3 = document.getElementById('Arrow3SVG');
	this.arrow4 = document.getElementById('Arrow4SVG');
	this.arrow5 = document.getElementById('Arrow5SVG');
	$(this.arrow1).rotate(40);
	$(this.arrow2).rotate(-40);
	$(this.arrow3).rotate(70);
	$(this.arrow4).rotate(150);
	$(this.arrow5).rotate(230);
	this.arrows = [this.arrow1,this.arrow2,this.arrow3,this.arrow4,this.arrow5];
	this.digits = $(".Digit");//[$("#digit1"),$("#digit2"),$("#digit3"),$("#digit4"),$("#digit5")];

	this.dayDuration = new Date(clockWorkingHoursEnd - clockWorkingHoursStart);
	this.startDate = startDate;
	this.daysDivider = 24*60*60*1000;

	for(var i=0;i<this.arrows.length;i++){
		$(this.arrows[i]).css("left",i*72);
		// $(this.arrows[i]).css("top",125);
	}

	var w = 270;
	var wPart = w/this.digits.length;
	for(var i=0;i<this.digits.length;i++){
		$(this.digits[i]).css("left",i*wPart);
		$(this.digits[i]).text(0);
		// $(this.arrows[i]).css("top",125);
	}

	var this_ = this;

	this.init = function(){
		var percentOffsetDay = this.getWorkingPercentAtDay(this_.startDate);
		this_.startOffsetSum =  (startOffsetDays+percentOffsetDay) * dailySum;
		this_.startOffsetDate = new Date( this_.getDateMorning( this_.startDate ) - (startOffsetDays  * this_.daysDivider));
		this_.animate();
		this_.calculateSum();
	};


	this.calculateSum = function(){
		var now = new Date();
 		var daysPercent = this_.getTimeDistanceToOffset( now );
 		var finalSum = daysPercent * dailySum + this_.startOffsetSum;
		// console.log("Final sum = " + finalSum);
		return finalSum;
	};

	this.getDateMorning = function(date){
		var morning = new Date( date );
		morning.setHours(clockWorkingHoursStart.getHours());
		morning.setMinutes(clockWorkingHoursStart.getMinutes());
		morning.setSeconds(clockWorkingHoursStart.getSeconds());
		return morning;
	};

	this.getTimeDistanceToOffset = function(date){
		var percentDay = this_.getWorkingPercentAtDay(date);
		var days = Math.round((this_.getDateMorning(date) - this_.startOffsetDate) / this_.daysDivider);
		return days + percentDay;
	};


	this.getWorkingPercentAtDay = function(date){
		var morning = this_.getDateMorning( date );
		var percentDay = (date - morning) / this_.dayDuration;
		return percentDay;
	};

	this.animate = function(){
		requestAnimFrame( this_.animate );
		var sum = this_.calculateSum();
		var sumArrows = sum*10.0;
		for(var i=0;i<5;i++){
			var a = $(this_.arrows[4-i]);
			var angle =  360 * (sumArrows / Math.pow(10,i));
			if(i%2==1) angle = 360 - angle;
			// angle = a.getRotateAngle() + (new Date()).getTime() % 360;
			// if(i==1) console.log("a/ngle : " + angle);
			a.rotate( angle );
		}

		var sumDigits = ""+Math.round(sum);
		while(sumDigits.length < this_.digits.length) sumDigits = "0"+sumDigits;

		// console.log("sum : " + sum + "   : " + this_.digits.length);
		for(var i=0;i<this_.digits.length;i++){
			// console.log(this_.digits[i].text());
			$(this_.digits[this_.digits.length-i-1]).text(sumDigits.charAt(sumDigits.length-i-1));
		}


//		this.arrow1.
//		$(this_.arrow1).attr('transform', 'translate(1 1) rotate(4)');
	};

}




