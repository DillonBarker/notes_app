(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeHTML = function() {
    var html = this.notelistview.view(); 
    document.getElementById("app").innerHTML = html
  };

  exports.NoteController = NoteController;
})(this);
