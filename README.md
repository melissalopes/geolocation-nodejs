## 🌍 **Visão Geral**

Em um mundo conectado e globalizado, a geolocalização se torna cada vez mais essencial.

Este é um projeto que simula um cenário real, onde desenvolvi uma API RESTful robusta para gerenciar usuários e localizações.

## 🛠 **Especificações Técnicas**

-   **Node.js**: Versão 20 ou superior.
-   **Banco de Dados**: Mongo 7+.
-   **ORM**: Mongoose / Typegoose.
-   **Linguagem**: Typescript.
-   **Formatação e Linting**: Eslint + prettier.
-   **Comunicação com MongoDB**: Deve ser feita via container.

## 🔍 **Funcionalidades Esperadas**

### Usuários

-   **CRUD** completo para usuários.
-   Cada usuário deve ter nome, email, endereço e coordenadas.
-   Na criação, o usuário pode fornecer endereço ou coordenadas. Haverá erro caso forneça ambos ou nenhum.
-   Uso de serviço de geolocalização para resolver endereço ↔ coordenadas.
-   Atualização de endereço ou coordenadas deve seguir a mesma lógica.

### Regiões

-   **CRUD** completo para regiões.
-   Uma região é definida como um polígono em GeoJSON, um formato padrão para representar formas geográficas. Cada região tem um nome, um conjunto de coordenadas que formam o polígono, e um usuário que será o dono da região.
-   Listar regiões contendo um ponto específico.
-   Listar regiões a uma certa distância de um ponto, com opção de filtrar regiões não pertencentes ao usuário que fez a requisição.
-   Exemplo de um polígono simples em GeoJSON:
    ```json
    {
      "type": "Polygon",
      "coordinates": [
        [
          [longitude1, latitude1],
          [longitude2, latitude2],
          [longitude3, latitude3],
          [longitude1, latitude1] // Fecha o polígono
        ]
      ]
    }
    ```

### Testes

-   Unitários e de integração.
