/* eslint-disable no-unused-vars */
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

// import * as tip from 'd3-tip';
import _ from 'lodash';

// main code for feature graphics
// a reference to the default graphic container, change if needed
const containerSvgLegend = d3.select('#svg-section-1');

// a helper function to clear the container of its contents
const clearContainer = () => containerSvgLegend.html('');

// a helper function to grab the container's width
const getFrameWidth = () => containerSvgLegend.node().offsetWidth;

function resize() {
  // code executed on window resize
  clearContainer();
  const frameWidth = getFrameWidth();
  var breakPoint = 400;
  const isMobile = frameWidth < breakPoint;

  var margin = { top: 20, right: 0, bottom: 20, left: 0 };
  var width = frameWidth - margin.left - margin.right;
  var height = 120 - margin.top - margin.bottom;

  d3.select('#svg-section-1').html('');

  var svg = d3
    .select('#svg-section-1')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //pesut
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', -15)
    .attr('r', 4)
    .style('fill', '#008abd')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Orcaella brevirostris (Irawaddy Dolphin)')
    .attr('x', 15)
    .attr('y', -10)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  //lumba botol
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 5)
    .attr('r', 4)
    .style('fill', '#84a3b8')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Tursiops aduncus (Bottle-nose Dolphin)')
    .attr('x', 15)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  //finless porpoise
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 25)
    .attr('r', 4)
    .style('fill', '#dd9f03')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Neophocanea phocaenoides (Finless Porpoise)')
    .attr('x', 15)
    .attr('y', 30)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  //dugong
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 45)
    .attr('r', 4)
    .style('fill', '#faae99')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Dugong dugon (Dugong)')
    .attr('x', 15)
    .attr('y', 50)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  //buaya
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 65)
    .attr('r', 4)
    .style('fill', '#54bb9a')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Crocodiylus porosus (Crocodile)')
    .attr('x', 15)
    .attr('y', 70)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  //penyu
  svg
    .append('circle')
    .attr('cx', 5)
    .attr('cy', 85)
    .attr('r', 4)
    .style('fill', '#2c6855')
    .style('stroke', '#000000');

  svg
    .append('text')
    .text('Chelonia mydas (Sea Turtle)')
    .attr('x', 15)
    .attr('y', 90)
    .attr('text-anchor', 'start')
    .style('font-style', 'italic')
    .style('font-size', '12px');

  // pass the recalculated frameWidth to parts of your chart (like an axis) that change with resize!
}

// call resize on load

resize();
window.addEventListener('resize', _.debounce(resize, 200));
