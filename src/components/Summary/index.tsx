import { Container } from "../Summary/styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "deposit") {
        acc.deposits += transactions.amount;
      } else {
        acc.withdraws += transactions.amount;
      }

      acc.total = acc.deposits - acc.withdraws;
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$ {summary.deposits}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>-R$ {summary.withdraws}</strong>
      </div>
      <div className="totalBackground">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$ {summary.total}</strong>
      </div>
    </Container>
  );
}
