package lesson1;

import lesson1.InMemoryModel.ModelStore;
import lesson1.InMemoryModel.Observer1;
import lesson1.InMemoryModel.Observer2;
import lesson1.ModelElements.Angle3D;
import lesson1.ModelElements.Colors;
import lesson1.ModelElements.Flash;
import lesson1.ModelElements.Point3D;
import lesson1.ModelElements.PoligonalModel;
import lesson1.ModelElements.Vector3D;

public class Program {

    public static void main(String[] args) {

        Observer1 observer1 = new Observer1();
        Observer2 observer2 = new Observer2();

        ModelStore modelStore = new ModelStore();
        modelStore.registerModelChanger(observer1);
        modelStore.registerModelChanger(observer2);

        modelStore.addModel(new PoligonalModel());
        modelStore.addFlash(new Flash(new Point3D(0, 4.2, 5.3),
                new Angle3D(new Vector3D(new Point3D(32, 4, 5.8)),
                        new Vector3D(new Point3D(32, 4, 5.8))),
                Colors.BLUE, 1.2f));

    }
}
