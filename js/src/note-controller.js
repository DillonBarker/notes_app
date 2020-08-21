(function(exports) {
  function NoteController(notelist, notelistviewClass) {
    this.notelist = notelist
    this.notelistviewClass = notelistviewClass;
    this.notelistview = new this.notelistviewClass(notelist)
  }

  NoteController.prototype.changeHTML = function() {
    var html = this.notelistview.view(); 
    document.getElementById("app").innerHTML = html
  };

  NoteController.prototype.makeUrlChange = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    showNote(getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#notes/")[1];
  };

  NoteController.prototype.showNote = function(app) {
    document
      .getElementById("app")
      .innerHTML = this.notelist.listNotes[app].getText();
  };

  exports.NoteController = NoteController;
})(this);
