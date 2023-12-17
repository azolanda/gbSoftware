package lesson6.notes.application.interfaces;

import lesson6.notes.domain.Note;

import java.util.Collection;

public interface NotesPresenter {

    void printAll(Collection<Note> notes);

    void printResult(String result);
}
