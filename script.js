/*
  MEOWZIE'S CAFE ONLINE ORDERING
  Plain JavaScript—no framework and no build step.

  IMPORTANT OWNER EDITS:
  1. Replace formEndpoint with your Formspree endpoint.
  2. Replace gcashAccountName and gcashAccountNumber.
  3. Keep deliveryFee at 29 unless you intentionally change the business policy.
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
    imageAlt: 'Temporary product image for Vanilla Latte',
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
    imageAlt: 'Temporary product image for Caramel Latte',
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
    imageAlt: 'Temporary product image for Hazelnut Latte',
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
    imageAlt: 'Temporary product image for Spanish Latte',
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
    imageAlt: 'Temporary product image for Matcha Latte',
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
    imageAlt: 'Temporary product image for Classic Milk Tea',
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
    imageAlt: 'Temporary product image for Ube Taro Milk Tea',
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
    imageAlt: 'Temporary product image for Thai Tea',
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
    imageAlt: 'Temporary product image for Chuckie Float',
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
    imageAlt: 'Temporary product image for Coke Float',
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
    imageAlt: 'Temporary product image for Hot Coffee',
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
    imageAlt: 'Temporary product image for Hot Coffee with Milk',
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
    imageAlt: 'Temporary product image for Hot Chocolate',
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
  lastFocusedElement: null,
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
    'categoryFilters', 'productGrid', 'featuredGrid', 'cartBackdrop', 'cartDrawer',
    'closeCartButton', 'cartItems', 'emptyCartMessage', 'cartFooter', 'cartSubtotal',
    'cartDelivery', 'cartTotal', 'continueShoppingButton', 'checkoutButton',
    'checkoutDialog', 'closeCheckoutButton', 'checkoutOrderNumber', 'checkoutForm',
    'checkoutItems', 'checkoutSubtotal', 'checkoutDelivery', 'checkoutTotal',
    'gcashTotal', 'confirmationTotal', 'gcashAccountName', 'gcashAccountNumber',
    'submissionStatus', 'submitOrderButton', 'backToCartButton', 'checkoutFormView',
    'confirmationView', 'confirmationOrderNumber', 'finishOrderButton', 'toast',
    'mobileNumber', 'mobileNumberError'
  ];

  for (const id of ids) elements[id] = document.getElementById(id);
}

function bindEvents() {
  elements.navToggle.addEventListener('click', toggleNavigation);
  elements.primaryNav.addEventListener('click', () => closeNavigation());

  elements.openCartButton.addEventListener('click', openCart);
  elements.menuCartButton.addEventListener('click', openCart);
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
    closeCheckout();
    openCart();
  });
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
  const featured = PRODUCTS.filter((product) => product.featured && product.available).slice(0, 3);
  elements.featuredGrid.innerHTML = featured.map((product) => {
    const lowestPrice = Math.min(...product.variants.map((variant) => variant.price));
    return `
      <article class="featured-card">
        <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" data-fallback-image>
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
    if (state.activeCategory === 'all') return true;
    if (state.activeCategory === 'drinks') return product.menuGroup === 'drinks';
    if (state.activeCategory === 'food') return product.menuGroup === 'food';

    return product.category === state.activeCategory;
  });

  elements.productGrid.innerHTML = visibleProducts.map((product) => {

  elements.productGrid.innerHTML = visibleProducts.map((product) => {
    const defaultVariant = product.variants[0];
    const hasMultipleVariants = product.variants.length > 1;
    const badge = product.favorite
      ? '<span class="product-badge"><span aria-hidden="true">🐾</span> Meowzie’s Favorite</span>'
      : (!product.available ? '<span class="product-badge unavailable-badge">Unavailable</span>' : '');

    const variantControl = hasMultipleVariants
      ? `<select class="select-control product-variant" id="variant-${product.id}" data-product-id="${product.id}" aria-label="Size for ${product.name}">
          ${product.variants.map((variant) => `<option value="${variant.id}" data-price="${variant.price}">${variant.label} — ${formatPeso(variant.price)}</option>`).join('')}
        </select>`
      : `<div class="select-control" id="variant-${product.id}" aria-label="Size ${defaultVariant.label}">${defaultVariant.label}</div>`;

    return `
      <article class="product-card ${product.available ? '' : 'is-unavailable'}" data-product-card="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.imageAlt}" class="product-image" loading="lazy" data-fallback-image>
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
                <label class="field-label" for="variant-${product.id}">${product.category === 'food' ? 'Option' : 'Size'}</label>
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
            <button class="button button-primary add-button" type="button" data-product-action="add" data-product-id="${product.id}" ${product.available ? '' : 'disabled'}>
              ${product.available ? 'Add to Cart' : 'Currently unavailable'}
            </button>
            <div class="product-feedback" id="feedback-${product.id}" aria-live="polite"></div>
          </div>
        </div>
      </article>`;
  }).join('');

  installImageFallbacks(elements.productGrid);
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
  const lineId = makeLineId(productId, variantId);
  const existingLine = state.cart.find((line) => line.lineId === lineId);

  if (existingLine) {
    existingLine.quantity = clampNumber(existingLine.quantity + quantity, 1, 99);
  } else {
    state.cart.push({ lineId, productId, variantId, quantity });
  }

  saveCart();
  renderCart();
  quantityInput.value = 1;

  const feedback = document.getElementById(`feedback-${productId}`);
  feedback.textContent = `${quantity} × ${product.name} added to your cart.`;
  window.setTimeout(() => { if (feedback) feedback.textContent = ''; }, 2600);
  showToast(`${product.name} added to cart`);
}

function handleCartClick(event) {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;

  const lineId = button.dataset.lineId;
  const action = button.dataset.cartAction;
  const line = state.cart.find((item) => item.lineId === lineId);
  if (!line) return;

  if (action === 'increase') line.quantity = clampNumber(line.quantity + 1, 1, 99);
  if (action === 'decrease') line.quantity = clampNumber(line.quantity - 1, 1, 99);
  if (action === 'remove') state.cart = state.cart.filter((item) => item.lineId !== lineId);

  saveCart();
  renderCart();
}

function renderCart() {
  const detailedLines = getDetailedCartLines();
  const itemCount = detailedLines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = calculateSubtotal(detailedLines);
  const delivery = itemCount > 0 ? CONFIG.deliveryFee : 0;
  const total = subtotal + delivery;

  elements.cartCount.textContent = String(itemCount);
  elements.cartCount.setAttribute('aria-label', `${itemCount} item${itemCount === 1 ? '' : 's'} in cart`);
  elements.emptyCartMessage.hidden = detailedLines.length > 0;
  elements.cartFooter.hidden = detailedLines.length === 0;

  elements.cartItems.innerHTML = detailedLines.map((line) => `
    <article class="cart-item">
      <img src="${line.product.image}" alt="${line.product.imageAlt}" loading="lazy" data-fallback-image>
      <div>
        <div class="cart-item-top">
          <div>
            <h3>${line.product.name}</h3>
            <p class="cart-item-meta">${line.variant.label} · ${formatPeso(line.variant.price)} each</p>
          </div>
          <strong>${formatPeso(line.variant.price * line.quantity)}</strong>
        </div>
        <div class="cart-line-actions">
          <div class="quantity-control cart-quantity">
            <button type="button" data-cart-action="decrease" data-line-id="${line.lineId}" aria-label="Decrease ${line.product.name} quantity">−</button>
            <span aria-label="Quantity ${line.quantity}">${line.quantity}</span>
            <button type="button" data-cart-action="increase" data-line-id="${line.lineId}" aria-label="Increase ${line.product.name} quantity">+</button>
          </div>
          <button class="remove-button" type="button" data-cart-action="remove" data-line-id="${line.lineId}">Remove</button>
        </div>
      </div>
    </article>`).join('');

  installImageFallbacks(elements.cartItems);
  elements.cartSubtotal.textContent = formatPeso(subtotal);
  elements.cartDelivery.textContent = formatPeso(delivery);
  elements.cartTotal.textContent = formatPeso(total);

  if (isCheckoutOpen() && detailedLines.length > 0) renderCheckoutSummary();
}

function openCart() {
  closeNavigation();
  state.lastFocusedElement = document.activeElement;
  elements.cartBackdrop.hidden = false;
  elements.cartDrawer.classList.add('is-open');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  elements.openCartButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('no-scroll');
  window.setTimeout(() => elements.closeCartButton.focus(), 30);
}

function closeCart({ restoreFocus = true } = {}) {
  elements.cartDrawer.classList.remove('is-open');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  elements.openCartButton.setAttribute('aria-expanded', 'false');
  elements.cartBackdrop.hidden = true;
  document.body.classList.remove('no-scroll');
  if (restoreFocus && state.lastFocusedElement instanceof HTMLElement) state.lastFocusedElement.focus();
}

function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Add at least one item before checkout');
    return;
  }

  closeCart({ restoreFocus: false });
  state.lastFocusedElement = document.activeElement;
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
  document.body.classList.add('no-scroll');
  window.setTimeout(() => document.getElementById('fullName').focus(), 30);
}

function closeCheckout() {
  if (state.isSubmitting) return;
  saveCheckoutDraft();
  if (typeof elements.checkoutDialog.close === 'function') elements.checkoutDialog.close();
  else elements.checkoutDialog.removeAttribute('open');
  document.body.classList.remove('no-scroll');
  if (state.lastFocusedElement instanceof HTMLElement) state.lastFocusedElement.focus();
}

function renderCheckoutSummary() {
  const lines = getDetailedCartLines();
  const subtotal = calculateSubtotal(lines);
  const delivery = lines.length > 0 ? CONFIG.deliveryFee : 0;
  const total = subtotal + delivery;

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

  if (state.cart.length === 0) {
    elements.submissionStatus.textContent = 'Your cart is empty. Return to the menu and add at least one item.';
    return;
  }

  const mobileIsValid = validateMobileNumber();
  if (!elements.checkoutForm.checkValidity() || !mobileIsValid) {
    markInvalidFields();
    elements.checkoutForm.reportValidity();
    elements.submissionStatus.textContent = 'Please complete every required field and correct the highlighted information.';
    focusFirstInvalidField();
    return;
  }

  if (!isFormServiceConfigured()) {
    elements.submissionStatus.textContent = 'Order email service is not configured yet. The café owner must replace YOUR_FORM_ID in script.js before accepting live orders. Your cart and form information have been preserved.';
    return;
  }

  if (!isGcashConfigured()) {
    elements.submissionStatus.textContent = 'The GCash account name or number is still a placeholder. The café owner must configure payment details before accepting live orders. Your cart and form information have been preserved.';
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
    elements.submissionStatus.textContent = `${error.message || 'The order could not be submitted.'} Please check your connection and try again. Your cart and form information have not been deleted. Use the same order number on any retry.`;
  } finally {
    state.isSubmitting = false;
    elements.submitOrderButton.disabled = false;
    elements.submitOrderButton.textContent = 'Submit order for verification';
  }
}

function buildSubmissionFormData(orderNumber) {
  const formData = new FormData(elements.checkoutForm);
  const lines = getDetailedCartLines();
  const subtotal = calculateSubtotal(lines);
  const delivery = CONFIG.deliveryFee;
  const total = subtotal + delivery;
  const dateTime = getPhilippinesDateTime();

  const itemLines = lines.map((line, index) =>
    `${index + 1}. ${line.product.name} | Size: ${line.variant.label} | Qty: ${line.quantity} | Unit: ${formatPeso(line.variant.price)} | Line total: ${formatPeso(line.variant.price * line.quantity)}`
  );

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

function sanitizeStoredCart() {
  state.cart = Array.isArray(state.cart)
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
}

function closeNavigation() {
  elements.primaryNav.classList.remove('is-open');
  elements.navToggle.setAttribute('aria-expanded', 'false');
  elements.navToggle.querySelector('[aria-hidden="true"]').textContent = '☰';
}

function handleGlobalKeydown(event) {
  if (event.key === 'Escape' && elements.cartDrawer.classList.contains('is-open')) closeCart();
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
      if (!image.src.endsWith('/images/generic-drink.jpg')) image.src = 'images/generic-drink.jpg';
    }, { once: true });
  }
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
