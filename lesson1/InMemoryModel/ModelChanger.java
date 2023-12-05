package lesson1.InMemoryModel;

public interface ModelChanger {

    void registerModelChanger(ModelChangedObserver o);

    void removeModelChanger(ModelChangedObserver o);

}
