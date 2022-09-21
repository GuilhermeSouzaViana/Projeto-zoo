var a1 =document.querySelector('#a1')

a1.addEventListener("click", function(){
 if( this.style.scale=='1'){
  this.style.scale='2'
  this.style.margin='300px 0px 300px 140px'
 }else{
  this.style.scale='1'
  this.style.margin='0px 80px 0px 50px'
 }
});

var a2 =document.querySelector('#a2')

a2.addEventListener("click", function(){
if( this.style.scale=='1'){  
this.style.scale='1.7'
this.style.margin='300px 100px 0px 50px'
}else{
this.style.scale='1'
this.style.margin='0px 80px 0px 50px'
}
});

var a3 =document.querySelector('#a3')

a3.addEventListener("click", function(){
if( this.style.scale=='1'){
this.style.scale='2'
this.style.margin='-300px 0px 0px 150px'
}else{
this.style.scale='1'
this.style.margin='0px 80px 0px 50px'
}
});

var a4 =document.querySelector('#a4')

a4.addEventListener("click", function(){
if( this.style.scale=='1'){
this.style.scale='2'
this.style.margin='-300px 150px 0px 0px'
}else{
this.style.scale='1'
this.style.margin='0px 80px 0px 50px'
}
});
