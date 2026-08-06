/* =========================================================
   WINGZ IT IZ DIGITAL TV MENU
========================================================= */

'use strict';

/* =========================================================
   TV PAGE ORGANIZATION

   These values only determine which menu sections appear
   together. All names, items and prices still come from
   menu-data.js.
========================================================= */

const tvLayouts = {
    chicago: {
        3: [
{
    density: 'compact',
    flow: 'horizontal-flow',
    rows: [
        {
            sections: ['chicken']
        },
        {
            sections: ['flavors'],
            fullWidth: true
        }
    ]
},
{
    density: 'compact',
    flow: 'page-two-bands',
    rows: [
        {
            sections: ['seafood'],
            area: 'seafood'
        },
        {
            sections: ['specials'],
            area: 'specials'
        }
    ]
},
{
    density: 'roomy',
    flow: 'page-three-bands',
    rows: [
        {
            sections: ['sides'],
            area: 'sides'
        },
        {
            sections: ['mini-meals'],
            area: 'mini-meals'
        }
    ]
}
        ],

        2: [
            {
                density: 'compact',
                columns: [
                    ['chicken'],
                    ['flavors', 'mini-meals']
                ]
            },
            {
                density: 'compact',
                columns: [
                    ['seafood'],
                    ['specials'],
                    ['sides', 'drinks']
                ]
            }
        ]
    },

    alsip: {
        3: [
{
    density: 'compact',
    flow: 'horizontal-flow',
    rows: [
        {
            sections: ['chicken']
        },
        {
            sections: ['flavors'],
            fullWidth: true
        }
    ]
},
{
    density: 'compact',
    flow: 'page-two-bands',
    rows: [
        {
            sections: ['seafood'],
            area: 'seafood'
        },
        {
            sections: ['specials'],
            area: 'specials'
        }
    ]
},
{
    density: 'roomy',
    flow: 'page-three-bands',
    rows: [
        {
            sections: ['sides'],
            area: 'sides'
        },
        {
            sections: ['mini-meals'],
            area: 'mini-meals'
        }
    ]
}
        ],

        2: [
            {
                density: 'compact',
                columns: [
                    ['chicken'],
                    ['flavors', 'mini-meals']
                ]
            },
            {
                density: 'compact',
                columns: [
                    ['seafood'],
                    ['specials'],
                    ['sides', 'drinks']
                ]
            }
        ]
    },

    hickory: {
        3: [
{
    density: 'compact',
    flow: 'horizontal-flow',
    rows: [
        {
            sections: ['chicken']
        },
        {
            sections: ['flavors'],
            fullWidth: true
        }
    ]
},
{
    density: 'compact',
    flow: 'page-two-boxes',
    rows: [
        {
            sections: ['philly', 'philly-wraps'],
            area: 'philly'
        },
        {
            sections: ['seafood'],
            area: 'seafood'
        },
        {
            sections: ['combos'],
            area: 'combos'
        }
    ]
},
{
    density: 'compact',
    columnWidths: [
        1.4,
        1.1,
        1.15,
        1.45
    ],
    columns: [
        ['sandwiches'],
        ['nachos', 'rice-bowls'],
        ['fries', 'hot-dogs'],
        [
            'sides',
            'chopped-cheese',
            'salads',
            'drinks'
        ]
    ]
}
        ],

        2: [
            {
                density: 'compact',
                columns: [
                    ['chicken'],
                    ['flavors', 'combos'],
                    ['seafood']
                ]
            },
            {
                density: 'ultra-compact',
                columns: [
                    ['philly', 'rice-bowls'],
                    ['sandwiches', 'salads'],
                    ['chopped-cheese', 'nachos'],
                    ['fries', 'hot-dogs'],
                    ['sides', 'drinks']
                ]
            }
        ]
    }
};

/* =========================================================
   ELEMENTS
========================================================= */

const tvBoard = document.querySelector('.tv-board');
const tvPage = document.getElementById('tv-page');
const tvLocationTitle = document.getElementById('tv-location-title');
const tvPageNumber = document.getElementById('tv-page-number');
const tvModeLabel = document.getElementById('tv-mode-label');
const tvProgress = document.getElementById('tv-progress');
const tvError = document.getElementById('tv-error');

