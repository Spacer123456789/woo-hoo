
// Create canvas variable
canvas=new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_x=0
ball_y=0
hole_x=400
hole_y=800

scale_to_width = 5;
scale_to_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	function load_Image(get_image){
		fabric.Image.fromURL(get_image,function(Img){
			hole_obj=Img;
			hole_obj.scaleToWidth(scale_to_width);
			hole_obj.scaleToHeight(scale_to_height);
			hole_obj.set({
				top:hole_y,
				left:hole_x
			});
			canvas.add(hole_obj);
		});
		new_image();
	}
}


	


function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL(get_image,function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(scale_to_width);
		ball_obj.scaleToHeight(scale_to_height);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
	new_image();
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="you have hit the goal!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y=ball_y-block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("when the up arrow key is pressed, x="+ball_x+"y="+ball_y);
			canvas.remove(ball_object);
		
			ball_update();
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y<=500){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("when the down arrow key is pressed, x="+ball_x+"y="+ball_y);
			canvas.remove(ball_object);
		
			ball_update();
		// Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			
			ball_x=ball_x-block_image_width;
    	console.log("block_image_width="+block_image_width);
    	console.log("when the left arrow key is pressed, x="+ball_x+"y="+ball_y);
    	canvas.remove(ball_object);


    	ball_update();
	// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
    	console.log("block_image_width="+block_image_width);
   	 	console.log("when the right arrow key is pressed, x="+ball_x+"y="+ball_y);
    	canvas.remove(ball_object);

    	ball_update();
			// Write a code to move ball right side.
		}
	}
	
	}
