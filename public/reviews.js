class ReviewPage {
  reviews;
  currentlyReading;

  constructor() {
    this.reviews = [];
    this.currentlyReading = [];

    let index = 0;
    document.querySelectorAll(".review-container").forEach((el) => {
      let children = el.children;
      const titleEl = children[0].firstElementChild;
      const authorEl = children[0].lastElementChild;
      const ratingEl = children[1];
      const reviewTextEl = children[2];
      const userNameEl = children[3];
      this.reviews.push(
        new Review(el, titleEl, authorEl, ratingEl, reviewTextEl, userNameEl, index)
      );
      index = index + 1;
    });

    let currIndex = 0;
    document.querySelectorAll(".current-item").forEach((el) => {
      let children = el.children;
      const userNameCurrEl = children[0];
      const titleCurrEl = children[1];
      const authorCurrEl = children[2];

      this.currentlyReading.push(
        new CurrentlyReading(el, userNameCurrEl, titleCurrEl, authorCurrEl, currIndex)
      );
      currIndex = currIndex + 1;
    });

    const userNameEl = document.querySelector(".user-name");
    userNameEl.textContent = this.getUserName();
  }

  getUserName() {
    return localStorage.getItem("userName") ?? "Unknown User";
  }
}

class Review {
  constructor(el, titleEl, authorEl, ratingEl, reviewTextEl, userNameEl, pos) {
    this.el = el;
    this.titleEl = titleEl;
    this.authorEl = authorEl;
    this.ratingEl = ratingEl;
    this.reviewTextEl = reviewTextEl;
    this.userNameEl = userNameEl;
    this.pos = pos;

    this.updateTextContent();
  }

  // Go through and update the text for each element.
  async updateTextContent() {
    let reviews = [];
    try {
      const response = await fetch('/api/getreviews');
      reviews = await response.json();

      localStorage.setItem('reviews', JSON.stringify(reviews));
    } catch {
      const reviewsText = localStorage.getItem('reviews');
      if (reviewsText) {
        reviews = JSON.parse(reviewsText);
      }
    }

    if (reviews.length) {
      this.titleEl.textContent = reviews[this.pos].title;
      this.authorEl.textContent = reviews[this.pos].author;
      this.ratingEl.textContent = this.getRating(reviews[this.pos].stars);
      this.reviewTextEl.textContent = reviews[this.pos].text;
      this.userNameEl.textContent = reviews[this.pos].username;
    } else {
      this.titleEl.textContent = "TITLE";
      this.authorEl.textContent = "AUTHOR";
      this.ratingEl.textContent = this.getRating(3);
      this.reviewTextEl.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      this.userNameEl.textContent = "@username";
    }
  }

  getRating(stars) {
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  }
}

class CurrentlyReading {
  constructor(el, userNameEl, titleEl, authorEl, pos) {
    this.el = el;
    this.userNameEl = userNameEl;
    this.titleEl = titleEl;
    this.authorEl = authorEl;
    this.pos = pos;

    this.updateTextContent();
  }

  async updateTextContent() {
    let current = [];
    try {
      const response = await fetch('/api/getcurrent');
      current = await response.json();

      localStorage.setItem('currently', JSON.stringify(current));
    } catch {
      const currentText = localStorage.getItem('currently');
      if (currentText) {
        current = JSON.parse(currentText);
      }
    }
    if (current.length) {
      this.userNameEl.textContent = "@" + current[this.pos].username + " is reading";
      this.titleEl.textContent = current[this.pos].title;
      this.authorEl.textContent = "by " + current[this.pos].author;
    } else {
      this.userNameEl.textContent = "@username";
      this.titleEl.textContent = "TITLE";
      this.authorEl.textContent = "AUTHOR";
    }
  }
}

const reviewPage = new ReviewPage();

async function postCurrently() {
  const titleEl = document.querySelector("#b-title");
  const authorEl = document.querySelector("#b-author")

  const username = localStorage.getItem("userName") ?? "Unknown User";

  const newCurrently = { username: username, title: titleEl.value, author: authorEl.value };
  try {
    const response = await fetch('/api/postcurrent', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newCurrently),
    });

    // Clear out the values in the form. 
    titleEl.value = '';
    authorEl.value = '';

    const currently = await response.json();
    localStorage.setItem("currently", JSON.stringify(currently));
  } catch {
    console.log("POST CURRENTLY ERROR");
  }
}

async function postReview() {
  const titleEl = document.querySelector("#r-title");
  const authorEl = document.querySelector("#r-author");
  const starsEl = document.querySelector("#r-stars");
  const textEl = document.querySelector("#r-text");
  
  const username = localStorage.getItem("userName") ?? "Unknown User";
  const newReview = { username: username, title: titleEl.value, author: authorEl.value,
  stars: starsEl.value, text: textEl.value };

  try {
    const response = await fetch('/api/postreview', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    // Clear out the values in the form. 
    titleEl.value = '';
    authorEl.value = '';
    starsEl.value = '';
    textEl.value = '';
    
    const reviews = await response.json();
    localStorage.setItem("reviews", JSON.stringify(reviews));
  } catch {
    console.log("POST REVIEW ERROR");
  }
}
