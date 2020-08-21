(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist
    this.notelistview = new NoteListView(notelist)
  }

  NoteController.prototype.changeHTML = function() {
    var html = this.notelistview.view(); 
    document.getElementById("app").innerHTML = html
  };

  NoteController.prototype.watchURL = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage.bind(this));
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    showNote(getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return (location.hash.split("#notes/")[1])
  };

  NoteController.prototype.showNote = function(app) {
    element = document.getElementById("app")
    element.innerHTML = new SingleNoteView(this.notelist.listNotes[app]).divHTML();
  };

  exports.NoteController = NoteController;
  
})(this);

