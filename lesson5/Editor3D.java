package lesson5;

import java.util.ArrayList;

public class Editor3D implements UILayer {

    private ProjectFile projectFile;
    private BusinessLogicalLayer businessLogicalLayer;
    private DatabaseAccess databaseAccess;
    private Database database;

    public Editor3D() {
    }

    private void initialize() {
        database = new EditorDatabase(projectFile);
        databaseAccess = new EditorDatabaseAccess(database);
        businessLogicalLayer = new EditorBusinessLogicalLayer(databaseAccess);
    }

    @Override
    public void openProject(String fileName) {
        projectFile = new ProjectFile(fileName);
        initialize();
    }

    @Override
    public void showProjectSettings() {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        System.out.println("*** Project v1 ***");
        System.out.println("******************");
        System.out.printf("fileName: %s\n", projectFile.getFileName());
        System.out.printf("setting1: %d\n", projectFile.getSetting1());
        System.out.printf("setting2: %s\n", projectFile.getSetting2());
        System.out.printf("setting3: %s\n", projectFile.getSetting3());
        System.out.println("******************");
    }

    @Override
    public void saveProject() {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");
        System.out.println("Изменения успешно сохранены.");
        database.save();
    }

    @Override
    public void printAllModels() {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        ArrayList<Model3D> models = (ArrayList<Model3D>) businessLogicalLayer.getAllModels();
        for (int i = 0; i < models.size(); i++) {
            System.out.printf("===%d===\n", i);
            System.out.println(models.get(i));
            for (Texture texture : models.get(i).getTextures()) {
                System.out.printf("\t%s\n", texture);
            }
        }
    }

    @Override
    public void printAllTextures() {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        ArrayList<Texture> textures = (ArrayList<Texture>) businessLogicalLayer.getAllTextures();
        for (int i = 0; i < textures.size(); i++) {
            System.out.printf("===%d===\n", i);
            System.out.println(textures.get(i));
        }
    }

    @Override
    public void renderAll() {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        System.out.println("Подождите ...");
        long startTime = System.currentTimeMillis();
        businessLogicalLayer.renderAllModels();
        long endTime = (System.currentTimeMillis() - startTime);
        System.out.printf("Операция выполнена за %d мс.\n", endTime);
    }

    @Override
    public void renderModel(int i) {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        ArrayList<Model3D> models = (ArrayList<Model3D>) businessLogicalLayer.getAllModels();
        if (i < 0 || i > models.size() - 1)
            throw new RuntimeException("Номер модели указан некорректною.");
        System.out.println("Подождите ...");
        long startTime = System.currentTimeMillis();
        businessLogicalLayer.renderModel(models.get(i));
        long endTime = (System.currentTimeMillis() - startTime);
        System.out.printf("Операция выполнена за %d мс.\n", endTime);
    }

    @Override
    public void removeModel(String id) {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        businessLogicalLayer.removeModel3D(id);
        System.out.printf("3D-модель с id %s была успешно удалена.\n", id);
    }

    @Override
    public void removeTexture(String id) {
        if (businessLogicalLayer == null)
            throw new RuntimeException("Сначала необходимо открыть проект");

        businessLogicalLayer.removeTexture(id);
        System.out.printf("Текстура с id %s была успешно удалена.\n", id);
    }

}