import { Procedure, InterventionCategory, BeforeAfterItem, Testimonial, FAQItem } from '../types';

export const interventionCategoriesData: InterventionCategory[] = [
  {
    id: 'visage',
    categoryKey: 'face',
    title: 'Chirurgie du visage',
    image: '/images/interventions/chirurgie-du-visage.jpg?v=perla_brand_posters_v1',
    badgeNumber: '01',
    interventions: [
      'Lifting cervico-facial',
      'Deep Plane Face Lift',
      'Rhinoplastie',
      'Blépharoplastie',
      'Lifting du cou',
      'Autres chirurgies du visage'
    ],
    description: 'Rajeunissement harmonieux et correction structurelle du visage, des paupières et du cou sans altérer vos expressions naturelles.',
    popular: true
  },
  {
    id: 'seins',
    categoryKey: 'breast',
    title: 'Chirurgie des seins',
    image: '/images/interventions/chirurgie-des-seins.jpg?v=perla_brand_posters_v1',
    badgeNumber: '02',
    interventions: [
      'Augmentation mammaire',
      'Réduction mammaire',
      'Lifting des seins',
      'Changement de prothèses mammaires',
      'Gynécomastie'
    ],
    description: 'Harmonisation du galbe, correction des asymétries et restauration de la plénitude du décolleté avec prothèses ou lipofilling.',
    popular: true
  },
  {
    id: 'silhouette',
    categoryKey: 'silhouette',
    title: 'Chirurgie de la silhouette',
    image: '/images/interventions/chirurgie-de-la-silhouette.jpg?v=perla_brand_posters_v1',
    badgeNumber: '03',
    interventions: [
      'Liposuccion',
      'J-Plasma ou Renuvion',
      'Liposuccion Vaser',
      'Abdominoplastie',
      'Lifting des bras',
      'Lifting des cuisses',
      'Autres chirurgies de la silhouette'
    ],
    description: 'Sculpture haute définition et redrapage cutané du tronc et des membres pour révéler un profil tonique et équilibré.',
    popular: true
  },
  {
    id: 'obesite',
    categoryKey: 'obesity',
    title: 'Chirurgie de l\'obésité',
    image: '/images/interventions/chirurgie-de-l-obesite.jpg?v=perla_brand_posters_v1',
    badgeNumber: '04',
    interventions: [
      'Sadi-S',
      'Sleeve gastrique',
      'Bypass gastrique',
      'Plicature gastrique',
      'Calcul de l\'IMC'
    ],
    description: 'Prise en charge chirurgicale métabolique et bariatrique sécurisée sous cœlioscopie avec accompagnement personnalisé.'
  },
  {
    id: 'dentaire',
    categoryKey: 'dental',
    title: 'Soins dentaires',
    image: '/images/interventions/soins-dentaires.jpg?v=perla_brand_posters_v1',
    badgeNumber: '05',
    interventions: [
      'Facettes dentaires',
      'Couronnes dentaires',
      'Blanchiment des dents',
      'Implants dentaires'
    ],
    description: 'Dentisterie esthétique de pointe (Hollywood Smile, facettes E-Max, zircone et implants en titane biocompatible).'
  },
  {
    id: 'intime',
    categoryKey: 'intimate',
    title: 'Chirurgie intime',
    image: '/images/interventions/chirurgie-intime.jpg?v=perla_brand_posters_v1',
    badgeNumber: '06',
    interventions: [
      'Vaginoplastie',
      'Labioplastie',
      'Hyménoplastie'
    ],
    description: 'Interventions intimes réparatrices et esthétiques réalisées dans la plus stricte confidentialité médicale.'
  },
  {
    id: 'cheveux',
    categoryKey: 'hair',
    title: 'Greffe de cheveux',
    image: '/images/interventions/greffe-de-cheveux.jpg?v=perla_brand_posters_v1',
    badgeNumber: '07',
    interventions: [
      'Micro greffe technique FUE',
      'Greffe DHI',
      'Greffe de barbe & sourcils'
    ],
    description: 'Implantation folliculaire haute densité sans cicatrice linéaire visible pour une chevelure dense et naturelle.'
  }
];

