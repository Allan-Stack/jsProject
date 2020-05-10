var str = 'The Quick Brown';
var TOP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var BOTTOM = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(TOP.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toBOTTOM());
    }
    else if(BOTTOM.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toTOPCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));
