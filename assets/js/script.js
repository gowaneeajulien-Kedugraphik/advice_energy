/* =====================================================
   ADVICE ENERGY - LANDING PAGE
   Vanilla JS, aucune dependance externe
   ===================================================== */

/* =====================================================
   DICTIONNAIRE DE TRADUCTION (FR / EN)
   Structure basique de sélection de langue : couvre la
   navigation, les titres, CTA, cartes et FAQ. L'accroche
   principale du hero (H1) et le contenu détaillé du
   graphique interactif (jalons du marché de l'énergie)
   restent en français dans cette version.
   ===================================================== */
var TRANSLATIONS = {
  fr: {
    'nav.accueil': 'Accueil', 'nav.solutions': 'Nos solutions', 'nav.comparateur': 'Comparateur',
    'nav.marche': "Marché de l'énergie", 'nav.apropos': 'À propos', 'nav.contact': 'Contact',
    'header.cta': 'Obtenir un devis gratuit',
    'hero.eyebrow': 'Courtier en énergie B2B, depuis 2014',
    'hero.lede': 'Votre courtier en énergie dédié aux entreprises.',
    'hero.ctaPrimary': 'Comparer mes offres', 'hero.ctaSecondary': 'Être rappelé gratuitement',
    'trust.since': 'Depuis 2014', 'trust.audit': 'Audit gratuit', 'trust.noCommitment': 'Sans engagement',
    'trust.allSuppliers': 'Tous fournisseurs', 'trust.personalized': 'Accompagnement personnalisé',
    'impact.eyebrow': "Notre rôle en un coup d'œil", 'impact.title': 'Pourquoi passer par Advice Energy ?',
    'impact.blockClient.title': 'Votre entreprise', 'impact.blockClient.text': '1 seul interlocuteur & 0 démarche',
    'impact.blockCenter.badge': 'Neutre & gratuit',
    'impact.blockCenter.li1': '100% neutre & gratuit', 'impact.blockCenter.li2': 'Met en concurrence + négocie',
    'impact.suppliers.title': 'Fournisseurs', 'impact.suppliers.text': 'Accès direct aux meilleures offres du marché',
    'impact.badge1.title': '0 minute perdue', 'impact.badge1.text': "On s'occupe de tout",
    'impact.badge2.title': "Jusqu'à -30%", 'impact.badge2.text': 'Sur votre facture',
    'impact.badge3.title': '0 interruption', 'impact.badge3.text': 'De service & sans engagement',
    'impact.toggle.show': 'Voir le comparatif avant / après', 'impact.toggle.hide': 'Masquer le comparatif avant / après',
    'impact.compare.beforeLabel': 'Sans Advice Energy', 'impact.compare.afterLabel': 'Avec Advice Energy',
    'impact.compare.before1': 'Plusieurs interlocuteurs à gérer', 'impact.compare.before2': 'Comparaison manuelle et chronophage',
    'impact.compare.before3': 'Tarifs souvent non négociés', 'impact.compare.before4': 'Démarches administratives à votre charge',
    'impact.compare.after1': 'Un seul conseiller dédié', 'impact.compare.after2': 'Comparaison neutre de tous les fournisseurs',
    'impact.compare.after3': 'Négociation des meilleures conditions', 'impact.compare.after4': 'Gestion administrative prise en charge',
    'suppliers.eyebrow': 'Comparaison multi-fournisseurs', 'suppliers.title': 'Les fournisseurs que nous comparons pour vous',
    'suppliers.note': 'Les marques citées appartiennent à leurs propriétaires respectifs et sont mentionnées à titre informatif.',
    'why.title': 'Pourquoi comparer votre contrat ?',
    'why.card1.title': 'Économisez sur vos factures', 'why.card1.text': "Identifiez l'offre la plus compétitive du marché et réduisez durablement votre budget énergie.",
    'why.card2.title': 'Gagnez du temps', 'why.card2.text': 'Un seul échange suffit : nous analysons le marché et préparons les propositions à votre place.',
    'why.card3.title': 'Comparez tous les fournisseurs', 'why.card3.text': "Une analyse neutre et indépendante des principaux fournisseurs d'électricité et de gaz du marché.",
    'why.card4.title': 'Un conseiller dédié', 'why.card4.text': "Un interlocuteur unique vous accompagne de l'audit jusqu'à la signature du contrat.",
    'why.cta': 'Je compare mes offres',
    'solutions.eyebrow': 'Nos solutions', 'solutions.title': 'Une offre pensée pour chaque besoin',
    'solutions.elec.title': 'Électricité', 'solutions.elec.text': "Comparaison des offres de fourniture d'électricité adaptées à votre profil de consommation et à votre secteur d'activité.",
    'solutions.gaz.title': 'Gaz', 'solutions.gaz.text': "Des contrats de gaz naturel négociés au meilleur prix, avec un suivi transparent de l'évolution du marché.",
    'solutions.discover': 'Découvrir',
    'solutions.opt.title': 'Optimisation énergétique', 'solutions.opt.text': 'Audit de vos usages et recommandations concrètes pour réduire votre consommation et votre empreinte carbone.',
    'solutions.opt.cta': "J'en profite",
    'timeline.title': 'Comment ça fonctionne ?', 'timeline.lede': "Un parcours simple, en quatre étapes, du premier échange jusqu'à la signature de votre contrat.",
    'timeline.step1.title': 'Analyse', 'timeline.step1.text': 'Nous étudions vos factures et votre profil de consommation.',
    'timeline.step2.title': 'Comparaison', 'timeline.step2.text': 'Nous consultons les principaux fournisseurs du marché pour vous.',
    'timeline.step3.title': 'Négociation', 'timeline.step3.text': 'Nous négocions les meilleures conditions tarifaires et contractuelles.',
    'timeline.step4.title': 'Signature', 'timeline.step4.text': "Vous validez l'offre retenue, nous gérons les démarches administratives.",
    'cta.talkExpert': 'Parler à un expert',
    'apropos.eyebrow': 'À propos', 'apropos.title': 'Pourquoi Advice Energy ?',
    'apropos.item1.title': 'Depuis 2014', 'apropos.item1.text': "Des centaines d'entreprises accompagnées dans toute la France.",
    'apropos.item2.title': 'Comparaison neutre', 'apropos.item2.text': "Une analyse indépendante des principaux fournisseurs d'énergie.",
    'apropos.item3.title': 'Accompagnement complet', 'apropos.item3.text': 'Gestion administrative prise en charge du début à la fin.',
    'apropos.item4.title': 'Un seul interlocuteur', 'apropos.item4.text': 'Un conseiller dédié vous suit sur toute la durée du contrat.',
    'common.foundedLabel': 'Année de création',
    'stats.label2': 'Entreprises accompagnées', 'stats.label3': 'Analysés chaque année', 'stats.label4': "D'économies moyennes",
    'testimonials.eyebrow': 'Témoignages', 'testimonials.title': 'Ils nous font confiance',
    'testimonials.quote1': "Un accompagnement sérieux du premier échange jusqu'à la signature. Nous avons gagné du temps et réduit notre facture d'électricité sans effort de notre côté.",
    'testimonials.role1': 'Directrice administrative, Atelier Lumen',
    'testimonials.quote2': 'Le conseiller dédié a très bien compris nos contraintes de production. La comparaison était claire et la négociation nous a fait gagner un budget conséquent.',
    'testimonials.role2': 'Gérant, Menuiserie Roussel & Fils',
    'testimonials.quote3': "Process simple et transparent. Advice Energy a géré toute la partie administrative, on a juste eu à valider l'offre retenue.",
    'testimonials.role3': 'Responsable achats, Groupe Norea',
    'news.eyebrow': "Marché de l'énergie", 'news.title': "Comprendre l'évolution des prix",
    'news.lede': "De l'ouverture du marché en 2007 à la crise énergétique de 2022 : explorez deux décennies de variations de prix et leurs causes.",
    'chart.global': 'Global / Mix', 'chart.elec': 'Électricité', 'chart.gaz': 'Gaz',
    'chart.statCurrent': 'Prix actuel (2026)', 'chart.statPeak': 'Pic historique', 'chart.statVariation': 'Variation depuis 2007', 'chart.statMilestones': 'Jalons majeurs',
    'chart.legendStable': 'Stable', 'chart.legendRising': 'Tension à la hausse', 'chart.legendCrisis': 'Crise / pic historique',
    'chart.legendHint': 'Cliquez sur un point marquant',
    'chart.colGeo': 'Facteurs géopolitiques', 'chart.colReg': 'Facteurs réglementaires et taxes', 'chart.colEco': 'Facteurs économiques (offre / demande)',
    'chart.disclaimer': 'Prix de gros moyens annuels, en €/MWh, hors taxes et hors acheminement (électricité : marché spot EPEX France ; gaz : PEG/TTF). Sources : RTE, EPEX Spot, SDES, Ministère de la Transition écologique, Opéra Énergie. Données 2016-2024 officielles ; 2007-2015 estimées à partir des fourchettes publiées ; 2025-2026 provisoires (année en cours).',
    'news.latestTitle': 'Les dernières actualités',
    'news.card1.tag': 'Prix', 'news.card1.title': "Hausse des prix de l'électricité : ce qu'il faut savoir",
    'news.card1.text': "Les tarifs évoluent régulièrement sous l'effet du marché de gros. Comment anticiper ces variations pour votre entreprise.",
    'news.card2.tag': 'Fiscalité', 'news.card2.title': "Taxes et contributions sur l'énergie : le point complet",
    'news.card2.text': "TICFE, CTA, accise sur le gaz : décryptage des taxes qui composent votre facture d'énergie professionnelle.",
    'news.card3.tag': 'Réglementation', 'news.card3.title': "ARENH : quel impact sur vos contrats d'électricité ?",
    'news.card3.text': "Le dispositif d'accès régulé à l'électricité nucléaire historique influence directement les prix proposés aux entreprises.",
    'news.card4.tag': 'International', 'news.card4.title': "Marché européen de l'énergie : les tendances à suivre",
    'news.card4.text': "Interconnexions, mix énergétique et transition : comment le marché européen influence les prix en France.",
    'solar.eyebrow': 'Énergie renouvelable', 'solar.title': 'La transition énergétique, un choix rentable pour votre entreprise',
    'solar.lede': "Verdir votre approvisionnement n'est plus un compromis entre image et budget. Entre électricité certifiée, autoconsommation solaire et maîtrise des coûts sur la durée, la transition énergétique est aujourd'hui un vrai levier de performance pour votre entreprise.",
    'solar.card1.title': 'Électricité verte certifiée', 'solar.card1.text': "Grâce aux Garanties d'Origine, chaque MWh consommé est tracé et certifié comme issu d'une production renouvelable française, via un registre national indépendant.",
    'solar.card2.title': 'Autoconsommation solaire', 'solar.card2.text': "Installez des panneaux sur votre toiture ou vos parkings et consommez directement l'électricité que vous produisez, pour réduire votre dépendance au réseau.",
    'solar.card3.title': 'Image & engagement RSE', 'solar.card3.text': 'Valorisez votre démarche environnementale auprès de vos clients, salariés et partenaires grâce à des attestations et supports de communication dédiés.',
    'solar.card4.title': 'Maîtrise des coûts à long terme', 'solar.card4.text': 'Sécurisez une partie de votre approvisionnement face à la volatilité des marchés et donnez de la visibilité à votre budget énergie sur plusieurs années.',
    'sub.eyebrow': 'Abonnement Advice Energy', 'sub.title': "Un conseiller dédié à vos côtés, toute l'année",
    'sub.lede': "Votre comparaison initiale reste gratuite. Avec l'abonnement Advice Energy, vous gardez ensuite un expert qui surveille, ajuste et renégocie votre contrat pour vous, en continu.",
    'sub.b1.title': 'Conseiller dédié', 'sub.b1.text': 'Un interlocuteur unique, joignable directement, qui connaît votre dossier par cœur.',
    'sub.b2.title': 'Alertes de renouvellement', 'sub.b2.text': 'Vous êtes prévenu avant chaque échéance pour ne jamais reconduire au mauvais moment.',
    'sub.b3.title': 'Suivi de consommation', 'sub.b3.text': "Un point régulier sur votre facture, avec des pistes d'optimisation concrètes.",
    'sub.b4.title': 'Renégociation prioritaire', 'sub.b4.text': 'Dès qu\'une meilleure offre apparaît sur le marché, votre conseiller vous la propose en premier.',
    'sub.b5.title': 'Support illimité', 'sub.b5.text': 'Par téléphone, e-mail ou WhatsApp, autant de fois que nécessaire.',
    'sub.badge': 'Sans engagement', 'sub.perMonth': '/ mois',
    'sub.note': 'Résiliable à tout moment, sans frais ni justification.',
    'sub.cta': 'Je me fais accompagner pour 10,99€/mois',
    'faq.eyebrow': 'Questions fréquentes', 'faq.title': 'Tout ce que vous devez savoir',
    'faq.q1.q': 'Comment résilier mon contrat ?',
    'faq.q1.a': "Vous n'avez aucune démarche à effectuer : votre conseiller Advice Energy se charge de la résiliation de votre ancien contrat auprès de votre fournisseur actuel et coordonne la bascule vers votre nouveau contrat, sans interruption de service.",
    'faq.q2.q': 'Le service Advice Energy est-il vraiment gratuit ?',
    'faq.q2.a': "Oui. L'audit et la comparaison des offres sont entièrement gratuits et sans engagement. Nous sommes rémunérés par les fournisseurs une fois le contrat signé, sans surcoût pour vous.",
    'faq.q3.q': 'Combien de temps dure le processus de comparaison ?',
    'faq.q3.a': "Selon la complexité de votre profil de consommation, l'analyse et la comparaison prennent généralement entre 48 heures et une semaine.",
    'faq.q4.q': 'Suis-je engagé si je fais réaliser un audit ?',
    'faq.q4.a': "Non, l'audit ne vous engage à rien. Vous restez libre d'accepter ou de refuser les propositions que nous vous transmettons.",
    'faq.q5.q': 'Advice Energy travaille-t-il avec tous les fournisseurs ?',
    'faq.q5.a': 'Nous comparons les offres des principaux fournisseurs d\'électricité et de gaz du marché français et européen, de manière neutre et indépendante.',
    'faq.q6.q': "Qui s'occupe des démarches administratives ?",
    'faq.q6.a': "Votre conseiller dédié prend en charge l'ensemble des démarches, de la résiliation de l'ancien contrat jusqu'à l'activation du nouveau.",
    'ctabanner.title': "Besoin d'un expert ?", 'ctabanner.text': 'Notre équipe vous répond sous 24h ouvrées pour faire le point sur vos contrats d\'énergie.',
    'ctabanner.callback': 'Être rappelé',
    'contact.eyebrow': 'Contact', 'contact.title': "Parlons de votre contrat d'énergie",
    'contact.lede': "Renseignez vos coordonnées, un conseiller Advice Energy revient vers vous sous 24h ouvrées.",
    'contact.labelName': 'Nom et prénom', 'contact.labelCompany': 'Entreprise', 'contact.labelEmail': 'E-mail',
    'contact.labelPhone': 'Téléphone', 'contact.labelMessage': 'Votre message',
    'contact.messagePlaceholder': 'Décrivez votre besoin : type de contrat, échéance, nombre de sites...',
    'contact.note': "En envoyant ce formulaire, votre client mail s'ouvrira avec votre demande pré-remplie, prête à envoyer.",
    'contact.errorRequired': 'Merci de renseigner au moins votre nom et votre e-mail.',
    'contact.submit': 'Envoyer ma demande',
    'contact.mailSubjectPrefix': 'Demande de contact : ', 'contact.mailName': 'Nom', 'contact.mailCompany': 'Entreprise',
    'contact.mailEmail': 'E-mail', 'contact.mailPhone': 'Téléphone', 'contact.mailMessageLabel': 'Message :',
    'footer.tagline': 'Courtier en énergie pour professionnels depuis 2014. Comparaison neutre, accompagnement complet.',
    'footer.navHeading': 'Navigation', 'footer.legalHeading': 'Légal',
    'footer.legal1': 'Mentions légales', 'footer.legal2': 'CGU', 'footer.legal3': 'Politique de confidentialité',
    'footer.contactFormLink': 'Formulaire de contact', 'footer.rights': 'Tous droits réservés.',
    'footer.manageCookies': 'Gérer les cookies'
  },
  en: {
    'nav.accueil': 'Home', 'nav.solutions': 'Our solutions', 'nav.comparateur': 'How it works',
    'nav.marche': 'Energy market', 'nav.apropos': 'About', 'nav.contact': 'Contact',
    'header.cta': 'Get a free quote',
    'hero.eyebrow': 'B2B energy broker, since 2014',
    'hero.lede': 'Your dedicated energy broker for businesses.',
    'hero.ctaPrimary': 'Compare my offers', 'hero.ctaSecondary': 'Request a free callback',
    'trust.since': 'Since 2014', 'trust.audit': 'Free audit', 'trust.noCommitment': 'No commitment',
    'trust.allSuppliers': 'All suppliers', 'trust.personalized': 'Personalized support',
    'impact.eyebrow': 'Our role at a glance', 'impact.title': 'Why go through Advice Energy?',
    'impact.blockClient.title': 'Your business', 'impact.blockClient.text': '1 single contact & 0 hassle',
    'impact.blockCenter.badge': 'Neutral & free',
    'impact.blockCenter.li1': '100% neutral & free', 'impact.blockCenter.li2': 'Puts suppliers in competition + negotiates',
    'impact.suppliers.title': 'Suppliers', 'impact.suppliers.text': 'Direct access to the best offers on the market',
    'impact.badge1.title': '0 minutes wasted', 'impact.badge1.text': 'We handle everything',
    'impact.badge2.title': 'Up to -30%', 'impact.badge2.text': 'On your bill',
    'impact.badge3.title': '0 downtime', 'impact.badge3.text': 'No service interruption & no commitment',
    'impact.toggle.show': 'See the before / after comparison', 'impact.toggle.hide': 'Hide the before / after comparison',
    'impact.compare.beforeLabel': 'Without Advice Energy', 'impact.compare.afterLabel': 'With Advice Energy',
    'impact.compare.before1': 'Multiple contacts to manage', 'impact.compare.before2': 'Manual, time-consuming comparison',
    'impact.compare.before3': 'Rates often left unnegotiated', 'impact.compare.before4': 'Administrative tasks on you',
    'impact.compare.after1': 'One dedicated advisor', 'impact.compare.after2': 'Neutral comparison of all suppliers',
    'impact.compare.after3': 'Negotiation of the best terms', 'impact.compare.after4': 'Administrative work handled for you',
    'suppliers.eyebrow': 'Multi-supplier comparison', 'suppliers.title': 'The suppliers we compare for you',
    'suppliers.note': 'The brands mentioned belong to their respective owners and are cited for informational purposes only.',
    'why.title': 'Why compare your contract?',
    'why.card1.title': 'Save on your bills', 'why.card1.text': "Identify the market's most competitive offer and cut your energy budget for good.",
    'why.card2.title': 'Save time', 'why.card2.text': 'One conversation is all it takes: we analyze the market and prepare offers on your behalf.',
    'why.card3.title': 'Compare every supplier', 'why.card3.text': "A neutral, independent analysis of the market's leading electricity and gas suppliers.",
    'why.card4.title': 'A dedicated advisor', 'why.card4.text': 'A single point of contact supports you from audit to contract signature.',
    'why.cta': 'Compare my offers',
    'solutions.eyebrow': 'Our solutions', 'solutions.title': 'Solutions built around your needs',
    'solutions.elec.title': 'Electricity', 'solutions.elec.text': 'Comparison of electricity supply offers tailored to your consumption profile and industry.',
    'solutions.gaz.title': 'Gas', 'solutions.gaz.text': 'Natural gas contracts negotiated at the best price, with transparent market monitoring.',
    'solutions.discover': 'Discover',
    'solutions.opt.title': 'Energy optimization', 'solutions.opt.text': "An audit of your usage and concrete recommendations to cut consumption and carbon footprint.",
    'solutions.opt.cta': 'Get started',
    'timeline.title': 'How does it work?', 'timeline.lede': 'A simple four-step journey, from our first conversation to your contract signature.',
    'timeline.step1.title': 'Analysis', 'timeline.step1.text': 'We review your bills and consumption profile.',
    'timeline.step2.title': 'Comparison', 'timeline.step2.text': "We consult the market's leading suppliers on your behalf.",
    'timeline.step3.title': 'Negotiation', 'timeline.step3.text': 'We negotiate the best pricing and contract terms.',
    'timeline.step4.title': 'Signature', 'timeline.step4.text': 'You approve the chosen offer, we handle the paperwork.',
    'cta.talkExpert': 'Talk to an expert',
    'apropos.eyebrow': 'About', 'apropos.title': 'Why Advice Energy?',
    'apropos.item1.title': 'Since 2014', 'apropos.item1.text': 'Hundreds of businesses supported across France.',
    'apropos.item2.title': 'Neutral comparison', 'apropos.item2.text': "An independent analysis of the leading energy suppliers.",
    'apropos.item3.title': 'Full support', 'apropos.item3.text': 'Administrative management handled from start to finish.',
    'apropos.item4.title': 'A single point of contact', 'apropos.item4.text': 'A dedicated advisor follows you throughout the life of your contract.',
    'common.foundedLabel': 'Founded in',
    'stats.label2': 'Businesses supported', 'stats.label3': 'Analyzed every year', 'stats.label4': 'Average savings',
    'testimonials.eyebrow': 'Testimonials', 'testimonials.title': 'Trusted by our clients',
    'testimonials.quote1': 'A serious, professional support from our first conversation to the signature. We saved time and cut our electricity bill without any effort on our part.',
    'testimonials.role1': 'Administrative Director, Atelier Lumen',
    'testimonials.quote2': 'Our dedicated advisor really understood our production constraints. The comparison was clear and the negotiation saved us a significant amount.',
    'testimonials.role2': 'Manager, Menuiserie Roussel & Fils',
    'testimonials.quote3': 'Simple, transparent process. Advice Energy handled all the paperwork, we just had to approve the chosen offer.',
    'testimonials.role3': 'Purchasing Manager, Groupe Norea',
    'news.eyebrow': 'Energy market', 'news.title': 'Understanding price trends',
    'news.lede': "From the market's opening in 2007 to the 2022 energy crisis: explore two decades of price swings and their causes.",
    'chart.global': 'Global / Mix', 'chart.elec': 'Electricity', 'chart.gaz': 'Gas',
    'chart.statCurrent': 'Current price (2026)', 'chart.statPeak': 'Historic peak', 'chart.statVariation': 'Change since 2007', 'chart.statMilestones': 'Key milestones',
    'chart.legendStable': 'Stable', 'chart.legendRising': 'Rising tension', 'chart.legendCrisis': 'Crisis / historic peak',
    'chart.legendHint': 'Click a highlighted point',
    'chart.colGeo': 'Geopolitical factors', 'chart.colReg': 'Regulatory & tax factors', 'chart.colEco': 'Economic factors (supply / demand)',
    'chart.disclaimer': 'Average annual wholesale prices, in €/MWh, excluding taxes and grid fees (electricity: EPEX France spot market; gas: PEG/TTF). Sources: RTE, EPEX Spot, SDES, French Ministry for Ecological Transition, Opéra Énergie. 2016-2024 figures are official; 2007-2015 are estimated from published ranges; 2025-2026 are provisional (year in progress).',
    'news.latestTitle': 'Latest news',
    'news.card1.tag': 'Prices', 'news.card1.title': 'Rising electricity prices: what you need to know',
    'news.card1.text': 'Rates change regularly with the wholesale market. How to anticipate these swings for your business.',
    'news.card2.tag': 'Taxation', 'news.card2.title': 'Energy taxes and contributions: the full picture',
    'news.card2.text': "TICFE, CTA, gas excise duty: a breakdown of the taxes that make up your business energy bill.",
    'news.card3.tag': 'Regulation', 'news.card3.title': 'ARENH: what impact on your electricity contracts?',
    'news.card3.text': "France's regulated access to historic nuclear power directly affects the prices offered to businesses.",
    'news.card4.tag': 'International', 'news.card4.title': 'European energy market: trends to watch',
    'news.card4.text': 'Interconnections, energy mix and transition: how the European market shapes prices in France.',
    'solar.eyebrow': 'Renewable energy', 'solar.title': 'The energy transition: a profitable choice for your business',
    'solar.lede': "Greening your energy supply is no longer a trade-off between image and budget. Between certified electricity, solar self-consumption and long-term cost control, the energy transition is now a genuine performance lever for your business.",
    'solar.card1.title': 'Certified green electricity', 'solar.card1.text': "Thanks to Guarantees of Origin, every MWh consumed is tracked and certified as coming from French renewable production, via an independent national registry.",
    'solar.card2.title': 'Solar self-consumption', 'solar.card2.text': 'Install panels on your roof or car parks and consume the electricity you produce directly, reducing your reliance on the grid.',
    'solar.card3.title': 'Brand image & CSR commitment', 'solar.card3.text': 'Showcase your environmental commitment to clients, employees and partners with dedicated certificates and communication materials.',
    'solar.card4.title': 'Long-term cost control', 'solar.card4.text': "Hedge part of your energy supply against market volatility and give your energy budget visibility over several years.",
    'sub.eyebrow': 'Advice Energy Subscription', 'sub.title': 'A dedicated advisor by your side, all year round',
    'sub.lede': 'Your initial comparison stays free. With the Advice Energy subscription, you then keep an expert who monitors, adjusts and renegotiates your contract for you, on an ongoing basis.',
    'sub.b1.title': 'Dedicated advisor', 'sub.b1.text': 'A single point of contact, reachable directly, who knows your file inside out.',
    'sub.b2.title': 'Renewal alerts', 'sub.b2.text': "You're notified ahead of every deadline so you never renew at the wrong time.",
    'sub.b3.title': 'Consumption tracking', 'sub.b3.text': 'A regular check-in on your bill, with concrete optimization opportunities.',
    'sub.b4.title': 'Priority renegotiation', 'sub.b4.text': 'As soon as a better offer appears on the market, your advisor brings it to you first.',
    'sub.b5.title': 'Unlimited support', 'sub.b5.text': 'By phone, email or WhatsApp, as often as needed.',
    'sub.badge': 'No commitment', 'sub.perMonth': '/ month',
    'sub.note': 'Cancel anytime, no fees, no justification needed.',
    'sub.cta': 'Get support for €10.99/month',
    'faq.eyebrow': 'Frequently asked questions', 'faq.title': 'Everything you need to know',
    'faq.q1.q': 'How do I cancel my contract?',
    'faq.q1.a': "There's nothing for you to do: your Advice Energy advisor handles the cancellation of your old contract with your current supplier and coordinates the switch to your new contract, with no service interruption.",
    'faq.q2.q': 'Is the Advice Energy service really free?',
    'faq.q2.a': "Yes. The audit and offer comparison are entirely free, with no commitment. We're paid by suppliers once the contract is signed, at no extra cost to you.",
    'faq.q3.q': 'How long does the comparison process take?',
    'faq.q3.a': 'Depending on the complexity of your consumption profile, analysis and comparison usually take between 48 hours and a week.',
    'faq.q4.q': 'Am I committed to anything if I request an audit?',
    'faq.q4.a': "No, the audit doesn't commit you to anything. You remain free to accept or decline the proposals we send you.",
    'faq.q5.q': 'Does Advice Energy work with all suppliers?',
    'faq.q5.a': "We compare offers from the leading electricity and gas suppliers on the French and European markets, neutrally and independently.",
    'faq.q6.q': 'Who handles the administrative process?',
    'faq.q6.a': 'Your dedicated advisor handles the entire process, from cancelling your old contract to activating your new one.',
    'ctabanner.title': 'Need an expert?', 'ctabanner.text': 'Our team responds within 24 business hours to review your energy contracts.',
    'ctabanner.callback': 'Request a callback',
    'contact.eyebrow': 'Contact', 'contact.title': "Let's talk about your energy contract",
    'contact.lede': 'Share your details and an Advice Energy advisor will get back to you within 24 business hours.',
    'contact.labelName': 'Full name', 'contact.labelCompany': 'Company', 'contact.labelEmail': 'Email',
    'contact.labelPhone': 'Phone', 'contact.labelMessage': 'Your message',
    'contact.messagePlaceholder': 'Describe your needs: contract type, deadline, number of sites...',
    'contact.note': "By sending this form, your mail client will open with your request pre-filled, ready to send.",
    'contact.errorRequired': 'Please fill in at least your name and email address.',
    'contact.submit': 'Send my request',
    'contact.mailSubjectPrefix': 'Contact request: ', 'contact.mailName': 'Name', 'contact.mailCompany': 'Company',
    'contact.mailEmail': 'Email', 'contact.mailPhone': 'Phone', 'contact.mailMessageLabel': 'Message:',
    'footer.tagline': 'B2B energy broker since 2014. Neutral comparison, full support.',
    'footer.navHeading': 'Navigation', 'footer.legalHeading': 'Legal',
    'footer.legal1': 'Legal notice', 'footer.legal2': 'Terms of use', 'footer.legal3': 'Privacy policy',
    'footer.contactFormLink': 'Contact form', 'footer.rights': 'All rights reserved.',
    'footer.manageCookies': 'Manage cookies'
  }
};

