package lesson6.notes.application.interfaces;

import lesson6.notes.domain.Note;

import java.util.Collection;

public interface NotesDatabaseContext {

    Collection<Note> getAll();

    void addNote(Note note);

    boolean removeNote(int id);

    boolean saveChanges();

}
