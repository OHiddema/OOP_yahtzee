vrb = document.getElementById('variabel');
vst = document.getElementById('vast');

// Object constructor
function Steen(i) {

  // de steen toevoegen aan de HTML pagina, inclusief click-event
  this.dom = document.createElement('img');
  this.dom.addEventListener('click', function() {wisselen(i)});
  vrb.appendChild(this.dom);
  this.dom.style.display = 'none';

  // het aantal ogen op de dobbelsteen
  this.ogen = undefined;

  // true als steen op de 1e rij (vrb) staat,
  // false als steen op de 2e rij (vst) staat.
  this.isVrij = true;

  // dobbelen met stenen op de 1e rij
  this.dobbel = function () {
    if (this.isVrij) {
      this.ogen = Math.floor(6 * Math.random()) + 1;
      this.dom.src = `image/dice${this.ogen}.svg`;
      this.dom.style.display = 'inline';
    }
  };

  // verplaats de steen van 1e naar 2e rij of andersom
  this.move = function () {
    if (this.isVrij) {
      vrb.removeChild(this.dom);
      vst.appendChild(this.dom);
    }
    else {
      vst.removeChild(this.dom);
      vrb.appendChild(this.dom);
    }
    // true wordt false, false wordt true met ! operator
    this.isVrij = !(this.isVrij);
  }
}

// Create an array of objects (de vijf dobbelstenen)
var mijnStenen = [];
for (let i = 0; i <= 4; i++) {
  mijnStenen[i] = new Steen(i);
}

// Dobbelen
function dobbelen() {
  mijnStenen.forEach(function (item) {
    item.dobbel();
  });
}

// verplaats de steen van 1e naar 2e rij of andersom
function wisselen(i) {
  mijnStenen[i].move();
}