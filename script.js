/*
  MEOWZIE'S CAFE ONLINE ORDERING
  Plain JavaScript—no framework and no build step.

  IMPORTANT OWNER EDITS:
  1. Replace formEndpoint with your Formspree endpoint.
  2. Replace gcashAccountName and gcashAccountNumber.
  3. Keep deliveryFee at 49 unless you intentionally change the business policy.
  4. Product names, prices, availability, descriptions, and images are in PRODUCTS below.
*/

'use strict';

const CONFIG = Object.freeze({
  deliveryFee: 49,

  // OWNER EDIT: Replace YOUR_FORM_ID after creating the Formspree form.
  // This endpoint identifier is designed to be used in a public form. It is not an email password.
  formEndpoint: 'https://formspree.io/f/mrengezw',

  // OWNER EDIT: Replace both placeholders before accepting live orders.
  gcashAccountName: 'Marrielle Grijaldo',
  gcashAccountNumber: '+63 993 463 3998'
});

const PRODUCTS = Object.freeze([
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    category: 'iced-lattes',
    categoryLabel: 'Iced Lattes',
    menuGroup: 'drinks',
    description: 'Smooth iced coffee with creamy milk and a mellow vanilla finish.',
    image: 'images/vanilla-latte.jpg',
    imageAlt: 'Iced Vanilla Latte in a clear cup',
    featured: true,
    favorite: false,
    available: true,
    variants: [
      { id: 'medium', label: 'Medium', price: 65 },
      { id: 'large', label: 'Large', price: 85 }
    ]
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    category: 'iced-lattes',
    categoryLabel: 'Iced Lattes',
    menuGroup: 'drinks',
    description: 'Iced coffee and milk balanced with rich, buttery caramel notes.',
    image: 'images/caramel-latte.jpg',
    imageAlt: 'Iced Caramel Latte with caramel ribbons in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'medium', label: 'Medium', price: 65 },
      { id: 'large', label: 'Large', price: 85 }
    ]
  },
  {
    id: 'hazelnut-latte',
    name: 'Hazelnut Latte',
    category: 'iced-lattes',
    categoryLabel: 'Iced Lattes',
    menuGroup: 'drinks',
    description: 'A creamy iced latte with warm, lightly toasted hazelnut flavor.',
    image: 'images/hazelnut-latte.jpg',
    imageAlt: 'Iced Hazelnut Latte in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'medium', label: 'Medium', price: 65 },
      { id: 'large', label: 'Large', price: 85 }
    ]
  },
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    category: 'iced-lattes',
    categoryLabel: 'Iced Lattes',
    menuGroup: 'drinks',
    description: 'A sweeter, full-bodied iced latte with a velvety milk profile.',
    image: 'images/spanish-latte.jpg',
    imageAlt: 'Iced Spanish Latte with creamy espresso layers in a clear cup',
    featured: true,
    favorite: false,
    available: true,
    variants: [
      { id: 'medium', label: 'Medium', price: 65 },
      { id: 'large', label: 'Large', price: 85 }
    ]
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'iced-lattes',
    categoryLabel: 'Iced Lattes',
    menuGroup: 'drinks',
    description: 'Earthy matcha blended with chilled milk for a creamy green tea drink.',
    image: 'images/matcha-latte.jpg',
    imageAlt: 'Iced Matcha Latte in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'medium', label: 'Medium', price: 69 },
      { id: 'large', label: 'Large', price: 89 }
    ]
  },
  {
    id: 'classic-milk-tea',
    name: 'Classic Milk Tea',
    category: 'milk-tea',
    categoryLabel: 'Milk Tea',
    menuGroup: 'drinks',
    description: 'A creamy 22 oz milk tea with a familiar, comforting tea flavor.',
    image: 'images/classic-milk-tea.jpg',
    imageAlt: 'Classic Milk Tea with tapioca pearls in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '22oz', label: '22 oz', price: 79 }]
  },
  {
    id: 'ube-taro-milk-tea',
    name: 'Ube Taro Milk Tea',
    category: 'milk-tea',
    categoryLabel: 'Milk Tea',
    menuGroup: 'drinks',
    description: 'A creamy 22 oz purple milk tea with sweet ube and taro-inspired flavor.',
    image: 'images/ube-taro-milk-tea.jpg',
    imageAlt: 'Ube Taro Milk Tea with tapioca pearls in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '22oz', label: '22 oz', price: 79 }]
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    category: 'thai-tea',
    categoryLabel: 'Thai Tea',
    menuGroup: 'drinks',
    description: 'A bold and creamy 22 oz Thai tea with its signature orange color.',
    image: 'images/thai-tea.jpg',
    imageAlt: 'Thai Tea with a creamy milk swirl in a clear cup',
    featured: true,
    favorite: true,
    available: true,
    variants: [{ id: '22oz', label: '22 oz', price: 99 }]
  },
  {
    id: 'chuckie-float',
    name: 'Chuckie Float',
    category: 'floats',
    categoryLabel: 'Floats',
    menuGroup: 'drinks',
    description: 'A chilled 12 oz chocolate drink finished with a creamy float topping.',
    image: 'images/chuckie-float.jpg',
    imageAlt: 'Chocolate float with vanilla ice cream in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '12oz', label: '12 oz', price: 59 }]
  },
  {
    id: 'coke-float',
    name: 'Coke Float',
    category: 'floats',
    categoryLabel: 'Floats',
    menuGroup: 'drinks',
    description: 'A refreshing 12 oz cola drink topped with a creamy scoop-style float.',
    image: 'images/coke-float.jpg',
    imageAlt: 'Cola float with vanilla ice cream in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '12oz', label: '12 oz', price: 65 }]
  },
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    category: 'hot-drinks',
    categoryLabel: 'Hot Drinks',
    menuGroup: 'drinks',
    description: 'A simple 8 oz hot coffee highlighting the café’s local coffee character.',
    image: 'images/hot-coffee.jpg',
    imageAlt: 'Black hot coffee in a cream ceramic cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '8oz', label: '8 oz', price: 39 }]
  },
  {
    id: 'hot-coffee-with-milk',
    name: 'Hot Coffee with Milk',
    category: 'hot-drinks',
    categoryLabel: 'Hot Drinks',
    menuGroup: 'drinks',
    description: 'An 8 oz hot coffee softened with milk for a smoother, gentler cup.',
    image: 'images/hot-coffee-with-milk.jpg',
    imageAlt: 'Hot coffee with milk in a cream ceramic cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '8oz', label: '8 oz', price: 49 }]
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    category: 'hot-drinks',
    categoryLabel: 'Hot Drinks',
    menuGroup: 'drinks',
    description: 'A warm and comforting 8 oz chocolate drink with a creamy finish.',
    image: 'images/hot-chocolate.jpg',
    imageAlt: 'Hot chocolate with a cream swirl in a cream ceramic cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: '8oz', label: '8 oz', price: 49 }]
    },

  // ------------------------------------------------------------
  // FOOD MENU
  // OWNER EDIT: Food names, descriptions, prices and images.
  // ------------------------------------------------------------

  {
    id: 'burger-and-fries',
    name: 'Burger & Fries',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'A satisfying burger served with a side of crispy fries.',
    image: 'images/burger-and-fries.jpg',
    imageAlt: 'Burger with fries from Meowzie’s Cafe',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'regular', label: '1 serving', price: 89 }
    ]
  },

  {
    id: 'pancakes',
    name: 'Pancakes',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'Warm, fluffy pancakes served as a sweet and affordable café snack.',
    image: 'images/pancakes.jpg',
    imageAlt: 'Stack of pancakes from Meowzie’s Cafe',
    featured: false,
    favorite: true,
    available: true,
    variants: [
      { id: 'regular', label: '1 serving', price: 59 }
    ]
  },

  {
    id: 'sandwich-with-fries',
    name: 'Sandwich with Fries',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'A toasted café sandwich served with crispy fries on the side.',
    image: 'images/sandwich-with-fries.jpg',
    imageAlt: 'Toasted sandwich with fries from Meowzie’s Cafe',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'regular', label: '1 serving', price: 89 }
    ]
  },

  {
    id: 'hotdog-with-fries',
    name: 'Hotdog with Fries',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'A classic hotdog served with a side of crispy fries.',
    image: 'images/hotdog-with-fries.jpg',
    imageAlt: 'Hotdog with fries from Meowzie’s Cafe',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'regular', label: '1 serving', price: 89 }
    ]
  },

  {
    id: 'mini-donuts',
    name: 'Mini Donuts',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'Six bite-sized mini donuts, perfect for sharing or enjoying with coffee.',
    image: 'images/mini-donuts.jpg',
    imageAlt: 'Six mini donuts from Meowzie’s Cafe',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: '6-pieces', label: '6 pieces', price: 49 }
    ]
  },

  {
    id: 'pansit-canton-big',
    name: 'Pansit Canton Big',
    category: 'food',
    categoryLabel: 'Food',
    menuGroup: 'food',
    description: 'A large serving of savory Pansit Canton. Select your preferred flavor.',
    image: 'images/pansit-canton-big.jpg',
    imageAlt: 'Large bowl of Pansit Canton from Meowzie’s Cafe',
    featured: false,
    favorite: false,
    available: true,
    variants: [
      { id: 'original', label: 'Original', price: 55 },
      { id: 'sweet-and-spicy', label: 'Sweet & Spicy', price: 55 },
      { id: 'calamansi', label: 'Calamansi', price: 55 },
      { id: 'spicy', label: 'Spicy', price: 55 }
    ]
  },

  // ------------------------------------------------------------
  // MEOWZIE'S SILOG & SNACKS
  // These meals can optionally include a Lemonade or Iced Tea add-on.
  // ------------------------------------------------------------
  {
    id: 'hotsilog',
    name: 'Hotsilog',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Two hotdogs with garlic rice and a sunny-side-up egg.',
    image: 'images/hotsilog.jpg',
    imageAlt: 'Hotsilog with hotdogs, garlic rice, and egg on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 79 }]
  },
  {
    id: 'hamsilog',
    name: 'Hamsilog',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Seared ham with garlic rice and a sunny-side-up egg.',
    image: 'images/hamsilog.jpg',
    imageAlt: 'Hamsilog with ham, garlic rice, and egg on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 79 }]
  },
  {
    id: 'lumpsilog',
    name: 'Lumsilog',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Crispy lumpia with garlic rice and a sunny-side-up egg.',
    image: 'images/lumpsilog.jpg',
    imageAlt: 'Lumpsilog with lumpia, garlic rice, and egg on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 85 }]
  },
  {
    id: 'chixsilog',
    name: 'Chixsilog',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Crispy fried chicken with garlic rice and a sunny-side-up egg.',
    image: 'images/chixsilog.jpg',
    imageAlt: 'Chixsilog with fried chicken, garlic rice, and egg on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 85 }]
  },
  {
    id: 'spamsilog',
    name: 'Spamsilog',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Grilled Spam with garlic rice and a sunny-side-up egg.',
    image: 'images/spamsilog.jpg',
    imageAlt: 'Spamsilog with grilled Spam, garlic rice, and egg on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 80 }]
  },
  {
    id: 'burgersteak',
    name: 'Burgersteak',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'A savory burger patty in mushroom gravy with garlic rice.',
    image: 'images/burgersteak.jpg',
    imageAlt: 'Burger steak with mushroom gravy and garlic rice on a white plate',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 80 }]
  },
  {
    id: 'siomai-rice-with-egg',
    name: 'Siomai Rice with Egg',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Four siomai with garlic rice, a sunny-side-up egg, and dipping sauce.',
    image: 'images/siomai-rice-with-egg.jpg',
    imageAlt: 'Siomai rice with egg and a small dipping sauce bowl',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 69 }]
  },
  {
    id: 'nachos',
    name: 'Nachos',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Crispy corn chips topped with warm cheese, beef, and mayo.',
    image: 'images/nachos.jpg',
    imageAlt: 'Nachos with cheese, beef, and mayonnaise in a paper-lined tray',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 59 }]
  },
  {
    id: 'nachos-with-fries',
    name: 'Nacho with Fries',
    category: 'silog-menu',
    categoryLabel: 'Silog & Snacks',
    menuGroup: 'food',
    description: 'Loaded nachos served with a satisfying side of crispy fries.',
    image: 'images/nachos-with-fries.jpg',
    imageAlt: 'Loaded nachos with fries in a paper-lined tray',
    featured: false,
    favorite: false,
    available: true,
    canAddDrink: true,
    variants: [{ id: 'regular', label: '1 serving', price: 79 }]
  },

  // These remain normal standalone drinks in the Drinks section.
  {
    id: 'lemonade',
    name: 'Lemonade',
    category: 'cold-drinks',
    categoryLabel: 'Cold Drinks',
    menuGroup: 'drinks',
    description: 'A refreshing iced lemonade served in a clear cup.',
    image: 'images/lemonade.jpg',
    imageAlt: 'Iced lemonade in a clear cup on a wooden café table',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: 'regular', label: 'Regular', price: 39 }]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    category: 'cold-drinks',
    categoryLabel: 'Cold Drinks',
    menuGroup: 'drinks',
    description: 'A refreshing amber iced tea served in a clear cup.',
    image: 'images/iced-tea.jpg',
    imageAlt: 'Amber iced tea in a clear cup on a wooden café table',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: 'regular', label: 'Regular', price: 39 }]
  },

  // Hidden helper items are only added through a Silog or snack card's optional add-on selector.
  {
    id: 'lemonade-add-on',
    name: 'Lemonade Add-on',
    category: 'cold-drinks',
    categoryLabel: 'Drink Add-on',
    menuGroup: 'drinks',
    showInMenu: false,
    description: 'Optional food add-on drink.',
    image: 'images/lemonade.jpg',
    imageAlt: 'Iced lemonade in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: 'add-on', label: 'Food add-on', price: 20 }]
  },
  {
    id: 'iced-tea-add-on',
    name: 'Iced Tea Add-on',
    category: 'cold-drinks',
    categoryLabel: 'Drink Add-on',
    menuGroup: 'drinks',
    showInMenu: false,
    description: 'Optional food add-on drink.',
    image: 'images/iced-tea.jpg',
    imageAlt: 'Amber iced tea in a clear cup',
    featured: false,
    favorite: false,
    available: true,
    variants: [{ id: 'add-on', label: 'Food add-on', price: 20 }]
  }
]);

