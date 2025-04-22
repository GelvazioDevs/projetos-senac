package atividade22042025;

public class Exemplo01While {
    
    public static void main(String[] args) {
        
        // REPETICAO USANDO WHILE
        // contador que incrementa a cada laço de repetição

        int contador = 1;
        int totalRepeticao = 10;
        while(contador <= totalRepeticao){
            // CONTINUA REPETINDO

            if(contador == 3){
                contador = contador + 1;
                continue;
            }

            System.out.println("Contador na posicao: " + contador);

            if(contador == 8){
                break;
            }

            // INCREMENTA 1 A CADA LAÇO DE REPETICAO
            // contador++;
            contador = contador + 1;
        }
    }
}
