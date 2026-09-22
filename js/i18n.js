/* Arabic / English switcher.
   Translations are keyed on the exact English text as it appears on the page.
   To change a translation, edit the right-hand side below.
   To add a new one, add "English text": "Arabic text". */
(function(){
  "use strict";

  var TR = {
    /* ---- nav & chrome ---- */
    "Manufacturing Facility": "منشأة تصنيع",
    "Home": "الرئيسية",
    "About": "من نحن",
    "Products": "المنتجات",
    "Services": "الخدمات",
    "Gallery": "المعرض",
    "How We Build": "كيف نصنع",
    "Reviews": "آراء العملاء",
    "Contact": "اتصل بنا",
    "GCC Export": "التصدير لدول الخليج",
    "Towed out behind a tractor unit, or carried on a low-bed.": "تُسحب خلف جرّار، أو تُنقل على مقطورة منخفضة.",
    "Own wheels or low-bed": "على عجلاتها أو على منخفض",
    "Commercial invoice, certificate of origin and technical documentation.": "فاتورة تجارية وشهادة منشأ والوثائق الفنية.",
    "Documents supplied": "المستندات مُقدَّمة",
    "Finished, inspected and ready at Ras Al Khor.": "جاهزة ومفحوصة في رأس الخور.",
    "Collection from Dubai": "الاستلام من دبي",
    "How GCC Orders Work": "كيف تتم طلبات دول الخليج",
    "Bahrain": "البحرين",
    "Kuwait": "الكويت",
    "Qatar": "قطر",
    "Oman": "عُمان",
    "Saudi Arabia": "السعودية",
    "We have supplied buyers in Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Your trailer is built and handed over at our Ras Al Khor facility in Dubai, and you or your transport agent collect it — with the export documentation supplied by us.": "قمنا بتوريد مقطورات لعملاء في السعودية وعُمان وقطر والكويت والبحرين. تُبنى مقطورتك وتُسلَّم في منشأتنا برأس الخور في دبي، وتتولى أنت أو وكيل النقل الخاص بك استلامها — مع تزويدنا لك بمستندات التصدير.",
    "We Supply Across the GCC": "نورّد إلى جميع دول الخليج",
    "Buying From Outside the UAE": "الشراء من خارج الإمارات",
    "Buying from Saudi, Oman, Qatar, Kuwait or Bahrain? →": "تشتري من السعودية أو عُمان أو قطر أو الكويت أو البحرين؟ ←",
    "Shipping Trailers Across the GCC": "شحن المقطورات إلى دول الخليج",
    "Request a Quote": "اطلب عرض سعر",
    "Open menu": "فتح القائمة",
    "WhatsApp": "واتساب",
    "Email": "البريد الإلكتروني",
    "Call": "اتصال",
    "Chat on WhatsApp": "تواصل عبر واتساب",
    "Instagram": "إنستغرام",
    "Follow us on Instagram": "تابعنا على إنستغرام",
    "Open Instagram": "فتح إنستغرام",
    "Back to Home": "العودة للرئيسية",

    /* ---- hero ---- */
    "Trailer Solution · Dubai, UAE": "تريلر سوليوشن · دبي، الإمارات",
    "Trailer Manufacturer · Ras Al Khor, Dubai": "مُصنِّع مقطورات · رأس الخور، دبي",
    "TRAILERS": "المقطورات",
    "Built to Haul. Built to Last.": "صُنعت للنقل. صُنعت لتدوم.",
    "Built in Dubai for the UAE & GCC": "نصنعها في دبي للإمارات ودول الخليج",
    "Engineered on-spec. Built for the UAE's toughest roads.": "مصممة حسب المواصفات. مبنية لأصعب طرق الإمارات.",
    "Manufacturing": "التصنيع",
    "Since 2013": "منذ 2013",
    "Scroll": "مرّر للأسفل",

    /* ---- marquee ---- */
    "A-Frame Trailers": "مقطورات هيكل A",
    "Car Carrier Trailers": "مقطورات نقل السيارات",
    "Flatbed & Stake Body": "مسطحة وبجوانب قابلة للفك",
    "Curtain-Side Trailers": "مقطورات بستائر جانبية",
    "Box & Reefer Trailers": "مقطورات صندوقية ومبردة",
    "Heavy-Duty Cargo": "شحن للأحمال الثقيلة",
    "Ras Al Khor Industrial Area, Dubai": "منطقة رأس الخور الصناعية، دبي",

    /* ---- about ---- */
    "About Trailer Solution": "عن تريلر سوليوشن",
    "A Dubai manufacturing facility building trailers that work as hard as you do.": "منشأة تصنيع في دبي تبني مقطورات تعمل بجدّ بقدر ما تعمل أنت.",
    "Since 2013, Trailer Solution has been designing and fabricating heavy-duty trailers from our facility in Ras Al Khor Industrial Area 2, Dubai — built for logistics fleets, transport companies, and contractors across the UAE.": "منذ عام 2013، تقوم تريلر سوليوشن بتصميم وتصنيع المقطورات الثقيلة في منشأتنا بمنطقة رأس الخور الصناعية 2 في دبي — لأساطيل الخدمات اللوجستية وشركات النقل والمقاولين في جميع أنحاء الإمارات.",
    "Every chassis is fabricated in-house, from structural steel cutting and welding through to final finishing. We build to your axle configuration, payload, and cargo requirements — not off a fixed catalogue — so what leaves our yard is matched to the job it's going to do.": "يُصنَّع كل شاسيه داخل منشأتنا، من قصّ الفولاذ الإنشائي ولحامه وحتى التشطيب النهائي. نبني وفق عدد المحاور والحمولة ومتطلبات البضائع الخاصة بك — وليس من كتالوج ثابت — ليخرج من ساحتنا ما يناسب المهمة تمامًا.",
    "From single trailers to fleet orders, our team works directly with owners and operators to spec, build, and deliver on time.": "من المقطورة الواحدة إلى طلبات الأساطيل، يعمل فريقنا مباشرةً مع المالكين والمشغّلين لتحديد المواصفات والتصنيع والتسليم في الموعد.",
    "Years of Experience": "سنوات من الخبرة",
    "Manufactured Products": "منتج تم تصنيعه",
    "Custom Specs": "مواصفات مخصصة",
    "Every chassis is inspected before it becomes someone's livelihood on the road.": "يُفحص كل شاسيه قبل أن يصبح مصدر رزق أحدهم على الطريق.",
    "Precision Engineering": "هندسة دقيقة",

    /* ---- products ---- */
    "What We Build": "ما نصنعه",
    "Trailer Types & Products": "أنواع المقطورات والمنتجات",
    "Six core ranges, each fabricated to order — combine, extend, or customize any of them to match your operation.": "ست فئات أساسية، كل منها يُصنَّع حسب الطلب — يمكن دمجها أو تمديدها أو تخصيصها لتناسب عملك.",
    "Heavy-duty tandem-axle flatbeds with a raised A-frame rack and upper lashing hooks for securing long or tall loads such as pipes, glass, and steel sections, rated up to 60 tonnes.": "مقطورات مسطحة ثقيلة بمحورين مزدوجين مع رفّ مرتفع بهيكل A وخطاطيف تثبيت علوية لتأمين الأحمال الطويلة أو المرتفعة مثل الأنابيب والزجاج والمقاطع الفولاذية، بحمولة تصل إلى 60 طنًا.",
    "60-Ton Capacity": "حمولة 60 طنًا",
    "Tandem Axle": "محور مزدوج",
    "A-Frame Rack": "رفّ بهيكل A",
    "Open-deck cargo trailers with removable stakes and mesh sides for general freight, building materials, and palletized loads.": "مقطورات شحن مفتوحة السطح بقوائم قابلة للفك وجوانب شبكية للبضائع العامة ومواد البناء والحمولات المرصوصة على منصات.",
    "Removable Stakes": "قوائم قابلة للفك",
    "Mesh Sides": "جوانب شبكية",
    "Open Deck": "سطح مفتوح",
    "Flatbeds fitted with an arched canopy roof and caged sides — weatherproof cargo cover with side-loading access.": "مقطورات مسطحة مزودة بسقف مقوّس وجوانب شبكية — غطاء مقاوم للعوامل الجوية مع إمكانية التحميل من الجانب.",
    "Arched Canopy": "سقف مقوّس",
    "Weatherproof": "مقاوم للعوامل الجوية",
    "Side Access": "تحميل جانبي",
    "Fully enclosed box trailers, insulated and refrigeration-ready, for dry goods, retail distribution, and temperature-sensitive cargo.": "مقطورات صندوقية مغلقة بالكامل، معزولة وجاهزة للتبريد، للبضائع الجافة وتوزيع التجزئة والبضائع الحساسة لدرجات الحرارة.",
    "Insulated": "معزولة",
    "Reefer-Ready": "جاهزة للتبريد",
    "Enclosed": "مغلقة",
    "Heavy-Duty Cargo Trailers": "مقطورات الشحن الثقيل",
    "Reinforced mesh-sided trailers built for scrap, aggregate, and loose heavy cargo where extra containment and durability matter.": "مقطورات بجوانب شبكية مقوّاة مصممة للخردة والركام والبضائع الثقيلة السائبة حيث يهمّ الاحتواء الإضافي والمتانة.",
    "Reinforced Mesh": "شبك مقوّى",
    "Heavy Load": "حمولة ثقيلة",
    "Drop Sides": "جوانب قابلة للإنزال",
    "Open-deck single-level vehicle transporters with a full-length top walkway, mesh loading ramp, and multiple lashing points for hauling cars and light vehicles.": "ناقلات مركبات بمستوى واحد وسطح مفتوح مع ممر علوي بطول المقطورة، ومنحدر تحميل شبكي، ونقاط تثبيت متعددة لنقل السيارات والمركبات الخفيفة.",
    "Vehicle Transport": "نقل المركبات",
    "Need Something Different?": "تحتاج شيئًا مختلفًا؟",
    "Every trailer is built to spec.": "كل مقطورة تُبنى حسب المواصفات.",
    "Tell us your axle count, payload, and cargo type — we'll fabricate to match.": "أخبرنا بعدد المحاور والحمولة ونوع البضائع — وسنصنّع ما يناسبها.",
    "Discuss Your Build": "ناقش مشروعك",

    /* ---- services ---- */
    "Capabilities": "إمكانياتنا",
    "Manufacturing services built around your fleet.": "خدمات تصنيع مبنية حول أسطولك.",
    "From first sketch to final delivery, our Ras Al Khor facility handles every stage of the build in-house.": "من الرسم الأول وحتى التسليم النهائي، تتولى منشأتنا في رأس الخور كل مرحلة من مراحل التصنيع داخليًا.",
    "Custom Fabrication": "تصنيع حسب الطلب",
    "Built to your exact axle configuration, deck length, and payload requirement — not a fixed catalogue spec.": "يُبنى وفق عدد المحاور وطول السطح ومتطلبات الحمولة بدقة — وليس حسب مواصفات كتالوج ثابت.",
    "Heavy-Duty Steel Construction": "إنشاءات فولاذية ثقيلة",
    "Structural steel chassis with corrosion-resistant coating, engineered to handle UAE heat, load cycles, and mileage.": "شاسيه من الفولاذ الإنشائي بطلاء مقاوم للتآكل، مصمم لتحمّل حرارة الإمارات ودورات التحميل والمسافات الطويلة.",
    "Precision Welding & QC": "لحام دقيق وضبط جودة",
    "Every chassis is inspected at each fabrication stage, from frame welds to axle alignment, before it leaves the yard.": "يُفحص كل شاسيه في كل مرحلة تصنيع، من لحام الهيكل إلى محاذاة المحاور، قبل مغادرته الساحة.",
    "UAE-Wide Delivery & Registration": "تسليم وتسجيل في كل الإمارات",
    "Support through RTA registration and delivery of your finished trailer anywhere in the UAE.": "دعم في تسجيل هيئة الطرق والمواصلات وتسليم مقطورتك الجاهزة في أي مكان بالإمارات.",
    "After-Sales Support": "دعم ما بعد البيع",
    "Ongoing spare parts, repair, and maintenance support from the same team that built your trailer.": "قطع غيار وإصلاح وصيانة مستمرة من نفس الفريق الذي بنى مقطورتك.",

    /* ---- gallery ---- */
    "A look at trailers off our production line — every unit fabricated in-house at Ras Al Khor.": "نظرة على المقطورات الخارجة من خط إنتاجنا — كل وحدة مُصنَّعة داخليًا في رأس الخور.",
    "A look at trailers off our production line — every unit fabricated in-house at Ras Al Khor Industrial Area 2, Dubai. Click any photo to view it full size.": "نظرة على المقطورات الخارجة من خط إنتاجنا — كل وحدة مُصنَّعة داخليًا في منطقة رأس الخور الصناعية 2، دبي. اضغط على أي صورة لعرضها بالحجم الكامل.",
    "View Full Gallery": "عرض المعرض كاملًا",
    "Car Carrier — Multi-Level": "ناقلة سيارات — متعددة المستويات",
    "Car Carrier — Fleet Build": "ناقلة سيارات — طلب أسطول",
    "Box Trailer — On the Road": "مقطورة صندوقية — على الطريق",
    "Box Trailer — Side Profile": "مقطورة صندوقية — منظر جانبي",
    "Curtain-Side — Canopy": "ستائر جانبية — بسقف",
    "Stake Body — On Site": "بجوانب قابلة للفك — في الموقع",
    "A-Frame Trailer — Side": "مقطورة هيكل A — جانبي",
    "Heavy Cargo — Mesh Body": "شحن ثقيل — هيكل شبكي",
    "Box Trailer — Rear Angle": "مقطورة صندوقية — زاوية خلفية",
    "Video": "فيديو",
    "Footage from the workshop floor.": "لقطات من أرض الورشة.",
    "Inside the Workshop": "داخل الورشة",
    "Footage from the floor at Ras Al Khor — the fabrication behind every trailer we deliver.": "لقطات من أرض المصنع في رأس الخور — التصنيع الذي يقف خلف كل مقطورة نسلّمها.",
    "Workshop Video": "فيديو الورشة",
    "Inside the Facility": "داخل المنشأة",
    "Copy": "نسخ",
    "Copied": "تم النسخ",

    "Call now": "اتصل الآن",
    "Open WhatsApp": "فتح واتساب",
    "Ahmed Khan": "أحمد خان",
    "Muhammad Altaf": "محمد ألطاف",
    "Faisal Munir": "فيصل منير",
    "Cutting & Grinding": "القصّ والجلخ",
    "Want one built to your spec?": "تريد واحدة حسب مواصفاتك؟",
    "Tell us your axle count, payload and cargo type — we'll fabricate to match.": "أخبرنا بعدد المحاور والحمولة ونوع البضائع — وسنصنّع ما يناسبها.",
    "This video hasn't been uploaded yet — add the file to the": "لم يتم رفع هذا الفيديو بعد — أضف الملف إلى مجلد",
    "folder.": ".",
    "Stake Cage Trailer with Tractor": "مقطورة بقفص وجرّار",
    "Car Carrier — White Skeletal Frame": "ناقلة سيارات — هيكل أبيض",
    "Car Carrier — Yellow, Client Livery": "ناقلة سيارات — صفراء بألوان العميل",
    "Car Carrier — Yellow & Blue": "ناقلة سيارات — أصفر وأزرق",
    "Box Trailer with Tractor Unit": "مقطورة صندوقية مع جرّار",
    "Curtain-Side Trailer — Cream": "مقطورة بستائر جانبية — بيج",
    "A-Frame Trailer — Maroon, Rear": "مقطورة هيكل A — عنابي، خلفي",
    "Heavy-Duty Mesh Cargo Trailer": "مقطورة شحن شبكية ثقيلة",
    "Inside the Workshop — Fabrication": "داخل الورشة — التصنيع",
    "Cutting & Grinding — Chassis Prep": "القصّ والجلخ — تجهيز الشاسيه",

    /* ---- reviews ---- */
    "What Our Clients Say": "ماذا يقول عملاؤنا",
    "Trusted by Fleets Across the GCC": "موثوق به من أساطيل في دول الخليج",
    "From single-unit owners to logistics operators running dozens of trailers.": "من أصحاب المقطورة الواحدة إلى مشغّلي الخدمات اللوجستية الذين يديرون عشرات المقطورات.",
    "Very professional team from start to end. The trailer was built exactly according to our requirements, and the quality of the fabrication was excellent.": "فريق محترف جدًا من البداية إلى النهاية. تم بناء المقطورة تمامًا وفق متطلباتنا، وجودة التصنيع كانت ممتازة.",
    "Trailer Solution understood exactly what I needed and provided a strong, reliable trailer at a competitive price. The process was smooth.": "فهمت تريلر سوليوشن تمامًا ما أحتاجه وقدّمت مقطورة قوية وموثوقة بسعر تنافسي. وكانت العملية سلسة.",
    "Good quality trailer and very responsive customer service. The trailer was delivered within the agreed timeframe — I would definitely get back to them.": "مقطورة بجودة جيدة وخدمة عملاء سريعة الاستجابة. تم تسليم المقطورة ضمن المدة المتفق عليها — وسأتعامل معهم مرة أخرى بالتأكيد.",
    "5 out of 5": "5 من 5",

    /* ---- contact ---- */
    "Get In Touch": "تواصل معنا",
    "Tell us what you need built — we'll get back to you with a spec and timeline.": "أخبرنا بما تريد تصنيعه — وسنعود إليك بالمواصفات والجدول الزمني.",
    "Call / WhatsApp": "اتصال / واتساب",
    "Facility Address": "عنوان المنشأة",
    "Ras Al Khor Industrial Area 2, Dubai, UAE": "منطقة رأس الخور الصناعية 2، دبي، الإمارات",
    "WhatsApp Us": "راسلنا على واتساب",
    "Call Now": "اتصل الآن",
    "Tell Us About Your Trailer": "أخبرنا عن مقطورتك",
    "Fill this in and we'll open it straight into WhatsApp so we can reply fast.": "املأ النموذج وسنفتحه مباشرةً في واتساب لنرد عليك بسرعة.",
    "Opening WhatsApp with your request…": "جارٍ فتح واتساب بطلبك…",
    "Full Name": "الاسم الكامل",
    "Phone Number": "رقم الهاتف",
    "Trailer Type": "نوع المقطورة",
    "Project Details": "تفاصيل المشروع",
    "Send via WhatsApp": "إرسال عبر واتساب",
    "Prefer email? Write to": "تفضّل البريد الإلكتروني؟ راسلنا على",

    /* ---- trailer type options ---- */
    "Select a trailer type": "اختر نوع المقطورة",
    "A-Frame Trailer": "مقطورة هيكل A",
    "Car Carrier Trailer": "مقطورة نقل سيارات",
    "Flatbed / Stake Body": "مسطحة / بجوانب قابلة للفك",
    "Curtain-Side Trailer": "مقطورة بستائر جانبية",
    "Box / Reefer Trailer": "مقطورة صندوقية / مبردة",
    "Heavy-Duty Cargo Trailer": "مقطورة شحن ثقيل",
    "Custom Build": "تصنيع مخصص",
    "Not sure yet": "لست متأكدًا بعد",

    /* ---- quote page ---- */
    "Get a Quotation": "احصل على عرض سعر",
    "Tell us what you need built and we'll reply with a full spec and price, usually within one working day.": "أخبرنا بما تريد تصنيعه وسنرد عليك بمواصفات كاملة وسعر، عادةً خلال يوم عمل واحد.",
    "Your Quotation Request": "طلب عرض السعر",
    "Just the essentials — three quick fields and we'll come back to you with a price.": "الأساسيات فقط — ثلاثة حقول سريعة وسنعود إليك بالسعر.",
    "Thanks — opening WhatsApp with your request…": "شكرًا — جارٍ فتح واتساب بطلبك…",
    "Full Name *": "الاسم الكامل *",
    "Phone / WhatsApp *": "الهاتف / واتساب *",
    "Email Address": "البريد الإلكتروني",
    "Trailer Type *": "نوع المقطورة *",
    "What do you need?": "ما الذي تحتاجه؟",
    "Send My Request": "إرسال الطلب",
    "What Happens Next": "ما الذي يحدث بعد ذلك",
    "We review your spec": "نراجع مواصفاتك",
    "Our engineers check axle load, payload and build feasibility.": "يتحقق مهندسونا من حمل المحاور والحمولة وجدوى التصنيع.",
    "You get a written quote": "تستلم عرض سعر مكتوب",
    "Full specification, price and lead time, usually within one working day.": "مواصفات كاملة وسعر ومدة التنفيذ، عادةً خلال يوم عمل واحد.",
    "We build to order": "نصنّع حسب الطلب",
    "Fabricated in-house at Ras Al Khor, with RTA registration support.": "يُصنَّع داخليًا في رأس الخور، مع دعم التسجيل لدى هيئة الطرق والمواصلات.",
    "Chat on WhatsApp Instead": "تواصل عبر واتساب بدلًا من ذلك",

    /* ---- how we build ---- */
    "Every trailer that leaves Ras Al Khor is fabricated in-house — from raw structural steel through to final inspection. No outsourced chassis, no fixed catalogue. Here is what happens between your spec and your delivery.": "كل مقطورة تغادر رأس الخور تُصنَّع داخليًا — من الفولاذ الإنشائي الخام وحتى الفحص النهائي. لا شاسيه من مصادر خارجية، ولا كتالوج ثابت. إليك ما يحدث بين مواصفاتك وتسليمك.",
    "The Build Process": "مراحل التصنيع",
    "From Spec Sheet to Road": "من ورقة المواصفات إلى الطريق",
    "Seven stages, all under one roof at our Dubai facility.": "سبع مراحل، جميعها تحت سقف واحد في منشأتنا بدبي.",
    "Specification & Design": "المواصفات والتصميم",
    "We start with the job the trailer has to do — cargo type, payload, route, and the tractor unit it will run behind. Axle count, chassis length, deck height and coupling geometry all follow from that, not from a template. You approve the spec before any steel is cut.": "نبدأ من المهمة التي ستؤديها المقطورة — نوع البضائع والحمولة والمسار والجرّار الذي ستسير خلفه. عدد المحاور وطول الشاسيه وارتفاع السطح وهندسة القِرن تُحدَّد جميعها من ذلك، لا من قالب جاهز. وأنت تعتمد المواصفات قبل قصّ أي فولاذ.",
    "Structural Steel Cutting": "قصّ الفولاذ الإنشائي",
    "Main beams, cross members and gussets are cut to the drawing. Getting the profile right at this stage is what keeps the chassis straight later — a few millimetres of error here compounds across the length of the frame.": "تُقصّ الكمرات الرئيسية والعوارض المستعرضة والوصلات وفق المخطط. ضبط المقاطع بدقة في هذه المرحلة هو ما يُبقي الشاسيه مستقيمًا لاحقًا — فبضعة مليمترات من الخطأ هنا تتضاعف على طول الهيكل.",
    "Chassis Fabrication & Welding": "تصنيع الشاسيه واللحام",
    "The main frame is jigged, squared and welded by our own fabricators. Load paths run continuously through the chassis so stress transfers into the structure rather than concentrating at a joint. Welds along the primary beams are checked as the frame goes together, not only at the end.": "يُثبَّت الهيكل الرئيسي ويُضبط ويُلحم على يد فنيينا. تمرّ مسارات الأحمال باستمرار عبر الشاسيه لينتقل الإجهاد إلى البنية بدل تركّزه عند وصلة واحدة. وتُفحص اللحامات على طول الكمرات الرئيسية أثناء تجميع الهيكل، لا في النهاية فقط.",
    "Suspension, Axles & Braking": "التعليق والمحاور والفرامل",
    "Suspension and axles are mounted to the approved configuration, and the braking and air systems are plumbed in. Axle alignment is set at this stage — it is the single biggest factor in how evenly the trailer wears its tyres over the years that follow.": "يُركَّب نظام التعليق والمحاور وفق التكوين المعتمد، وتُوصَّل أنظمة الفرامل والهواء. تُضبط محاذاة المحاور في هذه المرحلة — وهي العامل الأكبر في مدى تآكل الإطارات بانتظام في السنوات التالية.",
    "Surface Preparation & Paint": "تجهيز السطح والدهان",
    "The frame is cleaned and prepared before coating. In UAE conditions — heat, humidity, coastal salt and construction dust — surface prep is what decides whether the finish is still intact in year five. Colour and livery are done to your requirement.": "يُنظَّف الهيكل ويُجهَّز قبل الطلاء. في ظروف الإمارات — الحرارة والرطوبة وملوحة الساحل وغبار البناء — تجهيز السطح هو ما يحدد بقاء الطلاء سليمًا في السنة الخامسة. ويُنفَّذ اللون والشعار حسب طلبك.",
    "Bodywork & Fit-Out": "هيكل الجسم والتجهيز",
    "Decking, sides, stake pockets, curtains, box panels, ramps or reefer insulation are fitted according to the build. Lighting, wiring, mudguards, landing legs and safety markings go on at this stage.": "تُركَّب الأرضية والجوانب وجيوب القوائم والستائر وألواح الصندوق والمنحدرات أو عزل التبريد حسب نوع البناء. وتُضاف الإضاءة والأسلاك ومانعات الطين والأرجل الساندة وعلامات السلامة في هذه المرحلة.",
    "Inspection & Handover": "الفحص والتسليم",
    "The completed unit is checked over before it leaves the yard — structure, brakes, lighting, coupling and finish. Every chassis is inspected before it becomes someone's livelihood on the road.": "تُفحص الوحدة المكتملة قبل مغادرتها الساحة — البنية والفرامل والإضاءة والقِرن والتشطيب. يُفحص كل شاسيه قبل أن يصبح مصدر رزق أحدهم على الطريق.",
    "What We Engineer Around": "ما نصمم حوله",
    "Built for the Job, Not the Catalogue": "مبنية للمهمة، لا للكتالوج",
    "The variables we set per build, rather than fixing in advance.": "المتغيرات التي نحددها لكل مشروع، بدل تثبيتها مسبقًا.",
    "Axle Configuration": "تكوين المحاور",
    "Two, three or more axles, spaced and specified for the payload and the limits on your route.": "محوران أو ثلاثة أو أكثر، بتباعد ومواصفات تناسب الحمولة والحدود المسموحة على مسارك.",
    "Payload & Load Distribution": "الحمولة وتوزيع الأحمال",
    "Chassis sized for the weight it will actually carry, with load spread through the frame rather than concentrated over the bogie.": "شاسيه بمقاس يناسب الوزن الذي سيحمله فعليًا، مع توزيع الحمل عبر الهيكل بدل تركّزه فوق مجموعة المحاور.",
    "Deck Height & Length": "ارتفاع السطح وطوله",
    "Set against your cargo and your tractor unit, so coupling height and turning clearance work in practice.": "يُحدَّد وفق بضائعك وجرّارك، ليعمل ارتفاع القِرن ومساحة الدوران عمليًا.",
    "Cargo-Specific Bodywork": "هيكل مخصص للبضائع",
    "A-Frame, car carrier, flatbed, stake body, curtain-side, box, reefer or heavy-duty cargo — built around how the load is handled.": "هيكل A، ناقلة سيارات، مسطحة، بجوانب قابلة للفك، ستائر جانبية، صندوقية، مبردة أو شحن ثقيل — مبنية حول طريقة التعامل مع الحمولة.",
    "Corrosion Protection": "الحماية من التآكل",
    "Surface preparation and coating chosen for UAE heat, humidity and coastal exposure.": "تجهيز سطح وطلاء مختاران لحرارة الإمارات ورطوبتها والتعرض الساحلي.",
    "Fleet Consistency": "اتساق الأسطول",
    "On multi-unit orders every trailer is built to the same spec, so drivers, spares and maintenance stay interchangeable.": "في الطلبات متعددة الوحدات تُبنى كل مقطورة بنفس المواصفات، ليبقى السائقون وقطع الغيار والصيانة قابلين للتبادل.",
    "Tell us what the trailer has to carry.": "أخبرنا بما ستحمله المقطورة.",
    "Send us the cargo, the payload and the route — we'll come back with a spec and a price.": "أرسل لنا نوع البضائع والحمولة والمسار — وسنعود إليك بمواصفات وسعر.",
    "See finished builds in the gallery →": "شاهد أعمالنا المنجزة في المعرض ←",

    /* ---- footer ---- */
    "Heavy-duty trailer manufacturing from our facility in Ras Al Khor Industrial Area 2, Dubai — building since 2013.": "تصنيع المقطورات الثقيلة من منشأتنا في منطقة رأس الخور الصناعية 2، دبي — نبني منذ 2013.",
    "Navigate": "تنقّل",
    "Trailer Types": "أنواع المقطورات",
    "A-Frame": "هيكل A",
    "Car Carrier": "ناقلة سيارات",
    "Curtain-Side": "ستائر جانبية",
    "Box & Reefer": "صندوقية ومبردة",
    "Trailer Solution Manufacturing Facility. All rights reserved.": "منشأة تريلر سوليوشن للتصنيع. جميع الحقوق محفوظة.",
    "Manufacturing Since 2013": "نصنّع منذ 2013",

    /* ---- shared across the product pages ---- */
    "All Trailer Types": "جميع أنواع المقطورات",
    "Built to Order in Dubai": "تُصنع حسب الطلب في دبي",
    "Specification": "المواصفات",
    "Rated capacity": "الحمولة المقررة",
    "Axle configuration": "تكوين المحاور",
    "Deck": "السطح",
    "Every figure above is a starting point, not a fixed catalogue spec — we build to your requirement.": "كل رقم أعلاه نقطة انطلاق وليس مواصفة كتالوج ثابتة — نحن نبني وفق متطلباتك.",
    "What it carries": "ما تنقله",
    "How we build it": "كيف نصنعها",
    "Specifying yours": "تحديد مواصفات مقطورتك",
    "What happens after you enquire": "ماذا يحدث بعد تواصلك معنا",
    "Other trailer types": "أنواع مقطورات أخرى",
    "Buying from outside the UAE? →": "تشتري من خارج الإمارات؟ ←",
    "Lead time depends on the specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على المواصفات. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",

    /* ---- A-frame trailers ---- */
    "An A-frame trailer earns its keep on loads that will not sit flat. The raised rack gives long or tall cargo something to lean against and be strapped to, so pipe bundles, glass crates and steel sections travel upright and secure instead of shifting across an open deck.": "تثبت مقطورة هيكل A جدواها مع الأحمال التي لا تستقر مسطحة. يمنح الرفّ المرتفع البضائع الطويلة أو المرتفعة ما تستند إليه وتُربط به، فتنتقل حزم الأنابيب وصناديق الزجاج والمقاطع الفولاذية منتصبة وآمنة بدل أن تتحرك على سطح مفتوح.",
    "Up to 60 tonnes": "حتى 60 طنًا",
    "Tandem axle (other configurations on request)": "محور مزدوج (تكوينات أخرى عند الطلب)",
    "Rack": "الرفّ",
    "Raised A-frame with upper lashing hooks": "هيكل A مرتفع مع خطاطيف تثبيت علوية",
    "Heavy-duty flatbed": "سطح مسطح للخدمة الشاقة",
    "Pipe and tube bundles, flat and box glass, structural steel sections, and any long load that needs vertical support rather than a flat bed. If the cargo is taller than it is stable, this is the trailer for it.": "حزم الأنابيب والمواسير، والزجاج المسطح والمعبأ في صناديق، والمقاطع الفولاذية الإنشائية، وأي حمل طويل يحتاج إلى إسناد رأسي بدل سطح مسطح. إذا كانت البضاعة أطول من أن تكون ثابتة، فهذه هي المقطورة المناسبة لها.",
    "The A-frame rack is fabricated and welded as part of the chassis rather than bolted on afterwards, so load forces run into the main frame. Lashing hooks are positioned to your cargo, not to a standard pattern — tell us what you are carrying and where the straps need to land.": "يُصنَّع رفّ هيكل A ويُلحَم كجزء من الشاسيه بدل تثبيته بالبراغي لاحقًا، فتنتقل قوى الحمل إلى الهيكل الرئيسي. وتُوضع خطاطيف التثبيت وفق بضاعتك، لا وفق نمط قياسي — أخبرنا بما تنقله وأين يجب أن تستقر الأحزمة.",
    "Axle count, deck length, rack height and hook spacing are all set per order. If you are unsure what the load needs, send us the cargo dimensions and weight and we will come back with a recommendation.": "يُحدَّد عدد المحاور وطول السطح وارتفاع الرفّ وتباعد الخطاطيف مع كل طلب. وإن لم تكن متأكدًا مما يحتاجه الحمل، أرسل لنا أبعاد البضاعة ووزنها ونعود إليك بتوصية.",
    "Getting the rack height right": "ضبط ارتفاع الرفّ بدقة",
    "Rack height is the decision that matters most, and it is the one buyers most often get wrong. Too low and tall bundles sit above the support where it does them no good; too high and you are carrying steel you never load against, adding tare weight and raising the centre of gravity for no return.": "ارتفاع الرفّ هو القرار الأهم، وهو الذي يخطئ فيه المشترون غالبًا. فإن كان منخفضًا أكثر من اللازم استقرّت الحزم المرتفعة فوق نقطة الإسناد بلا فائدة؛ وإن كان مرتفعًا أكثر من اللازم كنت تحمل فولاذًا لا تستند إليه أبدًا، فيزيد الوزن الفارغ ويرتفع مركز الثقل دون مقابل.",
    "The practical approach is to size the rack around the tallest load you carry regularly, not the tallest load you have ever carried once. If your cargo profile genuinely varies, tell us — a lower rack with well-placed upper hooks often handles a mixed profile better than one tall rack that suits only the extremes.": "الأسلوب العملي هو تحديد مقاس الرفّ وفق أعلى حمل تنقله بانتظام، لا أعلى حمل نقلته مرة واحدة. وإن كانت طبيعة بضاعتك متغيرة فعلًا، أخبرنا — فالرفّ الأقل ارتفاعًا مع خطاطيف علوية موضوعة بعناية يتعامل مع التنوع أفضل من رفّ مرتفع لا يناسب إلا الحالات القصوى.",
    "Lashing points and load security": "نقاط التثبيت وتأمين الحمل",
    "Where the straps land decides whether a load rides properly. We position hooks to the cargo you actually carry rather than to a standard pattern, because evenly spaced hooks on a catalogue trailer rarely line up with the strapping points on a real pipe bundle or glass crate.": "موضع استقرار الأحزمة هو ما يحدد إن كان الحمل ينتقل كما ينبغي. نضع الخطاطيف وفق البضاعة التي تنقلها فعلًا لا وفق نمط قياسي، لأن الخطاطيف المتباعدة بالتساوي في مقطورة كتالوج نادرًا ما تتوافق مع نقاط ربط حزمة أنابيب أو صندوق زجاج حقيقي.",
    "Tell us the bundle width, how many bundles sit side by side, and where your drivers prefer to throw straps. That conversation takes ten minutes at the quotation stage and saves your drivers fighting the trailer for the next ten years.": "أخبرنا بعرض الحزمة، وكم حزمة تصطف جنبًا إلى جنب، وأين يفضّل سائقوك تمرير الأحزمة. هذا الحديث يستغرق عشر دقائق في مرحلة عرض السعر، ويوفّر على سائقيك عناء مصارعة المقطورة طوال السنوات العشر القادمة.",
    "Axle configuration and payload": "تكوين المحاور والحمولة",
    "Tandem axle is the common configuration for this trailer and suits the rated capacity above. Other configurations are available where the payload, the axle loading rules in your country, or the terrain call for them.": "المحور المزدوج هو التكوين الشائع لهذه المقطورة ويناسب الحمولة المقررة أعلاه. وتتوفر تكوينات أخرى عندما تستدعيها الحمولة أو قواعد تحميل المحاور في بلدك أو طبيعة الطرق.",
    "Send the cargo type, the weight, the rough dimensions and the country the trailer is going to. We come back with a written specification, a price and a lead time, usually within one working day. Nothing is committed until you agree the spec — and if we think a different trailer type suits your load better, we will say so rather than sell you this one.": "أرسل لنا نوع البضاعة ووزنها وأبعادها التقريبية والبلد الذي ستذهب إليه المقطورة. نعود إليك بمواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد. ولا شيء ملزم حتى توافق على المواصفات — وإن رأينا أن نوعًا آخر من المقطورات يناسب حملك أكثر، سنقول ذلك بدل أن نبيعك هذه.",
    "A-Frame Trailer FAQs": "أسئلة شائعة عن مقطورات هيكل A",
    "What is an A-frame trailer used for?": "فيمَ تُستخدم مقطورة هيكل A؟",
    "It carries loads that will not sit flat and need vertical support — pipe and tube bundles, flat and box glass, and structural steel sections. The raised rack gives the cargo something to lean against and strap to, so it travels upright rather than shifting across an open deck.": "تنقل الأحمال التي لا تستقر مسطحة وتحتاج إلى إسناد رأسي — حزم الأنابيب والمواسير، والزجاج المسطح والمعبأ، والمقاطع الفولاذية الإنشائية. ويمنح الرفّ المرتفع البضاعة ما تستند إليه وتُربط به فتنتقل منتصبة بدل أن تتحرك على سطح مفتوح.",
    "How much weight can an A-frame trailer carry?": "ما الحمولة التي تتحملها مقطورة هيكل A؟",
    "Ours are rated up to 60 tonnes, though the right figure for you depends on the axle configuration and what the load actually weighs. The rating is a starting point we build around, not a fixed catalogue number.": "مقطوراتنا مقررة حتى 60 طنًا، لكن الرقم المناسب لك يعتمد على تكوين المحاور وعلى وزن الحمل فعليًا. والحمولة المقررة نقطة انطلاق نبني حولها، لا رقم كتالوج ثابت.",
    "Can the rack height be changed to suit our cargo?": "هل يمكن تغيير ارتفاع الرفّ ليناسب بضاعتنا؟",
    "Yes. Rack height, deck length, axle count and hook spacing are all set per order. The rack is fabricated as part of the chassis rather than bolted on afterwards, so it is specified before fabrication rather than adjusted later.": "نعم. يُحدَّد ارتفاع الرفّ وطول السطح وعدد المحاور وتباعد الخطاطيف مع كل طلب. ولأن الرفّ يُصنَّع كجزء من الشاسيه لا يُثبَّت بالبراغي لاحقًا، فإنه يُحدَّد قبل التصنيع لا يُعدَّل بعده.",
    "Do you build A-frame trailers for export outside the UAE?": "هل تصنعون مقطورات هيكل A للتصدير خارج الإمارات؟",
    "Yes. We have supplied buyers in Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. The trailer is built and handed over at our Ras Al Khor facility in Dubai, and you or your transport agent collect it with the export documentation supplied by us.": "نعم. وردّنا لعملاء في السعودية وعُمان وقطر والكويت والبحرين. تُبنى المقطورة وتُسلَّم في منشأتنا برأس الخور في دبي، وتتولى أنت أو وكيل النقل الخاص بك استلامها مع مستندات التصدير التي نوفّرها.",
    "How long does an A-frame trailer take to build?": "كم تستغرق صناعة مقطورة هيكل A؟",
    /* Paragraphs containing inline links arrive as separate text fragments,
       so they are keyed fragment by fragment. Concatenated in DOM order the
       Arabic still reads as one sentence. */
    "If you are exporting, the axle limits that matter are the ones in your own jurisdiction, not the UAE's. Tell us the destination country and we will factor it into the specification rather than leaving you to discover a problem at the border. Our": "إن كنت تصدّر، فحدود المحاور المهمة هي حدود بلدك لا حدود الإمارات. أخبرنا ببلد الوجهة وسندرجها ضمن المواصفات بدل أن تكتشف مشكلة عند الحدود. وتوضح",
    "GCC export page": "صفحة التصدير لدول الخليج",
    "covers how buyers outside the UAE take delivery.": "كيف يستلم المشترون من خارج الإمارات مقطوراتهم.",
    "If your load sits flat rather than upright, a": "إذا كان حملك يستقر مسطحًا لا منتصبًا، فإن",
    "flatbed or stake body trailer": "المقطورة المسطحة أو ذات القوائم الجانبية",
    "is likely the better fit. For cargo that needs weather protection with side access, see": "هي الأنسب غالبًا. وللبضائع التي تحتاج حماية من العوامل الجوية مع تحميل جانبي، اطّلع على",
    "curtain-side trailers": "المقطورات بستائر جانبية",
    ", and for loose or heavy bulk cargo see": "، وللبضائع السائبة أو الثقيلة اطّلع على",
    "heavy-duty cargo trailers": "مقطورات الشحن الثقيل",
    ". Our": ". وتوضح",
    "build process": "صفحة كيف نصنع",
    "explains how every chassis is fabricated.": "طريقة تصنيع كل شاسيه.",
    "explains how every chassis is fabricated and inspected.": "طريقة تصنيع كل شاسيه وفحصه.",

    "Need an A-Frame trailer?": "تحتاج مقطورة هيكل A؟",
    "Tell us the payload, the cargo and the delivery country — we'll come back with a full specification and a price.": "أخبرنا بالحمولة ونوع البضاعة وبلد التسليم — وسنعود إليك بمواصفات كاملة وسعر.",

    /* ---- flatbed & stake body trailers ---- */
    "Flatbed & Stake Body Trailers": "المقطورات المسطحة وذات القوائم الجانبية",
    "The most versatile trailer we build. An open deck takes anything a forklift can place on it, and removable stakes let you box the load in when you need containment or strip them out when you need to load from the side.": "أكثر مقطوراتنا تنوعًا في الاستخدام. يستوعب السطح المفتوح أي شيء تستطيع الرافعة الشوكية وضعه عليه، وتتيح لك القوائم القابلة للفك تطويق الحمل عند الحاجة إلى الاحتواء، أو نزعها عند الحاجة إلى التحميل من الجانب.",
    "Open flatbed, length to order": "سطح مسطح مفتوح، الطول حسب الطلب",
    "Sides": "الجوانب",
    "Removable stakes with mesh infill": "قوائم قابلة للفك مع حشوة شبكية",
    "Loading": "التحميل",
    "Side, rear or overhead by crane": "من الجانب أو الخلف أو من الأعلى برافعة",
    "Typical use": "الاستخدام المعتاد",
    "General freight, building materials, palletised cargo": "البضائع العامة ومواد البناء والحمولات على منصات",
    "Palletised freight, cement and block, timber, scaffolding, plant and general site materials. The same trailer handles a full mixed load one day and a single oversized item the next.": "البضائع على منصات، والأسمنت والطوب، والأخشاب، والسقالات، والمعدات ومواد المواقع عمومًا. المقطورة نفسها تتعامل مع حمولة مختلطة كاملة في يوم، ومع قطعة واحدة كبيرة الحجم في اليوم التالي.",
    "Cross members are spaced for the load you actually carry rather than a catalogue default — a trailer hauling dense palletised goods needs different support to one carrying long lightweight material. Stake pockets are fabricated into the deck edge so the stakes sit square and stay square.": "تُباعَد العوارض العرضية وفق الحمل الذي تنقله فعلًا لا وفق إعداد كتالوج جاهز — فالمقطورة التي تنقل بضائع كثيفة على منصات تحتاج إسنادًا مختلفًا عن تلك التي تنقل مواد طويلة خفيفة. وتُصنَّع جيوب القوائم ضمن حافة السطح لتستقر القوائم مستقيمة وتبقى كذلك.",
    "Deck length, stake height and spacing, axle configuration and whether you want mesh, solid or no infill. Drop sides can be fitted if you load from the side regularly.": "طول السطح، وارتفاع القوائم وتباعدها، وتكوين المحاور، وما إذا كنت تريد حشوة شبكية أو صمّاء أو بلا حشوة. ويمكن تركيب جوانب قابلة للإنزال إن كنت تحمّل من الجانب بانتظام.",
    "Stakes, mesh or drop sides — which to choose": "قوائم أم شبك أم جوانب قابلة للإنزال — ماذا تختار",
    "The infill decision follows how your cargo behaves, not how the trailer looks. Bare stakes suit palletised freight that is already strapped and shrink-wrapped: they stop a pallet walking sideways without adding weight or blocking a forklift.": "قرار الحشوة يتبع سلوك بضاعتك لا شكل المقطورة. فالقوائم المجردة تناسب البضائع على منصات المربوطة والمغلفة مسبقًا: تمنع المنصة من الانزلاق جانبًا دون إضافة وزن أو إعاقة الرافعة الشوكية.",
    "Mesh infill earns its place when the load contains loose items that could work their way out — scaffolding fittings, offcuts, bagged material. Solid sides make sense for anything that blows about. Drop sides cost more and add tare weight, but if your drivers load from the kerb several times a day they pay for themselves quickly in time saved.": "أما الحشوة الشبكية فتثبت جدواها حين يحتوي الحمل على قطع سائبة قد تنفلت — وصلات السقالات، والقصاصات، والمواد المعبأة في أكياس. والجوانب الصمّاء منطقية لكل ما تذروه الرياح. أما الجوانب القابلة للإنزال فتكلف أكثر وتزيد الوزن الفارغ، لكن إن كان سائقوك يحمّلون من الرصيف عدة مرات يوميًا فإنها تسدد ثمنها سريعًا من الوقت الموفَّر.",
    "Deck length and how you actually load": "طول السطح وطريقة تحميلك الفعلية",
    "Buyers tend to specify the longest deck their budget allows. That is not always right. A longer deck means more tare weight, a wider turning circle and more trailer to manoeuvre on a tight site — and if your usual load never fills it, you are hauling steel for nothing.": "يميل المشترون إلى طلب أطول سطح تسمح به ميزانيتهم. وهذا ليس صائبًا دائمًا. فالسطح الأطول يعني وزنًا فارغًا أكبر، ودائرة دوران أوسع، ومقطورة أكبر للمناورة في موقع ضيّق — وإن كان حملك المعتاد لا يملؤه أبدًا فأنت تنقل فولاذًا بلا فائدة.",
    "Tell us the pallet count you move on a typical day and whether you load by forklift, crane or by hand. We will size the deck around the work rather than the wish list.": "أخبرنا بعدد المنصات التي تنقلها في يوم اعتيادي، وهل تحمّل برافعة شوكية أم برافعة علوية أم يدويًا. وسنحدد مقاس السطح وفق العمل لا وفق قائمة الأمنيات.",
    "Cross member spacing": "تباعد العوارض العرضية",
    "This is the part of the build no one sees and everyone feels. Dense palletised goods concentrate weight in small footprints and need closer cross member spacing; long lightweight material spreads its load and does not. Spacing a deck for the wrong cargo either wastes steel or works the deck harder than it should be worked.": "هذا هو الجزء الذي لا يراه أحد ويشعر به الجميع. فالبضائع الكثيفة على منصات تركّز الوزن في مساحات صغيرة وتحتاج تباعدًا أقرب بين العوارض؛ والمواد الطويلة الخفيفة توزّع حملها ولا تحتاج ذلك. وتباعد السطح المحسوب لبضاعة خاطئة إما يهدر الفولاذ أو يُجهد السطح أكثر مما ينبغي.",
    "Payload and axle configuration": "الحمولة وتكوين المحاور",
    "Axle count follows the payload and the roads you run. If you are exporting, the axle loading rules that matter are the ones in the destination country — tell us where the trailer is going and we will build to that. Our": "يتبع عدد المحاور الحمولة والطرق التي تسلكها. وإن كنت تصدّر، فقواعد تحميل المحاور المهمة هي قواعد بلد الوجهة — أخبرنا إلى أين تذهب المقطورة وسنبني وفق ذلك. وتوضح",
    "sets out how buyers outside the UAE take delivery.": "كيف يستلم المشترون من خارج الإمارات مقطوراتهم.",
    "Send us the cargo type, the typical weight, how you load, and the country the trailer is going to. You get a written specification, a price and a lead time, usually within one working day — and if a different trailer type suits your work better, we will tell you.": "أرسل لنا نوع البضاعة، والوزن المعتاد، وطريقة تحميلك، والبلد الذي ستذهب إليه المقطورة. ستحصل على مواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد — وإن كان نوع آخر من المقطورات أنسب لعملك فسنخبرك بذلك.",
    "Flatbed & Stake Body Trailer FAQs": "أسئلة شائعة عن المقطورات المسطحة وذات القوائم",
    "What is a stake body trailer used for?": "فيمَ تُستخدم المقطورة ذات القوائم الجانبية؟",
    "General freight that needs containment without full enclosure — palletised goods, cement and block, timber, scaffolding, plant and site materials. The removable stakes keep the load in place while leaving the deck open for forklift or crane loading.": "البضائع العامة التي تحتاج احتواءً دون إغلاق كامل — البضائع على منصات، والأسمنت والطوب، والأخشاب، والسقالات، والمعدات ومواد المواقع. تُبقي القوائم القابلة للفك الحمل في مكانه مع إبقاء السطح مفتوحًا للتحميل بالرافعة الشوكية أو العلوية.",
    "What is the difference between a flatbed and a stake body trailer?": "ما الفرق بين المقطورة المسطحة وذات القوائم الجانبية؟",
    "A flatbed is an open deck with no sides. A stake body is the same deck with stake pockets fabricated into the edge so removable posts, and mesh or solid infill, can be fitted. Because the stakes come out, one trailer does both jobs.": "المقطورة المسطحة سطح مفتوح بلا جوانب. أما ذات القوائم فهي السطح نفسه مع جيوب قوائم مصنّعة في الحافة تتيح تركيب قوائم قابلة للفك وحشوة شبكية أو صمّاء. ولأن القوائم تُنزع، فإن مقطورة واحدة تؤدي المهمتين.",
    "Can the stakes be removed for oversized loads?": "هل يمكن نزع القوائم للأحمال كبيرة الحجم؟",
    "Yes. The stakes lift out of the pockets, leaving a clear flat deck for a single oversized item, then go back in for the next mixed load.": "نعم. تُرفع القوائم من جيوبها فيتبقى سطح مسطح خالٍ لقطعة واحدة كبيرة الحجم، ثم تُعاد للحمولة المختلطة التالية.",
    "Should we fit drop sides?": "هل نركّب جوانب قابلة للإنزال؟",
    "Only if you load from the side regularly. Drop sides add cost and tare weight, so they are worth it for operations doing several kerbside drops a day and not worth it for a trailer loaded by forklift from the rear.": "فقط إن كنت تحمّل من الجانب بانتظام. فهي تضيف تكلفة ووزنًا فارغًا، لذا تستحق العناء في العمليات التي تنفّذ عدة عمليات تسليم من الرصيف يوميًا، ولا تستحقه لمقطورة تُحمَّل بالرافعة الشوكية من الخلف.",
    "How long does a flatbed or stake body trailer take to build?": "كم تستغرق صناعة مقطورة مسطحة أو ذات قوائم؟",
    "Lead time depends on the deck length and specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على طول السطح والمواصفات. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",
    "If your cargo needs weather protection but still has to load from the side, see": "إذا كانت بضاعتك تحتاج حماية من العوامل الجوية مع بقاء التحميل الجانبي، اطّلع على",
    ". For loads that will not sit flat, an": ". وللأحمال التي لا تستقر مسطحة، فإن",
    "A-frame trailer": "مقطورة هيكل A",
    "gives vertical support, and for loose or heavy bulk cargo see": "توفّر إسنادًا رأسيًا، وللبضائع السائبة أو الثقيلة اطّلع على",
    "Need a flatbed or stake body trailer?": "تحتاج مقطورة مسطحة أو ذات قوائم؟",

    /* ---- curtain-side trailers ---- */
    "Curtain-Side & Canopy Trailers": "المقطورات بستائر جانبية وسقف مقوّس",
    "A curtain-side gives you the weather protection of a box trailer without losing side access. The load stays dry and out of the dust, and a forklift can still reach it from either side instead of working through rear doors only.": "تمنحك المقطورة بستائر جانبية حماية المقطورة الصندوقية من العوامل الجوية دون فقدان التحميل الجانبي. تبقى البضاعة جافة وبعيدة عن الغبار، ومع ذلك تصل إليها الرافعة الشوكية من أي من الجانبين بدل العمل عبر الأبواب الخلفية وحدها.",
    "Roof": "السقف",
    "Arched canopy": "سقف مقوّس",
    "Caged with curtain cover": "قفص مع غطاء ستائري",
    "Full-length side access, plus rear": "تحميل جانبي بطول المقطورة، إضافةً إلى الخلف",
    "Weather-sensitive general freight": "البضائع العامة الحساسة للعوامل الجوية",
    "Freight that must stay dry and clean but still needs quick side loading — packaged goods, retail distribution, FMCG and anything moving through multiple drops in a day.": "البضائع التي يجب أن تبقى جافة ونظيفة مع حاجتها إلى تحميل جانبي سريع — السلع المعبأة، وتوزيع التجزئة، والسلع الاستهلاكية سريعة الدوران، وكل ما يمر بعدة نقاط تسليم في اليوم.",
    "Why it suits UAE conditions": "لماذا تناسب ظروف الإمارات",
    "Construction dust and summer humidity do more damage to open loads here than rain does. The canopy keeps both off the cargo while the curtains keep turnaround times short at each stop.": "غبار البناء ورطوبة الصيف يضران بالأحمال المكشوفة هنا أكثر مما يفعل المطر. يبعد السقف كليهما عن البضاعة، بينما تبقي الستائر زمن المناولة قصيرًا عند كل محطة.",
    "Canopy height and profile, curtain material, cage design and whether you want the rear left open or fitted with doors.": "ارتفاع السقف وشكله، وخامة الستارة، وتصميم القفص، وما إذا كنت تريد الخلف مفتوحًا أم مزوّدًا بأبواب.",
    "Curtain-side or box — which you actually need": "بستائر جانبية أم صندوقية — أيهما تحتاج فعلًا",
    "Both keep cargo covered, so the decision comes down to how you load. A box trailer is sealed and secure but loads from the rear only: every pallet behind the one you want has to come out first. A curtain-side opens along its whole length, so a driver reaches any pallet in seconds.": "كلاهما يبقي البضاعة مغطاة، فيعود القرار إلى طريقة تحميلك. المقطورة الصندوقية مغلقة وآمنة لكنها تُحمَّل من الخلف فقط: كل منصة خلف المنصة التي تريدها يجب أن تخرج أولًا. أما ذات الستائر فتُفتح بطولها كاملًا، فيصل السائق إلى أي منصة خلال ثوانٍ.",
    "If you run multi-drop routes where the delivery order changes, the curtain wins on time saved at every stop. If the cargo is high-value, temperature-sensitive or needs to be locked, a": "إن كنت تسلك مسارات متعددة التسليم يتغير فيها ترتيب التوصيل، فالستائر تتفوق بالوقت الموفَّر عند كل محطة. أما إن كانت البضاعة عالية القيمة أو حساسة لدرجات الحرارة أو تحتاج إلى إغلاق مُحكم، فإن",
    "box or reefer trailer": "المقطورة الصندوقية أو المبردة",
    "is the better answer.": "هي الخيار الأفضل.",
    "Curtain material and the UAE climate": "خامة الستائر ومناخ الإمارات",
    "Curtains here face a harder life than they do in cooler markets. Sustained summer heat and UV are what age a curtain, not rain — the material stiffens, colours fade, and a curtain chosen on price alone shows it within a couple of seasons.": "تواجه الستائر هنا ظروفًا أقسى مما تواجهه في الأسواق الأبرد. فحرارة الصيف المستمرة والأشعة فوق البنفسجية هي ما يُشيخ الستارة لا المطر — تتصلّب الخامة، وتبهت الألوان، والستارة المختارة على أساس السعر وحده يظهر عليها ذلك خلال موسمين.",
    "Tell us whether the trailer runs long inter-emirate routes in full sun or shorter urban work, and whether you want your livery printed on the curtain. A curtain is the most visible surface on the trailer and doubles as advertising for the length of its life.": "أخبرنا إن كانت المقطورة تسلك مسارات طويلة بين الإمارات تحت الشمس الكاملة أم أعمالًا حضرية أقصر، وهل تريد طباعة هوية شركتك على الستارة. فالستارة هي أبرز سطح في المقطورة وتعمل كإعلان طوال عمرها.",
    "Canopy height and profile": "ارتفاع السقف وشكله",
    "Canopy height sets your usable internal volume and your overall height. Go too tall and you gain space you rarely fill while adding weight and wind resistance; too short and you cap the pallet height you can carry. Sizing this around your standard pallet or cage height is the practical approach, allowing clearance for the load to go in and out without catching.": "يحدد ارتفاع السقف الحجم الداخلي القابل للاستخدام والارتفاع الكلي. فإن زدته أكثر من اللازم كسبت مساحة نادرًا ما تملؤها مع زيادة الوزن ومقاومة الهواء؛ وإن قلّلته حدّدت أقصى ارتفاع للمنصات التي تستطيع نقلها. والأسلوب العملي هو تحديده وفق ارتفاع منصتك أو قفصك المعتاد، مع ترك خلوص كافٍ لدخول الحمل وخروجه دون احتكاك.",
    "Rear doors or open rear": "أبواب خلفية أم خلف مفتوح",
    "An open rear is quicker and cheaper. Doors add security at overnight stops and let you close the trailer up completely. If the trailer will sit loaded outside a depot or at a customer site overnight, doors usually justify themselves.": "الخلف المفتوح أسرع وأقل تكلفة. أما الأبواب فتضيف أمانًا في التوقفات الليلية وتتيح إغلاق المقطورة تمامًا. وإن كانت المقطورة ستبيت محمّلة خارج مستودع أو في موقع عميل، فالأبواب تبرر نفسها عادةً.",
    "Send the cargo type, your pallet or cage dimensions, how many drops a day you run, and the country the trailer is going to. We reply with a written specification, a price and a lead time, usually within one working day. Buyers outside the UAE should read our": "أرسل لنا نوع البضاعة، وأبعاد منصاتك أو أقفاصك، وعدد نقاط التسليم التي تنفّذها يوميًا، والبلد الذي ستذهب إليه المقطورة. نرد بمواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد. وعلى المشترين من خارج الإمارات الاطلاع على",
    "for how collection works.": "لمعرفة طريقة الاستلام.",
    "Curtain-Side Trailer FAQs": "أسئلة شائعة عن المقطورات بستائر جانبية",
    "What is a curtain-side trailer used for?": "فيمَ تُستخدم المقطورة بستائر جانبية؟",
    "Freight that must stay dry and clean but still needs quick side loading — packaged goods, retail distribution, FMCG, and anything moving through several drops in a day. The canopy covers the load while the curtains keep turnaround short at each stop.": "البضائع التي يجب أن تبقى جافة ونظيفة مع حاجتها إلى تحميل جانبي سريع — السلع المعبأة، وتوزيع التجزئة، والسلع الاستهلاكية سريعة الدوران، وكل ما يمر بعدة نقاط تسليم في اليوم. يغطي السقف الحمل بينما تبقي الستائر زمن المناولة قصيرًا عند كل محطة.",
    "Is a curtain-side trailer better than a box trailer?": "هل المقطورة بستائر جانبية أفضل من الصندوقية؟",
    "It depends on how you load. A curtain-side opens along its full length so any pallet is reachable in seconds, which suits multi-drop work. A box trailer is more secure and fully sealed but loads from the rear only. High-value or temperature-sensitive cargo usually belongs in a box or reefer.": "الأمر يعتمد على طريقة تحميلك. فذات الستائر تُفتح بطولها كاملًا فتصل إلى أي منصة خلال ثوانٍ، وهو ما يناسب العمل متعدد التسليم. والصندوقية أكثر أمانًا ومغلقة تمامًا لكنها تُحمَّل من الخلف فقط. والبضائع عالية القيمة أو الحساسة لدرجات الحرارة مكانها عادةً الصندوقية أو المبردة.",
    "Do the curtains hold up in UAE heat?": "هل تتحمل الستائر حرارة الإمارات؟",
    "Sustained heat and UV are what age a curtain here, more than rain. Curtain material is specified per order, so tell us whether the trailer runs long routes in full sun or shorter urban work and we will specify accordingly.": "الحرارة المستمرة والأشعة فوق البنفسجية هي ما يُشيخ الستارة هنا، أكثر من المطر. وتُحدَّد خامة الستارة مع كل طلب، فأخبرنا إن كانت المقطورة تسلك مسارات طويلة تحت الشمس الكاملة أم أعمالًا حضرية أقصر وسنحدد المواصفات وفق ذلك.",
    "Can we have our company livery printed on the curtains?": "هل يمكن طباعة هوية شركتنا على الستائر؟",
    "Yes. The curtain is the most visible surface on the trailer and works as advertising for the whole of its life, so it is worth deciding the artwork at the specification stage.": "نعم. فالستارة أبرز سطح في المقطورة وتعمل كإعلان طوال عمرها، لذا يُستحسن تحديد التصميم في مرحلة المواصفات.",
    "How long does a curtain-side trailer take to build?": "كم تستغرق صناعة مقطورة بستائر جانبية؟",
    "Lead time depends on the canopy and curtain specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على مواصفات السقف والستائر. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",
    "For sealed, lockable or refrigerated cargo see": "للبضائع المغلقة أو القابلة للإقفال أو المبردة، اطّلع على",
    "box and reefer trailers": "المقطورات الصندوقية والمبردة",
    ". If the load does not need covering at all, a": ". وإن كان الحمل لا يحتاج تغطية إطلاقًا، فإن",
    "is lighter and cheaper. Our": "أخف وأقل تكلفة. وتوضح",
    "Need a curtain-side trailer?": "تحتاج مقطورة بستائر جانبية؟",

    /* ---- box & reefer trailers ---- */
    "A sealed box trailer, insulated and ready for a refrigeration unit. Built for cargo that cannot be exposed — to weather, to dust, or to the temperatures this region reaches through the summer.": "مقطورة صندوقية مغلقة، معزولة وجاهزة لوحدة تبريد. مصممة للبضائع التي لا يمكن تعريضها — لا للعوامل الجوية ولا للغبار ولا لدرجات الحرارة التي تبلغها المنطقة طوال الصيف.",
    "Body": "الهيكل",
    "Fully enclosed box": "صندوق مغلق بالكامل",
    "Insulation": "العزل",
    "Insulated panels, refrigeration-ready": "ألواح معزولة، جاهزة للتبريد",
    "Access": "الوصول",
    "Rear doors; side door on request": "أبواب خلفية؛ وباب جانبي عند الطلب",
    "Dry goods, retail distribution, chilled and frozen cargo": "البضائع الجافة، وتوزيع التجزئة، والبضائع المبردة والمجمدة",
    "Retail and FMCG distribution, pharmaceuticals, chilled and frozen food, and any dry cargo that needs to arrive clean and undamaged.": "توزيع التجزئة والسلع الاستهلاكية سريعة الدوران، والأدوية، والأغذية المبردة والمجمدة، وأي بضاعة جافة يجب أن تصل نظيفة وسليمة.",
    "Insulation and cooling": "العزل والتبريد",
    "We build the body insulated and prepared for a refrigeration unit. Which unit you fit is your choice — tell us the make and model at order stage and we will prepare the mounting and the aperture to suit it.": "نبني الهيكل معزولًا ومُجهَّزًا لوحدة تبريد. واختيار الوحدة يعود إليك — أخبرنا بالماركة والطراز عند الطلب ونُعدّ قاعدة التثبيت والفتحة بما يناسبها.",
    "Internal dimensions, insulation specification, door configuration, floor type and whether you need partitioning for mixed-temperature loads.": "الأبعاد الداخلية، ومواصفات العزل، وتكوين الأبواب، ونوع الأرضية، وما إذا كنت تحتاج حاجزًا للحمولات متعددة درجات الحرارة.",
    "Deciding the insulation before you decide the unit": "تحديد العزل قبل اختيار الوحدة",
    "Buyers often choose the refrigeration unit first and treat the body as a box to bolt it onto. It works better the other way round. Insulation determines how hard the unit has to work, and in UAE summer conditions an under-insulated body means a unit running near continuously — more fuel, more wear, and a shorter service life.": "كثيرًا ما يختار المشترون وحدة التبريد أولًا ويتعاملون مع الهيكل كصندوق تُثبَّت عليه. والعكس أفضل. فالعزل هو ما يحدد مقدار الجهد الذي تبذله الوحدة، وفي ظروف الصيف الإماراتي يعني الهيكل ضعيف العزل وحدةً تعمل شبه متواصلة — وقود أكثر، وتآكل أسرع، وعمر خدمة أقصر.",
    "Tell us the temperature you need to hold and the longest run you do in peak summer. We specify the insulation around that, then prepare the mounting and aperture for whichever unit you have chosen.": "أخبرنا بدرجة الحرارة التي تحتاج الحفاظ عليها وأطول رحلة تنفّذها في ذروة الصيف. نحدد العزل وفق ذلك، ثم نُعدّ قاعدة التثبيت والفتحة للوحدة التي اخترتها.",
    "Dry freight or refrigerated": "بضائع جافة أم مبردة",
    "Not every box body needs cooling. If your cargo simply has to arrive clean, dry and secure, a dry freight box costs less, weighs less and carries more payload. We build the body insulated and reefer-ready when you need it and leave that out when you do not — there is no sense paying for insulation that will never be switched on.": "ليس كل هيكل صندوقي يحتاج تبريدًا. فإن كانت بضاعتك تحتاج فقط أن تصل نظيفة وجافة وآمنة، فالصندوق الجاف أقل تكلفة وأخف وزنًا ويحمل حمولة أكبر. نبني الهيكل معزولًا وجاهزًا للتبريد حين تحتاج ذلك، ونستغني عنه حين لا تحتاجه — فلا معنى لدفع ثمن عزل لن يُشغَّل أبدًا.",
    "If you are unsure, consider whether cold chain is a requirement of your customers or merely a convenience. That question usually settles it.": "وإن لم تكن متأكدًا، فاسأل نفسك هل سلسلة التبريد متطلب من عملائك أم مجرد وسيلة راحة. هذا السؤال يحسم الأمر عادةً.",
    "Door configuration": "تكوين الأبواب",
    "Rear barn doors are the default and suit dock loading. Side doors add access for multi-drop work where opening the full rear at every stop lets the cold out. For mixed-temperature loads, a partition lets you run two zones in one body — worth specifying at build stage, as retrofitting one later is rarely tidy.": "الأبواب الخلفية المزدوجة هي الخيار الافتراضي وتناسب التحميل من الأرصفة. أما الأبواب الجانبية فتضيف منفذًا للعمل متعدد التسليم حيث يؤدي فتح الخلف كاملًا عند كل محطة إلى تسرّب البرودة. وللحمولات متعددة الحرارة، يتيح لك الحاجز تشغيل منطقتين في هيكل واحد — ويُستحسن تحديده في مرحلة التصنيع، لأن تركيبه لاحقًا نادرًا ما يأتي متقنًا.",
    "Floor and internal finish": "الأرضية والتشطيب الداخلي",
    "The floor takes the most punishment, particularly under pallet trucks. Floor type is specified per order around whether you load by forklift, pallet truck or by hand. Internal finish matters for anything that has to be washed down between loads.": "الأرضية هي أكثر ما يتعرض للإجهاد، خصوصًا تحت رافعات المنصات اليدوية. ويُحدَّد نوع الأرضية مع كل طلب وفق ما إذا كنت تحمّل برافعة شوكية أو رافعة منصات أو يدويًا. أما التشطيب الداخلي فيهم كل ما يحتاج غسلًا بين الحمولات.",
    "Send the cargo type, the temperature range if any, your internal dimensions, how you load, and the destination country. You get a written specification, a price and a lead time, usually within one working day. Buyers outside the UAE should read our": "أرسل لنا نوع البضاعة، ونطاق درجة الحرارة إن وُجد، وأبعادك الداخلية، وطريقة تحميلك، وبلد الوجهة. ستحصل على مواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد. وعلى المشترين من خارج الإمارات الاطلاع على",
    "Box & Reefer Trailer FAQs": "أسئلة شائعة عن المقطورات الصندوقية والمبردة",
    "What is a reefer trailer?": "ما المقطورة المبردة؟",
    "A refrigerated trailer — an insulated, fully enclosed box body prepared for a refrigeration unit, used for chilled and frozen cargo. We build the body insulated and reefer-ready; you choose the unit and we prepare the mounting and aperture to suit it.": "هي مقطورة تبريد — هيكل صندوقي معزول مغلق بالكامل ومُجهَّز لوحدة تبريد، تُستخدم للبضائع المبردة والمجمدة. نبني الهيكل معزولًا وجاهزًا للتبريد؛ وأنت تختار الوحدة ونحن نُعدّ قاعدة التثبيت والفتحة بما يناسبها.",
    "Do you supply the refrigeration unit?": "هل توفّرون وحدة التبريد؟",
    "The unit is your choice. Tell us the make and model at order stage and the body is prepared for it. That way you are not locked into a unit we happen to stock, and you can match whatever your existing fleet runs.": "اختيار الوحدة يعود إليك. أخبرنا بالماركة والطراز عند الطلب ويُجهَّز الهيكل لها. وبهذا لا تكون مقيدًا بوحدة نتوفر عليها صدفةً، ويمكنك مطابقة ما يعمل به أسطولك الحالي.",
    "Can one trailer carry chilled and frozen goods at the same time?": "هل يمكن لمقطورة واحدة نقل بضائع مبردة ومجمدة في آن واحد؟",
    "Yes, with a partition creating two temperature zones. It is much easier to build that in from the start than to retrofit it, so raise it at the specification stage.": "نعم، عبر حاجز يُنشئ منطقتي حرارة. وبناء ذلك من البداية أسهل بكثير من تركيبه لاحقًا، لذا اطرحه في مرحلة تحديد المواصفات.",
    "Do we need insulation if we only carry dry goods?": "هل نحتاج عزلًا إن كنا ننقل بضائع جافة فقط؟",
    "No. A dry freight box costs less, weighs less and therefore carries more payload. Insulation is worth paying for only if cold chain is an actual requirement for your cargo.": "لا. فالصندوق الجاف أقل تكلفة وأخف وزنًا وبالتالي يحمل حمولة أكبر. ولا يستحق العزل ثمنه إلا إذا كانت سلسلة التبريد متطلبًا فعليًا لبضاعتك.",
    "How long does a box or reefer trailer take to build?": "كم تستغرق صناعة مقطورة صندوقية أو مبردة؟",
    "Lead time depends on the body size and insulation specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على حجم الهيكل ومواصفات العزل. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",
    "If you need weather protection but faster side access, see": "إن كنت تحتاج حماية من العوامل الجوية مع تحميل جانبي أسرع، اطّلع على",
    ". For open freight that does not need covering, a": ". وللبضائع المكشوفة التي لا تحتاج تغطية، فإن",
    "Need a box or reefer trailer?": "تحتاج مقطورة صندوقية أو مبردة؟",

    /* ---- heavy-duty cargo trailers ---- */
    "Built for cargo that fights back. Scrap steel, aggregate and loose heavy material punish a standard body — this one is reinforced through the sides and the floor to take the abuse of repeated rough loading.": "مصممة للبضائع القاسية. فالخردة الفولاذية والركام والمواد الثقيلة السائبة تُنهك الهيكل العادي — أما هذه فمقوّاة في الجوانب والأرضية لتتحمل قسوة التحميل الخشن المتكرر.",
    "Reinforced mesh, drop-side option": "شبك مقوّى، مع خيار الجوانب القابلة للإنزال",
    "Floor": "الأرضية",
    "Heavy-gauge, built for impact loading": "سماكة عالية، مصممة لتحميل الصدم",
    "Grab, excavator or tipper": "قبّاض أو حفّار أو قلّاب",
    "Scrap, aggregate, loose heavy cargo": "الخردة والركام والبضائع الثقيلة السائبة",
    "Scrap metal, aggregate, demolition waste and bulk loose material — the loads that get dropped in from height rather than placed.": "الخردة المعدنية والركام ومخلفات الهدم والمواد السائبة بكميات كبيرة — الأحمال التي تُلقى من ارتفاع بدل أن تُوضع.",
    "Where the reinforcement goes": "أين يوضع التقوية",
    "Extra material where it earns its place: the side posts, the floor, and the joints between them. A trailer loaded by grab takes impact in places a palletised trailer never does, and that is where these fail if they are built to a general-purpose spec.": "مادة إضافية حيث تثبت جدواها: القوائم الجانبية، والأرضية، والوصلات بينهما. فالمقطورة المحمّلة بالقبّاض تتلقى صدمات في مواضع لا تتلقاها مقطورة البضائع على منصات أبدًا، وهذه هي المواضع التي تفشل فيها إن بُنيت بمواصفات عامة.",
    "Side height and mesh gauge, floor specification, axle configuration, and whether you want fixed or drop sides for discharge.": "ارتفاع الجوانب وسماكة الشبك، ومواصفات الأرضية، وتكوين المحاور، وما إذا كنت تريد جوانب ثابتة أو قابلة للإنزال للتفريغ.",
    "Why general-purpose trailers fail on this work": "لماذا تفشل المقطورات العامة في هذا العمل",
    "A trailer built for palletised freight assumes the load is placed onto the deck. Scrap and demolition waste are not placed — they are dropped in by grab from height, repeatedly, in the same few spots. The energy goes into the floor and the lower side posts, and a deck specified for even, static loading simply is not designed for it.": "المقطورة المبنية للبضائع على منصات تفترض أن الحمل يُوضع على السطح. أما الخردة ومخلفات الهدم فلا تُوضع — بل تُلقى بالقبّاض من ارتفاع، مرارًا، في البقع القليلة نفسها. وتنتقل الطاقة إلى الأرضية والقوائم الجانبية السفلية، والسطح المحسوب لتحميل ساكن ومتساوٍ ببساطة غير مصمم لذلك.",
    "That is why we put the extra material where the impact lands rather than adding weight uniformly across the trailer. A heavier trailer everywhere is not a stronger trailer where it counts, and every kilo of unnecessary tare is a kilo of payload you cannot carry.": "لهذا نضع المادة الإضافية حيث تقع الصدمة بدل توزيع الوزن بالتساوي على المقطورة. فالمقطورة الأثقل في كل مكان ليست أقوى في المكان المهم، وكل كيلوغرام وزن فارغ غير ضروري هو كيلوغرام حمولة لا تستطيع نقله.",
    "Volume against weight — getting the sides right": "الحجم مقابل الوزن — ضبط الجوانب",
    "The side height decision depends on the density of what you carry. Light bulky material such as demolition waste fills the volume long before it reaches the axle limit, so taller sides earn their keep. Dense material like scrap steel hits the weight limit while the trailer still looks half empty, and tall sides on that work just add tare weight and tempt overloading.": "قرار ارتفاع الجوانب يعتمد على كثافة ما تنقله. فالمواد الخفيفة كبيرة الحجم مثل مخلفات الهدم تملأ الحجم قبل أن تبلغ حد المحاور بكثير، فتثبت الجوانب الأعلى جدواها. أما المواد الكثيفة كالخردة الفولاذية فتبلغ حد الوزن والمقطورة لا تزال تبدو نصف فارغة، والجوانب العالية في هذا العمل تزيد الوزن الفارغ وتغري بالتحميل الزائد.",
    "Tell us what you carry most and roughly what a full load weighs. That single answer usually sets the side height.": "أخبرنا بما تنقله أكثر وبوزن الحمولة الكاملة تقريبًا. هذه الإجابة وحدها تحدد ارتفاع الجوانب عادةً.",
    "Discharge: fixed or drop sides": "التفريغ: جوانب ثابتة أم قابلة للإنزال",
    "How you empty the trailer matters as much as how you fill it. Fixed sides are stronger and simpler. Drop sides make discharge quicker where you are not tipping, at the cost of complexity at the very joints that take the most punishment. If your operation tips, fixed sides are almost always the right answer.": "طريقة تفريغك للمقطورة لا تقل أهمية عن طريقة ملئها. فالجوانب الثابتة أقوى وأبسط. والجوانب القابلة للإنزال تسرّع التفريغ حين لا تعتمد على القلب، لكن بثمن تعقيد في الوصلات نفسها التي تتحمل أشد الإجهاد. وإن كانت عمليتك تعتمد على القلب، فالجوانب الثابتة هي الجواب الصحيح في الغالب.",
    "Mesh gauge and floor specification": "سماكة الشبك ومواصفات الأرضية",
    "Mesh gauge is a containment decision: heavy enough to hold the material in, not so heavy that you are hauling surplus steel. Floor specification follows the same logic as the side posts — it is sized for impact loading rather than for even distribution.": "سماكة الشبك قرار احتواء: ثقيلة بما يكفي لحبس المادة، لا ثقيلة إلى حد أن تنقل فولاذًا فائضًا. وتتبع مواصفات الأرضية المنطق نفسه الذي تتبعه القوائم الجانبية — فهي محسوبة لتحميل الصدم لا للتوزيع المتساوي.",
    "Send us the material you carry, roughly what a full load weighs, how it is loaded and how it is discharged, plus the destination country. You get a written specification, a price and a lead time, usually within one working day. Buyers outside the UAE should read our": "أرسل لنا المادة التي تنقلها، ووزن الحمولة الكاملة تقريبًا، وكيف تُحمَّل وكيف تُفرَّغ، إضافةً إلى بلد الوجهة. ستحصل على مواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد. وعلى المشترين من خارج الإمارات الاطلاع على",
    "Heavy-Duty Cargo Trailer FAQs": "أسئلة شائعة عن مقطورات الشحن الثقيل",
    "What is a heavy-duty cargo trailer used for?": "فيمَ تُستخدم مقطورة الشحن الثقيل؟",
    "Scrap metal, aggregate, demolition waste and bulk loose material — loads that are dropped in from height by grab rather than placed on the deck.": "الخردة المعدنية والركام ومخلفات الهدم والمواد السائبة بكميات كبيرة — أحمال تُلقى من ارتفاع بالقبّاض بدل أن تُوضع على السطح.",
    "Why not just use a stake body trailer for scrap?": "لماذا لا نستخدم مقطورة ذات قوائم للخردة؟",
    "Because the loading is different in kind, not just degree. Grab loading puts repeated impact into the floor and lower side posts, which a trailer built for palletised freight is not specified for. Those are the points that fail first on a general-purpose trailer doing this work.": "لأن التحميل مختلف في نوعه لا في درجته فقط. فالتحميل بالقبّاض يوجّه صدمات متكررة إلى الأرضية والقوائم الجانبية السفلية، وهو ما لم تُحسب له المقطورة المبنية للبضائع على منصات. وهذه هي أول المواضع التي تفشل في مقطورة عامة تؤدي هذا العمل.",
    "How high should the sides be?": "كم يجب أن يكون ارتفاع الجوانب؟",
    "It depends on the density of your material. Light bulky waste fills the volume before it reaches the weight limit, so taller sides help. Dense scrap reaches the weight limit first, and taller sides then only add tare weight. Tell us what a full load weighs and we will advise.": "يعتمد على كثافة مادتك. فالمخلفات الخفيفة كبيرة الحجم تملأ الحجم قبل بلوغ حد الوزن، فتفيد الجوانب الأعلى. أما الخردة الكثيفة فتبلغ حد الوزن أولًا، وعندها لا تضيف الجوانب الأعلى سوى وزن فارغ. أخبرنا بوزن الحمولة الكاملة وسننصحك.",
    "Should we specify fixed or drop sides?": "هل نحدد جوانب ثابتة أم قابلة للإنزال؟",
    "Fixed sides are stronger and simpler, and are usually right if you tip to discharge. Drop sides speed up discharge when you are not tipping, but add complexity at the joints that take the most punishment.": "الجوانب الثابتة أقوى وأبسط، وهي الصحيحة عادةً إن كنت تفرّغ بالقلب. أما القابلة للإنزال فتسرّع التفريغ حين لا تعتمد على القلب، لكنها تضيف تعقيدًا في الوصلات التي تتحمل أشد الإجهاد.",
    "How long does a heavy-duty cargo trailer take to build?": "كم تستغرق صناعة مقطورة شحن ثقيل؟",
    "Lead time depends on the side height and reinforcement specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على ارتفاع الجوانب ومواصفات التقوية. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",
    "For palletised or general freight, a": "للبضائع على منصات أو البضائع العامة، فإن",
    "is the lighter choice. Loads needing vertical support belong on an": "هي الخيار الأخف. أما الأحمال التي تحتاج إسنادًا رأسيًا فمكانها",
    "Need a heavy-duty cargo trailer?": "تحتاج مقطورة شحن ثقيل؟",

    /* ---- car carrier trailers ---- */
    "Vehicle transport is about how quickly you can load and how securely the cars sit once they are on. Full-length walkway, mesh ramp and lashing points where the driver actually needs them.": "نقل المركبات يتعلق بسرعة التحميل وبمدى ثبات السيارات بعد تحميلها. ممر بطول المقطورة، ومنحدر شبكي، ونقاط تثبيت حيث يحتاجها السائق فعلًا.",
    "Open deck, single level": "سطح مفتوح بمستوى واحد",
    "Walkway": "الممر",
    "Full-length top walkway": "ممر علوي بطول المقطورة",
    "Ramp": "المنحدر",
    "Mesh loading ramp": "منحدر تحميل شبكي",
    "Securing": "التثبيت",
    "Multiple lashing points": "نقاط تثبيت متعددة",
    "Cars, light commercial vehicles and dealership stock movements. Built for operators moving vehicles regularly rather than as an occasional job.": "السيارات والمركبات التجارية الخفيفة ونقل مخزون الوكالات. مصممة للمشغّلين الذين ينقلون المركبات بانتظام لا كعمل عرضي.",
    "Loading and securing": "التحميل والتثبيت",
    "The walkway runs the full length so the driver can reach every securing point without climbing over the load. Lashing points are set to the vehicles you actually move — tell us the mix and we will position them to match.": "يمتد الممر بطول المقطورة ليصل السائق إلى كل نقطة تثبيت دون تسلّق فوق الحمل. وتُحدَّد نقاط التثبيت وفق المركبات التي تنقلها فعلًا — أخبرنا بتشكيلتك وسنضعها بما يطابقها.",
    "Deck length and capacity, ramp configuration, walkway layout and axle count. Multi-level configurations are available on request.": "طول السطح والسعة، وتكوين المنحدر، وتخطيط الممر، وعدد المحاور. وتتوفر التكوينات متعددة المستويات عند الطلب.",
    "How many vehicles you actually need to carry": "كم مركبة تحتاج نقلها فعلًا",
    "Capacity is the first number buyers give us and the one most worth questioning. A single-level open deck is simpler, lighter and quicker to load and unload; a multi-level configuration carries more per trip but adds weight, height and loading time at both ends.": "السعة هي أول رقم يعطينا إياه المشترون، وهي الأجدر بالمراجعة. فالسطح المفتوح بمستوى واحد أبسط وأخف وأسرع في التحميل والتفريغ؛ أما التكوين متعدد المستويات فينقل أكثر في الرحلة الواحدة لكنه يضيف وزنًا وارتفاعًا ووقت تحميل عند الطرفين.",
    "The arithmetic that matters is vehicles per day, not vehicles per trip. An operator doing short dealership shuttles often moves more cars with a simpler trailer that loads fast than with a larger one that takes longer at each end. If your runs are long-distance, the opposite is usually true and the extra capacity pays.": "الحساب المهم هو عدد المركبات في اليوم لا في الرحلة. فالمشغّل الذي ينفّذ رحلات قصيرة بين الوكالات ينقل سيارات أكثر بمقطورة أبسط سريعة التحميل مقارنةً بأخرى أكبر تستغرق وقتًا أطول عند كل طرف. أما إن كانت رحلاتك طويلة المسافة فالعكس صحيح عادةً وتؤتي السعة الإضافية ثمارها.",
    "Ramp configuration": "تكوين المنحدر",
    "Ramps decide what you can load and where. The gradient has to suit the lowest vehicle you carry — a ramp fine for a pickup can ground the front bumper of a low sports car, which is exactly the kind of vehicle whose owner notices. Tell us the lowest ground clearance in your usual mix.": "المنحدرات هي ما يحدد ما تستطيع تحميله وأين. ويجب أن يناسب ميلها أخفض مركبة تنقلها — فالمنحدر المناسب لشاحنة بيك أب قد يحتكّ بالمصد الأمامي لسيارة رياضية منخفضة، وهي بالضبط نوع السيارات التي يلاحظ أصحابها ذلك. أخبرنا بأقل خلوص أرضي في تشكيلتك المعتادة.",
    "Where you load matters too. A trailer loading at a proper dealership ramp can be specified differently from one that has to load from a kerb or a rough yard.": "ومكان التحميل مهم أيضًا. فالمقطورة التي تُحمَّل عند منحدر وكالة مجهّز يمكن تحديد مواصفاتها بشكل مختلف عن تلك التي تُحمَّل من رصيف أو ساحة وعرة.",
    "Walkway and securing points": "الممر ونقاط التثبيت",
    "The full-length top walkway exists so the driver can reach every securing point without climbing over the vehicles. That is a safety matter and a damage matter — most carrier damage claims happen during securing, not in transit.": "الممر العلوي الممتد بطول المقطورة موجود ليصل السائق إلى كل نقطة تثبيت دون تسلّق فوق المركبات. وهذه مسألة سلامة ومسألة أضرار معًا — فمعظم مطالبات الأضرار في نقل السيارات تحدث أثناء التثبيت لا أثناء النقل.",
    "Lashing points are positioned around the vehicle mix you actually carry. A trailer moving a uniform fleet can have them tightly optimised; one carrying whatever the auction sends needs more flexibility. Tell us which case you are in.": "تُوضع نقاط التثبيت وفق تشكيلة المركبات التي تنقلها فعلًا. فالمقطورة التي تنقل أسطولًا متجانسًا يمكن ضبط نقاطها بدقة؛ أما التي تنقل ما يرسله المزاد فتحتاج مرونة أكبر. أخبرنا أي الحالتين تنطبق عليك.",
    "Mesh decking and drainage": "الأرضية الشبكية والتصريف",
    "Mesh decking drains, lets dust fall through rather than accumulate, and gives grip underfoot when a deck is wet with morning condensation. It also keeps tare weight down, which on a car carrier is directly worth money.": "الأرضية الشبكية تصرّف المياه، وتدع الغبار يتساقط بدل أن يتراكم، وتمنح ثباتًا تحت القدم حين يبتلّ السطح بندى الصباح. كما تُبقي الوزن الفارغ منخفضًا، وهو ما يعني مالًا مباشرًا في ناقلة السيارات.",
    "Send the vehicle mix, how many you need to move per trip, where you load, and the destination country. You get a written specification, a price and a lead time, usually within one working day. Buyers outside the UAE should read our": "أرسل لنا تشكيلة المركبات، وكم تحتاج نقله في الرحلة الواحدة، وأين تحمّل، وبلد الوجهة. ستحصل على مواصفات مكتوبة وسعر ومدة تنفيذ، عادةً خلال يوم عمل واحد. وعلى المشترين من خارج الإمارات الاطلاع على",
    "Car Carrier Trailer FAQs": "أسئلة شائعة عن مقطورات نقل السيارات",
    "How many cars does a car carrier trailer hold?": "كم سيارة تتسع لها مقطورة نقل السيارات؟",
    "It depends on the deck length and whether you specify a single or multi-level configuration. Capacity is set per order — tell us how many vehicles you need to move per trip and the mix of sizes, and we will work back from that.": "يعتمد على طول السطح وعلى اختيارك تكوينًا بمستوى واحد أو متعدد المستويات. وتُحدَّد السعة مع كل طلب — أخبرنا بعدد المركبات التي تحتاج نقلها في الرحلة وتشكيلة أحجامها، وسنبني الحساب انطلاقًا من ذلك.",
    "Is a single-level or multi-level carrier better?": "أيهما أفضل: ناقلة بمستوى واحد أم متعددة المستويات؟",
    "Single-level is lighter, simpler and quicker to load, which often suits short dealership shuttle work. Multi-level carries more per trip and usually pays on long-distance runs. The right measure is vehicles moved per day, not per trip.": "الناقلة بمستوى واحد أخف وأبسط وأسرع في التحميل، وهو ما يناسب غالبًا الرحلات القصيرة بين الوكالات. أما متعددة المستويات فتنقل أكثر في الرحلة وتؤتي ثمارها عادةً في الرحلات الطويلة. والمقياس الصحيح هو عدد المركبات المنقولة يوميًا لا في الرحلة الواحدة.",
    "Can the ramps handle low sports cars?": "هل تتعامل المنحدرات مع السيارات الرياضية المنخفضة؟",
    "Only if specified for them. Ramp gradient has to suit the lowest ground clearance you carry, so tell us the lowest vehicle in your usual mix and the ramps are built around it.": "فقط إن حُدِّدت مواصفاتها لذلك. فميل المنحدر يجب أن يناسب أقل خلوص أرضي تنقله، لذا أخبرنا بأخفض مركبة في تشكيلتك المعتادة وتُبنى المنحدرات حولها.",
    "Why is the walkway full length?": "لماذا يمتد الممر بطول المقطورة؟",
    "So the driver reaches every securing point without climbing over the load. Most damage to carried vehicles happens during securing rather than in transit, so safe access to every lashing point matters.": "ليصل السائق إلى كل نقطة تثبيت دون تسلّق فوق الحمل. فمعظم الأضرار التي تلحق بالمركبات المنقولة تحدث أثناء التثبيت لا أثناء النقل، لذا فالوصول الآمن إلى كل نقطة تثبيت أمر مهم.",
    "How long does a car carrier trailer take to build?": "كم تستغرق صناعة مقطورة نقل سيارات؟",
    "Lead time depends on the deck configuration and ramp specification. We confirm it in writing with your quotation, before you commit to anything.": "تعتمد مدة التنفيذ على تكوين السطح ومواصفات المنحدر. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم بأي شيء.",
    "For general freight rather than vehicles, see": "للبضائع العامة بدل المركبات، اطّلع على",
    "flatbed and stake body trailers": "المقطورات المسطحة وذات القوائم الجانبية",
    ". Enclosed transport for high-value vehicles is closer to a": ". أما النقل المغلق للمركبات عالية القيمة فهو أقرب إلى بناء",
    "box trailer": "المقطورة الصندوقية",
    "build. Our": ". وتوضح",
    "Need a car carrier trailer?": "تحتاج مقطورة نقل سيارات؟",

    /* ---- GCC export page ---- */
    "We have supplied buyers in Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Here is exactly how it works, what we handle, and what you handle — so there are no surprises at the border.": "وردّنا لعملاء في السعودية وعُمان وقطر والكويت والبحرين. وإليك بالضبط كيف تسير الأمور، وما نتولاه نحن، وما تتولاه أنت — حتى لا تكون هناك مفاجآت عند الحدود.",
    "Be Clear From the Start": "لنكن واضحين من البداية",
    "Collection, Not Delivery": "الاستلام لا التوصيل",
    "The part most buyers want confirmed before anything else.": "الجزء الذي يريد معظم المشترين تأكيده قبل أي شيء آخر.",
    /* split by a <strong>, so keyed as two fragments */
    "We build and hand over in Dubai. You arrange the transport.": "نحن نصنع ونسلّم في دبي. وأنت ترتّب النقل.",
    "Your trailer is finished, inspected and ready for collection at our Ras Al Khor facility. You collect it yourself, or you send a transport agent to do it — whichever suits how you normally move equipment.": "تكون مقطورتك جاهزة ومفحوصة ومعدّة للاستلام في منشأتنا برأس الخور. تستلمها بنفسك، أو ترسل وكيل نقل ليقوم بذلك — أيهما يناسب طريقتك المعتادة في نقل المعدات.",
    "We are saying this plainly because it changes how you budget the job. The price we quote is the trailer at our gate. Transport to your country, and the customs clearance at your end, sit with you or your agent. What we do supply is every document you need to make that straightforward.": "نقول هذا بوضوح لأنه يغيّر طريقة حسابك لتكلفة العملية. فالسعر الذي نعرضه هو سعر المقطورة عند بوابتنا. أما النقل إلى بلدك والتخليص الجمركي عندك فيقعان على عاتقك أو عاتق وكيلك. وما نوفّره نحن هو كل مستند تحتاجه ليتم ذلك بسلاسة.",
    "The Process": "الخطوات",
    "From Order to Collection": "من الطلب إلى الاستلام",
    "Specification & Quotation": "المواصفات وعرض السعر",
    "Tell us the trailer type, the payload, the cargo and the country it is going to. We come back with a full written specification, a price and a lead time before you commit to anything.": "أخبرنا بنوع المقطورة والحمولة والبضاعة والبلد الذي ستذهب إليه. ونعود إليك بمواصفات مكتوبة كاملة وسعر ومدة تنفيذ قبل أن تلتزم بأي شيء.",
    "Build": "التصنيع",
    "Fabricated in-house at Ras Al Khor — steel cutting, chassis welding, axles and braking, surface preparation and paint, bodywork and fit-out. You are welcome to visit during the build.": "يُصنَّع داخليًا في رأس الخور — قصّ الفولاذ، ولحام الشاسيه، والمحاور والفرامل، وتجهيز السطح والطلاء، والهيكل والتجهيز النهائي. ونرحّب بزيارتك أثناء التصنيع.",
    "Inspection": "الفحص",
    "We check the finished trailer before it leaves the yard: structure, brakes, lighting, coupling and finish. You or your agent are welcome to inspect it yourselves at this stage, and we would rather you did.": "نفحص المقطورة المنتهية قبل مغادرتها الساحة: الهيكل والفرامل والإضاءة ووصلة القطر والتشطيب. ويمكنك أنت أو وكيلك فحصها بنفسك في هذه المرحلة، بل نفضّل أن تفعل.",
    "Documentation": "المستندات",
    "We issue the commercial invoice, the certificate of origin and the technical documentation for the trailer. Your clearing agent uses these for the UAE export declaration and the import entry in your country.": "نصدر الفاتورة التجارية وشهادة المنشأ والوثائق الفنية للمقطورة. ويستخدمها مخلّصك الجمركي في بيان التصدير من الإمارات وبيان الاستيراد في بلدك.",
    "Collection": "الاستلام",
    "Your transporter arrives at Ras Al Khor and takes the trailer. Most leave on their own wheels behind a tractor unit; some go out on a low-bed or flatbed. Either works — tell us which so we can have it ready accordingly.": "يصل الناقل إلى رأس الخور ويأخذ المقطورة. معظمها يغادر على عجلاتها خلف جرّار؛ وبعضها يخرج على مقطورة منخفضة أو مسطحة. وكلاهما ممكن — أخبرنا بأيهما لنجهّزها وفق ذلك.",
    "Who Does What": "من يتولى ماذا",
    "Our Side and Your Side": "جانبنا وجانبك",
    "We handle": "نتولى نحن",
    "Design and full in-house fabrication, pre-handover inspection, the commercial invoice, the certificate of origin, and the technical documentation for the trailer.": "التصميم والتصنيع الداخلي الكامل، والفحص قبل التسليم، والفاتورة التجارية، وشهادة المنشأ، والوثائق الفنية للمقطورة.",
    "You handle": "تتولى أنت",
    "Transport from Ras Al Khor to your country, the export declaration and customs clearance through your agent, and any registration or plating required where the trailer will operate.": "النقل من رأس الخور إلى بلدك، وبيان التصدير والتخليص الجمركي عبر وكيلك، وأي تسجيل أو ترقيم مطلوب في المكان الذي ستعمل فيه المقطورة.",
    "Worth knowing": "جدير بالمعرفة",
    "Import duty, conformity requirements and registration rules differ between Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Check them with your clearing agent before you order, not after — they can affect the specification.": "تختلف الرسوم الجمركية ومتطلبات المطابقة وقواعد التسجيل بين السعودية وعُمان وقطر والكويت والبحرين. تحقق منها مع مخلّصك الجمركي قبل الطلب لا بعده — فقد تؤثر في المواصفات.",
    "Common Questions": "أسئلة متكررة",
    "GCC Buyers Ask Us This": "هذا ما يسألنا عنه عملاء الخليج",
    "Do you deliver to Saudi Arabia, Oman, Qatar, Kuwait or Bahrain?": "هل توصّلون إلى السعودية أو عُمان أو قطر أو الكويت أو البحرين؟",
    "We build and hand over at our Ras Al Khor facility in Dubai. Buyers in these countries collect the trailer themselves or send a transport agent to do it. We supply the documentation you need for the export and the customs entry at your end.": "نصنع ونسلّم في منشأتنا برأس الخور في دبي. ويستلم المشترون في هذه الدول المقطورة بأنفسهم أو يرسلون وكيل نقل. ونوفّر المستندات التي تحتاجها للتصدير وللبيان الجمركي عندك.",
    "What documents do you provide?": "ما المستندات التي توفّرونها؟",
    "Commercial invoice, certificate of origin, and the technical documentation for the trailer. Your clearing agent uses these for the export declaration from the UAE and the import entry in your country. Customs clearance itself is handled by you or your agent, not by us.": "فاتورة تجارية، وشهادة منشأ، والوثائق الفنية للمقطورة. ويستخدمها مخلّصك الجمركي في بيان التصدير من الإمارات وبيان الاستيراد في بلدك. أما التخليص الجمركي نفسه فتتولاه أنت أو وكيلك لا نحن.",
    "How does the trailer physically travel?": "كيف تنتقل المقطورة فعليًا؟",
    "Two ways. Most trailers leave on their own wheels behind a tractor unit, which is the usual route for the GCC land corridors. Alternatively the trailer is carried out on a low-bed or flatbed, which suits buyers who are moving other equipment at the same time or who prefer not to register it for the road first.": "بطريقتين. معظم المقطورات تغادر على عجلاتها خلف جرّار، وهو المسار المعتاد في الممرات البرية الخليجية. وبدلًا من ذلك تُنقل المقطورة على مقطورة منخفضة أو مسطحة، وهو ما يناسب المشترين الذين ينقلون معدات أخرى في الوقت نفسه أو يفضّلون عدم تسجيلها للطريق أولًا.",
    "How long does the build take?": "كم يستغرق التصنيع؟",
    "Lead time depends on the trailer type and your specification. We confirm it in writing with your quotation, before you commit.": "تعتمد مدة التنفيذ على نوع المقطورة ومواصفاتك. نؤكدها كتابيًا مع عرض السعر، قبل أن تلتزم.",
    "Can we inspect the trailer before collection?": "هل يمكننا فحص المقطورة قبل الاستلام؟",
    "Yes. You or your agent are welcome at the facility to inspect the finished trailer before it leaves. Every unit is checked by us first — structure, brakes, lighting, coupling and finish.": "نعم. نرحّب بك أو بوكيلك في المنشأة لفحص المقطورة المنتهية قبل مغادرتها. وكل وحدة نفحصها نحن أولًا — الهيكل والفرامل والإضاءة ووصلة القطر والتشطيب.",
    "Buying from Saudi, Oman, Qatar, Kuwait or Bahrain?": "تشتري من السعودية أو عُمان أو قطر أو الكويت أو البحرين؟",
    "Tell us the trailer type, the payload and the destination country — we'll send a specification, a price and a lead time.": "أخبرنا بنوع المقطورة والحمولة وبلد الوجهة — وسنرسل لك مواصفات وسعرًا ومدة تنفيذ.",

    /* ---- 404 ---- */
    "404": "404",
    "Page Not Found": "الصفحة غير موجودة",
    "That page doesn't exist — it may have moved, or the link may be wrong. Everything we build is one click away below.": "هذه الصفحة غير موجودة — ربما نُقلت أو أن الرابط غير صحيح. وكل ما نصنعه على بعد نقرة واحدة أدناه.",
    "Trailer types": "أنواع المقطورات",
    "Elsewhere on the site": "أقسام أخرى في الموقع",
    "Looking for something specific?": "تبحث عن شيء محدد؟",
    "Tell us what you need built and we'll come back with a specification and a price.": "أخبرنا بما تريد تصنيعه وسنعود إليك بمواصفات وسعر.",

    /* ---- placeholders ---- */
    "@ph:Your name": "اسمك",
    "@ph:+971 ...": "+971 ...",
    "@ph:you@company.com": "you@company.com",
    "@ph:you@company.com (optional)": "you@company.com (اختياري)",
    "@ph:Axle count, payload, quantity, timeline...": "عدد المحاور، الحمولة، الكمية، الموعد...",
    "@ph:How many units, what you'll be carrying, and when you need it. Anything you're unsure about, just say — we'll advise.": "كم وحدة، وماذا ستنقل، ومتى تحتاجها. وإن كان هناك ما لست متأكدًا منه، أخبرنا وسننصحك."
  };

  var STORE = 'ts-lang';
  var items = [];       // { node, en }
  var attrItems = [];   // { el, attr, en }
  var ready = false;

// Normalise curly quotes/dashes and whitespace so a key matches whether the
// HTML used &rsquo; or a plain apostrophe.
function norm(s){
  return s.replace(/[\u2018\u2019]/g, "'")
          .replace(/[\u201C\u201D]/g, '"')
          .replace(/\u00a0/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
}
// keep a node's surrounding whitespace when swapping its text
function swap(original, replacement){
  var lead = original.match(/^\s*/)[0];
  var trail = original.match(/\s*$/)[0];
  return lead + replacement + trail;
}

  function collect(){
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      var p = n.parentElement;
      if (!p) continue;
      // skip anything whose text is written by other scripts
      if (p.closest('script, style, svg, [data-count], #year, #lightboxCaption, .lang-toggle')) continue;
      if (!norm(n.nodeValue)) continue;
      items.push({ node: n, en: n.nodeValue });
    }
    ['placeholder', 'aria-label', 'data-caption'].forEach(function(attr){
      document.querySelectorAll('[' + attr + ']').forEach(function(el){
        attrItems.push({ el: el, attr: attr, en: el.getAttribute(attr) });
      });
    });
    ready = true;
  }

  function apply(lang){
    if (!ready) collect();
    var ar = lang === 'ar';

    items.forEach(function(it){
      var key = norm(it.en);
      var t = ar ? TR[key] : null;
      if (ar && !t) return;                       // no translation: leave the English
      it.node.nodeValue = ar ? swap(it.en, t) : it.en;
    });

    attrItems.forEach(function(it){
      var raw = norm(it.en);
      var key = (it.attr === 'placeholder' ? '@ph:' : '') + raw;
      var t = ar ? (TR[key] || TR[raw]) : null;
      if (ar && !t) return;
      it.el.setAttribute(it.attr, ar ? t : it.en);
    });

    document.documentElement.lang = ar ? 'ar' : 'en';
    document.documentElement.dir = ar ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-toggle').forEach(function(b){
      b.textContent = ar ? 'EN' : 'عربي';
      b.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية');
    });

    try { localStorage.setItem(STORE, lang); } catch(e){}
  }

  function current(){
    try { return localStorage.getItem(STORE) === 'ar' ? 'ar' : 'en'; } catch(e){ return 'en'; }
  }

  function init(){
    collect();
    if (current() === 'ar') apply('ar');
    else document.querySelectorAll('.lang-toggle').forEach(function(b){ b.textContent = 'عربي'; });

    document.querySelectorAll('.lang-toggle').forEach(function(b){
      b.addEventListener('click', function(){
        apply(document.documentElement.dir === 'rtl' ? 'en' : 'ar');
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