export const proceduresData: Procedure[] = [
  // Chirurgie du visage
  {
    id: 'rhinoplasty',
    category: 'face',
    titleKey: 'Rhinoplastie Ultrasonique',
    descKey: 'Correction structurelle et esthétique de l’arête, de la pointe ou de la déviation nasale avec préservation de la respiration et de l’harmonie faciale.',
    duration: '1h30 – 2h30',
    anesthesia: 'Générale',
    hospitalStay: 'Ambulatoire ou 1 nuit',
    recovery: '7 à 10 jours',
    image: '/images/procedures/rhinoplasty.jpg',
    popular: true,
    indication: 'Bosse nasale, pointe tombante, asymétrie ou gêne respiratoire'
  },
  {
    id: 'deep_plane_facelift',
    category: 'face',
    titleKey: 'Deep Plane Face Lift & Lifting Cervico-Facial',
    descKey: 'Repositionnement anatomique en profondeur des plans musculaires du visage (SMAS) et du cou sans tension cutanée artificielle.',
    duration: '3h30 – 4h30',
    anesthesia: 'Générale',
    hospitalStay: '1 à 2 nuits',
    recovery: '14 à 20 jours',
    image: '/images/procedures/facelift.jpg',
    popular: true,
    indication: 'Relâchement des bajoues, plis d\'amertume et affaissement du cou'
  },
  {
    id: 'blepharoplasty',
    category: 'face',
    titleKey: 'Blépharoplastie des 4 Paupières',
    descKey: 'Résection de l’excédent cutané des paupières supérieures et suppression des poches graisseuses sous les yeux avec incisions invisibles.',
    duration: '1h00 – 1h30',
    anesthesia: 'Locale assistée',
    hospitalStay: 'Ambulatoire',
    recovery: '5 à 7 jours',
    image: '/images/procedures/blepharoplasty.jpg',
    indication: 'Paupières tombantes, regard fatigué ou poches sous les yeux'
  },
  {
    id: 'neck_lift',
    category: 'face',
    titleKey: 'Lifting du cou (Platysmaplastie)',
    descKey: 'Mise en tension des cordes platysmales et lipoaspiration sous-mentonnière pour redéfinir l\'angle cervico-mentonnier.',
    duration: '1h30 – 2h00',
    anesthesia: 'Générale ou vigile',
    hospitalStay: '1 nuit',
    recovery: '8 à 12 jours',
    image: '/images/interventions/chirurgie-du-visage.jpg',
    indication: 'Double menton, fanons ou relâchement cutané du cou'
  },
  {
    id: 'autres_visage',
    category: 'face',
    titleKey: 'Génioplastie & Profiloplastie',
    descKey: 'Harmonisation globale du profil associant menton, nez et pommettes pour un équilibre facial parfait.',
    duration: '1h00 – 2h00',
    anesthesia: 'Générale',
    hospitalStay: 'Ambulatoire',
    recovery: '7 à 10 jours',
    image: '/images/procedures/genioplasty.jpg',
    indication: 'Menton fuyant ou proéminent, asymétries du profil'
  },

  // Chirurgie des seins
  {
    id: 'breast_augmentation',
    category: 'breast',
    titleKey: 'Augmentation Mammaire',
    descKey: 'Pose d’implants en gel de silicone cohésif de haute sécurité ou lipofilling autologue pour un galbe féminin et naturel.',
    duration: '1h15 – 2h00',
    anesthesia: 'Générale',
    hospitalStay: 'Ambulatoire / 1 nuit',
    recovery: '7 à 10 jours',
    image: '/images/procedures/breast.jpg',
    popular: true,
    indication: 'Hypotrophie mammaire, perte de volume post-grossesse ou asymétrie'
  },
  {
    id: 'breast_reduction',
    category: 'breast',
    titleKey: 'Réduction Mammaire',
    descKey: 'Diminution du volume glandulaire et réascension de la poitrine pour soulager les tensions dorsales et harmoniser la silhouette.',
    duration: '2h00 – 3h00',
    anesthesia: 'Générale',
    hospitalStay: '1 nuit',
    recovery: '10 à 15 jours',
    image: '/images/procedures/breast-reduction.jpg',
    indication: 'Hypertrophie mammaire, douleurs cervicales et dorsales'
  },
  {
    id: 'breast_lift',
    category: 'breast',
    titleKey: 'Lifting des Seins (Mastopexie)',
    descKey: 'Remodelage et remontée de la glande mammaire ptosée avec ou sans pose d’implants pour retrouver un bombé tonique.',
    duration: '2h00 – 2h30',
    anesthesia: 'Générale',
    hospitalStay: '1 nuit',
    recovery: '10 à 14 jours',
    image: '/images/interventions/chirurgie-des-seins.jpg',
    indication: 'Ptôse mammaire, seins tombants après allaitement ou amaigrissement'
  },
  {
    id: 'gynecomastie',
    category: 'breast',
    titleKey: 'Gynécomastie (Poitrine Masculine)',
    descKey: 'Exérèse de la glande mammaire surnuméraire et lipoaspiration de l’excès adipeux chez l’homme pour un torse viril et plat.',
    duration: '1h00 – 1h30',
    anesthesia: 'Générale ou locale',
    hospitalStay: 'Ambulatoire',
    recovery: '5 à 8 jours',
    image: '/images/procedures/gynecomastia.jpg',
    indication: 'Développement mammaire bénin chez l’homme'
  },

  // Chirurgie de la silhouette
  {
    id: 'abdominoplasty',
    category: 'silhouette',
    titleKey: 'Abdominoplastie & Diastasis',
    descKey: 'Remodelage de la paroi abdominale avec correction du tablier cutané et resserrement des muscles abdominaux (diastasis).',
    duration: '2h00 – 3h00',
    anesthesia: 'Générale',
    hospitalStay: '1 à 2 nuits',
    recovery: '15 à 21 jours',
    image: '/images/procedures/abdominoplasty.jpg',
    popular: true,
    indication: 'Ventre tombant, excès de peau post-grossesse ou amaigrissement'
  },
  {
    id: 'liposuction_vaser',
    category: 'silhouette',
    titleKey: 'Liposuccion VASER & HD',
    descKey: 'Émulsion sélective des amas graisseux par ultrasons VASER avec rétraction cutanée maximale et définition musculaire.',
    duration: '1h30 – 3h00',
    anesthesia: 'Générale',
    hospitalStay: 'Ambulatoire / 1 nuit',
    recovery: '5 à 8 jours',
    image: '/images/procedures/liposuction.jpg',
    popular: true,
    indication: 'Graisse rebelle (abdomen, taille, cuisses, culotte de cheval, bras)'
  },
  {
    id: 'j_plasma_renuvion',
    category: 'silhouette',
    titleKey: 'J-Plasma / Renuvion',
    descKey: 'Technologie au plasma d\'hélium et radiofréquence délivrée sous la peau pour retendre intensément les tissus sans cicatrices.',
    duration: '1h00 – 2h00',
    anesthesia: 'Locale assistée ou générale',
    hospitalStay: 'Ambulatoire',
    recovery: '4 à 7 jours',
    image: '/images/interventions/chirurgie-de-la-silhouette.jpg',
    indication: 'Relâchement cutané modéré des bras, cuisses, cou ou abdomen'
  },
  {
    id: 'arm_thigh_lift',
    category: 'silhouette',
    titleKey: 'Lifting des Bras & Cuisses',
    descKey: 'Brachioplastie et cruroplastie pour éliminer l\'excédent de peau fripée ou relâchée au niveau des membres supérieurs et inférieurs.',
    duration: '2h00 – 2h30',
    anesthesia: 'Générale',
    hospitalStay: '1 nuit',
    recovery: '10 à 14 jours',
    image: '/images/interventions/chirurgie-de-la-silhouette.jpg',
    indication: 'Peau relâchée à l\'intérieur des bras ou des cuisses'
  },
  {
    id: 'lipofilling_bbl',
    category: 'silhouette',
    titleKey: 'Lipofilling des fesses (BBL)',
    descKey: 'Prélèvement de graisse par lipo-aspiration douce, purification et réinjection pour galber et harmoniser les fesses avec un résultat 100% naturel.',
    duration: '2h30 – 3h30',
    anesthesia: 'Générale',
    hospitalStay: '1 nuit',
    recovery: '10 à 15 jours',
    image: '/images/procedures/bbl.jpg',
    popular: true,
    indication: 'Fesses plates, asymétriques ou recherche de projection harmonieuse'
  },

  // Chirurgie de l'obésité
  {
    id: 'sleeve_gastrique',
    category: 'obesity',
    titleKey: 'Sleeve Gastrique',
    descKey: 'Résection longitudinale de l\'estomac sous cœlioscopie réduisant l\'appétit et le volume gastrique pour une perte de poids durable.',
    duration: '1h30 – 2h00',
    anesthesia: 'Générale',
    hospitalStay: '2 nuits',
    recovery: '10 à 15 jours',
    image: '/images/interventions/chirurgie-de-l-obesite.jpg',
    popular: true,
    indication: 'IMC > 35 avec comorbidités ou IMC > 40'
  },
  {
    id: 'bypass_gastrique',
    category: 'obesity',
    titleKey: 'Bypass Gastrique & Sadi-S',
    descKey: 'Court-circuit gastrique limitant l\'absorption des calories et des sucres chez les patients souffrant de reflux ou de diabète de type 2.',
    duration: '2h00 – 3h00',
    anesthesia: 'Générale',
    hospitalStay: '2 à 3 nuits',
    recovery: '14 à 20 jours',
    image: '/images/interventions/chirurgie-de-l-obesite.jpg',
    indication: 'Obésité sévère à morbide, diabète associé, échec de sleeve'
  },

  // Soins dentaires
  {
    id: 'facettes_dentaires',
    category: 'dental',
    titleKey: 'Facettes E-Max & Hollywood Smile',
    descKey: 'Pellicules de céramique ultra-fines collées sur la face visible des dents pour un alignement, une teinte et un sourire éclatant.',
    duration: '2 à 3 séances',
    anesthesia: 'Locale',
    hospitalStay: 'Ambulatoire (0 nuit)',
    recovery: 'Immédiat',
    image: '/images/interventions/soins-dentaires.jpg',
    popular: true,
    indication: 'Dents tachées, ébréchées, espacées ou mal alignées'
  },
  {
    id: 'implants_dentaires',
    category: 'dental',
    titleKey: 'Implants & Couronnes Zircone',
    descKey: 'Remplacement de dents manquantes par des racines artificielles en titane et couronnes en zircone haute résistance esthétique.',
    duration: '1h00 – 2h00',
    anesthesia: 'Locale',
    hospitalStay: 'Ambulatoire',
    recovery: '2 à 3 jours',
    image: '/images/interventions/soins-dentaires.jpg',
    indication: 'Édentement unitaire, partiel ou complet'
  },

  // Chirurgie intime
  {
    id: 'chirurgie_intime',
    category: 'intimate',
    titleKey: 'Vaginoplastie & Labioplastie',
    descKey: 'Chirurgie réparatrice et esthétique des petites lèvres ou rétrécissement du canal vaginal dans un cadre confidentiel et bienveillant.',
    duration: '45min – 1h30',
    anesthesia: 'Locale assistée ou générale',
    hospitalStay: 'Ambulatoire',
    recovery: '5 à 10 jours',
    image: '/images/interventions/chirurgie-intime.jpg',
    indication: 'Gêne intime fonctionnelle, hypertrophie labiale ou relâchement'
  },

  // Greffe de cheveux
  {
    id: 'greffe_cheveux_fue',
    category: 'hair',
    titleKey: 'Greffe Capillaire FUE & DHI',
    descKey: 'Extraction unité folliculaire par unité sans cicatrice linéaire et réimplantation haute densité pour cheveux, barbe ou sourcils.',
    duration: '5h00 – 7h00',
    anesthesia: 'Locale sans douleur',
    hospitalStay: 'Ambulatoire',
    recovery: '2 à 4 jours',
    image: '/images/interventions/greffe-de-cheveux.jpg',
    popular: true,
    indication: 'Alopécie androgénétique, calvitie, golfes dégarnis ou barbe clairsemée'
  }
];

