/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');

        navToggle.setAttribute(
            'aria-expanded',
            String(open)
        );
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');

            navToggle.setAttribute(
                'aria-expanded',
                'false'
            );
        });
    });
}


/* =========================================================
   NEW MENU LOCATION SWITCHER
   Chicago / Alsip / Hickory Hills
========================================================= */

const locationButtons =
    document.querySelectorAll('.location-btn');

const menuLocations =
    document.querySelectorAll('.menu-location');

const categoryNav =
    document.querySelector('.sticky-menu .container');

const categorySets = {
    chicago: [
        ['chicken-section', 'Chicken'],
        ['flavors-section', 'Wing Flavors'],
        ['seafood-section', 'Seafood'],
        ['specials-section', 'Specials'],
        ['sandwiches-section', 'Sandwiches'],
        ['sides-section', 'Sides'],
        ['drinks-section', 'Drinks']
    ],

    alsip: [
        ['chicken-section', 'Chicken'],
        ['flavors-section', 'Wing Flavors'],
        ['seafood-section', 'Seafood'],
        ['specials-section', 'Specials'],
        ['sandwiches-section', 'Sandwiches'],
        ['sides-section', 'Sides'],
        ['drinks-section', 'Drinks']
    ],

    hickory: [
        ['rice-bowls-section', 'Rice Bowls'],
        ['philly-section', 'Philly Sandwiches'],
        ['fries-section', 'Famous Fries']
    ]
};

function buildCategoryNavigation(locationName) {
    if (!categoryNav) {
        return;
    }

    const categories = categorySets[locationName] || [];

    categoryNav.innerHTML = categories
        .map(([category, label]) => {
            return `
                <a href="#" data-category="${category}">
                    ${label}
                </a>
            `;
        })
        .join('');
}

function activateLocation(selectedMenu, shouldScroll = true) {
    locationButtons.forEach((button) => {
        const isActive =
            button.dataset.menu === selectedMenu;

        button.classList.toggle(
            'active',
            isActive
        );

        button.setAttribute(
            'aria-selected',
            String(isActive)
        );
    });

    menuLocations.forEach((menuLocation) => {
        const isActive =
            menuLocation.id === `${selectedMenu}-menu`;

        menuLocation.classList.toggle(
            'active',
            isActive
        );

        menuLocation.hidden = !isActive;
    });

    buildCategoryNavigation(selectedMenu);

    if (shouldScroll) {
        const menuSwitcher =
            document.querySelector('.menu-switcher');

        if (menuSwitcher) {
            menuSwitcher.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

locationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        activateLocation(button.dataset.menu);
    });
});

if (locationButtons.length && menuLocations.length) {
    const initiallyActiveButton =
        document.querySelector('.location-btn.active');

    activateLocation(
        initiallyActiveButton?.dataset.menu || 'chicago',
        false
    );
}


/* =========================================================
   STICKY CATEGORY NAVIGATION
========================================================= */

if (categoryNav) {
    categoryNav.addEventListener('click', (event) => {
        const link =
            event.target.closest('[data-category]');

        if (!link) {
            return;
        }

        event.preventDefault();

        const activeMenu =
            document.querySelector('.menu-location.active');

        if (!activeMenu) {
            return;
        }

        const category =
            activeMenu.querySelector(
                `#${link.dataset.category}`
            );

        if (!category) {
            return;
        }

        category.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


/* =========================================================
   OLD HOMEPAGE MENU TABS
   Kept so existing homepage sections still work
========================================================= */

const tabs =
    [...document.querySelectorAll('.location-tab')];

const panels =
    [...document.querySelectorAll('.menu-panel')];

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((currentTab) => {
            const isActive =
                currentTab === tab;

            currentTab.classList.toggle(
                'active',
                isActive
            );

            currentTab.setAttribute(
                'aria-selected',
                String(isActive)
            );
        });

        panels.forEach((panel) => {
            const isActive =
                panel.dataset.panel === tab.dataset.menu;

            panel.classList.toggle(
                'active',
                isActive
            );

            panel.hidden = !isActive;
        });
    });
});


/* =========================================================
   PRINTABLE MENU GALLERY DIALOG
   Kept so any existing gallery buttons still work
========================================================= */

const dialog =
    document.getElementById('menu-dialog');

const gallery =
    document.getElementById('menu-gallery');

const dialogTitle =
    document.getElementById('dialog-title');

const menus = {
    classic: {
        title: 'Chicago & Alsip Menu',
        images: [
            'assets/menu/chicago-alsip-1.jpg',
            'assets/menu/chicago-alsip-2.jpg'
        ]
    },

    hickory: {
        title: 'Hickory Hills Menu',
        images: [
            'assets/menu/hickory-1.jpg',
            'assets/menu/hickory-2.jpg'
        ]
    }
};

if (dialog && gallery && dialogTitle) {
    document
        .querySelectorAll('[data-open-gallery]')
        .forEach((button) => {
            button.addEventListener('click', () => {
                const menu =
                    menus[button.dataset.openGallery];

                if (!menu) {
                    return;
                }

                dialogTitle.textContent =
                    menu.title;

                gallery.innerHTML =
                    menu.images
                        .map((src, index) => {
                            return `
                                <img
                                    src="${src}"
                                    alt="${menu.title}, page ${index + 1}"
                                    loading="lazy"
                                >
                            `;
                        })
                        .join('');

                dialog.showModal();
            });
        });

    const closeButton =
        dialog.querySelector('.dialog-close');

    if (closeButton) {
        closeButton.addEventListener(
            'click',
            () => dialog.close()
        );
    }

    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'Escape' &&
            dialog.open
        ) {
            dialog.close();
        }
    });
}


/* =========================================================
   FOOTER YEAR
========================================================= */

document
    .querySelectorAll('[data-year]')
    .forEach((element) => {
        element.textContent =
            new Date().getFullYear();
    });