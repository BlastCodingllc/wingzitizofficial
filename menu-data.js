/* =====================================================
   SHARED MENU PHOTOS
====================================================== */

const sharedChickenPhotos = [
    {
        className: 'menu-photo-mixed-chicken',
        label: 'Mixed Wingz, Legs & Thighs',
        src: 'assets/photos/menu/mixed-wingz-legs-thighs.png',
        alt: 'Mixed Wingz It Iz chicken wingz, legs, and thighs'
    },
    {
        className: 'menu-photo-tenders',
        label: 'Fresh Chicken Tenders',
        src: 'assets/photos/menu/chicken-tenders.png',
        alt: 'Wingz It Iz chicken tenders'
    },
    {
        className: 'menu-photo-party-wingz-sauced',
        label: 'Sauced Party Wingz',
        src: 'assets/photos/menu/party-wingz-sauced.png',
        alt: 'Sauced Wingz It Iz party wingz'
    }
];

const sharedSeafoodPhotos = [
    {
        className: 'menu-photo-regular-shrimp',
        label: 'Regular Shrimp & Fries',
        src: 'assets/photos/menu/regular-shrimp.png',
        alt: 'Wingz It Iz regular shrimp served with fries'
    },
    {
        className: 'menu-photo-catfish-fillets',
        label: 'Catfish Fillets & Fries',
        src: 'assets/photos/menu/catfish-fillets.png',
        alt: 'Wingz It Iz catfish fillets served with fries'
    },
    {
        className: 'menu-photo-catfish-nuggets',
        label: 'Catfish Nuggets & Fries',
        src: 'assets/photos/menu/catfish-nuggets.png',
        alt: 'Wingz It Iz catfish nuggets served with fries'
    }
];

const pizzaPuffPhotos = [
    {
        className: 'menu-photo-pizza-puff',
        label: 'Pizza Puffs & Fries',
        src: 'assets/photos/menu/pizza-puff.png',
        alt: 'Wingz It Iz pizza puffs served with fries'
    }
];

const hickoryNachoPhotos = [
    {
        className: 'menu-photo-nacho-supreme',
        label: 'Loaded Nacho Supreme',
        src: 'assets/photos/menu/nacho-supreme.png',
        alt: 'Wingz It Iz loaded nacho supreme'
    }
];

const hickoryHotDogPhotos = [
    {
        className: 'menu-photo-chicago-hot-dog',
        label: 'Chicago-Style Hot Dogs',
        src: 'assets/photos/menu/chicago-style-hot-dog.png',
        alt: 'Wingz It Iz Chicago-style hot dogs'
    }
];

const chicagoMenu = [

    /* =====================================================
       CHICKEN
    ====================================================== */

    {
        id: 'chicken',
        title: 'Chicken',
description: `
    Whole wingz, party wingz, legs, thighs, mixed chicken, and fresh chicken tenders.
    <span class="menu-highlight-option">
        Available breaded or unbreaded.
    </span>
    <span class="menu-dinner-fries-note">
        All dinner orders include fries.
    </span>
`,
        layout: 'cards',

        images: [

    ...sharedChickenPhotos
],

        groups: [



            /* PARTY WINGZ */

            {
                title: 'Party Wingz',
                note: 'Choose bone-in or boneless.',

                items: [
                    {
                        name: '10 Pieces — One Flavor',
                        price: 'Bone-In $11.99 / Boneless $8.99'
                    },
                    {
                        name: '20 Pieces — Two Flavors',
                        price: 'Bone-In $23.99 / Boneless $15.99'
                    },
                    {
                        name: '50 Pieces — Two Flavors',
                        price: 'Bone-In $49.99 / Boneless $40.99'
                    },
                    {
                        name: '100 Pieces — Four Flavors',
                        price: 'Bone-In $98.99 / Boneless $77.99'
                    }
                ]
            },

{
    title: 'Whole Wingz',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: '4 Pieces - One Flavor',
                    price: '$7.99'
                },
                {
                    name: '6 Pieces — Two Flavors',
                    price: '$11.99'
                },
                {
                    name: '8 Pieces — Two Flavors',
                    price: '$13.99'
                },
                {
                    name: '10 Pieces — Two Flavors',
                    price: '$15.99'
                }
            ]
        },

        {
            heading: 'Wingz Only',

            items: [
                {
                    name: '20 Pieces — Two Flavors',
                    price: '$27.99'
                },
                {
                    name: '30 Pieces — Two Flavors',
                    price: '$38.99'
                },
                {
                    name: '50 Pieces — Two Flavors',
                    price: '$67.99'
                },
                {
                    name: '75 Pieces — Three Flavors',
                    price: '$97.99'
                },
                {
                    name: '100 Pieces — Four Flavors',
                    price: '$125.99'
                }
            ]
        }
    ]
},

