let t = [];
// Variabel tak bebas
let P1 = [];
let P2 = [];
// Parameter model
let a;
let b;
let c;
let d;
// Kondisi awal
let P15;
let P35;

let tMax = 300;
let dt = 0.1;

let grafik

function setup() {
  createCanvas(400, 400);
  P10 = createInput("20");
  P10.position(20,600);
  P20 = createInput("40");
  P20.position(20,630);
  a = createSlider(0.1, 2, 0.4, 0.01); //min, max, value, step
  a.position(200,600);
  b = createSlider(0, 0.1, 0.05, 0.01); //min, max, value, step
  b.position(202,630);
  c = createSlider(0, 1, 0.1, 0.01); //min, max, value, step
  c.position(340,600);
  d = createSlider(0, 2, 0.5, 0.01); //min, max, value, step
  d.position(340,630);
  
  let p = createP('Kondisi Awal');
  p.style('font-size', '20px');
  p.position(20, 555);  
  let q = createP('Parameter a');
  q.style('font-size', '20px');
  q.position(205, 668);
  let r = createP('Parameter b');
  r.style('font-size', '20px');
  r.position(205, 795);
  let s = createP('Parameter c');
  s.style('font-size', '20px');
  s.position(340, 638);
  let t = createP('Parameter d');
  t.style('font-size', '20px');
  t.position(340, 515);
  
  solve(); 
  grafik = new Chart(this, config);  
  P10.changed(solve); // ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
  b.changed(solve);
  c.changed(solve);
  d.changed(solve);
}
function draw() {
  grafik.update()
}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  br = float(b.value());
  ct = float(c.value());
  dp = float(d.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt*as*P1[i]       -  dt*br*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt*ct*P1[i+1]*P2[i] -  dt*dp*P2[i];
    t[i+1] = round((i+1)*dt,2);
  }
}
