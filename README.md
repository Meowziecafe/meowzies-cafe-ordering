# Meowzie’s Cafe Online Ordering Website

This folder contains a complete static website built with plain HTML, CSS, and JavaScript. It requires no framework, package manager, terminal, or command-line build process.

## Safety status before launch

The starter package is intentionally **not ready to take live money yet**. Before launch, you must:

1. Replace `YOUR_FORM_ID` in `script.js` with a real Formspree form ID.
2. Replace the GCash account-name and number placeholders in `script.js`.
3. Replace `images/gcash-qr-placeholder.png` with the real, tested QR image.
4. Replace the contact and business-information placeholders in `index.html`.
5. Test the entire order path with a small test order.

The actual GCash QR image supplied during planning was deliberately not bundled into this starter package, so a draft or test deployment cannot accidentally direct customers to a live payment account.

## Folder structure

```text
meowzies-cafe-website/
├── index.html
├── styles.css
├── script.js
├── README.md
├── IMAGE-PROMPTS.md
└── images/
    ├── logo.png
    ├── hero-kanlaon.jpg
    ├── drinks-menu-reference.jpg
    ├── gcash-qr-placeholder.png
    ├── generic-drink.jpg
    ├── vanilla-latte.jpg
    ├── caramel-latte.jpg
    ├── hazelnut-latte.jpg
    ├── spanish-latte.jpg
    ├── matcha-latte.jpg
    ├── classic-milk-tea.jpg
    ├── ube-taro-milk-tea.jpg
    ├── thai-tea.jpg
    ├── chuckie-float.jpg
    ├── coke-float.jpg
    ├── hot-coffee.jpg
    ├── hot-coffee-with-milk.jpg
    └── hot-chocolate.jpg
```

## How the system works

- **GitHub repository:** stores the website files and keeps a history of changes.
- **GitHub Pages:** publishes those public files as a static website.
- **Browser local storage:** keeps the customer’s cart and checkout draft on that specific device and browser.
- **Formspree:** receives the submitted form and emails the order to the address linked to the Formspree account.
- **GCash:** the customer manually sends the displayed total. The website does not automatically confirm payment.
- **Café staff:** manually compare the submitted reference number and receipt with the payment actually received.

The same pending order number is reused on retry. This helps staff recognize a duplicate if Formspree received the first request but the customer’s connection failed before the success response returned.

## Open the website locally on Windows

1. Extract the ZIP file.
2. Open the `meowzies-cafe-website` folder.
3. Double-click `index.html`.
4. The website should open in your default browser.
5. Add a drink to the cart, refresh the page, and confirm the cart remains.
6. Open checkout. A deliberate configuration warning will appear if you try to submit before setting up Formspree and GCash.

For easier editing, install Visual Studio Code, then choose **File → Open Folder** and select this project folder.

## Windows file-extension warning

In File Explorer, choose **View → Show → File name extensions**. Confirm that your files are named `index.html`, `styles.css`, and `script.js`—not `index.html.txt` or `script.js.txt`.

If using Notepad’s **Save As** window:

- Set **Save as type** to **All files**.
- Enter the full filename, including the extension.
- Choose **UTF-8** encoding so the peso sign and curly apostrophe display correctly.

## Configure Formspree order emails

Formspree’s current dashboard labels may change slightly, but the general setup is:

1. Create or sign in to a Formspree account at `https://formspree.io/`.
2. Verify the email address that should receive orders.
3. Create a new project, then create a new form inside it.
4. Name the form something obvious, such as `Meowzie’s Cafe Orders`.
5. Open the form’s integration/setup page.
6. Copy the form ID or endpoint. It normally looks like `https://formspree.io/f/abcxyzde`.
7. Open `script.js`.
8. Near the top, find:

   ```js
   formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
   ```

9. Replace only `YOUR_FORM_ID` with your real form ID.
10. Save the file.
11. In the Formspree dashboard, confirm email notifications are enabled for the café’s order email.
12. Submit a test order with the customer name `TEST ORDER — DO NOT PREPARE` and a GCash reference such as `TEST-000001` only after temporarily using a test-safe payment flow. Never claim to have paid when no test payment was sent.

