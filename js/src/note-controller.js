(function(exports) {
  function NoteController(notelist, notelistviewClass) {
    this.notelistviewClass = notelistviewClass;
    this.notelistview = new this.notelistviewClass(notelist)
  }

  NoteController.prototype.changeHTML = function() {
    var html = this.notelistview.view(); 
    document.getElementById("app").innerHTML = html
  };

  exports.NoteController = NoteController;
})(this);
