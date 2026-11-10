// WAO CARGO — waocargo.com — DRAFT
// Language switcher (EN / FR / ES) + animated hero rotator.
// Translations cover the home page's main strings; footer stub pages are EN for now.
(function () {
  var I18N = {
    en: {
      nav_home: "Home", nav_services: "Services ▾", nav_carriers: "To Carriers", nav_brokers: "To Brokers", nav_contact: "Contact",
      hero_title: 'Your truck keeps moving. <span class="accent">We handle the rest.</span>',
      hero_lead: "WAO CARGO is your dispatch partner. We find the freight, negotiate the rate, and handle the paperwork — so you can focus on the road. You are, and always will be, our most precious capital.",
      cta_carrier: "Become a carrier — start here", cta_broker: "Are you a broker? Work with us",
      badge_lang: "EN · ES · FR — no extra charge", badge_noforced: "No forced dispatch", badge_support: "24/7 dispatch support",
      carriers_h: 'For <span class="accent">carriers &amp; owner-operators</span>',
      carriers_p: "You drive. We find the loads, negotiate the rate, set up the broker packets, check broker credit, chase detention and layover pay, and help with billing. You accept or refuse every load — nothing is ever forced on you.",
      carriers_card1_h: "What is included",
      carriers_li1: "Load search & booking on DAT, Truckstop and 123Loadboard",
      carriers_li2: "Rate negotiation with brokers", carriers_li3: "Broker packets, rate confirmations & broker credit checks",
      carriers_li4: "Fuel advances & quick-pay requests", carriers_li5: "Detention / TONU / layover claims",
      carriers_li6: "Billing assistance & 24/7 dispatch support",
      pricing_h: "Simple pricing — no setup fees, no contract",
      pricing_semi: "of gross per load — semis (dry van, reefer, flatbed)",
      pricing_hotshot: "of gross per load — hotshots & box trucks",
      pricing_note: "Aligned with your revenue: when you earn more, we earn more. Cancel anytime.",
      pricing_cta: "See the onboarding checklist",
      equip: "Equipment we serve: hotshots (35–40 ft) · box trucks · dry vans · flatbeds · reefers",
      brokers_h: 'For <span class="accent">load brokers</span>',
      brokers_p: "Reliable capacity, verified carriers, clean paperwork. Our carriers run with active MC authority, verified insurance and complete carrier packets — and we answer the phone when a load needs covering.",
      brokers_c1_h: "Verified carriers", brokers_c1_p: "MC authority checked with FMCSA, insurance certificate on file, W-9 and carrier profile complete before the first load.",
      brokers_c2_h: "Fast communication", brokers_c2_p: "One point of contact, in English, Spanish or French. Rate confirmations, tracking updates and PODs without chasing.",
      brokers_c3_h: "Cross-border ready", brokers_c3_p: "USA–Canada lanes with PARS / PAPS and FAST where needed, for carriers set up to run both sides of the border.",
      brokers_cta: "Talk to us about your lanes",
      platform_h: 'Our <span class="accent">platform</span>',
      platform_p: "We run on QuickManage AI, a modern AI transport management system: it automates load creation, driver updates and broker communication, pulls email, load boards, chats and bank data into one place, and tracks every change for margin and service analytics. We search freight on the three main North American load boards.",
      platform_qm: "Our TMS — AI dispatch software (qm PILOT) for load planning, tracking, documents, billing and payouts, with 100+ integrations: ELDs, load boards, accounting, factoring and fuel cards.",
      platform_dat: "North America's largest load board network — the volume leader, with lane rate data to negotiate from a position of strength.",
      platform_ts: "Truckstop for flatbed and hotshot freight with broker vetting; 123Loadboard as the strong-value third board for owner-operators.",
      platform_note: "QuickManage is the software we run on; WAO CARGO is an independent dispatch service, not a broker and not an employer.",
      contact_h: 'Contact — <span class="accent">let\'s talk</span>',
      contact_p: "Tell us about your truck and your lanes. We reply in English, Spanish or French — whichever you prefer.",
      form_name: "Your name", form_youare: "I am a…", form_carrier: "Carrier / owner-operator",
      form_broker: "Load broker", form_other: "Other", form_equip: "Equipment", form_msg: "Your message",
      form_send: "Send — we reply within one business day",
      contact_fb: "Find us on Facebook: WAO CARGO",
      footer_copy: "© 2026 WAO CARGO INC — Dispatching & carrier support, USA & Canada. WAO CARGO is an independent dispatch service, not a broker and not an employer.",
      slogan: "You cargo, our cargo…",
      contact_cta: "Open the contact form",
      cp_h: 'Contact — <span class="accent">let\'s talk</span>',
      cp_p: "Choose the form that fits you — one for carriers, one for brokers. We reply in English, Spanish or French.",
      cp_carriers_h: "Carriers & owner-operators",
      cp_carriers_p: "Tell us about your truck, your equipment and your lanes.",
      cp_carriers_cta: "Open the carrier form",
      cp_brokers_h: "Load brokers",
      cp_brokers_p: "Tell us about the loads you need covered and your lanes.",
      cp_brokers_cta: "Open the broker form",
      cookie_text: "We use cookies to improve your visit. Non-essential cookies stay off unless you accept.",
      cookie_accept: "Accept", cookie_decline: "Decline"
    },
    fr: {
      nav_home: "Accueil", nav_services: "Services ▾", nav_carriers: "Aux transporteurs", nav_brokers: "Aux courtiers", nav_contact: "Contact",
      hero_title: 'Votre camion continue de rouler. <span class="accent">Nous nous occupons du reste.</span>',
      hero_lead: "WAO CARGO est votre partenaire de dispatch. Nous trouvons le fret, négocions le tarif et gérons la paperasse — pour que vous puissiez vous concentrer sur la route. Vous êtes, et serez toujours, notre capital le plus précieux.",
      cta_carrier: "Devenir transporteur — commencez ici", cta_broker: "Vous êtes courtier ? Travaillons ensemble",
      badge_lang: "EN · ES · FR — sans frais supplémentaires", badge_noforced: "Aucun dispatch forcé", badge_support: "Support dispatch 24/7",
      carriers_h: 'Pour les <span class="accent">transporteurs et propriétaires-exploitants</span>',
      carriers_p: "Vous conduisez. Nous trouvons les chargements, négocions le tarif, préparons les dossiers courtiers, vérifions le crédit des courtiers, réclamons les frais de détention et d'attente, et aidons à la facturation. Vous acceptez ou refusez chaque chargement — rien ne vous est jamais imposé.",
      carriers_card1_h: "Ce qui est inclus",
      carriers_li1: "Recherche et réservation de chargements sur DAT, Truckstop et 123Loadboard",
      carriers_li2: "Négociation des tarifs avec les courtiers", carriers_li3: "Dossiers courtiers, confirmations de tarifs et vérification du crédit",
      carriers_li4: "Avances carburant et paiements rapides", carriers_li5: "Réclamations de détention / TONU / layover",
      carriers_li6: "Aide à la facturation et support dispatch 24/7",
      pricing_h: "Tarification simple — aucun frais d'installation, aucun contrat",
      pricing_semi: "du brut par chargement — semis (dry van, reefer, flatbed)",
      pricing_hotshot: "du brut par chargement — hotshots et box trucks",
      pricing_note: "Aligné sur vos revenus : quand vous gagnez plus, nous gagnons plus. Résiliable à tout moment.",
      pricing_cta: "Voir la liste d'onboarding",
      equip: "Équipements desservis : hotshots (35–40 pi) · box trucks · dry vans · flatbeds · reefers",
      brokers_h: 'Pour les <span class="accent">courtiers de chargements</span>',
      brokers_p: "Une capacité fiable, des transporteurs vérifiés, une paperasse propre. Nos transporteurs roulent avec une autorité MC active, une assurance vérifiée et des dossiers complets — et nous répondons au téléphone quand un chargement doit être couvert.",
      brokers_c1_h: "Transporteurs vérifiés", brokers_c1_p: "Autorité MC vérifiée auprès de la FMCSA, certificat d'assurance au dossier, W-9 et profil complétés avant le premier chargement.",
      brokers_c2_h: "Communication rapide", brokers_c2_p: "Un seul point de contact, en anglais, espagnol ou français. Confirmations de tarifs, suivis et POD sans relances.",
      brokers_c3_h: "Prêt pour le transfrontalier", brokers_c3_p: "Liaisons USA–Canada avec PARS / PAPS et FAST au besoin, pour les transporteurs équipés pour les deux côtés de la frontière.",
      brokers_cta: "Parlons de vos corridors",
      platform_h: 'Notre <span class="accent">plateforme</span>',
      platform_p: "Nous fonctionnons avec QuickManage AI, un système de gestion de transport moderne à base d'IA : il automatise la création des chargements, les mises à jour des chauffeurs et la communication avec les courtiers, centralise courriels, load boards, chats et données bancaires, et suit chaque changement pour l'analyse des marges et du service. Nous cherchons le fret sur les trois principaux load boards nord-américains.",
      platform_qm: "Notre TMS — logiciel de dispatch IA (qm PILOT) pour la planification, le suivi, les documents, la facturation et les paiements, avec plus de 100 intégrations : ELD, load boards, comptabilité, factoring et cartes carburant.",
      platform_dat: "Le plus grand réseau de load boards en Amérique du Nord — le leader en volume, avec des données de tarifs par corridor pour négocier en position de force.",
      platform_ts: "Truckstop pour le flatbed et le hotshot avec vérification des courtiers; 123Loadboard comme troisième board au meilleur rapport qualité-prix pour les propriétaires-exploitants.",
      platform_note: "QuickManage est le logiciel que nous utilisons; WAO CARGO est un service de dispatch indépendant, ni courtier ni employeur.",
      contact_h: 'Contact — <span class="accent">parlons-en</span>',
      contact_p: "Parlez-nous de votre camion et de vos corridors. Nous répondons en anglais, espagnol ou français — selon votre préférence.",
      form_name: "Votre nom", form_youare: "Je suis…", form_carrier: "Transporteur / propriétaire-exploitant",
      form_broker: "Courtier de chargements", form_other: "Autre", form_equip: "Équipement", form_msg: "Votre message",
      form_send: "Envoyer — réponse sous un jour ouvrable",
      contact_fb: "Retrouvez-nous sur Facebook : WAO CARGO",
      footer_copy: "© 2026 WAO CARGO INC — Dispatching et soutien aux transporteurs, USA et Canada. WAO CARGO est un service de dispatch indépendant, ni courtier ni employeur.",
      slogan: "Votre cargo, notre cargo…",
      contact_cta: "Ouvrir le formulaire de contact",
      cp_h: 'Contact — <span class="accent">parlons-en</span>',
      cp_p: "Choisissez le formulaire qui vous correspond — un pour les transporteurs, un pour les courtiers. Nous répondons en anglais, espagnol ou français.",
      cp_carriers_h: "Transporteurs et propriétaires-exploitants",
      cp_carriers_p: "Parlez-nous de votre camion, de votre équipement et de vos corridors.",
      cp_carriers_cta: "Ouvrir le formulaire transporteur",
      cp_brokers_h: "Courtiers de chargements",
      cp_brokers_p: "Parlez-nous des chargements à couvrir et de vos corridors.",
      cp_brokers_cta: "Ouvrir le formulaire courtier",
      cookie_text: "Nous utilisons des témoins (cookies) pour améliorer votre visite. Les témoins non essentiels restent désactivés sauf si vous acceptez.",
      cookie_accept: "Accepter", cookie_decline: "Refuser"
    },
    es: {
      nav_home: "Inicio", nav_services: "Servicios ▾", nav_carriers: "Para transportistas", nav_brokers: "Para brokers", nav_contact: "Contacto",
      hero_title: 'Su camión sigue en marcha. <span class="accent">Nosotros nos encargamos del resto.</span>',
      hero_lead: "WAO CARGO es su socio de despacho. Buscamos la carga, negociamos la tarifa y gestionamos el papeleo — para que usted se concentre en la carretera. Usted es, y siempre será, nuestro capital más precioso.",
      cta_carrier: "Ser transportista — empiece aquí", cta_broker: "¿Es broker? Trabaje con nosotros",
      badge_lang: "EN · ES · FR — sin costo adicional", badge_noforced: "Sin despacho forzado", badge_support: "Soporte de despacho 24/7",
      carriers_h: 'Para <span class="accent">transportistas y propietarios-operadores</span>',
      carriers_p: "Usted maneja. Nosotros buscamos las cargas, negociamos la tarifa, preparamos los paquetes de broker, verificamos el crédito del broker, reclamamos detención y layover, y ayudamos con la facturación. Usted acepta o rechaza cada carga — nada se le impone jamás.",
      carriers_card1_h: "Lo que está incluido",
      carriers_li1: "Búsqueda y reserva de cargas en DAT, Truckstop y 123Loadboard",
      carriers_li2: "Negociación de tarifas con brokers", carriers_li3: "Paquetes de broker, confirmaciones de tarifa y verificación de crédito",
      carriers_li4: "Anticipos de combustible y pagos rápidos", carriers_li5: "Reclamos de detención / TONU / layover",
      carriers_li6: "Ayuda con facturación y soporte de despacho 24/7",
      pricing_h: "Precios simples — sin cargos de instalación, sin contrato",
      pricing_semi: "del bruto por carga — semis (dry van, reefer, flatbed)",
      pricing_hotshot: "del bruto por carga — hotshots y box trucks",
      pricing_note: "Alineado con sus ingresos: cuando usted gana más, ganamos más. Cancele cuando quiera.",
      pricing_cta: "Ver la lista de onboarding",
      equip: "Equipos que atendemos: hotshots (35–40 pies) · box trucks · dry vans · flatbeds · reefers",
      brokers_h: 'Para <span class="accent">brokers de carga</span>',
      brokers_p: "Capacidad confiable, transportistas verificados, papeleo limpio. Nuestros transportistas operan con autoridad MC activa, seguro verificado y paquetes completos — y contestamos el teléfono cuando una carga necesita cobertura.",
      brokers_c1_h: "Transportistas verificados", brokers_c1_p: "Autoridad MC verificada con FMCSA, certificado de seguro en archivo, W-9 y perfil completos antes de la primera carga.",
      brokers_c2_h: "Comunicación rápida", brokers_c2_p: "Un solo punto de contacto, en inglés, español o francés. Confirmaciones de tarifa, actualizaciones de seguimiento y POD sin persecuciones.",
      brokers_c3_h: "Listos para transfronterizo", brokers_c3_p: "Corredores EE. UU.–Canadá con PARS / PAPS y FAST cuando se necesita, para transportistas preparados para ambos lados de la frontera.",
      brokers_cta: "Hablemos de sus corredores",
      platform_h: 'Nuestra <span class="accent">plataforma</span>',
      platform_p: "Operamos con QuickManage AI, un sistema moderno de gestión de transporte con IA: automatiza la creación de cargas, las actualizaciones de conductores y la comunicación con brokers, centraliza correo, load boards, chats y datos bancarios, y registra cada cambio para el análisis de márgenes y servicio. Buscamos flete en los tres principales load boards de Norteamérica.",
      platform_qm: "Nuestro TMS — software de despacho con IA (qm PILOT) para planificación, seguimiento, documentos, facturación y pagos, con más de 100 integraciones: ELD, load boards, contabilidad, factoring y tarjetas de combustible.",
      platform_dat: "La red de load boards más grande de Norteamérica — líder en volumen, con datos de tarifas por corredor para negociar desde una posición de fuerza.",
      platform_ts: "Truckstop para flatbed y hotshot con verificación de brokers; 123Loadboard como tercer board de gran valor para propietarios-operadores.",
      platform_note: "QuickManage es el software que usamos; WAO CARGO es un servicio de despacho independiente, ni broker ni empleador.",
      contact_h: 'Contacto — <span class="accent">hablemos</span>',
      contact_p: "Cuéntenos sobre su camión y sus corredores. Respondemos en inglés, español o francés — como usted prefiera.",
      form_name: "Su nombre", form_youare: "Yo soy…", form_carrier: "Transportista / propietario-operador",
      form_broker: "Broker de carga", form_other: "Otro", form_equip: "Equipo", form_msg: "Su mensaje",
      form_send: "Enviar — respondemos en un día hábil",
      contact_fb: "Encuéntrenos en Facebook: WAO CARGO",
      footer_copy: "© 2026 WAO CARGO INC — Despacho y apoyo a transportistas, EE. UU. y Canadá. WAO CARGO es un servicio de despacho independiente, ni broker ni empleador.",
      slogan: "Tu carga, nuestra carga…",
      contact_cta: "Abrir el formulario de contacto",
      cp_h: 'Contacto — <span class="accent">hablemos</span>',
      cp_p: "Elija el formulario que le corresponde — uno para transportistas, otro para brokers. Respondemos en inglés, español o francés.",
      cp_carriers_h: "Transportistas y propietarios-operadores",
      cp_carriers_p: "Cuéntenos sobre su camión, su equipo y sus corredores.",
      cp_carriers_cta: "Abrir el formulario de transportista",
      cp_brokers_h: "Brokers de carga",
      cp_brokers_p: "Cuéntenos sobre las cargas que necesita cubrir y sus corredores.",
      cp_brokers_cta: "Abrir el formulario de broker",
      cookie_text: "Usamos cookies para mejorar su visita. Las cookies no esenciales permanecen desactivadas a menos que usted las acepte.",
      cookie_accept: "Aceptar", cookie_decline: "Rechazar"
    }
  };

  var ROTATOR = {
    en: ["We find your loads — you drive.", "No forced dispatch. Ever.", "9% semis · 7% hotshots & box trucks.", "USA & Canada — in English, Spanish and French."],
    fr: ["Nous trouvons vos chargements — vous conduisez.", "Aucun dispatch forcé. Jamais.", "9 % semis · 7 % hotshots et box trucks.", "USA et Canada — en anglais, espagnol et français."],
    es: ["Buscamos sus cargas — usted maneja.", "Sin despacho forzado. Jamás.", "9% semis · 7% hotshots y box trucks.", "EE. UU. y Canadá — en inglés, español y francés."]
  };

  var lang = "en";
  var rotIdx = 0, rotTimer = null;

  function applyLang(l) {
    lang = l;
    try { localStorage.setItem("wao-lang", l); } catch (e) { /* storage unavailable */ }
    document.documentElement.lang = l;
    var dict = I18N[l] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-lang-block]").forEach(function (el) {
      el.style.display = el.getAttribute("data-lang-block") === l ? "" : "none";
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === l);
    });
    rotIdx = 0;
    showRotator();
  }

  function showRotator() {
    var el = document.getElementById("rotator-text");
    if (!el) return;
    var msgs = ROTATOR[lang] || ROTATOR.en;
    el.textContent = msgs[rotIdx % msgs.length];
    el.classList.remove("fade"); void el.offsetWidth; el.classList.add("fade");
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  rotTimer = setInterval(function () { rotIdx++; showRotator(); }, 4000);
  // Initial language: ?lang= wins, then the saved choice, then English.
  var initialLang = "en";
  try {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q && I18N[q]) initialLang = q;
    else { var saved = localStorage.getItem("wao-lang"); if (saved && I18N[saved]) initialLang = saved; }
  } catch (e) { /* storage unavailable — stay in English */ }
  // Cookie consent banner: non-essential cookies stay off unless accepted.
  (function () {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    var decided = false;
    try { decided = !!localStorage.getItem("wao-cookies"); } catch (e) { /* storage unavailable */ }
    if (!decided) banner.style.display = "flex";
    function choose(v) {
      try { localStorage.setItem("wao-cookies", v); } catch (e) { /* storage unavailable */ }
      banner.style.display = "none";
    }
    var a = document.getElementById("cookie-accept");
    if (a) a.addEventListener("click", function () { choose("accepted"); });
    var d = document.getElementById("cookie-decline");
    if (d) d.addEventListener("click", function () { choose("declined"); });
  })();
  applyLang(initialLang);
})();
