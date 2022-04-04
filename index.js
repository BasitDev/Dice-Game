
    var randomNumber1 = Math.floor(Math.random()*6)+1; //random number 1 - 6
    
    var randomDiceImage1 = "images/dice"+randomNumber1+".png" // images/dice1.png - images/dice6.png

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    
    var randomDiceImage2 = "images/dice"+randomNumber2+".png" 
    
    var image1 = document.querySelectorAll("img")[0]; // [img1] dice 1 will randomly change image on refresh

    image1.setAttribute("src", randomDiceImage1); // we are setting src attribute of image manually

    var image2 = document.querySelectorAll("img")[1]; // [img2] dice 2 will randomly change image on refresh

    image2.setAttribute("src", randomDiceImage2); // we are setting src attribute of image manually


    if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "draw"
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins"
    }else{
        document.querySelector("h1").innerHTML = "Player 2 Wins"
    }