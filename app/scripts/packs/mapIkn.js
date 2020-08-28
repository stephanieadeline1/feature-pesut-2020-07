/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';
// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerMapIkn = d3.select('#map-ikn');

// a helper function to clear the container of its contents
const clearContainer = () => containerMapIkn.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerMapIkn.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 400;
  const isMobile = frameWidth < breakPoint;

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3RlcGhhZGVsaW5lIiwiYSI6ImNrY2U4a3Q0cDA1dXUzN281ZzRuanB0MmIifQ.KshV869EVdqe2C-Ifyb9qg';
  var mapIkn = new mapboxgl.Map({
    container: 'map-ikn',
    style: 'mapbox://styles/stephadeline/ckd62y1zx153h1imteovy09wa/draft', // stylesheet location
    center: [116.884909, -0.9],
    zoom: 7.5, // starting zoom
  });
  // mapIkn.scrollZoom.disable();
  // mapIkn.doubleClickZoom.disable();
  // mapIkn.touchZoomRotate.disable();
  // mapIkn.dragRotate.disable();
  // mapIkn.dragPan.disable();
  // mapIkn.touchPitch.disable();

  // var margin = { top: 20, right: 0, bottom: 20, left: 0 };
  // var width = frameWidth - margin.left - margin.right;
  // var height = 400 - margin.top - margin.bottom;

  // var containerMapIkn = mapIkn.getCanvasContainer();

  // var svg = d3
  //   .select('#legend-ikn')
  //   .append('svg')
  //   .attr('width', '100%')
  //   .attr('height', '300px')
  //   .style('position', 'absolute')
  //   .style('z-index', 2);

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 10)
  //   .style('fill', '#a26402');

  // svg
  //   .append('text')
  //   .text('Kawasan pusat pemerintahan (5.644 Ha)')
  //   .attr('x', 25)
  //   .attr('y', 22)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 30)
  //   .style('fill', '#fba00e');

  // svg
  //   .append('text')
  //   .text('Kawasan Inti KSN Calon IKN (56.181 Ha)')
  //   .attr('x', 25)
  //   .attr('y', 42)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 50)
  //   .style('fill', '#fdd596');

  // svg
  //   .append('text')
  //   .text('KSN Calon IKN (256.143 Ha)')
  //   .attr('x', 25)
  //   .attr('y', 62)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');
}

// call resize on load

resize();

window.addEventListener('resize', _.debounce(resize, 200));
