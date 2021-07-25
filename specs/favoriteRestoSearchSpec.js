/* eslint-disable no-unused-vars
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style
import FavoriteRestoSearchPresenter
  from '../src/scripts/views/pages/liked-movies/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriterestaurants-idb';
import FavoriteRestoSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-resto-search-view';

describe('Searching resto', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestoSearchPresenter({ favoriteRestaurants, view });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('Resto a');
      expect(presenter.latestQuery).toEqual('Resto a');
    });

    it('should ask the model to search for liked Restaurant', () => {
      searchResto('Resto a');

      expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('Resto a');
    });
    it('should show the found resto', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.resto').length).toEqual(1);

      presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
      expect(document.querySelectorAll('.resto').length).toEqual(2);

      // kemudian tes film di atas ditampilkan
    });
    it('should show the title of the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the resto returned does not contain a title', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([
        { id: 444 },
      ]);
      searchResto('film a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');

      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite movies', () => {
      searchResto('    ');

      expect(favoriteRestaurants.getAllResto)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurant could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('resto-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurants__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchResto('film a');
    });
    it('should not show any resto', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchResto('film a');
    });
  });
});
*/
