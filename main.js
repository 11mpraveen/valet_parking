canvas =  document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

img_image = "car2.png";
background_image = "parkingLot.jpg";
canvas_width = 900;
canvas_height =  700;
car_width = 115;
car_height = 175;

car_x = 10;
car_y = 375;

function add(){
    //alert("I am called");

    img_back = new Image(); 
	img_back.onload = uploadback; 
	img_back.src = background_image; 

    img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
    
}

function uploadimg(){
    ctx.drawImage(img_imgTag, car_x, car_y, car_width, car_height);
}

function uploadback(){
    ctx.drawImage(img_back, 0, 0, canvas_width, canvas_height);
}

window.addEventListener("keydown", keydown_function);

function up(){
    car_y = car_y - 10;
    console.log("When up arrow is pressed x = " + car_x + " | y = " + car_y);
    uploadback();
    uploadimg();
    //img_imgTag.car_y = img_imgTag.car_y - 10;
}

function down(){
    car_y = car_y + 10;
    console.log("When down arrow is pressed x = " + car_x + " | y = " + car_y);
    uploadback();
    uploadimg();
}

function left(){
    car_x = car_x - 10;
    console.log("When left arrow is pressed x = " + car_x + " | y = " + car_y);
    uploadback();
    uploadimg();
}

function right(){
    car_x = car_x + 10;
    console.log("When right arrow is pressed x = " + car_x + " | y = " + car_y);
    uploadback();
    uploadimg();
}
function keydown_function(e){
    keydown = e.keyCode;
    console.log(keydown);

    if (keydown == 38){
        up();
    }

    if (keydown == 40){
        down();
    }

    if (keydown == 37){
        left();
    }

    if (keydown == 39){
        right();
    }
}
