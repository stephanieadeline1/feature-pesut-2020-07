var navBpp = document.getElementById('nav-bpp');
var navMahakam = document.getElementById('nav-mahakam');
var bppContent = document.getElementById('section-bpp');
var mahakamContent = document.getElementById('section-mahakam');
var navHabitat = document.getElementById('nav-habitat');
var backBpp = document.getElementById('bpp-back');
var backMahakam = document.getElementById('mahakam-back');
var btnToIkn = document.getElementById('btn-to-ikn');
var btnToMinyak = document.getElementById('btn-to-minyak');

btnToIkn.onclick = function() {
  navIkn.classList.remove('active');
  navMinyak.classList.remove('active');
  navIkn.classList.add('active');
  iknContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.add('unclicked');
  iknContent.classList.add('clicked');
};

btnToMinyak.onclick = function() {
  navMinyak.classList.remove('active');
  navIkn.classList.remove('active');
  navMinyak.classList.add('active');
  iknContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.remove('unclicked', 'clicked');
  iknContent.classList.add('unclicked');
  minyakContent.classList.add('clicked');
};

backMahakam.onclick = function() {
  navBpp.classList.remove('chosen');
  navMahakam.classList.remove('chosen');
  navBpp.classList.add('chosen');
  mahakamContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.remove('unclicked', 'clicked');
  mahakamContent.classList.add('unclicked');
  bppContent.classList.add('clicked');
};

backBpp.onclick = function() {
  navMahakam.classList.remove('chosen');
  navBpp.classList.remove('chosen');
  navMahakam.classList.add('chosen');
  mahakamContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.add('unclicked');
  mahakamContent.classList.add('clicked');
};

navBpp.onclick = function() {
  this.classList.remove('chosen');
  navMahakam.classList.remove('chosen');
  this.classList.add('chosen');
  navHabitat.classList.remove('nav-block');
  navHabitat.classList.add('nav-gradient');
  mahakamContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.remove('unclicked', 'clicked');
  mahakamContent.classList.add('unclicked');
  bppContent.classList.add('clicked');
};

navMahakam.onclick = function() {
  this.classList.remove('chosen');
  navBpp.classList.remove('chosen');
  this.classList.add('chosen');
  navHabitat.classList.remove('nav-block');
  navHabitat.classList.add('nav-gradient');
  mahakamContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.remove('unclicked', 'clicked');
  bppContent.classList.add('unclicked');
  mahakamContent.classList.add('clicked');
};

var navMinyak = document.getElementById('nav-minyak');
var navIkn = document.getElementById('nav-ikn');
var minyakContent = document.getElementById('minyak');
var iknContent = document.getElementById('ikn');

navMinyak.onclick = function() {
  this.classList.remove('active');
  navIkn.classList.remove('active');
  this.classList.add('active');
  iknContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.remove('unclicked', 'clicked');
  iknContent.classList.add('unclicked');
  minyakContent.classList.add('clicked');
};

navIkn.onclick = function() {
  this.classList.remove('active');
  navMinyak.classList.remove('active');
  this.classList.add('active');
  iknContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.remove('unclicked', 'clicked');
  minyakContent.classList.add('unclicked');
  iknContent.classList.add('clicked');
};
