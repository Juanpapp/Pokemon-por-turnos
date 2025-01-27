var userHP = 100;
var opHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
playerMove = 0;

function waterCannon() {
  if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); 
    if(miss == 1) {
      document.getElementById('message').innerHTML = " ¡El ataque de Blastoise falló! ";
    }
    else {
      document.getElementById('message').innerHTML = " Blastoise usó el cañón de agua "; 
      var critical = Math.floor((Math.random() * 10) + 1); 
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 30; 
        }
      }
      else{
        opHP = opHP - 30; 
      }
      if(opHP < 0){ opHP = 0} 
        document.getElementById('apHP').innerHTML = opHP; 
      if(opHP == 0){
        document.getElementById('message').innerHTML = " ¡Charizard se desmayó! " 
      }
    }
    
    playerMove = 1; 
}
}

function waterPulse() {
  if(playerMove == 0 && userHP != 0) {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡El ataque de Blastoise falló! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise usó el pulso de agua ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 20;
        }
      }
      else{
        opHP = opHP - 20;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    
    if(opHP == 0){
      document.getElementById('message').innerHTML = " ¡Charizard se desmayó! "
    }
  }
  
  playerMove = 1;
}
}

function surf() {
  if(playerMove == 0 && userHP != 0) {
  
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡Falló el ataque de Blastoise! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise surf usado ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 10;
        }
      }
      else{
        opHP = opHP - 10;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    if(opHP == 0){
      document.getElementById('message').innerHTML = " ¡Charizard se desmayó! "
    }
  }
  
  playerMove = 1;
}
}
function tackle() {
  if(playerMove == 0 && userHP != 0) {
  
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡Falló el ataque de Blastoise! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise utilizó Placaje ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 5;
        }
      }
      else{
        opHP = opHP - 5;
      }
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  
    if(opHP == 0){
      document.getElementById('message').innerHTML = " ¡Charizard se desmayó! "
    }
  }
  
  playerMove = 1;
}
}





function flameThrower() {
  var miss = Math.floor((Math.random() * 10) + 1); 
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " ¡El ataque de Charizard falló! " 
  }
  else {
  document.getElementById('message').innerHTML = " Charizard usó lanzallamas " 
    var critical = Math.floor((Math.random() * 10) + 1); 
      if(critical == 4){
        for(var x = 0; x < 2; x++){ 
          userHP = userHP - 30;
        }
      }
      else{
        userHP = userHP - 30; 
      }
  if(userHP < 0) { userHP = 0} 
  document.getElementById('myHP').innerHTML = userHP; 
    if(userHP == 0) { 
      document.getElementById('message').innerHTML = " ¡Blastoise se desmayó! " 
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡El ataque de Charizard falló! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard usó garra de dragón "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 20;
      }
    }
    else{
      userHP = userHP - 20;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " ¡Blastoise se desmayó! "
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡El ataque de Charizard falló! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard usó brasas "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 10;
      }
    }
    else{
      userHP = userHP - 10;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " ¡Blastoise se desmayó! "
    }
  }
}

function growl() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " ¡El ataque de Charizard falló! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard usó gruñido "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 5;
      }
    }
    else{
      userHP = userHP - 5;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " ¡Blastoise se desmayó! "
    }
  }
}



function compPokemon() { 
  if(playerMove == 1 && opHP != 0) { 
  var move = Math.floor((Math.random() * 4) + 1); 
    opAttacks[move](); 
    playerMove = 0; 
  }
}