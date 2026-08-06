/* =========================================================
   MOBILE NAVIGATION + FOOTER YEAR
========================================================= */

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = primaryNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            primaryNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});

/* =========================================================
   RENDERING
   no need to edit anything below this line.
========================================================= */

const menuContent = document.getElementById('menu-content');
const categoryLinks = document.getElementById('menu-category-links');
const locationButtons = document.querySelectorAll('.location-btn');

function renderItems(items = []) {
    return items
        .map((item) => `
            <div class="menu-item">
                <span>${item.name}</span>
                <span>${item.price}</span>
            </div>
        `)
        .join('');
}

function renderList(items = []) {
    if (!items.length) {
        return '';
    }

    return `
        <ul class="menu-list">
            ${items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

function renderTags(tags = []) {
    if (!tags.length) {
        return '';
    }

    return `
        <div class="tag-grid">
            ${tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
    `;
}

function renderGroup(group) {
    const groupClass = group.title
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    const groupedSections = (group.sections || [])
        .map((section) => `
            <div class="menu-group-section">

                ${
                    section.heading
                        ? `<h4 class="menu-card-subheading">
                            ${section.heading}
                           </h4>`
                        : ''
                }

                ${
                    section.note
                        ? `<p class="menu-note">
                            ${section.note}
                           </p>`
                        : ''
                }

                ${renderItems(section.items)}

                ${renderList(section.list)}

            </div>
        `)
        .join('');

    return `
        <article
            class="menu-category menu-category-${groupClass}"
        >

            <h3>${group.title}</h3>

            ${
                group.note
                    ? `<p class="menu-note">${group.note}</p>`
                    : ''
            }

            ${renderItems(group.items)}

            ${renderList(group.list)}

            ${groupedSections}

        </article>
    `;
}

function renderMenuPhotos(images = []) {
    return images
        .map((image) => `
            <figure class="menu-food-photo ${image.className || ''}">
                <figcaption>${image.label}</figcaption>

                <img
                    src="${image.src}"
                    alt="${image.alt || ''}"
                    loading="lazy"
                >
            </figure>
        `)
        .join('');
}

function renderPhotoSlider(images = [], rowClass = '') {
    if (!images.length) {
        return '';
    }

    const hasMultipleImages = images.length > 1;

    return `
        <div class="
            menu-photo-slider
            ${hasMultipleImages ? 'has-multiple-images' : 'has-single-image'}
        ">

            ${
                hasMultipleImages
                    ? `
                        <button
                            class="menu-photo-arrow menu-photo-arrow-left"
                            type="button"
                            aria-label="Previous image"
                            data-photo-direction="-1"
                        >
                            &#10094;
                        </button>
                    `
                    : ''
            }

            <div class="${rowClass} menu-photo-track">
                ${renderMenuPhotos(images)}
            </div>

            ${
                hasMultipleImages
                    ? `
                        <button
                            class="menu-photo-arrow menu-photo-arrow-right"
                            type="button"
                            aria-label="Next image"
                            data-photo-direction="1"
                        >
                            &#10095;
                        </button>
                    `
                    : ''
            }

        </div>
    `;
}

function renderSection(section) {
if (section.layout === 'feature') {
    return `
        <section
            id="${section.id}-section"
            class="menu-food-section"
        >

            <div class="menu-section-heading">
                <h2>${section.title}</h2>

                ${
                    section.description
                        ? `<p>${section.description}</p>`
                        : ''
                }
            </div>

            <div class="menu-card-grid menu-card-grid-three">

                ${(section.groups || [])
                    .map(renderGroup)
                    .join('')}

            </div>

        </section>
    `;
}

if (section.layout === 'combo-specials') {
    return `
        <section
            id="${section.id}-section"
            class="menu-food-section menu-flat-section combo-specials-section"
        >
            <div class="menu-flat-content">

                <h2>${section.title}</h2>

                ${section.note ? `<p class="menu-dinner-fries-note">${section.note}</p>` : ''}

<h3 class="combo-specials-heading">
    Combo Dinners
</h3>

<div class="combo-price-row">

    ${(section.comboPrices || [])
        .map((choice) => `
            <div class="combo-price-choice">
                <strong>${choice.title}</strong>
                <span>${choice.price}</span>
            </div>
        `)
        .join('')}

</div>

<div class="combo-shared-options">

    <h4>Available Choices</h4>

    <ul class="menu-list combo-specials-options">
        ${(section.comboOptions || [])
            .map((option) => `
                <li>${option}</li>
            `)
            .join('')}
    </ul>

</div>

${
    section.familySpecials?.length
        ? `
            <div class="combo-family-specials">

                <h3>
                    Family Specials
                </h3>

                ${renderItems(section.familySpecials)}

            </div>
        `
        : ''
}

            </div>
        </section>
    `;
}

if (section.layout === 'cards') {
    const showSpecialsSign = section.id === 'chicken';

    return `
        <section
            id="${section.id}-section"
            class="menu-food-section"
        >
            <div class="
                menu-section-heading
                ${showSpecialsSign ? 'menu-section-heading-with-specials' : ''}
            ">
 <div class="menu-section-heading-copy">
    <h2>${section.title}</h2>

    ${
        section.description
            ? `<p>${section.description}</p>`
            : ''
    }

    ${
        section.note
            ? `<p class="menu-note">${section.note}</p>`
            : ''
    }
</div>

                ${
                    showSpecialsSign
                        ? `
                            <a
                                class="menu-specials-sign"
                                href="locations.html"
                                aria-label="Call a location for today's specials"
                            >
<span class="menu-specials-top">
    Specials
</span>

<span class="menu-specials-main">
    Call for Today’s Specials
</span>

                            </a>
                        `
                        : ''
                }
            </div>

<div class="menu-card-grid menu-card-grid-three">
    ${(section.groups || []).map(renderGroup).join('')}
</div>

${renderPhotoSlider(section.images, 'menu-bottom-photo-row')}

${
    section.id === 'chicken'
        ? `
            <div class="menu-chicken-sauce-note">
                Chicken can be tossed in any sauce for an additional charge.
            </div>
        `
        : ''
}
        </section>
    `;
}

    if (section.layout === 'simple') {
        return `
            <section
                id="${section.id}-section"
                class="menu-food-section menu-simple-section"
            >
                <div class="menu-simple-list ${section.singleColumn ? 'menu-drinks-list' : ''}">
                    ${renderItems(section.items)}
                </div>
            </section>
        `;
    }

return `
    <section
        id="${section.id}-section"
        class="menu-food-section menu-flat-section"
    >
        <div class="menu-flat-content">
            <h2>${section.title}</h2>
            ${section.note ? `<p class="menu-note">${section.note}</p>` : ''}
            ${renderTags(section.tags)}
            ${
    section.groups
        ? section.groups.map(group => `
            <div class="menu-flat-group">

<h3>${group.title}</h3>

${
    group.note
        ? `<p class="menu-note">${group.note}</p>`
        : ''
}

${renderItems(group.items)}

${
    group.subheading
        ? `<h4>${group.subheading}</h4>`
        : ''
}

${renderTags(group.subTags)}

            </div>
        `).join('')
        : `
            ${renderItems(section.items)}
            ${renderList(section.list)}
            ${section.subheading ? `<h3>${section.subheading}</h3>` : ''}
            ${renderTags(section.subTags)}
            ${section.secondSubheading ? `<h3>${section.secondSubheading}</h3>` : ''}
            ${renderTags(section.secondSubTags)}
        `
}

${renderPhotoSlider(section.images, 'philly-photo-row')}

        </div>
    </section>
`;
}

function renderMenu(locationKey) {
    const heroTitle =
    document.getElementById('menu-hero-title');

const heroText =
    document.getElementById('menu-hero-text');

    const heroImage =
    document.getElementById('menu-location-photo');

    const location = menuData[locationKey];

    menuContent.className = `container menu-location-${locationKey}`;

    if (!location || !menuContent || !categoryLinks) {
        return;
    }
    if (heroTitle) {
    heroTitle.textContent =
        `${location.label} Menu`;
}

if (heroText) {
    heroText.textContent =
        `View the full ${location.label} menu.`;
}

if (heroImage) {

const photos = {

    chicago: {
        src: "assets/photos/chicago.png",
        alt: "Wingz It Iz Chicago location"
    },

    alsip: {
        src: "assets/photos/alsip.png",
        alt: "Wingz It Iz Alsip location"
    },

    hickory: {
        src: "assets/photos/hickory.png",
        alt: "Wingz It Iz Hickory Hills location"
    }

};

    heroImage.src = photos[locationKey].src;
    heroImage.alt = photos[locationKey].alt;
}

menuContent.innerHTML = `
    ${location.sections.map(renderSection).join('')}
`;

    categoryLinks.innerHTML = location.sections
        .map((section) => `
            <a href="#${section.id}-section">
                ${section.title}
            </a>
        `)
        .join('');
}

locationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const locationKey = button.dataset.location;

        selectedMenuLocation = locationKey;

        locationButtons.forEach((currentButton) => {
            const isActive = currentButton === button;

            currentButton.classList.toggle('active', isActive);
            currentButton.setAttribute('aria-selected', String(isActive));
        });

        renderMenu(locationKey);

    });
});

/* =========================================================
   TV MENU DISPLAY MODAL
========================================================= */

const tvMenuModal =
    document.getElementById('tv-menu-modal');

const openTvMenuButton =
    document.getElementById('open-tv-menu');

const tvMenuOptionsForm =
    document.getElementById('tv-menu-options-form');

const tvStaticPageOptions =
    document.getElementById('tv-static-page-options');

const tvStartPage =
    document.getElementById('tv-start-page');

let selectedMenuLocation = 'chicago';

function openTvMenuModal() {
    if (!tvMenuModal) {
        return;
    }

    tvMenuModal.hidden = false;
    document.body.classList.add('modal-open');

    const firstOption =
        tvMenuModal.querySelector('input[name="tv-mode"]');

    firstOption?.focus();
}

function closeTvMenuModal() {
    if (!tvMenuModal) {
        return;
    }

    tvMenuModal.hidden = true;
    document.body.classList.remove('modal-open');

    openTvMenuButton?.focus();
}

function updateStaticPageOptions() {
    const selectedMode =
        document.querySelector(
            'input[name="tv-mode"]:checked'
        )?.value;

    if (tvStaticPageOptions) {
        tvStaticPageOptions.hidden =
            selectedMode !== 'static';
    }
}

openTvMenuButton?.addEventListener(
    'click',
    openTvMenuModal
);

document
    .querySelectorAll('[data-close-tv-modal]')
    .forEach((button) => {
        button.addEventListener(
            'click',
            closeTvMenuModal
        );
    });

document
    .querySelectorAll('input[name="tv-mode"]')

    .forEach((input) => {
        input.addEventListener(
            'change',
            updateStaticPageOptions
        );
    });

tvMenuOptionsForm?.addEventListener(
    'submit',
    (event) => {
        event.preventDefault();

        const mode =
            document.querySelector(
                'input[name="tv-mode"]:checked'
            )?.value || 'auto';

        const page =
            mode === 'static'
                ? tvStartPage?.value || '1'
                : '1';

const tvMenuUrl =
    `tv-menu.html?location=${selectedMenuLocation}` +
    `&mode=${mode}` +
    `&pages=3` +
    `&page=${page}`;

        window.open(
            tvMenuUrl,
            '_blank',
            'noopener'
        );

        closeTvMenuModal();
    }
);

document.addEventListener(
    'keydown',
    (event) => {
        if (
            event.key === 'Escape' &&
            tvMenuModal &&
            !tvMenuModal.hidden
        ) {
            closeTvMenuModal();
        }
    }
);

updateStaticPageOptions();

/* =========================================================
   MOBILE MENU PHOTO SLIDERS
========================================================= */

menuContent.addEventListener('click', (event) => {
    const arrow = event.target.closest('.menu-photo-arrow');

    if (!arrow) {
        return;
    }

    const slider = arrow.closest('.menu-photo-slider');
    const track = slider?.querySelector('.menu-photo-track');

    if (!track) {
        return;
    }

    const direction = Number(arrow.dataset.photoDirection || 1);

const currentSlide = Math.round(
    track.scrollLeft / track.clientWidth
);

const slideCount =
    track.querySelectorAll('.menu-food-photo').length;

const nextSlide = Math.min(
    Math.max(currentSlide + direction, 0),
    slideCount - 1
);

track.scrollTo({
    left: nextSlide * track.clientWidth,
    behavior: 'smooth'
});

});

renderMenu('chicago');