(function(exports) {
  function NoteController() {
    this.notelist = new NoteList(Note);
    this.notelist.createNote("my fav drink is fanta")
    this.notelistview = new NoteListView(this.notelist)
  }

  NoteController.prototype.changeGreeting = function() {
    var html = this.notelistview.view();
    element = document.getElementById("app")
    element.innerHTML = html;
  };

  exports.NoteController = NoteController;
})(this);
