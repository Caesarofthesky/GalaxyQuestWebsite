var viz = {};
galaxyApp.directive('visualization', function($scope, $element, $attributes){
  viz = d3.selection($element[0]);
  viz.append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight)
    .append('svg:g');
});