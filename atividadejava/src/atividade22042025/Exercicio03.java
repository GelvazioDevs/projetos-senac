package atividade22042025;

public class Exercicio03 {
    // Dada uma relacao de 5 nomes de carros, imprima quantos sao da cor azul.
    // Sendo que para cada carro tem-se uma ficha contendo a cor e o nome.
    public static void main(String[] args) {
        
        // ENTRADA DE DADOS
        // vetor - MODELO
        String nome[] = new String[5];
        nome[0] = "Corolla";
        nome[1] = "Fusca";
        nome[2] = "Fiat Palio";
        nome[3] = "Hilux";
        nome[4] = "Ferrari";

        // COR
        String cor[] = new String[5];
        cor[0] = "Verde";
        cor[1] = "Amarelo";
        cor[2] = "Azul";
        cor[3] = "Azul";
        cor[4] = "Branco";

        // PROCESSAMENTO

        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Nome veiculo  " + nome[posicao] + " - posição: " + posicao + " => " + nome[posicao]);
        }

        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Cor - posição: " + posicao + " => " + cor[posicao]);
        }

        // RESOLVENDO O ALGORITMO

        // Imprima quantos carros sao da cor azul
        int contadorCarrosAzul = 0;
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println("Verificando a Cor - posição: " + posicao + " => " + cor[posicao]);

            // COR ATUAL
            String corAtual = cor[posicao];
            if (corAtual.equalsIgnoreCase("Azul")) {
                contadorCarrosAzul++;
            }
        }

        // SAIDA

        // TOTAIS
        System.out.println("Total de Carros azul: " + contadorCarrosAzul);    
    }
}
