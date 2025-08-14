'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}


// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Contact Name Animation
const myName = document.getElementById("my-name");
        myName.innerHTML = "Dulpan Adi Saragih";
        const droppingText = document.getElementById("dropping-texts");
        droppingText.classList.remove("lv-drop");
        const moreBtn = document.querySelectorAll(".info_more-btn");
        moreBtn.forEach((btn) => {
          if (btn.classList.contains("lv-btn")) {
            btn.classList.remove("lv-btn");
          }
        });

        
// Icon Image
document.querySelectorAll('.timeline-item').forEach(item => {
  const iconPath = item.getAttribute('data-icon');
  item.style.setProperty('--icon-image', `url(${iconPath})`);
});

// Lightbox Certificate
document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('lightbox-img').src = this.src;
    document.getElementById('lightbox-caption').innerText = this.getAttribute('data-title') || this.alt || '';
    document.getElementById('lightbox-certificate').style.display = 'flex';
  });
});
document.getElementById('lightbox-close').onclick = function() {
  document.getElementById('lightbox-certificate').style.display = 'none';
};
document.getElementById('lightbox-certificate').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};


// ...existing code...

const certLinks = Array.from(document.querySelectorAll('.project-list .lightbox-trigger'));
const certImgs = certLinks.map(link => link.querySelector('img'));
let currentIndex = 0;

// Untuk menyimpan status klik (khusus mobile)
let lastClicked = null;
let lastClickTime = 0;

function showLightbox(idx) {
  currentIndex = idx;
  const img = certImgs[idx];
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-title').innerText = img.getAttribute('data-title') || img.alt || '';
  document.getElementById('lightbox-download').onclick = function() {
    const a = document.createElement('a');
    a.href = img.src;
    a.download = img.getAttribute('data-title') || img.alt || 'certificate.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  document.getElementById('lightbox-certificate').style.display = 'flex';
}

certLinks.forEach((link, idx) => {
  link.style.cursor = 'zoom-in';
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Jika di mobile (≤600px), pakai 2x klik
    if (window.innerWidth <= 600) {
      const now = Date.now();
      if (lastClicked !== link || now - lastClickTime > 1000) {
        lastClicked = link;
        lastClickTime = now;
        link.querySelector('.project-item-icon-box').classList.add('force-hover');
        setTimeout(() => {
          link.querySelector('.project-item-icon-box').classList.remove('force-hover');
        }, 800);
        return;
      }
      // Klik kedua dalam 1 detik, buka lightbox
      showLightbox(idx);
      lastClicked = null;
      lastClickTime = 0;
    } else {
      // Desktop: langsung buka lightbox
      showLightbox(idx);
    }
  });
});

document.getElementById('lightbox-close').onclick = function() {
  document.getElementById('lightbox-certificate').style.display = 'none';
};
document.getElementById('lightbox-certificate').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};
document.getElementById('lightbox-prev').onclick = function(e) {
  e.stopPropagation();
  showLightbox((currentIndex - 1 + certImgs.length) % certImgs.length);
};
document.getElementById('lightbox-next').onclick = function(e) {
  e.stopPropagation();
  showLightbox((currentIndex + 1) % certImgs.length);
};
// ...existing code...

// Tutup popup jika tombol close diklik
document.querySelectorAll('.pop-close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // Hilangkan hash di URL
    history.pushState("", document.title, window.location.pathname + window.location.search);
    // Paksa sembunyikan popup
    document.querySelectorAll('.pop-window').forEach(function(pop) {
      pop.style.display = 'none';
    });
  });
});

// (Opsional) Tutup popup jika klik di luar pop-content
document.querySelectorAll('.pop-window').forEach(function(pop) {
  pop.addEventListener('click', function(e) {
    if (e.target === pop) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      pop.style.display = 'none';
    }
  });
});

// Tampilkan popup jika hash sesuai
window.addEventListener('hashchange', function() {
  document.querySelectorAll('.pop-window').forEach(function(pop) {
    if (window.location.hash === '#' + pop.id) {
      pop.style.display = 'flex';
    } else {
      pop.style.display = 'none';
    }
  });
});

// Inisialisasi saat load
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pop-window').forEach(function(pop) {
    if (window.location.hash === '#' + pop.id) {
      pop.style.display = 'flex';
    } else {
      pop.style.display = 'none';
    }
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  var formData = {
    fullname: form.fullname.value,
    email: form.email.value,
    message: form.message.value
  };
  var status = document.getElementById('form-status');
  status.innerText = "Sending...";
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(r => r.json())
  .then(res => {
    if(res.success) {
      status.innerText = "Pesan berhasil dikirim!";
      form.reset();
    } else {
      status.innerText = "Gagal mengirim pesan: " + res.message;
    }
  })
  .catch(() => {
    status.innerText = "Terjadi kesalahan. Silakan coba lagi.";
  });
});