Formspree’s Free tier currently starts at 50 submissions per month, can link up to two notification email addresses, and stores 30 days of submission history. Check the live Formspree account-limits page before launch because plans can change.

## Configure GCash

Open `script.js` and replace:

```js
gcashAccountName: '[ADD GCASH ACCOUNT NAME]',
gcashAccountNumber: '[ADD GCASH MOBILE NUMBER]'
```

Then replace `images/gcash-qr-placeholder.png` with the real QR image while keeping the exact filename `gcash-qr-placeholder.png`. Keeping the filename means no code change is needed.

Use a sharp PNG or high-quality JPG. Keep the full quiet white border around the QR code. Do not crop into the square modules. Test the published QR with a different phone before accepting orders.

## GitHub browser upload

1. Sign in to GitHub.
2. Click the **+** menu in the upper-right corner, then **New repository**.
3. Repository name: `meowzies-cafe-ordering`.
4. Description: `Official online ordering website for Meowzie’s Cafe`.
5. Choose **Public** for the simplest free GitHub Pages setup. Remember that the website and its QR code will be public.
6. You may leave **Add a README** unchecked because this package already includes one.
7. Click **Create repository**.
8. Click **uploading an existing file**, or **Add file → Upload files**.
9. Drag the contents of this project folder into the upload area. Make sure the `images` folder is included.
10. Commit message: `Add first working cafe website`.
11. Commit directly to the `main` branch.
12. Click **Commit changes**.

## Publish with GitHub Pages

1. Open the repository.
2. Click **Settings**. If hidden, open the overflow menu and choose **Settings**.
3. In the left sidebar under **Code and automation**, click **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **main**.
6. Select folder **/(root)**.
7. Click **Save**.
8. Wait a few minutes, then refresh the Pages settings screen.
9. GitHub will display the public website address, normally in this format:
   `https://YOUR-USERNAME.github.io/meowzies-cafe-ordering/`
10. Open the address in a private/incognito window and run the test checklist below.

When you upload or edit a file and commit it to `main`, GitHub Pages republishes the site. It can take several minutes. Use a hard refresh (`Ctrl + F5`) or a private window if you still see an older copy.

## Update a file later in GitHub

1. Open the repository.
2. Click the file.
3. Click the pencil icon.
4. Make the change.
5. Click **Commit changes**.
6. Use a meaningful message such as `Update Thai Tea price`.
7. Wait for GitHub Pages to republish.

For an image, use **Add file → Upload files**, upload the replacement with the same filename, and confirm replacement/commit.

## Restore an earlier version

For a single file in the browser:

1. Open the file in GitHub.
2. Click **History**.
3. Open the earlier version.
4. Click **Raw**, copy the old content, return to the current file, click the pencil icon, paste the old content, and commit it as a new change.

For easier full-commit reversal, install GitHub Desktop. In its **History** tab, right-click the bad commit and choose **Revert Changes in Commit**, then push the new revert commit.

## Complete test checklist

### Visual and navigation

- [ ] Official logo appears in the header and coffee section.
- [ ] Hero image loads.
- [ ] Home, Menu, About, and Contact links move to the correct sections.
- [ ] Mobile navigation opens and closes.
- [ ] Cart opens and closes on phone and desktop.
- [ ] Text is readable at 200% browser zoom.
- [ ] Keyboard focus is visible.

### Products and official prices

- [ ] Vanilla Latte: Medium ₱65, Large ₱85.
- [ ] Caramel Latte: Medium ₱65, Large ₱85.
- [ ] Hazelnut Latte: Medium ₱65, Large ₱85.
- [ ] Spanish Latte: Medium ₱65, Large ₱85.
- [ ] Matcha Latte: Medium ₱69, Large ₱89.
- [ ] Classic Milk Tea: 22 oz ₱79.
- [ ] Ube Taro Milk Tea: 22 oz ₱79.
- [ ] Thai Tea: 22 oz ₱99 and marked Meowzie’s Favorite.
- [ ] Chuckie Float: 12 oz ₱59.
- [ ] Coke Float: 12 oz ₱65.
- [ ] Hot Coffee: 8 oz ₱39.
- [ ] Hot Coffee with Milk: 8 oz ₱49.
- [ ] Hot Chocolate: 8 oz ₱49.
- [ ] Every product photograph loads or falls back to `generic-drink.jpg`.
- [ ] Category filters show the correct products.

