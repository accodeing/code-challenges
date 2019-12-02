const canvas = document.getElementsByClassName('canvas')[0];
const ctx = canvas.getContext('2d');

let gradient;

const flakes = [];
const drifts = [];

const number_of_layers = 5;
const number_of_flakes = 10000;
const number_of_drift_segments = window.innerWidth / 200;
const drift_build_factor = 0.5;

function generateFlakes(){
  for(let i=0; i<number_of_flakes; i++){
    flakes.push({
      position: {
        x: (Math.random() * canvas.width + 20) - 10,
        y: (Math.random() * canvas.height + 20) - 10,
        z: Math.floor( Math.random() * number_of_layers ),
        r: Math.random() * Math.PI * 2,
      },
      velocity: {
        x: 0.5 + ( Math.random() / 2 ),
        y: Math.random(),
        r: Math.random() / 4.0,
      }
    });
  }
}

function createDrifts(){
  let drift;

  for(let i=0; i<number_of_layers; i++){
    drift = [];
    for(let j=0; j<=number_of_drift_segments +1; j++){
      drift[j] = 1.0;
    }
    drifts.push( drift );
  }
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height, 0, canvas.width / 2, canvas.height, canvas.width / 2);
  gradient.addColorStop(0, '#fefcba');
  gradient.addColorStop(.05, '#fa7eb3');
  gradient.addColorStop(.25, '#4438b6');
  gradient.addColorStop(.5, '#241e58');

  generateFlakes();
  createDrifts();

  ctx.globalCompositeOperation = 'source-over';

  window.requestAnimationFrame( draw );
}

function updateFlake( flake, tick ) {
  flake.position.x += flake.velocity.x * tick;
  flake.position.y += flake.velocity.y * tick;
  flake.position.r += flake.velocity.r * tick;

  if( flake.position.x > canvas.width + 10 ){
    flake.position.x = -10;
  }

  if( flake.position.x < -10 ){
    flake.position.x = 10;
  }

  if( flake.position.y > canvas.height + 10 ){
    flake.position.y = 0;
    updateDrift( flake );
  }

  if( flake.position.y < -10 ){
    flake.position.y = 0;
  }
}

function updateDrift( flake ) {
  const layer = Math.ceil( flake.position.z );
  const segment = Math.floor(flake.position.x / ( canvas.width / ( number_of_drift_segments + 1 )));


  drifts[ layer ][ segment ] += drift_build_factor;
}

function drawDrift( drift, layer ){
  const segment_length = canvas.width / number_of_drift_segments;

  ctx.save();
  ctx.fillStyle = `rgba(255, 255, 255, ${ layer * (1.0 / number_of_layers) })`;
  ctx.beginPath();

  ctx.moveTo(0, canvas.height);

  drift.forEach( (height, index) => {
    if( index === 0 ){ ctx.lineTo( 0, canvas.height - height ) }
    ctx.lineTo( segment_length * index, canvas.height - height )
    if( index === (number_of_drift_segments - 1 )){ console.log('gg');ctx.lineTo( canvas.width, canvas.height - height ) }
  });

  ctx.lineTo(canvas.width, canvas.height);

  ctx.fill();
  ctx.restore();
}

function drawFlake( flake ) {
  ctx.save();
  ctx.translate( flake.position.x, flake.position.y );
  ctx.rotate( flake.position.r );
  ctx.fillStyle = `rgba(255, 255, 255, ${ flake.position.z * (1.0 / number_of_layers) })`;
  ctx.fillRect(
    -flake.position.z / 2,
    -flake.position.z / 2,
    flake.position.z / 2,
    flake.position.z / 2,
  );
  ctx.restore();
}

function draw( millis ) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

  ctx.save();
  ctx.fillStyle = gradient;
  ctx.scale(8,4);
  ctx.translate(canvas.width * -0.45, canvas.height * - 0.75);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  // 2 = .5
  // 4 = .75
  // 8 = .875

  flakes.forEach( flake => {
    updateFlake( flake, 1 );
    drawFlake( flake );
  });

  drifts.forEach( ( drift, index ) => {
    drawDrift( drift, index );
  })

  window.requestAnimationFrame(draw);
}

init();
