(() => {
  const shared = {
    en: {
      "skip": "Skip to content",
      "nav.label": "Primary navigation",
      "nav.home": "Maple Tracker home",
      "nav.features": "Features",
      "nav.privacy": "Privacy",
      "nav.faq": "FAQ",
      "nav.cta": "Get the app",
      "nav.ctaLabel": "Download Maple Tracker on the App Store",
      "language.label": "Language",
      "footer.tagline": "Independent citizenship presence tracking for iPhone.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.contact": "Contact",
      "footer.made": "Made in Canada"
    },
    fr: {
      "skip": "Aller au contenu",
      "nav.label": "Navigation principale",
      "nav.home": "Accueil de Maple Tracker",
      "nav.features": "Fonctionnalités",
      "nav.privacy": "Confidentialité",
      "nav.faq": "FAQ",
      "nav.cta": "Télécharger",
      "nav.ctaLabel": "Télécharger Maple Tracker dans l’App Store",
      "language.label": "Langue",
      "footer.tagline": "Suivi indépendant de la présence physique pour la citoyenneté sur iPhone.",
      "footer.privacy": "Confidentialité",
      "footer.terms": "Conditions",
      "footer.contact": "Contact",
      "footer.made": "Fait au Canada"
    }
  };

  const pages = {
    home: {
      en: {
        "meta.title": "Maple Tracker — Know where you stand",
        "meta.description": "Maple Tracker helps Canadian permanent residents track physical presence, record trips, and prepare for citizenship on iPhone.",
        "hero.eyebrow": "Built for life in Canada",
        "hero.title": "Know exactly<br><em>where you stand.</em>",
        "hero.lead": "Track your physical presence, keep every trip organized, and see your path to Canadian citizenship in one calm, private place.",
        "store.download": "Download on the",
        "hero.how": "See how it works <span aria-hidden=\"true\">↓</span>",
        "hero.availability": "For iPhone · Requires iOS 18.6 or later · No account required",
        "hero.previewLabel": "Maple Tracker dashboard preview",
        "hero.statusLabel": "Citizenship status",
        "hero.status": "Eligibility reached",
        "hero.tripDuration": "15 days away",
        "trust.label": "Product highlights",
        "trust.goal": "day goal, clearly tracked",
        "trust.deviceTitle": "On device",
        "trust.device": "location processing",
        "trust.cloudTitle": "Optional",
        "trust.cloud": "private iCloud sync",
        "trust.reportTitle": "One tap",
        "trust.report": "PDF eligibility reports",
        "features.eyebrow": "The whole picture",
        "features.title": "Less counting.<br><em>More confidence.</em>",
        "features.lead": "Maple Tracker turns dates, trips, and residency rules into a dashboard you can understand at a glance.",
        "features.dailyTitle": "Your path, calculated daily.",
        "features.dailyBody": "See days present, days away, remaining time, and your estimated eligibility date without rebuilding a spreadsheet.",
        "features.complete": "complete",
        "features.daysPresent": "Days present",
        "features.daysRemaining": "Days remaining",
        "features.tripsTitle": "Trips that stay organized.",
        "features.tripsBody": "Add trips in seconds or enable automatic detection. Edit, review, and select multiple records when cleanup is needed.",
        "features.quizQuestion": "When did Canada become a country?",
        "features.quizTitle": "Study when you have a minute.",
        "features.quizBody": "Practice citizenship questions by category with immediate feedback and clear explanations.",
        "features.reportTitle": "A record you can take with you.",
        "features.reportBody": "Generate a bilingual PDF summary of your trips and eligibility calculation for your own records. Always verify official requirements with IRCC.",
        "features.reportName": "Physical Presence Report",
        "features.reportTotal": "764 days present",
        "journey.eyebrow": "Simple by design",
        "journey.title": "From arrival<br><em>to application.</em>",
        "journey.lead": "Start with what you know. Maple Tracker keeps the rest visible as life moves forward.",
        "journey.oneTitle": "Set your residency timeline",
        "journey.oneBody": "Add your arrival and permanent residence dates, including eligible pre-PR time.",
        "journey.twoTitle": "Keep your trips current",
        "journey.twoBody": "Record travel manually or let optional location-based detection help identify departures and returns.",
        "journey.threeTitle": "Check your progress",
        "journey.threeBody": "Follow the live estimate, prepare a report, and confirm the final result with official IRCC tools.",
        "privacy.eyebrow": "Privacy by default",
        "privacy.title": "Your travel story<br><em>belongs to you.</em>",
        "privacy.body": "Trip and residency data stays on your device unless you choose iCloud sync. Location is processed on device, usage analytics is off by default, and no account is required.",
        "privacy.link": "Read the privacy policy <span aria-hidden=\"true\">→</span>",
        "privacy.noAccount": "No account",
        "privacy.onDevice": "On-device",
        "privacy.yourCloud": "Your iCloud",
        "faq.eyebrow": "Good to know",
        "faq.title": "Questions,<br><em>answered clearly.</em>",
        "faq.oneQuestion": "Is Maple Tracker an official IRCC app?",
        "faq.oneAnswer": "No. Maple Tracker is an independent personal tracking tool and is not affiliated with the Government of Canada. Always verify eligibility and dates with IRCC before applying.",
        "faq.twoQuestion": "Does automatic trip detection send my location to a server?",
        "faq.twoAnswer": "No. Country detection is performed on your iPhone. Location samples remain local unless you separately enable both iCloud Sync and Location History Sync.",
        "faq.threeQuestion": "Do I need to create an account?",
        "faq.threeAnswer": "No. You can begin tracking without providing a name, email address, or immigration documents.",
        "faq.fourQuestion": "Can I export my information?",
        "faq.fourAnswer": "Yes. Maple Tracker can generate a bilingual PDF summary of your residency timeline, trips, and current eligibility calculation.",
        "final.title": "Make every day<br><em>count.</em>",
        "final.body": "A clearer view of your path to Canadian citizenship, right on your iPhone."
      },
      fr: {
        "meta.title": "Maple Tracker — Sachez où vous en êtes",
        "meta.description": "Maple Tracker aide les résidents permanents du Canada à suivre leur présence physique, enregistrer leurs voyages et préparer leur citoyenneté sur iPhone.",
        "hero.eyebrow": "Conçu pour la vie au Canada",
        "hero.title": "Sachez exactement<br><em>où vous en êtes.</em>",
        "hero.lead": "Suivez votre présence physique, gardez chaque voyage bien organisé et visualisez votre parcours vers la citoyenneté canadienne dans un seul endroit calme et privé.",
        "store.download": "Télécharger dans l’",
        "hero.how": "Voir comment ça fonctionne <span aria-hidden=\"true\">↓</span>",
        "hero.availability": "Pour iPhone · Nécessite iOS 18.6 ou une version ultérieure · Aucun compte requis",
        "hero.previewLabel": "Aperçu du tableau de bord de Maple Tracker",
        "hero.statusLabel": "Statut de citoyenneté",
        "hero.status": "Admissibilité atteinte",
        "hero.tripDuration": "15 jours à l’étranger",
        "trust.label": "Points forts du produit",
        "trust.goal": "jours à atteindre, clairement suivis",
        "trust.deviceTitle": "Sur l’appareil",
        "trust.device": "traitement de la localisation",
        "trust.cloudTitle": "Facultative",
        "trust.cloud": "synchronisation iCloud privée",
        "trust.reportTitle": "En un toucher",
        "trust.report": "rapports PDF d’admissibilité",
        "features.eyebrow": "Une vue d’ensemble",
        "features.title": "Moins de calculs.<br><em>Plus de confiance.</em>",
        "features.lead": "Maple Tracker transforme les dates, les voyages et les règles de résidence en un tableau de bord compréhensible en un coup d’œil.",
        "features.dailyTitle": "Votre parcours, calculé chaque jour.",
        "features.dailyBody": "Voyez les jours de présence et d’absence, le temps restant et votre date d’admissibilité estimée sans refaire une feuille de calcul.",
        "features.complete": "complété",
        "features.daysPresent": "Jours présents",
        "features.daysRemaining": "Jours restants",
        "features.tripsTitle": "Des voyages bien organisés.",
        "features.tripsBody": "Ajoutez un voyage en quelques secondes ou activez la détection automatique. Modifiez, vérifiez et sélectionnez plusieurs entrées lorsque vous devez faire le ménage.",
        "features.quizQuestion": "Quand le Canada est-il devenu un pays?",
        "features.quizTitle": "Étudiez dès que vous avez une minute.",
        "features.quizBody": "Pratiquez les questions de citoyenneté par catégorie avec une rétroaction immédiate et des explications claires.",
        "features.reportTitle": "Un dossier que vous pouvez emporter.",
        "features.reportBody": "Générez un résumé PDF bilingue de vos voyages et du calcul de votre admissibilité pour vos dossiers. Vérifiez toujours les exigences officielles auprès d’IRCC.",
        "features.reportName": "Rapport de présence physique",
        "features.reportTotal": "764 jours présents",
        "journey.eyebrow": "Simple par conception",
        "journey.title": "De l’arrivée<br><em>à la demande.</em>",
        "journey.lead": "Commencez avec ce que vous savez. Maple Tracker garde le reste visible au fil de votre parcours.",
        "journey.oneTitle": "Définissez votre parcours de résidence",
        "journey.oneBody": "Ajoutez vos dates d’arrivée et de résidence permanente, y compris le temps admissible avant la RP.",
        "journey.twoTitle": "Gardez vos voyages à jour",
        "journey.twoBody": "Enregistrez vos déplacements manuellement ou laissez la détection facultative vous aider à repérer les départs et les retours.",
        "journey.threeTitle": "Consultez votre progression",
        "journey.threeBody": "Suivez l’estimation en direct, préparez un rapport et confirmez le résultat final avec les outils officiels d’IRCC.",
        "privacy.eyebrow": "Confidentialité par défaut",
        "privacy.title": "Vos déplacements<br><em>vous appartiennent.</em>",
        "privacy.body": "Vos données de voyage et de résidence restent sur votre appareil, sauf si vous choisissez la synchronisation iCloud. La localisation est traitée sur l’appareil, l’analyse d’utilisation est désactivée par défaut et aucun compte n’est requis.",
        "privacy.link": "Lire la politique de confidentialité <span aria-hidden=\"true\">→</span>",
        "privacy.noAccount": "Aucun compte",
        "privacy.onDevice": "Sur l’appareil",
        "privacy.yourCloud": "Votre iCloud",
        "faq.eyebrow": "Bon à savoir",
        "faq.title": "Des réponses<br><em>claires à vos questions.</em>",
        "faq.oneQuestion": "Maple Tracker est-elle une application officielle d’IRCC?",
        "faq.oneAnswer": "Non. Maple Tracker est un outil personnel indépendant qui n’est pas affilié au gouvernement du Canada. Vérifiez toujours votre admissibilité et vos dates auprès d’IRCC avant de présenter une demande.",
        "faq.twoQuestion": "La détection automatique des voyages envoie-t-elle ma localisation à un serveur?",
        "faq.twoAnswer": "Non. La détection du pays s’effectue sur votre iPhone. Les échantillons de localisation restent locaux, sauf si vous activez séparément la synchronisation iCloud et celle de l’historique de localisation.",
        "faq.threeQuestion": "Dois-je créer un compte?",
        "faq.threeAnswer": "Non. Vous pouvez commencer le suivi sans fournir de nom, d’adresse courriel ni de documents d’immigration.",
        "faq.fourQuestion": "Puis-je exporter mes renseignements?",
        "faq.fourAnswer": "Oui. Maple Tracker peut générer un résumé PDF bilingue de votre parcours de résidence, de vos voyages et du calcul actuel de votre admissibilité.",
        "final.title": "Faites que chaque jour<br><em>compte.</em>",
        "final.body": "Une vision plus claire de votre parcours vers la citoyenneté canadienne, directement sur votre iPhone."
      }
    },
    privacy: {
      en: {
        "meta.title": "Privacy Policy — Maple Tracker",
        "legal.title": "Privacy<br><em>Policy.</em>",
        "legal.updated": "Last updated: August 18, 2026",
        "privacy.1.title": "1. Introduction",
        "privacy.1.body": "Axel Tringa (\"we\", \"us\", \"our\") operates Maple Tracker (the \"App\"). This Privacy Policy explains how we collect, use, and protect your information when you use the App.",
        "privacy.2.title": "2. Data Stored Locally",
        "privacy.2.body": "The App stores your trip history, residency dates, citizenship calculations, preferences, and settings on your device. If automatic trip detection is enabled, recent location samples may include latitude, longitude, timestamp, and detected country. Location history is limited and used to identify border crossings.",
        "privacy.2.note": "This information remains on your device unless you enable the applicable iCloud synchronization options.",
        "privacy.3.title": "3. iCloud Sync",
        "privacy.3.body": "If you enable iCloud sync, your trip and residency data is synchronized through your private Apple iCloud account. Location samples are synchronized only when you separately enable Location History Sync in Settings. Apple manages and protects this data through iCloud; Maple Tracker does not operate a server that receives your trip or location history.",
        "privacy.4.title": "4. Location Data",
        "privacy.4.body": "If you grant location permission, the App uses precise location samples to determine the country you are in and detect when you leave or return to Canada. Country detection is performed on your device. Location samples are stored locally and are not sent to Google Firebase or to a Maple Tracker server. If you enable both iCloud Sync and Location History Sync, those samples may be stored in your private iCloud account.",
        "privacy.4.note": "You can stop future collection by disabling Automatic Tracking in the App or revoking location permission in iOS Settings.",
        "privacy.5.title": "5. Firebase Services",
        "privacy.5.intro": "We use Google Firebase for:",
        "privacy.5.push": "<strong>Push notifications:</strong> Firebase Messaging processes an app instance identifier and device notification token so notifications can be delivered.",
        "privacy.5.analytics": "<strong>Optional usage analytics:</strong> Firebase Analytics may process product-interaction events, app/device information, and identifiers used to measure feature usage. We do not use analytics for advertising or cross-app tracking.",
        "privacy.5.note": "Analytics is disabled by default and is enabled only if you turn on Usage Analytics in Maple Tracker Settings. You can disable it at any time; doing so also resets the local Firebase Analytics identifier.",
        "privacy.6.title": "6. Data We Do NOT Collect",
        "privacy.6.body": "We do not request or collect your name, email address, immigration documents, financial information, contacts, or photos. Maple Tracker does not sell personal data and does not use your data for advertising or tracking across other companies’ apps or websites.",
        "privacy.7.title": "7. Data Retention",
        "privacy.7.body": "Trip, residency, and location data remains on your device until you delete it or reset Maple Tracker. Deleting the App removes its local data. Data synchronized to iCloud may remain in your private iCloud account until you use Reset Cloud Data in Maple Tracker Settings or manage the App’s iCloud data through your Apple ID settings. Firebase retains notification and optional analytics data according to Google’s applicable retention controls.",
        "privacy.8.title": "8. Third-Party Services",
        "privacy.8.intro": "The App uses the following third-party services:",
        "privacy.8.cloud": "Apple iCloud (data sync)",
        "privacy.8.firebase": "Google Firebase (notifications and optional analytics)",
        "privacy.8.note": "Each service has its own privacy policy that governs its handling of data.",
        "privacy.9.title": "9. Children’s Privacy",
        "privacy.9.body": "The App is not intended for use by children under the age of 13. We do not knowingly collect information from children.",
        "privacy.10.title": "10. Changes to This Policy",
        "privacy.10.body": "We may update this Privacy Policy from time to time. Changes will be reflected in the \"Last updated\" date above.",
        "privacy.11.title": "11. Contact Us",
        "privacy.11.body": "If you have questions about this Privacy Policy, contact us at <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>."
      },
      fr: {
        "meta.title": "Politique de confidentialité — Maple Tracker",
        "legal.title": "Politique de<br><em>confidentialité.</em>",
        "legal.updated": "Dernière mise à jour : 18 août 2026",
        "privacy.1.title": "1. Introduction",
        "privacy.1.body": "Axel Tringa (« nous », « notre », « nos ») exploite Maple Tracker (l’« Application »). La présente politique de confidentialité explique comment nous recueillons, utilisons et protégeons vos renseignements lorsque vous utilisez l’Application.",
        "privacy.2.title": "2. Données stockées localement",
        "privacy.2.body": "L’Application stocke sur votre appareil votre historique de voyages, vos dates de résidence, vos calculs de citoyenneté, vos préférences et vos réglages. Si la détection automatique des voyages est activée, les échantillons de localisation récents peuvent comprendre la latitude, la longitude, l’horodatage et le pays détecté. L’historique de localisation est limité et sert à repérer les passages frontaliers.",
        "privacy.2.note": "Ces renseignements restent sur votre appareil, sauf si vous activez les options de synchronisation iCloud applicables.",
        "privacy.3.title": "3. Synchronisation iCloud",
        "privacy.3.body": "Si vous activez la synchronisation iCloud, vos données de voyage et de résidence sont synchronisées par l’entremise de votre compte Apple iCloud privé. Les échantillons de localisation sont synchronisés uniquement lorsque vous activez séparément la synchronisation de l’historique de localisation dans les réglages. Apple gère et protège ces données au moyen d’iCloud; Maple Tracker n’exploite aucun serveur qui reçoit votre historique de voyages ou de localisation.",
        "privacy.4.title": "4. Données de localisation",
        "privacy.4.body": "Si vous accordez l’autorisation d’accéder à votre localisation, l’Application utilise des échantillons précis afin de déterminer le pays où vous vous trouvez et de détecter vos départs et retours au Canada. La détection du pays s’effectue sur votre appareil. Les échantillons sont stockés localement et ne sont envoyés ni à Google Firebase ni à un serveur de Maple Tracker. Si vous activez à la fois la synchronisation iCloud et celle de l’historique de localisation, ces échantillons peuvent être stockés dans votre compte iCloud privé.",
        "privacy.4.note": "Vous pouvez interrompre toute collecte future en désactivant le suivi automatique dans l’Application ou en révoquant l’autorisation de localisation dans les réglages iOS.",
        "privacy.5.title": "5. Services Firebase",
        "privacy.5.intro": "Nous utilisons Google Firebase pour :",
        "privacy.5.push": "<strong>Notifications poussées :</strong> Firebase Messaging traite un identifiant d’instance de l’Application et le jeton de notification de l’appareil afin de livrer les notifications.",
        "privacy.5.analytics": "<strong>Analyse facultative de l’utilisation :</strong> Firebase Analytics peut traiter des événements d’interaction avec le produit, des renseignements sur l’Application ou l’appareil et des identifiants servant à mesurer l’utilisation des fonctionnalités. Nous n’utilisons pas l’analyse à des fins publicitaires ni pour le suivi entre applications.",
        "privacy.5.note": "L’analyse est désactivée par défaut et n’est activée que si vous activez Analyse d’utilisation dans les réglages de Maple Tracker. Vous pouvez la désactiver en tout temps; cette action réinitialise également l’identifiant Firebase Analytics local.",
        "privacy.6.title": "6. Données que nous ne recueillons PAS",
        "privacy.6.body": "Nous ne demandons ni ne recueillons votre nom, votre adresse courriel, vos documents d’immigration, vos renseignements financiers, vos contacts ou vos photos. Maple Tracker ne vend pas de données personnelles et n’utilise pas vos données à des fins publicitaires ou de suivi dans les applications ou sites Web d’autres entreprises.",
        "privacy.7.title": "7. Conservation des données",
        "privacy.7.body": "Les données de voyage, de résidence et de localisation restent sur votre appareil jusqu’à ce que vous les supprimiez ou réinitialisiez Maple Tracker. La suppression de l’Application supprime ses données locales. Les données synchronisées avec iCloud peuvent rester dans votre compte iCloud privé jusqu’à ce que vous utilisiez Réinitialiser les données infonuagiques dans les réglages de Maple Tracker ou que vous gériez les données iCloud de l’Application dans les réglages de votre identifiant Apple. Firebase conserve les données de notification et d’analyse facultative conformément aux contrôles de conservation applicables de Google.",
        "privacy.8.title": "8. Services tiers",
        "privacy.8.intro": "L’Application utilise les services tiers suivants :",
        "privacy.8.cloud": "Apple iCloud (synchronisation des données)",
        "privacy.8.firebase": "Google Firebase (notifications et analyse facultative)",
        "privacy.8.note": "Chaque service possède sa propre politique de confidentialité qui régit le traitement de ses données.",
        "privacy.9.title": "9. Protection de la vie privée des enfants",
        "privacy.9.body": "L’Application n’est pas destinée aux enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements auprès d’enfants.",
        "privacy.10.title": "10. Modifications de la présente politique",
        "privacy.10.body": "Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. Les changements seront indiqués par la date de « Dernière mise à jour » ci-dessus.",
        "privacy.11.title": "11. Nous joindre",
        "privacy.11.body": "Pour toute question concernant la présente politique de confidentialité, écrivez-nous à <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>."
      }
    },
    terms: {
      en: {
        "meta.title": "Terms of Service — Maple Tracker",
        "legal.title": "Terms of<br><em>Service.</em>",
        "legal.updated": "Last updated: August 18, 2026",
        "terms.1.title": "1. Acceptance of Terms",
        "terms.1.body": "By downloading, installing, or using Maple Tracker (the \"App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use the App.",
        "terms.2.title": "2. Description of Service",
        "terms.2.body": "Maple Tracker is a personal tool designed to help users track their physical presence in Canada for the purpose of monitoring eligibility for Canadian citizenship. The App provides day counting, trip logging, residency tracking, citizenship quiz, and PDF report generation features. The App supports multiple languages and offers both Light and Dark display modes.",
        "terms.3.title": "3. Disclaimer",
        "terms.3.body": "Maple Tracker is NOT an official tool of Immigration, Refugees and Citizenship Canada (IRCC) or any government agency. The calculations and information provided by the App are for personal reference only and should not be considered legal advice. Always verify your eligibility with IRCC or a qualified immigration professional before applying for citizenship.",
        "terms.4.title": "4. User Data",
        "terms.4.body": "Trip and residency data is stored locally on your device. You can optionally synchronize this data through your personal iCloud account. Location samples are included only when Location History Sync is separately enabled. You are responsible for the accuracy of the information you enter and for maintaining any backups you require.",
        "terms.5.title": "5. Location Services",
        "terms.5.body": "The App may request location access to detect trips automatically. Country detection is performed on your device. Location samples remain local unless you enable Location History Sync, in which case they are synchronized through your private iCloud account. You can disable automatic tracking in Maple Tracker Settings or revoke location permission in iOS Settings.",
        "terms.6.title": "6. Intellectual Property",
        "terms.6.body": "All content, design, and code in Maple Tracker are the property of Axel Tringa. The maple leaf design elements are inspired by the Canadian flag and are used in a non-commercial, informational context.",
        "terms.7.title": "7. Limitation of Liability",
        "terms.7.body": "Maple Tracker is provided \"as is\" without warranties of any kind. Axel Tringa shall not be held liable for any damages, losses, or consequences arising from the use of the App, including but not limited to incorrect day calculations, missed deadlines, or rejected citizenship applications.",
        "terms.8.title": "8. Modifications",
        "terms.8.body": "We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms.",
        "terms.9.title": "9. Contact",
        "terms.9.body": "For questions about these Terms, contact us at <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>."
      },
      fr: {
        "meta.title": "Conditions d’utilisation — Maple Tracker",
        "legal.title": "Conditions<br><em>d’utilisation.</em>",
        "legal.updated": "Dernière mise à jour : 18 août 2026",
        "terms.1.title": "1. Acceptation des conditions",
        "terms.1.body": "En téléchargeant, installant ou utilisant Maple Tracker (l’« Application »), vous acceptez d’être lié par les présentes conditions d’utilisation (les « Conditions »). Si vous n’acceptez pas ces Conditions, n’utilisez pas l’Application.",
        "terms.2.title": "2. Description du service",
        "terms.2.body": "Maple Tracker est un outil personnel conçu pour aider les utilisateurs à suivre leur présence physique au Canada afin de surveiller leur admissibilité à la citoyenneté canadienne. L’Application offre le calcul des jours, la consignation des voyages, le suivi de la résidence, un questionnaire sur la citoyenneté et la génération de rapports PDF. Elle prend en charge plusieurs langues et propose les modes d’affichage Clair et Sombre.",
        "terms.3.title": "3. Avis de non-responsabilité",
        "terms.3.body": "Maple Tracker N’EST PAS un outil officiel d’Immigration, Réfugiés et Citoyenneté Canada (IRCC) ni d’un organisme gouvernemental. Les calculs et renseignements fournis par l’Application sont destinés à votre usage personnel seulement et ne constituent pas des conseils juridiques. Vérifiez toujours votre admissibilité auprès d’IRCC ou d’un professionnel qualifié en immigration avant de présenter une demande de citoyenneté.",
        "terms.4.title": "4. Données de l’utilisateur",
        "terms.4.body": "Les données de voyage et de résidence sont stockées localement sur votre appareil. Vous pouvez les synchroniser de façon facultative au moyen de votre compte iCloud personnel. Les échantillons de localisation sont inclus uniquement lorsque la synchronisation de l’historique de localisation est activée séparément. Vous êtes responsable de l’exactitude des renseignements saisis et de la conservation de toute sauvegarde nécessaire.",
        "terms.5.title": "5. Services de localisation",
        "terms.5.body": "L’Application peut demander l’accès à votre localisation afin de détecter automatiquement les voyages. La détection du pays s’effectue sur votre appareil. Les échantillons de localisation restent locaux, sauf si vous activez la synchronisation de l’historique de localisation; ils sont alors synchronisés avec votre compte iCloud privé. Vous pouvez désactiver le suivi automatique dans les réglages de Maple Tracker ou révoquer l’autorisation de localisation dans les réglages iOS.",
        "terms.6.title": "6. Propriété intellectuelle",
        "terms.6.body": "Tout le contenu, la conception et le code de Maple Tracker sont la propriété d’Axel Tringa. Les éléments graphiques de feuille d’érable sont inspirés du drapeau canadien et sont utilisés dans un contexte non commercial et informatif.",
        "terms.7.title": "7. Limitation de responsabilité",
        "terms.7.body": "Maple Tracker est fournie « telle quelle », sans garantie d’aucune sorte. Axel Tringa ne peut être tenu responsable des dommages, pertes ou conséquences découlant de l’utilisation de l’Application, y compris, sans s’y limiter, un calcul erroné des jours, une échéance manquée ou le rejet d’une demande de citoyenneté.",
        "terms.8.title": "8. Modifications",
        "terms.8.body": "Nous nous réservons le droit de modifier les présentes Conditions en tout temps. L’utilisation continue de l’Application après une modification constitue votre acceptation des Conditions mises à jour.",
        "terms.9.title": "9. Contact",
        "terms.9.body": "Pour toute question concernant les présentes Conditions, écrivez-nous à <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>."
      }
    }
  };

  const normalizeLanguage = value => value && value.toLowerCase().startsWith("fr") ? "fr" : "en";
  const initialLanguage = normalizeLanguage(document.documentElement.dataset.lang || "en");
  const page = document.body?.dataset.page || "home";

  function updateInternalLinks(language) {
    document.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");
      if (!href || !/^(index|privacy-policy|terms-of-service)\.html/.test(href)) return;
      const url = new URL(href, window.location.href);
      url.searchParams.set("lang", language);
      link.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
    });
  }

  function applyLanguage(language, { persist = false, updateUrl = false } = {}) {
    const locale = normalizeLanguage(language);
    const copy = { ...shared[locale], ...(pages[page]?.[locale] || {}) };

    document.documentElement.lang = locale;
    document.documentElement.dataset.lang = locale;
    document.title = copy["meta.title"] || document.title;

    const description = document.querySelector('meta[name="description"]');
    if (description && copy["meta.description"]) description.content = copy["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(element => {
      const value = copy[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
      const value = copy[element.dataset.i18nAriaLabel];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === locale));
    });

    updateInternalLinks(locale);

    if (persist) localStorage.setItem("maple-tracker-language", locale);
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", locale);
      window.history.replaceState({}, "", url);
    }
  }

  applyLanguage(initialLanguage);
  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, { persist: true, updateUrl: true }));
  });
})();
