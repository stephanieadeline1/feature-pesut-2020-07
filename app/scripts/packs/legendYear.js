/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';

// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerSvgLegend2 = d3.select('#svg-section-2');

// a helper function to clear the container of its contents
const clearContainer = () => containerSvgLegend2.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerSvgLegend2.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 400;
  const isMobile = frameWidth < breakPoint;

  var margin = { top: 20, right: 0, bottom: 20, left: 0 };
  var width = frameWidth - margin.left - margin.right;
  var height = 80 - margin.top - margin.bottom;

  d3.select('#svg-section-2').html('');

  var svg = d3
    .select('#svg-section-2')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //2015
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', -15)
    .attr('r', 4)
    .style('fill', '#008abd')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('2015 Survey')
    .attr('x', 15)
    .attr('y', -10)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  //2011
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 5)
    .attr('r', 4)
    .style('fill', '#fc8c54');

  svg
    .append('text')
    .text('2011 Survey')
    .attr('x', 15)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 25)
    .attr('r', 4)
    .style('fill', '#739f60');

  svg
    .append('text')
    .text('2008 Survey')
    .attr('x', 15)
    .attr('y', 30)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  //2001
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 45)
    .attr('r', 4)
    .style('fill', '#d99ba5');

  svg
    .append('text')
    .text('2001 Survey')
    .attr('x', 15)
    .attr('y', 50)
    .attr('text-anchor', 'start')
    .style('font-size', '12px');

  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
}

// call resize on load

resize();
window.addEventListener('resize', _.debounce(resize, 200));
