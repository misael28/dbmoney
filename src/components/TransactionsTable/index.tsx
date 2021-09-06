import { Container } from "../TransactionsTable/styles";

export function TransactionsTable() {
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
            <td>Desenvolvimento de applicação web</td>
            <td className="deposit">R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1200</td>
            <td>Moradia</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de applicação web</td>
            <td>R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