{
    title: 'Legs & Thighs',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: '3 Pieces — One Flavor',
                    price: '$5.99'
                },
                {
                    name: '5 Pieces — One Flavor',
                    price: '$6.99'
                }
            ]
        },

        {
            heading: 'Chicken Only',

            items: [
                {
                    name: '10 Pieces — One Flavor',
                    price: '$9.99'
                },
                {
                    name: '20 Pieces — Two Flavors',
                    price: '$19.99'
                },
                {
                    name: '50 Pieces — Three Flavors',
                    price: '$44.99'
                },
                {
                    name: '100 Pieces — Four Flavors',
                    price: '$86.99'
                }
            ]
        }
    ]
},

            /* MIXED CHICKEN */

            {
                title: 'Mixed Chicken',
                note: 'Wingz, legs, and thighs. Includes two flavors.',

                items: [
                    {
                        name: '20 Pieces',
                        price: '$23.99'
                    },
                    {
                        name: '30 Pieces',
                        price: '$29.99'
                    },
                    {
                        name: '50 Pieces',
                        price: '$51.99'
                    },
                    {
                        name: '100 Pieces',
                        price: '$95.99'
                    }
                ]
            },

            /* CHICKEN TENDERS */

            {
                title: 'Fresh Chicken Tenders',

                items: [
                    {
                        name: '3 Piece Dinner',
                        price: '$9.99'
                    },
                    {
                        name: '5 Piece Dinner',
                        price: '$11.99'
                    },
                    {
                        name: '10 Pieces — Two Flavors',
                        price: '$21.99'
                    },
                    {
                        name: '20 Pieces — Two Flavors',
                        price: '$35.99'
                    },
                    {
                        name: '50 Pieces — Two Flavors',
                        price: '$86.99'
                    },
                    {
                        name: '100 Pieces — Two Flavors',
                        price: '$172.99'
                    }
                ]
            }
        ]
    },


    /* =====================================================
       FLAVORS & SAUCES
    ====================================================== */

   {
    id: 'flavors',
    title: 'Wing Flavors & Sauces',
    layout: 'flat',

    groups: [

        {
            title: 'Seasoning Flavors',

            subTags: [
                'Original',
                'Famous Garlic',
                'Lemon Pepper',
                'Smoky BBQ',
                'Cajun Spicy 🌶️',
                'Smoky Chipotle 🌶️',
                'Jerk 🌶️',
                'Ginger',
                'Curry',
                'Nashville'
            ]
        },

        {
            title: 'Sauce Flavors',

            subTags: [
                'Hot Sauce 🌶️',
                'Ranch',
                'Cocktail',
                'Garlic Sauce',
                'Mild BBQ',
                'Jerk',
                'Honey Mustard',
                'Blue Cheese',
                'Mango Habanero'
            ]
        },

        {
            title: 'Extra Sauces',

            items: [
                {
                    name: 'Extra Sauce (2 oz)',
                    price: '$0.55'
                },
                {
                    name: 'Extra Sauce (8 oz)',
                    price: '$2.29'
                },
                {
                    name: '2 oz Cheese Sauce',
                    price: '$0.65'
                }
            ]
        }

    ]
},


    /* =====================================================
       SEAFOOD
    ====================================================== */

{
    id: 'seafood',
    title: 'Seafood',
    description:
        'Fish dinners, fish by the piece, shrimp, and catfish nuggets.',
    note: 'All dinner orders include signature fresh-cut fries.',
    layout: 'cards',

    images: [
    ...sharedSeafoodPhotos
],

    groups: [

    {
        title: 'Fish Dinners',

        items: [
            {
                name: 'Catfish Fillets',
                price: 'Small $9.99 / Large $11.99'
            },
            {
                name: 'Ocean Perch',
                price: 'Small $9.99 / Large $11.99'
            },
            {
                name: 'Jack Salmon',
                price: 'Small $8.99 / Large $10.99'
            },
            {
                name: 'Tilapia',
                price: 'Small $8.99 / Large $10.99'
            }
        ]
    },

    {
        title: 'Fish by the Piece',
        note: 'Choose up to two kinds: Catfish Fillet, Perch, Tilapia, or Jack Salmon.',

        items: [
            {
                name: '12 Pieces',
                price: '$32.99'
            },
            {
                name: '20 Pieces',
                price: '$46.99'
            },
            {
                name: '50 Pieces',
                price: '$109.99'
            }
        ]
    },

    {
        title: 'Jumbo Shrimp',

        sections: [
            {
                heading: 'Dinners',

                items: [
                    {
                        name: 'Small',
                        price: '$15.99'
                    },
                    {
                        name: 'Large',
                        price: '$19.99'
                    }
                ]
            },

            {
                heading: 'By the Piece',

                items: [
                    {
                        name: '10 Pieces',
                        price: '$15.99'
                    },
                    {
                        name: '20 Pieces',
                        price: '$29.99'
                    },
                    {
                        name: '50 Pieces',
                        price: '$75.99'
                    }
                ]
            }
        ]
    },

    {
        title: 'Other Shrimp',

        items: [
            {
                name: 'Regular Shrimp — Large',
                price: '$16.99'
            },
            {
                name: 'Popcorn Shrimp',
                price: '$7.99'
            }
        ]
    },

        {
        title: 'Catfish Nuggets',

        sections: [
            {
                heading: 'Dinner',

                items: [
                    {
                        name: 'Catfish Nuggets',
                        price: '$9.99'
                    }
                ]
            },

            {
                heading: 'Large Orders',

                items: [
                    {
                        name: 'Half Pan',
                        price: '$36.99'
                    }
                ]
            }
        ]
    }

]
    },


    /* =====================================================
       COMBO DINNERS & FAMILY SPECIALS
    ====================================================== */

{
    id: 'specials',
    title: 'Combos & Family Specials',
    layout: 'combo-specials',
    note: 'All combo dinners include fries.',

    comboPrices: [
        {
            title: 'Choose Any 2',
            price: '$13.99'
        },
        {
            title: 'Choose Any 3',
            price: '$16.99'
        }
    ],

    comboOptions: [
        '3 Pieces Wingz',
        '3 Pieces Legs & Thighs',
        '3 Pieces Chicken Tenders',
        '2 Pieces Catfish Fillet',
        '2 Pieces Tilapia',
        '2 Pieces Perch',
        '2 Pieces Jack Salmon',
        'Catfish Nuggets',
        '4 Pieces Jumbo Shrimp',
        '8 Pieces Regular Shrimp'
    ],

    familySpecials: [
        {
            name: '10 Wingz + 6 Fish + Fries',
            price: '$29.99'
        },
        {
            name: '25 Wingz + 10 Fish + Fries',
            price: '$51.99'
        },
        {
            name: '50 Wingz + 25 Fish + Fries',
            price: '$111.99'
        }
    ]
},


    /* =====================================================
       MINI MEALS & SANDWICHES
    ====================================================== */

