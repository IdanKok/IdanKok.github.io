/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async addConsumerReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    this._resto = review;
    const { id } = this._resto;
    console.log(id);
    await this.detailRestaurant(id);
  }
}

export default RestaurantDbSource;
