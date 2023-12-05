package lesson1.ModelElements;

/**
 * Источник света
 */
public class Flash {

    private Point3D location;

    private Angle3D angle;

    private Colors color;

    private float power;

    public Flash(Point3D location, Angle3D angle, Colors color, float power) {
        this.location = location;
        this.angle = angle;
        this.color = color;
        this.power = power;
    }

    public Point3D getLocation() {
        return location;
    }

    public Angle3D getAngle() {
        return angle;
    }

    public Colors getColor() {
        return color;
    }

    public float getPower() {
        return power;
    }

    public void rotate(Angle3D angle3d) {
        System.out.println("rotate " + angle3d);
    }

    public void move(Point3D point3d) {
        System.out.println("move " + point3d);
    }
}
