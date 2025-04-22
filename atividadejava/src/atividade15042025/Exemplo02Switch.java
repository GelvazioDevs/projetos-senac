package atividade15042025;

import java.util.Scanner;

public class Exemplo02Switch {
    
    // CONSTANTES    
    public static final int MENSAGEM_UM = 1;
    public static final int MENSAGEM_DOIS = 2;
    public static final int MENSAGEM_TRES = 3;
    public static final int MENSAGEM_QUATRO = 4;
    public static final int MENSAGEM_CINCO = 5;

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        // DUPLA 1 - MENSAGEM AO USUARIO, 2 - ENTRADA DO USUARIO
        System.out.println("Informe uma opção entre 1 e 5:");
        int opcao = entrada.nextInt();

        if(opcao == 1){
            System.out.println("mensagem 1");
        } else if(opcao == 2){
            System.out.println("mensagem 2");
        } else if(opcao == 3){
            System.out.println("mensagem 3");
        } else if(opcao == 4){
            System.out.println("mensagem 4");
        } else if(opcao == 5){
            System.out.println("mensagem 5");
        } else {
            System.out.println("opção invalida!");
        }
 
        // USANDO SWITCH
        switch (opcao) {
            case 1: //MENSAGEM_UM:
                System.out.println("mensagem 1");
                // PODE SER COLOCADO MAIS SWITCH AQUI DENTRO
                System.out.println("Informe a opção 2 entre 6 e 10:");
                int opcao2 = entrada.nextInt();
                switch (opcao2) {
                    case 6:
                        System.out.println("Mensagem 6");
                        break;
                        case 7:
                        System.out.println("Mensagem 7");
                        break;
                    default:
                    System.out.println("Opção 2 invalida!");
                        break;
                }
                break;
            case MENSAGEM_DOIS:
                System.out.println("mensagem 2");
            break;
            case MENSAGEM_TRES:
                System.out.println("mensagem 3");
            break;
            case MENSAGEM_QUATRO:
                System.out.println("mensagem 4");
            break;
            case MENSAGEM_CINCO:
                System.out.println("mensagem 5");
            break;
            default:
                System.out.println("opção inválida!");
                break;
        }

        entrada.close();
    }
}
