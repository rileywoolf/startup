(async () => {
  let authenticated = false;
  const username = localStorage.getItem("userName");
  if (username) {
    const nameEl = document.querySelector("#name");
    nameEl.value = username;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;
  }

  if (authenticated) {
    document.querySelector("#user").textContent = username;
    setDisplay('loginControls', 'none');
    setDisplay('authedControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('authedControls', 'none');
  }
}) ();

async function login() {
  loginOrRegister(`/api/auth/login`);
}

async function register() {
  loginOrRegister(`/api/auth/register`);
}

async function loginOrRegister(endpoint) {
  const username = document.querySelector("#name")?.value;
  const password = document.querySelector("#password")?.value;
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify( { username: username, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', username);
    window.location.href = 'reviews.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
  // See if we have a user with the given username.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const controlEl = document.querySelector(`#${controlId}`);
  if (controlEl) {
    controlEl.style.display = display;
  }
}