/* =====================================================
   HERO - CONTENU SOURCE BILINGUE DU TITRE (H1)
   Fragments HTML minimalistes : <b> marque les mots à
   styliser en rouge/italique, <br> force les retours à
   la ligne. Reconstruits en spans .hw animés par JS.
   Un espace est toujours présent avant et après chaque
   <br> pour éviter que les mots se collent quand le
   retour à la ligne est masqué en CSS sur mobile.
   ===================================================== */
var HERO_HEADLINE_RAW = {
  fr: 'Advice Energy conseille les <br> professionnels à <b>comparer</b>, <br> <b>négocier</b> <br> et <b>optimiser</b> les contrats de <br> gaz <br> et d\'électricité depuis 2014.',
  en: 'Advice Energy helps businesses <br> <b>compare</b>, <b>negotiate</b> <br> and <b>optimize</b> their gas <br> and electricity contracts <br> since 2014.'
};

function renderHeroHeadline(lang) {
  var headline = document.getElementById('heroHeadline');
  var wordsWrap = document.getElementById('heroHeadlineWords');
  if (!headline || !wordsWrap) return;

  var rawHtml = HERO_HEADLINE_RAW[lang] || HERO_HEADLINE_RAW.fr;
  var temp = document.createElement('div');
  temp.innerHTML = rawHtml;

  headline.setAttribute('aria-label', temp.textContent.replace(/\s+/g, ' ').trim());

  wordsWrap.innerHTML = '';

  Array.prototype.forEach.call(temp.childNodes, function (node) {
    if (node.nodeType === 3) {
      var tokens = node.textContent.split(/(\s+)/);
      tokens.forEach(function (tok) {
        if (!tok.length) return;
        if (/^\s+$/.test(tok)) {
          wordsWrap.appendChild(document.createTextNode(tok));
        } else {
          var span = document.createElement('span');
          span.className = 'hw';
          span.textContent = tok;
          wordsWrap.appendChild(span);
        }
      });
    } else if (node.nodeName === 'BR') {
      var br = document.createElement('br');
      br.className = 'hero-headline__break';
      wordsWrap.appendChild(br);
    } else if (node.nodeName === 'B') {
      var accentSpan = document.createElement('span');
      accentSpan.className = 'hw hw--accent';
      accentSpan.textContent = node.textContent;
      wordsWrap.appendChild(accentSpan);
    } else {
      wordsWrap.appendChild(document.createTextNode(node.textContent));
    }
  });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  wordsWrap.classList.remove('is-animating');

  if (!prefersReducedMotion) {
    var words = wordsWrap.querySelectorAll('.hw');
    words.forEach(function (word, index) {
      word.style.animationDelay = (index * 75) + 'ms';
    });
    // Force reflow to restart the CSS animation on language change
    void wordsWrap.offsetWidth;
    wordsWrap.classList.add('is-animating');
  }
}

