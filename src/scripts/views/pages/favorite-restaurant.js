/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriterestaurants-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `<section class='content' id='content-utama'>
          <div class='restoContent'>
                  <h2 tabindex='0' class='latrestoContentestLabel'>Favorite Restaurant </h2>
                  <div class='posts' id='posts'></div></div>
                </section>`;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#posts');
    console.log(resto);
    resto.forEach((Resto) => {
      restoContainer.innerHTML += createRestaurantTemplate(Resto);
    });
  },
};

export default FavoriteRestaurant;