/* =========================================================
   URL SETTINGS
========================================================= */

const urlParams = new URLSearchParams(window.location.search);

const requestedLocation =
    (urlParams.get('location') || 'chicago').toLowerCase();

const requestedMode =
    (urlParams.get('mode') || 'auto').toLowerCase();

const requestedPageCount =
    Number.parseInt(urlParams.get('pages') || '3', 10);

const requestedStaticPage =
    Number.parseInt(urlParams.get('page') || '1', 10);

const requestedSpeed =
    Number.parseInt(urlParams.get('speed') || '15', 10);

/* Only allow supported values */

const locationKey =
    Object.prototype.hasOwnProperty.call(menuData, requestedLocation)
        ? requestedLocation
        : 'chicago';

const displayMode =
    requestedMode === 'static'
        ? 'static'
        : 'auto';

const pageCount =
    requestedPageCount === 2
        ? 2
        : 3;

const rotationSeconds = Math.min(
    Math.max(requestedSpeed, 5),
    120
);

/* =========================================================
   STATE
========================================================= */

let currentPageIndex = 0;
let rotationTimer = null;

const locationData = menuData[locationKey];
const pageLayout = tvLayouts[locationKey]?.[pageCount];

/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function findSection(sectionId) {
    return locationData.sections.find(
        (section) => section.id === sectionId
    );
}

function countSectionContent(section) {
    let total = 0;

    total += section.items?.length || 0;
    total += section.list?.length || 0;
    total += section.tags?.length || 0;
    total += section.subTags?.length || 0;
    total += section.secondSubTags?.length || 0;
    total += section.familySpecials?.length || 0;
    total += section.comboPrices?.length || 0;
    total += section.comboOptions?.length || 0;
    total += section.images?.length || 0;

    (section.groups || []).forEach((group) => {
        total += 1;
        total += group.items?.length || 0;
        total += group.list?.length || 0;
        total += group.tags?.length || 0;
        total += group.subTags?.length || 0;

        (group.sections || []).forEach((groupSection) => {
            total += 1;
            total += groupSection.items?.length || 0;
            total += groupSection.list?.length || 0;
        });
    });

    return total;
}

function getPageDensity(sections) {
    const contentCount = sections.reduce(
        (total, section) => total + countSectionContent(section),
        0
    );

    if (contentCount >= 68 || sections.length >= 7) {
        return 'is-ultra-compact';
    }

    if (contentCount >= 42 || sections.length >= 4) {
        return 'is-compact';
    }

    return '';
}

function getColumnCount(sectionCount) {
    if (sectionCount <= 1) {
        return 1;
    }

    if (sectionCount === 2) {
        return 2;
    }

    if (sectionCount === 3) {
        return 3;
    }

    return 4;
}

/* =========================================================
   BASIC RENDERERS
========================================================= */

