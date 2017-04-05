// ==UserScript==
// @name          Garmin Connect Course export
// @namespace     http://schlueters.de/garmin-connect-course-export
// @description   Export courses from the Garmin Connect web site 
// @include       https://connect.garmin.com/mincourse/*
// @version       1.0
// @updateURL     https://github.com/johannes/garmin-connect-gmscripts/raw/master/garmin-connect-course-export.user.js
// ==/UserScript==

(function() {
    var formats = [
        {type: 'JSON', url: 'http://connect.garmin.com/proxy/course-service-1.0/json/course/',ext: '.json'},
        {type: 'FIT', url: 'http://connect.garmin.com/proxy/course-service-1.0/fit/course/',ext: '.fit'},
        {type: 'TCX', url: 'http://connect.garmin.com/proxy/course-service-1.0/tcx/course/',ext: '.tcx'},
        {type: 'GPOLYLINE', url: 'http://connect.garmin.com/proxy/course-service-1.0/gpolyline/course/',ext: '.kml'},
        {type: 'GPX', url: 'http://connect.garmin.com/proxy/course-service-1.0/gpx/course/',ext: '.gpx'}
    ];

  var id = window.location.href.replace('https://connect.garmin.com/mincourse/', '');
  var ex = '<div style="border-left:1px solid #ccc;display:inline-block;margin-left:20px;">';
  for (var i=0;i<formats.length; i++) {
    ex += '<a class="export route-button-text" href="'+formats[i].url+id+formats[i].ext+'">'+formats[i].type+'</a> ';
  }
    ex += ' <div style="display:inline-block;color:#999;padding-top:13px;font-size:11px;">(Right click + Save link as)</div></div>';
  $('viewModeItems').innerHTML += ex;
})();
