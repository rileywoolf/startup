class ReviewPage {
  reviews;
  currentlyReading;

  constructor() {
    this.reviews = [];
    this.currentlyReading = [];

    // document.querySelectorAll(".review-container").forEach((el, i) => {
    //   this.reviews.set();
    // });

    const userNameEl = document.querySelector(".user-name");
    userNameEl.textContent = this.getUserName();
  }

  getUserName() {
    return localStorage.getItem("userName") ?? "Unknown User";
  }
}

class Review {
  constructor(el) {
    this.el = el;
    // A review has a TITLE, AUTHOR, RATING, REVIEW, and USERNAME
    // DO I NEED TO GET THE ELEMENTS HERE?
  }
}

class CurrentlyReading {
  constructor(el) {
    this.el = el;
  }
}

const reviewPage = new ReviewPage();
