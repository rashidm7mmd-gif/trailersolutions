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
