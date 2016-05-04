	<script type="text/javascript">
	//自定义显示区域的宽高
	var data={
		width: 1024,
		height: 768
	};
	//创建一个区域容器
	var odiv=document.createElement('div');
	odiv.style.width=data.width+'px';
	odiv.style.height=data.height+'px';
	odiv.style.background="url('http://placehold.it/"+data.width+"x"+data.height+"')";
	odiv.style.position="relative";
	odiv.style.overflow="hidden";
	document.body.appendChild(odiv);
	//配置图片，自定义路径
	var img1=document.createElement('img');
	img1.src="1.jpg";
	var img2=document.createElement('img');
	img2.src="2.jpg";
	var img3=document.createElement('img');
	img3.src="3.jpg";
	var img4=document.createElement('img');
	img4.src="4.jpg";
	var img5=document.createElement('img');
	img5.src="5.jpg";
	var img6=document.createElement('img');
	img6.src="6.jpg";
	//判断图片是否需要裁剪或不变形拉伸
	function ifFlex(aWidth,aHeight,aImg){
		if (aWidth/aHeight>parseInt(getComputedStyle(aImg).width)/parseInt(getComputedStyle(aImg).height)) {
			if (aWidth>parseInt(getComputedStyle(aImg).width)){
				aImg.style.minWidth=aWidth+'px';
			}else{
				aImg.style.maxWidth=aWidth+'px';
			}
		}else{
			if (aHeight>parseInt(getComputedStyle(aImg).height)) {
				aImg.style.minHeight=aHeight+'px';
			}else{
				aImg.style.maxHeight=aHeight+'px';
			}
		}
	}
	//demo专用，清除用户选择后生成的图片属性,图片多的话可以再建立一个函数简化写法
	function clearImgStyle(){
		img1.style.minWidth="";img1.style.maxWidth="";img1.style.minHeight="";img1.style.maxHeight="";img1.style.top="";img1.style.left="";img1.style.bottom="";img1.style.right="";
		img2.style.minWidth="";img2.style.maxWidth="";img2.style.minHeight="";img2.style.maxHeight="";img2.style.top="";img2.style.left="";img2.style.bottom="";img2.style.right="";
		img3.style.minWidth="";img3.style.maxWidth="";img3.style.minHeight="";img3.style.maxHeight="";img3.style.top="";img3.style.left="";img3.style.bottom="";img3.style.right="";
		img4.style.minWidth="";img4.style.maxWidth="";img4.style.minHeight="";img4.style.maxHeight="";img4.style.top="";img4.style.left="";img4.style.bottom="";img4.style.right="";
		img5.style.minWidth="";img5.style.maxWidth="";img5.style.minHeight="";img5.style.maxHeight="";img5.style.top="";img5.style.left="";img5.style.bottom="";img5.style.right="";
		img6.style.minWidth="";img6.style.maxWidth="";img6.style.minHeight="";img6.style.maxHeight="";img6.style.top="";img6.style.left="";img6.style.bottom="";img6.style.right="";
	}
	//一张图片
	function onepic(){
		odiv.appendChild(img1);
		var img1Width=data.width;
		var img1Height=data.height;
		ifFlex(img1Width,img1Height,img1);
	}
	//两张图片
	function twopics(){
		var img1Width=data.width;
		var img1Height=data.height;
		var div1=document.createElement('div');
		div1.className="revrec";
		div1.style.backgroundImage="url('1.jpg')";
		div1.style.width=img1Width+'px';
		div1.style.height=img1Height+'px';
		odiv.appendChild(div1);
		div1.style.top=0;
		div1.style.left=0;
		var div2=document.createElement('div');
		div2.className="rec";
		div2.style.backgroundImage="url('6.jpg')";
		div2.style.width=img1Width+'px';
		div2.style.height=img1Height+'px';
		odiv.appendChild(div2);
		div2.style.bottom=0;
		div2.style.right=0;
	}
	//三张图片
	function threepics(){
		odiv.appendChild(img1);
		var img1Width=data.width-data.height/2;
		var img1Height=data.height;
		ifFlex(img1Width,img1Height,img1);
		odiv.appendChild(img2);
		var img2Width=data.height/2;
		var img2Height=data.height/2;
		ifFlex(img2Width,img2Height,img2);
		img2.style.right=0;
		img2.style.top=0;
		odiv.appendChild(img3);
		var img3Width=data.height/2;
		var img3Height=data.height/2;
		ifFlex(img3Width,img3Height,img3);
		img3.style.right=0;
		img3.style.bottom=0;
	}
	//四张图片
	function fourpics(){
		odiv.appendChild(img1);
		var img1Width=data.width/2;
		var img1Height=data.height/2;
		ifFlex(img1Width,img1Height,img1);
		img1.style.left=0;
		img1.style.top=0;
		odiv.appendChild(img2);
		ifFlex(img1Width,img1Height,img2);
		img2.style.right=0;
		img2.style.top=0;
		odiv.appendChild(img3);
		ifFlex(img1Width,img1Height,img3);
		img3.style.left=0;
		img3.style.bottom=0;
		odiv.appendChild(img4);
		ifFlex(img1Width,img1Height,img4);
		img4.style.right=0;
		img4.style.bottom=0;
	}
	//五张图片
	function fivepics(){
		var div1=document.createElement('div');
		div1.style.position="absolute";
		div1.style.overflow="hidden";
		div1.style.width=data.width/3*2+'px';
		div1.style.height=data.height/3*2+'px';
		odiv.appendChild(div1);
		div1.appendChild(img1);
		var img1Width=data.width/3*2;
		var img1Height=data.height/3*2;
		ifFlex(img1Width,img1Height,img1);
		div1.style.left=0;
		div1.style.top=0;
		var div2=document.createElement('div');
		div2.style.position="absolute";
		div2.style.overflow="hidden";
		div2.style.width=data.width/3+'px';
		div2.style.height=data.width/3+'px';
		odiv.appendChild(div2);
		div2.appendChild(img2);
		var img2Width=data.width/3;
		var img2Height=data.width/3;
		ifFlex(img2Width,img2Height,img2);
		div2.style.right=0;
		div2.style.top=0;
		var div3=document.createElement('div');
		div3.style.position="absolute";
		div3.style.overflow="hidden";
		div3.style.width=img2Width+'px';
		div3.style.height=data.height/3+'px';
		odiv.appendChild(div3);
		div3.appendChild(img3);
		var img3Height=data.height/3;
		ifFlex(img2Width,img3Height,img3);
		div3.style.left=0;
		div3.style.bottom=0;
		var div4=document.createElement('div');
		div4.style.position="absolute";
		div4.style.overflow="hidden";
		div4.style.width=img2Width+'px';
		div4.style.height=img3Height+'px';
		odiv.appendChild(div4);
		div4.appendChild(img4);
		ifFlex(img2Width,img3Height,img4);
		div4.style.left=img2Width+'px';
		div4.style.bottom=0;
		var div5=document.createElement('div');
		div5.style.position="absolute";
		div5.style.overflow="hidden";
		div5.style.width=img2Width+'px';
		div5.style.height=data.height-img2Width+'px';
		odiv.appendChild(div5);
		div5.appendChild(img5);
		var img5Height=data.height-img2Width;
		ifFlex(img2Width,img5Height,img5);
		div5.style.right=0;
		div5.style.bottom=0;
	}
	//六张图片
	function sixpics(){
		var div1=document.createElement('div');
		div1.style.position="absolute";
		div1.style.overflow="hidden";
		div1.style.width=data.width/3*2+'px';
		div1.style.height=data.height/3*2+'px';
		odiv.appendChild(div1);
		div1.appendChild(img1);
		var img1Width=data.width/3*2;
		var img1Height=data.height/3*2;
		ifFlex(img1Width,img1Height,img1);
		div1.style.left=0;
		div1.style.top=0;
		var div2=document.createElement('div');
		div2.style.position="absolute";
		div2.style.overflow="hidden";
		div2.style.width=data.width/3+'px';
		div2.style.height=data.height/3+'px';
		odiv.appendChild(div2);
		div2.appendChild(img2);
		var img2Width=data.width/3;
		var img2Height=data.height/3;
		ifFlex(img2Width,img2Height,img2);
		div2.style.right=0;
		div2.style.top=0;
		var div3=document.createElement('div');
		div3.style.position="absolute";
		div3.style.overflow="hidden";
		div3.style.width=img2Width+'px';
		div3.style.height=data.height/3+'px';
		odiv.appendChild(div3);
		div3.appendChild(img3);
		var img3Height=data.height/3;
		ifFlex(img2Width,img3Height,img3);
		div3.style.left=0;
		div3.style.bottom=0;
		var div4=document.createElement('div');
		div4.style.position="absolute";
		div4.style.overflow="hidden";
		div4.style.width=img2Width+'px';
		div4.style.height=img3Height+'px';
		odiv.appendChild(div4);
		div4.appendChild(img4);
		ifFlex(img2Width,img3Height,img4);
		div4.style.left=img2Width+'px';
		div4.style.bottom=0;
		var div5=document.createElement('div');
		div5.style.position="absolute";
		div5.style.overflow="hidden";
		div5.style.width=img2Width+'px';
		div5.style.height=img2Height+'px';
		odiv.appendChild(div5);
		div5.appendChild(img5);
		var img5Height=img2Height;
		ifFlex(img2Width,img5Height,img5);
		div5.style.right=0;
		div5.style.top=img3Height+'px';
		var div6=document.createElement('div');
		div6.style.position="absolute";
		div6.style.overflow="hidden";
		div6.style.width=img2Width+'px';
		div6.style.height=img2Height+'px';
		odiv.appendChild(div6);
		div6.appendChild(img6);
		var img6Height=img2Height;
		ifFlex(img2Width,img6Height,img6);
		div6.style.right=0;
		div6.style.bottom=0;
	}	
	//生成图片布局展示
	var btn=document.getElementsByTagName('button')[0];
	var picsNum=document.getElementById('picsNum');
	btn.onclick=function(){
		odiv.innerHTML="";
		clearImgStyle();
		var onum=picsNum.value;
		if (onum==1) {
			onepic();
		}else if(onum==2){
			twopics();
		}else if (onum==3) {
			threepics();
		}else if (onum==4) {
			fourpics();
		}else if (onum==5) {
			fivepics();
		}else if (onum==6) {
			sixpics();
		}
	}
	</script>