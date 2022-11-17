/* Portfolio - mobile menu */

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

/* Portfolio: details popup window */

const obj = [{
  name: 'Keeping track of hundreds of components',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: ['images/SVG/Snapshoot Portfolio.svg'],
  technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  live: 'https://hunterx-7.github.io/Portfolio/',
  source: 'https://github.com/HunterX-7/Portfolio',
  projects: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
  pjbg: ['pjbg1', 'pjbg2', 'pjbg3', 'pjbg4', 'pjbg5', 'pjbg6']
}]
