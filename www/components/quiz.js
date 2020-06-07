// This is a JavaScript file
$(document).on("click","#e1",function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Sua resposta está correta!");
      navigator.notification.beep(1);
    }
    else{
       navigator.notification.alert("Sua resposta está errada :(");
       navigator.vibrate(1500);
    }
   
  }
  navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#e2",function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Sua resposta está correta!");
      navigator.notification.beep(1);
    }
    else{
       navigator.notification.alert("Sua resposta está errada :(");
       navigator.vibrate(1500);
    }
   
  }
  navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#e3",function(){
  function confirma(buttonIndex){
    if(buttonIndex == "2"){
      navigator.notification.alert("Sua resposta está correta!");
      navigator.notification.beep(1);
    }
    else{
       navigator.notification.alert("Sua resposta está errada (existem pessoas estranhas no mundo).");
       navigator.vibrate(1500);
    }
   
  }
  navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});