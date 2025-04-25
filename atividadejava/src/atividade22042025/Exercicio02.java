package atividade22042025;

public class Exercicio02 {
    // Dado o modelo (Fiat, Ford GM, Wolskwagen,Toyota,Honda),
    // ano fabricação, cor e placa de 5 carros.

    // Faca um algoritmo que:
    // a)Imprima quantos carros sao da cor verde e o percentual em relacao ao total.
    // b)Imprima quantos foram fabricados antes de 1990 percentual em relacao ao
    // total;
    // c)Imprima quantos sao da Fiat e o percentual em relacao ao total;

    public static void main(String[] args) {

        // ENTRADA DE DADOS
        // vetor - MODELO
        String modelo[] = new String[5];
        modelo[0] = "Fiat";
        modelo[1] = "Ford";
        modelo[2] = "Wolskwagen";
        modelo[3] = "Toyota";
        modelo[4] = "Honda";

        // ANO FABRICACAO
        int ano[] = new int[5];
        ano[0] = 1956;
        ano[1] = 2005;
        ano[2] = 2025;
        ano[3] = 2010;
        ano[4] = 1986;

        // COR
        String cor[] = new String[5];
        cor[0] = "Verde";
        cor[1] = "Amarelo";
        cor[2] = "Azul";
        cor[3] = "Verde";
        cor[4] = "Branco";

        // PLACA
        String placa[] = new String[5];
        placa[0] = "MKD-7846";
        placa[1] = "MHD-7837";
        placa[2] = "MKD-7857";
        placa[3] = "KQD-7845";
        placa[4] = "BLD-7898";

        // PROCESSAMENTO
        // PRIMEIRO - PERCORRER VETORES E CONFERIR SE AS INFORMAÇÕES ESTAO CERTAS
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Modelo - posição: " + posicao + " => " + modelo[posicao]);
        }

        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Ano - posição: " + posicao + " => " + ano[posicao]);
        }

        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Cor - posição: " + posicao + " => " + cor[posicao]);
        }

        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println(" - Placa  " + placa[posicao] + " - posição: " + posicao + " => " + placa[posicao]);
        }

        // RESOLVENDO O ALGORITMO

        // a)Imprima quantos carros sao da cor verde e o percentual em relacao ao total.
        int contadorCarrosVerde = 0;
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println("Verificando a Cor - posição: " + posicao + " => " + cor[posicao]);

            // COR ATUAL
            String corAtual = cor[posicao];
            if (corAtual.equalsIgnoreCase("Verde")) {
                contadorCarrosVerde = contadorCarrosVerde + 1;
                // ou contadorCarrosVerde++;
            }
        }

        // b)Imprima quantos foram fabricados antes de 1990 e o percentual em relacao ao
        // total;
        int quantidadeCarroAntes1990 = 0;
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println("Verificando Ano - posição: " + posicao + " => " + ano[posicao]);

            int anoAtual = ano[posicao];
            if (anoAtual < 1990) {
                quantidadeCarroAntes1990++;
            }
        }

        // c)Imprima quantos sao da Fiat e o percentual em relacao ao total;
        int quantidadeCarroFiat = 0;
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println("Verificando - Modelo - posição: " + posicao + " => " + modelo[posicao]);

            String modeloAtual = modelo[posicao];
            if (modeloAtual.equalsIgnoreCase("Fiat")) {
                quantidadeCarroFiat++;
            }
        }

        // TOTAIS
        System.out.println("Total de Carros verde: " + contadorCarrosVerde);
        System.out.println("Total de Carros fabricados antes de 1990: " + quantidadeCarroAntes1990);
        System.out.println("Total de Carros da FIAT: " + quantidadeCarroFiat);

        // PERCENTUAIS
        int totalCarros = 5;
        double percVerde = 0;
        double perc1990 = 0;
        double percModelo = 0;

        percVerde = (double)contadorCarrosVerde / totalCarros;
        perc1990 = (double)quantidadeCarroAntes1990 / totalCarros;
        percModelo = (double)quantidadeCarroFiat / totalCarros;
        
        System.out.println("Perc Verde: " + percVerde * 100 + "%");
        System.out.println("Perc 1990: " + perc1990 * 100 + "%");
        System.out.println("Perc FIAT: " + percModelo * 100 + "%");

        // SAIDA
    }
}
