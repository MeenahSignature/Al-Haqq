// /////// open - close links on small screen //////
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // height of the links container and links
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ************ Fixed navbar ******************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  // fixed navbar
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  // ***** To show the scroll-btn (back - top scroll) ********
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ******** Footer date *******************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

/*
============================================
About Us
============================================
*/
// board members
const members = [
  {
    img: './images/Alh.Kabir.jpg',
    name: 'Alhaji Kabir Oladeji',
    position: 'board chair',
  },
  {
    img: './images/Alhaja.Mk.jpg',
    name: 'Alhaja mutiat makanjuola',
    position: 'vice board chair',
  },
  {
    img: './images/hammed-ayoade.png',
    name: 'hammed ayoade',
    position: 'secretary',
  },
  {
    // img: './images/Alh.Kabir.jpg',
    name: 'brother sulaiman familuyi',
    position: 'vice secretary',
  },
  {
    img: './images/Alh.Busari.png',
    name: 'Alhaji babatunde busari',
    position: 'social secretary',
  },
  {
    img: './images/Mrs.Halimat.png',
    name: 'mrs halimat sanni',
    position: 'vice social secretary',
  },
  {
    // img: './images/Alh.Kabir.jpg',
    name: 'brother tawhid ajobo',
    position: 'treasurer',
  },
  {
    // img: './images/Alh.Kabir.jpg',
    name: 'brother afeez ismail',
    position: 'financial secretary',
  },
  {
    img: './images/Alh.Tijani.png',
    name: 'Alhaji monsuru tijani',
    position: 'member at large',
  },
  {
    img: './images/Alh.Yunus.png',
    name: 'Alhaji yunus salami',
    position: 'member at large',
  },
];

const membersContainer = document.querySelector('.members-container');

// load members when window loads
window.addEventListener('DOMContentLoaded', function () {
  displayMembers(members);
});

// display members function
function displayMembers(memDiv) {
  let displayMember = memDiv.map(function (member) {
    return `<article class="members">
          <div class="img-container">
            <img src=${member.img} id="person-img" alt="" />
          </div>
          <h4 id="name">${member.name}</h4>
          <p id="position">${member.position}</p>
        </article>`;
  });
  displayMember = displayMember.join('');
  membersContainer.innerHTML = displayMember;
}
