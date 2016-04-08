var numberQueue=new Array(1,2,3,4,5,6,7,8,9,10,11,12);

function UpdateBlocks()
{
  var html = "";
  var model = "";
  var style = "style='height:{height}px'";
  for (var i=0; i<numberQueue.length; i++)
  {
     model = "<div class='block'"+ style + ">"  +numberQueue[i]+"</div>"; //这个单引号很重要
     html += model.replace('{height}', numberQueue[i])
  } 
  var blockchart = document.getElementById('blockchart');
  blockchart.innerHTML = html;
}

function NumLeftIn()
{
  if(numberQueue.length >= 30)
  {
    alert("最多30个数字");
  }
  else
  {
    var NewNum = document.getElementById('NumberEdit').value;
    if(!isNaN(NewNum)){
      if ((NewNum>=10)&&(NewNum<=100)) {
        numberQueue.unshift(NewNum);
        UpdateBlocks();
      }   
      else{
        alert("请填写10-100之间的数字");  
      }
    }
    else{
      alert("请填写数字");
    }
  }
}

function NumLeftOut()
{
  if(numberQueue.length == 0)
  {
    alert("数列已空");
  }
  else{
    numberQueue.shift();  
    UpdateBlocks();
  }  
}

function NumRightIn()
{
  if(numberQueue.length >= 30)
  {
    alert("最多30个数字");
  }
  else
  {
    var NewNum = document.getElementById('NumberEdit').value;
    if(!isNaN(NewNum)){
      if ((NewNum>=10)&&(NewNum<=100)) {
        numberQueue.push(NewNum);
        UpdateBlocks();
      }   
      else{
        alert("请填写10-100之间的数字");  
      }
    }
    else{
      alert("请填写数字");
    }
  }  
}

function NumRightOut()
{
  if(numberQueue.length == 0)
  {
    alert("数列已空");
  }
  else{
    numberQueue.pop();  
    UpdateBlocks();
  }   
}

function bubbleSort(numberQueue)
{
  var i = numberQueue.length, j;
  var tempExchangVal;
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if (numberQueue[j] > numberQueue[j + 1]) {
        tempExchangVal = numberQueue[j];
        numberQueue[j] = numberQueue[j + 1];
        numberQueue[j + 1] = tempExchangVal;
      }
    }
    i--;
  }
}

function MyBubbleSort()
{
  bubbleSort(numberQueue);
  UpdateBlocks();
}

function selectionSort(numberQueue)
{
  var minIndex=0;
  var temp=0;
  for(var i=0;i<numberQueue.length-1;i++)
  {
    minIndex=i;//无序区的最小数据数组下标
    for(var j=i+1;j<numberQueue.length;j++)
    {
      //在无序区中找到最小数据并保存其数组下标
      if(numberQueue[j]<numberQueue[minIndex])
      {
          minIndex=j;
      }
    }
    if(minIndex!=i)
    {
      //如果不是无序区的最小值位置不是默认的第一个数据，则交换之。
      temp=numberQueue[i];
      numberQueue[i]=numberQueue[minIndex];
      numberQueue[minIndex]=temp;
    }
  }

}

function MySelectionSort()
{
  selectionSort(numberQueue);
  UpdateBlocks();  
}

function quickSort(array){
  function sort(prev, numsize){
    var nonius = prev;
    var j = numsize -1;
    var flag = array[prev];
    if ((numsize - prev) > 1) {
      while(nonius < j){
        for(; nonius < j; j--){
          if (array[j] < flag) {
            array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
            break;
          };
        }
        for( ; nonius < j; nonius++){
          if (array[nonius] > flag){
            array[j--] = array[nonius];
            break;
          }
        }
      }
      array[nonius] = flag;
      sort(0, nonius);
      sort(nonius + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}

function MyQuickSort()
{
  quickSort(numberQueue);
  UpdateBlocks();
}


function radixSort(myArray, radix, radixTimes)
{
  /*生成桶*/
  var bucket = new Array();  //先声明一维数组；
  for(var j=0;j<radix;j++)
  {    //一维长度为radix,radix为变量
      bucket[j]=new Array();  //声明二维数组；
  }

  var endFlag = true;
  var tempMod, tempResidual;
  var copyOfArray = new Array();

  for(var i=0;i<myArray.length;i++)
  {
    copyOfArray[i]=myArray[i];
    for (var j=0; j<radixTimes; j++)
    {
      copyOfArray[i]=Math.floor(copyOfArray[i] / radix);
    }

    tempMod = Math.floor(copyOfArray[i] / radix);
    if(tempMod > 0)
    {
      endFlag = false;
    }
    tempResidual = copyOfArray[i]  - tempMod * radix;
    bucket[tempResidual].push(myArray[i]);
  }

  var m=0;
  for(var j=0;j<bucket.length;j++)
  {
    for (var k=0;k<bucket[j].length;k++)
    {
      myArray[m] = bucket[j][k];
      m++;
    }
  }

  if(endFlag)
  {
    return;
  }
  else
  {
    radixTimes++;
    radixSort(myArray,radix,radixTimes);
  }
}


function MyRadixSort()
{
  radixSort(numberQueue, 10, 0);
  UpdateBlocks();  
}

function shellSort(array)
{
  len=array.length;
  for(var fraction=Math.floor(len/2);fraction>0;fraction=Math.floor(fraction/2)){
    for(var i=fraction;i<len;i++){
      for(var j=i-fraction;j>=0&&array[j]>array[fraction+j];j-=fraction){
        var temp=array[j];
        array[j]=array[fraction+j];
        array[fraction+j]=temp;
      }
    }
  }
  //console.log(array);
  return array;
}

function MyShellSort()
{
  shellSort(numberQueue);
  UpdateBlocks();
}


function MySearch()
{
  var SearchTextInput = SearchText.value;
  if (SearchTextInput === ""){
      alert("您还尚未输入！");
  }
  else {
    var blockchart = document.getElementById('blockchart');
    var BlockList = blockchart.getElementsByTagName("div");

    for(var i= 0; i<BlockList.length; i++){
      if(BlockList[i].innerText.indexOf(SearchTextInput) > -1){
          BlockList[i].style.backgroundColor = "#00FF00";
      }
    }
  }
}

function init() {

  for (var i=0; i<numberQueue.length; i++)
  {
    numberQueue[i] = Math.floor(91*Math.random()+10);
  }
  UpdateBlocks();
}