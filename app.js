/* ==========================================================================
   Yaw's Faderoom - Core Interaction & Business Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Branch Configurations & Data ---
  const branchData = {
    us: {
      title: 'Minnesota Branch',
      address: 'Northeast Minneapolis Area, MN (45°00\'56.3"N 93°15\'59.9"W)',
      phone: '+1 218-940-0374',
      phoneDial: '12189400374',
      mapUrl: "https://www.google.com/maps/place/45%C2%B000'56.3%22N+93%C2%B015'59.9%22W/@45.0156531,-93.2668849,21z/data=!4m4!3m3!8m2!3d45.0156404!4d-93.2666473?entry=ttu",
      mapEmbedUrl: 'https://maps.google.com/maps?q=45.0156404,-93.2666473&z=16&output=embed'
    },
    gh: {
      title: 'Accra Branch',
      address: 'Yaw\'s Faderoom, Dome Road, Accra, Ghana',
      phone: '+233 240695968',
      phoneDial: '233240695968',
      mapUrl: 'https://www.google.com/maps/place/YAW%E2%80%99s+FADEROOM/@5.6485209,-0.2296482,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9ff966a15c43:0x29cb4e98cc7ce9e0!8m2!3d5.6485209!4d-0.2296482!16s%2Fg%2F11x8qs2ms_?entry=ttu',
      mapEmbedUrl: 'https://maps.google.com/maps?q=5.6485209,-0.2296482&z=17&output=embed'
    }
  };

  let currentBranch = 'us'; // Default branch


  
  // Header Elements
  const header = document.querySelector('.header');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  
  // Branch Buttons (Header)
  const headerUsBtn = document.getElementById('btn-branch-us');
  const headerGhBtn = document.getElementById('btn-branch-gh');
  
  // Form Branch Buttons
  const formUsBtn = document.getElementById('form-branch-us');
  const formGhBtn = document.getElementById('form-branch-gh');
  
  // Location Card Elements
  const locationTitle = document.getElementById('branch-address-title');
  const locationText = document.getElementById('branch-address-text');
  const locationPhoneText = document.getElementById('branch-phone-text');
  const locationMapLink = document.getElementById('branch-map-link');
  const locationMapIframe = document.getElementById('branch-map-iframe');
  const locationWhatsappLink = document.getElementById('branch-whatsapp-link');

  // Booking Form Elements
  const bookingForm = document.getElementById('booking-form');
  const bookingName = document.getElementById('booking-name');
  const bookingDate = document.getElementById('booking-date');
  const bookingTime = document.getElementById('booking-time');

  // Interactive Media
  const galleryVideos = document.querySelectorAll('.gallery-video');
  const sarkodieVideo = document.getElementById('sarkodie-video');
  const videoOverlays = document.querySelectorAll('.video-overlay-play');



  // --- 2. Branch State Manager ---
  function updateBranchUI(branchCode) {
    currentBranch = branchCode;
    const data = branchData[branchCode];

    // Update active state in Header Switcher
    document.querySelectorAll('.branch-selector-header .branch-toggle-btn').forEach(btn => {
      if (btn.getAttribute('data-branch') === branchCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active state in Booking Form Switcher & Modal Switcher
    document.querySelectorAll('.booking-branch-toggle .branch-form-btn, .booking-branch-toggle .branch-modal-btn').forEach(btn => {
      const targetVal = btn.getAttribute('data-form-branch') || btn.getAttribute('data-modal-branch');
      if (targetVal === branchCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Mobile Nav Switcher if visible
    document.querySelectorAll('.mobile-branch-toggle .branch-toggle-btn').forEach(btn => {
      if (btn.getAttribute('data-branch') === branchCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Animate content change in Contact Section
    const infoSection = document.querySelector('.location-info');
    infoSection.style.opacity = '0';
    infoSection.style.transform = 'translateY(10px)';
    
    const mapContainer = document.getElementById('branch-map-container');
    mapContainer.style.opacity = '0';

    setTimeout(() => {
      // Update text details
      locationTitle.textContent = data.title;
      locationText.textContent = data.address;
      locationPhoneText.textContent = data.phone;
      
      // Update links
      locationMapLink.href = data.mapUrl;
      locationWhatsappLink.href = `https://wa.me/${data.phoneDial}?text=Hello%20Yaw's%20Faderoom!%20I'd%20like%20to%20ask%20a%20question.`;
      
      // Update map embed src
      locationMapIframe.src = data.mapEmbedUrl;

      // Fade-in animation
      infoSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      infoSection.style.opacity = '1';
      infoSection.style.transform = 'translateY(0)';
      
      mapContainer.style.transition = 'opacity 0.5s ease';
      mapContainer.style.opacity = '1';
    }, 300);
  }

  // Bind branch toggle click events
  document.querySelectorAll('.branch-toggle-btn, .branch-form-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const branchCode = e.target.getAttribute('data-branch') || e.target.getAttribute('data-form-branch');
      updateBranchUI(branchCode);
    });
  });

  // Global helper function for inline onclick binds
  window.setGlobalBranch = (branchCode) => {
    updateBranchUI(branchCode);
  };

  // --- 3. Scroll-Driven Reveal System & Header Shrink ---
  const scrollReveals = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed to keep layout smooth
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollReveals.forEach(el => {
    revealObserver.observe(el);
  });

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0';
      header.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
    } else {
      header.style.padding = '10px 0';
      header.style.backgroundColor = 'rgba(5, 5, 5, 0.7)';
    }
  });

  // --- 4. Mobile Navigation Toggle ---
  if (hamburgerMenu && mobileNav) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      // Animate hamburger bars to X
      const bars = hamburgerMenu.querySelectorAll('.bar');
      if (hamburgerMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Close menu when clicking links
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        
        const bars = hamburgerMenu.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      });
    });
  }

  // --- 5. Interactive Video Handling ---
  
  // Hover-to-Play Video Gallery
  galleryVideos.forEach(video => {
    const card = video.closest('.gallery-card');
    
    // Play on Mouse Enter
    card.addEventListener('mouseenter', () => {
      video.play().catch(err => console.log('Autoplay blocked:', err));
    });

    // Pause on Mouse Leave
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Reset to start
    });
  });

  // Mobile Autoplay-on-view logic (Alternative for touch devices)
  const mobileVideoObserver = new IntersectionObserver((entries) => {
    // Only apply on touch screens
    if (window.matchMedia('(max-width: 768px)').matches) {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (video) {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log('Mobile play blocked:', err));
          } else {
            video.pause();
          }
        }
      });
    }
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('.gallery-card, .celeb-card.video-card').forEach(card => {
    mobileVideoObserver.observe(card);
  });

  // Celeb Sarkodie Video click-to-play toggler
  if (sarkodieVideo) {
    const parentCard = sarkodieVideo.closest('.video-card');
    const playOverlay = parentCard.querySelector('.video-overlay-play');

    parentCard.addEventListener('click', () => {
      if (sarkodieVideo.paused) {
        // Pause all other videos
        galleryVideos.forEach(v => v.pause());
        
        sarkodieVideo.play()
          .then(() => {
            playOverlay.style.opacity = '0';
            playOverlay.style.pointerEvents = 'none';
          })
          .catch(err => console.log('Video play error:', err));
      } else {
        sarkodieVideo.pause();
        playOverlay.style.opacity = '1';
        playOverlay.style.pointerEvents = 'auto';
      }
    });
  }

  // --- 6. VIP Booking Modal & WhatsApp Redirection ---
  const bookingTriggers = document.querySelectorAll('.booking-trigger');
  const floatingWhatsappTrigger = document.getElementById('floating-whatsapp-trigger');
  const modalOverlay = document.getElementById('booking-modal-overlay');
  const modalClose = document.getElementById('booking-modal-close');
  const modalForm = document.getElementById('modal-booking-form');
  const modalName = document.getElementById('modal-booking-name');
  const modalDate = document.getElementById('modal-booking-date');
  const modalTime = document.getElementById('modal-booking-time');
  const modalUsBtn = document.getElementById('modal-branch-us');
  const modalGhBtn = document.getElementById('modal-branch-gh');

  // Set minimum date to today for modal date input
  if (modalDate) {
    const todayStr = new Date().toISOString().split('T')[0];
    modalDate.min = todayStr;
  }

  // Open Modal function
  function openBookingModal() {
    if (modalOverlay) {
      modalOverlay.style.display = 'flex';
      setTimeout(() => {
        modalOverlay.classList.add('active');
      }, 10);
    }
  }

  // Close Modal function
  function closeBookingModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      setTimeout(() => {
        modalOverlay.style.display = 'none';
      }, 400); // matches CSS transitions
    }
  }

  // Bind Open triggers
  bookingTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal();
    });
  });

  if (floatingWhatsappTrigger) {
    floatingWhatsappTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal();
    });
  }

  // Bind Close triggers
  if (modalClose) {
    modalClose.addEventListener('click', closeBookingModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeBookingModal();
      }
    });
  }

  // Sync Modal Branch Selector Click events with global state
  if (modalUsBtn && modalGhBtn) {
    modalUsBtn.addEventListener('click', () => {
      updateBranchUI('us');
    });
    modalGhBtn.addEventListener('click', () => {
      updateBranchUI('gh');
    });
  }

  // Handle Modal Form Submission
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Inputs Sanitization
      const nameVal = modalName.value.trim().replace(/[<>'"&]/g, ""); 
      const dateVal = modalDate.value;
      const timeVal = modalTime.value;
      
      if (!nameVal || !dateVal || !timeVal) {
        alert("Please fill in all booking fields.");
        return;
      }

      // Format Date for readability (e.g. July 3, 2026)
      const dateObj = new Date(dateVal);
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Format Time for readability (12-hour format)
      let [hours, minutes] = timeVal.split(':');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedTime = `${hours}:${minutes} ${ampm}`;

      const selectedBranchName = currentBranch === 'us' ? 'Minnesota Branch (USA)' : 'Accra Branch (Ghana)';
      const targetPhone = branchData[currentBranch].phoneDial;

      // Construct Elegant WhatsApp booking copy (Claude Hopkins & Ale Sultanic Direct Response)
      const message = `Hello Yaw's Faderoom! 💈\n\nI want to claim my VIP Spot and bypass the queue. Here are my details:\n\n👤 NAME: ${nameVal}\n📅 DATE: ${formattedDate}\n⏰ TIME: ${formattedTime}\n📍 LOCATION: ${selectedBranchName}\n\nPlease confirm if this booking slot is locked in. Looking forward to the premium experience!`;

      // Safe URL Encode
      const encodedMsg = encodeURIComponent(message);
      
      // WhatsApp Deep Link URL
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMsg}`;

      // Open in new window safely
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }

      // Close modal after submission
      closeBookingModal();
    });
  }

  // Initial branch UI setup (defaults to US)
  updateBranchUI('us');
});
