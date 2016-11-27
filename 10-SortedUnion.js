function unite() {
  var arr=concatAll.apply(null,arguments);
  var uArr=[];
  for(var i = 0, len = arr.length; i < len; i++){
    if(arr[i] in uArr){}
    else
    uArr.push(arr[i]);
  }
  return uArr;
}

//concat all arguments
function concatAll(){
 var con_arr = [];
  for (var i = 0, lent = arguments.length; i < lent; i++) {
    if(arguments[i])
      con_arr = con_arr.concat(arguments[i]);
  }
  return con_arr;
}

unite([1, 3, 2], [5, 2, 1,4]);
