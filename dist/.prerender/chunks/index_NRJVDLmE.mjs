import { A as InvalidComponentArgs, a as renderComponent, c as renderSlot, d as renderTemplate, f as maybeRenderHead, h as createRenderInstruction, m as addAttribute, p as renderHead, q as AstroError } from "./server_BkiR5P06.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- PRIMARY SEO META TAGS --><title>Yaw's Faderoom | Best Barbershop in Minneapolis MN & Accra Ghana | VIP Fades & Grooming</title><meta name="description" content="Yaw's Faderoom — the #1 premium barbershop in Northeast Minneapolis, Minnesota and Accra, Ghana. Expert skin fades, beard sculpts, cornrows &amp; VIP grooming trusted by MLS athletes and African music icons. Book online to skip the queue."><meta name="keywords" content="barbershop Minneapolis, best barber Minneapolis MN, skin fade Minneapolis, beard trim Minneapolis, Northeast Minneapolis barbershop, barber near me Minneapolis, Accra barbershop, best barber Accra Ghana, Dome Road barber Accra, skin fade Accra, VIP barber Ghana, Yaw Faderoom, yawsfaderoom, premium barbershop Ghana, cornrows Minneapolis, haircut Minneapolis MN, barber Minneapolis Minnesota, African barber Minneapolis"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="author" content="Yaw's Faderoom"><link rel="canonical" href="https://yawsfaderoom.vercel.app/"><!-- GEO META TAGS — Minneapolis, MN --><meta name="geo.region" content="US-MN"><meta name="geo.placename" content="Minneapolis, Minnesota"><meta name="geo.position" content="45.0156404;-93.2666473"><meta name="ICBM" content="45.0156404, -93.2666473"><!-- GEO META TAGS — Accra, Ghana --><meta name="geo.region" content="GH-AA"><meta name="geo.placename" content="Accra, Ghana"><meta name="geo.position" content="5.6485209;-0.2296482"><!-- OPEN GRAPH --><meta property="og:type" content="business.business"><meta property="og:title" content="Yaw's Faderoom | Premium Barbershop Minneapolis &amp; Accra"><meta property="og:description" content="The #1 VIP barbershop in Minneapolis MN and Accra Ghana. Precision fades, beard sculpts, cornrows &amp; luxury grooming. Trusted by MLS athletes and African music icons. Book online today."><meta property="og:url" content="https://yawsfaderoom.vercel.app/"><meta property="og:image" content="https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name" content="Yaw's Faderoom"><meta property="og:locale" content="en_US"><meta property="business:contact_data:street_address" content="Northeast Minneapolis Area"><meta property="business:contact_data:locality" content="Minneapolis"><meta property="business:contact_data:region" content="MN"><meta property="business:contact_data:country_name" content="United States"><!-- TWITTER CARD --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Yaw's Faderoom | Premium Barbershop Minneapolis &amp; Accra"><meta name="twitter:description" content="The #1 VIP barbershop in Minneapolis MN and Accra Ghana. Precision fades, beard sculpts &amp; luxury grooming. Book online to skip the queue."><meta name="twitter:image" content="https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg"><meta name="twitter:site" content="@yawsfaderoom"><!-- JSON-LD — Minneapolis Branch --><script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Yaw's Faderoom — Minneapolis",
    "alternateName": ["Yaws Faderoom", "YawsFaderoom Minneapolis", "Yaw Faderoom MN"],
    "url": "https://yawsfaderoom.vercel.app/",
    "logo": "https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg",
    "image": "https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg",
    "description": "Premium barbershop in Northeast Minneapolis, MN specializing in skin fades, beard sculpts, cornrows, and VIP grooming. Trusted by MLS athletes and professional sports figures.",
    "telephone": "+12189400374",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "streetAddress": "Northeast Minneapolis Area", "addressLocality": "Minneapolis", "addressRegion": "MN", "postalCode": "55413", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": 45.0156404, "longitude": -93.2666473 },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "21:00" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47", "bestRating": "5" },
    "areaServed": ["Minneapolis", "Northeast Minneapolis", "Saint Paul", "Roseville", "Fridley", "Columbia Heights", "Minnesota"],
    "serviceType": ["Skin Fade", "Beard Sculpt", "Cornrows", "Razor Lineup", "Taper Fade", "VIP Grooming", "Kids Haircut", "Hair Design"],
    "sameAs": ["https://www.instagram.com/yawsfaderoom/"]
  }
  <\/script><!-- JSON-LD — Accra Branch --><script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Yaw's Faderoom — Accra",
    "alternateName": ["Yaws Faderoom Accra", "YawsFaderoom Ghana", "Yaw Faderoom Dome"],
    "url": "https://yawsfaderoom.vercel.app/",
    "logo": "https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg",
    "image": "https://yawsfaderoom.vercel.app/assets/yawlogo.jpeg",
    "description": "Premier VIP barbershop on Dome Road, Accra, Ghana. Specializing in skin fades, precision cuts, beard sculpts, and luxury grooming. Trusted by Ghanaian music icons and celebrities.",
    "telephone": "+233240695968",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "streetAddress": "Dome Road", "addressLocality": "Accra", "addressRegion": "Greater Accra", "addressCountry": "GH" },
    "geo": { "@type": "GeoCoordinates", "latitude": 5.6485209, "longitude": -0.2296482 },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "21:00" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "63", "bestRating": "5" },
    "areaServed": ["Accra", "Dome", "Achimota", "Lapaz", "Ofankor", "Pokuase", "Greater Accra", "Ghana"],
    "serviceType": ["Skin Fade", "Beard Sculpt", "Cornrows", "Razor Lineup", "Ladies Cut", "VIP Grooming", "Pedicure", "Manicure", "Hair Design"],
    "sameAs": ["https://www.instagram.com/yawsfaderoom/"]
  }
  <\/script><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/jpeg" href="/assets/yawlogo.jpeg"><link rel="apple-touch-icon" href="/assets/yawlogo.jpeg"><!-- Global Styles --><link rel="stylesheet" href="/styles/global.css"><!-- Vercel Analytics -->${renderScript($$result, "C:/Users/USER/Desktop/YawFade/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<script defer src="/_vercel/insights/script.js"><\/script><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"><\/script>${renderScript($$result, "C:/Users/USER/Desktop/YawFade/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")}<!-- Microsoft Clarity --><script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "y29v4s5b3u");
  <\/script>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/USER/Desktop/YawFade/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="header"><div class="header-container"><a href="#" class="logo-link" id="nav-logo"><div class="logo-box"><img src="/assets/yawlogo.jpeg" alt="Yaw's Faderoom Logo" class="logo-img"><span class="logo-text">YAW'S FADEROOM</span></div></a><nav class="nav-menu"><a href="#about" class="nav-item">Our Story</a><a href="#process" class="nav-item">The Science</a><a href="#proof" class="nav-item">Proof of Work</a><a href="#authority" class="nav-item">Icons Served</a><a href="#testimonials" class="nav-item">Reviews</a><a href="#" class="nav-btn booking-trigger">Claim VIP Spot</a></nav><div class="branch-selector-header"><button class="branch-toggle-btn active" data-branch="us" id="btn-branch-us">🇺🇸 USA</button><button class="branch-toggle-btn" data-branch="gh" id="btn-branch-gh">🇬🇭 GHANA</button></div><button class="hamburger-menu" id="hamburger-menu" aria-label="Toggle menu"><span class="bar"></span><span class="bar"></span><span class="bar"></span></button></div><div class="mobile-nav" id="mobile-nav"><a href="#about" class="mobile-nav-item">Our Story</a><a href="#process" class="mobile-nav-item">The Science</a><a href="#proof" class="mobile-nav-item">Proof of Work</a><a href="#authority" class="mobile-nav-item">Icons Served</a><a href="#testimonials" class="mobile-nav-item">Reviews</a><div class="mobile-branch-toggle"><span class="mobile-toggle-label">Location:</span><button class="branch-toggle-btn active" data-branch="us">🇺🇸 USA</button><button class="branch-toggle-btn" data-branch="gh">🇬🇭 GHANA</button></div><a href="#" class="mobile-nav-btn booking-trigger">Claim VIP Spot</a></div></header>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero-section"><div class="hero-video-wrapper"><video class="hero-video" autoplay loop muted playsinline webkit-playsinline x5-playsinline disableremoteplayback id="hero-video-element" preload="auto"><source src="/assets/yawhero.mp4" type="video/mp4"></video><div class="hero-overlay"></div></div><div class="hero-content"><div class="hero-badge reveal-on-scroll">THE NEW BENCHMARK OF GROOMING</div><h1 class="hero-title reveal-on-scroll">The Cut That Commands Respect.</h1><p class="hero-subtitle reveal-on-scroll">Founded by Patrick Yaw Amoako, Yaw's Faderoom is where precision meets luxury styling — serving MLS athletes in Minneapolis, MN, and music icons in Accra, Ghana.</p><div class="hero-ctas reveal-on-scroll"><a href="#" class="btn-primary booking-trigger" id="hero-primary-cta">Claim Your VIP Spot</a><a href="#proof" class="btn-secondary">View Proof of Work</a></div></div></section>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/Philosophy.astro