const STORAGE_KEYS = Object.freeze({
  cart: 'meowziesCafeCartV1',
  checkoutDraft: 'meowziesCafeCheckoutDraftV1',
  pendingOrderNumber: 'meowziesCafePendingOrderV1',
  successfulOrders: 'meowziesCafeSuccessfulOrdersV1'
});

const state = {
  cart: readJson(STORAGE_KEYS.cart, []),
  activeCategory: 'all',
  isSubmitting: false,
  cartReturnFocusElement: null,
  checkoutReturnFocusElement: null,
  toastTimer: null
};

const elements = {};

document.addEventListener('DOMContentLoaded', init);

function init() {
  cacheElements();
  sanitizeStoredCart();
  populateAccountPlaceholders();
  renderFeaturedProducts();
  renderProducts();
  renderCart();
  restoreCheckoutDraft();
  bindEvents();
}

function cacheElements() {
  const ids = [
    'navToggle', 'primaryNav', 'openCartButton', 'menuCartButton', 'cartCount',
    'categoryFilters', 'menuStatus', 'productGrid', 'featuredGrid', 'cartBackdrop', 'cartDrawer',
    'closeCartButton', 'cartItems', 'emptyCartMessage', 'cartFooter', 'cartSubtotal',
    'cartDelivery', 'cartTotal', 'cartAvailabilityStatus', 'continueShoppingButton', 'checkoutButton',
    'checkoutDialog', 'closeCheckoutButton', 'checkoutOrderNumber', 'checkoutForm',
    'checkoutItems', 'checkoutSubtotal', 'checkoutDelivery', 'checkoutTotal',
    'gcashTotal', 'confirmationTotal', 'gcashAccountName', 'gcashAccountNumber',
    'submissionStatus', 'submitOrderButton', 'backToCartButton', 'checkoutFormView',
    'confirmationView', 'confirmationOrderNumber', 'finishOrderButton', 'toast',
    'mobileNumber', 'mobileNumberError', 'clearCheckoutDraftButton'
  ];

  for (const id of ids) elements[id] = document.getElementById(id);
}

