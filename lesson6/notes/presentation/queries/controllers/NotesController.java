package lesson6.notes.presentation.queries.controllers;

import lesson6.notes.application.interfaces.NoteEditor;
import lesson6.notes.domain.Note;

public class NotesController extends Controller {

    private final NoteEditor notesEditor;

    public NotesController(NoteEditor notesEditor) {
        this.notesEditor = notesEditor;
    }

    public void routeAddNote(Note note) {
        this.notesEditor.add(note);
    }

    public void routeRemoveNote(Integer id) {
        this.notesEditor.remove(id);
    }

    public void routeGetAll() {
        notesEditor.printAll();
    }

}
