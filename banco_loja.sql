--
-- Arquivo gerado com SQLiteStudio v3.4.4 em dom mai 4 20:31:02 2025
--
-- Codificação de texto usada: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: cidade
CREATE TABLE IF NOT EXISTS cidade (cidade_id INTEGER PRIMARY KEY AUTOINCREMENT, cidade_nome TEXT (100), cidade_ibge TEXT (10), uf_sigla TEXT (2));

-- Tabela: clientes
CREATE TABLE IF NOT EXISTS clientes (cliente_id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_nome TEXT, cliente_endereco TEXT (100), cidade_id INTEGER REFERENCES cidade (cidade_id), cliente_telefone TEXT (10), cliente_cpfcnpj TEXT (14));
INSERT INTO clientes (cliente_id, cliente_nome, cliente_endereco, cidade_id, cliente_telefone, cliente_cpfcnpj) VALUES (1, NULL, NULL, NULL, NULL, NULL);

-- Tabela: condicao
CREATE TABLE IF NOT EXISTS condicao (condicao_id INTEGER PRIMARY KEY AUTOINCREMENT, condicao_descricao TEXT (50));

-- Tabela: fabricante
CREATE TABLE IF NOT EXISTS fabricante (fabricante_id INTEGER PRIMARY KEY AUTOINCREMENT, fabricante_nome);

-- Tabela: fornecedor
CREATE TABLE IF NOT EXISTS fornecedor (fornecedor_id INTEGER PRIMARY KEY AUTOINCREMENT, fornecedor_nome TEXT (100));

-- Tabela: grupo
CREATE TABLE IF NOT EXISTS grupo (grupo_id INTEGER PRIMARY KEY AUTOINCREMENT, grupo_descricao TEXT (50));

-- Tabela: itens_vendas
CREATE TABLE IF NOT EXISTS itens_vendas (itensvendas_id INTEGER PRIMARY KEY AUTOINCREMENT, produto_id INTEGER, produto_qtde NUMERIC (12, 2), produto_valor NUMERIC (12, 2), produto_total NUMERIC (12, 2), vendas_id REFERENCES vendas (vendas_id));

-- Tabela: produtos
CREATE TABLE IF NOT EXISTS produtos (produto_id INTEGER PRIMARY KEY, produto_nome TEXT (100), grupo_id INTEGER REFERENCES grupo (grupo_id), produto_custo NUMERIC (12, 2), produto_venda NUMERIC (12, 2), fornecedor_id INTEGER REFERENCES fornecedor (fornecedor_id), fabricante_id INTEGER REFERENCES fabricante (fabricante_id), produto_codbarras TEXT (20), produto_estoque NUMERIC (12, 2));

-- Tabela: vendas
CREATE TABLE IF NOT EXISTS vendas (vendas_id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_id INTEGER REFERENCES clientes (cliente_id), vendas_data date, vendedor_id INTEGER REFERENCES vendedor (vendedor_id), condicao_id INTEGER REFERENCES condicao (condicao_id), vendas_valor NUMERIC (12, 2));
INSERT INTO vendas (vendas_id, cliente_id, vendas_data, vendedor_id, condicao_id, vendas_valor) VALUES (1, 1, NULL, NULL, NULL, NULL);

-- Tabela: vendedor
CREATE TABLE IF NOT EXISTS vendedor (vendedor_id INTEGER PRIMARY KEY AUTOINCREMENT, vendedor_nome TEXT (100));

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