function bindEvents() {
  elements.navToggle.addEventListener('click', toggleNavigation);
  elements.primaryNav.addEventListener('click', () => closeNavigation());

  elements.openCartButton.addEventListener('click', () => openCart());
  elements.menuCartButton.addEventListener('click', () => openCart());
  elements.closeCartButton.addEventListener('click', closeCart);
  elements.cartBackdrop.addEventListener('click', closeCart);
  elements.continueShoppingButton.addEventListener('click', () => {
    closeCart();
    document.getElementById('menu').scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });

  elements.categoryFilters.addEventListener('click', handleCategoryFilter);
  elements.productGrid.addEventListener('click', handleProductGridClick);
  elements.productGrid.addEventListener('change', handleProductGridChange);
  elements.cartItems.addEventListener('click', handleCartClick);

  elements.checkoutButton.addEventListener('click', openCheckout);
  elements.closeCheckoutButton.addEventListener('click', closeCheckout);
  elements.backToCartButton.addEventListener('click', () => {
    const returnFocusElement = state.checkoutReturnFocusElement;
    closeCheckout({ restoreFocus: false });
    openCart({ returnFocusElement });
  });
  elements.clearCheckoutDraftButton.addEventListener('click', clearCheckoutDraft);
  elements.finishOrderButton.addEventListener('click', finishOrderFlow);
  elements.checkoutForm.addEventListener('input', saveCheckoutDraft);
  elements.checkoutForm.addEventListener('change', saveCheckoutDraft);
  elements.checkoutForm.addEventListener('submit', submitOrder);
  elements.mobileNumber.addEventListener('input', validateMobileNumber);

  elements.checkoutDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    if (!state.isSubmitting) closeCheckout();
  });

  document.addEventListener('keydown', handleGlobalKeydown);

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEYS.cart) {
      state.cart = readJson(STORAGE_KEYS.cart, []);
      sanitizeStoredCart();
      renderCart();
    }
  });
}

function populateAccountPlaceholders() {
  elements.gcashAccountName.textContent = CONFIG.gcashAccountName;
  elements.gcashAccountNumber.textContent = CONFIG.gcashAccountNumber;

  const isUnconfigured = CONFIG.gcashAccountName.startsWith('[') || CONFIG.gcashAccountNumber.startsWith('[');
  elements.gcashAccountName.classList.toggle('editable-placeholder', isUnconfigured);
  elements.gcashAccountNumber.classList.toggle('editable-placeholder', isUnconfigured);
}

