//添加事件(兼容方式)
function addEvent(dom,type,fn){
	//对于支持DOM2级事件处理程序addeventListener方法的浏览器
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
	}else if(dom.attachEvent){
	//对于不支持addEventListener方法但支持attchEvent方法的浏览器	
		dom.attachEvent('on'+type,fn);
	}
	else{
	//对于不支持以上两种,但支持on+'事件名'的浏览器
		dom['on'+type]=fn;
	}
}
//获取事件对象
var getEvent=function(event){
	//标准浏览器返回event      IE返回window.event
	return event || window.event;
}

//获取元素
var getTarget=function(event){
	var event=getEvent(event);
	//标准浏览器返回event.target    IE返回event.srcElement;
	return event.target || event.srcElement;
}

//阻止默认行为
var preventDefault=function(event){
	var event=getEvent(event);
	//标准浏览器
	if(event.preventDefault)
	{
		event.preventDefault();
	}else{
	//IE
		event.returnValue=false;
	}
}
//除去字符串两边空白
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, ""); 
};
var Gsc={
	//通过id获取元素
	getid:function(id){
		
		return typeof id==='string'?document.getElementById(id):id;
	},
	getclass:function(classname){
		return typeof classname==='string'?document.getElementsByClassName(classname):classname;
	},
	//设置元素的css属性
	css:function(id,key,value){
		var dom=typeof id==='string'?document.getElementById(id):id;
		dom.style[key]=value;
	},
	//获取css属性值
	getcss:function(id,key){
		var dom=typeof id==='string'?document.getElementById(id):id;
		return dom.style[key];
	},
	html:function(id,value){
		var dom=typeof id==='string'?document.getElementById(id):id;
		dom.innerHTML=value;
	},
	//创建元素
	newElement:function(name){
		return document.createElement(name);
	},
	//设置元素的属性
	attr:function(id,key,value){
		var dom=typeof id==='string'?document.getElementById(id):id;
		dom[key]=value;
	},
	//为元素绑定事件
	on:function(id,type,fn){
		var dom=typeof id==='string'?document.getElementById(id):id;
		//对于支持DOM2级事件处理程序addeventListener方法的浏览器
		if(dom.addEventListener){
			dom.addEventListener(type,fn,false);
		}else if(dom.attachEvent){
		//对于不支持addEventListener方法但支持attchEvent方法的浏览器	
			dom.attachEvent('on'+type,fn);
		}
		else{
		//对于不支持以上两种,但支持on+'事件名'的浏览器
			dom['on'+type]=fn;
		}
	},
	//在最后面插入元素
	append:function(id,child){
		var id=typeof id==='string'?document.getElementById(id):id;
		var child=typeof child==='string'?document.getElementById(child):child;
		id.appendChild(child);
	},
	//在最前面插入元素
	insertBefore:function(id,child){
		var id=typeof id==='string'?document.getElementById(id):id;
		var child=typeof child==='string'?document.getElementById(child):child;
		id.insertBefore(child,id.childNodes[0]);
	},
	//删除元素
	remove:function(id,child){
		var id=typeof id==='string'?document.getElementById(id):id;
		var child=typeof child==='string'?document.getElementById(child):child;
		id.removeChild(child);
	},
	byClass: function(sClass, oParent) {
		var aClass = [];
		var reClass = new RegExp("(^| )" + sClass + "( |$)");
		var aElem = this.byTagName("*", oParent);//获取oParent的所有子集
		for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass;
	},
	getTagName: function(elem, obj) {
		return (obj || document).getElementsByTagName(elem);
	}
};
var SortTable=function(id,base){
	if(this instanceof SortTable)
	{
		this.id=id;
		this.base=base;
	}else{
		return new SortTable(base);
	}
}
SortTable.prototype={
	//初始化
	init:function(){
		var This=this;
		var id=This.id= typeof This.id ==='string'?Gsc.getid(This.id):This.id;
		This.createTable(id);
		addEvent(id,'click',function(event){
			var event= getEvent(event);
			var target=getTarget(event);
			if(target.className==='icon icon-asc'){
				console.log('升序');
				This.sort(target,'asc');
				This.updatetable(id);
			}
			if(target.className==='icon icon-desc'){
				console.log('降序');
				This.sort(target,'desc');
				This.updatetable(id);
			}
		});
		if(This.base['titleTop']){
			window.onscroll = function () {  
            	var top = document.documentElement.scrollTop || document.body.scrollTop;
            	var offsetTop=id.offsetTop;//id 的top
            	var height=id.offsetHeight;//id的高度
            	var left=id.offsetLeft;
            	var sorttable=Gsc.getclass('sorttable')[0];
            	var tr_head=Gsc.getTagName('tr',sorttable)[0];
            	console.log('offsetTop:'+offsetTop+',height:'+height+'left:'+left);
            	if(top>offsetTop&&top<offsetTop+height){
            		Gsc.css(tr_head,'position','fixed');
            		Gsc.css(tr_head,'top','0px');
            		Gsc.css(tr_head,'left',left+'px');
            	}else{
            		Gsc.css(tr_head,'position','relative');
            	}
			}
		}
	},
	createTable:function(id){
		var base=this.base;
		var table=Gsc.newElement('table');
		Gsc.attr(table,'className','sorttable');
		Gsc.append(id,table);
		//添加tr--th
		var tr_head=Gsc.newElement('tr');
		
//		Gsc.attr(tr_head,'className','titleTop');
		
		for(var i=0;i<base['colName'].length;i++)
		{
			var th=Gsc.newElement('th');
			var p=Gsc.newElement('p');
			p.innerHTML=base['colName'][i];
			Gsc.append(th,p);
			if(base['colSort'][i])
			{//判断是否添加排序功能
				var span_asc=Gsc.newElement('span');
				var span_desc=Gsc.newElement('span');
				Gsc.attr(span_asc,'className','icon icon-asc');
				Gsc.attr(span_desc,'className','icon icon-desc');
				Gsc.html(span_asc,'↑');
				Gsc.html(span_desc,'↓');
				Gsc.append(th,span_asc);
				Gsc.append(th,span_desc);
			}
			Gsc.append(tr_head,th);
		}
		Gsc.append(table,tr_head);
		//添加tr--td
		for(var i=0;i<base['rowDate'].length;i++)
		{
			var tr=Gsc.newElement('tr');
			for(var j=0;j<base['rowDate'][i].length;j++)
			{
				var td=Gsc.newElement('td');
				td.innerHTML=base['rowDate'][i][j];
				Gsc.append(tr,td);
			}
			Gsc.append(table,tr);
		}
		
	},
	//排序
	sort:function(target,method){
		var This=this;
		var target_name=target.parentNode.children[0].innerHTML;
		var colName=This.base['colName'];
		for(var i=0;i<colName.length;i++)
		{//查找所要排序的行号(序号)
			if(target_name==colName[i])
			{//进行排序
				if(method==='asc')
				{
					This.base['rowDate'].sort(function(arr1,arr2){
						return parseInt(arr1[i])>parseInt(arr2[i])?1:-1;
					});
				}else{
					This.base['rowDate'].sort(function(arr1,arr2){
						return parseInt(arr1[i])<parseInt(arr2[i])?1:-1;
					});
				}
				
			}
		}
	},
	//修改table中值
	updatetable:function(id){
		var This=this;
		var tds=Gsc.getTagName('td',id);
		var x=0;
		var data=This.base['rowDate'];
		console.log();
		for(var i=0;i<data.length;i++)
		{
			for(var j=0;j<data[i].length;j++)
			{
				tds[x].innerHTML=data[i][j];
				x++;
			}
		}
	}
};
var base={
	colName:['姓名','语文','数学','英语','总分'],//标题
	colSort:[false,true,true,true,true],//是否可以排序
	titleTop:true,
	//单元格内容
	rowDate:[
		['小A','80','90','78','248'],['小B','89','67','100','256'],['小C','100','88','77','265'],['小D','57','84','63','204'],
		['小A','80','90','78','248'],['小B','89','67','100','256'],['小C','100','88','77','265'],['小D','57','84','63','204'],
		['小A','80','90','78','248'],['小B','89','67','100','256'],['小C','100','88','77','265'],['小D','57','84','63','204'],
	],
};
var sorttable=new SortTable('tableBox',base);
sorttable.init();