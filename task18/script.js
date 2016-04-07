var numberQueue=new Array(1,2,3,4);

function UpdateBlocks()
{
  var html = "";
  var model = "";
  for (var i=0; i<numberQueue.length; i++)
  {
    model = "<div class='block'>"+numberQueue[i]+"</div>"; //这个单引号很重要
    html += model;
  } 
  var blockchart = document.getElementById('blockchart');
  blockchart.innerHTML = html;
}

function NumLeftIn()
{
  var NewNum = document.getElementById('NumberEdit').value;
  if(!isNaN(NewNum)){   
    numberQueue.unshift(NewNum);
    UpdateBlocks();
  }
  else{
    alert("请填写数字");
  }
}

function NumLeftOut()
{
  numberQueue.shift();  
  UpdateBlocks();
}

function NumRightIn()
{
  var NewNum = document.getElementById('NumberEdit').value;
  if(!isNaN(NewNum)){
    numberQueue.push(NewNum);
    UpdateBlocks();
  }
  else{
    alert("请填写数字");
  }  
}

function NumRightOut()
{
  numberQueue.pop();
  UpdateBlocks();  
}



function init() {

  for (var i=0; i<numberQueue.length; i++)
  {
    numberQueue[i] = Math.floor(10*Math.random());

  }
  UpdateBlocks();
}