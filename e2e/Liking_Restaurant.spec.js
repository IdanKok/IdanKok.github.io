/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one resto', async ({ I }) => {
  // I.see('Tidak ada resto untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restoItemTitle a');

  const firstResto = locate('.restoItemTitle a').first();

  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('.restoItem');

  const likedRestoTitle = await I.grabTextFrom('.restoItemTitle a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking the resto has been liked', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restoItemTitle a');

  const firstResto = locate('.restoItemTitle a').first();

  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('.restoItem');

  const likedRestoTitle = await I.grabTextFrom('.restoItemTitle a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  const firstLikedResto = locate('.restoItemTitle a').first();
  I.click(firstLikedResto);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');
});
