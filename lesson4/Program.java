package lesson4;

import java.util.Date;

public class Program {

    /**
     * Разработать контракты и компоненты системы "Покупка онлайн билетов на
     * автобус в час пик".
     * 
     * @param args
     */
    public static void main(String[] args) {

        Core core = new Core();

        MobileApp mobileApp = new MobileApp(
                core.getTicketProvider(),
                core.getCustomerProvider(),
                "abcdef101",
                "passwdabcdef101");

        BusStation busStation = new BusStation(core.getTicketProvider());

        mobileApp.buyTicket("1000000000001");
        mobileApp.searchTicket(new Date());
        mobileApp.getTickets();
        busStation.checkTicket("AAA4001");
    }

}