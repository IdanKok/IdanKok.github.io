/* eslint-disable linebreak-style */
import HomeListRestaurant from '../views/pages/home-list-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';

const routes = {
  '/': HomeListRestaurant, // default page
  '/restaurant-list': HomeListRestaurant,
  '/favorite-restaurant': FavoriteRestaurant,
  '/detail-restaurant/:id': DetailRestaurant,
};

export default routes;
