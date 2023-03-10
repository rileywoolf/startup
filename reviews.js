class ReviewPage {
  reviews;
  currentlyReading;

  constructor() {
    this.reviews = [];
    this.currentlyReading = [];

    document.querySelectorAll(".review-container").forEach((el) => {
      let children = el.children;
      const titleEl = children[0].firstElementChild;
      const authorEl = children[0].lastElementChild;
      const ratingEl = children[1];
      const reviewTextEl = children[2];
      const userNameEl = children[3];
      this.reviews.push(
        new Review(el, titleEl, authorEl, ratingEl, reviewTextEl, userNameEl)
      );
    });

    document.querySelectorAll(".current-item").forEach((el) => {
      let children = el.children;
      const userNameCurrEl = children[0];
      const titleCurrEl = children[1];
      const authorCurrEl = children[2];

      this.currentlyReading.push(
        new CurrentlyReading(el, userNameCurrEl, titleCurrEl, authorCurrEl)
      );
    });

    const userNameEl = document.querySelector(".user-name");
    userNameEl.textContent = this.getUserName();
  }

  getUserName() {
    return localStorage.getItem("userName") ?? "Unknown User";
  }
}

class Review {
  constructor(el, titleEl, authorEl, ratingEl, reviewTextEl, userNameEl) {
    this.el = el;
    this.titleEl = titleEl;
    this.authorEl = authorEl;
    this.ratingEl = ratingEl;
    this.reviewTextEl = reviewTextEl;
    this.userNameEl = userNameEl;

    this.updateTextContent();
  }

  // Go through and update the text for each element.
  updateTextContent() {
    this.titleEl.textContent = this.getTitle();
    this.authorEl.textContent = this.getAuthor();
    this.ratingEl.textContent = this.getRating();
    this.reviewTextEl.textContent = this.getReviewText();
    this.userNameEl.textContent = this.getUserName();
  }

  // CURRENTLY JUST RETURNS DUMMY DATA.
  getTitle() {
    return "TITLE";
  }

  getAuthor() {
    return "AUTHOR";
  }

  getRating() {
    const numStars = 3;
    return "★".repeat(numStars) + "☆".repeat(5 - numStars);
  }

  getReviewText() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  }

  getUserName() {
    return "@username";
  }
}

class CurrentlyReading {
  constructor(el, userNameEl, titleEl, authorEl) {
    this.el = el;
    this.userNameEl = userNameEl;
    this.titleEl = titleEl;
    this.authorEl = authorEl;

    this.updateTextContent();
  }

  updateTextContent() {
    this.userNameEl.textContent = this.getUserName();
    this.titleEl.textContent = this.getTitle();
    this.authorEl.textContent = this.getAuthor();
  }

  // CURRENTLY JUST RETURNS DUMMY DATA.
  getUserName() {
    return "@username";
  }

  getTitle() {
    return "TITLE";
  }

  getAuthor() {
    return "AUTHOR";
  }
}

const reviewPage = new ReviewPage();
