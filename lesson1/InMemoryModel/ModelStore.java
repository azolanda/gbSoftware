package lesson1.InMemoryModel;

import lesson1.ModelElements.Camera;
import lesson1.ModelElements.Flash;
import lesson1.ModelElements.PoligonalModel;
import lesson1.ModelElements.Scene;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Хранилище 3D-элементов
 * TODO: Доработать самостоятельно в рамках домашней работы
 */
public class ModelStore implements ModelChanger {

    private Collection<PoligonalModel> models = new ArrayList<>();

    private Collection<Scene> scenes = new ArrayList<>();

    private Collection<Flash> flashes = new ArrayList<>();

    private Collection<Camera> cameras = new ArrayList<>();

    private Collection<ModelChangedObserver> observers = new ArrayList<>();

    public Collection<PoligonalModel> getModels() {
        return models;
    }

    public Collection<Scene> getScenes() {
        return scenes;
    }

    public Collection<Flash> getFlashes() {
        return flashes;
    }

    public Collection<Camera> getCameras() {
        return cameras;
    }

    @Override
    public void registerModelChanger(ModelChangedObserver o) {
        observers.add(o);
    }

    @Override
    public void removeModelChanger(ModelChangedObserver o) {
        observers.remove(o);
    }

    /**
     * Нотификация изменений на уровне хранилища
     */
    private void notifyChange() {
        for (ModelChangedObserver observer : observers) {
            observer.applyUpdateModel();
        }
    }

    public void addModel(PoligonalModel poligonalModel) {
        models.add(poligonalModel);
        notifyChange();
    }

    public void addScene(Scene scene) {
        scenes.add(scene);
        notifyChange();
    }

    public void addFlash(Flash flash) {
        flashes.add(flash);
        notifyChange();
    }

    public void addCamera(Camera camera) {
        cameras.add(camera);
        notifyChange();
    }
}
