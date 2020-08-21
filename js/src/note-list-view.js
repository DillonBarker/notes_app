(function(exports) {

  function NoteListView(notelistclass) {
    this.notelistclass = notelistclass
  }
    NoteListView.prototype.view = function() {
      array = this.notelistclass.listNotes().map(note => "<a href='#notes/" + note.id + "'>" + note.getText().substring(0, 20) + "..." + "</a>");
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    }

  exports.NoteListView = NoteListView
})(this);
