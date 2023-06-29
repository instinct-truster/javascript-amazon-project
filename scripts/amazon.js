// To combine all of the following HTML together into one string, we create a variable at the top called "productsHTML", make it equal to an empty string to start, then each time we go through the loop, we'll add the HTML string.

let productsHTML = "";

products.forEach((product) => {
  // productsHTML = productsHTML + `` can be shortened to the following.
  // This is called the "Accumulator Pattern" (we loop through an array, and each time through we add to the result.)
  productsHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}" />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png" />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary">Add to Cart</button>
        </div>`;
});
console.log(productsHTML);

// Now to put it on the web page using the DOM, add a "js-class" to mark our target for use. Then delete the older HTML code that was replaced.

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// The benefit of "generating the HTML" with JS is not having to copy-paste the "rote" HTML over and over, but rather now we only need to add the data for each new product.
