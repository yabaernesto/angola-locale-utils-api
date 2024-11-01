# Angola Locale Utils API

Derivado da biblioteca Angola Locale Utils, que é uma solução focada na formatação de números “moedas” e datas para a localidade angolana (pt-AO). A API permite que os usuários formate valores monetários, datas e números de acordo com as especificações da localidade angolana (pt-AO).

## Estrutura da API
A API possui três endpoints principais, cada um voltado para uma funcionalidade específica da biblioteca que você desenvolveu. Todos os endpoints utilizam o método HTTP POST.

1. Endpoint: /formatCurrency
  - Método: POST
  - Descrição: Este endpoint formata um valor monetário de acordo com as especificações da localidade angolana.
  - Requisição:
    - Body (JSON):
    ```json
      {
        "amount": 9876543.21,
        "position": "before" // ou "after"
      }
    ```
    - Parâmetros:
      - amount: O valor numérico que você deseja formatar como moeda.
      - position: Define se o símbolo da moeda (Kz) deve aparecer antes ou depois do número.
  - Resposta:
    - Body (JSON):
    ```json
      {
        "formattedCurrency": "Kz 9.876.543,21" // ou "9.876.543,21 Kz" dependendo da posição
      }
    ```

2. Endpoint: /formatDate
  - Método: POST
  - Descrição: Este endpoint formata uma data de acordo com o formato especificado e pode incluir a hora, minuto e segundo.
  - Requisição:
    - Body (JSON):
    ```json
      {
        "date": "2024-10-31T14:30:00Z", // A data em formato ISO 8601
        "format": "DD/MM/YYYY", // Formato desejado da data
        "includeTime": true, // Incluir a hora
      }
    ```
    - Parâmetros:
      - date: A data a ser formatada (em formato ISO 8601).
      - format: O formato desejado para a data (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD, extenso).
      - includeTime: Um booleano que indica se a hora deve ser incluída.
    - Resposta:
      - Body (JSON):
      ```json
        {
          "formattedDate": "31/10/2024 14:30:00" // ou o formato especificado
        }
      ```

3. Endpoint: /formatNumber
  - Método: POST
  - Descrição: Este endpoint formata um número de acordo com as especificações da localidade angolana.
  - Requisição:
    - Body (JSON):
    ```json
      {
        "number": 1234567.89
      }
    ```
    - Parâmetros:
      - number: O valor numérico que você deseja formatar.
    - Resposta:
      - Body (JSON):
      ```json
        {
          "formattedNumber": "1.234.567,89" // O número formatado
        }
      ```

## Exemplo de Consumo com Axios (Node.js ou Frontend)
```js
const axios = require('axios');
const baseURL = 'http://localhost:3000';

async function getFormattedCurrency(amount) {
  const { data } = await axios.post(`${baseURL}/formatCurrency`, { amount });
  return data.formattedCurrency;
}

async function getFormattedDate(date, format = 'DD/MM/YYYY') {
  const { data } = await axios.post(`${baseURL}/formatDate`, { date, format });
  return data.formattedDate;
}

async function getFormattedNumber(number) {
  const { data } = await axios.post(`${baseURL}/formatNumber`, { number });
  return data.formattedNumber;
}

// Uso direto dos resultados
async main() => {
  console.log(await getFormattedCurrency(1500.50));
  console.log(await getFormattedDate('2024-11-01', 'YYYY-MM-DD'));
  console.log(await getFormattedNumber(123456.789));
}

main()
```

Nota: Todos os endpoints recebem dados via método POST e retornam respostas em formato JSON, facilitando a integração com outros sistemas ou front-ends.
