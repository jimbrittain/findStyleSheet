"use strict";
var __imns = function(){ return window; }
describe("findStyleSheet Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/f/getBaseUrl/getBaseUrl.js',
            'dist/f/areStyleSheetsAccessible/areStyleSheetsAccessible.js',
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];
        var style1 = document.createElement('link');
        style1.setAttribute('href', 'test.css');
        style1.setAttribute('rel', 'stylesheet');
        style1.setAttribute('type', 'text/css');
        var style2 = document.createElement('link');
        style2.setAttribute('href', 'test2.css');
        style2.setAttribute('name', 'test2');
        style2.setAttribute('title', 'test2');
        style2.setAttribute('rel', 'stylesheet');
        style2.setAttribute('type', 'text/css');
        document.head.appendChild(style1);
        document.head.appendChild(style2);

    it("findStyleSheet is a function", function(){ expect(typeof adr.findStyleSheet === 'function').toBe(true); });
    it("findStyleSheet: findStyleSheet('test.css') === style.sheet", function(){ expect(adr.findStyleSheet('test.css') === style1.sheet).toBe(true); });
    it("findStyleSheet: findStyleSheet({name: 'test2'}) === style.sheet", function(){ expect(adr.findStyleSheet({name: 'test2'}) === style2.sheet).toBe(true); });
    it("findStyleSheet: findStyleSheet('test2.css', 'test2') === style.sheet", function(){ expect(adr.findStyleSheet('test2.css', 'test2') === style2.sheet).toBe(true); });
    it("findStyleSheet: findStyleSheet('invalid.css') === false", function(){ expect(adr.findStyleSheet('invalid.css')).toBe(false); });
    it("findStyleSheet: findStyleSheet({name: 'invalid'}) === false", function(){ expect(adr.findStyleSheet({name: 'invalid'})).toBe(false); });
});
