
(function () {

  if(false) {
    var foo = 'baz';
  }

  // 正常输出 undefined
  console.log(foo);

  /**
   * ReferenceError: foo2 is not defined
   */
  // console.log(foo2);
})();


console.log(~undefined);
