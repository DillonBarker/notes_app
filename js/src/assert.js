(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error();
      }
    }
  };

  function it(desc, fn) {
   try {
     fn();
     console.log("\u2714 " + desc);
   } catch (error) {
     console.log("\u2718 " + desc);
     console.error(error);
   }
  }
  
  exports.it = it;
  exports.assert = assert;
})(this);
