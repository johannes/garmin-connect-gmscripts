// ==UserScript==
// @name          Garmin Connect Course export
// @namespace     http://schlueters.de/garmin-connect-course-export
// @description   Export courses from the Garmin Connect web site 
// @include       https://connect.garmin.com/mincourse/*
// @version       1.0
// ==/UserScript==

(function() {
  var formats = {
    JSON: 'http://connect.garmin.com/proxy/course-service-1.0/json/course/',
    FIT: 'http://connect.garmin.com/proxy/course-service-1.0/fit/course/',
    TCX: 'http://connect.garmin.com/proxy/course-service-1.0/tcx/course/',
    GPX: 'http://connect.garmin.com/proxy/course-service-1.0/gpx/course/',
    GPOLYLINE: 'http://connect.garmin.com/proxy/course-service-1.0/gpolyline/course/'
  };

  var id = window.location.href.replace('https://connect.garmin.com/mincourse/', '');
  var ex = '';
  for (var f in formats) {
    ex += '<a href="'+formats[f]+id+'">'+f+'</a> ';
  } 
  $('viewModeItems').innerHTML += ex;
})();