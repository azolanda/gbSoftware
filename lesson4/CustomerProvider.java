package lesson4;

import java.util.Collection;

public class CustomerProvider {

    private Database database;

    public CustomerProvider(Database database) {
        this.database = database;
    }

    public Customer getCustomer(String login, String password) {
        // TODO: Процесс аутентификации

        if (!database.getLogins().containsKey(login) &&
                !database.getPasswords().containsKey(login))
            throw new RuntimeException("Неверный логин");

        if (!database.getPasswords().get(login).equals(password)) {
            throw new RuntimeException("Неверный пароль");
        }

        Customer customer = null;
        Integer id = database.getLogins().get(login);

        if (id == null) {
            throw new RuntimeException("Логин не найден в базе данных");
        }

        Collection<Customer> customers = database.getCustomers();

        if (customers.isEmpty())
            throw new RuntimeException("Ошибка получения доступа к данным пользователей");

        for (Customer user : customers) {
            if (user.getId() == id.intValue()) {
                customer = user;
                System.out.println("Hello, " + login +
                        "!\nSuccesfull authentification");
            }
        }

        if (customer == null)
            throw new RuntimeException("Пользователь не найден");

        return customer;
    }

}