import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CustomerList from './CustomerList';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header />
    <div className='container mh-650'>

      <CustomerList />

    </div>

    <Footer />
</>
  );
}

export default App;