function renderFeaturedProducts() {
  const featured = PRODUCTS.filter((product) => product.showInMenu !== false && product.featured && product.available).slice(0, 3);
  elements.featuredGrid.innerHTML = featured.map((product) => {
    const lowestPrice = Math.min(...product.variants.map((variant) => variant.price));
    return `
      <article class="featured-card">
        <img src="${product.image}" ${buildResponsiveImageAttributes(product.image, '(max-width: 760px) calc(100vw - 24px), (max-width: 980px) calc((100vw - 52px) / 2), 380px')} alt="${product.imageAlt}" width="1200" height="900" loading="lazy" decoding="async" data-fallback-image>
        <div class="featured-card-body">
          <p class="product-category">${product.categoryLabel}</p>
          <h3>${product.name}</h3>
          <p>From ${formatPeso(lowestPrice)} · ${product.description}</p>
        </div>
      </article>`;
  }).join('');
  installImageFallbacks(elements.featuredGrid);
}

function renderProducts() {
  const visibleProducts = PRODUCTS.filter((product) => {
    if (product.showInMenu === false) return false;
    if (state.activeCategory === 'all') return true;
    if (state.activeCategory === 'drinks') return product.menuGroup === 'drinks';
    if (state.activeCategory === 'food') return product.menuGroup === 'food';

    return product.category === state.activeCategory;
  });

  elements.productGrid.innerHTML = visibleProducts.map((product) => {
    const defaultVariant = product.variants[0];
    const hasMultipleVariants = product.variants.length > 1;
    const optionLabel = product.menuGroup === 'food' ? 'Option' : 'Size';
    const badge = !product.available
      ? '<span class="product-badge unavailable-badge">Unavailable</span>'
      : (product.favorite ? '<span class="product-badge"><span aria-hidden="true">🐾</span> Meowzie’s Favorite</span>' : '');

    const variantControl = hasMultipleVariants
      ? `<label class="field-label" for="variant-${product.id}">${optionLabel}</label>
        <select class="select-control product-variant" id="variant-${product.id}" data-product-id="${product.id}" aria-label="${optionLabel} for ${product.name}">
          ${product.variants.map((variant) => `<option value="${variant.id}" data-price="${variant.price}">${variant.label} — ${formatPeso(variant.price)}</option>`).join('')}
        </select>`
      : `<span class="field-label" id="variant-label-${product.id}">${optionLabel}</span>
        <div class="select-control" id="variant-${product.id}" aria-label="${optionLabel}: ${defaultVariant.label}">${defaultVariant.label}</div>`;

    const drinkAddOnControl = product.canAddDrink
      ? `<div class="drink-add-on">
          <label class="field-label" for="add-on-${product.id}">Add a drink <span>optional · +₱20</span></label>
          <select class="select-control product-add-on" id="add-on-${product.id}" aria-label="Optional drink add-on for ${product.name}">
            <option value="">No drink add-on</option>
            <option value="lemonade-add-on">Lemonade +₱20</option>
            <option value="iced-tea-add-on">Iced Tea +₱20</option>
          </select>
        </div>`
      : '';

    return `
      <article class="product-card ${product.menuGroup === 'drinks' ? 'product-card-drink' : ''} ${product.available ? '' : 'is-unavailable'}" data-product-card="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" ${buildResponsiveImageAttributes(product.image, '(max-width: 760px) calc(100vw - 24px), (max-width: 980px) calc((100vw - 54px) / 2), 379px')} alt="${product.imageAlt}" class="product-image" width="1200" height="900" loading="lazy" decoding="async" data-fallback-image>
          ${badge}
        </div>
        <div class="product-body">
          <div class="product-heading-row">
            <div>
              <p class="product-category">${product.categoryLabel}</p>
              <h3>${product.name}</h3>
            </div>
            <span class="product-price" id="price-${product.id}">${formatPeso(defaultVariant.price)}</span>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-controls">
            <div class="option-row">
              <div>
                ${variantControl}
              </div>
              <div class="quantity-block">
                <label class="field-label" for="quantity-${product.id}">Quantity</label>
                <div class="quantity-control">
                  <button type="button" data-product-action="decrease" data-product-id="${product.id}" aria-label="Decrease quantity for ${product.name}">−</button>
                  <input id="quantity-${product.id}" class="product-quantity" type="number" min="1" max="20" value="1" inputmode="numeric" aria-label="Quantity for ${product.name}">
                  <button type="button" data-product-action="increase" data-product-id="${product.id}" aria-label="Increase quantity for ${product.name}">+</button>
                </div>
              </div>
            </div>
            ${drinkAddOnControl}
            <button class="button button-primary add-button" type="button" data-product-action="add" data-product-id="${product.id}" ${product.available ? '' : 'disabled'}>
              ${product.available ? 'Add to Cart' : 'Currently unavailable'}
            </button>
            <div class="product-feedback" id="feedback-${product.id}" aria-live="polite"></div>
          </div>
        </div>
      </article>`;
  }).join('');

  installImageFallbacks(elements.productGrid);
  const activeFilter = elements.categoryFilters.querySelector('[aria-pressed="true"]');
  const filterLabel = activeFilter?.textContent.trim() || 'All';
  elements.menuStatus.textContent = `${visibleProducts.length} menu item${visibleProducts.length === 1 ? '' : 's'} shown for ${filterLabel}.`;
}

function handleCategoryFilter(event) {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.activeCategory = button.dataset.category;
  for (const filter of elements.categoryFilters.querySelectorAll('[data-category]')) {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  }
  renderProducts();
}

function handleProductGridClick(event) {
  const button = event.target.closest('[data-product-action]');
  if (!button) return;
  const productId = button.dataset.productId;
  const action = button.dataset.productAction;
  const quantityInput = document.getElementById(`quantity-${productId}`);

  if (action === 'increase') quantityInput.value = clampNumber(Number(quantityInput.value) + 1, 1, 20);
  if (action === 'decrease') quantityInput.value = clampNumber(Number(quantityInput.value) - 1, 1, 20);
  if (action === 'add') addProductFromCard(productId);
}

function handleProductGridChange(event) {
  if (event.target.matches('.product-variant')) {
    const product = getProduct(event.target.dataset.productId);
    const variant = getVariant(product, event.target.value);
    document.getElementById(`price-${product.id}`).textContent = formatPeso(variant.price);
  }

  if (event.target.matches('.product-quantity')) {
    event.target.value = clampNumber(Number(event.target.value), 1, 20);
  }
}