{
    id: 'mini-meals',
    title: 'Mini Meals',

    description:
        'Pizza Puffs are served with fries.',

    layout: 'flat',

    images: [
        ...pizzaPuffPhotos
    ],

    items: [
        {
            name: 'Pizza Puff',
            price: '$4.99'
        },
        {
            name: '2 Pizza Puffs',
            price: '$6.99'
        },
        {
            name: 'Chicken Nuggets',
            price: '$4.99'
        },
        {
            name: 'Mozzarella Sticks',
            price: '$5.99'
        }
    ]
},


    /* =====================================================
       SIDE ORDERS
    ====================================================== */

{
    id: 'sides',
    title: 'Side Orders',
    layout: 'flat',

    items: [
        {
            name: 'Potato Wedges',
            price: 'Individual $2.99 / Box $6.49 / Family $11.99'
        },
        {
            name: 'Corn Nuggets',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Sliced Zucchini',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Mushrooms',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Okra',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Hush Puppies',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Onion Rings',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Macaroni Salad',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Coleslaw',
            price: 'Individual $1.99 / Box $9.99 / Family $16.99'
        }
    ]
},


    /* =====================================================
       DRINKS
    ====================================================== */

{
    id: 'drinks',
    title: 'Drinks',
    layout: 'flat',

    items: [
        {
            name: 'Can Soda',
            price: 'Ask In Store'
        },
        {
            name: 'Bottle Soda',
            price: 'Ask In Store'
        }
    ]
}
];

const alsipMenu = [

    /* =====================================================
       CHICKEN
    ====================================================== */

    {
        id: 'chicken',
        title: 'Chicken',
description: `
    Whole wingz, party wingz, legs, thighs, mixed chicken, and fresh chicken tenders.
    <span class="menu-highlight-option">
        Available breaded or unbreaded.
    </span>
    <span class="menu-dinner-fries-note">
        All dinner orders include fries.
    </span>
`,
        layout: 'cards',

        images: [

    ...sharedChickenPhotos
],

        groups: [



            /* PARTY WINGZ */

            {
                title: 'Party Wingz',
                note: 'Choose bone-in or boneless.',

                items: [
                    {
                        name: '10 Pieces — One Flavor',
                        price: 'Bone-In $11.99 / Boneless $8.99'
                    },
                    {
                        name: '20 Pieces — Two Flavors',
                        price: 'Bone-In $23.99 / Boneless $15.99'
                    },
                    {
                        name: '50 Pieces — Two Flavors',
                        price: 'Bone-In $49.99 / Boneless $40.99'
                    },
                    {
                        name: '100 Pieces — Four Flavors',
                        price: 'Bone-In $98.99 / Boneless $77.99'
                    }
                ]
            },

{
    title: 'Whole Wingz',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: '4 Pieces - One Flavor',
                    price: '$7.99'
                },
                {
                    name: '6 Pieces — Two Flavors',
                    price: '$11.99'
                },
                {
                    name: '8 Pieces — Two Flavors',
                    price: '$13.99'
                },
                {
                    name: '10 Pieces — Two Flavors',
                    price: '$15.99'
                }
            ]
        },

        {
            heading: 'Wingz Only',

            items: [
                {
                    name: '20 Pieces — Two Flavors',
                    price: '$27.99'
                },
                {
                    name: '30 Pieces — Two Flavors',
                    price: '$38.99'
                },
                {
                    name: '50 Pieces — Two Flavors',
                    price: '$67.99'
                },
                {
                    name: '75 Pieces — Three Flavors',
                    price: '$97.99'
                },
                {
                    name: '100 Pieces — Four Flavors',
                    price: '$125.99'
                }
            ]
        }
    ]
},

{
    title: 'Legs & Thighs',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: '3 Pieces — One Flavor',
                    price: '$5.99'
                },
                {
                    name: '5 Pieces — One Flavor',
                    price: '$6.99'
                }
            ]
        },

        {
            heading: 'Chicken Only',

            items: [
                {
                    name: '10 Pieces — One Flavor',
                    price: '$9.99'
                },
                {
                    name: '20 Pieces — Two Flavors',
                    price: '$19.99'
                },
                {
                    name: '50 Pieces — Three Flavors',
                    price: '$44.99'
                },
                {
                    name: '100 Pieces — Four Flavors',
                    price: '$86.99'
                }
            ]
        }
    ]
},

            /* MIXED CHICKEN */

            {
                title: 'Mixed Chicken',
                note: 'Wingz, legs, and thighs. Includes two flavors.',

                items: [
                    {
                        name: '20 Pieces',
                        price: '$23.99'
                    },
                    {
                        name: '30 Pieces',
                        price: '$29.99'
                    },
                    {
                        name: '50 Pieces',
                        price: '$51.99'
                    },
                    {
                        name: '100 Pieces',
                        price: '$95.99'
                    }
                ]
            },

            /* CHICKEN TENDERS */

            {
                title: 'Fresh Chicken Tenders',

                items: [
                    {
                        name: '3 Piece Dinner',
                        price: '$9.99'
                    },
                    {
                        name: '5 Piece Dinner',
                        price: '$11.99'
                    },
                    {
                        name: '10 Pieces — Two Flavors',
                        price: '$21.99'
                    },
                    {
                        name: '20 Pieces — Two Flavors',
                        price: '$35.99'
                    },
                    {
                        name: '50 Pieces — Two Flavors',
                        price: '$86.99'
                    },
                    {
                        name: '100 Pieces — Two Flavors',
                        price: '$172.99'
                    }
                ]
            }
        ]
    },


    /* =====================================================
       FLAVORS & SAUCES
    ====================================================== */

   {
    id: 'flavors',
    title: 'Wing Flavors & Sauces',
    layout: 'flat',

    groups: [

        {
            title: 'Seasoning Flavors',

            subTags: [
                'Original',
                'Famous Garlic',
                'Lemon Pepper',
                'Smoky BBQ',
                'Cajun Spicy 🌶️',
                'Smoky Chipotle 🌶️',
                'Jerk 🌶️',
                'Ginger',
                'Curry',
                'Nashville'
            ]
        },

        {
            title: 'Sauce Flavors',

            subTags: [
                'Hot Sauce 🌶️',
                'Ranch',
                'Cocktail',
                'Garlic Sauce',
                'Mild BBQ',
                'Jerk',
                'Honey Mustard',
                'Blue Cheese',
                'Mango Habanero'
            ]
        },

        {
            title: 'Extra Sauces',

            items: [
                {
                    name: 'Extra Sauce (2 oz)',
                    price: '$0.55'
                },
                {
                    name: 'Extra Sauce (8 oz)',
                    price: '$2.29'
                },
                {
                    name: '2 oz Cheese Sauce',
                    price: '$0.65'
                }
            ]
        }

    ]
},


    /* =====================================================
       SEAFOOD
    ====================================================== */

