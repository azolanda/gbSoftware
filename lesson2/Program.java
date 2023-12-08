package lesson2;

/**
 * 1. Разработать UML-диаграмму для демонстрации работы шаблона
 * (ОДНОГО, ЛЮБОГО ИЗ СПИСКА) проектирования:
 * Singleton, Builder, Adapter, Facade, Decorator, Proxy, Observer, Mediator
 * ИЛИ ЛЮБОГО ДРУГОГО НА ВЫБОР.
 * 
 * 2. Продемонстрировать работу этого шаблона проектирования
 * в вашей программе.
 */

public class Program {
    public static void main(String[] args) {
        LoggerSingleton logger = LoggerSingleton.getInstance();
        logger.writeLogs();
    }
}
