import { Button } from './components/Button/Button';
import staticText from './languages/en.pl';

function App() {
  return (
    <div className='App'>
      <h1>HeadHunter App</h1>
      <Button endpoint='#' text={staticText.loginPage.button.login} />
    </div>
  );
}

export default App;
