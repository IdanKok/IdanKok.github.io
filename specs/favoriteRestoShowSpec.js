/* eslint-disable no-new */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/*
import FavoriteRestoSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-resto-search-view';
import FavoriteRestoShowPresenter
  from '../src/scripts/views/pages/liked-movies/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriterestaurants-idb';

describe('Showing all favorite restaurants', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getFavoriteRestoTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    fit('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should render the information that no restaurants have been liked', () => {
      const presenter = new FavoriteRestoShowPresenter({
        view,
      });

      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.resto-item__not__found').length)
        .toEqual(1);
    });
  });
});
*/