function addProductFromCard(productId) {
  const product = getProduct(productId);
  if (!product || !product.available) return;

  const variantSelect = document.getElementById(`variant-${productId}`);
  const variantId = variantSelect?.matches('select')
    ? variantSelect.value
    : product.variants[0].id;
  const quantityInput = document.getElementById(`quantity-${productId}`);
  const quantity = clampNumber(Number(quantityInput.value), 1, 20);
  addCartLine(productId, variantId, quantity);

  const addOnProductId = document.getElementById(`add-on-${productId}`)?.value;
  if (addOnProductId) addCartLine(addOnProductId, 'add-on', quantity);

  saveCart();
  renderCart();
  quantityInput.value = 1;

  const feedback = document.getElementById(`feedback-${productId}`);
  if (feedback) feedback.textContent = `${quantity} × ${product.name}${addOnProductId ? ' with drink add-on' : ''} added to your cart.`;
  window.setTimeout(() => { if (feedback) feedback.textContent = ''; }, 2600);
}

function addCartLine(productId, variantId, quantity) {
  const lineId = makeLineId(productId, variantId);
  const existingLine = state.cart.find((line) => line.lineId === lineId);

  if (existingLine) {
    existingLine.quantity = clampNumber(existingLine.quantity + quantity, 1, 99);
  } else {
    state.cart.push({ lineId, productId, variantId, quantity });
  }
}

function handleCartClick(event) {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;

  const lineId = button.dataset.lineId;
  const action = button.dataset.cartAction;
  const lineIndex = state.cart.findIndex((item) => item.lineId === lineId);
  const line = state.cart.find((item) => item.lineId === lineId);
  if (!line) return;

  if (action === 'increase') line.quantity = clampNumber(line.quantity + 1, 1, 99);
  if (action === 'decrease') line.quantity = clampNumber(line.quantity - 1, 1, 99);
  if (action === 'remove') state.cart = state.cart.filter((item) => item.lineId !== lineId);

  saveCart();
  renderCart();
  if (event.detail === 0) restoreCartMutationFocus({ action, lineId, lineIndex });
}

function restoreCartMutationFocus({ action, lineId, lineIndex }) {
  const actionButtons = [...elements.cartItems.querySelectorAll('[data-cart-action]')];
  let target = null;

  if (action !== 'remove') {
    target = actionButtons.find((button) => button.dataset.cartAction === action && button.dataset.lineId === lineId);
  } else if (state.cart.length > 0) {
    const adjacentLine = state.cart[Math.min(lineIndex, state.cart.length - 1)];
    target = actionButtons.find((button) => button.dataset.cartAction === 'remove' && button.dataset.lineId === adjacentLine.lineId);
  } else {
    target = elements.continueShoppingButton.hidden ? elements.closeCartButton : elements.continueShoppingButton;
  }

  if (typeof target?.focus === 'function') target.focus();
}

function renderCart() {
  const detailedLines = getDetailedCartLines();
  const unavailableLines = getUnavailableCartLines(detailedLines);
  const itemCount = detailedLines.reduce((sum, line) => sum + line.quantity, 0);
  const { subtotal, delivery, total } = calculateCartTotals(detailedLines);

  elements.cartCount.textContent = String(itemCount);
  elements.cartCount.setAttribute('aria-label', `${itemCount} item${itemCount === 1 ? '' : 's'} in cart`);
  const cartHasItems = detailedLines.length > 0;
  // Keep both the semantic hidden state and an explicit display state. This prevents
  // any cached or older stylesheet rule from leaving the empty message visible over
  // real cart lines after an item is added.
  elements.emptyCartMessage.hidden = cartHasItems;
  elements.emptyCartMessage.style.display = cartHasItems ? 'none' : '';
  elements.emptyCartMessage.setAttribute('aria-hidden', String(cartHasItems));
  elements.cartFooter.hidden = !cartHasItems;
  elements.cartAvailabilityStatus.hidden = unavailableLines.length === 0;
  elements.cartAvailabilityStatus.textContent = unavailableLines.length === 0
    ? ''
    : `${unavailableLines.length} cart item${unavailableLines.length === 1 ? ' is' : 's are'} currently unavailable. Remove ${unavailableLines.length === 1 ? 'it' : 'them'} before checkout.`;
  elements.checkoutButton.disabled = unavailableLines.length > 0;
  elements.checkoutButton.setAttribute('aria-disabled', String(unavailableLines.length > 0));

  elements.cartItems.innerHTML = detailedLines.map((line) => `
    <article class="cart-item ${line.product.available ? '' : 'is-unavailable'}" ${line.product.available ? '' : 'aria-label="Currently unavailable item"'}>
      <img src="${line.product.image}" ${buildResponsiveImageAttributes(line.product.image, '(max-width: 430px) 62px, 74px')} alt="${line.product.imageAlt}" width="1200" height="900" loading="lazy" decoding="async" data-fallback-image>
      <div>
        <div class="cart-item-top">
          <div>
            <h3>${line.product.name}</h3>
            <p class="cart-item-meta">${line.variant.label} · ${formatPeso(line.variant.price)} each</p>
            ${line.product.available ? '' : '<p class="cart-item-warning">Currently unavailable — remove this item to continue.</p>'}
          </div>
          <strong>${formatPeso(line.variant.price * line.quantity)}</strong>
        </div>
        <div class="cart-line-actions">
          <div class="quantity-control cart-quantity">
            <button type="button" data-cart-action="decrease" data-line-id="${line.lineId}" aria-label="Decrease ${line.product.name} quantity">−</button>
            <span aria-label="Quantity ${line.quantity}">${line.quantity}</span>
            <button type="button" data-cart-action="increase" data-line-id="${line.lineId}" aria-label="Increase ${line.product.name} quantity">+</button>
          </div>
          <button class="remove-button" type="button" data-cart-action="remove" data-line-id="${line.lineId}" aria-label="Remove ${line.product.name}, ${line.variant.label}, from cart">Remove</button>
        </div>
      </div>
    </article>`).join('');

  installImageFallbacks(elements.cartItems);
  elements.cartSubtotal.textContent = formatPeso(subtotal);
  elements.cartDelivery.textContent = formatPeso(delivery);
  elements.cartTotal.textContent = formatPeso(total);

  if (isCheckoutOpen() && detailedLines.length > 0) renderCheckoutSummary();
}

function openCart({ returnFocusElement = document.activeElement } = {}) {
  closeNavigation();
  state.cartReturnFocusElement = returnFocusElement;
  elements.cartBackdrop.hidden = false;
  elements.cartDrawer.classList.add('is-open');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  elements.openCartButton.setAttribute('aria-expanded', 'true');
  elements.menuCartButton.setAttribute('aria-expanded', 'true');
  setPageInert(true);
  document.body.classList.add('no-scroll');
  window.setTimeout(() => elements.closeCartButton.focus(), 30);
}

