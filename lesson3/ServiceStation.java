package lesson3;

public class ServiceStation implements Refueling, Service, Wiping {
    @Override
    public void fuel(FuelType fuelType) {
        switch (fuelType) {
            case Diesel ->
                System.out.println("Заправка дизельным топливом на сервисной станции");
            case Gasoline ->
                System.out.println("Заправка бензином на сервисной станции");
        }
    }

    @Override
    public void wipMirrors() {
        System.out.println("ServiceStation wipes mirrors");
    }

    @Override
    public void wipWindshield() {
        System.out.println("ServiceStation wipes windshield");
    }

    @Override
    public void wipHeadlights() {
        System.out.println("ServiceStation wipes headlights");
    }

    @Override
    public void repairCar() {
        System.out.println("Техническое обслуживание автомобиля");
    }
}