/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';

// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerSvgLegend3 = d3.select('#svg-section-4a');

// a helper function to clear the container of its contents
const clearContainer = () => containerSvgLegend3.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerSvgLegend3.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 400;
  const isMobile = frameWidth < breakPoint;

  var margin = { top: 20, right: 0, bottom: 20, left: 0 };
  var width = frameWidth - margin.left - margin.right;
  var height = 120 - margin.top - margin.bottom;

  d3.select('#svg-section-4a').html('');

  var svg = d3
    .select('#svg-section-4a')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg
    .append('text')
    .text('Satellite imagery on')
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
    .text('April 2, 2018 (136 km2)')
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
    .text('April 3, 2018 (97.2 km2)')
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
    .text('April 7, 2018 (14.1 km2)')
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
    .text('April 8, 2018 (3.1 km2)')
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
    .text('April 14, 2018 (3 km2)')
    .attr('x', 25)
    .attr('y', 92)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
}

// call resize on load

resize();
window.addEventListener('resize', _.debounce(resize, 200));
