import java.util.Scanner;

public class App {   
    public static void main(String[] args) {
        System.out.println(Saludar());
    }
    public static String Saludar(){
        Scanner input = new Scanner(System.in);
        System.out.println("¿cual es tu nombre?");
        String nombre = input.nextLine();
        return "hola, " + nombre;
    }
}
