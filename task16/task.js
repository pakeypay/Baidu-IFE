/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
//var aqiData = {};//使用json对象的技术
var data = new Array(); //使用数组技术进行处理
function trim()
{
     return this.replace(/(^\s*)|(\s*$)/g,'');
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city =document.getElementById("aqi-city-input").value.trim(); //获得城市名称
	var air = document.getElementById("aqi-value-input").value.trim();//获得空气质量指数

	if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
	    alert('请输入中英文');
	    return;
	}
	if(!air.match(/^\d+$/)){
	    alert('必须是整数');
	    return;
	}
	//aqiData[city] = air;  
	var record =[];
	record.push(city);
	record.push(air);
	data.push(record);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table='';
	for(var i =0;i<data.length;i++){
		table +='<tr id="datalist'+i+'"><td>'+data[i][0]+'</td><td>'+data[i][1]+'</td><td><button value='+i+' onclick="delBtnHandle(this);">删除</button></td></tr>';
	}
	document.getElementById("aqi-table").innerHTML=table;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(id) {
  // do sth.
  data.splice(id.value,1);
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").onclick=addBtnHandle;
}

init();