function renderItems(items = []) {
    if (!items.length) {
        return '';
    }

    return `
        <div class="tv-items">
            ${items.map((item) => {
                const name = escapeHtml(item.name);
                const price = escapeHtml(item.price);

                const longPrice =
                    String(item.price).length > 28
                        ? 'has-long-price'
                        : '';

                return `
                    <div class="tv-item ${longPrice}">
                        <span class="tv-item-name">
                            ${name}
                        </span>

                        <span class="tv-item-price">
                            ${price}
                        </span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderList(items = []) {
    if (!items.length) {
        return '';
    }

    return `
        <ul class="tv-list">
            ${items.map((item) => `
                <li>${escapeHtml(item)}</li>
            `).join('')}
        </ul>
    `;
}

function renderTags(tags = []) {
    if (!tags.length) {
        return '';
    }

    return `
        <div class="tv-tags">
            ${tags.map((tag) => `
                <span class="tv-tag">
                    ${escapeHtml(tag)}
                </span>
            `).join('')}
        </div>
    `;
}

function renderTvImages(images = []) {
    if (!images.length) {
        return '';
    }

    const visibleImages = images.slice(0, 3);

    return `
        <div class="tv-section-images">
            ${visibleImages.map((image) => `
                <figure class="tv-section-image">
                    <img
                        src="${escapeHtml(image.src)}"
                        alt="${escapeHtml(image.alt || '')}"
                    >

                    ${
                        image.label
                            ? `
                                <figcaption>
                                    ${escapeHtml(image.label)}
                                </figcaption>
                            `
                            : ''
                    }
                </figure>
            `).join('')}
        </div>
    `;
}

function renderNote(note = '') {
    if (!note) {
        return '';
    }

    return `
        <p class="tv-note">
            ${escapeHtml(note)}
        </p>
    `;
}

/* =========================================================
   GROUP RENDERER
========================================================= */

function renderGroup(group) {
    const groupSections = (group.sections || [])
        .map((section) => `
            <div class="tv-group-section">

                ${
                    section.heading
                        ? `
                            <h4 class="tv-subheading">
                                ${escapeHtml(section.heading)}
                            </h4>
                        `
                        : ''
                }

                ${renderNote(section.note)}
                ${renderItems(section.items)}
                ${renderList(section.list)}

            </div>
        `)
        .join('');

    return `
        <article class="tv-group">

            <h3 class="tv-group-title">
                ${escapeHtml(group.title)}
            </h3>

            ${renderNote(group.note)}
            ${renderItems(group.items)}
            ${renderList(group.list)}
            ${groupSections}

            ${
                group.subheading
                    ? `
                        <h4 class="tv-subheading">
                            ${escapeHtml(group.subheading)}
                        </h4>
                    `
                    : ''
            }

            ${renderTags(group.subTags)}

        </article>
    `;
}

/* =========================================================
   SECTION HEADER
========================================================= */

function renderSectionHeader(section) {
    return `
        <div class="tv-section-header">

            <h2 class="tv-section-title">
                ${escapeHtml(section.title)}
            </h2>

            ${
                section.description
                    ? `
                        <div class="tv-section-description">
                            ${section.description}
                        </div>
                    `
                    : ''
            }

            ${renderNote(section.note)}

        </div>
    `;
}

/* =========================================================
   COMBO RENDERER
========================================================= */

function renderComboSection(section) {
    const comboPrices = section.comboPrices?.length
        ? `
            <div class="tv-combo-price-row">
                ${section.comboPrices.map((choice) => `
                    <div class="tv-combo-price">
                        <strong>
                            ${escapeHtml(choice.title)}
                        </strong>

                        <span>
                            ${escapeHtml(choice.price)}
                        </span>
                    </div>
                `).join('')}
            </div>
        `
        : '';

const comboOptions = section.comboOptions?.length
    ? `
        <div class="tv-combo-options">
            ${renderList(section.comboOptions)}
        </div>
    `
    : '';

    const familySpecials = section.familySpecials?.length
        ? `
            <div class="tv-family-specials">

                <h3 class="tv-group-title">
                    Family Specials
                </h3>

                ${renderItems(section.familySpecials)}

            </div>
        `
        : '';

    return `
        <section class="tv-section tv-combo-section tv-section-${escapeHtml(section.id)}">

            ${renderSectionHeader(section)}
            ${comboPrices}
            ${comboOptions}
            ${familySpecials}
            ${renderTvImages(section.images)}

        </section>
    `;
}

/* =========================================================
   STANDARD SECTION RENDERER
========================================================= */

function renderStandardSection(section) {
    const groups = section.groups?.length
        ? `
            <div class="tv-groups">
                ${section.groups.map(renderGroup).join('')}
            </div>
        `
        : '';

    const regularContent = !section.groups?.length
        ? `
            ${renderItems(section.items)}
            ${renderList(section.list)}
            ${renderTags(section.tags)}

            ${
                section.subheading
                    ? `
                        <h3 class="tv-subheading">
                            ${escapeHtml(section.subheading)}
                        </h3>
                    `
                    : ''
            }

            ${renderTags(section.subTags)}

            ${
                section.secondSubheading
                    ? `
                        <h3 class="tv-subheading">
                            ${escapeHtml(section.secondSubheading)}
                        </h3>
                    `
                    : ''
            }

            ${renderTags(section.secondSubTags)}
        `
        : '';

return `
    <section class="tv-section tv-section-${escapeHtml(section.id)}">

        ${renderSectionHeader(section)}
        ${groups}
        ${regularContent}
        ${renderTvImages(section.images)}

    </section>
`;
}

function renderSection(section) {
    if (section.layout === 'combo-specials') {
        return renderComboSection(section);
    }

    return renderStandardSection(section);
}

/* =========================================================
   SCALE DIGITAL MENU TO ANY SCREEN
========================================================= */

function scaleTvMenu() {
    const designWidth = 1920;
    const designHeight = 1080;

    const availableWidth = window.innerWidth;
    const availableHeight = window.innerHeight;

    const widthScale = availableWidth / designWidth;
    const heightScale = availableHeight / designHeight;

    /*
       Use the smaller value so the complete menu always fits.
    */
    const scale = Math.min(widthScale, heightScale);

    document.documentElement.style.setProperty(
        '--tv-scale',
        String(scale)
    );
}

window.addEventListener('resize', scaleTvMenu);
window.addEventListener('orientationchange', scaleTvMenu);

scaleTvMenu();

/* =========================================================
   PAGE RENDERER
========================================================= */

function renderPage(pageIndex) {
    const pageConfig = pageLayout[pageIndex];

    if (!pageConfig) {
        tvPage.innerHTML = '';
        return;
    }

tvPage.classList.remove(
    'is-roomy',
    'is-compact',
    'is-ultra-compact',
    'is-order-flow',
    'is-horizontal-flow',
    'is-page-two-bands',
    'is-page-two-boxes',
    'is-page-three-bands'
);

    const densityClass =
        pageConfig.density === 'ultra-compact'
            ? 'is-ultra-compact'
            : pageConfig.density === 'compact'
                ? 'is-compact'
                : 'is-roomy';

    tvPage.classList.add(densityClass);

    /*
       Page 1 ordering layout:
       Chicken first, then flavors underneath.
    */

if (
    (
pageConfig.flow === 'order-flow' ||
pageConfig.flow === 'horizontal-flow' ||
pageConfig.flow === 'page-two-layout' ||
pageConfig.flow === 'page-two-bands' ||
pageConfig.flow === 'page-two-boxes' ||
pageConfig.flow === 'page-three-bands'
    ) &&
    Array.isArray(pageConfig.rows)
) {
if (pageConfig.flow === 'horizontal-flow') {
    tvPage.classList.add('is-horizontal-flow');
} else if (pageConfig.flow === 'page-two-bands') {
    tvPage.classList.add('is-page-two-bands');
} else if (pageConfig.flow === 'page-two-boxes') {
    tvPage.classList.add('is-page-two-boxes');
} else if (pageConfig.flow === 'page-three-bands') {
    tvPage.classList.add('is-page-three-bands');
} else {
    tvPage.classList.add('is-order-flow');
}
        const renderedRows = pageConfig.rows
            .map((row) => {
                const sections = row.sections
                    .map(findSection)
                    .filter(Boolean);

                if (!sections.length) {
                    return '';
                }

                return `
<div
    class="
        tv-flow-row
        ${row.fullWidth ? 'is-full-width' : ''}
        ${row.area ? `tv-area-${row.area}` : ''}
    "
>
                        ${sections.map(renderSection).join('')}
                    </div>
                `;
            })
            .join('');

        tvPage.innerHTML = `
            <div class="tv-order-flow">
                ${renderedRows}
            </div>
        `;

        tvPageNumber.textContent =
            `Page ${pageIndex + 1} of ${pageLayout.length}`;

        return;
    }

    /*
       All other pages continue using the balanced
       column system.
    */

    if (!Array.isArray(pageConfig.columns)) {
        tvPage.innerHTML = '';
        return;
    }

    const renderedColumns = pageConfig.columns
        .map((sectionIds) => {
            const sections = sectionIds
                .map(findSection)
                .filter(Boolean);

            if (!sections.length) {
                return '';
            }

            const sectionSlots = sections
                .map((section) => {
                    const contentWeight = Math.max(
                        countSectionContent(section),
                        4
                    );

                    return `
                        <div
                            class="tv-section-slot"
                            style="--section-weight: ${contentWeight};"
                        >
                            ${renderSection(section)}
                        </div>
                    `;
                })
                .join('');

            return `
                <div class="tv-column">
                    ${sectionSlots}
                </div>
            `;
        })
        .join('');

const columnTemplate = pageConfig.columnWidths?.length
    ? pageConfig.columnWidths
        .map((width) => `minmax(0, ${width}fr)`)
        .join(' ')
    : `repeat(${pageConfig.columns.length}, minmax(0, 1fr))`;

tvPage.innerHTML = `
    <div
        class="tv-page-inner"
        style="--tv-column-template: ${columnTemplate};"
    >
    
            ${renderedColumns}
        </div>
    `;

    tvPageNumber.textContent =
        `Page ${pageIndex + 1} of ${pageLayout.length}`;
}

/* =========================================================
   PROGRESS BAR
========================================================= */

function resetProgressBar() {
    if (displayMode !== 'auto') {
        tvProgress.classList.remove('is-running');
        tvProgress.style.width = '100%';
        return;
    }

    tvProgress.classList.remove('is-running');

    /*
       Force the browser to recognize that the animation
       was removed before it is restarted.
    */
    void tvProgress.offsetWidth;

    tvProgress.style.animationDuration =
        `${rotationSeconds}s`;

    tvProgress.classList.add('is-running');
}

/* =========================================================
   PAGE CHANGES
========================================================= */

function showPage(pageIndex, animate = true) {
    const safePageIndex = Math.min(
        Math.max(pageIndex, 0),
        pageLayout.length - 1
    );

    currentPageIndex = safePageIndex;

    if (!animate) {
        renderPage(currentPageIndex);
        resetProgressBar();
        return;
    }

    tvPage.classList.add('is-changing');

    window.setTimeout(() => {
        renderPage(currentPageIndex);

        window.requestAnimationFrame(() => {
            tvPage.classList.remove('is-changing');
        });

        resetProgressBar();
    }, 300);
}

function showNextPage() {
    const nextPage =
        (currentPageIndex + 1) % pageLayout.length;

    showPage(nextPage);
}

/* =========================================================
   AUTOMATIC MODE
========================================================= */

function startAutomaticRotation() {
    stopAutomaticRotation();

    rotationTimer = window.setInterval(
        showNextPage,
        rotationSeconds * 1000
    );

    resetProgressBar();
}

function stopAutomaticRotation() {
    if (rotationTimer) {
        window.clearInterval(rotationTimer);
        rotationTimer = null;
    }
}

/* =========================================================
   KEYBOARD CONTROLS

   Right arrow / space = next page
   Left arrow = previous page
   F = fullscreen
========================================================= */

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();

        const nextPage =
            (currentPageIndex + 1) % pageLayout.length;

        showPage(nextPage);

        if (displayMode === 'auto') {
            startAutomaticRotation();
        }
    }

    if (event.key === 'ArrowLeft') {
        event.preventDefault();

        const previousPage =
            (
                currentPageIndex - 1 +
                pageLayout.length
            ) % pageLayout.length;

        showPage(previousPage);

        if (displayMode === 'auto') {
            startAutomaticRotation();
        }
    }

    if (event.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
            document.documentElement
                .requestFullscreen()
                .catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    }
});

/* =========================================================
   INITIALIZE
========================================================= */

function initializeTvMenu() {
    if (
        !locationData ||
        !Array.isArray(locationData.sections) ||
        !pageLayout
    ) {
        tvBoard.hidden = true;
        tvError.hidden = false;
        return;
    }

    document.title =
        `${locationData.label} Digital Menu | Wingz It Iz`;

    tvLocationTitle.textContent =
        `${locationData.label} Menu`;

    tvModeLabel.textContent =
        displayMode === 'static'
            ? 'Static Display'
            : `Automatic • ${rotationSeconds}s`;

    if (displayMode === 'static') {
        const staticPageIndex = Math.min(
            Math.max(requestedStaticPage - 1, 0),
            pageLayout.length - 1
        );

        showPage(staticPageIndex, false);
        return;
    }

    showPage(0, false);
    startAutomaticRotation();
}

initializeTvMenu();