package lesson1.ModelElements;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Сцена
 */
public class Scene {

    private int counter = 1;

    private int id;

    private Collection<PoligonalModel> models = new ArrayList<>();

    private Collection<Flash> flashes = new ArrayList<>();

    private Collection<Camera> cameras = new ArrayList<>();

    public Scene(PoligonalModel model, Flash flash, Camera camera) {
        this.models.add(model);
        this.flashes.add(flash);
        this.cameras.add(camera);
        id = ++counter;
    }

    public int getId() {
        return id;
    }

    public Collection<PoligonalModel> getModels() {
        return models;
    }

    public Collection<Flash> getFlashes() {
        return flashes;
    }

    public Collection<Camera> getCameras() {
        return cameras;
    }

    public void addModel(PoligonalModel model) {
        this.models.add(model);
    }

    public void addFlash(Flash flash) {
        this.flashes.add(flash);
    }

    public void addCamera(Camera camera) {
        this.cameras.add(camera);
    }
}
