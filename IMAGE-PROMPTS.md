# Meowzie’s Cafe Product Image Prompts

Use these prompts with an image generator that permits commercial use. Generate each image in a **4:3 landscape format**, ideally **1200 × 900 pixels**, with the same cup style, table, lighting, lens angle, and background across the set.

## Shared visual direction

Add this text to every prompt:

> Realistic commercial café product photograph, warm diffused window light, cozy premium-but-affordable local café atmosphere, cream plaster background, espresso-brown wood table, small olive-green coffee leaves in soft focus, clean composition, 4:3 landscape, same clear takeaway cup style across all cold drinks, same cream ceramic cup style across all hot drinks, condensation and realistic ice, no people, no hands, no text, no watermark, no brand name, no incorrect logo, no extra drinks, suitable for an online ordering product card.

Save each final image in the project’s `images` folder using the exact filename shown. Replacing a file with the same name requires no code change.

## Individual prompts

### `vanilla-latte.jpg`
A medium iced vanilla latte in a clear takeaway cup, layered espresso and creamy milk, pale tan color, square ice cubes, subtle vanilla-bean styling nearby. [Add shared visual direction.]

### `caramel-latte.jpg`
A medium iced caramel latte in a clear takeaway cup, espresso and milk with visible caramel ribbons inside the cup and a light caramel drizzle, amber-brown color. [Add shared visual direction.]

### `hazelnut-latte.jpg`
A medium iced hazelnut latte in a clear takeaway cup, creamy coffee color, a few whole hazelnuts placed discreetly beside the cup. [Add shared visual direction.]

### `spanish-latte.jpg`
A medium iced Spanish latte in a clear takeaway cup, rich condensed-milk creaminess, distinct espresso layer, glossy velvety appearance. [Add shared visual direction.]

### `matcha-latte.jpg`
A medium iced matcha latte in a clear takeaway cup, vibrant natural green matcha blended with milk, soft green and cream layers, realistic ice. [Add shared visual direction.]

### `classic-milk-tea.jpg`
A 22 oz classic milk tea in a clear takeaway cup with black tapioca pearls, warm beige tea color, black straw, realistic condensation. [Add shared visual direction.]

### `ube-taro-milk-tea.jpg`
A 22 oz ube taro milk tea in a clear takeaway cup, soft natural purple color, black tapioca pearls, black straw, creamy texture. [Add shared visual direction.]

### `thai-tea.jpg`
A 22 oz Thai tea in a clear takeaway cup, vivid orange tea with a creamy milk swirl, black straw, realistic ice and condensation, hero-product treatment but no badge or text in the image. [Add shared visual direction.]

### `chuckie-float.jpg`
A 12 oz chocolate drink float in a clear cup, deep chocolate color, generous vanilla ice-cream scoop or creamy float topping, light chocolate drizzle, no package branding. [Add shared visual direction.]

### `coke-float.jpg`
A 12 oz cola float in a clear cup, dark sparkling cola, realistic bubbles and ice, vanilla ice-cream scoop on top, no cola brand logos. [Add shared visual direction.]

### `hot-coffee.jpg`
An 8 oz black hot coffee in a cream ceramic cup, visible steam, rich dark surface, a few roasted coffee beans nearby. [Add shared visual direction, using the hot-drink cup style.]

### `hot-coffee-with-milk.jpg`
An 8 oz hot coffee with milk in a cream ceramic cup, light caramel-brown color, subtle steam, smooth surface, no latte art required. [Add shared visual direction, using the hot-drink cup style.]

### `hot-chocolate.jpg`
An 8 oz hot chocolate in a cream ceramic cup, deep chocolate-brown drink, gentle steam, a small simple cream swirl, no marshmallow overload. [Add shared visual direction, using the hot-drink cup style.]

## Replacement steps

1. Generate the image.
2. Crop it to 4:3 landscape if needed.
3. Resize to about 1200 × 900 pixels.
4. Export as JPG at roughly 80–88% quality.
5. Confirm the filename is exact, including lowercase letters and hyphens.
6. Copy it into `images/` and approve replacing the temporary file.
7. Open `index.html`, refresh with `Ctrl + F5`, and check the new image.
8. Upload the replacement to GitHub and commit the change.
