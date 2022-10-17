import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar';
import Cards from './Cards';
import Sec from './Sec';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Topbar></Topbar>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Cards PlaneName="Fancy Product" price="40.00 - $80.00"></Cards>
            <Sec PlaneName="Special Item" dashprice="18.00" price="20.00"></Sec>
            <Sec PlaneName="Sale Item" dashprice="50.00" price="25.00"></Sec>
            <Sec PlaneName="Popular Item" price="40.00"></Sec>
            <Sec PlaneName="Sale Item" dashprice="50.00" price="25.00"></Sec>
            <Cards PlaneName="Fancy Product" price="120.00 - $280.00"></Cards>
            <Sec PlaneName="Special Item" dashprice="18.00" price="20.00"></Sec>
            <Sec PlaneName="Popular Item" price="40.00"></Sec>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
