import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restoran) => `
<article class="restoItem">
<div class="restoItemThumbnail-detail">
  <img tabindex="0" 
    src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}"
    alt="Gambar restoran" ${restoran.name} di ${restoran.city}" 
  />
  <div class="resto_rating-detail">
  <p tabindex="0">⭐️<span  class="rating_score-detail">${
  restoran.rating
}</span></p>
</div>
</div>

  <div class="restoItemContent">
    
    <h3 tabindex="0" class="restoItemTitle-detail" id="nama-resto">
    ${restoran.name} 
    </h3>
    <h4 tabindex="0" class="RestoItemlabel">
    Address
    </h4>
  <div class="RestoDetailInfo">
    <span tabindex="0" class="RestoDetailText">${restoran.city} -${
  restoran.address
}
    </span>
   
  </div>
  <h4 tabindex="0" class="RestoItemlabel">
  Menu Category 
  </h4>
  <div class="RestoDetailInfo">  
    <span tabindex="0" class="RestoDetailTextCategory">${restoran.categories
    .map((ct) => `${ct.name}`)
    .join(' ')}</span>
  
  </div>
<h4 tabindex="0" class="RestoItemlabel">
  Food Menu  
  </h4>
  <div class="RestoDetailInfo"> 
    <span tabindex="0" class="RestoDetailText"><p>${restoran.menus.foods
    .map((ct) => `${ct.name}`)
    .join(', ')}</p></span>
  </div>
  <h4 tabindex="0" class="RestoItemlabel">
  Drinks Menu 
  </h4>
  <div class="RestoDetailInfo"> 
  
    <span tabindex="0" class="RestoDetailText"><p>${restoran.menus.drinks
    .map((drk) => `${drk.name}`)
    .join(', ')}</p></span>
  </div>
  <h4 tabindex="0" class="RestoItemlabel">
  Rating  
  </h4>
  <span tabindex="0" class="RestoDetailText">${restoran.rating}</span>
  <h4 tabindex="0"  class="RestoDetailDescription">
  Overview
  </h4>
    <p tabindex="0" class="restoItemDescriptionDetail">${
  restoran.description
}</p>

<h4 tabindex="0" class="RestoItemlabel">
Add Review 
</h4>
<div class="RestoDetailInfoReview"> 
<form tabindex="0">
<label for="name">Name </label>
 <input tabindex="0" type="text" id="name" name="name" placeholder="your name"><br>
<label for="review">Review </label>
 <textarea tabindex="0" placeholder="Describe yourself here..." id="review" name="review">
  </textarea>
  <button tabindex="0" type="button" id="sendButton" name="send">Send</button>
  </form>
</div>
  <h4 tabindex="0" class="RestoItemlabelReview">
  Consumer Review 
  </h4>
  
<div class="RestoDetailInfoReview" id="RestoDetailInfoReview" > 
  </div>
  </div>
  
  
</article>
`;

const createRestaurantTemplate = (restoran) => `
    <article class="restoItem">
          <div class="restoItemThumbnail">
            <img tabindex="0" class="lazyload"
              data-src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}"
              alt="Gambar restoran" ${restoran.name} di ${restoran.city}" 
            />

            
            <div class="resto_rating">
            <p tabindex="0">⭐️<span  class="rating_score">${
  restoran.rating
}</span></p>
        </div>
        </div>
         
          
            <div class="restoItemContent">
              
              <h3  class="restoItemTitle" id="nama-resto">
              <a href="${`/#/detail-restaurant/${restoran.id}`}">
              
              ${restoran.name} 
              </a>
              </h3>
              
              
              <div class="city">
              <span tabindex="0" class="city">${restoran.city}</span>
             
            </div>
              <p tabindex="0" class="restoItemDescription">${
  restoran.description
}</p>
            
          </article>
  `;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createConsumerReview = (restoran) => `
<div class="RestoDetailReview">
<h4 tabindex="0">${restoran.name}</h4>
<p tabindex="0" class="date-review">${restoran.date}</p>
      
<p tabindex="0" class="date-review">${restoran.review}</p>
      </div>
`;

const addConsumerReview = (name, dateUpdate, review) => `
<div class="RestoDetailReview">
<h4 tabindex="0">${name}</h4>
<p tabindex="0" class="date-review">${dateUpdate}</p>
      
<p tabindex="0" class="date-review">${review}</p>
      </div>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikedButtonTemplate,
  createLikeButtonTemplate,
  createConsumerReview,
  addConsumerReview,
};
