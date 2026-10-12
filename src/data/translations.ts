/**
 * ─────────────────────────────────────────────────────────────────────────
 * HINDI–ENGLISH TRANSLATIONS
 * ─────────────────────────────────────────────────────────────────────────
 * Every user-facing string on the website in both languages.
 * `tHI` = Hindī (default for this Barhi, MP business), `tEN` = English.
 * Business name, phone, Instagram handle stay constant in both.
 */

export type Lang = "hi" | "en";

export const translations = {
  // ── NAVBAR / FOOTER ────────────────────────────────────────────────
  "nav.home": { hi: "होम", en: "Home" },
  "nav.about": { hi: "हमारे बारे में", en: "About" },
  "nav.services": { hi: "सेवाएं", en: "Services" },
  "nav.portfolio": { hi: "पोर्टफोलियो", en: "Portfolio" },
  "nav.gallery": { hi: "गैलरी", en: "Gallery" },
  "nav.contact": { hi: "संपर्क करें", en: "Contact" },
  "footer.tagline": {
    hi: "हमारे यहां दूल्हा पगड़ी एवं बाराती पगड़ी बांधी जाती हैं। बैलून, हल्दी, मेहंदी, रूम, बर्थडे डेकोरेशन। स्मोक एंट्री कोल्ड फायर एंट्री उपल्ब्ध है।",
    en: "Groom & barati pagdis tied here. Balloon, haldi, mehndi, room and birthday decoration. Smoke entry & cold fire entry available.",
  },
  "footer.follow": { hi: "हमें फॉलो करें", en: "Follow Us" },
  "footer.quickLinks": { hi: "त्वरित लिंक", en: "Quick Links" },
  "footer.ourServices": { hi: "हमारी सेवाएं", en: "Our Services" },
  "footer.rights": { hi: "सर्वाधिकार सुरक्षित।", en: "All Rights Reserved." },

  // ── WHATSAPP BUTTONS ──────────────────────────────────────────────
  "wa.book": { hi: "बुकिंग के लिए WhatsApp करें", en: "Book on WhatsApp" },
  "wa.defaultMessage": {
    hi: "नमस्ते श्री साफा इवेंट डेकोरेशन, मुझे अपने इवेंट के लिए डेकोरेशन के बारे में पूछताछ करनी है।",
    en: "Hello Shree Safa Event Decoration, I would like to enquire about decoration for my event.",
  },
  "wa.categoryMessage": {
    hi: "नमस्ते, मुझे आपकी {service} सेवा में रुचि है। कृपया विवरण और कोटेशन साझा करें।",
    en: "Hello, I am interested in your {service} services. Please share the details and quotation.",
  },
  "wa.ctaTitle": { hi: "अपनी सेलिब्रेशन डेकोरेशन करवाना चाहते हैं?", en: "Planning a Celebration?" },
  "wa.ctaBody": {
    hi: "एक WhatsApp संदेश भेजें — तारीख, स्थान और रंग बताएं। बाकी सब हम संभाल लेंगे।",
    en: "One WhatsApp message with your event, date and venue — we handle the rest.",
  },

  // ── HOME ──────────────────────────────────────────────────────────
  "home.hero.eyebrow": { hi: "बरही · साफा · हल्दी · मेहंदी · बर्थडे", en: "Barhi · Safa · Haldi · Mehndi · Birthday" },
  "home.hero.title1": { hi: "हर सेलिब्रेशन को बनाते हैं", en: "We Turn Every Celebration Into a" },
  "home.hero.title2": { hi: "सुंदर स्मृति।", en: "Beautiful Memory." },
  "home.hero.sub": {
    hi: "हाथ से बंधी दूल्हा और बाराती पगड़ियां, हल्दी और मेहंदी सेटअप, बैलून-वाले बर्थडे, वेलकम-बेबी रूम, और स्मोक व कोल्ड फायर एंट्री — हर प्रकार के उत्सव के लिए प्यार से बनाया गया डेकोरेशन।",
    en: "Hand-tied dulha & barati pagdis, haldi and mehndi setups, balloon-rich birthdays, welcome-baby rooms, and smoke & cold fire entries — decoration crafted with care for every kind of celebration.",
  },
  "home.hero.quoteBtn": { hi: "डेकोरेशन कोटेशन पाएं", en: "Get a Decoration Quote" },
  "home.hero.workBtn": { hi: "हमारा काम देखें", en: "View Our Work" },
  "home.intro.eyebrow": { hi: "हमारी दुकान", en: "The Studio" },
  "home.intro.title1": { hi: "सेलिब्रेशन की शुरुआत होती है", en: "The celebration starts with the" },
  "home.intro.title2": { hi: "साफा से।", en: "safa." },
  "home.intro.para1": {
    hi: "श्री साफा इवेंट डेकोरेशन का नाम उसी शिल्प से लिया गया है जिसके लिए हम जाने जाते हैं — दूल्हे और बारातियों की पगड़ी हाथ से बांधना। इसके बाद हम पूरे उत्सव की सजावट करते हैं: हल्दी और मेहंदी फंक्शन, बर्थडे, वेलकम-बेबी रूम, बैलून स्टाइलिंग, और शानदार स्मोक व कोल्ड फायर एंट्री।",
    en: "Shree Safa Event Decoration takes its name from the craft we are known for — tying the dulha's and baratis' pagdis by hand. From there, we decorate the whole celebration: haldi and mehndi functions, birthdays, welcome-baby rooms, balloon styling, and cinematic smoke & cold fire entries.",
  },
  "home.intro.para2": {
    hi: "हर सेटअप आपके रंगों और अनुष्ठानों के अनुसार, समय पर, साइट पर तैयार होता है — ताकि मेहमानों के आने पर सब कुछ ठीक वैसा ही दिखे जैसा आपने सोचा था।",
    en: "Every setup is built on-site, on time, and around your colours and rituals — so when the guests walk in, everything looks exactly the way you imagined.",
  },
  "home.intro.aboutBtn": { hi: "हमारे बारे में और जानें", en: "More About Us" },
  "home.categories.eyebrow": { hi: "इवेंट श्रेणियां", en: "Event Categories" },
  "home.categories.title": { hi: "हम क्या सजाते हैं", en: "What We Decorate" },
  "home.categories.view": { hi: "देखें →", en: "View →" },
  "home.featured.eyebrow": { hi: "चुनिंदा काम", en: "Featured Work" },
  "home.featured.title": { hi: "हाल की सजावट", en: "Recent Decorations" },
  "home.featured.all": { hi: "पूरा पोर्टफोलियो", en: "Full Portfolio" },
  "home.services.eyebrow": { hi: "सेवाएं", en: "Services" },
  "home.services.title": { hi: "हम क्या बनाते हैं", en: "What We Create" },
  "home.why.eyebrow": { hi: "हमें क्यों चुनें", en: "Why Choose Us" },
  "home.why.title": { hi: "श्री साफा इवेंट डेकोरेशन क्यों", en: "Why Shree Safa Event Decoration" },
  "home.visual.quote": {
    hi: "“हमारे यहां दूल्हा पगड़ी एवं बाराती पगड़ी बांधी जाती हैं।”",
    en: "“At our place, groom's and barati's pagdis are tied.”",
  },
  "home.visual.attribution": {
    hi: "— हमारे Instagram bio से: यहां दूल्हा और बाराती पगड़ी बंधती है।",
    en: "— from our Instagram bio: groom & barati pagdis, tied here.",
  },
  "home.portfolio.eyebrow": { hi: "पोर्टफोलियो", en: "Portfolio" },
  "home.portfolio.title": { hi: "हमारे काम की एक झलक", en: "A Look at Our Work" },

  // ── ABOUT ─────────────────────────────────────────────────────────
  "about.hero.eyebrow": { hi: "हमारे बारे में", en: "About Us" },
  "about.hero.title": {
    hi: "एक खास शिल्प के इर्द-गिर्द बनी डेकोरेशन दुकान",
    en: "A Decoration Studio Built Around a Signature Craft",
  },
  "about.hero.sub": {
    hi: "यहां पढ़ा हर कुछ हमारे Instagram पर साझा किए काम से लिया गया है — {handle}।",
    en: "Everything you'll read here comes from the work we share on Instagram — {handle}.",
  },
  "about.who.eyebrow": { hi: "हम कौन हैं", en: "Who We Are" },
  "about.who.title": { hi: "हमारा नाम ही हमारा शिल्प है — साफा।", en: "Our name is our craft — the safa." },
  "about.who.para1": {
    hi: "श्री साफा इवेंट डेकोरेशन {location} में स्थित एक इवेंट डेकोरेशन स्टूडियो है। स्टूडियो का नाम उसकी सबसे निजी सेवा से आता है: साफा बांधना — दूल्हे और बारात की पगड़ी। जैसा हमारे Instagram bio में लिखा है, “हमारे यहां दूल्हा पगड़ी एवं बाराती पगड़ी बांधी जाती हैं”।",
    en: "Shree Safa Event Decoration is an event decoration studio based in {location}. The studio's name comes from its most personal service: tying the safa — the pagdi worn by the dulha and his baraat. As our Instagram bio puts it, “groom and barati pagdis are tied here”.",
  },
  "about.who.para2": {
    hi: "उस विशेष शिल्प के चारों ओर, यह स्टूडियो पूरे उत्सवों की सजावट करता है: हल्दी और मेहंदी फंक्शन, बर्थडे, वेलकम-बेबी रूम, रूम स्टाइलिंग, बैलून इंस्टॉलेशन, और सिनेमाई स्मोक व कोल्ड फायर एंट्री।",
    en: "Around that signature craft, the studio decorates complete celebrations: haldi and mehndi functions, birthdays, welcome-baby rooms, room styling, balloon installations, and cinematic smoke & cold fire entries.",
  },
  "about.who.para3": {
    hi: "हम करते हर प्रकार के काम आप हमारे Instagram फीड पर देख सकते हैं — यही हमारी जीवित पोर्टफोलियो है, जिसे हर इवेंट के साथ अपडेट किया जाता है।",
    en: "You can see every kind of work we do on our Instagram feed — it is our living portfolio, updated with each event we decorate.",
  },
  "about.approach.eyebrow": { hi: "हमारा तरीका", en: "Our Approach" },
  "about.approach.title": { hi: "हम आपका उत्सव कैसे सजाते हैं", en: "How We Decorate Your Celebration" },
  "about.step1.title": { hi: "सुनें और योजना बनाएं", en: "Listen & Plan" },
  "about.step1.body": {
    hi: "आप हमें WhatsApp या कॉल पर इवेंट, तारीख, स्थान और अपने पसंदीदा रंग बताते हैं। हम आपके अनुष्ठान और स्थान के अनुकूल डेकोरेशन शैलियां सुझाते हैं।",
    en: "You tell us the event, date, venue and the colours you love — on WhatsApp or a call. We suggest decoration styles that fit your ritual and your space.",
  },
  "about.step2.title": { hi: "तैयारी और शिल्प", en: "Prepare & Craft" },
  "about.step2.body": {
    hi: "साफा हाथ से बंधे हैं; बैलून, पर्दे, फूल और रोशनी आपकी थीम के लिए तैयार होते हैं। आपके मेहमानों के सामने कुछ भी आकस्मिक नहीं किया जाता।",
    en: "Safas are tied by hand; balloons, drapes, florals and lights are prepared for your theme. Nothing is improvised in front of your guests.",
  },
  "about.step3.title": { hi: "साइट पर सेटअप", en: "Set Up On-Site" },
  "about.step3.body": {
    hi: "हम आपके घर या स्थान पर पहुंचते हैं और उत्सव शुरू होने से पहले सेटअप करते हैं — हल्दी मंच से लेकर स्मोक एंट्री तक, ताकि पहला दृश्य अद्भुत हो।",
    en: "We arrive at your home or venue and set up before the celebration — from the haldi stage to the smoke entry — so the first look is perfect.",
  },
  "about.values.title": {
    hi: "पेशेवर हिस्सेदारी, व्यक्तिगत प्रयास",
    en: "Professional execution, personal care",
  },
  "about.values.body": {
    hi: "डेकोरेशन एक दिन की कला है — पहली ही बार में सही होना चाहिए। हम आपके अनुसूची, रंगों और छोटे विवरणों से आपका सेटअप योजना बनाते हैं: पर्दे का गिरना, माला का संतुलन, एंट्री इफेक्ट का समय।",
    en: "Decoration is a one-day art — it has to be right the first time. We plan every setup around your schedule, coordinate colours with your outfits, and stay attentive to the small details: the fall of a drape, the balance of a garland, the timing of an entry effect.",
  },
  "about.value1": { hi: "दूल्हे और हर बाराती के लिए हाथ से बंधी साफा", en: "Hand-tied safas for the dulha and every barati" },
  "about.value2": { hi: "थीम-मैच हल्दी, मेहंदी और बर्थडे सेटअप", en: "Theme-matched haldi, mehndi and birthday setups" },
  "about.value3": { hi: "वेलकम, एंट्री और बैकड्रॉप के लिए बैलून स्टाइलिंग", en: "Balloon styling for welcomes, entries and backdrops" },
  "about.value4": { hi: "सुरक्षित, निगरानी वाला स्मोक व कोल्ड फायर इफेक्ट", en: "Safe, supervised smoke & cold fire effects" },
  "about.value5": { hi: "घर, हॉल या वेन्यू में साइट पर सेटअप", en: "On-site setup at home, hall or venue" },

  // ── SERVICES LIST ─────────────────────────────────────────────────
  "services.hero.eyebrow": { hi: "हमारी सेवाएं", en: "Our Services" },
  "services.hero.title": { hi: "हर प्रकार के उत्सव के लिए डेकोरेशन", en: "Decoration for Every Kind of Celebration" },
  "services.hero.sub": {
    hi: "ये वो सेवाएं हैं जो हम अपने Instagram पर साझा करते हैं — हर एक का अपना पेज और पोर्टफोलियो है।",
    en: "These are the services we offer and share on our Instagram — each one with its own page and portfolio.",
  },
  "services.card.view": { hi: "यह सेवा देखें", en: "View This Service" },
  "services.card.enquire": { hi: "इस डेकोरेशन के लिए पूछें", en: "Enquire for This Decoration" },

  // ── SERVICE CATEGORY PAGE ─────────────────────────────────────────
  "svc.about.eyebrow": { hi: "इस सेवा के बारे में", en: "About This Service" },
  "svc.about.title": { hi: "श्री साफा द्वारा {short}", en: "{short} by Shree Safa" },
  "svc.projects.title": { hi: "चुनिंदा {short} प्रोजेक्ट्स", en: "Featured {short} Projects" },
  "svc.gallery.title": { hi: "{short} गैलरी", en: "{short} Gallery" },
  "svc.gallery.sub": { hi: "पूरे स्क्रीन पर देखने के लिए किसी भी फोटो पर टैप करें।", en: "Tap any photo to view it full-screen." },
  "svc.related.title": { hi: "संबंधित सजावट", en: "Related Decorations" },
  "svc.cta.title": { hi: "{short} डेकोरेशन योजना बना रहे हैं?", en: "Planning {short} Decoration?" },

  // ── PORTFOLIO ─────────────────────────────────────────────────────
  "portfolio.hero.eyebrow": { hi: "हमारा पोर्टफोलियो", en: "Our Portfolio" },
  "portfolio.hero.title": { hi: "काम खुद बोलता है", en: "The Work Speaks for Itself" },
  "portfolio.hero.sub": {
    hi: "जो सजावट आप योजना बना रहे हैं उसके अनुसार फ़िल्टर करें — नीचे हर प्रोजेक्ट हमारा पूरा हुआ काम है जो हमने Instagram पर साझा किया।",
    en: "Filter by the kind of decoration you're planning — every project below is work we've completed and shared on Instagram.",
  },
  "portfolio.empty": {
    hi: "इस श्रेणी में अभी कोई प्रोजेक्ट नहीं है — थोड़ी देर में दोबारा देखें।",
    en: "No projects in this category yet — check back soon.",
  },
  "portfolio.filter.all": { hi: "सभी", en: "All" },

  // ── PROJECT DETAIL ────────────────────────────────────────────────
  "proj.category": { hi: "इवेंट श्रेणी", en: "Event Category" },
  "proj.aboutLink": { hi: "इस सेवा के बारे में →", en: "About this service →" },
  "proj.highlights": { hi: "डेकोरेशन विशेषताएं", en: "Decoration Highlights" },
  "proj.sidebar.title": { hi: "इसी तरह की सजावट चाहिए?", en: "Want a Similar Decoration?" },
  "proj.sidebar.body": {
    hi: "हमें अपनी इवेंट तारीख और स्थान बताएं — हम उसे साकार कर देंगे।",
    en: "Tell us your event date and venue — we'll make it happen.",
  },
  "proj.sidebar.quote": { hi: "WhatsApp पर कोटेशन लें", en: "Get a Quote on WhatsApp" },
  "proj.sidebar.request": { hi: "कोटेशन का अनुरोध", en: "Request a Quote" },
  "proj.more.title": { hi: "हमारे और काम", en: "More of Our Work" },
  "proj.enquiry": {
    hi: "नमस्ते, मैंने आपका \"{title}\" प्रोजेक्ट देखा और मुझे इसी तरह की सजावट चाहिए। कृपया विवरण और कोटेशन साझा करें।",
    en: "Hello, I saw your \"{title}\" project and I want a similar decoration. Please share the details and quotation.",
  },

  // ── GALLERY ───────────────────────────────────────────────────────
  "gallery.hero.eyebrow": { hi: "गैलरी", en: "Gallery" },
  "gallery.hero.title": { hi: "हर सेटअप, करीब से", en: "Every Setup, Up Close" },
  "gallery.hero.sub": {
    hi: "पूरा संग्रह ब्राउज़ करें। पूरी स्क्रीन में देखने के लिए किसी भी फोटो पर टैप करें — आगे-पीछे जाने के लिए स्वाइप या एरो कीज़ का उपयोग करें।",
    en: "Browse the full collection. Tap any photo for a full-screen view — swipe or use arrow keys to move through.",
  },

  // ── CONTACT ───────────────────────────────────────────────────────
  "contact.hero.eyebrow": { hi: "संपर्क करें", en: "Contact" },
  "contact.hero.title": { hi: "हमारे साथ अगला उत्सव योजना बनाएं", en: "Plan Your Next Celebration With Us" },
  "contact.hero.sub": {
    hi: "नीचे विवरण भरें — आपकी पूछताछ सीधे WhatsApp में खुलेगी ताकि हम तेजी से जवाब दें।",
    en: "Fill in the details below — your enquiry opens directly in WhatsApp so we can reply fast.",
  },
  "contact.form.title": { hi: "कोटेशन का अनुरोध", en: "Request a Quote" },
  "contact.form.sub": {
    hi: "सभी फ़ील्ड हमें सटीक कोटेशन देने में मदद करते हैं — लेकिन केवल नाम, फ़ोन और इवेंट प्रकार आवश्यक हैं।",
    en: "All fields help us quote accurately — but only name, phone and event type are required.",
  },
  "contact.form.name": { hi: "नाम *", en: "Name *" },
  "contact.form.namePh": { hi: "आपका पूरा नाम", en: "Your full name" },
  "contact.form.phone": { hi: "फ़ोन नंबर *", en: "Phone Number *" },
  "contact.form.phonePh": { hi: "आपका मोबाइल नंबर", en: "Your mobile number" },
  "contact.form.eventType": { hi: "इवेंट प्रकार *", en: "Event Type *" },
  "contact.form.eventDate": { hi: "इवेंट की तारीख", en: "Event Date" },
  "contact.form.venue": { hi: "स्थान / स्थल", en: "Venue / Location" },
  "contact.form.venuePh": { hi: "घर, हॉल या स्थल का नाम", en: "Home, hall or venue name" },
  "contact.form.budget": { hi: "बजट सीमा", en: "Budget Range" },
  "contact.form.budgetPh": { hi: "वैकल्पिक", en: "Optional" },
  "contact.form.requirement": { hi: "डेकोरेशन आवश्यकता", en: "Decoration Requirement" },
  "contact.form.requirementPh": { hi: "जैसे: झूला के साथ पीली हल्दी का मंच", en: "e.g. marigold haldi stage with jhula" },
  "contact.form.message": { hi: "संदेश", en: "Message" },
  "contact.form.messagePh": { hi: "कुछ और जो हमें पता होना चाहिए…", en: "Anything else we should know…" },
  "contact.form.submit": { hi: "कोटेशन का अनुरोध", en: "Request a Quote" },
  "contact.form.sent": {
    hi: "आपकी पूछताछ के साथ WhatsApp खुल गया होना चाहिए। यदि नहीं खुला, सीधे हमें {phone} पर संदेश भेजें।",
    en: "WhatsApp should have opened with your enquiry. If it didn't, message us directly at {phone}.",
  },
  "contact.waPhone": { hi: "WhatsApp और कॉल", en: "WhatsApp & Call" },
  "contact.waPhoneSub": { hi: "मोबाइल — आधिकारिक Instagram bio से", en: "Mobile — from the official Instagram bio" },
  "contact.waChat": { hi: "WhatsApp पर चैट करें", en: "Chat on WhatsApp" },
  "contact.insta.sub": { hi: "हमारी पूरी, अप-टू-डेट पोर्टफोलियो हमारे फीड पर है", en: "Our full, up-to-date portfolio lives on our feed" },
  "contact.area.sub": {
    hi: "हम अपने क्षेत्र के घरों, हॉलों और स्थलों में सजावट करते हैं।",
    en: "We decorate at homes, halls and venues across our area.",
  },

  // ── COMMON ───────────────────────────────────────────────────────
  "common.service": { hi: "सेवा", en: "Service" },
  "contact.area": { hi: "सेवा क्षेत्र", en: "Service Area" },
  "common.notFound.title": { hi: "पेज नहीं मिला", en: "Page Not Found" },
  "common.notFound.body": {
    hi: "जो पेज आप ढूँढ रहे हैं, वह नहीं मिला। होम पेज पर वापस चलें या हमारी सेवाएं देखें।",
    en: "The page you're looking for doesn't exist. Head back home or explore our services.",
  },
  "common.backHome": { hi: "होम पर जाएं", en: "Back to Home" },

  // ── SERVICE NAMES (code→label) ───────────────────────────────────
  "svc.safa-pagdi": { hi: "साफा व पगड़ी — दूल्हा और बाराती", en: "Safa & Pagdi — Dulha & Barati" },
  "svc.haldi-decoration": { hi: "हल्दी डेकोरेशन", en: "Haldi Decoration" },
  "svc.mehndi-decoration": { hi: "मेहंदी डेकोरेशन", en: "Mehndi Decoration" },
  "svc.birthday-decoration": { hi: "बर्थडे डेकोरेशन", en: "Birthday Decoration" },
  "svc.welcome-baby": { hi: "वेलकम बेबी व बेबी शावर डेकोरेशन", en: "Welcome Baby & Baby Shower Decoration" },
  "svc.room-decoration": { hi: "रूम डेकोरेशन", en: "Room Decoration" },
  "svc.balloon-decoration": { hi: "बैलून डेकोरेशन", en: "Balloon Decoration" },
  "svc.smoke-cold-fire-entry": { hi: "स्मोक व कोल्ड फायर एंट्री", en: "Smoke & Cold Fire Entry" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Look up a string; falls back to English, then to the key itself. */
export function get(lang: Lang, key: TranslationKey | string, vars?: Record<string, string>): string {
  const entry = (translations as Record<string, { hi: string; en: string }>)[key];
  if (!entry) return key;
  let text: string = entry[lang] ?? entry.en;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) text = text.replaceAll(`{${k}}`, v);
  }
  return text;
}
