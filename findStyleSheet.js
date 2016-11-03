"use strict";
/* global window, IMDebugger, __imns, document, console, areStyleSheetsAccessible, getBaseUrl, */
/**
  @function util.tools.findStyleSheet
  @param href {String|Object} - css filepath or {name:x, and/or href:x}
  @param name {String|undefined} - optional
  @return {CSSStyleSheet}
  @requires util.tools.areStyleSheetsAccessible, util.tools.getBaseUrl
 **/
var findStyleSheet = function(href, name){
    if(areStyleSheetsAccessible()){
        var obj = {
            href: null,
            name: null };
        if(typeof href === 'object'){
            obj.href = ('href' in href && typeof href.href === 'string') ? href.href : null;
            if('title' in href && typeof href.title === 'string' &&  !('name' in href)){ obj.name = href.title; }
            obj.name = ('name' in href && typeof href.name === 'string') ? href.name : obj.name;
        } else {
            obj.href = (href !== undefined && typeof href === 'string') ? href : null;
            obj.name = (name !== undefined && typeof name === 'string') ? name : null; }
        if(obj.href !== null || obj.name !== null){
            obj.href = (obj.href !== null) ? getBaseUrl(obj.href) : null;
            for(var i=0, imax = document.styleSheets.length; i<imax; i+= 1){
                var ss = document.styleSheets[i];
                if(obj.href !== null && obj.href === ss.href){
                    return ss; }
                if(obj.name !== null && ss.title !== '' && obj.name === ss.title){
                    return ss; }}}}
    return false; };
