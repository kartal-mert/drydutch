/* =======================
   PRODUCTS DATA
======================= */
const productsData = {
  kuruTemizleme: [
    { id: 'k1', name: 'Gömlek', price: 200, img: 'images/umraniye-kuru-temizleme-takim-elbise-gomlek.webp' },
    { id: 'k2', name: 'Pantolon', price: 200, img: 'images/umraniye-kuru-temizleme-pantolon-temizligi.webp' },
    { id: 'k3', name: 'Ceket', price: 300, img: 'images/umraniye-kuru-temizleme-ceket.webp' },
    { id: 'k4', name: 'Takım Elbise', price: 500, img: 'images/umraniye-kuru-temizleme-takim-elbise-seti.webp' },
    { id: 'k5', name: 'T-Shirt', price: 200, img: 'images/umraniye-kuru-temizleme-t-shirt.webp' },
    { id: 'k6', name: 'Abiye Elbise', price: '1000-2000', img: 'images/umraniye-kuru-temizleme-abiye-elbise.webp' },
    { id: 'k7', name: 'Bayan Elbisesi', price: 500, img: 'images/umraniye-kuru-temizleme-bayan-elbisesi.webp' },
    { id: 'k8', name: 'Bluz', price: 600, img: 'images/umraniye-kuru-temizleme-bluz.webp' },
    { id: 'k9', name: 'Döpiyes', price: 'Fiyat Alınız', img: 'images/umraniye-kuru-temizleme-dopiyes.webp' },
    { id: 'k10', name: 'Pileli Etek', price: 350, img: 'images/umraniye-kuru-temizleme-pileli-etek-temizligi.webp' },
    { id: 'k11', name: 'Etek', price: 300, img: 'images/umraniye-kuru-temizleme-etek.webp' },
    { id: 'k12', name: 'Kaban', price: 500, img: 'images/umraniye-kuru-temizleme-kaban-temizligi.webp' },
    { id: 'k13', name: 'Kazak', price: 200, img: 'images/umraniye-kuru-temizleme-kazak-temizligi.webp' },
    { id: 'k15', name: 'Mont', price: 500, img: 'images/umraniye-kuru-temizleme-mont-temizligi.webp' },
    { id: 'k18', name: 'Kanguru', price: 350, img: 'images/umraniye-kuru-temizleme-kanguru-mont.webp' },
    { id: 'k19', name: 'Sweatshirt', price: 200, img: 'images/umraniye-kuru-temizleme-sweatshirt.webp' },
    { id: 'k20', name: 'Trençkot', price: 500, img: 'images/umraniye-kuru-temizleme-trenckot.webp' },
    { id: 'k21', name: 'Tunik', price: 'Fiyat Alınız', img: 'images/umraniye-kuru-temizleme-tunik.webp' },
    { id: 'k23', name: 'Şişme Yelek', price: 500, img: 'images/umraniye-kuru-temizleme-sisme-yelek.webp' },
    { id: 'k24', name: 'Kaz Tüyü Mont', price: 700, img: 'images/umraniye-kuru-temizleme-kaz-tuyu-mont.webp' }
  ],

  gelinlik: [
    { id: 'g1', name: 'Gelinlik Seti', price: 'Özel Fiyat Alınız', img: 'images/umraniye-kuru-temizleme-gelinlik-seti.webp' },
    { id: 'g2', name: 'Gelinlik Duvak', price: 1000, img: 'images/umraniye-kuru-temizleme-gelinlik-duvagi.webp' },
    { id: 'g3', name: 'Gelinlik Etek', price: 1000, img: 'images/umraniye-kuru-temizleme-gelinlik-etegi.webp' },
    { id: 'g4', name: 'Gelinlik Üst', price: 1000, img: 'images/umraniye-kuru-temizleme-gelinlik-ust-kismi.webp' }
  ],

  takim: [
    { id: 't1', name: "Takım Elbise Seti (3'lü)", price: 500, img: 'images/umraniye-kuru-temizleme-takim-elbise-seti.webp' },
    { id: 't2', name: 'Takım Elbise Pantolon', price: 200, img: 'images/umraniye-kuru-temizleme-takim-elbise-pantolon.webp' },
    { id: 't3', name: 'Takım Elbise Ceket', price: 300, img: 'images/umraniye-kuru-temizleme-takim-elbise-ceket.webp' },
    { id: 't4', name: 'Takım Elbise Gömlek', price: 200, img: 'images/umraniye-kuru-temizleme-takim-elbise-gomlek.webp' },
    { id: 't5', name: 'Takım Elbise Yelek', price: 300, img: 'images/umraniye-kuru-temizleme-yelek.webp' }
  ],

  lostra: [
    { id: 'l1', name: 'Blazer Mid 77 Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-lostra-nike-blazer.webp' },
    { id: 'l2', name: 'Alexander Mcqueen Ayakkabı Temizliği', price: 1500, img: 'images/umraniye-kuru-temizleme-lostra-alexander-mcqueen.webp' },
    { id: 'l3', name: 'Skechers Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-lostra-skechers.webp' },
    { id: 'l4', name: 'New Balance Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-lostra-new-balance.webp' },
    { id: 'l5', name: 'Air Force Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-lostra-nike-airforce.webp' },
    { id: 'l6', name: 'Vans Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-lostra-vans.webp' },
    { id: 'l7', name: 'Adidas Spor Ayakkabı Temizliği', price: 500, img: 'images/umraniye-kuru-temizleme-adidas-spor-ayakkabi.webp' }
  ],

  ev: [
    { id: 'e1', name: 'Battaniye (Tek Kişilik)', price: 500, img: 'images/umraniye-kuru-temizleme-yorgan-yikama.webp' },
    { id: 'e2', name: 'Battaniye (Çift Kişilik)', price: 600, img: 'images/umraniye-kuru-temizleme-yorgan-yikama.webp' },
    { id: 'e3', name: 'Havlu', price: 100, img: 'images/umraniye-kuru-temizleme-havlu.webp' },
    { id: 'e13', name: 'Yorgan(elyaf)', price: 500, img: 'images/umraniye-kuru-temizleme-yorgan-yikama.webp' },
    { id: 'e14', name: 'Yorgan(yün)', price: 700, img: 'images/umraniye-kuru-temizleme-yorgan-yikama.webp' },
    { id: 'e5', name: 'Çarşaf (Tek Kişilik)', price: 250, img: 'images/umraniye-kuru-temizleme-carsaf-yikama.webp' },
    { id: 'e6', name: 'Çarşaf (Çift Kişilik)', price: 300, img: 'images/umraniye-kuru-temizleme-carsaf-yikama.webp' },
    { id: 'e8', name: 'Masa Örtüsü (m²)', price: 150, img: 'images/umraniye-kuru-temizleme-masa-ortusu.webp' },
    { id: 'e9', name: 'Nevresim Takımı', price: 500, img: 'images/umraniye-kuru-temizleme-nevresim-takimi.webp' },
    { id: 'e10', name: 'Yastık Kılıfı', price: 100, img: 'images/umraniye-kuru-temizleme-yastik-kilifi.webp' },
    { id: 'e11', name: 'Bornoz', price: 300, img: 'images/umraniye-kuru-temizleme-bornoz.webp' },
    { id: 'e12', name: 'Paspas', price: 120, img: 'images/umraniye-kuru-temizleme-paspas-yikama.webp' }
  ],

  halı: [
    { id: 'h1', name: 'Makine Halısı (m²)', price: 170, img: 'images/umraniye-kuru-temizleme-makine-hali-yikama.webp' },
    { id: 'h3', name: 'Yün Halı (m²)', price: 350, img: 'images/umraniye-kuru-temizleme-dokuma-hali-yikama.webp' },
    { id: 'h4', name: 'İpek Halı (m²)', price: 400, img: 'images/umraniye-kuru-temizleme-ipek-hali-yikama.webp' }
  ],

  çanta: [
    { id: 'c1', name: 'Bel Çantası', price: 400, img: 'images/umraniye-kuru-temizleme-bel-cantasi-temizligi.webp' },
    { id: 'c2', name: 'Klasik Çanta', price: 500, img: 'images/umraniye-kuru-temizleme-klasik-canta-temizligi.webp' },
    { id: 'c3', name: 'El Çantası', price: 500, img: 'images/umraniye-kuru-temizleme-el-cantasi-temizligi.webp' },
    { id: 'c5', name: 'Laptop Çantası', price: 500, img: 'images/umraniye-kuru-temizleme-laptop-bilgisayar-cantasi.webp' },
    { id: 'c6', name: 'Sırt Çantası', price: 500, img: 'images/umraniye-kuru-temizleme-sirt-cantasi.webp' },
    { id: 'c7', name: 'Bavul', price: 1000, img: 'images/umraniye-kuru-temizleme-bavul-temizligi.webp' }
  ],

  ütü: [
    { id: 'u1', name: 'Gömlek Ütüleme', price: 70, img: 'images/umraniye-kuru-temizleme-takim-elbise-gomlek.webp' },
    { id: 'u2', name: 'Pantolon Ütüleme', price: 70, img: 'images/umraniye-kuru-temizleme-pantolon-temizligi.webp' },
    { id: 'u3', name: 'Ceket Ütüleme', price: 150, img: 'images/umraniye-kuru-temizleme-ceket.webp' },
    { id: 'u4', name: 'Takım Elbise Ütüleme', price: 250, img: 'images/umraniye-kuru-temizleme-takim-elbise-seti.webp' },
    { id: 'u5', name: 'T-Shirt Ütüleme', price: 70, img: 'images/umraniye-kuru-temizleme-t-shirt.webp' },
    { id: 'u12', name: 'Kaban Ütüleme', price: 250, img: 'images/umraniye-kuru-temizleme-kaban-temizligi.webp' },
    { id: 'u13', name: 'Kazak Ütüleme', price: 100, img: 'images/umraniye-kuru-temizleme-kazak-temizligi.webp' },
    { id: 'u19', name: 'Sweatshirt Ütüleme', price: 100, img: 'images/umraniye-kuru-temizleme-sweatshirt.webp' },
  
  ],

  perde: [
    { id: 'p1', name: 'Zebra Perde(m²)', price: 180, img: 'images/umraniye-kuru-temizleme-zebra-perde-yikama.webp' },
    { id: 'p2', name: 'Tül Perde(m²)', price: 130, img: 'images/umraniye-kuru-temizleme-tul-perde-yikama.webp' },
    { id: 'p3', name: 'Store Perde(m²)', price: 180, img: 'images/umraniye-kuru-temizleme-stor-perde-yikama.webp' },
    { id: 'p4', name: 'Perde(m²)', price: 150, img: 'images/umraniye-kuru-temizleme-klasik-perde-yikama.webp' }
  ]
};

