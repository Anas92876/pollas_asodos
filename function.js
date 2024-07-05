//---------------- Programming of Navbar-------------------
let navbar = document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle("active")
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}
let closeBtn = document.querySelector('#close')
closeBtn.onclick = () => {
    navbar.classList.remove("active")
}

// -----------------Programming of Cart Items---------------------
let delBtn = document.querySelector('#delete')
let delBtn2 = document.querySelector('#delete2')
let cartItem =document.querySelector(".cart-items-container");
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle("active")
    navbar.classList.remove("active");
}
delBtn.onclick = () =>{
    cartItem.classList.remove("active")
}


let secondCont = document.querySelector(".delivery-info")
let buyBtn = document.querySelector(".buy")
buyBtn.addEventListener("click", ()=>{
   secondCont.classList.add("active")
})
delBtn2.onclick = () =>{
  secondCont.classList.remove("active")
}

// -----------------------------Reset In Scrolling---------------
window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}

// Programming of Mode of the website
const HTML = document.querySelector("html")
let mode = document.getElementById('mode-switch')
mode.addEventListener('click', function() {
    HTML.classList.toggle('dark-mode'); 
});

// ---------------Programmming of Slide_Show_bg----------------
const images = [
    './Images/img-1.jpg',
    './Images/img-2.jpg',
    './Images/img-4.jpeg',
    './Images/img-6.avif',
    './Images/img-7.avif',
    //...
  ];
  
  let currentImageIndex = 0;
  let nextImageIndex = 1;
  
  window.onload = () => {
    const homeSection = document.querySelector('.home');
  
    // create a container for the images
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    homeSection.appendChild(imageContainer);
  
    // create the images
    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `Image ${index + 1}`;
      img.className = 'background-image';
      imageContainer.appendChild(img);
  
      // create overlay element
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      img.appendChild(overlay);
    });
  
    // set initial opacity of images
    const imagesArray = document.querySelectorAll('.background-image');
    imagesArray.forEach((img, index) => {
      if (index === currentImageIndex) {
        img.style.opacity = 1;
      } else {
        img.style.opacity = 0;
      }
    });
  
    // create navigation arrows
    const prevArrow = document.createElement('button');
    prevArrow.className = 'prev-arrow ';
    prevArrow.setAttribute("data-aos", "fade-right")
    prevArrow.setAttribute("data-aos-duration", "1500")
    prevArrow.setAttribute("data-aos-delay", "1000")
    prevArrow.innerHTML = '<';
    homeSection.appendChild(prevArrow);
  
    const nextArrow = document.createElement('button');
    nextArrow.className = 'next-arrow';
    nextArrow.setAttribute("data-aos", "fade-left")
    nextArrow.setAttribute("data-aos-duration", "1500")
    nextArrow.setAttribute("data-aos-delay", "1000")
    nextArrow.innerHTML = '>';
    homeSection.appendChild(nextArrow);
  
    // add event listeners to navigation arrows
    prevArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      nextImageIndex = (currentImageIndex + 1) % images.length;
      updateSlideshow();
    });
  
    nextArrow.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      nextImageIndex = (currentImageIndex + 1) % images.length;
      updateSlideshow();
    });
  
    // slideshow functionality
    function updateSlideshow() {
      // fade out current image
      imagesArray[currentImageIndex].style.transition = 'opacity 1s';
      imagesArray[currentImageIndex].style.opacity = 0;
  
      // fade in next image
      imagesArray[nextImageIndex].style.transition = 'opacity 1s';
      imagesArray[nextImageIndex].style.opacity = 1;
    }
  
    // auto-play slideshow
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      nextImageIndex = (currentImageIndex + 1) % images.length;
      updateSlideshow();
    }, 5000);
  };

// Programming the header to changing the background 
let header = document.querySelector(".header");
let navLinks = document.querySelectorAll(".navbar--link");
let bars = document.querySelector('#menu-btn')
const addBg = () => {
  if (window.scrollY >= 80) {
    header.style.background = "white";
    bars.style.color = "black"
    navLinks.forEach((navLink) => {
      navLink.style.color = "black";
    });
  } else {
    bars.style.color = "white"
    header.style.background = "transparent";
    navLinks.forEach((navLink) => {
      navLink.style.color = "white"; // reset the color to its original value
    });
  }
};

window.addEventListener("scroll", addBg);
// Programming the Function of the Submit Btn
function reg(){
    let email = document.querySelector(".email")
    let time = document.querySelector(".time")
    let qa = document.querySelector(".qa")
    if(email.value.length === 0 || time.value.length === 0 || qa.value.length===0  ){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton:  false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: " <h2 class = 'fonts'>Please Fill all the Planks</h2>"
          })
    }else{
      Swal.fire({
        icon: "success",
        title: "Data Submited",
        showConfirmButton: false,
        timer: 1500
      });
         
    }

}

