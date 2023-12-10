package lesson3;

import java.awt.*;

/**
 * 1. Спроектировать абстрактный класс «Car» у которого должны
 * быть свойства: марка, модель, цвет, тип кузова, число колёс, тип
 * топлива, тип коробки передач, объём двигателя; методы:
 * движение, обслуживание, переключение передач, включение
 * фар, включение дворников.
 *
 * 2. Создать конкретный автомобиль путём наследования класса
 * «Car».
 *
 * 3. Расширить абстрактный класс «Car», добавить метод: подметать
 * улицу. Создать конкретный автомобиль путём наследования
 * класса «Car». Провести проверку принципа SRP.
 *
 * 4. Расширить абстрактный класс «Car», добавить метод:
 * включение противотуманных фар, перевозка груза. Провести
 * проверку принципа OCP.
 *
 * 5. Создать конкретный автомобиль путём наследования класса
 * «Car», определить число колёс = 3. Провести проверку принципа LSP.
 *
 * 6. Создать интерфейс «Заправочная станция», создать метод:
 * заправка топливом.
 *
 * 7. Имплементировать метод интерфейса «Заправочная станция» в
 * конкретный класс «Car».
 *
 * 8. Добавить в интерфейс «Заправочная станция» методы: протирка
 * лобового стекла, протирка фар, протирка зеркал.
 *
 * 9. Имплементировать все методы интерфейса «Заправочная
 * станция» в конкретный класс «Car». Провести проверку
 * принципа ISP. Создать дополнительный/е интерфейсы и
 * имплементировать их в конкретный класс «Car». Провести
 * проверку принципа ISP.
 *
 * 10. Создать путём наследования класса «Car» два
 * автомобиля: с бензиновым и дизельным двигателями,
 * имплементировать метод «Заправка топливом» интерфейса
 * «Заправочная станция». Реализовать заправку каждого
 * автомобиля подходящим топливом. Провести проверку принципа DIP.
 *
 ** TODO: Домашнее задание:
 * Доработать приложение, спроектированное на семинаре. Добавить тип,
 * описывающий "автомойку" и "сервисную станцию".
 * Продемонстрировать работу получившейся программы,
 * создать несколько типов автомобилей,
 * загнать каждый автомобиль на заправку, а затем и на автомойку.
 */

public abstract class Car {

    // region Конструкторы

    public Car(String make, String model, Color color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    public Car(String make, String model, Color color, int wheelsCount) {
        this(make, model, color);
        this.wheelsCount = wheelsCount;
        if (wheelsCount < 3 || wheelsCount > 10) {
            throw new RuntimeException("Недопустимое кол-во колес.");
        }
    }

    // endregion

    // region Методы

    public void setRefuelingStation(Refueling refuelingStation) {
        this.refueling = refuelingStation;
    }

    public void setWipingStation(Wiping wipingStation) {
        this.wipingStation = wipingStation;
    }

    public void setServiceStation(ServiceStation serviceStation) {
        this.serviceStation = serviceStation;
    }

    /**
     * Заправить автомобиль
     */
    public void fuel() {
        if (refueling != null) {
            System.out.println(this.getClass().getSimpleName());
            refueling.fuel(fuelType);
        }
    }

    /**
     * Мойка автомобиля
     */
    public void wiping(int services) {
        if (wipingStation != null) {
            System.out.println(this.getClass().getSimpleName());
            switch (services) {
                case 1 -> wipingStation.wipHeadlights();
                case 2 -> wipingStation.wipMirrors();
                case 3 -> wipingStation.wipWindshield();
                default -> {
                    wipingStation.wipHeadlights();
                    wipingStation.wipMirrors();
                    wipingStation.wipWindshield();
                }
            }
        }
    }

    /**
     * Обслуживание автомобиля на сервисной станции
     */
    public void service(int services) {
        if (serviceStation != null) {
            System.out.println(this.getClass().getSimpleName());
            switch (services) {
                case 1 -> serviceStation.wipHeadlights();
                case 2 -> serviceStation.wipMirrors();
                case 3 -> serviceStation.wipWindshield();
                case 4 -> serviceStation.fuel(fuelType);
                case 5 -> serviceStation.repairCar();
                default -> {
                    serviceStation.wipHeadlights();
                    serviceStation.wipMirrors();
                    serviceStation.wipWindshield();
                    serviceStation.fuel(fuelType);
                    serviceStation.repairCar();
                }
            }
        }
    }

    public int getWheelsCount() {
        return wheelsCount;
    }

    // Движение
    public abstract void movement();

    // Обслуживание
    public abstract void maintenance();

    // Переключение передач
    public abstract boolean gearShifting();

    // Включение фар
    public abstract boolean switchHeadlights();

    // Включение дворников
    public abstract boolean switchWipers();

    // Состояние противотуманных фар
    private boolean fogLights = false;

    public boolean switchFogLights() {
        fogLights = !fogLights;
        return fogLights;
    }

    // endregion

    // region Поля

    private Refueling refueling;

    private Wiping wipingStation;

    private ServiceStation serviceStation;

    // Марка автомобиля
    private String make;

    // Модель
    private String model;

    // Цвет
    private Color color;

    // Тип
    protected CarType type;

    // Число колес
    protected int wheelsCount = 4;

    // Тип топлива
    protected FuelType fuelType = FuelType.Diesel;

    // Тип коробки передач
    private GearboxType gearboxType;

    // Объем двигателя
    private double engineCapacity;

    // endregion

}