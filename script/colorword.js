var content=document.getElementById("colorword");
var array="Happy Birthday".split('');

var init=function(){
    var tmp="";
    array.forEach(char => {
        tmp+='<span style="color:'+getRandomColor()+'">'+char+'</span>';
    });
    content.innerHTML="";
    content.innerHTML=tmp;
}

function getRandomColor()
{    return (function (m, s, c) 
    {       
         return (c ? arguments.callee(m, s, c - 1) : '#') +  s[m.floor(m.random() * 16)];
    })(Math, '0123456789abcdef', 5);
}