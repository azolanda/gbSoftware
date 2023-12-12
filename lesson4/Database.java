package lesson4;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Database {

    public Database() {
        for (int i = 0; i < 50; i++) {
            tickets.add(new Ticket());
            if (i > 0 && i % 2 == 0) {
                Customer customer = new Customer();
                String login = customer.getLogin();
                logins.put(login, customer.getId());
                passwords.put(login, customer.getPassword());
                customers.add(customer);
                for (int j = i; j >= i - 1; j--) {
                    customer.getTickets().add(tickets.get(j));
                    tickets.get(j).setCustomerId(customer.getId());
                }
            }
        }
    }

    private static int counter = 100;

    private List<Ticket> tickets = new ArrayList<>();
    private List<Customer> customers = new ArrayList<>();
    private Map<String, Integer> logins = new HashMap<>();
    private Map<String, String> passwords = new HashMap<>();

    public Collection<Ticket> getTickets() {
        return tickets;
    }

    public Collection<Customer> getCustomers() {
        return customers;
    }

    public Map<String, Integer> getLogins() {
        return logins;
    }

    public Map<String, String> getPasswords() {
        return passwords;
    }

    /**
     * Получить актуальную стоимость билета
     * 
     * @return
     */
    public double getTicketAmount() {
        return 45;
    }

    /**
     * Получить идентификатор заявки на покупку билета
     * 
     * @return
     */
    public int createTicketOrder(int clientId) {
        return ++counter;
    }
}