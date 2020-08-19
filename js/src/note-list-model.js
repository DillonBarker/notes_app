
(function(exports) {
function NoteList(noteClass) {
  this.list = [];
  this.noteClass = noteClass;
  }
  NoteList.prototype.listNotes = function() {
    return this.list;
  }

  NoteList.prototype.createNote = function(text) {
    this.list.push(new this.noteClass(text));
  }
  exports.NoteList = NoteList;
})(this);
