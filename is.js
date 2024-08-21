var img= ["birds/2.jpg", "birds/3.jpg", "birds/4.jpg"];
var imgSrc = document.getElementById("bd");

var count=0;


function image1(){

    count++

    if(count>=img.length){
        count=0;

    imgSrc.src= img[count];


    }

    else{
imgSrc.src=img[count];

    }




}


function image(){


    count--;

    if(count<0){
        count= img.length -1;

    imgSrc.src= img[count];


    }

    else{
imgSrc.src=img[count];

    }



}
