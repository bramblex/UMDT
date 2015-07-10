
(function(__root__, __define__){

  var define = function define(dependency, factory) {
    if ( typeof __define__ === 'function' && __define__.amd){
      __define__(dependency, factory);
    } else if (typeof exports === 'object'){
      module.exports = factory.apply(__root__, dependency.map(function(m){
        return require(m);
      }));
    } else{
      __root__['umd_example'] = factory.apply(__root__, dependency.map(function(m){
        return __root__[m.replace(/^.*\//, '')];
      }));
    }
  };

  
define(['./lib1', './lib2'], function (lib1, lib2) {
  var myFunc = function myFunc(){
    console.log('example');
  };

  myFunc.lib1 = lib1;
  myFunc.lib2 = lib2;

  return myFunc;

});


})(this, typeof define !== 'undefined' && define);
