/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';

// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerLegendMinyak = d3.select('#legend-minyak');

// a helper function to clear the container of its contents
const clearContainer = () => containerLegendMinyak.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerLegendMinyak.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 600;
  const isMobile = frameWidth < breakPoint;

  var margin = { top: 20, right: 0, bottom: 20, left: 30 };

  var posX = 20;

  var width = frameWidth - margin.left - margin.right;
  var height = 80 - margin.top - margin.bottom;

  d3.select('#legend-minyak').html('');

  var svg = d3
    .select('#legend-minyak')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + posX + ',' + margin.top + ')');

  svg
    .append('text')
    .text('Hasil Pantau s Tanggal:')
    .attr('x', 0)
    .attr('y', -8)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('rect')
    .attr('width', 15)
    .attr('height', 15)
    .attr('x', 0)
    .attr('y', 0)
    .style('fill', '#b64407');

  svg
    .append('text')
    .text('2 April 2018 (136 km2)')
    .attr('x', 25)
    .attr('y', 12)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('rect')
    .attr('width', 15)
    .attr('height', 15)
    .attr('x', 0)
    .attr('y', 20)
    .style('fill', '#f95e0b');

  svg
    .append('text')
    .text('3 April 2018 (97.2 km2)')
    .attr('x', 25)
    .attr('y', 32)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('rect')
    .attr('width', 15)
    .attr('height', 15)
    .attr('x', 0)
    .attr('y', 40)
    .style('fill', '#fb7228');

  svg
    .append('text')
    .text('7 April 2018 (14.1 km2)')
    .attr('x', 25)
    .attr('y', 52)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('rect')
    .attr('width', 15)
    .attr('height', 15)
    .attr('x', 0)
    .attr('y', 60)
    .style('fill', '#f9935d');

  svg
    .append('text')
    .text('8 April 2018 (3.1 km2)')
    .attr('x', 25)
    .attr('y', 72)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('rect')
    .attr('width', 15)
    .attr('height', 15)
    .attr('x', 0)
    .attr('y', 80)
    .style('fill', '#fcbe9c');

  svg
    .append('text')
    .text('14 April 2018 (3 km2)')
    .attr('x', 25)
    .attr('y', 92)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
}

// call resize on load

resize();
window.addEventListener('resize', _.debounce(resize, 200));
