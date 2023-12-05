package lesson1.ModelElements;

/**
 * Камера
 */
public class Camera {

    private Point3D location;

    private Angle3D angle;

    public Camera(Point3D location, Angle3D angle) {
        this.location = location;
        this.angle = angle;
    }

    public Point3D getLocation() {
        return location;
    }

    public Angle3D getAngle() {
        return angle;
    }

    public void rotate(Angle3D angle3d) {
        System.out.println("rotate " + angle3d);
    }

    public void move(Point3D point3d) {
        System.out.println("move " + point3d);
    }
}