var currentLang = 'fr';

function applyTranslations(lang) {
  var dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  currentLang = TRANSLATIONS[lang] ? lang : 'fr';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  renderHeroHeadline(currentLang);

  if (typeof window.setEnergyChartLanguage === 'function') {
    window.setEnergyChartLanguage(currentLang);
  }

  document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === currentLang);
  });

  document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'fr');

  var impactToggleBtn = document.getElementById('impactToggle');
  var impactCompare = document.getElementById('impactCompare');
  var impactLabel = document.getElementById('impactToggleLabel');
  if (impactToggleBtn && impactCompare && impactLabel) {
    var isOpen = impactCompare.classList.contains('is-open');
    impactLabel.textContent = dict[isOpen ? 'impact.toggle.hide' : 'impact.toggle.show'];
  }

  var contactNote = document.getElementById('contactFormNote');
  if (contactNote && contactNote.getAttribute('data-state') !== 'error') {
    contactNote.textContent = dict['contact.note'];
  }

  try { window.localStorage.setItem('advice-energy-lang', currentLang); } catch (e) { /* stockage indisponible */ }
}

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================
     0) SÉLECTEUR DE LANGUE (FR / EN)
     ===================================================== */
  (function langSwitcher() {
    var buttons = document.querySelectorAll('.lang-switch__btn');
    if (!buttons.length) return;

    var savedLang = 'fr';
    try {
      var stored = window.localStorage.getItem('advice-energy-lang');
      if (stored === 'fr' || stored === 'en') savedLang = stored;
    } catch (e) { /* stockage indisponible */ }

    applyTranslations(savedLang);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) applyTranslations(lang);
      });
    });
  })();

  /* =====================================================
     1) HEADER STICKY - reduction au scroll
     ===================================================== */
  (function headerScroll() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    var SCROLL_THRESHOLD = 40;
    var ticking = false;

    function updateHeaderState() {
      header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeaderState();
  })();

  /* =====================================================
     2) MENU MOBILE (burger)
     ===================================================== */
  (function mobileMenu() {
    var header = document.getElementById('siteHeader');
    var burgerBtn = document.getElementById('burgerBtn');
    var mobileMenuEl = document.getElementById('mobileMenu');
    if (!header || !burgerBtn || !mobileMenuEl) return;

    function openMenu() {
      mobileMenuEl.classList.add('is-open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      burgerBtn.setAttribute('aria-label', 'Fermer le menu');
    }

    function closeMenu() {
      mobileMenuEl.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
    }

    function toggleMenu() {
      if (mobileMenuEl.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    burgerBtn.addEventListener('click', toggleMenu);

    mobileMenuEl.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
      if (!header.contains(event.target) && mobileMenuEl.classList.contains('is-open')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileMenuEl.classList.contains('is-open')) {
        closeMenu();
        burgerBtn.focus();
      }
    });

    var desktopQuery = window.matchMedia('(min-width: 1301px)');
    function handleViewportChange(e) {
      if (e.matches) closeMenu();
    }
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', handleViewportChange);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(handleViewportChange);
    }
  })();

  /* =====================================================
     3) NAVIGATION ACTIVE AU SCROLL
     ===================================================== */
  (function activeNav() {
    var navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;

    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href');
      if (id && id.charAt(0) === '#') {
        var target = document.querySelector(id);
        if (target) sections.push({ link: link, target: target });
      }
    });

    if (!sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sections.forEach(function (s) { s.link.classList.remove('is-active'); });
          var match = sections.find(function (s) { return s.target === entry.target; });
          if (match) match.link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s.target); });
  })();

  /* =====================================================
     4bis) SCHEMA IMPACT - TOGGLE AVANT / APRES
     ===================================================== */
  (function impactToggle() {
    var toggleBtn = document.getElementById('impactToggle');
    var compare = document.getElementById('impactCompare');
    if (!toggleBtn || !compare) return;

    toggleBtn.addEventListener('click', function () {
      var isOpen = compare.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      var label = document.getElementById('impactToggleLabel');
      var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
      if (label) {
        label.textContent = isOpen ? dict['impact.toggle.hide'] : dict['impact.toggle.show'];
      }
    });
  })();

  /* =====================================================
     4ter) FORMULAIRE DE CONTACT - ENVOI PAR MAIL
     ===================================================== */
  (function contactForm() {
    var form = document.getElementById('contactForm');
    var note = document.getElementById('contactFormNote');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();

      if (!name || !email) {
        if (note) {
          note.textContent = dict['contact.errorRequired'];
          note.setAttribute('data-state', 'error');
          note.style.color = '#dc2626';
        }
        return;
      }

      var subject = dict['contact.mailSubjectPrefix'] + name;
      var bodyLines = [
        dict['contact.mailName'] + ' : ' + name,
        dict['contact.mailCompany'] + ' : ' + (company || '-'),
        dict['contact.mailEmail'] + ' : ' + email,
        dict['contact.mailPhone'] + ' : ' + (phone || '-'),
        '',
        dict['contact.mailMessageLabel'],
        message || '-'
      ];

      var mailtoUrl = 'mailto:contacts@advice-assistance-energy.fr'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailtoUrl;
    });
  })();

  /* =====================================================
     4quater) BANDEAU CONSENTEMENT COOKIES
     ===================================================== */
  (function cookieConsent() {
    var STORAGE_KEY = 'advice-energy-cookie-consent';
    var banner = document.getElementById('cookieBanner');
    var simpleView = document.getElementById('cookieSimple');
    var prefsView = document.getElementById('cookiePrefs');
    var manageBtn = document.getElementById('cookieManageBtn');
    var backBtn = document.getElementById('cookieBackBtn');
    var refuseBtn = document.getElementById('cookieRefuseBtn');
    var acceptBtn = document.getElementById('cookieAcceptBtn');
    var savePrefsBtn = document.getElementById('cookieSavePrefsBtn');
    var analyticsToggle = document.getElementById('cookieAnalyticsToggle');
    var footerManageBtn = document.getElementById('footerManageCookiesBtn');
    if (!banner) return;

    function getConsent() {
      try {
        var raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    function saveConsent(analytics) {
      var consent = { essential: true, analytics: !!analytics, date: new Date().toISOString() };
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent)); } catch (e) { /* stockage indisponible */ }
      // Point d'accroche pour de futurs scripts de mesure d'audience :
      // n'activer un éventuel outil analytics qu'à cette condition.
      window.adviceEnergyConsent = consent;
      return consent;
    }

    function showBanner() {
      banner.hidden = false;
      window.requestAnimationFrame(function () {
        banner.classList.add('is-visible');
      });
    }

    function hideBanner() {
      banner.classList.remove('is-visible');
      window.setTimeout(function () { banner.hidden = true; }, 320);
    }

    function showPrefs() {
      simpleView.hidden = true;
      prefsView.hidden = false;
    }

    function showSimple() {
      prefsView.hidden = true;
      simpleView.hidden = false;
    }

    function setToggle(el, checked) {
      el.setAttribute('aria-checked', checked ? 'true' : 'false');
    }

    // Décision déjà connue : appliquer sans réafficher le bandeau.
    var existingConsent = getConsent();
    if (existingConsent) {
      window.adviceEnergyConsent = existingConsent;
    } else {
      window.setTimeout(showBanner, 600);
    }

    if (manageBtn) manageBtn.addEventListener('click', showPrefs);
    if (backBtn) backBtn.addEventListener('click', showSimple);

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        saveConsent(true);
        if (analyticsToggle) setToggle(analyticsToggle, true);
        hideBanner();
      });
    }

    if (refuseBtn) {
      refuseBtn.addEventListener('click', function () {
        saveConsent(false);
        if (analyticsToggle) setToggle(analyticsToggle, false);
        hideBanner();
      });
    }

    if (analyticsToggle) {
      analyticsToggle.addEventListener('click', function () {
        var isChecked = analyticsToggle.getAttribute('aria-checked') === 'true';
        setToggle(analyticsToggle, !isChecked);
      });
    }

    if (savePrefsBtn) {
      savePrefsBtn.addEventListener('click', function () {
        var analyticsOn = analyticsToggle && analyticsToggle.getAttribute('aria-checked') === 'true';
        saveConsent(analyticsOn);
        hideBanner();
      });
    }

    if (footerManageBtn) {
      footerManageBtn.addEventListener('click', function () {
        var consent = getConsent();
        if (analyticsToggle) setToggle(analyticsToggle, !!(consent && consent.analytics));
        showPrefs();
        showBanner();
      });
    }
  })();

  /* =====================================================
     5) FAQ - ACCORDEON
     ===================================================== */
  (function faqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector('.faq-item__question');
      var answer = item.querySelector('.faq-item__answer');
      if (!question || !answer) return;

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        // Un seul accordéon ouvert à la fois
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-item__answer').style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          question.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('is-open');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  })();

  /* =====================================================
     6) COMPTEURS ANIMÉS (chiffres clés)
     ===================================================== */
  (function statCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';

      if (prefersReducedMotion) {
        el.textContent = target.toLocaleString('fr-FR') + suffix;
        return;
      }

      var duration = 1600;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        var value = Math.round(eased * target);
        el.textContent = value.toLocaleString('fr-FR') + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      counters.forEach(function (counter) { observer.observe(counter); });
    } else {
      counters.forEach(animateCounter);
    }
  })();

  /* =====================================================
     7) ANNEE COURANTE - FOOTER
     ===================================================== */
  (function currentYear() {
    var el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  })();

});