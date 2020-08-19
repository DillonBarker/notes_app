(function(exports) {
  it('Note has text', function() {
    var note = new Note("JavaScript is the best.")
    assert.isTrue(note.text === "JavaScript is the best.")
  });

  it('Note responds to a get text method', function() {
    var note = new Note("I miss Ruby.")
    assert.isTrue(note.getText() === "I miss Ruby.")
  });

  it('Notelist can create and return a note', function() {
    var notelist = new NoteList(Note);
    notelist.createNote('I want to learn Python.');
    assert.isTrue(notelist.list[0].getText() === 'I want to learn Python.')
  });

  it('Notelist can create and return many notes', function() {
    var notelist = new NoteList(Note);
    notelist.createNote("First Note");
    notelist.createNote("Second Note");
    assert.isTrue(notelist.listNotes().length === 2)
    assert.isTrue(notelist.listNotes()[0].getText() === "First Note")
    assert.isTrue(notelist.listNotes()[1].getText() === "Second Note")
  });

  it('Notelist view will show an empty tag when there are no notes', function() {
    var notelist = new NoteList(Note);
    notelistview = new NoteListView(notelist)
    assert.isTrue(notelistview.view() === ("<ul><li><div></div></li></ul>"))
  });

  it('Notelist view will show one note with tags', function(){
    var notelist = new NoteList(Note);
    notelist.createNote("First Note");
    notelistview = new NoteListView(notelist)
    assert.isTrue(notelistview.view() === ("<ul><li><div>First Note</div></li></ul>"))
  });

  it('Notelist view can show several notes with tags', function() {
    var notelist = new NoteList(Note);
    notelist.createNote("First Note");
    notelist.createNote("Second Note");
    notelist.createNote("Third Note");
    notelistview = new NoteListView(notelist)
    assert.isTrue(notelistview.view() === ("<ul><li><div>First Note</div></li><li><div>Second Note</div></li><li><div>Third Note</div></li></ul>"))
  });
  it('Note Controller changes html for page', function() {
    var NoteDouble = function() {
      this.text = 'Favourite food: pizza';
    }
    NoteDouble.prototype.getText = function() {
      return this.text
    }
    var notelist = new NoteList(NoteDouble);
    
      notelist.listNotes = function() {
        return [(new NoteDouble())];
      }
    var noteController = new NoteController(notelist);
    noteController.changeHTML();

    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div>Favourite food: pizza</div></li></ul>')
  });
  it('Single note view returns a string of HTML representing the note model', function() {
    var note = new Note('I miss Ruby.')
    var singlenoteview = new SingleNoteView(note);
    console.log(singlenoteview.divHTML())
    assert.isTrue(singlenoteview.divHTML() === "<div>I miss Ruby.</div>")
  });

})(this);
