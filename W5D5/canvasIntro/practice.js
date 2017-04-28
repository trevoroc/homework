document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  canvas.height = 500;
  canvas.width = 500;

  const ctx = canvas.getContext('2d');
  // ctx.fillStyle = 'green';
  // ctx.fillRect(100, 100, 400, 200);

  ctx.beginPath();
  ctx.strokeStyle = 'rgb(130, 40, 65)';
  ctx.arc(250, 250, 75, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = 'rbg(78, 82, 120)';
  ctx.fill();
});
