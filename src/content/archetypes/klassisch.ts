import { ArchetypeData } from './types';

export const klassischArchetype: ArchetypeData = {
  EN: {
    slug: 'klassischer-braeutigam',
    meta: {
      title: 'The Classic Groom — Your Guide to a Beautiful German Wedding',
      description: 'The complete guide for practical grooms planning a wedding in Germany. From proposal to the big day, with smart cost planning and style advice that delivers value.'
    },
    hero: {
      badge: 'Archetype 03 — The Classic Groom',
      headline: 'The Classic Groom',
      subline: 'Practical elegance, smart choices, and a celebration that feels authentic. Your guide to the well-planned German wedding.'
    },
    identity: {
      title: 'You Are the Classic Groom If...',
      description: 'You want a beautiful wedding without the theatrics. You are practical, value-driven, and believe that a great celebration does not require a six-figure budget. You have not spent much time thinking about shoes — but that is exactly why this guide exists.',
      traits: [
        'Your first question about any wedding decision is "what does it cost?"',
        'You would rather invest in a great photographer than an over-the-top venue',
        'A Gasthof or garden setting feels more authentic to you than a ballroom',
        'You had not really considered that your shoes make a difference — until now',
        'You believe the best weddings feel effortless, not extravagant'
      ]
    },
    timeline: [
      {
        phase: 'proposal',
        title: 'The Proposal',
        subtitle: 'Keeping It Real',
        description: 'The Klassischer Bräutigam proposes with sincerity, not spectacle. It might be during a hike in the Alps, at a favorite restaurant, or on a quiet evening at home with candles and a home-cooked meal. What matters is the intention, not the Instagram moment. The best proposals feel personal and true — not performed.',
        tips: [
          'Choose a place that means something to both of you — shared history beats expensive settings',
          'You do not need a photographer hidden in the bushes: the moment is yours, not the internet\'s',
          'Set a ring budget you are comfortable with — the ring industry inflates expectations far beyond what is necessary',
          'If you are nervous, write down what you want to say — it is not a script, it is a safety net'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'Versatile, comfortable, and quietly refined. A shoe that works for a restaurant proposal or a walk in the park.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      },
      {
        phase: 'engagement',
        title: 'The Engagement Party',
        subtitle: 'Celebrating with Your People',
        description: 'Keep it simple and warm. A barbecue in the garden, a Stammtisch at your regular spot, or a casual dinner at home. The engagement party does not need to be a formal event — it is about sharing your news with the people who matter most. Good food, good wine, genuine happiness.',
        tips: [
          'Host at home or a favorite restaurant — no need for a separate venue rental',
          'A simple "come celebrate with us" is enough: no formal invitations required',
          'This is a good time to subtly gauge who will be involved in the wedding planning',
          'If you are combining the announcement with an existing gathering (birthday, holiday), that is perfectly fine — it saves time and adds to the surprise'
        ]
      },
      {
        phase: 'venue',
        title: 'Venue Scouting',
        subtitle: 'Finding the Right Fit',
        description: 'Germany offers incredible value in wedding venues if you know where to look. Gasthöfe, Gutshöfe, garden restaurants, restored barns (Scheunen), and even Bürgerhäuser can be stunning wedding venues at a fraction of the cost of castles and hotels. The key is atmosphere, not architecture. A well-decorated barn with fairy lights and long wooden tables can be more memorable than a generic hotel ballroom.',
        tips: [
          'Look for venues that include catering — package deals save significantly compared to sourcing everything separately',
          'Friday and Sunday weddings are often 30-50% cheaper than Saturday bookings',
          'Off-season (November–March, excluding Christmas) offers the best venue rates',
          'Ask about Standesamt ceremonies at the venue — some locations are certified, saving you a separate civil ceremony',
          'Visit 2-3 venues maximum: too many choices create decision fatigue, not clarity',
          'Consider what is included: tables, chairs, linens, and basic decoration are often provided by Gasthof venues'
        ]
      },
      {
        phase: 'suit',
        title: 'Suit Selection',
        subtitle: 'Smart Investment Dressing',
        description: 'The Klassischer Bräutigam approaches his suit with the same practical wisdom he applies to everything: buy quality, but buy smart. A well-fitted navy or charcoal suit that you will wear again after the wedding is a better investment than a one-time-use tuxedo. Consider retailers that offer good value: Peek & Cloppenburg, Suitsupply, or a local tailor who offers made-to-measure at reasonable prices.',
        tips: [
          'Choose a suit you can wear to future events — navy blue and charcoal grey are the most versatile',
          'A good fit is more important than an expensive label: invest in tailoring alterations (€80-150) rather than a designer name',
          'Suitsupply offers exceptional quality-to-price ratio for wedding suits in the €400-600 range',
          'Buy your suit 3-4 months before the wedding: enough time for alterations, not so early that your body might change',
          'Consider renting if budget is tight — modern rental services offer well-fitted options from €150-300'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'The smart choice: dark brown suede works with navy and charcoal, and you will wear these long after the wedding.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      },
      {
        phase: 'bachelor',
        title: 'The Bachelor Party',
        subtitle: 'No Nonsense, All Fun',
        description: 'The Klassischer Bräutigam\'s JGA does not need to involve flights or five-star hotels. A weekend at a Ferienhaus with your closest friends, a brewery tour through Franconia, a day of karting followed by dinner — the best bachelor parties are about the people, not the price tag. Keep it fun, keep it affordable, and keep the group tight.',
        tips: [
          'Set a budget per person early and stick to it — not everyone has the same financial flexibility',
          'A Ferienwohnung or holiday cabin for the group is far cheaper than individual hotel rooms',
          'Combine a free activity (hiking, swimming) with one paid experience (go-karting, brewery visit, escape room)',
          'The best man should coordinate, but respect the groom\'s limits on wildness and budget'
        ],
        shoeRecommendation: {
          product: 'Grey Yacht Loafers',
          reason: 'Casual and durable. Grey suede handles a day of activities without looking like you tried too hard.',
          link: 'https://aurelien-online.com/products/grey-suede-yacht-loafers'
        }
      },
      {
        phase: 'rehearsal',
        title: 'The Rehearsal Dinner',
        subtitle: 'The Quiet Night Before',
        description: 'Not every wedding needs a formal rehearsal dinner — and the Klassischer Bräutigam knows this. A relaxed dinner with your immediate families and wedding party at a local restaurant or at home is perfect. It is a chance to review the logistics, calm the nerves, and enjoy a quiet evening before the excitement begins.',
        tips: [
          'A pizza-and-wine evening at home is just as meaningful as a restaurant dinner',
          'Use this time to confirm final details with your best man, officiant, and any speakers',
          'Keep it short: early to bed, clear head for tomorrow',
          'If you are combining Standesamt and celebration on the same day, use this evening to finalize the timeline with key people'
        ],
        shoeRecommendation: {
          product: 'Nut Yacht Loafers',
          reason: 'Warm and relaxed for a casual evening. The nut tone works perfectly with jeans or chinos.',
          link: 'https://aurelien-online.com/products/nut-yacht-loafers'
        }
      },
      {
        phase: 'bigday',
        title: 'The Big Day',
        subtitle: 'Authentically Yours',
        description: 'This is the day where practical meets beautiful. The Gasthof garden is decorated with simple wildflowers and string lights. The tables are set with care but without excess. Your suit fits perfectly. Your shoes are comfortable — because you will be on your feet for 14 hours and you had the foresight to choose well. You look at your partner and everything feels right. Not because it was expensive, but because it was intentional. The best weddings are not the most lavish — they are the most genuine.',
        tips: [
          'Build in buffer time: things always take longer than planned, and stress ruins photos',
          'Wear your shoes at home for a week before — comfort on the day is non-negotiable',
          'Assign one trusted person as the "problem solver" so you can focus on enjoying the day',
          'Eat breakfast. Eat lunch. Grooms who skip meals regret it by evening',
          'Dance. Even if you think you cannot. It is your wedding — nobody is judging, everyone is celebrating'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'The practical groom\'s perfect choice: elegant enough for the ceremony, comfortable enough for 14 hours, versatile enough to wear again. Dark brown suede works with every classic suit color.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      }
    ],
    costBreakdown: [
      { category: 'venue', label: 'Venue (Gasthof/Scheune/Garden)', lowEstimate: 500, highEstimate: 4000, note: 'Many Gasthöfe include venue in catering package' },
      { category: 'catering', label: 'Catering & Drinks', lowEstimate: 50, highEstimate: 100, perPerson: true, note: 'Buffet or family-style with house wines and beer' },
      { category: 'photographer', label: 'Photographer', lowEstimate: 1200, highEstimate: 3000, note: 'Invest here — photos are what you keep forever' },
      { category: 'florist', label: 'Flowers & Decoration', lowEstimate: 400, highEstimate: 1500, note: 'Wildflowers, seasonal arrangements, DIY options' },
      { category: 'music', label: 'Music & Entertainment', lowEstimate: 500, highEstimate: 2000, note: 'DJ or curated playlist with quality speakers' },
      { category: 'attire', label: 'Groom\'s Attire (Suit + Shoes)', lowEstimate: 400, highEstimate: 1500, note: 'Quality suit you\'ll wear again plus versatile loafers' },
      { category: 'rings', label: 'Wedding Rings', lowEstimate: 500, highEstimate: 2000 },
      { category: 'invitations', label: 'Stationery & Invitations', lowEstimate: 100, highEstimate: 400, note: 'Digital invitations are increasingly accepted and free' },
      { category: 'standesamt', label: 'Standesamt Fees', lowEstimate: 50, highEstimate: 200, note: 'Civil ceremony registration fees' },
      { category: 'cake', label: 'Wedding Cake', lowEstimate: 200, highEstimate: 600, note: 'Local bakery or talented friend' },
      { category: 'transport', label: 'Transport', lowEstimate: 0, highEstimate: 500, note: 'Often not needed for local venues' },
      { category: 'misc', label: 'Miscellaneous & Contingency', lowEstimate: 500, highEstimate: 1500 }
    ],
    defaultGuestCount: 60,
    totalBudgetRange: { low: 8000, high: 25000 },
    styleGuide: {
      suit: {
        recommendation: 'Navy Blue or Charcoal Two-Piece Suit',
        details: 'The classic choice: a well-fitted navy or charcoal suit that works on your wedding day and for years after. Single-breasted, notch lapel, in a year-round wool or wool-blend fabric. The fit matters more than the label. Have it tailored: €80-150 in alterations transforms a good suit into a great one. Suitsupply, Peek & Cloppenburg, or a local tailor all offer excellent value.'
      },
      shoes: {
        recommendation: 'Dark Brown or Cognac Suede Loafers',
        details: 'This is the smartest shoe investment the Klassischer Bräutigam can make. Dark brown or cognac suede loafers work with navy, charcoal, and grey suits. They are comfortable for a full day on your feet. And — crucially — you will wear them to every event, dinner, and celebration after the wedding. This is not a one-day purchase, it is a wardrobe upgrade.',
        products: ['DARK_BROWN', 'COGNAC', 'LIGHT_BROWN']
      },
      accessories: {
        recommendation: 'Simple Tie or No Tie, Quality Belt, Clean Watch',
        details: 'Less is more. A simple silk tie in navy or burgundy, a quality leather belt that matches your shoes, and a clean watch. Skip the pocket square if it feels forced. The Klassischer Bräutigam\'s strength is authenticity, not costume.'
      }
    },
    venues: [
      {
        name: 'Landgasthof with Garden',
        location: 'Throughout Germany',
        description: 'The quintessential German wedding venue. A traditional Gasthof with a garden terrace offers charm, in-house catering, and a warm atmosphere. Many include decoration basics and have experience hosting weddings. The best value option.',
        priceRange: '€500–€2,000'
      },
      {
        name: 'Scheune / Barn Venue',
        location: 'Brandenburg, Bavaria, Lower Saxony',
        description: 'Restored barns have become Germany\'s hottest wedding venues. Rustic beams, fairy lights, and long wooden tables create an atmosphere that no hotel ballroom can match. Often available as a blank canvas you can decorate yourself.',
        priceRange: '€1,000–€4,000'
      },
      {
        name: 'Gutshof / Country Estate',
        location: 'Throughout Germany',
        description: 'A step up from a Gasthof but still authentic. Country estates offer beautiful grounds, historic buildings, and often accommodation for the wedding party. The sweet spot between charm and luxury.',
        priceRange: '€2,000–€6,000'
      },
      {
        name: 'Bürgerhaus / Community Hall',
        location: 'Throughout Germany',
        description: 'The budget champion. Many German towns have beautiful Bürgerhäuser that can be rented affordably. Bring your own caterer and decorations. What you save on the venue, invest in food and photography.',
        priceRange: '€200–€800'
      }
    ],
    practicalTips: [
      {
        title: 'Where to Invest and Where to Save',
        content: 'Invest in: photographer (you keep the photos forever), catering (guests remember the food), and your shoes (you will wear them again). Save on: invitations (digital is fine), decorations (DIY with friends), transport (choose a local venue), and favors (nobody remembers wedding favors).'
      },
      {
        title: 'The Standesamt Strategy',
        content: 'In Germany, the civil ceremony at the Standesamt is the legal requirement. You can do this quietly with witnesses and then have your celebration separately. Some couples do the Standesamt on a Friday and the celebration on Saturday. Others combine everything in one day. Choose what works for your budget and schedule.'
      },
      {
        title: 'DIY That Actually Works',
        content: 'Some DIY saves real money: centerpieces with wildflowers and candles, a playlist instead of a DJ, homemade welcome signs, and a dessert buffet where friends contribute. Some DIY costs more stress than it saves: do not attempt your own catering, photography, or anything involving timing-critical logistics.'
      },
      {
        title: 'Seasonal Savings',
        content: 'A January or March wedding can save 30-50% on venue and vendor costs compared to peak summer. Late autumn weddings offer beautiful colors and off-season pricing. If you choose winter, embrace it: candlelight, mulled wine, and hearty food create an atmosphere no summer garden can match.'
      },
      {
        title: 'The Shoe Equation',
        content: 'Many grooms treat shoes as an afterthought and spend €40 on uncomfortable dress shoes they will never wear again. A quality pair of suede loafers at €200-300 is actually cheaper in the long run: they are comfortable on your wedding day, and you will wear them for years to every event, dinner, and smart-casual occasion. The cost-per-wear makes them the practical choice.'
      }
    ],
    cta: {
      headline: 'The Smart Investment',
      subline: 'The Klassischer Bräutigam invests where it matters. Quality loafers are comfortable on your wedding day and become a wardrobe staple for years after. That is practical elegance.',
      buttonText: 'View the Collection',
      buttonLink: '/collection'
    }
  },
  DE: {
    slug: 'klassischer-braeutigam',
    meta: {
      title: 'Der Klassische Bräutigam — Ihr Guide zur schönen deutschen Hochzeit',
      description: 'Der umfassende Leitfaden für praktische Bräutigame. Vom Antrag bis zum großen Tag, mit cleverer Kostenplanung und Stil-Beratung, die echten Mehrwert bietet.'
    },
    hero: {
      badge: 'Archetyp 03 — Der Klassische Bräutigam',
      headline: 'Der Klassische Bräutigam',
      subline: 'Praktische Eleganz, clevere Entscheidungen und eine Feier, die sich authentisch anfühlt. Ihr Leitfaden für die gut geplante deutsche Hochzeit.'
    },
    identity: {
      title: 'Sie sind der Klassische Bräutigam, wenn...',
      description: 'Sie wollen eine schöne Hochzeit ohne Theater. Sie sind praktisch, wertbewusst und glauben, dass eine großartige Feier kein sechsstelliges Budget erfordert. Sie haben nicht viel Zeit damit verbracht, über Schuhe nachzudenken — aber genau dafür gibt es diesen Leitfaden.',
      traits: [
        'Ihre erste Frage bei jeder Hochzeitsentscheidung ist "was kostet das?"',
        'Sie investieren lieber in einen großartigen Fotografen als in eine übertriebene Location',
        'Ein Gasthof oder Garten-Setting fühlt sich für Sie authentischer an als ein Ballsaal',
        'Sie hatten eigentlich nicht bedacht, dass Ihre Schuhe einen Unterschied machen — bis jetzt',
        'Sie glauben, die besten Hochzeiten fühlen sich mühelos an, nicht extravagant'
      ]
    },
    timeline: [
      {
        phase: 'proposal',
        title: 'Der Antrag',
        subtitle: 'Echt bleiben',
        description: 'Der Klassische Bräutigam macht seinen Antrag mit Aufrichtigkeit, nicht mit Spektakel. Vielleicht während einer Wanderung in den Alpen, in einem Lieblingsrestaurant oder an einem ruhigen Abend zu Hause mit Kerzen und einem selbstgekochten Essen. Was zählt, ist die Absicht, nicht der Instagram-Moment. Die besten Anträge fühlen sich persönlich und echt an — nicht inszeniert.',
        tips: [
          'Wählen Sie einen Ort, der Ihnen beiden etwas bedeutet — gemeinsame Geschichte schlägt teure Kulissen',
          'Sie brauchen keinen Fotografen, der sich in den Büschen versteckt: der Moment gehört Ihnen, nicht dem Internet',
          'Setzen Sie ein Ring-Budget, mit dem Sie sich wohlfühlen — die Ringindustrie bläht Erwartungen weit über das Nötige auf',
          'Wenn Sie nervös sind, schreiben Sie auf, was Sie sagen wollen — es ist kein Skript, es ist ein Sicherheitsnetz'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'Vielseitig, bequem und dezent raffiniert. Ein Schuh, der für einen Restaurant-Antrag oder einen Parkspaziergang funktioniert.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      },
      {
        phase: 'engagement',
        title: 'Die Verlobungsfeier',
        subtitle: 'Feiern mit Ihren Leuten',
        description: 'Halten Sie es einfach und herzlich. Ein Grillen im Garten, ein Stammtisch an Ihrem üblichen Ort oder ein entspanntes Abendessen zu Hause. Die Verlobungsfeier muss kein formelles Event sein — es geht darum, Ihre Neuigkeiten mit den Menschen zu teilen, die am wichtigsten sind. Gutes Essen, guter Wein, echte Freude.',
        tips: [
          'Veranstalten Sie es zu Hause oder in einem Lieblingsrestaurant — keine separate Location-Miete nötig',
          'Ein einfaches "Kommt feiern mit uns" reicht: keine formellen Einladungen nötig',
          'Dies ist eine gute Gelegenheit, dezent zu schauen, wer bei der Hochzeitsplanung involviert sein wird',
          'Wenn Sie die Ankündigung mit einem bestehenden Treffen kombinieren (Geburtstag, Feiertag), ist das völlig in Ordnung — spart Zeit und erhöht die Überraschung'
        ]
      },
      {
        phase: 'venue',
        title: 'Die Location-Suche',
        subtitle: 'Das Richtige finden',
        description: 'Deutschland bietet unglaubliches Preis-Leistungs-Verhältnis bei Hochzeitslocations, wenn man weiß, wo man suchen muss. Gasthöfe, Gutshöfe, Gartenrestaurants, restaurierte Scheunen und sogar Bürgerhäuser können atemberaubende Hochzeitslocations zu einem Bruchteil der Kosten von Schlössern und Hotels sein. Der Schlüssel ist Atmosphäre, nicht Architektur. Eine gut dekorierte Scheune mit Lichterketten und langen Holztischen kann unvergesslicher sein als ein generischer Hotel-Ballsaal.',
        tips: [
          'Suchen Sie Locations, die Catering beinhalten — Paketangebote sparen erheblich im Vergleich zur Einzelbeschaffung',
          'Freitags- und Sonntagshochzeiten sind oft 30-50% günstiger als Samstags-Buchungen',
          'Nebensaison (November–März, ohne Weihnachten) bietet die besten Location-Preise',
          'Fragen Sie nach Standesamtlichen Trauungen in der Location — manche Orte sind zugelassen, was eine separate Zeremonie erspart',
          'Besuchen Sie maximal 2-3 Locations: zu viele Optionen erzeugen Entscheidungsmüdigkeit, keine Klarheit',
          'Berücksichtigen Sie, was enthalten ist: Tische, Stühle, Tischwäsche und Basisdekoration werden oft von Gasthöfen gestellt'
        ]
      },
      {
        phase: 'suit',
        title: 'Die Anzug-Auswahl',
        subtitle: 'Clevere Investition',
        description: 'Der Klassische Bräutigam geht seinen Anzug mit derselben praktischen Weisheit an, die er auf alles anwendet: kaufe Qualität, aber kaufe clever. Ein gut sitzender Navy- oder Anthrazit-Anzug, den Sie nach der Hochzeit wieder tragen werden, ist eine bessere Investition als ein einmal getragener Smoking. Erwägen Sie Anbieter mit gutem Preis-Leistungs-Verhältnis: Peek & Cloppenburg, Suitsupply oder einen lokalen Schneider, der Maßanfertigung zu vernünftigen Preisen bietet.',
        tips: [
          'Wählen Sie einen Anzug, den Sie zu künftigen Anlässen tragen können — Navyblau und Anthrazit sind am vielseitigsten',
          'Eine gute Passform ist wichtiger als ein teures Label: investieren Sie in Änderungen (€80-150) statt in einen Designer-Namen',
          'Suitsupply bietet ein außergewöhnliches Qualitäts-Preis-Verhältnis für Hochzeitsanzüge im Bereich €400-600',
          'Kaufen Sie Ihren Anzug 3-4 Monate vor der Hochzeit: genug Zeit für Änderungen, nicht so früh, dass sich Ihr Körper noch ändern könnte',
          'Erwägen Sie Mieten, wenn das Budget eng ist — moderne Verleihdienste bieten gut sitzende Optionen ab €150-300'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'Die clevere Wahl: Dunkelbraunes Wildleder funktioniert mit Navy und Anthrazit, und Sie werden diese Schuhe noch lange nach der Hochzeit tragen.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      },
      {
        phase: 'bachelor',
        title: 'Der Junggesellenabschied',
        subtitle: 'Kein Schnickschnack, nur Spaß',
        description: 'Der JGA des Klassischen Bräutigams braucht keine Flüge oder Fünf-Sterne-Hotels. Ein Wochenende in einem Ferienhaus mit den engsten Freunden, eine Brauereitour durch Franken, ein Tag Go-Kart gefolgt von Dinner — die besten Junggesellenabschiede drehen sich um die Menschen, nicht um den Preis. Halten Sie es spaßig, halten Sie es bezahlbar, und halten Sie die Gruppe klein.',
        tips: [
          'Setzen Sie früh ein Budget pro Person fest und halten Sie es ein — nicht jeder hat die gleiche finanzielle Flexibilität',
          'Eine Ferienwohnung oder Hütte für die Gruppe ist weit günstiger als einzelne Hotelzimmer',
          'Kombinieren Sie eine kostenlose Aktivität (Wandern, Schwimmen) mit einem bezahlten Erlebnis (Go-Kart, Brauereibesuch, Escape Room)',
          'Der Trauzeuge sollte koordinieren, aber die Grenzen des Bräutigams bei Wildheit und Budget respektieren'
        ],
        shoeRecommendation: {
          product: 'Grey Yacht Loafers',
          reason: 'Lässig und strapazierfähig. Graues Wildleder meistert einen Tag voller Aktivitäten, ohne dass Sie wie jemand aussehen, der sich zu sehr bemüht hat.',
          link: 'https://aurelien-online.com/products/grey-suede-yacht-loafers'
        }
      },
      {
        phase: 'rehearsal',
        title: 'Das Probe-Dinner',
        subtitle: 'Der ruhige Abend vorher',
        description: 'Nicht jede Hochzeit braucht ein formelles Probe-Dinner — und der Klassische Bräutigam weiß das. Ein entspanntes Abendessen mit den engsten Familienmitgliedern und der Hochzeitsgesellschaft in einem lokalen Restaurant oder zu Hause ist perfekt. Es ist eine Chance, die Logistik zu besprechen, die Nerven zu beruhigen und einen ruhigen Abend zu genießen, bevor die Aufregung beginnt.',
        tips: [
          'Ein Pizza-und-Wein-Abend zu Hause ist genauso bedeutungsvoll wie ein Restaurantdinner',
          'Nutzen Sie die Zeit, um letzte Details mit Ihrem Trauzeugen, Standesbeamten und Rednern zu besprechen',
          'Halten Sie es kurz: früh ins Bett, klarer Kopf für morgen',
          'Wenn Sie Standesamt und Feier am selben Tag kombinieren, nutzen Sie diesen Abend, um den Zeitplan mit den wichtigsten Personen zu finalisieren'
        ],
        shoeRecommendation: {
          product: 'Nut Yacht Loafers',
          reason: 'Warm und entspannt für einen lockeren Abend. Der Nusston funktioniert perfekt mit Jeans oder Chinos.',
          link: 'https://aurelien-online.com/products/nut-yacht-loafers'
        }
      },
      {
        phase: 'bigday',
        title: 'Der Große Tag',
        subtitle: 'Authentisch Ihrer',
        description: 'Dies ist der Tag, an dem Praktisches auf Schönes trifft. Der Gasthof-Garten ist mit schlichten Wildblumen und Lichterketten dekoriert. Die Tische sind mit Sorgfalt gedeckt, aber ohne Überfluss. Ihr Anzug sitzt perfekt. Ihre Schuhe sind bequem — weil Sie 14 Stunden auf den Beinen sein werden und die Weitsicht hatten, gut zu wählen. Sie schauen Ihre Partnerin an und alles fühlt sich richtig an. Nicht weil es teuer war, sondern weil es bewusst war. Die besten Hochzeiten sind nicht die opulentesten — sie sind die ehrlichsten.',
        tips: [
          'Bauen Sie Pufferzeit ein: Dinge dauern immer länger als geplant, und Stress ruiniert Fotos',
          'Tragen Sie Ihre Schuhe eine Woche vorher zu Hause — Komfort am Tag ist nicht verhandelbar',
          'Bestimmen Sie eine Vertrauensperson als "Problemlöser", damit Sie sich auf das Genießen konzentrieren können',
          'Frühstücken Sie. Mittagessen Sie. Bräutigame, die Mahlzeiten auslassen, bereuen es am Abend',
          'Tanzen Sie. Auch wenn Sie glauben, Sie können es nicht. Es ist Ihre Hochzeit — niemand urteilt, alle feiern'
        ],
        shoeRecommendation: {
          product: 'Chocolate Yacht Loafers',
          reason: 'Die perfekte Wahl des praktischen Bräutigams: elegant genug für die Zeremonie, bequem genug für 14 Stunden, vielseitig genug zum Wiedertragen. Dunkelbraunes Wildleder funktioniert mit jeder klassischen Anzugfarbe.',
          link: 'https://aurelien-online.com/products/chocolate-suede-yacht-loafers-2'
        }
      }
    ],
    costBreakdown: [
      { category: 'venue', label: 'Location (Gasthof/Scheune/Garten)', lowEstimate: 500, highEstimate: 4000, note: 'Viele Gasthöfe inkludieren Location im Catering-Paket' },
      { category: 'catering', label: 'Catering & Getränke', lowEstimate: 50, highEstimate: 100, perPerson: true, note: 'Buffet oder Familienformat mit Hausweinen und Bier' },
      { category: 'photographer', label: 'Fotograf', lowEstimate: 1200, highEstimate: 3000, note: 'Investieren Sie hier — Fotos sind das, was Sie für immer behalten' },
      { category: 'florist', label: 'Blumen & Dekoration', lowEstimate: 400, highEstimate: 1500, note: 'Wildblumen, saisonale Arrangements, DIY-Optionen' },
      { category: 'music', label: 'Musik & Unterhaltung', lowEstimate: 500, highEstimate: 2000, note: 'DJ oder kuratierte Playlist mit hochwertigen Lautsprechern' },
      { category: 'attire', label: 'Bräutigam-Garderobe (Anzug + Schuhe)', lowEstimate: 400, highEstimate: 1500, note: 'Qualitätsanzug zum Wiedertragen plus vielseitige Loafer' },
      { category: 'rings', label: 'Eheringe', lowEstimate: 500, highEstimate: 2000 },
      { category: 'invitations', label: 'Papeterie & Einladungen', lowEstimate: 100, highEstimate: 400, note: 'Digitale Einladungen sind zunehmend akzeptiert und kostenlos' },
      { category: 'standesamt', label: 'Standesamtsgebühren', lowEstimate: 50, highEstimate: 200, note: 'Gebühren für die standesamtliche Trauung' },
      { category: 'cake', label: 'Hochzeitstorte', lowEstimate: 200, highEstimate: 600, note: 'Lokale Bäckerei oder talentierter Freund' },
      { category: 'transport', label: 'Transport', lowEstimate: 0, highEstimate: 500, note: 'Oft nicht nötig bei lokalen Locations' },
      { category: 'misc', label: 'Sonstiges & Puffer', lowEstimate: 500, highEstimate: 1500 }
    ],
    defaultGuestCount: 60,
    totalBudgetRange: { low: 8000, high: 25000 },
    styleGuide: {
      suit: {
        recommendation: 'Navyblauer oder anthrazitfarbener Zweiteiler',
        details: 'Die klassische Wahl: ein gut sitzender Navy- oder Anthrazit-Anzug, der am Hochzeitstag und noch Jahre danach funktioniert. Einreihig, Kerbkragen, in ganzjährigem Woll- oder Wollmischgewebe. Die Passform zählt mehr als das Label. Lassen Sie ihn anpassen: €80-150 für Änderungen verwandeln einen guten Anzug in einen großartigen. Suitsupply, Peek & Cloppenburg oder ein lokaler Schneider bieten alle exzellentes Preis-Leistungs-Verhältnis.'
      },
      shoes: {
        recommendation: 'Dunkelbraune oder cognacfarbene Wildleder-Loafer',
        details: 'Dies ist die cleverste Schuh-Investition, die der Klassische Bräutigam machen kann. Dunkelbraune oder cognacfarbene Wildleder-Loafer funktionieren mit Navy-, Anthrazit- und grauen Anzügen. Sie sind bequem für einen ganzen Tag auf den Beinen. Und — entscheidend — Sie werden sie zu jedem Event, Dinner und jeder Feier nach der Hochzeit tragen. Das ist kein Eintages-Kauf, es ist ein Garderoben-Upgrade.',
        products: ['DARK_BROWN', 'COGNAC', 'LIGHT_BROWN']
      },
      accessories: {
        recommendation: 'Schlichte Krawatte oder keine Krawatte, Qualitätsgürtel, gepflegte Uhr',
        details: 'Weniger ist mehr. Eine schlichte Seidenkrawatte in Navy oder Burgund, ein hochwertiger Ledergürtel, der zu Ihren Schuhen passt, und eine gepflegte Uhr. Verzichten Sie auf das Einstecktuch, wenn es sich erzwungen anfühlt. Die Stärke des Klassischen Bräutigams ist Authentizität, nicht Kostümierung.'
      }
    },
    venues: [
      {
        name: 'Landgasthof mit Garten',
        location: 'Deutschlandweit',
        description: 'Die quintessentielle deutsche Hochzeitslocation. Ein traditioneller Gasthof mit Gartenterrasse bietet Charme, hauseigenes Catering und eine warme Atmosphäre. Viele inkludieren Dekorations-Basics und haben Erfahrung mit Hochzeiten. Die beste Preis-Leistungs-Option.',
        priceRange: '€500–€2.000'
      },
      {
        name: 'Scheune / Barn Venue',
        location: 'Brandenburg, Bayern, Niedersachsen',
        description: 'Restaurierte Scheunen sind Deutschlands angesagteste Hochzeitslocations geworden. Rustikale Balken, Lichterketten und lange Holztische schaffen eine Atmosphäre, die kein Hotel-Ballsaal erreichen kann. Oft als leere Leinwand zum Selbstdekorieren verfügbar.',
        priceRange: '€1.000–€4.000'
      },
      {
        name: 'Gutshof / Landgut',
        location: 'Deutschlandweit',
        description: 'Ein Schritt über dem Gasthof, aber immer noch authentisch. Gutshöfe bieten schöne Außenanlagen, historische Gebäude und oft Übernachtungsmöglichkeiten für die Hochzeitsgesellschaft. Der Sweet Spot zwischen Charme und Luxus.',
        priceRange: '€2.000–€6.000'
      },
      {
        name: 'Bürgerhaus / Gemeindehaus',
        location: 'Deutschlandweit',
        description: 'Der Budget-Champion. Viele deutsche Gemeinden haben schöne Bürgerhäuser, die günstig gemietet werden können. Bringen Sie Ihren eigenen Caterer und Dekoration mit. Was Sie bei der Location sparen, investieren Sie in Essen und Fotografie.',
        priceRange: '€200–€800'
      }
    ],
    practicalTips: [
      {
        title: 'Wo investieren und wo sparen',
        content: 'Investieren Sie in: Fotograf (die Fotos behalten Sie für immer), Catering (Gäste erinnern sich an das Essen) und Ihre Schuhe (Sie werden sie wieder tragen). Sparen Sie bei: Einladungen (digital ist okay), Dekoration (DIY mit Freunden), Transport (wählen Sie eine lokale Location) und Gastgeschenke (niemand erinnert sich an Hochzeitsgastgeschenke).'
      },
      {
        title: 'Die Standesamt-Strategie',
        content: 'In Deutschland ist die standesamtliche Trauung die rechtliche Voraussetzung. Sie können dies mit Trauzeugen in Ruhe machen und dann Ihre Feier separat haben. Manche Paare machen das Standesamt freitags und die Feier samstags. Andere kombinieren alles an einem Tag. Wählen Sie, was für Ihr Budget und Ihren Zeitplan funktioniert.'
      },
      {
        title: 'DIY, das wirklich funktioniert',
        content: 'Manches DIY spart echtes Geld: Tischdekorationen mit Wildblumen und Kerzen, eine Playlist statt DJ, selbstgemachte Willkommensschilder und ein Dessertbuffet, zu dem Freunde beitragen. Manches DIY kostet mehr Stress als es spart: versuchen Sie nicht, selbst zu catern, zu fotografieren oder irgendetwas zu machen, das zeitkritische Logistik beinhaltet.'
      },
      {
        title: 'Saisonale Ersparnisse',
        content: 'Eine Januar- oder März-Hochzeit kann 30-50% bei Location- und Dienstleisterkosten sparen im Vergleich zum Hochsommer. Spätherbst-Hochzeiten bieten schöne Farben und Nebensaison-Preise. Wenn Sie Winter wählen, umarmen Sie es: Kerzenlicht, Glühwein und herzhaftes Essen schaffen eine Atmosphäre, die kein Sommergarten erreichen kann.'
      },
      {
        title: 'Die Schuh-Gleichung',
        content: 'Viele Bräutigame behandeln Schuhe als Nebensache und geben €40 für unbequeme Anzugschuhe aus, die sie nie wieder tragen. Ein hochwertiges Paar Wildleder-Loafer für €200-300 ist auf lange Sicht tatsächlich günstiger: Sie sind bequem am Hochzeitstag, und Sie werden sie jahrelang zu jedem Event, Dinner und Smart-Casual-Anlass tragen. Die Kosten-pro-Tragen machen sie zur praktischen Wahl.'
      }
    ],
    cta: {
      headline: 'Die clevere Investition',
      subline: 'Der Klassische Bräutigam investiert dort, wo es zählt. Hochwertige Loafer sind bequem am Hochzeitstag und werden jahrelang zum Garderoben-Grundpfeiler. Das ist praktische Eleganz.',
      buttonText: 'Kollektion ansehen',
      buttonLink: '/collection'
    }
  }
};
