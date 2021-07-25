/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import data from '../data/DATA.json';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/**
const getRestoData = (data) => {
  let html = "";
  data.restaurants.forEach((restoran) => {
    html += `
          <article class="restoItem">
          <div class="restoItemThumbnail">
            <img tabindex="0"
              src="${restoran.pictureId}"
              alt="Gambar restoran ${restoran.name} di ${restoran.city}"
            />
            <div class="resto_rating">
            <p tabindex="0">⭐️<span  class="rating_score">${restoran.rating}</span></p>
        </div>
        </div>

            <div class="restoItemContent">

              <h3  class="restoItemTitle" id="nama-resto">
              <a  href="#">

              ${restoran.name}
              </a>
              </h3>

              <div class="city">
              <span tabindex="0" class="city">${restoran.city}</span>

            </div>
              <p tabindex="0" class="restoItemDescription">${restoran.description}</p>
            </div>
          </article>
      `;
    document.getElementById("posts").innerHTML = html;
  });
};

getRestoData(data);
* */
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawerMenu'),
  jumbotron: document.querySelector('.jumbotron'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
