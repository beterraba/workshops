var movieID = [];
var movieFrame = [];
var movieCat = [];
var movieLab = [];
var tempCounter = 0;
var tempCounter = 0;

//counts the seconds that have elapse in movie
function framecount(fcat, flab, fid, fnum) {
  var foundID = false;
  if (movieID.length == 0) {
    //if movie array is empty create first record
    tempNum = movieID.length;
    movieID[tempNum] = fid;
    movieFrame[tempNum] = fnum;
    movieCat[tempNum] = fcat;
    movieLab[tempNum] = flab;
  } else {
    //search to see if record exist
    for (i = 0; i < movieID.length; i++) {
      if (fid == movieID[i]) {
        //if exist set frame number to array location
        movieFrame[i] = fnum;
        foundID = true;
      }
    }
    if (foundID == false) {
      //if doens't exist then create a new record at the bottom of array
      tempNum = movieID.length;
      movieID[tempNum] = fid;
      movieFrame[tempNum] = fnum;
      movieCat[tempNum] = fcat;
      movieLab[tempNum] = flab;
    }
  }
}