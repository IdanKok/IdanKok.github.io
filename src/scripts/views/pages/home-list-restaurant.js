/* eslint-disable linebreak-style */
import RestaurantDbSource from '../../data/restodb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const HomeListRestaurant = {
  async render() {
    return `<section class="content" id="content-utama">
                <div class="restoContent">
                    <h2 tabindex="0" class="latrestoContentestLabel">Restaurant List</h2>
                    <div class="posts" id="posts">
                </div>
              </div> 
            </section>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await RestaurantDbSource.listRestaurant();
    const restoContainer = document.querySelector('#posts');
    console.log(resto);
    resto.forEach((Resto) => {
      restoContainer.innerHTML += createRestaurantTemplate(Resto);
    });
  },
};

export default HomeListRestaurant;
