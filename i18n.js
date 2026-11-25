(() => {
  const shared = {
    en: {
      "skip": "Skip to content",
      "nav.label": "Primary navigation",
      "nav.home": "Maple Tracker home",
      "nav.how": "How it works",
      "nav.features": "Features",
      "nav.privacy": "Privacy",
      "nav.faq": "FAQ",
      "nav.cta": "Get the app",
      "language.label": "Language",
      "footer.tagline": "Independent presence tracking for Canadian citizenship, on iPhone and Android.",
      "footer.appTitle": "Get the app",
      "footer.infoTitle": "Information",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms of service",
      "footer.disclaimer": "Maple Tracker is not affiliated with Immigration, Refugees and Citizenship Canada or the Government of Canada.",
      "footer.made": "Made in Canada"
    },
    fr: {
      "skip": "Aller au contenu",
      "nav.label": "Navigation principale",
      "nav.home": "Accueil de Maple Tracker",
      "nav.how": "Fonctionnement",
      "nav.features": "Fonctionnalités",
      "nav.privacy": "Confidentialité",
      "nav.faq": "FAQ",
      "nav.cta": "Télécharger",
      "language.label": "Langue",
      "footer.tagline": "Suivi indépendant de la présence physique pour la citoyenneté canadienne, sur iPhone et Android.",
      "footer.appTitle": "Télécharger",
      "footer.infoTitle": "Information",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "Conditions d’utilisation",
      "footer.disclaimer": "Maple Tracker n’est affilié ni à Immigration, Réfugiés et Citoyenneté Canada ni au gouvernement du Canada.",
      "footer.made": "Fait au Canada"
    }
  };

  const pages = {
    home: {
      en: {
        "meta.title": "Maple Tracker",
        "meta.description": "Maple Tracker counts your days of physical presence in Canada, keeps your travel history in order and helps you prepare for the citizenship test. For iPhone and Android.",
        "hero.new": "New",
        "hero.announce": "Now available on Android",
        "hero.title": "Know where you stand on the way to Canadian citizenship.",
        "hero.lead": "Maple Tracker counts your days of physical presence in Canada, keeps your travel history in order and helps you prepare for the citizenship test.",
        "hero.fine": "No account required · iOS 18.6 or later · Android 9 or later",
        "store.appleSmall": "Download on the",
        "store.appleLabel": "Download Maple Tracker on the App Store",
        "store.googleSmall": "Get it on",
        "store.googleLabel": "Get Maple Tracker on Google Play",
        "facts.label": "At a glance",
        "facts.oneTitle": "1,095 days",
        "facts.oneBody": "The presence goal, recalculated every day",
        "facts.twoTitle": "170 questions",
        "facts.twoBody": "To practise for the citizenship test",
        "facts.threeTitle": "14 languages",
        "facts.threeBody": "Including English and French",
        "facts.fourTitle": "No account",
        "facts.fourBody": "Your records stay on your phone",
        "how.title": "How the count works",
        "how.lead": "To apply for citizenship, you need 1,095 days of physical presence in Canada during the five years before you apply. Maple Tracker estimates your total from your dates and trips, using the rules below.",
        "how.exampleTag": "Example",
        "how.exampleCase": "Permanent resident for 2 years, in Canada for 3 years before that, 60 days abroad.",
        "how.timelineLabel": "Five-year timeline: three years in Canada before permanent residence, then two years as a permanent resident with two trips abroad",
        "how.axisStart": "5 years ago",
        "how.axisPr": "PR date",
        "how.axisEnd": "Today",
        "how.legendPre": "Before PR: each day counts as half",
        "how.legendPr": "As a permanent resident: each day counts",
        "how.legendAway": "Outside Canada: not counted",
        "how.tallyPr": "Days in Canada as a permanent resident (730 − 60)",
        "how.tallyPre": "Credit for time before PR (half of 1,095, capped at 365)",
        "how.tallyTotal": "Total",
        "how.tallyValue": "1,035 <small>of 1,095</small>",
        "how.status": "60 days to go",
        "how.ruleOneTitle": "1,095 days in five years",
        "how.ruleOneBody": "Only the five years before your application count toward the total.",
        "how.ruleTwoTitle": "Time before PR counts half",
        "how.ruleTwoBody": "Each day spent in Canada as a temporary resident or protected person counts as half a day, up to 365 days.",
        "how.ruleThreeTitle": "Travel days count as present",
        "how.ruleThreeBody": "The day you leave and the day you return are both counted as days in Canada.",
        "how.note": "Maple Tracker provides an estimate and does not determine your eligibility. Check your dates against the <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html\">official IRCC guidance</a> before you apply.",
        "features.title": "What Maple Tracker does",
        "features.lead": "Your dates, your trips and your test preparation, in one app.",
        "features.dashTitle": "A dashboard that stays current",
        "features.dashBody": "Days present, days outside Canada, days remaining and a projected date, recalculated every day.",
        "features.tripsTitle": "A complete travel history",
        "features.tripsBody": "Add a trip in a few seconds, with notes if you need them. Optional automatic detection records when you leave Canada and when you return.",
        "features.quizTitle": "Practice for the citizenship test",
        "features.quizBody": "170 questions across six themes, with content for your province. Each answer comes with an explanation.",
        "features.reportTitle": "A PDF report for your records",
        "features.reportBody": "Export your presence summary and travel history as a PDF, in English and French, and share it from your phone.",
        "ui.dashLabel": "Days present in Canada",
        "ui.dashValue": "1,035",
        "ui.dashUnit": "days total",
        "ui.dashSince": "Since permanent residence",
        "ui.dashRatio": "1,035 / 1,095",
        "ui.dashStatus": "60 days remaining",
        "ui.tripsLabel": "Travel history",
        "ui.tripOneDates": "Jul 3 – Jul 29, 2026",
        "ui.tripOneDays": "−25 days",
        "ui.tripTwoName": "United States",
        "ui.tripTwoDates": "Jan 5 – Feb 10, 2026",
        "ui.tripTwoDays": "−35 days",
        "ui.tripAuto": "Detected automatically",
        "ui.quizTheme": "Politics",
        "ui.quizQuestion": "How many electoral districts are there in Canada?",
        "ui.quizWhy": "Canada is divided into 343 electoral districts, also called ridings or constituencies.",
        "ui.reportTitle": "Presence report",
        "ui.reportPresent": "Days present",
        "ui.reportCredit": "Credit before PR",
        "ui.reportAway": "Days outside Canada",
        "ui.reportTrips": "Trips",
        "extras.widgetTitle": "Home screen widget",
        "extras.widgetBody": "See your count without opening the app.",
        "extras.langTitle": "Quiz in 14 languages",
        "extras.langBody": "Study in the language you are most comfortable with.",
        "extras.themeTitle": "Light and dark themes",
        "extras.themeBody": "Follow your system setting or choose your own.",
        "extras.notifyTitle": "Reminders",
        "extras.notifyBody": "Optional notifications about your trips and your progress.",
        "download.title": "Available on iPhone and Android",
        "download.lead": "The same tracking, trips, quiz and reports on both platforms.",
        "download.iosReq": "Requires iOS 18.6 or later",
        "download.iosOne": "Optional sync through your private iCloud account",
        "download.iosTwo": "Restore your records on a new iPhone",
        "download.iosThree": "Home screen widget",
        "download.androidReq": "Requires Android 9 or later",
        "download.androidOne": "Records stored on your device",
        "download.androidTwo": "Back up and restore with a file you control",
        "download.androidThree": "Home screen widget",
        "privacy.title": "Your records stay yours",
        "privacy.lead": "Maple Tracker works without an account and does not operate a server that receives your trips or your location.",
        "privacy.link": "Read the privacy policy",
        "privacy.oneTitle": "No account",
        "privacy.oneBody": "Start without giving a name, an email address or immigration documents.",
        "privacy.twoTitle": "Stored on your phone",
        "privacy.twoBody": "Your profile and trips are saved on your device. Backups are optional and stay under your control.",
        "privacy.threeTitle": "Location is optional",
        "privacy.threeBody": "It is only used to detect when you leave Canada and when you return. You can always enter trips by hand.",
        "privacy.fourTitle": "No advertising",
        "privacy.fourBody": "Maple Tracker does not sell personal data or use it for advertising. Usage statistics are optional.",
        "faq.title": "Frequently asked questions",
        "faq.oneQuestion": "Is Maple Tracker an official IRCC app?",
        "faq.oneAnswer": "No. Maple Tracker is an independent personal tracking tool and is not affiliated with the Government of Canada. Always verify your eligibility and dates with IRCC before applying.",
        "faq.twoQuestion": "Does Maple Tracker tell me when I can apply?",
        "faq.twoAnswer": "It shows an estimate of your physical presence and a projected date. It does not assess the other citizenship requirements, so check the official IRCC guidance before you apply.",
        "faq.threeQuestion": "Is Maple Tracker available on Android?",
        "faq.threeAnswer": "Yes. Maple Tracker is on Google Play for Android 9 and later, and on the App Store for iPhone.",
        "faq.fourQuestion": "Does automatic trip detection send my location to a server?",
        "faq.fourAnswer": "No. Maple Tracker does not operate a server that receives your location. Your phone works out which country you are in; on Android, the system service that does this may use the network. On iPhone, location samples stay on the device unless you turn on both iCloud Sync and Location History Sync.",
        "faq.fiveQuestion": "Do I need to create an account?",
        "faq.fiveAnswer": "No. You can begin tracking without providing a name, email address or immigration documents.",
        "faq.sixQuestion": "Can I export my information?",
        "faq.sixAnswer": "Yes. Maple Tracker generates a PDF summary of your residency timeline, your trips and your current count, in English and French.",
        "closing.title": "Start counting your days today",
        "closing.body": "Setup takes a few minutes: your PR date, your arrival date and your past trips."
      },
      fr: {
        "meta.title": "Maple Tracker",
        "meta.description": "Maple Tracker compte vos jours de présence physique au Canada, garde votre historique de voyages en ordre et vous aide à préparer l’examen de citoyenneté. Pour iPhone et Android.",
        "hero.new": "Nouveau",
        "hero.announce": "Maintenant offert sur Android",
        "hero.title": "Sachez où vous en êtes sur le chemin de la citoyenneté canadienne.",
        "hero.lead": "Maple Tracker compte vos jours de présence physique au Canada, garde votre historique de voyages en ordre et vous aide à préparer l’examen de citoyenneté.",
        "hero.fine": "Aucun compte requis · iOS 18.6 ou version ultérieure · Android 9 ou version ultérieure",
        "store.appleSmall": "Télécharger dans l’",
        "store.appleLabel": "Télécharger Maple Tracker dans l’App Store",
        "store.googleSmall": "Disponible sur",
        "store.googleLabel": "Obtenir Maple Tracker sur Google Play",
        "facts.label": "En bref",
        "facts.oneTitle": "1 095 jours",
        "facts.oneBody": "L’objectif de présence, recalculé chaque jour",
        "facts.twoTitle": "170 questions",
        "facts.twoBody": "Pour vous exercer à l’examen de citoyenneté",
        "facts.threeTitle": "14 langues",
        "facts.threeBody": "Dont le français et l’anglais",
        "facts.fourTitle": "Aucun compte",
        "facts.fourBody": "Vos données restent sur votre téléphone",
        "how.title": "Comment fonctionne le calcul",
        "how.lead": "Pour demander la citoyenneté, il faut avoir été effectivement présent au Canada pendant 1 095 jours au cours des cinq années précédant la demande. Maple Tracker estime votre total à partir de vos dates et de vos voyages, selon les règles ci-dessous.",
        "how.exampleTag": "Exemple",
        "how.exampleCase": "Résident permanent depuis 2 ans, au Canada depuis 3 ans auparavant, 60 jours à l’étranger.",
        "how.timelineLabel": "Chronologie de cinq ans : trois ans au Canada avant la résidence permanente, puis deux ans comme résident permanent avec deux voyages à l’étranger",
        "how.axisStart": "Il y a 5 ans",
        "how.axisPr": "Date de RP",
        "how.axisEnd": "Aujourd’hui",
        "how.legendPre": "Avant la RP : chaque jour compte pour une demi-journée",
        "how.legendPr": "Comme résident permanent : chaque jour compte",
        "how.legendAway": "Hors du Canada : non compté",
        "how.tallyPr": "Jours au Canada comme résident permanent (730 − 60)",
        "how.tallyPre": "Crédit pour le temps avant la RP (la moitié de 1 095, plafonné à 365)",
        "how.tallyTotal": "Total",
        "how.tallyValue": "1 035 <small>sur 1 095</small>",
        "how.status": "Il reste 60 jours",
        "how.ruleOneTitle": "1 095 jours en cinq ans",
        "how.ruleOneBody": "Seules les cinq années précédant votre demande entrent dans le total.",
        "how.ruleTwoTitle": "Le temps avant la RP compte à moitié",
        "how.ruleTwoBody": "Chaque jour passé au Canada comme résident temporaire ou personne protégée compte pour une demi-journée, jusqu’à concurrence de 365 jours.",
        "how.ruleThreeTitle": "Les jours de voyage comptent",
        "how.ruleThreeBody": "Le jour du départ et le jour du retour sont tous deux comptés comme des jours au Canada.",
        "how.note": "Maple Tracker fournit une estimation et ne détermine pas votre admissibilité. Vérifiez vos dates à l’aide des <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/services/citoyennete-canadienne.html\">renseignements officiels d’IRCC</a> avant de présenter une demande.",
        "features.title": "Ce que fait Maple Tracker",
        "features.lead": "Vos dates, vos voyages et votre préparation à l’examen, dans une seule application.",
        "features.dashTitle": "Un tableau de bord toujours à jour",
        "features.dashBody": "Jours de présence, jours hors du Canada, jours restants et date estimée, recalculés chaque jour.",
        "features.tripsTitle": "Un historique de voyages complet",
        "features.tripsBody": "Ajoutez un voyage en quelques secondes, avec des notes au besoin. La détection automatique facultative consigne vos départs du Canada et vos retours.",
        "features.quizTitle": "Préparation à l’examen de citoyenneté",
        "features.quizBody": "170 questions réparties en six thèmes, avec du contenu propre à votre province. Chaque réponse est accompagnée d’une explication.",
        "features.reportTitle": "Un rapport PDF pour vos dossiers",
        "features.reportBody": "Exportez votre sommaire de présence et votre historique de voyages en PDF, en français et en anglais, puis partagez-le depuis votre téléphone.",
        "ui.dashLabel": "Jours présents au Canada",
        "ui.dashValue": "1 035",
        "ui.dashUnit": "jours au total",
        "ui.dashSince": "Depuis la résidence permanente",
        "ui.dashRatio": "1 035 / 1 095",
        "ui.dashStatus": "60 jours restants",
        "ui.tripsLabel": "Historique de voyages",
        "ui.tripOneDates": "3 juill. – 29 juill. 2026",
        "ui.tripOneDays": "−25 jours",
        "ui.tripTwoName": "États-Unis",
        "ui.tripTwoDates": "5 janv. – 10 févr. 2026",
        "ui.tripTwoDays": "−35 jours",
        "ui.tripAuto": "Détecté automatiquement",
        "ui.quizTheme": "Politique",
        "ui.quizQuestion": "Combien de circonscriptions électorales y a-t-il au Canada?",
        "ui.quizWhy": "Le Canada est divisé en 343 circonscriptions électorales, aussi appelées comtés.",
        "ui.reportTitle": "Rapport de présence",
        "ui.reportPresent": "Jours de présence",
        "ui.reportCredit": "Crédit avant la RP",
        "ui.reportAway": "Jours hors du Canada",
        "ui.reportTrips": "Voyages",
        "extras.widgetTitle": "Widget d’écran d’accueil",
        "extras.widgetBody": "Consultez votre total sans ouvrir l’application.",
        "extras.langTitle": "Quiz en 14 langues",
        "extras.langBody": "Étudiez dans la langue avec laquelle vous êtes le plus à l’aise.",
        "extras.themeTitle": "Thèmes clair et sombre",
        "extras.themeBody": "Suivez le réglage du système ou choisissez le vôtre.",
        "extras.notifyTitle": "Rappels",
        "extras.notifyBody": "Notifications facultatives sur vos voyages et votre progression.",
        "download.title": "Offert sur iPhone et Android",
        "download.lead": "Le même suivi, les mêmes voyages, le même quiz et les mêmes rapports sur les deux plateformes.",
        "download.iosReq": "Nécessite iOS 18.6 ou une version ultérieure",
        "download.iosOne": "Synchronisation facultative au moyen de votre compte iCloud privé",
        "download.iosTwo": "Restauration de vos données sur un nouvel iPhone",
        "download.iosThree": "Widget d’écran d’accueil",
        "download.androidReq": "Nécessite Android 9 ou une version ultérieure",
        "download.androidOne": "Données enregistrées sur votre appareil",
        "download.androidTwo": "Sauvegarde et restauration au moyen d’un fichier que vous contrôlez",
        "download.androidThree": "Widget d’écran d’accueil",
        "privacy.title": "Vos données restent les vôtres",
        "privacy.lead": "Maple Tracker fonctionne sans compte et n’exploite aucun serveur qui reçoit vos voyages ou votre localisation.",
        "privacy.link": "Lire la politique de confidentialité",
        "privacy.oneTitle": "Aucun compte",
        "privacy.oneBody": "Commencez sans fournir de nom, d’adresse courriel ni de documents d’immigration.",
        "privacy.twoTitle": "Enregistré sur votre téléphone",
        "privacy.twoBody": "Votre profil et vos voyages sont enregistrés sur votre appareil. Les sauvegardes sont facultatives et vous en gardez le contrôle.",
        "privacy.threeTitle": "Localisation facultative",
        "privacy.threeBody": "Elle sert uniquement à détecter vos départs du Canada et vos retours. Vous pouvez toujours saisir vos voyages à la main.",
        "privacy.fourTitle": "Aucune publicité",
        "privacy.fourBody": "Maple Tracker ne vend pas de données personnelles et ne les utilise pas à des fins publicitaires. Les statistiques d’utilisation sont facultatives.",
        "faq.title": "Questions fréquentes",
        "faq.oneQuestion": "Maple Tracker est-elle une application officielle d’IRCC?",
        "faq.oneAnswer": "Non. Maple Tracker est un outil personnel indépendant qui n’est pas affilié au gouvernement du Canada. Vérifiez toujours votre admissibilité et vos dates auprès d’IRCC avant de présenter une demande.",
        "faq.twoQuestion": "Maple Tracker m’indique-t-elle quand je peux présenter une demande?",
        "faq.twoAnswer": "Elle affiche une estimation de votre présence physique et une date projetée. Elle n’évalue pas les autres exigences de la citoyenneté; consultez les renseignements officiels d’IRCC avant de présenter une demande.",
        "faq.threeQuestion": "Maple Tracker est-elle offerte sur Android?",
        "faq.threeAnswer": "Oui. Maple Tracker est offerte sur Google Play pour Android 9 et les versions ultérieures, ainsi que dans l’App Store pour iPhone.",
        "faq.fourQuestion": "La détection automatique des voyages envoie-t-elle ma localisation à un serveur?",
        "faq.fourAnswer": "Non. Maple Tracker n’exploite aucun serveur qui reçoit votre localisation. C’est votre téléphone qui détermine le pays où vous vous trouvez; sur Android, le service système qui s’en charge peut utiliser le réseau. Sur iPhone, les échantillons de localisation restent sur l’appareil, sauf si vous activez à la fois la synchronisation iCloud et celle de l’historique de localisation.",
        "faq.fiveQuestion": "Dois-je créer un compte?",
        "faq.fiveAnswer": "Non. Vous pouvez commencer le suivi sans fournir de nom, d’adresse courriel ni de documents d’immigration.",
        "faq.sixQuestion": "Puis-je exporter mes renseignements?",
        "faq.sixAnswer": "Oui. Maple Tracker génère un résumé PDF de votre parcours de résidence, de vos voyages et de votre total actuel, en français et en anglais.",
        "closing.title": "Commencez à compter vos jours dès aujourd’hui",
        "closing.body": "La configuration prend quelques minutes : votre date de RP, votre date d’arrivée et vos voyages passés."
      }
    },
    privacy: {
      en: {
        "meta.title": "Privacy Policy — Maple Tracker",
        "legal.title": "Privacy policy",
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
        "legal.title": "Politique de confidentialité",
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
        "legal.title": "Terms of service",
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
        "legal.title": "Conditions d’utilisation",
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

  const STORES = {
    ios: "https://apps.apple.com/ca/app/maple-tracker/id6758927692",
    android: "https://play.google.com/store/apps/details?id=com.axeltringa.mapletracker"
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

    if (persist) {
      try { localStorage.setItem("maple-tracker-language", locale); } catch (_) {}
    }
    if (updateUrl) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", locale);
        window.history.replaceState({}, "", url);
      } catch (_) {}
    }
  }

  function pointStoreLinksAtThisDevice() {
    const agent = navigator.userAgent || "";
    const store = /android/i.test(agent) ? STORES.android : /iphone|ipad|ipod/i.test(agent) ? STORES.ios : null;
    if (!store) return;
    document.querySelectorAll("[data-store-link]").forEach(link => link.setAttribute("href", store));
  }

  applyLanguage(initialLanguage);
  pointStoreLinksAtThisDevice();
  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, { persist: true, updateUrl: true }));
  });
})();
