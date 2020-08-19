(function(exports) {
    function SingleNoteView(note) {
        this.note = note
    };

    SingleNoteView.prototype.divHTML = function() {
        return "<div>" + this.note.getText() + "</div>"
    }

    exports.SingleNoteView = SingleNoteView;
})(this);