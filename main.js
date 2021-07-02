canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_x=5;
car_y=225;
car_width=75;
car_height=100;
background_image="parkingLot.jpg"
car_image="car2.png";
function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    car_img=new Image();
    car_img.onload=showCar();
    car_img.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function showCar(){
    ctx.drawImage(car_img, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}
function up(){
if(car_y>=0){
    car_y-=10;
    uploadBackground();
    showCar();
}
}
function down(){
    if(car_y<=500){
        car_y+=10;
        uploadBackground();
        showCar();
    }
}
function left(){
    if(car_x>=0){
        car_x-=10;
        uploadBackground();
       showCar();
    }
}
function right(){
    if(car_x<=700){
        car_x+=10;
        uploadBackground();
        showCar();
    }
}