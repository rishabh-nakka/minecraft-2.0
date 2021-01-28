var canvas= new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(keypressed=="84"){
    block_update('trunk.jpg');
    console.log("t");
}
if(keypressed=="68"){
    block_update('dark_green.png');
    console.log("d");
}
if(keypressed=="76"){
    block_update('light_green.png');
    console.log("l");
}
if(keypressed=="71"){
    block_update('ground.png');
    console.log("g");
}
if(keypressed=="87"){
    block_update('wall.jpg');
    console.log("w");
}
if(keypressed=="89"){
    block_update('yellow_wall.png');
    console.log("y");
}
if(keypressed=="82"){
    block_update('roof.jpg');
    console.log("r");
}
if(keypressed=="67"){
    block_update('cloud.jpg');
    console.log("c");
}
if(keypressed=="85"){
    block_update('unique.png');
    console.log("u");
}
if(keypressed=="80" && e.shiftKey==true){
    block_image_width=block_image_width+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    block_image_height=block_image_height+10;
    document.getElementById("current_height").innerHTML=block_image_height;
    console.log("p");
}
if(keypressed=="77" && e.shiftKey==true){
    block_image_width=block_image_width-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    block_image_height=block_image_height-10;
    document.getElementById("current_height").innerHTML=block_image_height;
    console.log("m");
}
if(keypressed=="38"){
     up()
    console.log("up arrow");
}
if(keypressed=="40"){
    down()
   console.log("down arrow");
}
if(keypressed=="37"){
    left()
   console.log("left arrow");
}
if(keypressed=="39"){
    right()
   console.log("right arrow");
}
}
function up(){
    player_y=player_y-10;
    canvas.remove(player_object);
    player_update();
}
function down(){
    player_y=player_y+10;
    canvas.remove(player_object);
    player_update();
}
function left(){
    player_x=player_x-10;
    canvas.remove(player_object);
    player_update();
}
function right(){
    player_x=player_x+10;
    canvas.remove(player_object);
    player_update();
}
