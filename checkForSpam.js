function checkSpam(str) {
  if(str.indexOf('viagra')) {
    return true;
  } else if(str.indexOf('XXX')) {
    return true;
  } else return false;
}

// solution 
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );