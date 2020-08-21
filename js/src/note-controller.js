(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist
    this.notelistview = new NoteListView(notelist)
  }
  NoteController.prototype = (function() {
    function noteListView() {
      return this.notelistview;
    }
    function changeHTML() {
      var html = this.notelistview.view(); 
    document.getElementById("app").innerHTML = html
    };
    function watchURL() {
      window.addEventListener("hashchange", showNote.bind(this));
    };
    function showNote() {
      id = parseInt(getNoteFromUrl(), 10);
      let note = this.notelist.listNotes()[id]
      let singleNoteView = new SingleNoteView(note);
      document.getElementById("app").innerHTML = singleNoteView.divHTML();
    };
    function getNoteFromUrl() {
      location = window.location
      return location.hash.split("#notes/")[1];
    };
  return {
    noteListView,
    changeHTML,
    watchURL,
  }
})();

  exports.NoteController = NoteController;
})(this);
