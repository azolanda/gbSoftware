package lesson8.presenters;

import java.util.Date;

public class BookingPresenter implements ViewObserver {

    private final Model model;

    private final View view;

    public BookingPresenter(Model model, View view) {
        this.model = model;
        this.view = view;
        this.view.registerObserver(this);
    }

    public void updateUILoadTables() {
        view.showTables(model.loadTables());
    }

    public void updateUIReservationTableResult(int reservationNo) {
        view.showReservationTableResult(reservationNo);
    }

    public void updateUIChangeReservationTableResult(int reservationNo) {
        view.showChangeReservationTableResult(reservationNo);
    }

    @Override
    public void onReservationTable(Date orderDate, int tableNo, String name) {
        try {
            int reservationNo = model.reservationTable(orderDate, tableNo, name);
            updateUIReservationTableResult(reservationNo);
        } catch (Exception e) {
            updateUIReservationTableResult(-1);
        }
    }

    @Override
    public void onChangeReservationTable(int oldReservation, Date reservationDate, int tableNo, String name) {
        try {
            int reservationNo = model.changeReservationTable(oldReservation, reservationDate, tableNo, name);
            updateUIChangeReservationTableResult(reservationNo);
        } catch (Exception e) {
            updateUIChangeReservationTableResult(-1);
        }
    }
}
