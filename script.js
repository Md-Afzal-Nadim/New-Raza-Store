const OWNER_PHONE_DEFAULT = "91 7827158297";

const PRODUCTS = [
  // Taal (Oil)
  {
    id: 1,
    category: "taal",
    name: "Fortune refined",
    price: 129,
    img: "image/fortune refine image.jpg",
  },
  {
    id: 2,
    category: "taal",
    name: "Fortune Oil  1L",
    price: 179,
    img: "image/fortune oil.webp",
  },
  {
    id: 3,
    category: "taal",
    name: "Dhara Mustard Oil 1L",
    price: 179,
    img: "image/dhara oil.webp",
  },
  {
    id: 4,
    category: "taal",
    name: "Bail Kohlu Oil 1L",
    price: 180,
    img: "image/bail kohlu oil.jpg",
  },
  {
    id: 5,
    category: "taal",
    name: "Babaji Oil 1L",
    price: 165,
    img: "image/babaji oil.webp",
  },
  {
    id: 6,
    category: "taal",
    name: "Fortune Oil 5L",
    price: 900,
    img: "image/5l fortune oil.png",
  },
  {
    id: 7,
    category: "taal",
    name: "Babaji oil 2L",
    price: 330,
    img: "image/5l babaji oil.webp",
  },
  {
    id: 8,
    category: "taal",
    name: "Bail Kohlu Oil 2L",
    price: 360,
    img: "image/5l bail kohlu.jpg",
  },

  //Aata
  {
    id: 9,
    category: "aata",
    name: "Ashirwaad Aata 10kg",
    price: 459,
    img: "image/ashirwaad aata.jpg",
  },
  {
    id: 10,
    category: "aata",
    name: "Ashirwaad Aata 5kg",
    price: 239,
    img: "image/ashirwaad aata.jpg",
  },
  {
    id: 11,
    category: "aata",
    name: "Shiri Bhog Aata 5kg",
    price: 187,
    img: "image/5kg aata.jpeg",
  },
  {
    id: 12,
    category: "aata",
    name: "shiri Bhog Aata 10kg",
    price: 349,
    img: "image/10kg aata.jpeg",
  },

  //Dal
  {
    id: 13,
    category: "daal",
    name: "Chana 1kg",
    price: 83,
    img: "image/chana dal.avif",
  },
  {
    id: 14,
    category: "daal",
    name: "Chana Dal 1kg",
    price: 83,
    img: "image/chana dall.webp",
  },
  {
    id: 15,
    category: "daal",
    name: "Masoor Dal 1kg",
    price: 83,
    img: "image/masoor dal.webp",
  },
  {
    id: 16,
    category: "daal",
    name: "Arhar Dal 1kg",
    price: 115,
    img: "image/arhar dal.webp",
  },
  {
    id: 17,
    category: "daal",
    name: "Moong Dal 1kg",
    price: 115,
    img: "image/moong-dal.jpg",
  },
  {
    id: 18,
    category: "daal",
    name: "Chhilka Moong Dal 1kg",
    price: 115,
    img: "image/chilka moong dal.webp",
  },
  {
    id: 19,
    category: "daal",
    name: "Kali Urad Dal 1kg",
    price: 144,
    img: "image/kali-urad-dall.webp",
  },
  {
    id: 20,
    category: "daal",
    name: "Matar Dal 1kg",
    price: 85,
    img: "image/matar_dal.jpg",
  },
   {
    id: 63,
    category: "daal",
    name: "White Urad Dal 1kg",
    price: 115,
    img: "image/white-urad-dal.webp",
  },


  //Masala
  {
    id: 21,
    category: "masala",
    name: "200gm Mirch",
    price: 99,
    img: "image/masala/mircha.webp",
  },
  {
    id: 22,
    category: "masala",
    name: "200gm Haldi",
    price: 99,
    img: "image/masala/haldi.jpg",
  },
  {
    id: 23,
    category: "masala",
    name: "200gm Dhaniya",
    price: 99,
    img: "image/masala/dhaniya.jpeg",
  },
  {
    id: 24,
    category: "masala",
    name: "50gm Chicken Tikka",
    price: 105,
    img: "image/masala/shan chicken tikka.png",
  },
  {
    id: 25,
    category: "masala",
    name: "100gm Meat Masala",
    price: 105,
    img: "image/masala/meat masala.png",
  },
  {
    id: 26,
    category: "masala",
    name: "60gm Chicken Biryani",
    price: 99,
    img: "image/masala/chiken biryani masala.jpeg",
  },
  {
    id: 27,
    category: "masala",
    name: "50gm Korma Masala",
    price: 105,
    img: "image/masala/korma masala.webp",
  },
  {
    id: 28,
    category: "masala",
    name: "60gm Nihari",
    price: 99,
    img: "image/masala/nihari masala.webp",
  },
  {
    id: 29,
    category: "masala",
    name: "60gm Tikka Masala",
    price: 105,
    img: "image/masala/tikka masala.webp",
  },
  {
    id: 30,
    category: "masala",
    name: "60gm Bombay Biryani",
    price: 99,
    img: "image/masala/bombay biryani masala.webp",
  },
  {
    id: 31,
    category: "masala",
    name: "100gm Meat Masala",
    price: 90,
    img: "image/masala/everest meat masala.webp",
  },
  {
    id: 32,
    category: "masala",
    name: "100gm Sabji Masala",
    price: 70,
    img: "image/masala/everest-sabji-masala.jpg",
  },
  {
    id: 33,
    category: "masala",
    name: "100gm Zeera Powder",
    price: 90,
    img: "image/masala/everest zeera.webp",
  },

  // Biscuit
  {
    id: 34,
    category: "biscuit",
    name: "Dream Lite 12 pcs",
    price: 114,
    img: "image/biscuit/dream lite.jpg",
  },
  {
    id: 35,
    category: "biscuit",
    name: "Good Day 12 pcs",
    price: 114,
    img: "image/biscuit/gooday.webp",
  },
  {
    id: 36,
    category: "biscuit",
    name: "Meri Gold 12 pcs",
    price: 114,
    img: "image/biscuit/meri gold.webp",
  },
  {
    id: 37,
    category: "biscuit",
    name: "Moms Magic 12 pcs",
    price: 114,
    img: "image/biscuit/moms magic.jpg",
  },
  {
    id: 38,
    category: "biscuit",
    name: "Milk Biscuit 12 pcs",
    price: 114,
    img: "image/biscuit/milk biskut.webp",
  },
  {
    id: 39,
    category: "biscuit",
    name: "Oreo 12 pcs",
    price: 114,
    img: "image/biscuit/oreo.jpg",
  },
  {
    id: 40,
    category: "biscuit",
    name: "Burwan 12 pcs",
    price: 114,
    img: "image/biscuit/burwan.jpg",
  },
  {
    id: 41,
    category: "biscuit",
    name: "Nutri Choice 5 pcs",
    price: 112,
    img: "image/biscuit/nutri choice.jpg",
  },
  {
    id: 42,
    category: "biscuit",
    name: "Parle G 12 pcs",
    price: 114,
    img: "image/biscuit/parle g.webp",
  },

  // Rice
  {
    id: 43,
    category: "rice",
    name: "Basmati Rice And  1kg",
    price: 115,
    img: "image/Rice/1kg rice.jpeg",
  },
  {
    id: 44,
    category: "rice",
    name: "Double Chabi Rice 1kg",
    price: 155,
    img: "image/Rice/dabal chabhi rice.png",
  },
  {
    id: 45,
    category: "rice",
    name: "Basmati Rice 5kg",
    price: 570,
    img: "image/Rice/5kg ruce.jpeg",
  },

  //Milk
  {
    id: 46,
    category: "butter",
    name: "2L Full Cream",
    price: 140,
    img: "image/milk/full cream milk.webp",
  },
  {
    id: 47,
    category: "butter",
    name: "2L Cow Milk",
    price: 120,
    img: "image/milk/cow milk.webp",
  },
  {
    id: 48,
    category: "butter",
    name: "200gm Amul Butter",
    price: 116,
    img: "image/milk/amul butter.jpg",
  },
  {
    id: 49,
    category: "butter",
    name: "250ml Fresh Cream",
    price: 70,
    img: "image/milk/fresh cream.webp",
  },
  {
    id: 50,
    category: "butter",
    name: "1L Ghee Mother Dairy",
    price: 500,
    img: "image/milk/ghee.webp",
  },

  // Surf
  {
    id: 51,
    category: "surf",
    name: "1kg Rin",
    price: 99,
    img: "image/surf/rin.webp",
  },
  {
    id: 52,
    category: "surf",
    name: "1kg Surf Exal",
    price: 135,
    img: "image/surf/surf exal.jpg",
  },
  {
    id: 53,
    category: "surf",
    name: "1kg Fena",
    price: 70,
    img: "image/surf/fena.webp",
  },
  {
    id: 54,
    category: "surf",
    name: "1kg Wheel",
    price: 75,
    img: "image/surf/wheel.webp",
  },

  // Chai-patti
  {
    id: 54,
    category: "chai-patti",
    name: "Tata Elaichi 250gm",
    price: 85,
    img: "image/chai-patti/tata elaichi.jpg",
  },
  {
    id: 55,
    category: "chai-patti",
    name: "Tata Agni 250gm",
    price: 60,
    img: "image/chai-patti/tata agni.jpg",
  },
  {
    id: 56,
    category: "chai-patti",
    name: "Tata Premium 250gm",
    price: 140,
    img: "image/chai-patti/tata premium.jpg",
  },
  {
    id: 57,
    category: "chai-patti",
    name: "Tata Gold 250gm",
    price: 185,
    img: "image/chai-patti/tata gold.jpg",
  },


  //Maida 
  {id:57, category:'maida', name:'1kg Maida', price:64, img:'image/maida/maida.jpeg'},
{id:58, category:'maida', name:'1kg Daliya', price:64, img:'image/maida/daliya.jpg'},
{id:59, category:'maida', name:'1kg Poha', price:80, img:'image/maida/poha.jpeg'},
{id:60, category:'maida', name:'1kg Sooji', price:64, img:'image/maida/sooji.jpeg'},
{id:61, category:'maida', name:'2kg Sugar', price:95, img:'image/maida/sugar.jpeg'},



//maggie
{id:62, category:'maggie', name:'6 Pack Maggie', price:90, img:'image/maggie.jpg'}



];

