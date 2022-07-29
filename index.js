function superbowlWin(array) {
  const win = array.find(function(r) {return r.result === 'W'})
  if (win) {
    return win.year
  } else {
    return undefined
  }
};





