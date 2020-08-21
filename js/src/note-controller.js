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
    function listenForSubmit() {
      document
        .getElementById("submit")
        .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          console.log(clickEvent)
          doSomething();
        });
    
    function doSomething() {
      console.log("yolo")
    }
    };

  return {
    noteListView,
    changeHTML,
    watchURL,
    listenForSubmit,
  }
})();

  exports.NoteController = NoteController;
})(this);
