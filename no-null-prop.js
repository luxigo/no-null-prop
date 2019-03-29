module.exports=function noNullProp(obj){
  for (var prop in obj) {
    if (!obj.hasOwnProperty(prop)) continue;
    if ('object'==typeof obj[prop]) {
      obj[prop]=noNullProp(obj[prop]);
      if (obj[prop]===null || !Object.keys(obj[prop]).length) delete obj[prop];
    } else if (obj[prop]===null) delete obj[prop];
  }
  return obj
}
