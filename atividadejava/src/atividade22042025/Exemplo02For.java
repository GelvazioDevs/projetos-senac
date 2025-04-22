package atividade22042025;

public class Exemplo02For {
    
    public static void main(String[] args) {
            // INICIO  VALIDACAO  INCREMENTO
        for(int i = 0; i < 10;    i++){
            if(i == 3){
                continue;
            }
            System.out.println("Contador na posicao: " + i);

            if(i == 8){
                break;
            }
        }
    }
}
