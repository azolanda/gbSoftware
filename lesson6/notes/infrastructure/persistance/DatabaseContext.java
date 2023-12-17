package lesson6.notes.infrastructure.persistance;

import lesson6.database.NotesDatabase;
import lesson6.database.NotesRecord;
import lesson6.notes.application.interfaces.NotesDatabaseContext;
import lesson6.notes.domain.Note;
import lesson6.notes.infrastructure.persistance.configuration.NoteConfiguration;

import java.util.ArrayList;
import java.util.Collection;

public class DatabaseContext extends DbContext implements NotesDatabaseContext {
    private Collection<NotesRecord> notesTable;

    public DatabaseContext(Database database) {
        super(database);
        this.notesTable = ((NotesDatabase) database).getNotesTable().getRecords();
    }

    @Override
    public void addNote(Note note) {
        notesTable.add(new NotesRecord(note.getTitle(), note.getDetails()));
    }

    @Override
    public boolean removeNote(int id) {
        for (NotesRecord record : notesTable) {
            if (record.getId() == id) {
                notesTable.remove(record);
                return true;
            }
        }
        return false;
    }

    public Collection<Note> getAll() {
        Collection<Note> notesList = new ArrayList<>();
        // TODO: Этого быть не должно, тут должен работать внутренний механизм
        // фреймворка
        for (NotesRecord record : notesTable) {
            notesList.add(new Note(
                    record.getId(),
                    record.getUserId(),
                    record.getTitle(),
                    record.getDetails(),
                    record.getCreationDate()));
        }
        return notesList;
    }

    @Override
    protected void onModelCreating(ModelBuilder builder) {
        builder.applyConfiguration(new NoteConfiguration());
    }

    @Override
    public boolean saveChanges() {
        // TODO Auto-generated method stub
        return true;
    }
}
