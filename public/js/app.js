var appName = 'query-demo';
var minZoom = 6;
var maxZoom = 14;

var gogeoUrl = 'https://{s}.gogeo.io';

var stylenameDefault = 'demos_points';
var databaseName = 'demos';
var collectionName = 'newz';
var mapkey = '141bb3be-619a-4ffd-9aab-664ad92e568e';
var buffer = 8;

var tileUrl = gogeoUrl + '/map/' +
  databaseName + '/' +
  collectionName + '/{z}/{x}/{y}/tile.png?mapkey=' + mapkey +
  '&buffer=' + buffer;

var subdomains = ['m1', 'm2', 'm3'];

App = window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(
	function() {
  	this.resource('categories');
	}
);

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('categories');
  }
});

var loadTiles = App.loadTiles = function(query, stylename) {
  var url = tileUrl;

  if (query) {
    url = url + '&q=' + encodeURIComponent(JSON.stringify(query));
  }

  if (stylename) {
    url = url + '&stylename=' + stylenameDefault + encodeURIComponent('#' + stylename);
  }

  if (App.layer) {
    App.group.clearLayers();
  }

  var options = {
    maxZoom: maxZoom,
    subdomains: subdomains
  };

  var layer = App.layer = L.tileLayer(url, options);

  App.group.addLayer(layer);
};

var initMap = function() {
  var options = {
    attributionControl: false,
    minZoom: minZoom,
    maxZoom: maxZoom
  };

  var map = L.map('map', options).setView([-41.12566,172.6577], 6);

  var ggl = new L.Google('ROADMAP', options);
  map.addLayer(ggl);
  
  var group = App.group = new L.LayerGroup().addTo(map);
  loadTiles();
};

initMap();