// Programming the Trigger in the About
const openBtn = document.querySelector(".about--content__btn");
const modalContainer = document.querySelector(".modal-container");
const closeBtn2 = document.querySelector("#closeTrigger");
openBtn.addEventListener("click", function(){
    modalContainer.classList.add("show");
})

closeBtn2.addEventListener("click" , function(){
    modalContainer.classList.toggle("show");
})



// ------------------Programming the Testimoniols 
const swiper = new Swiper('.swiper', {
  autoHeight : true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



//-------------------- Programming the Services 











const addToCartButtons = document.querySelectorAll('.mybtn');
const cartDropdown = document.querySelector('.cart-items-container');
const cartItemsElement = document.getElementById('cart-items');
let cart = [];

console.log("addToCartButtons:", addToCartButtons);
console.log("cartDropdown:", cartDropdown);
console.log("cartItemsElement:", cartItemsElement);

// Initialize the cart count
// Add click event listeners to add to cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
      console.log("Button clicked:", button);
      const itemName = button.getAttribute('data-name');
      const itemPrice = button.getAttribute('data-price');
      const itemImg = button.getAttribute('data-img');
      console.log("Item name:", itemName);
      console.log("Item price:", itemPrice);
      console.log("Item img:", itemImg);
      const cartItem = { name: itemName, price: itemPrice, img: itemImg };
      cart.push(cartItem);

      updateCartItems();
  });
});

// Initialize the cart items element
cartItemsElement.innerHTML = '';
let num_result = 0
// Update the cart items element with the items in the cart array
function updateCartItems() {
  console.log("Updating cart items...");
  cartItemsElement.innerHTML = '';
  cart.forEach((item, index) => {
      console.log("Adding item to cart:", item);
      const cartItemElement = document.createElement('li');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
             <img src="${item.img}" alt="${item.name}">
             <p>${item.name} - $${item.price}</p>
             <div class = "count">
                <p class = "minus">-</p>
                <p class = "number">1</p>
                <p class = "plus">+</p>
             </div>
             <button class="remove-btn" data-index="${index}">&times;</button>
      `;
      cartItemsElement.appendChild(cartItemElement);
      

            // Add event listeners to minus and plus buttons
            const minus_btn = cartItemElement.querySelector(".minus");
            const plus_btn = cartItemElement.querySelector(".plus");
            const count_number = cartItemElement.querySelector(".number");
            let final_price = document.querySelector(".price-item-final")
            let price_items = document.querySelector(".price-items")
            let count = 1;
      

            minus_btn.addEventListener("click", () => {
              if (count > 1) {
                count--
                count_number.textContent = count;
              }
            });
      
            plus_btn.addEventListener("click", () => {
              count++;
              count_number.textContent = count;
              
            });
            function calculateTotalPrice() {
              let totalPrice = 0;
              cart.forEach(item => {
                totalPrice += Number.parseInt(item.price);

              });
 
              return totalPrice;
            }



             price_items.textContent = `${Number.parseInt(item.price)}$`
             price_items.textContent = `${calculateTotalPrice()}$`  
             final_price.textContent =`${calculateTotalPrice()}$` 

             
  });



  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
      button.addEventListener('click', () => {
          console.log("Remove button clicked:", button);
          const index = button.getAttribute('data-index');
          // removeCartItem(index);
          


// --------------------------------------------------------------------
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: " btn-success",
    cancelButton: " btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      icon: "success",
      title: "Deleted",
      showConfirmButton: false,
      timer: 1500
    });
    removeCartItem(index);
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire({
      icon: "error",
      title: "Canceled",
      showConfirmButton: false,
      timer: 1500
    });
  }
});
// ======================================

      });
  });
}

// Remove an item from the cart array and update the cart items element
function removeCartItem(index) {
  console.log("Removing item from cart:", index);
  cart.splice(index, 1);

  updateCartItems();
}

// -----------------------------------------------------------



const sections = document.querySelectorAll("section");
const headerLinks = document.querySelectorAll(".navbar--link");

let observer = new IntersectionObserver(navScroll, {
  threshold: 0.4,
  root: null,
  rootMargin: "0px"
});

sections.forEach(function (section) {
  observer.observe(section);
});



const services = document.querySelector(".services")
function navScroll(entries) {
  entries.forEach(function (entry) {
    const className = entry.target.className;
    console.log(className)
    console.log(entry)
    const activeLink = document.querySelector(`[data-page="${className}"]`);

    console.log(activeLink)
    if (entry.isIntersecting) {
      headerLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      activeLink.classList.add("active");
    }
  });
}


const servicesSection = document.getElementById('services');
 observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const valueDisplays = servicesSection.querySelectorAll('.num');
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = 2000; // adjust the duration as needed
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue.toLocaleString();
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration / endValue);
    });
  }
}, { threshold: 1.0 });

observer.observe(servicesSection);