{
    id: 'seafood',
    title: 'Seafood',
    description:
        'Fish dinners, fish by the piece, shrimp, and catfish nuggets.',
    note: 'All dinner orders include signature fresh-cut fries.',
    layout: 'cards',

    images: [
    ...sharedSeafoodPhotos
],

    groups: [

    {
        title: 'Fish Dinners',

        items: [
            {
                name: 'Catfish Fillets',
                price: 'Small $9.99 / Large $11.99'
            },
            {
                name: 'Ocean Perch',
                price: 'Small $9.99 / Large $11.99'
            },
            {
                name: 'Jack Salmon',
                price: 'Small $8.99 / Large $10.99'
            },
            {
                name: 'Tilapia',
                price: 'Small $8.99 / Large $10.99'
            }
        ]
    },

    {
        title: 'Fish by the Piece',
        note: 'Choose up to two kinds: Catfish Fillet, Perch, Tilapia, or Jack Salmon.',

        items: [
            {
                name: '12 Pieces',
                price: '$32.99'
            },
            {
                name: '20 Pieces',
                price: '$46.99'
            },
            {
                name: '50 Pieces',
                price: '$109.99'
            }
        ]
    },

    {
        title: 'Jumbo Shrimp',

        sections: [
            {
                heading: 'Dinners',

                items: [
                    {
                        name: 'Small',
                        price: '$15.99'
                    },
                    {
                        name: 'Large',
                        price: '$19.99'
                    }
                ]
            },

            {
                heading: 'By the Piece',

                items: [
                    {
                        name: '10 Pieces',
                        price: '$15.99'
                    },
                    {
                        name: '20 Pieces',
                        price: '$29.99'
                    },
                    {
                        name: '50 Pieces',
                        price: '$75.99'
                    }
                ]
            }
        ]
    },

    {
        title: 'Other Shrimp',

        items: [
            {
                name: 'Regular Shrimp — Large',
                price: '$16.99'
            },
            {
                name: 'Popcorn Shrimp',
                price: '$7.99'
            }
        ]
    },

        {
        title: 'Catfish Nuggets',

        sections: [
            {
                heading: 'Dinner',

                items: [
                    {
                        name: 'Catfish Nuggets',
                        price: '$9.99'
                    }
                ]
            },

            {
                heading: 'Large Orders',

                items: [
                    {
                        name: 'Half Pan',
                        price: '$36.99'
                    }
                ]
            }
        ]
    }

]
    },


    /* =====================================================
       COMBO DINNERS & FAMILY SPECIALS
    ====================================================== */

{
    id: 'specials',
    title: 'Combos & Family Specials',
    layout: 'combo-specials',
    note: 'All combo dinners include fries.',

    comboPrices: [
        {
            title: 'Choose Any 2',
            price: '$13.99'
        },
        {
            title: 'Choose Any 3',
            price: '$16.99'
        }
    ],

    comboOptions: [
        '3 Pieces Wingz',
        '3 Pieces Legs & Thighs',
        '3 Pieces Chicken Tenders',
        '2 Pieces Catfish Fillet',
        '2 Pieces Tilapia',
        '2 Pieces Perch',
        '2 Pieces Jack Salmon',
        'Catfish Nuggets',
        '4 Pieces Jumbo Shrimp',
        '8 Pieces Regular Shrimp'
    ],

    familySpecials: [
        {
            name: '10 Wingz + 6 Fish + Fries',
            price: '$29.99'
        },
        {
            name: '25 Wingz + 10 Fish + Fries',
            price: '$51.99'
        },
        {
            name: '50 Wingz + 25 Fish + Fries',
            price: '$111.99'
        }
    ]
},

    /* =====================================================
       MINI MEALS & SANDWICHES
    ====================================================== */

{
    id: 'mini-meals',
    title: 'Mini Meals',

    description:
        'Pizza Puffs are served with fries.',

    layout: 'flat',

    images: [
        ...pizzaPuffPhotos
    ],

    items: [
        {
            name: 'Pizza Puff',
            price: '$4.99'
        },
        {
            name: '2 Pizza Puffs',
            price: '$6.99'
        },
        {
            name: 'Chicken Nuggets',
            price: '$4.99'
        },
        {
            name: 'Mozzarella Sticks',
            price: '$5.99'
        }
    ]
},


    /* =====================================================
       SIDE ORDERS
    ====================================================== */

