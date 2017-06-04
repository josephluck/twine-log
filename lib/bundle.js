(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = {
    onReducerCalled: function onReducerCalled(state, prev, name) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        console.groupCollapsed("\uD83D\uDE80 Reducer: " + name);
        console.log('📦 prev:         ', prev);
        console.log.apply(this, ['⚡️ arguments:    '].concat(args));
        console.log('📦 state:        ', state);
        console.groupEnd();
    },
    onEffectCalled: function onEffectCalled(state, name) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.groupCollapsed("\uD83D\uDE80 Effect:  " + name);
        console.log('📦 state:         ', state);
        console.log.apply(this, ['⚡️ arguments:    '].concat(args));
        console.groupEnd();
    }
};

},{}]},{},[1]);
