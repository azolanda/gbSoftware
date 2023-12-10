package lesson3;

import java.awt.*;

public class Harvester extends Car {

    public Harvester(String make, String model, Color color, int wheelsCount) {
        super(make, model, color, wheelsCount);
    }

    public void sweeping() {
        System.out.println("Автомобиль метет улицу.");
    }

    @Override
    public void movement() {
        System.out.println("movement");
    }

    @Override
    public void maintenance() {
        System.out.println("maintenance");
    }

    @Override
    public boolean gearShifting() {
        return false;
    }

    @Override
    public boolean switchHeadlights() {
        return false;
    }

    @Override
    public boolean switchWipers() {
        return false;
    }
}