{
    id: 'sides',
    title: 'Side Orders',
    layout: 'flat',

    items: [
        {
            name: 'Potato Wedges',
            price: 'Individual $2.99 / Box $6.49 / Family $11.99'
        },
        {
            name: 'Corn Nuggets',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Sliced Zucchini',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Mushrooms',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Okra',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Hush Puppies',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Onion Rings',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Macaroni Salad',
            price: 'Individual $4.49 / Box $9.99 / Family $16.99'
        },
        {
            name: 'Coleslaw',
            price: 'Individual $1.99 / Box $9.99 / Family $16.99'
        }
    ]
},


    /* =====================================================
       DRINKS
    ====================================================== */

{
    id: 'drinks',
    title: 'Drinks',
    layout: 'flat',

    items: [
        {
            name: 'Can Soda',
            price: 'Ask In Store'
        },
        {
            name: 'Bottle Soda',
            price: 'Ask In Store'
        }
    ]
}
];

const hickoryMenu = [

    /* =====================================================
       CHICKEN
    ====================================================== */

    {
        id: 'chicken',
        title: 'Chicken',
description: `
    Whole wingz, party wingz, legs, thighs, mixed chicken, and fresh chicken tenders.
    <span class="menu-highlight-option">
        Available breaded or unbreaded.
    </span>
    <span class="menu-dinner-fries-note">
        All dinner orders include fries.
    </span>
`,
        layout: 'cards',

        images: [
    ...sharedChickenPhotos
],

        groups: [
            {
                title: 'Chicken Tenders',

                items: [
                    {
                        name: '3 Pieces — Dinner',
                        price: '$9.99'
                    },
                    {
                        name: '6 Pieces — Dinner',
                        price: '$14.99'
                    },
                    {
                        name: '10 Pieces w/ Fries',
                        price: '$21.99'
                    },
                    {
                        name: '20 Pieces w/ Fries',
                        price: '$37.99'
                    },
                    {
                        name: '30 Pieces w/ Fries',
                        price: '$56.99'
                    },
                    {
                        name: '50 Pieces w/ Fries',
                        price: '$89.99'
                    },
                    {
                        name: '100 Pieces w/ Fries',
                        price: '$175.99'
                    }
                ]
            },

            {
                title: 'Chicken Wingz',

                items: [
                    {
                        name: '3 Pieces w/ Fries',
                        price: '$6.99'
                    },
                    {
                        name: '6 Pieces — Dinner',
                        price: '$11.99'
                    },
                    {
                        name: '10 Pieces — Dinner',
                        price: '$15.99'
                    },
                    {
                        name: '20 Pieces w/ Fries',
                        price: '$26.99'
                    },
                    {
                        name: '30 Pieces w/ Fries',
                        price: '$36.99'
                    },
                    {
                        name: '50 Pieces w/ Fries',
                        price: '$63.99'
                    },
                    {
                        name: '100 Pieces w/ Fries',
                        price: '$119.99'
                    }
                ]
            },

            {
                title: 'Legs & Thighs',

                items: [
                    {
                        name: '3 Pieces — Dinner',
                        price: '$5.99'
                    },
                    {
                        name: '6 Pieces — Dinner',
                        price: '$8.99'
                    },
                    {
                        name: '10 Pieces w/ Fries',
                        price: '$11.99'
                    },
                    {
                        name: '20 Pieces w/ Fries',
                        price: '$19.99'
                    },
                    {
                        name: '30 Pieces w/ Fries',
                        price: '$27.99'
                    },
                    {
                        name: '50 Pieces w/ Fries',
                        price: '$43.99'
                    },
                    {
                        name: '100 Pieces w/ Fries',
                        price: '$86.99'
                    }
                ]
            },

            {
                title: 'Party Wingz',
                 note: 'Choose bone-in or boneless.',

                items: [
                    {
                        name: '6 Pieces w/ Fries',
                        price: '$9.99'
                    },
                    {
                        name: '10 Pieces w/ Fries',
                        price: '$12.99'
                    },
                    {
                        name: '20 Pieces w/ Fries',
                        price: '$19.99'
                    },
                    {
                        name: '30 Pieces w/ Fries',
                        price: '$29.99'
                    },
                    {
                        name: '50 Pieces w/ Fries',
                        price: '$48.99'
                    },
                    {
                        name: '100 Pieces w/ Fries',
                        price: '$96.99'
                    }
                ]
            },

            {
                title: 'Mixed Chicken',
                note: 'Wingz, legs, and thighs.',

                items: [
                    {
                        name: '6 Pieces w/ Fries',
                        price: '$9.99'
                    },
                    {
                        name: '10 Pieces w/ Fries',
                        price: '$14.99'
                    },
                    {
                        name: '20 Pieces w/ Fries',
                        price: '$23.99'
                    },
                    {
                        name: '30 Pieces w/ Fries',
                        price: '$32.99'
                    },
                    {
                        name: '50 Pieces w/ Fries',
                        price: '$49.99'
                    },
                    {
                        name: '100 Pieces w/ Fries',
                        price: '$99.99'
                    }
                ]
            }
        ]
    },

     /* =====================================================
       FLAVORS & DIPPING SAUCES
    ====================================================== */

   {
    id: 'flavors',
    title: 'Wing Flavors & Sauces',
    layout: 'flat',

    groups: [

        {
            title: 'Seasoning Flavors',

            subTags: [
                'Original',
                'Famous Garlic',
                'Lemon Pepper',
                'Smoky BBQ',
                'Cajun Spicy 🌶️',
                'Smoky Chipotle 🌶️',
                'Jerk 🌶️',
                'Ginger',
                'Curry',
                'Nashville'
            ]
        },

        {
            title: 'Sauce Flavors',

            subTags: [
                'Hot Sauce 🌶️',
                'Ranch',
                'Cocktail',
                'Garlic Sauce',
                'Mild BBQ',
                'Jerk',
                'Honey Mustard',
                'Blue Cheese',
                'Mango Habanero'
            ]
        },

        {
            title: 'Extra Sauces',

            items: [
                {
                    name: 'Extra Sauce (2 oz)',
                    price: '$0.55'
                },
                {
                    name: 'Extra Sauce (8 oz)',
                    price: '$2.29'
                },
                {
                    name: '2 oz Cheese Sauce',
                    price: '$0.65'
                }
            ]
        }

    ]
},

    /* =====================================================
       COMBO DINNERS
    ====================================================== */

{
    id: 'combos',
    title: 'Combo Dinner Mix',
    layout: 'combo-specials',
    note: 'All combo dinners include fries.',

    comboPrices: [
        {
            title: 'Choose Any 2',
            price: '$13.99'
        },
        {
            title: 'Choose Any 3',
            price: '$16.99'
        }
    ],

    comboOptions: [
        '3 Pieces Wingz',
        '3 Pieces Legs & Thighs',
        '3 Pieces Chicken Tenders',
        '2 Pieces Catfish Fillet',
        '8 Pieces Regular Shrimp',
        '2 Pieces Perch',
        'Catfish Nuggets',
        '3 Pieces Jumbo Shrimp'
    ],

    familySpecials: []
},


    /* =====================================================
       SEAFOOD
    ====================================================== */

{
    id: 'seafood',
    title: 'Seafood',
    description:
        'Fish dinners, shrimp dinners, fish by the piece, and catfish nuggets.',
    note: `
        All dinner orders include fries.
        Extra pieces of fish or shrimp are available for an additional charge.
    `,
    layout: 'cards',

        images: [
    ...sharedSeafoodPhotos
],

        groups: [
     {
    title: 'Catfish Fillet',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: 'Small — 2 Pieces',
                    price: '$9.99'
                },
                {
                    name: 'Large — 3 Pieces',
                    price: '$11.99'
                }
            ]
        },

        {
            heading: 'By the Piece',

            items: [
                {
                    name: '12 Pieces',
                    price: '$32.99'
                },
                {
                    name: '20 Pieces',
                    price: '$49.99'
                },
                {
                    name: '50 Pieces',
                    price: '$109.99'
                }
            ]
        }
    ]
},

 {
    title: 'Ocean Perch',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: 'Small — 2 Pieces',
                    price: '$9.99'
                },
                {
                    name: 'Large — 3 Pieces',
                    price: '$11.99'
                }
            ]
        },

        {
            heading: 'By the Piece',

            items: [
                {
                    name: '12 Pieces',
                    price: '$32.99'
                },
                {
                    name: '20 Pieces',
                    price: '$49.99'
                },
                {
                    name: '50 Pieces',
                    price: '$109.99'
                }
            ]
        }
    ]
},