const productsEl = document.getElementById("products");
const cart = [];

function renderProducts(category = "all") {
  productsEl.innerHTML = "";
  const filtered =
    category === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);
  if (filtered.length === 0) {
    productsEl.innerHTML = `
          <div class="empty-state">
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" alt="No items">
            <p>Is category me koi item nahi hai.</p>
          </div>
        `;
    return;
  }
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class="img"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'"></div>
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div><strong>${p.name}</strong></div>
              <div class="price">₹${p.price}</div>
            </div>
          </div>
          <div class="btn-row">
            <button onclick="openOrder(${p.id})">Order karein</button>
            <button class="btn-secondary" onclick="addToCart(${p.id})">Add to cart</button>
          </div>
        `;
    productsEl.appendChild(card);
  });
}

function addToCart(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const existing = cart.find((x) => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
  updateCartUI();

  // Show notification
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 100;
        transition: all 0.3s ease;
      `;
  notification.innerHTML = `<strong>${p.name}</strong> cart me add ho gaya`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateY(-10px)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

function updateCartUI() {
  document.getElementById("cartCount").innerText = cart.reduce(
    (s, i) => s + i.qty,
    0
  );
}

function openOrder(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  showModal([{ id: p.id, name: p.name, price: p.price, qty: 1 }]);
}

