import axios from 'axios';

export async function fetchImages(nameImg, page) {
  try {
    let link = await axios.get(
      `https://pixabay.com/api/?key=36619551-816b4952b523ae6bdb84a47ce&q=${nameImg}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    );
    let data = link.data;
    return data;
  } catch (error) {
    Notiflix.Notify.failure(`${error.message}`);
  }
} 