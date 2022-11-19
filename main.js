// Portfolio - mobile menu

function toggle() {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementsByClassName('close-icon')[0];
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
}

document.getElementById('hamburger-icon').addEventListener('click', toggle);
document.getElementsByClassName('close-icon')[0].addEventListener('click', toggle);
document.getElementsByClassName('mobile-menu')[0].addEventListener('click', toggle);

// Portfolio: details popup window

// Obj cards

const obj = [{
  name: 'Project Zeus',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio.svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
},
{
  name: 'Project Hades',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio (1).svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
},
{
  name: 'Project Hera',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio (2).svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
},
{
  name: 'Project Athena',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio (3).svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
},
{
  name: 'Project Poseidon',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio.svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
},
{
  name: 'Project Apollo',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio (1).svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
}];

// Work-section cards

const workSection = document.getElementById('Portfolio');
const grid = document.createElement('div');
grid.classList.add('work-grid');
workSection.appendChild(grid);

for (let i = 0; i < obj.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add(i);
  div.innerHTML = `
                      <div class="container spacing1">
                        <div class="item2 flex-column">
                            <img class="snapshoot" src="${obj[i].image}" alt="portfolio project image ${i + 1}">
                        </div>
                        <div class="item block-column">
                            <h3>${obj[i].name}</h3>
                            <ul class="skills spacing5">
                                <li class="skills1">${obj[i].technologies[0]}</li>
                                <li class="skills1">${obj[i].technologies[1]}</li>
                                <li class="skills1">${obj[i].technologies[2]}</li>
                                <li class="skills1">${obj[i].technologies[3]}</li>
                            </ul>
                            <a class="button-interact popping${i}">See Project</a>
                        </div>
                      </div>
                    `;
  grid.appendChild(div);
}

// Popup-window cards

for (let i = 0; i < obj.length; i += 1) {
  const xxx = `.popping${i}`;
  const open = document.querySelector(xxx);
  open.addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
                        <div class="container3 spacing1">
                          <button class="btn close" type="button"></button>
                          <img class="snapshoot2" src="${obj[i].image}" alt="portfolio project image ${i + 1}">
                          <div class="flex-row">
                              <h3 class="h3">${obj[i].name}</h3>
                              <div class="wp-div">
                                  <button class="button-interact antispacing1 display1"><a href="${obj[i].live}">See Live <i
                                              class="i-back1"></i></a></button>
                                  <button class="button-interact antispacing1 display1"><a href="${obj[i].source}">See Source <i
                                              class="i-back2"></i></a></button>
                              </div>
                          </div>
                          <ul class="skills-wp">
                              <li class="skills1">${obj[i].technologies[0]}</li>
                              <li class="skills1">${obj[i].technologies[1]}</li>
                              <li class="skills1">${obj[i].technologies[2]}</li>
                              <li class="skills1">${obj[i].technologies[3]}</li>
                          </ul>
                          <p class="p3">${obj[i].description}</p>
                          <div class="flex-space">
                              <button class="button-interact antispacing1 display2"><a href="${obj[i].live}">See Live <i
                                  class="i-back1"></i></a></button>
                              <button class="button-interact antispacing1 display2"><a href="${obj[i].source}">See Source <i
                                  class="i-back2"></i></a></button>
                          </div>
                        </div>
                    `;
    main.appendChild(popup);
    workSection.appendChild(main);

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      workSection.removeChild(main);
    });
  });
}

// Contact form validation

document.querySelector('.check').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const lower = email.toLowerCase();
  if ((email === lower) !== true) {
    e.preventDefault();
    error.innerHTML = '<div class="input-fields-error">Your email address needs to be lowercase!</div>';
  }
});

// Preserve data in the browser

document.addEventListener('change', () => {
  const nombre = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const data = {
    nombre: nombre.value,
    email: email.value,
    message: message.value,
  };
  const dataStr = JSON.stringify(data);

  localStorage.setItem('data', dataStr);
});

document.addEventListener('DOMContentLoaded', () => {
  const dataUnstr = JSON.parse(localStorage.getItem('data'));
  document.getElementById('name').value = dataUnstr.nombre;
  document.getElementById('email').value = dataUnstr.email;
  document.getElementById('message').value = dataUnstr.message;
});
