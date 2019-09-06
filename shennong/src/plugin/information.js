let information= function information(time=5000,check=false,id=0){
  var num  = 0;
  var lists = [];
  time = Number(time);
  if(sessionStorage.getItem('num') &&sessionStorage.getItem('num') != 'NaN'){
      num = Number(sessionStorage.getItem('num'));
  } 
  if(sessionStorage.getItem('lists')){
      lists = JSON.parse(sessionStorage.getItem('lists'));
  }
  if(check){
      //console.log('yes');
        num = num + time/1000;
        //console.log(num);
        //console.log(countDown(num));
        sessionStorage.setItem('num',num); 
        //console.log('函数里面')
  }else if(!check && id){
    let obj = {
      id:id,
    }
    let flag = true;
    lists.forEach((item) => {
      if(item.id==id){
        flag = false;
      }
    });
    if(flag){
      lists.push(obj);
    }
  }
    //console.log(lists)
    let stringLists = JSON.stringify(lists);
    sessionStorage.setItem('lists',stringLists);
  
  function countDown(times){
    //console.log(times)
    var day=0,
      hour=0,
      minute=0,
      second=0;//时间默认值
    if(times > 0){
      day = Math.floor(times / (60 * 60 * 24));
      hour = Math.floor(times /(60 * 60)%24);
      minute = Math.floor(times /60%60);
      second = Math.floor(times%60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    if(day){
      if (hour <= 9) hour = '0' + hour;
      return day+":"+hour+":"+minute+":"+second;
    }else if(hour){
      return hour+":"+minute+":"+second;
    }else {
      return minute+":"+second;
    }
  }
  return {durationTime:countDown(num),lists:lists,num:num};
}
  export default information;