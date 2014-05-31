var appName = 'tile-with-query';
var title = 'Tutorial GoGeo - Render map with query';
var maxZoom = 14;

var gogeoUrl = 'https://{s}.gogeo.io';

var stylenameDefault = 'demos_points';
var databaseName = 'demos';
var collectionName = 'newz';
var mapkey = '123';
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
    minZoom: 4,
    maxZoom: maxZoom
  };

  var map = L.map('map', options).setView([54.367759, -105.695343], 4);
  var group = App.group = new L.LayerGroup().addTo(map);

  var baseLayer = L.tileLayer('http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/normal.day.grey/{z}/{x}/{y}/256/png8?token=gBoUkAMoxoqIWfxWA5DuMQ&app_id=mBCJzriKRMXN-4giYVBc', {
      subdomains: '123',
      maxZoom: maxZoom
  });

  map.addLayer(baseLayer);
};

initMap();
loadTiles();