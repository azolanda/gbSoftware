package lesson1.ModelElements;

import java.util.ArrayList;
import java.util.Collection;

public class Poligon {

    private Collection<Point3D> points = new ArrayList<>();

    public Collection<Point3D> getPoints() {
        return points;
    }

    public Poligon(Collection<Point3D> points) {
        this.points = points;
    }

    public Poligon() {

    }
}
