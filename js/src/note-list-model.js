(function(exports) {

  function NoteList(noteClass) {
    this.list = [];
    this.noteClass = noteClass;
    this.accumulator = 0;
  }
    NoteList.prototype.listNotes = function() {
      return this.list;
    }

  NoteList.prototype.createNote = function(text) {
     var note = new this.noteClass(text)
     note.id = this.accumulator;
     this.list.push(note);
     this.accumulator += 1
  }
  
  exports.NoteList = NoteList;
})(this);
