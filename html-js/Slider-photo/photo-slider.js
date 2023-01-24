let i=0;
let img=[];
let time=4000;
img[0]='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAExVoaGWRq1h0N9QFgU0mYHJTvfII73xRPw&usqp=CAU'
img[1]='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqfK5liCsVmN9hHtbumxduUyQcXDiktGAng&usqp=CAU'
img[2]='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJjZoW0j3dL4iJ4S-I69QDFw3Wye4pJ3hqw&usqp=CAU'
img[4]='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhTxfSakr3IPefkPs3MeQXDoKo0BRKZG4Ww&usqp=CAU'

function sliderImage(){
 document.slider.src=img[i];
 if(i<=img.length){
     i++;
 } else{
     i=0;
 }
 setTimeout("sliderImage()",time);
}
window.onload=sliderImage;