(function(exports) {
  dillscribe('Note Class', function() {
    it('Note has text', function() {
      var note = new Note("JavaScript is the best.")
      assert.isTrue(note.text === "JavaScript is the best.")
    });

    it('Note responds to a get text method', function() {
      var note = new Note("I miss Ruby.")
      assert.isTrue(note.getText() === "I miss Ruby.")
    });

    it('Note has ID', function() {
      var note = new Note("Alexis.")
      assert.isTrue(note.id === 0)
    })
  });
  
  dillscribe('Notelist Class', function() {
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
    it('Notelist increments ID', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("First Note");
      notelist.createNote("Second Note");
      assert.isTrue(notelist.listNotes()[1].id === 1)
    })
  });

  dillscribe('Notelist View Class', function() {
    it('Notelist view will show an empty tag when there are no notes', function() {
      var notelist = new NoteList(Note);
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div></div></li></ul>"))
    });
  
    it('Notelist view will show one note with tags', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("First Note");
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div>First Note...</div></li></ul>"))
    });

    it('Notelist view can show several notes with tags', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("First Note");
      notelist.createNote("Second Note");
      notelist.createNote("Third Note");
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div>First Note...</div></li><li><div>Second Note...</div></li><li><div>Third Note...</div></li></ul>"))
    });
    
    it('Notelist view will stop viewing note at 20 characters in the view', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("12345678901234567890xxxxxxxxxxxxxx");
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div>12345678901234567890...</div></li></ul>"))
    });
  });
  
  dillscribe('Note Controller Class', function() {
    it('Note Controller changes html for page', function() {
      var noteList
      var noteListView = function() {};

      noteListView.prototype.view = function() {
        return "<ul><li><div>Favourite food: pizz...</div></li></ul>"
      };
      
      var notelistcontroller = new NoteController(noteList, noteListView);
      
      notelistcontroller.changeHTML();
      
      assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite food: pizz...</div></li></ul>")
    });
  });

  dillscribe('Single Note View Class', function() {
    it('Single note view returns a string of HTML representing the note model', function() {
      var note = new Note('I miss Ruby.')
      var singlenoteview = new SingleNoteView(note);
      assert.isTrue(singlenoteview.divHTML() === "<div>I miss Ruby.</div>")
    });
  });

})(this);
