package lesson6.notes.application.interfaces;

import lesson6.notes.domain.Note;

public interface NoteEditor extends Editor<Note, Integer> {

    void printAll();

}
