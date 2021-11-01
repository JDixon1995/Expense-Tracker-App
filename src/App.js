import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      <Balance />
      <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
