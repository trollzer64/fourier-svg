let time = 0;
let time_scale = 100 / 100;
let wave = [];
let scaled_radius = 5;

let y = [];
let x = [];

function setup() {
  createCanvas(1000, 400);
  for (let i = 0; i < 100; i++) {
    x[i] = i + random(-10, 10);
  }
  let division = 50;
  for (let i = 0; i < division; i++) {
    if (i % division < division/2) {
      y[i] = i;
    } else {
      y[i] = -i + division;
    }
  }
  fourierY = dft(y);
}
function draw() {
  const time_dt = time_scale * TWO_PI / fourierY.length;
  background('#000000');
  translate(200, 200);
  let x = 0;
  let y = 0;

  for (let i = 0; i < fourierY.length; i++) {
    let prevx = x;
    let prevy = y;
    // render circle
    let radius = scaled_radius * fourierY[i].amplitude;
    let ang_vel = fourierY[i].frequency;
    let ang_pos = fourierY[i].phase;
    stroke(255, 50);
    noFill();
    ellipse(x, y, radius * 2);

    // Set the actual position on the circle
    x += radius * cos(ang_vel * time + ang_pos + HALF_PI);
    // y in web is down-wise
    y += -radius * sin(ang_vel * time + ang_pos + HALF_PI);



    // Render cos and sin pos
    stroke('#ff0000');
    fill('#ff0000')
    line(prevx, prevy, x, y);
    // ellipse(prevx, prevy, 2);
    // if (i == 0) {
    //   stroke(255, 100);
    //   line(-radius, 0, radius, 0);
    //   line(0, -radius, 0, radius);
    //   stroke(0, 255, 0, 100);
    //   line(0, y, x, y);
    //   line(x, 0, x, y);
    // }
  }
  wave.unshift(y);
  // render waveform
  stroke('#ffffff');
  let distance = 100;
  translate(distance * 2, 0);
  line(x - distance * 2, y, 0, y);
  stroke('#ff0000');
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += time_dt;

  if (wave.length > 500) {
    wave.pop();
  }
}
