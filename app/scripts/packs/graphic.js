/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';

// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerMap = d3.select('#map');

// a helper function to clear the container of its contents
const clearContainer = () => containerMap.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerMap.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 400;
  const isMobile = frameWidth < breakPoint;

  let container = 'map-habitat';

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3RlcGhhZGVsaW5lIiwiYSI6ImNrY2U4a3Q0cDA1dXUzN281ZzRuanB0MmIifQ.KshV869EVdqe2C-Ifyb9qg';
  var mapHabitat = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/stephadeline/ckcrfwv8g0tfk1io8jgdgoc3o/draft', // stylesheet location
    center: [116.884909, -1.26],
    zoom: 9.2, // starting zoom
  });
  mapHabitat.scrollZoom.disable();
  mapHabitat.doubleClickZoom.disable();
  mapHabitat.touchZoomRotate.disable();
  mapHabitat.dragRotate.disable();
  mapHabitat.dragPan.disable();
  mapHabitat.touchPitch.disable();

  mapHabitat.resize();

  var margin = { top: 20, right: 10, bottom: 20, left: 40 };
  var width = frameWidth - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;

  var containerMap = mapHabitat.getCanvasContainer();

  // var svg = d3
  //   .select(containerMap)
  //   .append('svg')
  //   .attr('width', '100%')
  //   .attr('height', '70vh')
  //   .style('position', 'absolute')
  //   .style('z-index', 2);

  // svg
  //   .append('text')
  //   .text('Hasil Pantau Satelit Tanggal:')
  //   .attr('x', 5)
  //   .attr('y', 22)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 30)
  //   .style('fill', '#b64407');

  // svg
  //   .append('text')
  //   .text('2 April 2018 (136 km2)')
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
  //   .style('fill', '#f95e0b');

  // svg
  //   .append('text')
  //   .text('3 April 2018 (97.2 km2)')
  //   .attr('x', 25)
  //   .attr('y', 62)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 70)
  //   .style('fill', '#fb7228');

  // svg
  //   .append('text')
  //   .text('7 April 2018 (14.1 km2)')
  //   .attr('x', 25)
  //   .attr('y', 82)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 90)
  //   .style('fill', '#f9935d');

  // svg
  //   .append('text')
  //   .text('8 April 2018 (3.1 km2)')
  //   .attr('x', 25)
  //   .attr('y', 102)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // svg
  //   .append('rect')
  //   .attr('width', 15)
  //   .attr('height', 15)
  //   .attr('x', 5)
  //   .attr('y', 110)
  //   .style('fill', '#fcbe9c');

  // svg
  //   .append('text')
  //   .text('14 April 2018 (3 km2)')
  //   .attr('x', 25)
  //   .attr('y', 122)
  //   .attr('text-anchor', 'start')
  //   .style('font-size', '12px');

  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
}

// call resize on load

// resize();
// window.addEventListener('resize', _.debounce(resize, 200));

window.addEventListener('load', _.debounce(resize, 200));

window.addEventListener('resize', _.debounce(resize, 200));
