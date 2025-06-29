const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.Weather-box');
const weatherdetails = document.querySelector('.Weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

  const APIKey = 'fb33056243ab235e10d536607606fea3';
  const city = document.querySelector('.search-box input').value;

  if(city == '')
    return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

       if(json.cod == '404') {
        container.computedStyleMap.height = '400px';
        weatherbox.classList.remove('active');
        weatherdetails.classList.remove('active');
        error404.classList.add('active');
        return;
       }
        
       container.computedStyleMap.height = '555px';
        weatherbox.classList.add('active');
        weatherdetails.classList.add('active');
        error404.classList.remove('active');

        const image = document.querySelector('.Weather-box img');
         const tempareture = document.querySelector('.Weather-box .tempareture');
          const description = document.querySelector('.Weather-box .description');
          const humidity = document.querySelector('.Weather-details .humidity span');
          
          const wind = document.querySelector('.Weather-details .wind span');

          switch(json.weather[0].main) {
            case 'Clear':
              image.src = 'images/clear.png';
              break;

              case 'Rain':
              image.src = 'images/rain.png';
              break;

              case 'Snow':
              image.src = 'images/snow.png';
              break;

              case 'Clouds':
              image.src = 'images/Sun-Png-193.png';
              break;
              
              case 'Mist':
              image.src = 'images/mist.png';
              break;
              
              case 'Haze':
              image.src = 'images/mist.png';
              break;

              default:
               image.src='images/Sun-Png-193.png';
          }

            tempareture.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
             description.innerHTML = `${json.weather[0].description}`;
              humidity.innerHTML = `${json.main.humidity}%`;
               wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });
});