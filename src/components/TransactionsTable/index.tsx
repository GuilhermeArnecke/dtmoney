import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário do Mês</td>
            <td className="deposit">R$1.900.00</td>
            <td>Trabalho</td>
            <td>05/06/2025</td>
          </tr>
          <tr>
            <td>Mensalidade da Faculdade</td>
            <td className="withdraw">-R$266.84</td>
            <td>Despesa</td>
            <td>09/06/2025</td>
          </tr>
          <tr>
            <td>Venda de Memória RAM</td>
            <td className="deposit">R$160.00</td>
            <td>Outro</td>
            <td>12/05/2025</td>
          </tr>
          <tr>
            <td>Pagamento de Mensalidade Rocketseat</td>
            <td className="withdraw">-R$56.00</td>
            <td>Despesa</td>
            <td>10/05/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}