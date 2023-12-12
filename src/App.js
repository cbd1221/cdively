import './App.css';
import image from './wizard (2).png';


function App() {
 
  document.addEventListener('keydown', function(event) {
    const wizard = document.getElementById('wizard');
    var button = document.getElementById('weatherbtn');

    var wizardRect = wizard.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    const overlapX = buttonRect.left < wizardRect.right && buttonRect.right > wizardRect.left;

    const stepSize = 2.3;
  
    // Get current left position
    let leftPosition = wizard.style.left ? parseInt(wizard.style.left, 10) : 0;
    const maxWidth = window.innerWidth - wizard.offsetWidth;


    if (event.key === 'ArrowRight') {
      // Move right
      if (leftPosition < maxWidth) {
      wizard.style.left = `${leftPosition + stepSize}px`;
      wizard.style.transform = 'scaleX(-1)';
      if (overlapX) {
        button.classList.add('weather-hover');
        this.addEventListener('keydown', function(event) {
          if (event.key === 'Enter' && overlapX) {
            handleClick();
          }
        })
      } else {
        button.classList.remove('weather-hover');
      }
    }
    } else if (event.key === 'ArrowLeft') {
      // Move left
      if (leftPosition > 0) {
        wizard.style.left = `${leftPosition - stepSize}px`;
        wizard.style.transform = 'scaleX(1)';
        if (overlapX) {
          button.classList.add('weather-hover');
          this.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && overlapX) {
              handleClick();
            }
          })
        } else {
          button.classList.remove('weather-hover');
      }
    }
  }});

  const handleClick = () => {
    //open the following page
    window.location.href =
      'https://weather.cdively.dev';
  }


  return (
    <div className="App">
      <header className="App-header">
        <button id='weatherbtn' onClick={handleClick}>Weather</button>
        <img src={image} id='wizard' className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


export default App;
