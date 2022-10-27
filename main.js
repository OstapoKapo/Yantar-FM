let clientId = 'bAqQ5KxTqxKJpKI6Eq9iaCBKn2QYj3TYFuUXzW8H6VY'
  fetch(`https://source.unsplash.com/1920x1080/?Ukrainian-Views`)
  .then((data) => {
  console.log(data);
 
 $('.page1').css("background-image","url("+data.url+")");  
  })
  
  a = setInterval(function(){
    fetch(`https://source.unsplash.com/1920x1080/?Ukrainian-Views`)
    .then((data) => {
        
   $('.page1').css("background-image","url("+data.url+")");  
    })
  },3000);  

a = setInterval(function(){
    fetch('https://complex.in.ua/status-json.xsl?mount=/yantarne')
    .then((response) => {
        return response.json();

    
    })
    .then((data) => {
        
        liveListen__count.innerText = 'Live: ' + data.icestats.source.listeners
        nameSong.innerText = data.icestats.source.title
    });  
},1000)

let stream = new Audio();

stream.src = 'https://complex.in.ua/yantarne';

let rotateDeg = 0;
let streamPlay = false;
let x;
$('.btnPlay').click(function(){
    if(!streamPlay){
    stream.play()
    streamPlay = true;
   
      x = setInterval(function(){
        rotateDeg++
         if(rotateDeg == 360){
             rotateDeg = 0    
         }
             $('.musicPlate').css('transform',`rotate(${rotateDeg}deg)`)
         },100)
    $('.met-ring').css('animation', 'pulse 8s ease-out infinite')
    $('.met-ring').css('-webkit-animation', 'pulse 8s ease-out infinite');
    $('.ring-2').css('-webkit-animation-delay', '2000ms');   
    $('.ring-2').css('animation-delay', ' 2000ms'); 
    $('.ring-3').css('-webkit-animation-delay', '4000ms');   
    $('.ring-3').css('animation-delay', ' 4000ms'); 
    $('.ring-4').css('-webkit-animation-delay', '6000ms');   
    $('.ring-4').css('animation-delay', ' 6000ms'); 
    // btnPlay.style.backgroundImage = "url('../img/btnStop.png')";
    // $('.btnGroup').empty()
    // $('.btnGroup').append(`<img class="btnPlay" id="btnPlay" src="img/btnStop.png" alt="stop">`)
    
   
    }else {
        stream.pause();
        streamPlay = false;
        $('.met-ring').css('animation', '')
        $('.met-ring').css('-webkit-animation', '');
       
        clearTimeout(x)
        
        // btnPlay.style.backgroundImage = "url('../img/btnPlay.png')";
        // $('.btnGroup').empty()
        // $('.btnGroup').append(`<img class="btnPlay" id="btnPlay" src="img/btnPlay.png" alt="play">`)
       
       
        // $('.page1').append(` <img class="btnPlay" id="btnPlay" src="img/btnStop.png" alt="stop">`)
        // $('.btnPlay').css('background-image','url(../img/btnPlay.png)')
        
    }
})

streamVolume.oninput = function(){
    stream.volume = streamVolume.value
}
let platChange = false;






