package lesson8.views;

import lesson8.models.Table;
import lesson8.presenters.View;
import lesson8.presenters.ViewObserver;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

public class BookingView implements View {

    private Collection<ViewObserver> observers = new ArrayList<>();

    @Override
    public void registerObserver(ViewObserver observer) {
        observers.add(observer);
    }

    public void showTables(Collection<Table> tables) {
        for (Table table : tables) {
            System.out.println(table);
        }
    }

    @Override
    public void showReservationTableResult(int reservationNo) {
        if (reservationNo > 0)
            System.out.printf("Столик успешно забронирован. Номер вашей брони: #%d\n", reservationNo);
        else
            System.out.println("Не удалось забронировать столик. Повторите попытку позже.");

    }

    @Override
    public void showChangeReservationTableResult(int reservationNo) {
        if (reservationNo > 0)
            System.out.printf(
                    "Ваше предыдущее бронирование отменено.\nНовый столик успешно забронирован. Номер вашей брони: #%d\n",
                    reservationNo);
        else
            System.out.println("Не удалось отменить бронь и забронировать новый столик. Повторите попытку позже.");
    }

    public void changeReservationTable(int oldReservation, Date reservationDate, int tableNo, String name) {
        for (ViewObserver observer : observers) {
            observer.onChangeReservationTable(oldReservation, reservationDate, tableNo, name);
        }
    }

    public void reservationTable(Date orderDate, int tableNo, String name) {
        for (ViewObserver observer : observers) {
            observer.onReservationTable(orderDate, tableNo, name);
        }
    }

}
