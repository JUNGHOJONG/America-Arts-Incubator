
var pieceColor = {r: 137,g: 80,b:167};
var pieceTolerance = 37;
var pieceX, pieceY;


var debug = true;

function startTracking() {

  var piece;

  var last = {x:0, y:0};

  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var webcam = document.getElementById('webcam');
  var pieceSlider = document.getElementById('pieceTolerance');
  var pieceSwatch = document.getElementById('pieceSwatch');


  pieceSwatch.style.backgroundColor = "rgb(" + pieceColor.r + ", " + pieceColor.g + ", " + pieceColor.b + ")";
  pieceSlider.value = pieceTolerance;
  pieceSlider.onchange = printSettings;

  tracking.ColorTracker.registerColor('dynamicPiece', function(r, g, b) {
    return getColorDistance(pieceColor, {r: r, g: g, b: b}) < pieceSlider.value
  });
  var pieceTracker = new tracking.ColorTracker('dynamicPiece');
  pieceTracker.on('track', function(e) {
    piece = e.data[0];
  });
  tracking.track(webcam, pieceTracker, { camera: true } );

  webcam.addEventListener("click", function (e) {
    var c = getColorAt(webcam, e.offsetX, e.offsetY);
    pieceColor.r = c.r;
    pieceColor.g = c.g;
    pieceColor.b = c.b;
    pieceSwatch.style.backgroundColor = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")";
    printSettings();
  });


  setInterval(update, 100);
  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (piece) {
      drawRect(piece, context, pieceColor);
        pieceX = piece.x+15;
        pieceY = piece.y+15;
    }
  }

  // Calculates the Euclidian distance between the target color and the actual color
  function getColorDistance(target, actual) {
    return Math.sqrt(
      (target.r - actual.r) * (target.r - actual.r) +
      (target.g - actual.g) * (target.g - actual.g) +
      (target.b - actual.b) * (target.b - actual.b)
    );
  }

  function getColorAt(webcam, x, y) {

    // To be able to access pixel data from the webcam feed, we must first draw the current frame in
    // a temporary canvas.
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = webcam.width;
    canvas.height = webcam.height;
    context.drawImage(webcam, 0, 0, webcam.width, webcam.height);

    // Then we grab the pixel information from the temp canvas and return it as an object
    var pixel = context.getImageData(x, y, 1, 1).data;
    return {r: pixel[0], g: pixel[1], b: pixel[2]};

  }

  function dist(r1, r2) {
    return Math.sqrt( Math.pow((r1.x-r2.x), 2) + Math.pow((r1.y-r2.y), 2));
  }

  function drawRect(rect, context, color) {
    context.strokeStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }

  function printSettings() {
    console.log('PIECE '+pieceColor.r+' '+pieceColor.g+' '+pieceColor.b+' (tolerance '+pieceSlider.value+')');
  }

  function download(text, name, type) {
    var a = document.getElementById("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }

  window.addEventListener('keyup', function(e) {
    if (e.key === ' ') {
      if (debug) {
        document.getElementsByClassName('ui')[0].style.display = 'none';
        document.getElementsByClassName('display')[0].style.display = 'none';
        debug = false;
      } else {
        document.getElementsByClassName('ui')[0].style.display = 'flex';
        document.getElementsByClassName('display')[0].style.display = 'block';
        debug = true;
      }
    }
  });

}
