"use strict";

var $      = require("jquery");
var Plugin = require("../modules/Plugin");
var Utils  = require("../modules/Utilities");
var noisetrade = Object.create(Plugin);

noisetrade.init("noisetrade", "Noisetrade");

noisetrade.test = function () {
    return (/\.noisetrade\.com/i).test(document.location.href);
};

noisetrade.scrape = function () {
    var $controls = $('.jp-controls.main_album_controls');
    return {
        album:    $(".artist").text(), // NOTE: the names are backwards in the markup, this is correct
        artist:   $(".album").text(),
        title:    $('li.jp-playlist-current').text(),
        elapsed: Utils.calculateDuration($controls.find('.jp-current-time').text()),
        duration: Utils.calculateDuration($controls.find('.jp-duration').text()),
        stopped: $controls.find('.jp-play').is(':visible'),
    };
};

module.exports = noisetrade;
