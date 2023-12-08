package lesson2;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

public class LoggerSingleton {
    private static LoggerSingleton INSTANCE;

    private LoggerSingleton() {
    }

    public static synchronized LoggerSingleton getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new LoggerSingleton();
        }
        return INSTANCE;
    }

    public void writeLogs() {
        try {
            Date date = new Date();

            String filePath = "./lesson2/text_logs.txt";
            FileWriter writer = new FileWriter(filePath, true);
            BufferedWriter bufferWriter = new BufferedWriter(writer);

            bufferWriter.write("Program starts at " + date + "\r\n");
            bufferWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}