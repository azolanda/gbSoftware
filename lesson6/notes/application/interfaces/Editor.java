package lesson6.notes.application.interfaces;

import java.util.Collection;
import java.util.Optional;

public interface Editor<T, TId> {

    boolean add(T item);

    boolean edit(T item);

    boolean remove(TId id);

    Optional<T> getById(TId id);

    Collection<T> getAll();

}
