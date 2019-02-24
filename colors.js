var Body = {

  SetColor:function(color){
        document.querySelector('body').style.color = color;
  },

  SetBackgroundColor : function(color){
    var select = document.querySelector('body');
    select.style.backgroundColor = color;
  }
}

var Link ={
  SetColor : function(color) {
    var j =0;
    var select = document.querySelector('body');
    var alist = document.querySelectorAll('a');
    while(j < alist.length){
    alist[j].style.color = color;
    j++;}
  }
}

function nightDay(self){

if(self.value === 'night') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';
    Link.SetColor('pink');
  }
else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';
    Link.SetColor('blue');
  }
}
