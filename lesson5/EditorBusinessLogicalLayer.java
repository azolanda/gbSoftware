package lesson5;

import java.util.Collection;
import java.util.Random;

/**
 * Business Logical Layer
 * Описываем реализацию конкретных функций проекта
 */
public class EditorBusinessLogicalLayer implements BusinessLogicalLayer {

    private DatabaseAccess databaseAccess;

    public EditorBusinessLogicalLayer(DatabaseAccess databaseAccess) {
        this.databaseAccess = databaseAccess;
    }

    @Override
    public Collection<Model3D> getAllModels() {
        return databaseAccess.getAllModels();
    }

    @Override
    public Collection<Texture> getAllTextures() {
        return databaseAccess.getAllTextures();
    }

    @Override
    public void renderModel(Model3D model) {
        processRender(model);
    }

    @Override
    public void renderAllModels() {
        for (Model3D model : getAllModels()) {
            processRender(model);
        }
    }

    private Random random = new Random();

    private void processRender(Model3D model) {
        try {
            Thread.sleep(2500 - random.nextInt(2000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    protected Entity findEntity(Collection<? extends Entity> entities, String id) {
        Entity findedEntity = null;
        for (Entity entity : entities) {
            try {
                if (entity.getId() == Integer.parseInt(id)) {
                    return entity;
                }
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }
        return findedEntity;

    }

    @Override
    public void removeModel3D(String id) {

        Collection<Model3D> models = databaseAccess.getAllModels();

        if (models == null) {
            throw new RuntimeException("Модели не найдены");
        }

        Entity model = findEntity(models, id);

        if (model == null || !(model instanceof Model3D)) {
            throw new RuntimeException("Модель по указанному ID не найдена");
        }

        databaseAccess.removeEntity(model);
    }

    @Override
    public void removeTexture(String id) {
        Collection<Texture> textures = databaseAccess.getAllTextures();

        if (textures == null) {
            throw new RuntimeException("Текстуры не найдены");
        }

        Entity texture = findEntity(textures, id);

        if (texture == null || !(texture instanceof Texture)) {
            throw new RuntimeException("Текстура по указанному ID не найдена");
        }

        databaseAccess.removeEntity(texture);

        for (Model3D element : databaseAccess.getAllModels()) {
            for (Texture item : element.getTextures()) {
                if (item.getId() == Integer.parseInt(id)) {
                    texture = item;
                }
            }
            element.getTextures().remove(texture);
        }

    }

}