function closeCart({ restoreFocus = true } = {}) {
  elements.cartDrawer.classList.remove('is-open');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  elements.openCartButton.setAttribute('aria-expanded', 'false');
  elements.menuCartButton.setAttribute('aria-expanded', 'false');
  elements.cartBackdrop.hidden = true;
  setPageInert(false);
  document.body.classList.remove('no-scroll');
  if (restoreFocus && state.cartReturnFocusElement instanceof HTMLElement) state.cartReturnFocusElement.focus();
}

function openCheckout() {
  const detailedLines = getDetailedCartLines();
  if (detailedLines.length === 0) {
    showToast('Add at least one item before checkout');
    return;
  }

  if (hasUnavailableCartItems(detailedLines)) {
    showToast('Remove unavailable items before checkout');
    return;
  }

  state.checkoutReturnFocusElement = state.cartReturnFocusElement instanceof HTMLElement
    ? state.cartReturnFocusElement
    : elements.openCartButton;
  closeCart({ restoreFocus: false });
  showCheckoutFormView();
  const orderNumber = getOrCreatePendingOrderNumber();
  elements.checkoutOrderNumber.textContent = orderNumber;
  renderCheckoutSummary();
  restoreCheckoutDraft();
  elements.submissionStatus.textContent = '';

  if (typeof elements.checkoutDialog.showModal === 'function') {
    elements.checkoutDialog.showModal();
  } else {
    elements.checkoutDialog.setAttribute('open', '');
  }
  setPageInert(true);
  document.body.classList.add('no-scroll');
  window.setTimeout(() => document.getElementById('fullName').focus(), 30);
}

function closeCheckout({ restoreFocus = true } = {}) {
  if (state.isSubmitting) return;
  saveCheckoutDraft();
  if (typeof elements.checkoutDialog.close === 'function') elements.checkoutDialog.close();
  else elements.checkoutDialog.removeAttribute('open');
  setPageInert(false);
  document.body.classList.remove('no-scroll');
  if (restoreFocus && state.checkoutReturnFocusElement instanceof HTMLElement) state.checkoutReturnFocusElement.focus();
}

function renderCheckoutSummary() {
  const lines = getDetailedCartLines();
  const { subtotal, delivery, total } = calculateCartTotals(lines);

  elements.checkoutItems.innerHTML = lines.map((line) => `
    <div class="checkout-item">
      <div>
        <p><strong>${line.quantity} × ${line.product.name}</strong></p>
        <p class="checkout-item-meta">${line.variant.label} · ${formatPeso(line.variant.price)} each</p>
      </div>
      <strong>${formatPeso(line.variant.price * line.quantity)}</strong>
    </div>`).join('');

  elements.checkoutSubtotal.textContent = formatPeso(subtotal);
  elements.checkoutDelivery.textContent = formatPeso(delivery);
  elements.checkoutTotal.textContent = formatPeso(total);
  elements.gcashTotal.textContent = formatPeso(total);
  elements.confirmationTotal.textContent = formatPeso(total);
}

