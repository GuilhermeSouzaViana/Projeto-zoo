    let b = document.getElementById("body")
    let b1 = document.getElementById("joaninha")
    let b2 = document.getElementById("abelha")
    let b3 = document.getElementById("tamandua")
    let b4 = document.getElementById("orca")
    let b5 = document.getElementById("polvo")
    let b6 = document.getElementById("onça")
    let b7 = document.getElementById("urso")
    let b8 = document.getElementById("original")
    let b9 = document.getElementById("padrao")
    let f=document.getElementById("form")
    let t=document.getElementById("tema")
    let tema=document.getElementById("ts")
    let btn=document.getElementById("bbt")

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

    b1.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/joaninha.jpg)"
      f.style.backgroundImage = "url(../Imagens/joani.jpg)"
      t.style.backgroundColor = "#93ac4e"
      f.style.color ="white"
    })


    b2.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/abelha.jpg)"
      f.style.backgroundImage = "url(../Imagens/abelh.jpg)"
      t.style.backgroundColor = "#d59e42"
      f.style.color ="white"
    })

    b3.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/tamandua.jpg)"
      t.style.backgroundColor = "#807753"
      f.style.backgroundImage = "url(../Imagens/tamand.jpg)"
    })

    b4.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/orca.jpg)"
      t.style.backgroundColor = "#4977b4"
      f.style.backgroundImage = "url(../Imagens/orc.jpg)"
    })


    b5.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/polvo.jpg)"
      t.style.backgroundColor = "#1b1006"
      f.style.backgroundImage = "url(../Imagens/polv.jpg)"
      f.style.color ="black"
    })

    b6.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/onça.jpg)"
      t.style.backgroundColor = "#2d2d21"
      f.style.backgroundImage = "url(../Imagens/onç.jpg)"
      f.style.color ="white"
    })

    b7.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/urso.jpg)"
      f.style.backgroundImage = "url(../Imagens/urs.jpg)"
      t.style.backgroundColor = "#f5e0ad"
      f.style.color ="black"
    })

    b8.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/g.jpg)"
      f.style.backgroundImage = "url(../Imagens/gir.jpg)"
      t.style.backgroundColor = "#d1d5de"
      f.style.color ="black"
    })


    b9.addEventListener("click", function () {
      b.style.backgroundImage = "none"
      f.style.backgroundImage = "none"
      t.style.backgroundColor = "gray"
      f.style.color ="black"
    })