{
    title: 'Jumbo Shrimp',

    sections: [
        {
            heading: 'Dinners',

            items: [
                {
                    name: 'Small — 6 Pieces',
                    price: '$13.99'
                },
                {
                    name: 'Large — 11 Pieces',
                    price: '$19.99'
                }
            ]
        },

        {
            heading: 'By the Piece',

            items: [
                {
                    name: '10 Pieces',
                    price: '$15.99'
                },
                {
                    name: '20 Pieces',
                    price: '$29.99'
                },
                {
                    name: '50 Pieces',
                    price: '$75.99'
                }
            ]
        }
    ]
},


            {
                title: 'Catfish Nuggets',

                items: [
                    {
                        name: 'Large — 13 Piece Dinner',
                        price: '$9.99'
                    },
                    {
                        name: 'Half Pan',
                        price: '$37.99'
                    }
                ]
            },

            {
                title: 'Regular Shrimp',

                items: [
                    {
                        name: 'Large — 23 Piece Dinner',
                        price: '$15.99'
                    }
                ]
            }
        ]
    },


    /* =====================================================
       PHILLY SANDWICHES
    ====================================================== */

    {
    id: 'philly',
    title: 'Philly Sandwiches',
    layout: 'flat',

    note: 'All Philly sandwiches come with fries.',

images: [
    {
        className: 'menu-photo-philly-loaded',
        label: 'Loaded Philly Sandwiches',
        src: 'assets/photos/menu/philly-sandwich.png',
        alt: 'Loaded Wingz It Iz Philly sandwiches'
    },
    {
        className: 'menu-photo-philly-steak',
        label: 'Classic Philly Steak & Fries',
        src: 'assets/photos/menu/philly-steak.png',
        alt: 'Wingz It Iz Philly steak sandwiches with fries'
    },
    {
        className: 'menu-photo-philly-chicken',
        label: 'Chicken Philly',
        src: 'assets/photos/menu/chicken-philly.png',
        alt: 'Wingz It Iz Chicken Philly sandwich'
    }
],

    items: [
            {
                name: 'Steak',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Chicken',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Buffalo Chicken',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Chicken Parmesan',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Steak Italian',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Mix — Steak & Chicken',
                price: '6" $9.99 / 12" $15.99'
            },
            {
                name: 'Chicken Teriyaki',
                price: '6" $9.99 / 12" $15.99'
            }
        ],

        subheading: 'Optional Toppings',

        subTags: [
            'Grilled Onions',
            'Green Peppers',
            'Mayo',
            'Mozzarella Cheese',
            'Nacho Cheese',
            'Lettuce',
            'Tomato',
            'Pickles +$0.50',
            'Banana Peppers +$0.50'
        ]
    },

    /*====================================================
    Philly Wraps
    =====================================================*/