export const beforeAfterGallery: BeforeAfterItem[] = [
  {
    id: 'ba-abdominoplasty-femme',
    category: 'silhouette',
    title: 'Abdominoplastie Féminine & Diastasis',
    titleKey: 'Abdominoplastie Femme Post-Grossesse',
    procedure: 'Abdominoplastie Complète & Cure de Diastasis',
    badge: '01 / Silhouette Féminine',
    description: 'Correction chirurgicale d’un tablier cutané abdominal et resserrement des muscles grands droits (cure de diastasis) chez une femme après 2 grossesses. Cicatrice ultra-basse dissimulée dans le maillot.',
    descKey: 'Remodelage complet du ventre féminin avec remise en tension musculaire et disparition des plis cutanés.',
    beforeImg: '/images/results/abdominoplasty-femme-before.jpg',
    afterImg: '/images/results/abdominoplasty-femme-after.jpg',
    fullCompositeImg: '/images/results/abdominoplasty-femme-composite.jpg',
    timeframe: 'Résultat à 6 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-abdominoplasty-homme',
    category: 'silhouette',
    title: 'Abdominoplastie Masculine & Body Contouring',
    titleKey: 'Abdominoplastie Homme après Perte de Poids',
    procedure: 'Lipo-Abdominoplastie & Remise en Tension',
    badge: '02 / Silhouette Masculine',
    description: 'Exérèse de l’excédent cutané et remise en tension de la paroi abdominale chez un homme après perte de poids importante. Rétablissement d’un torse masculin plat et athlétique.',
    descKey: 'Suppression du tablier cutané masculin et redéfinition du relief de la ceinture.',
    beforeImg: '/images/results/abdominoplasty-before.jpg',
    afterImg: '/images/results/abdominoplasty-after.jpg',
    fullCompositeImg: '/images/results/abdominoplasty-composite.jpg',
    timeframe: 'Résultat à 6 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-rhinoplasty',
    category: 'face',
    title: 'Rhinoplastie Structurelle & Pointe',
    titleKey: 'Affinage du Profil & Précision de la Pointe',
    procedure: 'Rhinoplastie Conservatrice par Ultrasons',
    badge: '02 / Esthétique Faciale',
    description: 'Réduction de bosse ostéo-cartilagineuse et repositionnement de la pointe tombante tout en préservant le caractère naturel du regard.',
    descKey: 'Correction de la ligne de profil avec préservation osseuse et symétrie faciale.',
    beforeImg: '/images/results/rhinoplasty-before.jpg',
    afterImg: '/images/results/rhinoplasty-after.jpg',
    fullCompositeImg: '/images/results/rhinoplasty-composite.jpg',
    timeframe: 'Résultat à 1 an post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-breast',
    category: 'breast',
    title: 'Augmentation Mammaire',
    titleKey: 'Volume Harmonieux & Décolleté Naturel',
    procedure: 'Implants Ronds Profil Modéré 325cc',
    badge: '03 / Poitrine & Harmonie',
    description: 'Restauration de plénitude sur le pôle supérieur avec cicatrices péri-aréolaires indétectables et souplesse remarquable.',
    descKey: 'Positionnement sous le muscle pour un bombé naturel et une transition douce.',
    beforeImg: '/images/results/breast-before.jpg',
    afterImg: '/images/results/breast-after.jpg',
    fullCompositeImg: '/images/results/breast-composite.jpg',
    timeframe: 'Résultat à 9 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-blepharoplasty',
    category: 'face',
    title: 'Blépharoplastie des 4 Paupières',
    titleKey: 'Rajeunissement du Regard & Poches',
    procedure: 'Chirurgie des Paupières Supérieures & Inférieures',
    badge: '04 / Regard & Paupières',
    description: 'Disparition de l’excès de peau et des hernies graisseuses palpébrales sans modification de l’expression naturelle du visage.',
    descKey: 'Correction du regard lourd et reposé en ambulatoire.',
    beforeImg: '/images/results/blepharoplasty-before.jpg',
    afterImg: '/images/results/blepharoplasty-after.jpg',
    fullCompositeImg: '/images/results/blepharoplasty-composite.jpg',
    timeframe: 'Résultat à 4 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-breast-reduction',
    category: 'breast',
    title: 'Réduction Mammaire & Remontée',
    titleKey: 'Soulagement Anatomique & Galbe Parfait',
    procedure: 'Plastie Mammaire de Réduction avec Remplacement Aréolaire',
    badge: '05 / Poitrine & Silhouette',
    description: 'Allègement du poids mammaire, suppression des douleurs dorsales et remodelage esthétique harmonieux proportionné à la morphologie.',
    descKey: 'Réduction de volume et ascension mammaire pour un confort immédiat.',
    beforeImg: '/images/results/breast-reduction-before.jpg',
    afterImg: '/images/results/breast-reduction-after.jpg',
    fullCompositeImg: '/images/results/breast-reduction-composite.jpg',
    timeframe: 'Résultat à 6 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  },
  {
    id: 'ba-bbl',
    category: 'buttocks',
    title: 'Lipofilling Fessier (BBL & Sablier)',
    titleKey: 'Galbe Fessier Naturel & Affinement de la Taille',
    procedure: 'Lipofilling Autologue 850cc',
    badge: '06 / Galbe & Contouring',
    description: 'Affinement des poignées d’amour et transfert de graisse purifiée pour une projection équilibrée sans corps étranger.',
    descKey: 'Harmonisation du ratio taille-hanches avec injection de graisse autologue purifiée.',
    beforeImg: '/images/results/bbl-before.jpg',
    afterImg: '/images/results/bbl-after.jpg',
    fullCompositeImg: '/images/results/lipofilling-fessier-composite.jpg',
    timeframe: 'Résultat à 4 mois post-opératoire',
    surgeon: 'Dr. Taher Jamel'
  }
];

export const patientJourneySteps = [
  {
    step: '01',
    titleEn: 'Private Consultation',
    titleFr: 'Consultation & Écoute',
    titleAr: 'استشارة خاصة وتصوير ثلاثي الأبعاد',
    descEn: 'We evaluate your unique anatomy, clarify medical feasibility, and align on goals with complete clarity.',
    descFr: 'Bilan anatomique complet, écoute de vos attentes et simulation des options avec transparence chirurgicale.',
    descAr: 'تقييم سريري شامل لهيكل الجسم والملامح، والاستماع لأهدافكِ، ومناقشة تفاصيل الخطة بدقة وشفافية.'
  },
  {
    step: '02',
    titleEn: 'Personalized Strategy',
    titleFr: 'Planification Personnalisée',
    titleAr: 'خطة علاجية مخصصة',
    descEn: 'A precise medical roadmap covering pre-op bloodwork, technique selection, and customized anesthesia.',
    descFr: 'Validation du bilan préopératoire, choix de la technique la plus adaptée et préparation de votre séjour.',
    descAr: 'إعداد استراتيجية دقيقة تشمل التحاليل، واختيار التقنية الأنسب لنسيج جسمك، وتجهيز برنامج الإقامة.'
  },
  {
    step: '03',
    titleEn: 'Precision Procedure',
    titleFr: 'Intervention Clinique',
    titleAr: 'إجراء جراحي فائق الدقة',
    descEn: 'Performed by our certified expert surgeon in state-of-the-art sterile operating theaters with international accreditation.',
    descFr: 'Réalisée par notre chirurgien expert au sein de blocs opératoires ultramodernes certifiés aux normes internationales.',
    descAr: 'تنفيذ العملية بإشراف جراحنا المعتمد في غرف عمليات معقمة ومجهزة بأحدث المعايير الدولية.'
  },
  {
    step: '04',
    titleEn: 'Assisted Recovery',
    titleFr: 'Suivi Post-Opératoire & Soins',
    titleAr: 'نقاهة ومتابعة دقيقة ومستمرة',
    descEn: 'Pain control protocols, gentle lymphatic drainage sessions, and close nurse check-ins throughout convalescence.',
    descFr: 'Gestion de l’inconfort, séances de drainage lymphatique doux et visites de contrôle régulières par l’équipe.',
    descAr: 'عناية فائقة بتسكين الألم، وجلسات تدليك تصريف لمفاوي مدروسة، ومتابعة يومية مستمرة حتى الاطمئنان التام.'
  },
  {
    step: '05',
    titleEn: 'Harmonious Results',
    titleFr: 'Résultat Durable & Épanoui',
    titleAr: 'نتيجة طبيعية ودائمة',
    descEn: 'Refined proportions that blend with your body frame, creating natural elegance without an artificial look.',
    descFr: 'Un résultat stabilisé, élégant et indétectable, en parfaite résonance avec votre personnalité.',
    descAr: 'قوام متناسق وملامح مشرقة تمنحكِ الثقة التامة بمظهر طبيعي ومستقر يدوم لسنوات.'
  }
];

export const clinicPillars = [
  {
    icon: 'ShieldCheck',
    titleEn: 'ISO Sterile Suites',
    titleFr: 'Normes de Bloc Stériles',
    titleAr: 'أعلى درجات التعقيم الطبي',
    descEn: 'Cutting-edge laminar flow ventilation and zero-compromise surgical sterility.',
    descFr: 'Flux laminaire stérile et respect rigoureux des normes hospitalières internationales.',
    descAr: 'غرف عمليات معقمة بأنظمة تدفق هوائي نقي وفق أدق المعايير العالمية.'
  },
  {
    icon: 'Sparkles',
    titleEn: 'Natural Proportions',
    titleFr: 'Subtilité & Naturel',
    titleAr: 'تناسق طبيعي غير متكلف',
    descEn: 'Subtle enhancement that complements your original bone structure and tissues.',
    descFr: 'Des courbes respectant l’anatomie humaine pour éviter tout rendu artificiel ou figé.',
    descAr: 'تحسين جمالي يحافظ على الهوية الطبيعية دون أي مبالغة أو تصنع.'
  },
  {
    icon: 'Award',
    titleEn: 'International Degrees',
    titleFr: 'Diplômes Internationaux',
    titleAr: 'خبرات وتدريب دولي معتمد',
    descEn: 'Extensive clinical practice across Nancy, Paris, Baltimore and prestigious centers.',
    descFr: 'Formations de haut niveau et spécialisations hospitalières en France et aux USA.',
    descAr: 'شهادات تخصصية وسنوات ممارسة في مستشفيات فرنسا والولايات المتحدة الأمريكية.'
  },
  {
    icon: 'HeartHandshake',
    titleEn: 'Concierge Care',
    titleFr: 'Accueil & Discrétion',
    titleAr: 'خصوصية واستقبال خاص',
    descEn: 'Full support for local and traveling international patients with maximum discretion.',
    descFr: 'Accompagnement VIP dédié pour les patients tunisiens et internationaux.',
    descAr: 'خدمة استقبال ومرافقة شخصية تضمن كامل الخصوصية للمرضى من تونس والخارج.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sonia B.',
    location: 'Tunis / Paris',
    procedure: 'Abdominoplastie + Lipo HD',
    rating: 5,
    commentKey: 'L’équipe chirurgicale de Perla Body Sculpt a fait un travail extraordinaire sur mon ventre après mes jumeaux. La cicatrice est fine et le résultat au-delà de mes espérances. Une équipe attentive et bienveillante du début à la fin.',
    date: 'Janvier 2026'
  },
  {
    id: 'test-2',
    name: 'Nadia M.',
    location: 'Genève, Suisse',
    procedure: 'Lipofilling BBL',
    rating: 5,
    commentKey: 'Venue de Suisse pour mon BBL, tout a été impeccablement orchestré. Résultat très subtil et naturel, exactement ce que j’avais demandé lors de la consultation. Mille mercis au chirurgien et à toute l’équipe Perla Body Sculpt.',
    date: 'Novembre 2025'
  },
  {
    id: 'test-3',
    name: 'Karim D.',
    location: 'Sousse, Tunisie',
    procedure: 'Rhinoplastie Ultrasonique',
    rating: 5,
    commentKey: 'Résultat spectaculaire sur mon nez sans ecchymoses excessives grâce aux ultrasons. Je respire parfaitement et mon profil est naturel. Un chirurgien d’un professionnalisme remarquable.',
    date: 'Décembre 2025'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    questionKey: 'Combien de temps dure la convalescence après une abdominoplastie ou une liposuccion ?',
    answerKey: 'Pour une liposuccion HD, la reprise des activités légères se fait généralement sous 5 à 7 jours. Pour une abdominoplastie avec diastasis, prévoyez 15 à 21 jours de repos. Un vêtement de contention (gaine médicale) sur mesure est prescrit pendant 4 à 6 semaines pour optimiser la rétraction cutanée.'
  },
  {
    id: 'faq-2',
    questionKey: 'Comment s’organise le séjour pour les patientes et patients venant de l’étranger ?',
    answerKey: 'Nous proposons un parcours complet : pré-consultation virtuelle détaillée avec notre chirurgien sur photographies médicales, accueil VIP à l’aéroport de Tunis-Carthage, prise en charge des transferts privés, séjour en clinique accréditée et hébergement en hôtel partenaire pour une convalescence sereine.'
  },
  {
    id: 'faq-3',
    questionKey: 'Les cicatrices sont-elles visibles ?',
    answerKey: 'Toutes les incisions sont stratégiquement dissimulées dans les plis naturels de l’anatomie ou sous la ligne du maillot de bain (abdominoplastie, BBL). Notre chirurgien utilise des techniques de suture sous-cutanée de haute précision et prescrit des soins cicatrisants au laser et silicones pour estomper la cicatrice.'
  },
  {
    id: 'faq-4',
    questionKey: 'Quand peut-on observer le résultat définitif d’une intervention ?',
    answerKey: 'Une amélioration spectaculaire est visible dès le retrait des pansements. Toutefois, l’œdème post-opératoire se résorbe progressivement sur 2 à 3 mois. Le résultat morphologique et la maturation des tissus sont considérés comme stabilisés entre 6 et 12 mois selon l’intervention.'
  }
];
