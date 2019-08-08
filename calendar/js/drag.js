define(function(require,exports,module){
	function drag(){
			var box = document.getElementById("box");
			console.log(box.innerHTML)
			var mouseX = 0,mouseY = 0;//存放鼠标的初始坐标
			var boxLeft = 0,boxTop = 0;//存放div的起始左边路和上边距
			var winWidth = document.documentElement.clientWidth;//获取窗口当前可视区域的宽度
			var winHeight = document.documentElement.clientHeight;//获取窗口当前可是区域的高度
			var maxWidth = winWidth-box.offsetWidth;//滑块可移动的最大宽度
			var maxHeight = winHeight - box.offsetHeight;//滑块可移动的最大高度
			//定义div的按下事件
			function down(event){
				var ev = event||window.event;
				mouseX = ev.clientX;//鼠标初始横坐标
				mouseY = ev.clientY;//鼠标初始纵坐标
				boxLeft = box.offsetLeft;//div的初始左边距
				boxTop = box.offsetTop;//div的初始上边距
				move();
			}
			//div监听事件
			box.addEventListener('mousedown',down);
			//鼠标移动事件
			function move(event){
				var ev = event||window.event;
				var lastLeft = ev.clientX - mouseX + boxLeft;//div最终的left值
				var lastTop = ev.clientY - mouseY + boxTop;//div最终的top值
				//判断是否到最左边或者最右边
				if(lastLeft<0){
					lastLeft = 0;
				}else if(lastLeft>maxWidth){
					lastLeft = maxWidth;
				}
				//判断是否到最上边或者最下边
				if(lastTop<0){
					lastTop = 0;
				}else if(lastTop>maxHeight){
					lastTop = maxHeight;
				}
				box.style.left = lastLeft + "px";
				box.style.top = lastTop + "px";
			}
			//鼠标监听事件
			function mouse(){
				document.addEventListener('mousemove',move);
			}
			//鼠标抬起移除监听
			function up(){
				document.removeEventListener('mousemove',move);
			}
			//添加移动事件
			box.addEventListener('mousedown',mouse);
			//鼠标抬起移除move事件
			document.addEventListener('mouseup',up);
	}
	
	
	
	
	exports.drag = drag;
})