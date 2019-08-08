
(function($){
	 var $parent = null;
	 var setting = {
		week:['日','一','二','三','四','五','六'],
	};
	 var num = 0;
	 var yu = 0;
	  function Data(){
	  	$parent = this;
	  	console.log(this);
	  	$parent.html( creatUl());
	  	time();
	  	creatDateLi();
	  	clickChange()
	  }
	  
	  function creatUl(){
	   var str = `
		   <div class="clock">
				</div>
	   		<div class="header">
				<span class="first"> &lt;&lt; </span>
				<span class="prev"> &lt; </span>
				<span class="riqi">
				</span>
				<span class="next"> &gt; </span>
				<span class="last"> &gt;&gt; </span>
			</div>				
			<ul class="week">
	   `;
	   for(var i=0;i<setting.week.length;i++){
				str += '<li>'+setting.week[i]+'</li>';
			}	
			str += `</ul>
				<ul class='date'></ul>
			`;	
	   return str
	  }
	  
	 
	 function time(){
	 		
			
			
	 		function fn(){
	 			var newDate=new Date();
				var year=newDate.getFullYear();
				var month=(newDate.getMonth()+1)<10?"0"+(newDate.getMonth()+1):newDate.getMonth()+1;
				var day=newDate.getDate()<10?"0"+newDate.getDate():newDate.getDate();
				var hours=newDate.getHours()<10?"0"+newDate.getHours():newDate.getHours();
				var minuts=newDate.getMinutes()<10?"0"+newDate.getMinutes():newDate.getMinutes();
				var seconds=newDate.getSeconds()<10?"0"+newDate.getSeconds():newDate.getSeconds();
				var dates = $parent.find('.header .riqi');
				var clock =  $parent.find('.clock')
				clock.html(year+'-'+month+'-'+day+' '+hours+':'+minuts+':'+seconds+" ")
	 		}
	 	fn();
	 	setInterval(fn,1000);
	 }
	   
	   function creatDateLi(){
	  	 	var list = $parent.find('.date');
			var year_date = $('.riqi');
		
		list.html('');
		//生成空白li;
		var date = new Date();
		date.setDate(1);
		date.setMonth(date.getMonth()+num);
		var week = date.getDay();//当前月1号对应的星期几
		
		date.setDate(0);
		var prevDay = date.getDate();
		for(var i=prevDay-week;i<prevDay;i++){
			var li = $('<li class="pass">'+(i+1)+'</li>');
			list.append(li);
		}
		
		
		var date = new Date();
		var markDay = date.getDate() //获取当天日期
		date.setMonth(date.getMonth()+num)//设置月份
		var year = date.getFullYear();//获取年份
		var m = date.getMonth()+1;//获取月份
		date.setMonth(m);//设置月份
		date.setDate(0);//设置日期
		var nowDate = date.getDate(); //当前月的天数
		
		year_date.html(year+'年'+tiTime(m)+'月');
		
		//生成当前月的天数
		for(var i=0;i<nowDate;i++){
			if(markDay-1==i&&num==0){
				var li = $('<li class="show">'+(1+i)+'</li>');
			}else{
				var li = $('<li>'+(1+i)+'</li>');
			}
			list.append(li);
		}
		
		
		
		//下一个月的天数
		
		var totol = 42;
		var length = list.find('li').length;
		
		for(var i=0;i<totol-length;i++){//计算出上个月和本月用了多少个格子,剩下为下月可用的格子
			var li = $('<li class="pass">'+(i+1)+'</li>');
			list.append(li);
		}
		console.log(length)
		
	}
	

	
	 function clickChange(){
	 	var first = $parent.find('.header .first');
	 	var last = $parent.find('.header .last');
	 	var prev =  $parent.find('.header .prev');
	 	var next =  $parent.find('.header .next');
	 	first.click(function(){
	 		num--;
	 		creatDateLi();
	 	});
	 	last.click(function(){
	 		num++;
	 		creatDateLi();
	 	});
//	 	prev.click(function(){
//	 		yu--;
//	 		creatDateLi();
//	 	});
//	 	next.click(function(){
//	 		yu++;
//	 		creatDateLi();
//	 	});
	 	
	 }
	   
	 function tiTime(n){
				return n<10?'0'+n:n;
	}  
	   
	   
	   
	  $.fn.extend({
	  	Data
	  });
})($)
