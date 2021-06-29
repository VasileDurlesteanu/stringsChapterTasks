function turncate(str, maxlength) {
  return (str.length > maxlength) ?
  str.length(0, maxlength - 1) + '...' : str;
}