let currentCategory = 'kuruTemizleme';
let cart = {};

/* =======================
   INIT
======================= */
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCountUI();
});

/* =======================
   MENU
======================= */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu) menu.classList.toggle("active");
}

/* =======================
   RENDER PRODUCTS
======================= */
function renderProducts(filterText = '') {
  const container = document.getElementById('product-container');
  if (!container) return;

  let items = productsData[currentCategory] || [];

  if (filterText) {
    items = items.filter(p =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  if (items.length === 0) {
    container.innerHTML = `<p style="padding:20px;color:#666;">Bu kategoride hizmet yok.</p>`;
    return;
  }

  container.innerHTML = items.map(product => {
    const count = cart[product.id] || 0;

    return `
      <div class="product-items">
        <div>
          <img class="product-img" src="${product.img}" alt="Ümraniye ${product.name} kuru temizleme hizmeti">
          <p class="product-title">${product.name}</p>
          <p class="product-price">${product.price} TL</p>
        </div>

        <div class="modern-counter">
          <div class="btn-count" onclick="removeFromCart('${product.id}')">−</div>
          <div class="count-display" id="count-${product.id}">${count}</div>
          <div class="btn-count" onclick="animateFlyToCart(event, '${product.id}')">+</div>
        </div>
      </div>
    `;
  }).join('');
}


/* =======================
   CATEGORY CHANGE (DÜZELTİLDİ)
======================= */
function changeCategory(key, el, event) {
  // Sayfanın yukarı kaymasını engelle
  if (event) event.preventDefault();

  // ✅ FIX: case uyuşmazlığını çözüyor
  currentCategory = key.charAt(0).toLowerCase() + key.slice(1);

  document.querySelectorAll('.sidebar-items')
    .forEach(x => x.classList.remove('active'));

  if (el) el.classList.add('active');

  const input = document.getElementById('search-input');
  if (input) input.value = '';

  renderProducts();
}

/* =======================
   SEARCH
======================= */
function searchProducts() {
  const input = document.getElementById('search-input');
  renderProducts(input ? input.value : '');
}

/* =======================
   CART
======================= */
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateUI(id);
  updateCartCountUI();
  syncSidebarCart();
}

function removeFromCart(id) {
  if (!cart[id]) return;

  cart[id]--;
  if (cart[id] <= 0) delete cart[id];

  updateUI(id);
  updateCartCountUI();
  syncSidebarCart();
}

function updateUI(id) {
  const el = document.getElementById(`count-${id}`);
  if (el) el.innerText = cart[id] || 0;
}

function updateCartCountUI() {
  let total = 0;
  for (let i in cart) total += cart[i];

  const el = document.getElementById("cart-count");
  if (el) el.innerText = total;
}

/* =======================
   UÇAN ANİMASYON
======================= */
function animateFlyToCart(event, id) {
  addToCart(id);
}

/* =======================
   SIDEBAR CART
======================= */
function syncSidebarCart() {
  const container = document.getElementById('sidebar-cart-list-container');
  if (!container) return;

  let total = 0;

  container.innerHTML = Object.keys(cart).map(id => {
    let product;

    for (let cat in productsData) {
      product = productsData[cat].find(p => p.id === id);
      if (product) break;
    }

    if (!product) return '';

    total += product.price * cart[id];

    return `
      <div class="cartlist-items">
        <div class="cartlist-left">
          <img src="${product.img}" alt="Ümraniye ${product.name} kuru temizleme hizmeti">
          <div>
            <p>${product.name}</p>
            <p>${product.price} TL</p>
          </div>
        </div>

        <div class="modern-counter">
          <div class="btn-count" onclick="removeFromCart('${id}')">−</div>
          <div class="count-display">${cart[id]}</div>
          <div class="btn-count" onclick="addToCart('${id}')">+</div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-total-price').innerText =
    "Toplam: " + total + " TL";
}

/* =======================
   CART OPEN / CLOSE
======================= */
function openCartSidebar() {
  syncSidebarCart();
  document.getElementById("cartSidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeCartSidebar() {
  document.getElementById("cartSidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}







function sendToWhatsApp() {

    if (Object.keys(cart).length === 0) {
        alert("Sepet boş!");
        return;
    }

    let message = "🧺 DRY DUTCH SİPARİŞ TALEBİ\n\n";

    Object.keys(cart).forEach(id => {

        let product;

        for (let cat in productsData) {
            product = productsData[cat].find(p => p.id === id);
            if (product) break;
        }

        if (product) {
            message += `• ${product.name} x ${cart[id]}\n`;
        }

    });

    message += "\nFiyat bilgisi alabilir miyim?";

    const phone = "905321725404";

    window.location.href =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}


















document.addEventListener("DOMContentLoaded", () => {

    const kirliTisort = document.getElementById("dd-kirli-tisort");
    const buyutec = document.getElementById("dd-buyutec");
    const ilac = document.getElementById("dd-ilac");
    const makine = document.getElementById("dd-makine");
    const temizTisort = document.getElementById("dd-temiz-tisort");
    const utu = document.getElementById("dd-utu");
    const paket = document.getElementById("dd-paket");
    const preloader = document.getElementById("dd-preloader");

    // İlk ziyaret kontrolü
    if (sessionStorage.getItem("ddPreloaderShown")) {
        if (preloader) {
            preloader.style.display = "none";
        }
        document.body.classList.add("dd-loaded");
        return;
    }

    sessionStorage.setItem("ddPreloaderShown", "true");

    // 1. Kirli Tişört
    setTimeout(() => {
        kirliTisort.classList.add("active");
    }, 100);

    // 2. Büyüteç
    setTimeout(() => {
        buyutec.classList.add("active");
    }, 400);

    // 3. İlaç
    setTimeout(() => {
        buyutec.classList.remove("active");
        ilac.classList.add("active");
    }, 900);

    // 4. Makine
    setTimeout(() => {
        ilac.classList.remove("active");
        makine.classList.add("active");
    }, 1500);

    // 5. Temiz Tişört
    setTimeout(() => {
        makine.classList.remove("active");
        kirliTisort.classList.remove("active");
        temizTisort.classList.add("active");
    }, 2200);

    // 6. Ütü
    setTimeout(() => {
        utu.classList.add("active");
    }, 2800);

    // 7. Paket
    setTimeout(() => {
        utu.classList.remove("active");
        temizTisort.classList.remove("active");
        paket.classList.add("active");
    }, 3400);

    // 8. Kapat
    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        document.body.classList.add("dd-loaded");

    }, 4000);

});
