const naveNormal = new Image();
naveNormal.src = 'nave1.png';

const naveMov = new Image();
naveMov.src = 'nave2.png';

function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 50;   // tamaño aumentado para mejor visibilidad
  this.height = 40;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  // si la imagen aún no está cargada, dibujar un marcador temporal
  if (!naveNormal.complete || naveNormal.naturalWidth === 0) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.fillStyle = 'gray';
    context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    context.restore();
    return;
  }

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // CORRECCIÓN: drawImage (sensible a mayúsculas)
  context.drawImage(naveNormal, -this.width / 2, -this.height / 2, this.width, this.height);

  if (this.showFlame && naveMov.complete && naveMov.naturalWidth !== 0) {
    context.drawImage(naveMov, -this.width / 2, -this.height / 2, this.width, this.height);
  }
  context.restore();
};