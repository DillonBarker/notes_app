

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
      assert.isTrue(notelistview.view() === ("<ul><li><div><a href='#notes/0'>First Note...</a></div></li></ul>"))
    });

    it('Notelist view can show several notes with tags', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("First Note");
      notelist.createNote("Second Note");
      notelist.createNote("Third Note");
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div><a href='#notes/0'>First Note...</a></div></li><li><div><a href='#notes/1'>Second Note...</a></div></li><li><div><a href='#notes/2'>Third Note...</a></div></li></ul>"))
    });
    
    it('Notelist view will stop viewing note at 20 characters in the view', function() {
      var notelist = new NoteList(Note);
      notelist.createNote("12345678901234567890xxxxxxxxxxxxxx");
      notelistview = new NoteListView(notelist)
      assert.isTrue(notelistview.view() === ("<ul><li><div><a href='#notes/0'>12345678901234567890...</a></div></li></ul>"))
    });
  });
  
  dillscribe('Note Controller Class', function() {
    it('Note Controller changes html for page', function() {
     function NoteControllerDouble() {};
        NoteControllerDouble.mockChangeHTML = function() {
          document.getElementById("app").innerHTML = '<ul><li><div><a href="#notes/0">Favourite food: pizz...</a></div></li></ul>'
        }
      NoteControllerDouble.mockChangeHTML();
      assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="#notes/0">Favourite food: pizz...</a></div></li></ul>')
    });

    it('Note controller displays a single note view when clicked', function() {
      var noteList = new NoteList(Note)
        noteList.createNote("testing123")
        
      var noteController = new NoteController(noteList);
        document.getElementById("app").innerHTML = '<ul><li><div><a href="#notes/0">testing123</a></div></li></ul>';
        
        noteController.watchURL();
        window.location.hash = '#notes/0';
        const hashchange = new Event('hashchange')
        window.dispatchEvent(hashchange);
        
        assert.isTrue(document.getElementById("app").innerHTML === "<div>testing123</div>");
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
