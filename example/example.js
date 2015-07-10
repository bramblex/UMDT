
define(['./lib1', './lib2'], function (lib1, lib2) {
  var myFunc = function myFunc(){
    console.log('example');
  };

  myFunc.lib1 = lib1;
  myFunc.lib2 = lib2;

  return myFunc;

});
