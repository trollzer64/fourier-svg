let time = 0;
let wave = [];
let time_dt = 0.05;
let scaled_radius = 100;
let interations = 5;
let slider;
function setup() {
  createCanvas(1000, 400);
  slider = createSlider(1, 100, 1, 1);
}
function draw() {
  background('#000000');
  translate(200, 200);
  let x = 0;
  let y = 0;
  textSize(32);
  fill(0, 300, 153);
  text('aaaa', 0, 150);

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    // render circle
    let radius = scaled_radius * 4 / (n * PI);
    let ang_vel = n;
    stroke(255, 50);
    noFill();
    ellipse(x, y, radius * 2);

    // Set the actual position on the circle
    x += radius * cos(ang_vel * time);
    // y in web is down-wise
    y += -radius * sin(ang_vel * time);



    // Render cos and sin pos
    stroke('#ff0000');
    fill('#ff0000')
    line(prevx, prevy, x, y);
    ellipse(prevx, prevy, 2);
    if (i == 0) {
      stroke(255, 100);
      line(-radius, 0, radius, 0);
      line(0, -radius, 0, radius);
      stroke(0, 255, 0, 100);
      line(0, y, x, y);
      line(x, 0, x, y);
    }
  }
  wave.unshift(y);
  // render waveform
  stroke('#ffffff');
  translate(scaled_radius * 2, 0);
  line(x - scaled_radius * 2, y, 0, y);
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
