package lesson3;

import java.awt.*;

public class Program {

    public static void main(String[] args) {
        SportCar sportCar = new SportCar("A", "B", Color.BLACK, 3);
        Harvester harvester = new Harvester("D", "T", Color.ORANGE, 6);

        RefuelingStation refuelingStation = new RefuelingStation();
        WipingStation wipingStation = new WipingStation();
        ServiceStation serviceStation = new ServiceStation();

        sportCar.setRefuelingStation(refuelingStation);
        harvester.setRefuelingStation(refuelingStation);
        sportCar.setWipingStation(wipingStation);
        harvester.setWipingStation(wipingStation);
        sportCar.setServiceStation(serviceStation);
        harvester.setServiceStation(serviceStation);

        sportCar.fuel();
        harvester.fuel();
        sportCar.wiping(2);
        harvester.wiping(6);
        sportCar.service(5);
        harvester.service(5);
    }

    public static double calculateMaintenance(Car car) {
        int wheelsCount = car.getWheelsCount();
        if (wheelsCount >= 6) {
            return 1500 * wheelsCount;
        } else {
            return 1000 * wheelsCount;
        }
    }
}