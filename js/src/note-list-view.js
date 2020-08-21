(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist
  }
    NoteListView.prototype.view = function() {
      array = this.notelist.listNotes().map(note => "<a href='#notes/" + note.id + "'>" + 
        note.getText().substring(0, 20) + "..." + "</a>");
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    }

  exports.NoteListView = NoteListView
})(this);