### Cart

- [ ] Add one of every product and confirm each name, size, and price.
- [ ] Increase and decrease quantity.
- [ ] Remove a product.
- [ ] Refresh the page and confirm the cart remains.
- [ ] Delivery fee is ₱29 whenever at least one product is present.
- [ ] An empty cart does not charge a delivery fee.

### Sample calculation

Add:

- 2 × Vanilla Latte, Large: 2 × ₱85 = ₱170
- 1 × Thai Tea, 22 oz: ₱99
- 1 × Hot Chocolate, 8 oz: ₱49

Expected subtotal: **₱318**  
Delivery fee: **₱29**  
Expected final total: **₱347**

### Checkout validation

- [ ] Empty required fields prevent submission.
- [ ] `09171234567` passes mobile validation.
- [ ] `+63 917 123 4567` passes mobile validation.
- [ ] `12345` fails mobile validation.
- [ ] Complete address, barangay, landmark, and delivery instructions are required.
- [ ] GCash sender name and reference number are required.
- [ ] Payment-confirmation checkbox is required.
- [ ] Page warns never to provide MPIN or OTP.
- [ ] Page says payment requires manual verification.

### Failure behavior

Before Formspree is configured, attempt submission:

- [ ] A configuration error appears.
- [ ] No false confirmation appears.
- [ ] Cart remains.
- [ ] Entered customer information remains after refresh.

After Formspree is configured, temporarily disconnect the internet immediately before submission:

- [ ] A useful network error appears.
- [ ] Cart remains.
- [ ] Customer information remains.
- [ ] Retry uses the same order number.

### Success behavior

- [ ] Formspree receives the order.
- [ ] Notification email arrives.
- [ ] Email includes order number, date/time, customer details, every item, size, quantity, unit price, subtotal, ₱29 delivery fee, total, GCash sender, reference, and notes.
- [ ] Confirmation screen shows the same order number.
- [ ] Confirmation says payment is pending manual verification.
- [ ] Cart clears only after the successful response.
- [ ] Refreshing after success does not restore the old cart.
- [ ] Rapidly clicking the submit button does not create multiple requests.
- [ ] Café staff treat repeated emails with the same order number as one order.

### QR code

- [ ] Real QR image replaces the placeholder.
- [ ] QR remains sharp on mobile.
- [ ] QR scans from a second device.
- [ ] Scanned recipient matches the intended GCash account.
- [ ] A small test payment reaches the intended account before public launch.

## Common edits

### Change a price

File: `script.js`  
Section: `const PRODUCTS`  
Change the correct `price` value in the drink’s `variants` array.

### Add a drink

File: `script.js`  
Section: `const PRODUCTS`  
Copy one complete product object, give it a unique lowercase `id`, update the category, description, image filename, and variants, then add the matching image to `images/`.

### Remove a drink

File: `script.js`  
Section: `const PRODUCTS`  
Delete the complete product object, including its surrounding braces and the correct comma. A safer temporary choice is to mark it unavailable.

### Mark a drink unavailable

File: `script.js`  
In that product, change:

```js
available: true,
```

to:

```js
available: false,
```

### Change a photograph

Place the replacement in `images/` using the same filename. A square or 4:3 landscape image at roughly 1200 × 900 pixels works well. Compress it so the file is ideally under 500 KB.

### Change the delivery fee

File: `script.js`  
Near the top:

```js
deliveryFee: 29,
```

Change only the number. The current official requirement is exactly ₱29.

### Change GCash QR

Replace `images/gcash-qr-placeholder.png` with the new image using the exact same filename.

### Change café email

Change the notification email inside the Formspree dashboard. No email password belongs in the website code.

### Edit About Us or contact information

File: `index.html`  
Search for `OWNER EDIT` or the visible bracketed placeholders.

### Change featured drinks

File: `script.js`  
Set `featured: true` on the three drinks you want. Set it to `false` on the others.

## Product photography

The bundled JPG files are polished temporary illustrations, not real product photos. See `IMAGE-PROMPTS.md` for consistent generation prompts and exact filenames. Replace each file while preserving its filename to avoid editing code.

