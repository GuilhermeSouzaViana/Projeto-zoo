    let b = document.getElementById("body")
    let trt = document.getElementById("padrao")
    let f=document.getElementById("form")
    let t=document.getElementById("tema")
    let tema=document.getElementById("ts")
    let btn=document.getElementById("bbt")
    let op=document.getElementById("tx")

    btn.addEventListener("click",function(){
      alert("Formulário enviado !")
    })

    t.addEventListener("click",function(){
       if(tema.style.display=="block"){
        tema.style.display="none"
       }else{
        tema.style.display="block"
       }

    })


    trt.addEventListener("click", function () {
     if(op.value=="1"){
      b.style.backgroundImage = "url(../Imagens/joaninha.jpg)"
      f.style.backgroundImage = "url(../Imagens/joani.jpg)"
      t.style.backgroundColor = "#93ac4e"
      f.style.color ="white"
        
     }else if(op.value=="2"){
      b.style.backgroundImage = "url(../Imagens/abelha.jpg)"
      f.style.backgroundImage = "url(../Imagens/abelh.jpg)"
      t.style.backgroundColor = "#d59e42"
      f.style.color ="white"
     
    }else if(op.value=="3"){
      b.style.backgroundImage = "url(../Imagens/tamandua.jpg)"
      t.style.backgroundColor = "#807753"
      f.style.backgroundImage = "url(../Imagens/tamand.jpg)"
     
    }else if(op.value=="4"){
      b.style.backgroundImage = "url(../Imagens/orca.jpg)"
      t.style.backgroundColor = "#4977b4"
      f.style.backgroundImage = "url(../Imagens/orc.jpg)"
    
    }else if(op.value=="5"){
      b.style.backgroundImage = "url(../Imagens/polvo.jpg)"
      t.style.backgroundColor = "#1b1006"
      f.style.backgroundImage = "url(../Imagens/polv.jpg)"
      f.style.color ="black"
   
    }else if(op.value=="6"){
      b.style.backgroundImage = "url(../Imagens/onça.jpg)"
      t.style.backgroundColor = "#2d2d21"
      f.style.backgroundImage = "url(../Imagens/onç.jpg)"
      f.style.color ="white"
    
    }else if(op.value=="7"){
      b.style.backgroundImage = "url(../Imagens/urso.jpg)"
      f.style.backgroundImage = "url(../Imagens/urs.jpg)"
      t.style.backgroundColor = "#f5e0ad"
      f.style.color ="black"
    
    }else if(op.value=="8"){
      b.style.backgroundImage = "url(../Imagens/g.jpg)"
      f.style.backgroundImage = "url(../Imagens/gir.jpg)"
      t.style.backgroundColor = "#d1d5de"
      f.style.color ="black"
   
    }else if(op.value=="9"){
      b.style.backgroundImage = "none"
      f.style.backgroundImage = "none"
      t.style.backgroundColor = "#3E4040"
      f.style.color ="black"

    }else{
      alert("opçao inválida")
    }
         
    })