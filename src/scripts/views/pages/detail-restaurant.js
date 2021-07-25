/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line linebreak-style
import RestaurantDbSource from '../../data/restodb-source';
import {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createConsumerReview,
  createLikedButtonTemplate,
  addConsumerReview,
} from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favoriterestaurants-idb';

import LikeButtonPresenter from '../../utils/like-button-presenter';

const DetailRestaurant = {
  async render() {
    return `
    <section class="content-detail" id='content-utama'>
    <div class='restoContent-detail'>
            <h2 tabindex='0' class='latrestoContentestLabel-detail'>Detail Restaurant</h2>
            <div class='posts-detail' id='posts'></div>
        </div> 
    </section>
  <div id='likeButtonContainer'></div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const { restaurant } = resto;
    const { customerReviews } = restaurant;

    console.log(customerReviews);
    const restoContainer = document.querySelector('#posts');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      resto: {
        id: url.id,
        pictureId: resto.restaurant.pictureId,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
      },
    });

    const consumerReview = document.querySelector('#RestoDetailInfoReview');

    customerReviews.forEach((Review) => {
      consumerReview.innerHTML += createConsumerReview(Review);
    });
    const buttonSubmit = document.querySelector('#sendButton');
    buttonSubmit.addEventListener('click', async (e) => {
      e.preventDefault();
      const reviewerName = document.querySelector('#name');
      const textReview = document.querySelector('#review');
      const form = document.querySelector('form');
      const tr = textReview.value;
      const rv = tr.replace(/^\s+|\s+$/g, '');
      const dateUpdate = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
      const review = {
        id: url.id,
        name: reviewerName.value,
        review: textReview.value,
      };
      if (reviewerName.value === '') {
        alert('nama tidak boleh kosong');
      } else if (rv === '') {
        alert('review tidak boleh kosong');
      } else {
        await RestaurantDbSource.addConsumerReview(review);
        form.reset();
        const addAConsumerReview = document.querySelector('#RestoDetailInfoReview');
        consumerReview.innerHTML += addConsumerReview(review.name, dateUpdate, review.review);
      }
    });
  },
};

export default DetailRestaurant;
