package lesson3;

/**
 * WipingStation
 */
public class WipingStation implements Wiping {

    @Override
    public void wipHeadlights() {
        System.out.println("WipingStation wipes headlights");
    }

    @Override
    public void wipMirrors() {
        System.out.println("WipingStation wipes mirrors");
    }

    @Override
    public void wipWindshield() {
        System.out.println("WipingStation wipes windshield");
    }

}