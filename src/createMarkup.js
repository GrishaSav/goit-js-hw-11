export function createMarkup(data) {
    let markup = data.hits;
    return markup
      .map(
        ({
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
          largeImageURL,
        }) =>
          `<div class="photo-card">
          <a class="gallery-link" href="${largeImageURL}">
              <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" height = 350/>
              <div class="info">
                <p class="info-item">
                  <b>Likes: </b> <br> ${likes}
                </p>
                <p class="info-item">
                  <b>Views: </b><br>${views}
                </p>
                <p class="info-item">
                  <b>Comments: </b><br>${comments}
                </p>
                <p class="info-item">
                  <b>Downloads: </b><br>${downloads}
                </p>
              </div>
              </a>
            </div>`
      )
      .join('');
  }