{
    id: 'philly-wraps',
    title: 'Philly Wraps',
    layout: 'flat',

    note: 'All Philly wraps come with fries.',

    images: [
        {
            className: 'menu-photo-wrap-halves',
            label: 'Loaded Philly Wrap',
            src: 'assets/photos/menu/wrap-halves.png',
            alt: 'Loaded Philly wrap'
        },
        {
            className: 'menu-photo-wrap-deep-fried-philly',
            label: 'Deep Fried Philly Wrap',
            src: 'assets/photos/menu/wrap-deep-fried-philly.png',
            alt: 'Deep fried Philly wrap'
        },
        {
            className: 'menu-photo-wrap-fries menu-photo-large',
            label: 'Philly Wrap & Fries',
            src: 'assets/photos/menu/fried-philly-wrap.png',
            alt: 'Philly wrap served with fries'
        }
    ],

    items: [
        {
            name: 'Steak',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Chicken',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Buffalo Chicken',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Chicken Parmesan',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Steak Italian',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Mix — Steak & Chicken',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        },
        {
            name: 'Chicken Teriyaki',
            price: '1 Wrap $9.99 / 2 Wraps $15.99'
        }
    ],

    subheading: 'Optional Toppings',

    subTags: [
        'Grilled Onions',
        'Green Peppers',
        'Mayo',
        'Mozzarella Cheese',
        'Nacho Cheese',
        'Lettuce',
        'Tomato',
        'Pickles +$0.50',
        'Banana Peppers +$0.50'
    ]
},


    /* =====================================================
       RICE BOWLS
    ====================================================== */

 {
    id: 'rice-bowls',
    title: 'Rice Bowls',
    layout: 'flat',

    images: [
        {
            className: 'menu-photo-rice-cheese',
            label: 'Cheesy Rice Bowl',
            src: 'assets/photos/menu/rice-bowl-cheese.png',
            alt: 'Wingz It Iz cheesy rice bowl'
        },
                {
            className: 'menu-photo-rice-base',
            label: 'Classic Rice Bowl',
            src: 'assets/photos/menu/rice-bowl-base.png',
            alt: 'Wingz It Iz classic rice bowl'
        },
        {
            className: 'menu-photo-rice-chicken',
            label: 'Chicken Rice Bowl',
            src: 'assets/photos/menu/chicken-rice-bowl.png',
            alt: 'Wingz It Iz chicken rice bowl'
        }
    ],

    items: [
            {
                name: 'Rice Bowl',
                price: '$10.99'
            }
        ],

subheading: 'Protein Choices',

subTags: [
    'Italian Beef',
    'Gyro',
    'Mix',
    'Steak',
    'Chicken',
    'Buffalo Chicken',
    'Teriyaki Chicken'
],

secondSubheading: 'Optional Toppings',

secondSubTags: [
    'Cheese',
    'Hot Peppers',
    'Green Peppers',
    'Onion',
    'Gyro Sauce',
    'Tomato',
    'Lettuce',
    'Grilled Onions',
    'Mayo',
    'Mozzarella Cheese',
    'Nacho Cheese',
    'Pickles +$0.50',
    'Banana Peppers +$0.50'
]
    },


/* =====================================================
   SANDWICHES & BURGERS
====================================================== */

{
    id: 'sandwiches',
    title: 'Sandwiches & Burgers',
    layout: 'cards',

    images: [
        {
            className: 'menu-photo-gyro-sandwich',
            label: 'Loaded Gyro Sandwich',
            src: 'assets/photos/menu/gyro-burger.png',
            alt: 'Wingz It Iz gyro sandwich'
        },
        {
            className: 'menu-photo-crispy-chicken',
            label: 'Crispy Chicken Sandwich',
            src: 'assets/photos/menu/crispy-chicken-sandwich.png',
            alt: 'Wingz It Iz crispy chicken sandwich'
        },
        {
            className: 'menu-photo-fish-sandwich',
            label: 'Crispy Fish Sandwich',
            src: 'assets/photos/menu/fish-sandwich.png',
            alt: 'Wingz It Iz crispy fish sandwich'
        }
    ],

    groups: [
        {
            title: 'Single Hamburger',
            note:
                'Ketchup, mustard, mayo, lettuce, tomato, pickles, raw onion, cheese, mushrooms, and jalapeño peppers. Add gyro or Italian beef meat for $3.99. Add an extra patty for $1.25.',

            items: [
                {
                    name: 'Single Hamburger',
                    price: '$8.49'
                }
            ]
        },

        {
            title: 'Mushroom Burger',
            note:
                'Cheese, mushrooms, and mayo. Add an extra patty for $1.25.',

            items: [
                {
                    name: 'Mushroom Burger',
                    price: '$8.49'
                }
            ]
        },

        {
            title: 'Gyro Sandwich',
            note:
                'Served with onion, tomato, and tzatziki sauce.',

            items: [
                {
                    name: 'Gyro Sandwich',
                    price: '$8.99'
                }
            ]
        },

        {
            title: 'Italian Beef Sandwich',
            note:
                'Add cheese or hot giardiniera for $0.50.',

            items: [
                {
                    name: 'Italian Beef Sandwich',
                    price: '$8.99'
                }
            ]
        },

        {
            title: 'Chicken Sandwich',
            note:
                'Available crispy or grilled, spicy or non-spicy. Served with mayo, pickles, lettuce, and tomato.',

            items: [
                {
                    name: 'Chicken Sandwich',
                    price: '$7.99'
                }
            ]
        },

        {
            title: 'Fish Sandwich',
            note:
                'Served with tartar sauce and lettuce.',

            items: [
                {
                    name: 'Fish Sandwich',
                    price: '$7.99'
                }
            ]
        }
    ]
},


/* =====================================================
   GYRO PLATE
====================================================== */

{
    id: 'gyro-plate',
    title: 'Gyro Plate',
    layout: 'flat',

    note:
        'Served as a plate with fries.',

    items: [
        {
            name: 'Gyro Plate',
            price: '$13.99'
        }
    ]
},


    /* =====================================================
       NEW YORK CHOPPED CHEESE
    ====================================================== */

    {
        id: 'chopped-cheese',
        title: 'New York Chopped Cheese',
        layout: 'flat',

        items: [
            {
                name: '12" New York Chopped Cheese Sandwich',
                price: '$10.99'
            }
        ]
    },


    /* =====================================================
       FAMOUS FRIES
    ====================================================== */

{
    id: 'fries',
    title: 'Famous Fresh-Cut Fries',
    layout: 'flat',

    groups: [
        {
            title: 'Regular Fries',

            items: [
                { name: 'Small', price: '$2.99' },
                { name: 'Medium', price: '$4.99' },
                { name: 'Large', price: '$6.99' }
            ],

            subheading: 'Available Toppings',

            subTags: [
                'Garlic +$0.50 / 2 oz',
                'Cajun +$0.50 / 2 oz',
                'Cheese +$0.50 / 2 oz',
                'Feta Cheese +$0.50 / 2 oz',
                'Chili +$0.50 / 2 oz'
            ]
        },

{
    title: 'Atomic Fries',

    note:
        'Includes chili, cheese, and hot giardiniera. Additional or extra toppings are charged separately.',

    items: [
        {
            name: 'Medium',
            price: '$7.49'
        },
        {
            name: 'Large',
            price: '$9.99'
        }
    ],
}
    ]
},

    /* =====================================================
       SIDE ORDERS
    ====================================================== */

    {
        id: 'sides',
        title: 'Side Orders',
        layout: 'flat',

        items: [
            {
                name: 'Fried Mushrooms',
                price: '$4.29'
            },
            {
                name: 'Hush Puppies',
                price: '$4.29'
            },
            {
                name: 'Onion Rings',
                price: '$4.99'
            },
            {
                name: 'Fried Zucchini',
                price: '$4.29'
            },
            {
                name: 'Breaded Jalapeño Poppers',
                price: '$4.99'
            },
            {
                name: 'Mac & Cheese Bites',
                price: '$4.99'
            },
            {
                name: 'Extra Meat',
                price: '$3.99'
            },
            {
                name: 'Side of Rice',
                price: '$4.99'
            },
            {
                name: 'Extra Pita or Garlic Bread',
                price: '$0.99'
            },
            {
                name: 'Popcorn Shrimp',
                price: '$6.99'
            },
            {
                name: 'Mozzarella Sticks',
                price: '$6.99'
            },
            {
                name: 'Chicken Nuggets',
                price: '$4.99'
            },
            {
                name: 'Pizza Puff',
                price: '$3.99'
            },
            {
                name: '2 Pizza Puffs',
                price: '$5.99'
            },
            {
                name: 'Okra',
                price: '$4.29'
            },
            {
                name: 'Corn Nuggets',
                price: '$4.29'
            }
        ]
    },
    

    /* =====================================================
   SALADS
====================================================== */

{
    id: 'salads',
    title: 'Salads',
    layout: 'flat',

    note: 'Add your choice of meat for $3.99.',

    items: [
        {
            name: 'Salad',
            price: '$6.99'
        }
    ]
},


/* =====================================================
   NACHOS
====================================================== */

{
    id: 'nachos',
    title: 'Nachos',
    layout: 'flat',

    images: [
    ...hickoryNachoPhotos
],

    note: 'Add your choice of meat for $3.99.',

    items: [
        {
            name: 'Nacho Supreme',
            price: '$7.99'
        }
    ],

    subheading: 'Nacho Supreme Toppings',

    subTags: [
        'Jalapeño Peppers',
        'Sour Cream',
        'Pickles',
        'Tomato',
        'Onion',
        'Lettuce',
        'Cheese'
    ]
},


    /* =====================================================
       HOT DOGS & CORN DOGS
    ====================================================== */
{
    id: 'hot-dogs',
    title: 'Hot Dogs & Corn Dogs',
    layout: 'flat',

    images: [
        {
            className: 'menu-photo-corn-dog',
            label: 'Classic Corn Dog',
            src: 'assets/photos/menu/corndog.png',
            alt: 'Wingz It Iz corn dog'
        },
        {
            className: 'menu-photo-chicago-dog',
            label: 'Chicago-Style Polish',
            src: 'assets/photos/menu/chicago-dog.png',
            alt: 'Wingz It Iz Chicago-style Polish sausage'
        },

        ...hickoryHotDogPhotos
    ],

    items: [
            {
                name: '100% Beef Hot Dog',
                price: '$3.59'
            },
            {
                name: '100% Beef Polish Sausage',
                price: '$4.99'
            },
            {
                name: '100% Chicken Corn Dog',
                price: '$2.49'
            }
        ]
    },


    /* =====================================================
       DRINKS
    ====================================================== */

    {
        id: 'drinks',
        title: 'Drinks',
        layout: 'flat',

        items: [
            {
                name: 'Slushy Lemonade — Strawberry, Grape, or Blueberry',
                price: '$3.49'
            }
        ]
    }
];

const menuData = {
    chicago: {
        label: 'Chicago',
        sections: chicagoMenu
    },

    alsip: {
        label: 'Alsip',
        sections: alsipMenu
    },

    hickory: {
        label: 'Hickory Hills',
        sections: hickoryMenu
    }
};