async function submitOrder(event) {
  event.preventDefault();
  if (state.isSubmitting) return;

  elements.submissionStatus.textContent = '';
  saveCheckoutDraft();

  const detailedLines = getDetailedCartLines();
  if (detailedLines.length === 0) {
    showSubmissionStatus('Your cart is empty. Return to the menu and add at least one item.', { focus: true });
    return;
  }

  if (hasUnavailableCartItems(detailedLines)) {
    showSubmissionStatus('One or more items in your cart are currently unavailable. Remove those items before submitting. Your cart and form information have been preserved.', { focus: true });
    renderCart();
    return;
  }

  const mobileIsValid = validateMobileNumber();
  if (!elements.checkoutForm.checkValidity() || !mobileIsValid) {
    markInvalidFields();
    elements.checkoutForm.reportValidity();
    showSubmissionStatus('Please complete every required field and correct the highlighted information.');
    focusFirstInvalidField();
    return;
  }

  if (!isFormServiceConfigured()) {
    showSubmissionStatus('Order email service is not configured yet. The café owner must replace YOUR_FORM_ID in script.js before accepting live orders. Your cart and form information have been preserved.', { focus: true });
    return;
  }

  if (!isGcashConfigured()) {
    showSubmissionStatus('The GCash account name or number is still a placeholder. The café owner must configure payment details before accepting live orders. Your cart and form information have been preserved.', { focus: true });
    return;
  }

  const orderNumber = getOrCreatePendingOrderNumber();
  const priorSuccess = getSuccessfulOrders().find((order) => order.orderNumber === orderNumber);
  if (priorSuccess) {
    showConfirmation(orderNumber);
    clearOrderAfterConfirmedSuccess();
    return;
  }

  state.isSubmitting = true;
  elements.submitOrderButton.disabled = true;
  elements.submitOrderButton.textContent = 'Submitting…';
  if (typeof elements.checkoutForm.setAttribute === 'function') elements.checkoutForm.setAttribute('aria-busy', 'true');
  showSubmissionStatus('Submitting your order for manual verification. Please wait.');
  saveCheckoutDraft();

  const formPayload = buildSubmissionFormData(orderNumber);

  try {
    const response = await fetch(CONFIG.formEndpoint, {
      method: 'POST',
      body: formPayload,
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      let message = `The order service returned an error (${response.status}).`;
      try {
        const data = await response.json();
        if (Array.isArray(data.errors) && data.errors.length) {
          message = data.errors.map((error) => error.message).filter(Boolean).join(' ');
        }
      } catch (_) {
        // The response was not JSON. Keep the status-based message.
      }

      if (response.status === 429) message = 'The order service has reached a limit or received too many requests. Wait and try again, or contact the café directly. Your cart and form information are preserved.';
      throw new Error(message);
    }

    recordSuccessfulOrder(orderNumber);
    showConfirmation(orderNumber);
    clearOrderAfterConfirmedSuccess();
  } catch (error) {
    showSubmissionStatus(`${error.message || 'The order could not be submitted.'} Please check your connection and try again. Your cart and form information have not been deleted. Use the same order number on any retry.`, { focus: true });
  } finally {
    state.isSubmitting = false;
    if (typeof elements.checkoutForm.removeAttribute === 'function') elements.checkoutForm.removeAttribute('aria-busy');
    elements.submitOrderButton.disabled = false;
    elements.submitOrderButton.textContent = 'Submit order for verification';
  }
}

function buildSubmissionFormData(orderNumber) {
  const formData = new FormData(elements.checkoutForm);
  const lines = getDetailedCartLines();
  const { subtotal, delivery, total } = calculateCartTotals(lines);
  const dateTime = getPhilippinesDateTime();

  const itemLines = lines.map((line, index) => {
    const optionName = line.product.menuGroup === 'food' ? 'Option' : 'Size';
    return `${index + 1}. ${line.product.name} | ${optionName}: ${line.variant.label} | Qty: ${line.quantity} | Unit: ${formatPeso(line.variant.price)} | Line total: ${formatPeso(line.variant.price * line.quantity)}`;
  });

  const readableOrder = [
    `Order number: ${orderNumber}`,
    `Date and time (Philippines): ${dateTime.display}`,
    '',
    'ITEMS',
    ...itemLines,
    '',
    `Subtotal: ${formatPeso(subtotal)}`,
    `Delivery fee: ${formatPeso(delivery)}`,
    `Total: ${formatPeso(total)}`,
    '',
    'PAYMENT STATUS: Pending manual GCash verification'
  ].join('\n');

  formData.set('order_number', orderNumber);
  formData.set('order_date_time_philippines', dateTime.display);
  formData.set('order_date_time_iso', dateTime.iso);
  formData.set('order_items', itemLines.join('\n'));
  formData.set('order_details', readableOrder);
  formData.set('subtotal', formatPeso(subtotal));
  formData.set('delivery_fee', formatPeso(delivery));
  formData.set('total', formatPeso(total));
  formData.set('payment_status', 'Pending manual verification');
  formData.set('customer_confirmed_total', document.getElementById('paymentConfirmation').checked ? 'Yes' : 'No');
  formData.set('_subject', `Meowzie’s Cafe Order ${orderNumber} — ${formatPeso(total)}`);

  return formData;
}

function showConfirmation(orderNumber) {
  elements.confirmationOrderNumber.textContent = orderNumber;
  elements.checkoutFormView.hidden = true;
  elements.confirmationView.hidden = false;
  window.setTimeout(() => elements.finishOrderButton.focus(), 30);
}

function showCheckoutFormView() {
  elements.checkoutFormView.hidden = false;
  elements.confirmationView.hidden = true;
}

function clearOrderAfterConfirmedSuccess() {
  state.cart = [];
  saveCart();
  removeStoredValue(STORAGE_KEYS.checkoutDraft);
  removeStoredValue(STORAGE_KEYS.pendingOrderNumber);
  elements.checkoutForm.reset();
  clearInvalidMarks();
  renderCart();
}

function finishOrderFlow() {
  closeCheckout();
  showCheckoutFormView();
  window.location.hash = 'home';
}

function saveCheckoutDraft() {
  if (!elements.checkoutForm) return;
  const draft = {};
  for (const element of elements.checkoutForm.elements) {
    if (!element.name) continue;
    draft[element.name] = element.type === 'checkbox' ? element.checked : element.value;
  }
  writeJson(STORAGE_KEYS.checkoutDraft, draft);
}

function clearCheckoutDraft() {
  removeStoredValue(STORAGE_KEYS.checkoutDraft);
  elements.checkoutForm.reset();
  clearInvalidMarks();
  showSubmissionStatus('Saved checkout details cleared. Your cart was not changed.');
  document.getElementById('fullName').focus();
}

function restoreCheckoutDraft() {
  if (!elements.checkoutForm) return;
  const draft = readJson(STORAGE_KEYS.checkoutDraft, {});
  for (const element of elements.checkoutForm.elements) {
    if (!element.name || !(element.name in draft)) continue;
    if (element.type === 'checkbox') element.checked = Boolean(draft[element.name]);
    else element.value = draft[element.name];
  }
}

function validateMobileNumber() {
  const value = elements.mobileNumber.value.trim();
  const digits = value.replace(/\D/g, '');
  const valid = /^09\d{9}$/.test(digits) || /^639\d{9}$/.test(digits);

  if (!value) {
    elements.mobileNumber.setCustomValidity('Enter a mobile number.');
    elements.mobileNumberError.textContent = '';
    return false;
  }

  if (!valid) {
    elements.mobileNumber.setCustomValidity('Use a Philippine mobile number beginning with 09 or +63 9.');
    elements.mobileNumber.setAttribute('aria-invalid', 'true');
    elements.mobileNumberError.textContent = 'Use 11 digits beginning with 09, or +63 followed by a 10-digit mobile number.';
    return false;
  }

  elements.mobileNumber.setCustomValidity('');
  elements.mobileNumber.removeAttribute('aria-invalid');
  elements.mobileNumberError.textContent = '';
  return true;
}

function markInvalidFields() {
  for (const field of elements.checkoutForm.querySelectorAll('input, textarea')) {
    if (!field.checkValidity()) field.setAttribute('aria-invalid', 'true');
    else if (field.id !== 'mobileNumber') field.removeAttribute('aria-invalid');
  }
}

function clearInvalidMarks() {
  for (const field of elements.checkoutForm.querySelectorAll('[aria-invalid="true"]')) field.removeAttribute('aria-invalid');
  elements.mobileNumberError.textContent = '';
  elements.submissionStatus.textContent = '';
}

function focusFirstInvalidField() {
  const invalid = elements.checkoutForm.querySelector(':invalid, [aria-invalid="true"]');
  if (invalid) invalid.focus();
}

function showSubmissionStatus(message, { focus = false } = {}) {
  elements.submissionStatus.textContent = message;
  if (focus && typeof elements.submissionStatus.focus === 'function') elements.submissionStatus.focus();
}

function getDetailedCartLines() {
  return state.cart.map((line) => {
    const product = getProduct(line.productId);
    if (!product) return null;
    const variant = getVariant(product, line.variantId);
    if (!variant) return null;
    return { ...line, product, variant };
  }).filter(Boolean);
}

function calculateSubtotal(lines = getDetailedCartLines()) {
  return lines.reduce((sum, line) => sum + (line.variant.price * line.quantity), 0);
}

function calculateCartTotals(lines = getDetailedCartLines()) {
  const subtotal = calculateSubtotal(lines);
  const delivery = lines.length > 0 ? CONFIG.deliveryFee : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function getUnavailableCartLines(lines = getDetailedCartLines()) {
  return lines.filter((line) => !line.product.available);
}

function hasUnavailableCartItems(lines = getDetailedCartLines()) {
  return getUnavailableCartLines(lines).length > 0;
}

function canCheckoutCart(lines = getDetailedCartLines()) {
  return lines.length > 0 && !hasUnavailableCartItems(lines);
}

function sanitizeStoredCart() {
  const validLines = Array.isArray(state.cart)
    ? state.cart.filter((line) => {
        const product = getProduct(line.productId);
        const variant = product ? getVariant(product, line.variantId) : null;
        return product && variant && Number.isFinite(Number(line.quantity)) && Number(line.quantity) > 0;
      }).map((line) => ({
        lineId: makeLineId(line.productId, line.variantId),
        productId: line.productId,
        variantId: line.variantId,
        quantity: clampNumber(Number(line.quantity), 1, 99)
      }))
    : [];

  const mergedLines = new Map();
  for (const line of validLines) {
    const existing = mergedLines.get(line.lineId);
    if (existing) existing.quantity = clampNumber(existing.quantity + line.quantity, 1, 99);
    else mergedLines.set(line.lineId, line);
  }

  state.cart = [...mergedLines.values()];
  saveCart();
}

function saveCart() {
  writeJson(STORAGE_KEYS.cart, state.cart);
}

function getOrCreatePendingOrderNumber() {
  const existing = readStoredValue(STORAGE_KEYS.pendingOrderNumber);
  if (existing) return existing;
  const generated = createOrderNumber();
  writeStoredValue(STORAGE_KEYS.pendingOrderNumber, generated);
  return generated;
}

function createOrderNumber() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  const parts = Object.fromEntries(formatter.formatToParts(now).map((part) => [part.type, part.value]));
  const date = `${parts.year}${parts.month}${parts.day}`;
  const time = `${parts.hour}${parts.minute}`;
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MZ-${date}-${time}-${random}`;
}

function getPhilippinesDateTime() {
  const now = new Date();
  const display = new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    dateStyle: 'full',
    timeStyle: 'medium'
  }).format(now);
  return { display, iso: now.toISOString() };
}

function getSuccessfulOrders() {
  const orders = readJson(STORAGE_KEYS.successfulOrders, []);
  return Array.isArray(orders) ? orders : [];
}

function recordSuccessfulOrder(orderNumber) {
  const orders = getSuccessfulOrders();
  orders.push({ orderNumber, recordedAt: new Date().toISOString() });
  writeJson(STORAGE_KEYS.successfulOrders, orders.slice(-25));
}

function isFormServiceConfigured() {
  return /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(CONFIG.formEndpoint) && !CONFIG.formEndpoint.includes('YOUR_FORM_ID');
}

function isGcashConfigured() {
  return !CONFIG.gcashAccountName.startsWith('[') && !CONFIG.gcashAccountNumber.startsWith('[');
}

function getProduct(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getVariant(product, variantId) {
  return product?.variants.find((variant) => variant.id === variantId);
}

function makeLineId(productId, variantId) {
  return `${productId}::${variantId}`;
}

function formatPeso(value) {
  return `₱${Number(value).toLocaleString('en-PH', { maximumFractionDigits: 0 })}`;
}

function clampNumber(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

function toggleNavigation() {
  const isOpen = elements.primaryNav.classList.toggle('is-open');
  elements.navToggle.setAttribute('aria-expanded', String(isOpen));
  elements.navToggle.querySelector('[aria-hidden="true"]').textContent = isOpen ? '×' : '☰';
  elements.navToggle.querySelector('.sr-only').textContent = isOpen ? 'Close navigation' : 'Open navigation';
}

function closeNavigation({ restoreFocus = false } = {}) {
  const wasOpen = elements.primaryNav.classList.contains('is-open');
  elements.primaryNav.classList.remove('is-open');
  elements.navToggle.setAttribute('aria-expanded', 'false');
  elements.navToggle.querySelector('[aria-hidden="true"]').textContent = '☰';
  elements.navToggle.querySelector('.sr-only').textContent = 'Open navigation';
  if (restoreFocus && wasOpen) elements.navToggle.focus();
}

function handleGlobalKeydown(event) {
  if (event.key === 'Escape' && elements.cartDrawer.classList.contains('is-open')) {
    event.preventDefault();
    closeCart();
    return;
  }

  if (event.key === 'Escape' && elements.primaryNav.classList.contains('is-open')) {
    event.preventDefault();
    closeNavigation({ restoreFocus: true });
    return;
  }

  if (event.key === 'Tab' && elements.cartDrawer.classList.contains('is-open')) {
    trapFocusWithin(event, elements.cartDrawer);
    return;
  }

  if (event.key === 'Tab' && isCheckoutOpen()) trapFocusWithin(event, elements.checkoutDialog);
}

function trapFocusWithin(event, container) {
  const focusable = [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !isElementUnavailableForFocus(element, container));

  if (focusable.length === 0) {
    event.preventDefault();
    container.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function isElementUnavailableForFocus(element, boundary) {
  let current = element;
  while (current) {
    if (current.disabled || current.hidden || current.getAttribute?.('aria-hidden') === 'true' || current.hasAttribute?.('hidden')) return true;
    if (current === boundary) break;
    current = current.parentElement;
  }
  return false;
}

function setPageInert(isInert) {
  if (typeof document.querySelectorAll !== 'function') return;
  for (const element of document.querySelectorAll('.site-header, main, .site-footer')) {
    if (isInert) element.setAttribute('inert', '');
    else element.removeAttribute('inert');
  }
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  state.toastTimer = window.setTimeout(() => elements.toast.classList.remove('is-visible'), 2400);
}

function installImageFallbacks(container) {
  for (const image of container.querySelectorAll('[data-fallback-image]')) {
    image.addEventListener('error', () => {
      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
      if (!image.src.endsWith('/images/generic-drink.jpg')) image.src = 'images/generic-drink.jpg';
    }, { once: true });
  }
}

function buildResponsiveImageAttributes(imagePath, sizes) {
  const basePath = imagePath.replace(/\.[^./]+$/, '');
  return `srcset="${basePath}-480.webp 480w, ${basePath}-800.webp 800w, ${basePath}-1200.webp 1200w" sizes="${sizes}"`;
}

function isCheckoutOpen() {
  return elements.checkoutDialog?.open || elements.checkoutDialog?.hasAttribute('open');
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from localStorage.`, error);
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key} to localStorage.`, error);
    showToast('Your browser could not save the cart. Keep this page open.');
  }
}

function readStoredValue(key) {
  try { return localStorage.getItem(key); }
  catch (_) { return null; }
}

function writeStoredValue(key, value) {
  try { localStorage.setItem(key, value); }
  catch (error) { console.warn(`Could not save ${key}.`, error); }
}

function removeStoredValue(key) {
  try { localStorage.removeItem(key); }
  catch (error) { console.warn(`Could not remove ${key}.`, error); }
}
