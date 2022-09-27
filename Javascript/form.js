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
    })


    b2.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/abelha.jpg)"
    })

    b3.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/tamandua.jpg)"
    })

    b4.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/orca.jpg)"
    })


    b5.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/polvo.jpg)"
    })

    b6.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/onça.jpg)"
    })

    b7.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/urso.jpg)"
    })

    b8.addEventListener("click", function () {
      b.style.backgroundImage = "url(../Imagens/pg.jpg)"
    })


    b9.addEventListener("click", function () {
      b.style.backgroundImage = "none"
    })