var $$Philosophy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- Philosophy Section --><section class="philosophy-section" id="philosophy"><div class="container text-center-desktop"><span class="section-label reveal-on-scroll">THE NEW STANDARD</span><h2 class="section-title reveal-on-scroll">Where Art Meets Anatomical Science</h2><p class="philosophy-text reveal-on-scroll">A haircut is not a chore — it is a statement of status. Most shops rush you through a 15-minute cut with zero attention to detail. At Yaw's Faderoom, we dedicate the time needed to understand your hairline, face shape, and hair type. We have blended traditional Ghanaian artistry with the precision demanded by professional athletes in the USA. This is not just grooming. This is an investment in your personal brand.</p></div></section><!-- About / Founder Section --><section class="about-section" id="about"><div class="container grid-2-about"><div class="about-image-wrapper reveal-on-scroll"><img src="/assets/yawPic.jpg" alt="Patrick Yaw Amoako - Founder" class="founder-image"></div><div class="about-text-content reveal-on-scroll"><span class="section-label">THE FOUNDER'S STORY</span><h2 class="section-title">From a 9-5 to Dual Continents: Patrick's Vision</h2><p class="section-description">Our founder, <strong>Patrick Yaw Amoako</strong>, began his journey at St. Cloud State before working a traditional 9–5 office job. He quickly realised he loved working with his hands more than sitting behind a screen. On weekends and after hours, he cut hair from home and travelled to clients.</p><p class="section-description">That passion led him to barber school, where grooming became his full-time career. During a visit to family in Ghana, a single haircut changed everything. Seeing a local barber who lacked formal training and proper tools, Patrick sent a care package of professional equipment upon returning to the US.</p><p class="section-description">He realised this mission was bigger than one barber. To support the community and create life-changing opportunities, he opened a barbershop in Ghana — now home to four barbers and one nail technician — training and supporting local families. Today, Patrick runs a thriving shop in Minneapolis, MN, alongside the branch in Accra.</p><div class="about-signature"><div class="sig-name">Patrick Yaw Amoako</div><div class="sig-title">Founder & Master Barber</div></div></div></div></section><!-- Process Section --><section class="process-section" id="process"><div class="container"><div class="center-header"><span class="section-label reveal-on-scroll">THE METICULOUS PROCESS</span><h2 class="section-title reveal-on-scroll">Crafted with Absolute Detail</h2><p class="section-subtitle reveal-on-scroll">We don't just cut hair — we deliver a bespoke styling experience tailored to you. Here is why a Yaw's cut stays clean and looks sharp long after you leave the chair.</p></div><div class="process-grid"><div class="process-card reveal-on-scroll"><div class="process-num">01</div><h3 class="process-card-title">Style & Contour Mapping</h3><p class="process-card-text">Before we begin, we analyze your style preferences and natural growth. We outline the perfect fade line to complement your natural features.</p></div><div class="process-card reveal-on-scroll"><div class="process-num">02</div><h3 class="process-card-title">Precision Tapering</h3><p class="process-card-text">We taper the hair in clean, even steps. This creates a seamless blend that transitions naturally and grows out cleanly without patchiness.</p></div><div class="process-card reveal-on-scroll"><div class="process-num">03</div><h3 class="process-card-title">Hair & Skin Prep</h3><p class="process-card-text">Every shave or line-up is preceded by a soothing hot towel oil compress. This relaxes the skin and softens the hair to ensure a clean, irritation-free experience.</p></div><div class="process-card reveal-on-scroll"><div class="process-num">04</div><h3 class="process-card-title">Razor Edge Finish</h3><p class="process-card-text">We finish every hairline and beard sculpt with a classic straight razor. This creates sharp, clean borders that define your face and keep their shape.</p></div></div></div></section><!-- Services Section --><section class="services-section"><div class="container"><div class="center-header"><span class="section-label reveal-on-scroll">OUR CAPABILITIES</span><h2 class="section-title reveal-on-scroll">No Limits. Every Style, Mastered.</h2><p class="section-subtitle reveal-on-scroll">Whether you need a classic razor fade, intricate braids, or a completely custom style, our team has the training and expertise to deliver flawless results on all hair textures.</p></div><div class="services-grid"><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div><h3>Elite Fades & Tapers</h3><p>Drop fades, skin tapers, and burst fades — executed with care and precision for a sharp, long-lasting result.</p></div><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h3>Intricate Braids & Twists</h3><p>Custom parting designs and flawless execution across protective styling, cornrows, and box braids.</p></div><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8M12 8v8"></path></svg></div><h3>Ladies & Women Cuts</h3><p>Short cuts, side tapers, undercuts, and graphic designs crafted for women of all hair types and personal styles.</p></div><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path></svg></div><h3>Razor Beard Sculpting</h3><p>Detailed beard sculpting, volume shaping, and clean straight-razor neck line-ups — finished with a nourishing oil treatment.</p></div><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18M15 3v18M3 9h18M3 15h18"></path></svg></div><h3>Manicure & Pedicure</h3><p>Clean, precise grooming for nails and cuticles — the perfect complement to your fresh haircut and a complete self-care experience.</p></div><div class="service-item reveal-on-scroll"><div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><h3>Kids & Toddler Styling</h3><p>A patient, welcoming, and spotlessly clean environment. Fred and our team specialise in stress-free, comfortable cuts for children and toddlers.</p></div></div></div></section>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Philosophy.astro", void 0);
//#endregion
//#region src/components/ProofOfWork.astro
var $$ProofOfWork = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="proof-section" id="proof"><div class="container"><div class="center-header"><span class="section-label reveal-on-scroll">EVIDENCE OF QUALITY</span><h2 class="section-title reveal-on-scroll">The Results Speak For Themselves</h2><p class="section-subtitle reveal-on-scroll">Hover or tap any video below to see our craft in high definition. No filters, no edits — just pure skill and precision styling.</p></div><div class="proof-gallery">${[
		{
			src: "/assets/yawT1.mp4",
			title: "Stitch Cornrows & Lineup",
			desc: "Precision stitch braids with custom geometric parting and sharp hairline finish"
		},
		{
			src: "/assets/yawT2.mp4",
			title: "Designer Twists & Taper",
			desc: "Custom grid-parted twists paired with a clean temple taper fade"
		},
		{
			src: "/assets/yawT3.mp4",
			title: "Precision Waves & Parting",
			desc: "Textured coily top with custom curved razor graphic parting artwork"
		},
		{
			src: "/assets/yawT4.mp4",
			title: "High-Drop Fade & Lineup",
			desc: "High-contrast drop skin fade featuring razor-sharp forehead and beard borders"
		},
		{
			src: "/assets/testi1.mp4",
			title: "Platinum Blonde Crop & Parting",
			desc: "Platinum blonde crop with custom geometric razor design & contour parting"
		},
		{
			src: "/assets/testi2.mp4",
			title: "Razor Beard Sculpt & Lineup",
			desc: "Precision straight-razor cheek line, neck cleanup, and full beard shaping"
		},
		{
			src: "/assets/testi3.mp4",
			title: "Clean Skin Fade",
			desc: "High-contrast side blending with a smooth skin drop transition"
		},
		{
			src: "/assets/testi4.mp4",
			title: "Precision Waves & Taper",
			desc: "Reddish coily crop with a clean side razor line & low taper"
		}
	].map((v) => renderTemplate`<div class="gallery-card reveal-on-scroll"><div class="video-container"><video class="gallery-video" loop muted playsinline webkit-playsinline x5-playsinline disableremoteplayback preload="auto"><source${addAttribute(v.src, "src")} type="video/mp4"></video><div class="video-overlay-play"><div class="play-icon"></div></div></div><div class="gallery-info"><h4>${v.title}</h4><p>${v.desc}</p></div></div>`)}</div></div></section>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/ProofOfWork.astro", void 0);
