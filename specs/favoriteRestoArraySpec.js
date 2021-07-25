/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurant = [];

const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteRestaurant;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurant.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id !== id);
  },

  searchRestaurants(query) {
    return this.getAllResto()
      .filter((resto) => {
        const loweredCaseMovieTitle = (resto.title || '-').toLowerCase();
        const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');

        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

        return jammedMovieTitle.indexOf(jammedQuery) != -1;
      });
  },

};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
