(function(exports) {

  function NoteListView(noteListClass) {
    this.noteListClass = noteListClass
  }
    NoteListView.prototype.view = function() {
      array = this.noteListClass.listNotes().map(note => note.getText().substring(0, 20) + "...");
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    }

  exports.NoteListView = NoteListView
})(this);