//#endregion
//#region src/components/Authority.astro
var $$Authority = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- Authority / Celebrity Section --><section class="authority-section" id="authority"><div class="container"><div class="center-header"><span class="section-label reveal-on-scroll">THE STAGE OF TRUST</span><h2 class="section-title reveal-on-scroll">Trusted by Athletes & Icons Across Continents</h2><p class="section-subtitle reveal-on-scroll">Trusted by top-level athletes in the USA and legendary artists across Africa, Yaw's Faderoom is the grooming destination of choice for those who demand the very best.</p></div><div class="celeb-grid"><div class="celeb-card reveal-on-scroll"><div class="celeb-image-wrapper"><img src="/assets/celeb2.jpg" alt="Romain Métanire - MNFC Player" class="celeb-img"></div><div class="celeb-info"><span class="celeb-badge">USA / MLS</span><h3>Romain Métanire</h3><p class="celeb-role">Former Minnesota United FC Defender & Madagascar International</p><p class="celeb-desc">"Elite-level grooming that holds its shape under stadium lights and stays sharp through 90 minutes of high-intensity play."</p></div></div><div class="celeb-card reveal-on-scroll"><div class="celeb-image-wrapper"><img src="/assets/celeb1.jpg" alt="Ján Greguš - MNFC Player" class="celeb-img"></div><div class="celeb-info"><span class="celeb-badge">USA / MLS</span><h3>Ján Greguš</h3><p class="celeb-role">MLS Midfielder & Slovakia International</p><p class="celeb-desc">"Yaw's dedication to the craft mirrors the discipline of a professional athlete. Unrivalled consistency."</p></div></div><div class="celeb-card video-card reveal-on-scroll"><div class="celeb-video-wrapper"><video class="celeb-video" loop muted playsinline id="sarkodie-video"><source src="/assets/celeb3.mp4" type="video/mp4"></video><div class="video-overlay-play"><div class="play-icon"></div></div></div><div class="celeb-info"><span class="celeb-badge">GHANA / ICON</span><h3>Sarkodie</h3><p class="celeb-role">Legendary African Rapper & BET Award Winner</p><p class="celeb-desc">"Groomed for the world stage. When it comes to precision and vibes, Yaw's Faderoom is in a league of its own."</p></div></div></div></div></section><!-- Testimonials Section --><section class="testimonials-section" id="testimonials"><div class="container"><div class="center-header"><span class="section-label reveal-on-scroll">CLIENT REVIEWS</span><h2 class="section-title reveal-on-scroll">Straight from the Chair</h2><p class="section-subtitle reveal-on-scroll">The greatest proof of our quality comes from the clients who fill our seats every day. Here is what they say.</p><div class="testimonials-header-image reveal-on-scroll"><img src="/assets/chairPic.jpg" alt="Yaw's Faderoom Signature Barber Chair" class="chair-image"></div></div><div class="testimonials-grid"><div class="testimonial-card reveal-on-scroll"><div class="stars">★★★★★</div><p class="testimonial-text">"Yawsfaderoom is an absolute gem! From the moment you walk in, the atmosphere is warm, creative, and welcoming. The attention to detail in the décor and overall vibe shows a deep passion for culture and originality. The service is top-notch—friendly, attentive, and knowledgeable staff who go the extra mile to make you feel at home. The barbering services are elite—sharp, stylish cuts with a professional touch."</p><div class="client-meta"><div class="client-name">Doc AG</div><div class="client-service">Razor Cut, Pedicure & Manicure</div></div></div><div class="testimonial-card reveal-on-scroll"><div class="stars">★★★★★</div><p class="testimonial-text">"I took my two-year-old son to get a haircut here recently. We were visiting from the USA and wanted a barbershop that is welcoming, toddler-friendly (which is hard to find), and clean. The staff are patient, kind, and really know how to make kids comfortable. Fred cut my son's hair and I 10/10 recommend him. I cannot recommend Yaw's Faderoom enough."</p><div class="client-meta"><div class="client-name">Toddler's Father</div><div class="client-service">Buzz Cut (Fred)</div></div></div><div class="testimonial-card reveal-on-scroll"><div class="stars">★★★★★</div><p class="testimonial-text">"This is my second time coming in and the guys are excellent — especially the barber who cuts my hair. He is very skilled and attentive. This has honestly been the best cut I have ever had. Thank you to the whole team."</p><div class="client-meta"><div class="client-name">Seth Mensah</div><div class="client-service">Elite Fade</div></div></div><div class="testimonial-card reveal-on-scroll"><div class="stars">★★★★★</div><p class="testimonial-text">"It is a very good place to get your hair trimmed in a very clean and reputable environment. The staff are friendly and hardworking. I am very happy and glad to have found this place."</p><div class="client-meta"><div class="client-name">Prince Osei Bamfo</div><div class="client-service">Clean Trim</div></div></div></div></div></section>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Authority.astro", void 0);
//#endregion
//#region src/components/Location.astro
var $$Location = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="location-section" id="location-section"><div class="container"><div class="center-header reveal-on-scroll"><span class="section-label">FIND US</span><h2 class="section-title">Two Locations. One Standard of Excellence.</h2></div><div class="dual-maps-grid reveal-on-scroll"><!-- USA Branch --><div class="branch-map-card"><div class="branch-map-label"><span class="branch-flag">🇺🇸</span><div><h4>Minneapolis, USA</h4><p>Northeast Minneapolis Area, MN</p></div><a href="https://www.google.com/maps/place/45%C2%B000'56.3%22N+93%C2%B015'59.9%22W/@45.0156531,-93.2668849,21z" target="_blank" rel="noopener noreferrer" class="info-link">Open in Maps ↗</a></div><div class="branch-map-frame"><iframe src="https://maps.google.com/maps?q=45.0156404,-93.2666473&z=16&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe></div><div class="branch-map-contact"><span>📞 +1 218-940-0374</span><a href="https://wa.me/12189400374" target="_blank" rel="noopener noreferrer" class="info-link">Chat on WhatsApp</a></div></div><!-- Ghana Branch --><div class="branch-map-card"><div class="branch-map-label"><span class="branch-flag">🇬🇭</span><div><h4>Accra, Ghana</h4><p>Yaw's Faderoom, Dome Road, Accra</p></div><a href="https://www.google.com/maps/place/YAW%E2%80%99s+FADEROOM/@5.6485209,-0.2296482,17z" target="_blank" rel="noopener noreferrer" class="info-link">Open in Maps ↗</a></div><div class="branch-map-frame"><iframe src="https://maps.google.com/maps?q=5.6485209,-0.2296482&z=17&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe></div><div class="branch-map-contact"><span>📞 +233 240695968</span><a href="https://wa.me/233240695968" target="_blank" rel="noopener noreferrer" class="info-link">Chat on WhatsApp</a></div></div></div><div class="location-hours-bar reveal-on-scroll"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span><strong>Opening Hours:</strong> Monday – Saturday &nbsp;|&nbsp; 9:00 AM – 9:00 PM &nbsp;|&nbsp; Sunday: Closed</span></div></div></section>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Location.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer"><div class="container footer-container"><div class="footer-brand"><div class="logo-box"><img src="/assets/yawlogo.jpeg" alt="Yaw's Faderoom Logo" class="logo-img"><span class="logo-text">YAW'S FADEROOM</span></div><p class="footer-desc">Elevating your style and redefining the grooming experience — one cut at a time.</p><div class="social-icons"><a href="https://www.instagram.com/yawsfaderoom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"></path></svg></a></div></div><div class="footer-links-group"><h4>Navigation</h4><a href="#">Home</a><a href="#about">Our Story</a><a href="#process">The Science</a><a href="#proof">Proof of Work</a><a href="#authority">Icons Served</a></div><div class="footer-links-group"><h4>Branches</h4><a href="#location-section">Northeast Minneapolis, USA</a><a href="#location-section">Accra, Ghana</a></div><div class="footer-links-group"><p class="copyright">&copy; 2026 Yaw's Faderoom. All rights reserved.</p></div></div></footer>`;
}, "C:/Users/USER/Desktop/YawFade/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/BookingModal.astro
var $$BookingModal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- Floating WhatsApp Button --><button class="floating-whatsapp-btn" id="floating-whatsapp-trigger" aria-label="Book via WhatsApp"><span class="whatsapp-pulse"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" class="whatsapp-icon-svg"><circle cx="29" cy="29" r="29" fill="#25D366"></circle><path fill="#fff" d="M29 13C20.163 13 13 20.163 13 29c0 2.912.784 5.64 2.15 8L13 45l8.294-2.117A15.92 15.92 0 0 0 29 45c8.837 0 16-7.163 16-16S37.837 13 29 13zm8.131 21.973c-.34.955-1.99 1.826-2.713 1.943-.694.113-1.571.16-2.534-.16-.584-.19-1.333-.443-2.283-.867-4.013-1.732-6.634-5.765-6.834-6.032-.2-.267-1.633-2.17-1.633-4.14 0-1.97 1.033-2.94 1.4-3.34.366-.4.8-.5 1.066-.5h.767c.247 0 .581-.093.912.696.34.814 1.153 2.99 1.254 3.207.1.217.167.47.033.75-.133.28-.2.453-.4.7-.2.247-.42.551-.6.74-.2.206-.408.43-.175.843.233.413 1.035 1.71 2.22 2.77 1.527 1.36 2.814 1.78 3.213 1.98.4.2.633.167.867-.1.233-.267 1-1.166 1.267-1.566.266-.4.533-.333.9-.2.366.133 2.333 1.1 2.733 1.3.4.2.666.3.766.467.1.166.1.953-.24 1.909z"></path></svg></button><!-- VIP Booking Modal --><div class="modal-overlay" id="booking-modal-overlay"><div class="modal-box"><button class="modal-close-btn" id="booking-modal-close" aria-label="Close modal">&times;</button><div class="booking-box-header"><h3>Claim Your VIP Spot</h3><p>Just one step away from skipping the queue. Fill in your details below and we will send your appointment summary straight to WhatsApp for instant confirmation.</p></div><div class="booking-branch-toggle"><button type="button" class="branch-modal-btn active" data-modal-branch="us" id="modal-branch-us">🇺🇸 USA Branch</button><button type="button" class="branch-modal-btn" data-modal-branch="gh" id="modal-branch-gh">🇬🇭 Ghana Branch</button></div><form class="booking-form" id="modal-booking-form"><input type="hidden" name="modal_sec_token" value="sec_yaws_fade_modal_2026"><div class="form-group"><label for="modal-booking-name">YOUR NAME</label><input type="text" id="modal-booking-name" placeholder="Enter your full name" required autocomplete="name"></div><div class="form-group"><label for="modal-booking-date">DATE</label><input type="date" id="modal-booking-date" required></div><div class="form-group"><label for="modal-booking-time">PREFERRED TIME</label><input type="time" id="modal-booking-time" required></div><p class="booking-disclaimer">⚠️ <strong>Please note:</strong> Booking online to skip the queue attracts an additional priority fee. Walk-in rates apply for standard queuing.</p><button type="submit" class="btn-submit-booking"><span>CONFIRM BOOKING VIA WHATSAPP</span><svg class="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></form></div></div>${renderScript($$result, "C:/Users/USER/Desktop/YawFade/src/components/BookingModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/YawFade/src/components/BookingModal.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Philosophy", $$Philosophy, {})}${renderComponent($$result, "ProofOfWork", $$ProofOfWork, {})}${renderComponent($$result, "Authority", $$Authority, {})}${renderComponent($$result, "Location", $$Location, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "BookingModal", $$BookingModal, {})}` })}`;
}, "C:/Users/USER/Desktop/YawFade/src/pages/index.astro", void 0);
var $$file = "C:/Users/USER/Desktop/YawFade/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