function showModal(items) {
  document.getElementById("modal").classList.add("active");
  const itemsEl = document.getElementById("cartItems");
  itemsEl.innerHTML = "";
  let total = 0;

  if (items.length > 0) {
    items.forEach((i) => {
      const div = document.createElement("div");
      div.style.cssText =
        "margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 8px;";
      div.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
              <span><strong>${i.name}</strong></span>
              <span>₹${i.price} x ${i.qty}</span>
            </div>
          `;
      itemsEl.appendChild(div);
      total += i.price * i.qty;
    });

    const totalEl = document.createElement("div");
    totalEl.style.cssText =
      "margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd; font-weight: bold;";
    totalEl.innerHTML = `<div style="display: flex; justify-content: space-between;"><span>Total:</span><span>₹${total}</span></div>`;
    itemsEl.appendChild(totalEl);
  }

  window.__checkoutItems = items;
  document.getElementById("buyerName").value = "";
  document.getElementById("buyerPhone").value = "";
  document.getElementById("buyerAddr").value = "";
  document.getElementById("ownerNumber").value = OWNER_PHONE_DEFAULT;
}

document.getElementById("viewCart").addEventListener("click", () => {
  if (cart.length === 0) {
    const notification = document.createElement("div");
    notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--muted);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 100;
          transition: all 0.3s ease;
        `;
    notification.innerHTML = "Cart khali hai";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-10px)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
    return;
  }
  showModal(cart);
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("active");
});

document.getElementById("sendBtn").addEventListener("click", () => {
  const name = document.getElementById("buyerName").value.trim();
  const phone = document.getElementById("buyerPhone").value.trim();
  const addr = document.getElementById("buyerAddr").value.trim();
  const owner = OWNER_PHONE_DEFAULT;
  const items = window.__checkoutItems || [];

  if (!name || !phone || !addr) {
    alert("Kripya naam, mobile aur address sab fill karein.");
    return;
  }

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  if (totalQty < 5) {
    alert("Order tabhi confirm hoga jab kam se kam 5 items order karein.");
    return;
  }

  let msg = `Naya order%0A`;
  msg += `Buyer: ${encodeURIComponent(name)}%0A`;
  msg += `Phone: ${encodeURIComponent(phone)}%0A`;
  msg += `Address: ${encodeURIComponent(addr)}%0A%0AItems:%0A`;
  let total = 0;

  items.forEach((i) => {

    // Monospace alignment
    let nameFix = i.name.padEnd(22, ' ');  
    let line = `\`${nameFix} ₹${i.price}  x ${i.qty}\``;

    msg += encodeURIComponent(line) + '%0A';

    total += i.price * i.qty;
});


  /*items.forEach((i) => {
    msg += encodeURIComponent(`${i.name} - ₹${i.price} x ${i.qty}`) + "%0A";
    total += i.price * i.qty;
  });*/
  msg += `%0ATotal: ₹${total}`;
  const url = `https://api.whatsapp.com/send?phone=${owner}&text=${msg}`;
  window.open(url, "_blank");
  document.getElementById("modal").classList.remove("active");
  cart.length = 0;
  updateCartUI();
});

document.getElementById("categoryFilter").addEventListener("change", (e) => {
  renderProducts(e.target.value);
});

// Close modal when clicking outside
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("active");
  }
});

renderProducts();
updateCartUI();
