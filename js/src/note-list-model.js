(function(exports) {

  function NoteList(note) {
    this.list = [];
    this.note = note;
    this.accumulator = 0;
  }
    NoteList.prototype.listNotes = function() {
      return this.list;
    }

  NoteList.prototype.createNote = function(text) {
     var note = new this.note(text)
     note.id = this.accumulator;
     this.list.push(note);
     this.accumulator += 1
  }
  
  exports.NoteList = NoteList;
})(this);
