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
        "trust.deviceTitle": "Your choice",
        "trust.device": "optional location access",
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
        "privacy.body": "Your trip records are stored on your device. iOS offers optional iCloud sync; Android system backup may include app data according to your device settings. Country lookup may use a platform geocoding service over the network. Usage analytics is off by default, and no account is required.",
        "privacy.link": "Read the privacy policy <span aria-hidden=\"true\">→</span>",
        "privacy.noAccount": "No account",
        "privacy.onDevice": "Optional tracking",
        "privacy.yourCloud": "Your iCloud",
        "faq.eyebrow": "Good to know",
        "faq.title": "Questions,<br><em>answered clearly.</em>",
        "faq.oneQuestion": "Is Maple Tracker an official IRCC app?",
        "faq.oneAnswer": "No. Maple Tracker is an independent personal tracking tool and is not affiliated with the Government of Canada. Always verify eligibility and dates with IRCC before applying.",
        "faq.twoQuestion": "Does automatic trip detection send my location to a server?",
        "faq.twoAnswer": "Country lookup may use a platform geocoding service; on Android, coordinates can be sent to the device provider’s service. iOS location history can sync when both iCloud Sync and Location History Sync are enabled. Android system backup may include app data according to your device settings. See the Privacy Policy for details.",
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
        "trust.deviceTitle": "Votre choix",
        "trust.device": "localisation facultative",
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
        "privacy.body": "Vos voyages sont enregistrés sur l’appareil. iOS propose une synchronisation iCloud facultative ; la sauvegarde système Android peut inclure les données de l’app selon les réglages du téléphone. La recherche du pays peut utiliser un service de géocodage système par le réseau. Les statistiques d’utilisation sont désactivées par défaut et aucun compte n’est requis.",
        "privacy.link": "Lire la politique de confidentialité <span aria-hidden=\"true\">→</span>",
        "privacy.noAccount": "Aucun compte",
        "privacy.onDevice": "Suivi facultatif",
        "privacy.yourCloud": "Votre iCloud",
        "faq.eyebrow": "Bon à savoir",
        "faq.title": "Des réponses<br><em>claires à vos questions.</em>",
        "faq.oneQuestion": "Maple Tracker est-elle une application officielle d’IRCC?",
        "faq.oneAnswer": "Non. Maple Tracker est un outil personnel indépendant qui n’est pas affilié au gouvernement du Canada. Vérifiez toujours votre admissibilité et vos dates auprès d’IRCC avant de présenter une demande.",
        "faq.twoQuestion": "La détection automatique des voyages envoie-t-elle ma localisation à un serveur?",
        "faq.twoAnswer": "La recherche du pays peut utiliser un service de géocodage système ; sur Android, les coordonnées peuvent être transmises au service du fournisseur de l’appareil. L’historique de localisation iOS peut être synchronisé si iCloud et la synchronisation de cet historique sont tous deux activés. La sauvegarde système Android peut inclure les données de l’app selon les réglages du téléphone. Consultez la politique de confidentialité.",
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
        "legal.updated": "Last updated: October 9, 2026",
        "privacy.1.title": "1. Introduction",
        "privacy.1.body": "Axel Tringa (\"we\", \"us\", \"our\") operates Maple Tracker (the \"App\"). This policy explains how the iOS and Android versions handle information. Platform-specific features are identified below; iCloud synchronization is available on iOS, not Android.",
        "privacy.2.title": "2. Data Stored Locally",
        "privacy.2.body": "The App stores your trip history, residency dates, citizenship calculations, preferences, and settings on your device. If automatic trip detection is enabled, recent location samples may include latitude, longitude, timestamp, and detected country. Location history is limited and used to identify border crossings.",
        "privacy.2.note": "On iOS, you can enable the applicable iCloud synchronization options. On Android, system backup or device-to-device transfer can include app records and preferences according to your device settings. A restored backup may restore your previous usage-analytics choice.",
        "privacy.3.title": "3. iCloud and Android System Backup",
        "privacy.3.body": "On iOS, enabling iCloud sync synchronizes trip and residency data through your private Apple iCloud account. Location samples are included only when you separately enable Location History Sync in Settings. Apple manages this synchronization; Maple Tracker does not operate its own trip-history storage server.",
        "privacy.4.title": "4. Location Data",
        "privacy.4.body": "Location permission is optional; you can enter trips manually without it. With permission, the App uses the location available under your permission settings to identify your country and detect departures from and returns to Canada. Location samples are stored in app storage. The App does not attach raw latitude or longitude to its Firebase Analytics events; country-related event parameters are described below.",
        "privacy.4.note": "You can stop automatic tracking in the App or revoke location access in iOS or Android settings. On Android, a force-stop, process termination or device restart can interrupt tracking; reopen the App to resume it. On iOS, location samples may also be synchronized when both iCloud Sync and Location History Sync are enabled.",
        "privacy.5.title": "5. Firebase Services",
        "privacy.5.intro": "We use Google Firebase for:",
        "privacy.5.push": "<strong>Push notifications:</strong> Firebase Messaging processes installation identifiers, a messaging registration token and app/configuration information. On Android, automatic registration can occur when Firebase initializes even if you decline usage analytics or notification display permission. The app stores its current messaging token locally; blocking visible notifications does not itself disable Firebase registration.",
        "privacy.5.analytics": "<strong>Optional usage analytics:</strong> Firebase Analytics receives feature interactions, app/device information and analytics identifiers when enabled. The SDK can derive approximate location from the device’s IP address. The app does not provide advertising features.",
        "privacy.5.note": "Usage analytics is off by default. You can enable it by accepting the onboarding analytics step or in Settings, and disable it later in Settings. Disabling Firebase Analytics also resets its local data and app-instance identifier; it does not delete events already transmitted to Firebase.",
        "privacy.6.title": "6. Information You Choose to Provide",
        "privacy.6.body": "The App does not require your name, email address, immigration documents, financial information, contacts or photos to track your presence. No Maple Tracker account is required. If you email us, your email provider and the recipient receive the information you choose to send. Maple Tracker does not sell personal data.",
        "privacy.7.title": "7. Data Retention",
        "privacy.7.body": "You can edit or delete trips and reset the app’s profile, trip and location data. On Android, Reset All Data also disables usage analytics, but does not delete Firebase registration records, already uploaded analytics, generated PDF cache files, exported reports or system backups. Uninstalling normally removes local app storage; restoring a system backup can bring saved records and preferences back.",
        "privacy.8.title": "8. Third-Party Services",
        "privacy.8.intro": "The App uses the following third-party services:",
        "privacy.8.cloud": "Apple iCloud (optional iOS synchronization)",
        "privacy.8.firebase": "Google Firebase (notifications and optional analytics)",
        "privacy.8.note": "Providers and external apps have their own data-handling terms. The Android geocoding provider depends on the device; this policy does not assert that every provider retains data only in memory or that every system operation stays offline.",
        "privacy.9.title": "9. Children’s Privacy",
        "privacy.9.body": "The App is not intended for use by children under the age of 13. We do not knowingly collect information from children.",
        "privacy.10.title": "10. Changes to This Policy",
        "privacy.10.body": "We may update this Privacy Policy from time to time. Changes will be reflected in the \"Last updated\" date above.",
        "privacy.11.title": "11. Contact Us",
        "privacy.11.body": "If you have questions about this Privacy Policy, contact us at <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>.",
        "legal.tagline": "Independent citizenship presence tracking for iOS and Android.",
        "privacy.3.android": "The Android version has no iCloud or Maple Tracker cloud-sync feature. Android, Google or your device provider may back up app data or transfer it to another device when system backup or transfer is enabled. These services are controlled through your device settings, separately from the app.",
        "privacy.4.android": "On Android, country lookup may pass latitude and longitude to the Android geocoding service, which may contact its provider over the network. This lookup is not guaranteed to remain entirely on the device. If you enable background access and the required notification permission, tracking can continue while the app is not in use. An ongoing Android notification shows the tracking session and provides a Stop action.",
        "privacy.5.events": "Android app events can include a trip’s country and duration, trip counts, partial-day and note-present flags, the pre-residence status selected during setup, quiz province/category/results, and language/theme choices. These events do not include trip-note text, exact residence dates or raw location coordinates.",
        "privacy.5.posthog": "PostHog is not configured in the Android 1.0 release and receives no events from that configuration. Where PostHog is configured in another version, it is controlled by its own optional consent and receives a limited set of feature-use events and analytics identifiers, without trip contents, coordinates, profile values or quiz answers.",
        "privacy.7.cloud": "On iOS, synchronized data may remain in your private iCloud account until you use Reset Cloud Data or manage the App’s iCloud data through your Apple ID settings. On Android, manage system backups through your device’s backup controls. Firebase retains notification and analytics data under its applicable service and project retention settings. Local reset is not a promise to erase every remote copy.",
        "privacy.7.export": "PDF reports are generated on your device. Opening a report in another app gives that app access to the selected file; it handles saved or shared copies under its own policies. Resetting Maple Tracker does not delete exported copies. Website links open in your browser or an external handler, and feedback opens an email composer that you choose whether to send.",
        "privacy.8.android": "Android location/geocoding and system backup providers (country lookup and device-controlled backup or transfer)",
        "privacy.8.posthog": "PostHog, only where configured and enabled (optional feature-use analytics)"
      },
      fr: {
        "meta.title": "Politique de confidentialité — Maple Tracker",
        "legal.title": "Politique de<br><em>confidentialité.</em>",
        "legal.updated": "Dernière mise à jour : 9 octobre 2026",
        "privacy.1.title": "1. Introduction",
        "privacy.1.body": "Axel Tringa (« nous », « notre », « nos ») exploite Maple Tracker (l’« Application »). Cette politique explique comment les versions iOS et Android traitent les renseignements. Les fonctions propres à chaque plateforme sont précisées ci-dessous ; la synchronisation iCloud est disponible sur iOS, pas sur Android.",
        "privacy.2.title": "2. Données stockées localement",
        "privacy.2.body": "L’Application stocke sur votre appareil votre historique de voyages, vos dates de résidence, vos calculs de citoyenneté, vos préférences et vos réglages. Si la détection automatique des voyages est activée, les échantillons de localisation récents peuvent comprendre la latitude, la longitude, l’horodatage et le pays détecté. L’historique de localisation est limité et sert à repérer les passages frontaliers.",
        "privacy.2.note": "Sur iOS, vous pouvez activer les options de synchronisation iCloud applicables. Sur Android, la sauvegarde système ou le transfert entre appareils peut inclure les données et les préférences de l’app selon les réglages du téléphone. Une restauration peut rétablir votre choix précédent concernant les statistiques d’utilisation.",
        "privacy.3.title": "3. iCloud et sauvegarde système Android",
        "privacy.3.body": "Sur iOS, l’activation d’iCloud synchronise les données de voyage et de résidence par l’intermédiaire de votre compte Apple iCloud privé. Les échantillons de localisation sont inclus uniquement si vous activez séparément la synchronisation de l’historique de localisation dans les réglages. Apple gère cette synchronisation ; Maple Tracker n’exploite pas son propre serveur de stockage de l’historique des voyages.",
        "privacy.4.title": "4. Données de localisation",
        "privacy.4.body": "L’autorisation de localisation est facultative ; vous pouvez saisir vos voyages manuellement sans l’accorder. Avec cette autorisation, l’Application utilise la localisation disponible selon les permissions accordées pour identifier le pays et détecter vos départs du Canada et vos retours. Les échantillons sont enregistrés dans le stockage de l’app. L’Application ne joint pas la latitude ou la longitude brutes à ses événements Firebase Analytics ; les paramètres d’événements liés aux pays sont décrits ci-dessous.",
        "privacy.4.note": "Vous pouvez arrêter le suivi automatique dans l’Application ou retirer l’accès à la localisation dans les paramètres iOS ou Android. Sur Android, un arrêt forcé, la fermeture du processus ou un redémarrage peuvent interrompre le suivi ; rouvrez l’app pour le reprendre. Sur iOS, les échantillons peuvent aussi être synchronisés si iCloud et la synchronisation de l’historique de localisation sont tous deux activés.",
        "privacy.5.title": "5. Services Firebase",
        "privacy.5.intro": "Nous utilisons Google Firebase pour :",
        "privacy.5.push": "<strong>Notifications poussées :</strong> Firebase Messaging traite des identifiants d’installation, un jeton d’enregistrement de messagerie et des informations sur l’app et sa configuration. Sur Android, l’enregistrement automatique peut avoir lieu à l’initialisation de Firebase même si vous refusez les statistiques d’utilisation ou l’affichage des notifications. L’app conserve son jeton courant localement ; bloquer les notifications visibles ne désactive pas, à lui seul, l’enregistrement Firebase.",
        "privacy.5.analytics": "<strong>Statistiques d’utilisation facultatives :</strong> lorsqu’il est activé, Firebase Analytics reçoit les interactions avec les fonctionnalités, des informations sur l’app et l’appareil ainsi que des identifiants statistiques. Le SDK peut déduire une localisation approximative de l’adresse IP de l’appareil. L’app ne propose pas de fonctionnalités publicitaires.",
        "privacy.5.note": "Les statistiques sont désactivées par défaut. Vous pouvez les activer en acceptant l’étape dédiée pendant l’accueil initial ou dans les paramètres, puis les désactiver dans les paramètres. La désactivation de Firebase Analytics réinitialise aussi ses données locales et l’identifiant de l’instance de l’app ; elle ne supprime pas les événements déjà transmis à Firebase.",
        "privacy.6.title": "6. Informations que vous choisissez de fournir",
        "privacy.6.body": "L’Application n’exige pas votre nom, adresse courriel, documents d’immigration, renseignements financiers, contacts ou photos pour suivre votre présence. Aucun compte Maple Tracker n’est nécessaire. Si vous nous écrivez, votre fournisseur de courriel et le destinataire reçoivent les informations que vous choisissez d’envoyer. Maple Tracker ne vend pas de données personnelles.",
        "privacy.7.title": "7. Conservation des données",
        "privacy.7.body": "Vous pouvez modifier ou supprimer des voyages et réinitialiser les données de profil, de voyages et de localisation de l’app. Sur Android, Réinitialiser toutes les données désactive aussi les statistiques, mais ne supprime pas les enregistrements Firebase, les statistiques déjà envoyées, les PDF générés dans le cache, les rapports exportés ni les sauvegardes système. La désinstallation retire normalement le stockage local ; une restauration système peut rétablir des données et des préférences sauvegardées.",
        "privacy.8.title": "8. Services tiers",
        "privacy.8.intro": "L’Application utilise les services tiers suivants :",
        "privacy.8.cloud": "Apple iCloud (synchronisation facultative sur iOS)",
        "privacy.8.firebase": "Google Firebase (notifications et analyse facultative)",
        "privacy.8.note": "Les fournisseurs et les apps externes ont leurs propres règles de traitement des données. Le fournisseur de géocodage Android dépend de l’appareil ; cette politique n’affirme pas que chaque fournisseur conserve les données uniquement en mémoire ni que chaque opération système reste hors ligne.",
        "privacy.9.title": "9. Protection de la vie privée des enfants",
        "privacy.9.body": "L’Application n’est pas destinée aux enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements auprès d’enfants.",
        "privacy.10.title": "10. Modifications de la présente politique",
        "privacy.10.body": "Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. Les changements seront indiqués par la date de « Dernière mise à jour » ci-dessus.",
        "privacy.11.title": "11. Nous joindre",
        "privacy.11.body": "Pour toute question concernant la présente politique de confidentialité, écrivez-nous à <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>.",
        "legal.tagline": "Suivi indépendant de présence pour la citoyenneté sur iOS et Android.",
        "privacy.3.android": "La version Android ne propose ni iCloud ni synchronisation cloud propre à Maple Tracker. Android, Google ou le fournisseur de votre appareil peut sauvegarder les données de l’app ou les transférer vers un autre appareil si la sauvegarde ou le transfert système est activé. Ces services se gèrent dans les paramètres du téléphone, séparément de l’app.",
        "privacy.4.android": "Sur Android, la recherche du pays peut transmettre la latitude et la longitude au service de géocodage Android, qui peut contacter son fournisseur par le réseau. Cette recherche n’est pas garantie entièrement locale. Si vous autorisez l’accès en arrière-plan et les notifications nécessaires, le suivi peut continuer lorsque l’app n’est pas utilisée. Une notification Android permanente indique la session de suivi et propose une action Arrêter.",
        "privacy.5.events": "Les événements de l’app Android peuvent inclure le pays et la durée d’un voyage, le nombre de voyages, le caractère partiel d’un voyage et la présence d’une note, le statut antérieur à la résidence permanente sélectionné pendant la configuration, la province, la catégorie et les résultats du quiz, ainsi que la langue et le thème. Ils n’incluent pas le texte des notes de voyage, les dates exactes de résidence ni les coordonnées de localisation brutes.",
        "privacy.5.posthog": "PostHog n’est pas configuré dans la version Android 1.0 et ne reçoit aucun événement de cette configuration. Lorsqu’il est configuré dans une autre version, PostHog dispose de son propre consentement facultatif et reçoit un ensemble limité d’événements d’usage et d’identifiants statistiques, sans contenu des voyages, coordonnées, valeurs du profil ou réponses au quiz.",
        "privacy.7.cloud": "Sur iOS, les données synchronisées peuvent rester dans votre compte iCloud privé jusqu’à leur réinitialisation dans l’app ou leur gestion dans les réglages de votre identifiant Apple. Sur Android, gérez les sauvegardes dans les paramètres de sauvegarde du téléphone. Firebase conserve les données de notification et de statistiques selon ses règles de service et les paramètres de conservation du projet. Une réinitialisation locale ne promet pas l’effacement de toutes les copies distantes.",
        "privacy.7.export": "Les rapports PDF sont générés sur votre appareil. L’ouverture d’un rapport dans une autre app lui donne accès au fichier choisi ; elle gère les copies enregistrées ou partagées selon ses propres règles. Réinitialiser Maple Tracker ne supprime pas les copies exportées. Les liens ouvrent le navigateur ou une app externe, et l’envoi de commentaires ouvre un courriel que vous décidez d’envoyer ou non.",
        "privacy.8.android": "Fournisseurs de localisation, de géocodage et de sauvegarde système Android (recherche du pays, sauvegarde ou transfert contrôlé par le téléphone)",
        "privacy.8.posthog": "PostHog, uniquement s’il est configuré et activé (statistiques d’usage facultatives)"
      }
    },
    terms: {
      en: {
        "meta.title": "Terms of Service — Maple Tracker",
        "legal.title": "Terms of<br><em>Service.</em>",
        "legal.updated": "Last updated: October 9, 2026",
        "terms.1.title": "1. Acceptance of Terms",
        "terms.1.body": "By downloading, installing, or using Maple Tracker (the \"App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use the App.",
        "terms.2.title": "2. Description of Service",
        "terms.2.body": "Maple Tracker is an independent personal tool for iOS and Android that helps users keep residence and travel records, estimate days of presence in Canada, practise citizenship questions and generate PDF reports. Features and backup options vary by platform. Estimates and automatic detection can be incomplete or inaccurate; review and correct your records.",
        "terms.3.title": "3. Disclaimer",
        "terms.3.body": "Maple Tracker is NOT an official tool of Immigration, Refugees and Citizenship Canada (IRCC) or any government agency. The calculations and information provided by the App are for personal reference only and should not be considered legal advice. Always verify your eligibility with IRCC or a qualified immigration professional before applying for citizenship.",
        "terms.4.title": "4. User Data",
        "terms.4.body": "Trip and residence records are stored on your device. On iOS, you can optionally synchronize them through your private iCloud account; location samples are included only when Location History Sync is separately enabled. Android has no iCloud or Maple Tracker cloud synchronization, but system backup or device transfer may include app data according to your device settings. You are responsible for checking your records and retaining any reports or backups you need.",
        "terms.5.title": "5. Location Services",
        "terms.5.body": "Automatic trip detection is optional and requires the relevant location permissions. On Android, country lookup may use the system geocoding provider over the network and is not guaranteed to be available or accurate. Background tracking uses a visible Android location service and requires background location and notification permissions. The ongoing notification and the app’s Settings let you stop tracking; you can also revoke permissions in device settings.",
        "terms.6.title": "6. Intellectual Property",
        "terms.6.body": "All content, design, and code in Maple Tracker are the property of Axel Tringa. The maple leaf design elements are inspired by the Canadian flag and are used in a non-commercial, informational context.",
        "terms.7.title": "7. Limitation of Liability",
        "terms.7.body": "Maple Tracker is provided \"as is\" without warranties of any kind. Axel Tringa shall not be held liable for any damages, losses, or consequences arising from the use of the App, including but not limited to incorrect day calculations, missed deadlines, or rejected citizenship applications.",
        "terms.8.title": "8. Modifications",
        "terms.8.body": "We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms.",
        "terms.9.title": "9. Contact",
        "terms.9.body": "For questions about these Terms, contact us at <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>.",
        "legal.tagline": "Independent citizenship presence tracking for iOS and Android.",
        "terms.5.note": "On Android, tracking can stop if permissions are revoked, the process is terminated, the app is force-stopped or the device restarts; reopening the app may be required. Manual trip entry remains available. The Privacy Policy describes platform-specific location, backup, analytics and deletion behavior."
      },
      fr: {
        "meta.title": "Conditions d’utilisation — Maple Tracker",
        "legal.title": "Conditions<br><em>d’utilisation.</em>",
        "legal.updated": "Dernière mise à jour : 9 octobre 2026",
        "terms.1.title": "1. Acceptation des conditions",
        "terms.1.body": "En téléchargeant, installant ou utilisant Maple Tracker (l’« Application »), vous acceptez d’être lié par les présentes conditions d’utilisation (les « Conditions »). Si vous n’acceptez pas ces Conditions, n’utilisez pas l’Application.",
        "terms.2.title": "2. Description du service",
        "terms.2.body": "Maple Tracker est un outil personnel indépendant pour iOS et Android qui permet de conserver ses données de résidence et de voyages, d’estimer ses jours de présence au Canada, de réviser les questions de citoyenneté et de générer des rapports PDF. Les fonctions et les options de sauvegarde varient selon la plateforme. Les estimations et la détection automatique peuvent être incomplètes ou inexactes ; vérifiez et corrigez vos données.",
        "terms.3.title": "3. Avis de non-responsabilité",
        "terms.3.body": "Maple Tracker N’EST PAS un outil officiel d’Immigration, Réfugiés et Citoyenneté Canada (IRCC) ni d’un organisme gouvernemental. Les calculs et renseignements fournis par l’Application sont destinés à votre usage personnel seulement et ne constituent pas des conseils juridiques. Vérifiez toujours votre admissibilité auprès d’IRCC ou d’un professionnel qualifié en immigration avant de présenter une demande de citoyenneté.",
        "terms.4.title": "4. Données de l’utilisateur",
        "terms.4.body": "Les données de voyage et de résidence sont enregistrées sur votre appareil. Sur iOS, vous pouvez les synchroniser avec votre compte iCloud privé ; les échantillons de localisation sont inclus uniquement si leur synchronisation est activée séparément. Android ne propose ni iCloud ni synchronisation cloud propre à Maple Tracker, mais la sauvegarde système ou le transfert entre appareils peut inclure les données de l’app selon les réglages du téléphone. Vous devez vérifier vos données et conserver les rapports ou sauvegardes dont vous avez besoin.",
        "terms.5.title": "5. Services de localisation",
        "terms.5.body": "La détection automatique des voyages est facultative et nécessite les autorisations de localisation correspondantes. Sur Android, la recherche du pays peut utiliser le fournisseur de géocodage système par le réseau ; sa disponibilité et son exactitude ne sont pas garanties. Le suivi en arrière-plan utilise un service Android visible et nécessite les autorisations de localisation en arrière-plan et de notification. La notification permanente et les paramètres de l’app permettent d’arrêter le suivi ; vous pouvez aussi retirer les autorisations dans les paramètres du téléphone.",
        "terms.6.title": "6. Propriété intellectuelle",
        "terms.6.body": "Tout le contenu, la conception et le code de Maple Tracker sont la propriété d’Axel Tringa. Les éléments graphiques de feuille d’érable sont inspirés du drapeau canadien et sont utilisés dans un contexte non commercial et informatif.",
        "terms.7.title": "7. Limitation de responsabilité",
        "terms.7.body": "Maple Tracker est fournie « telle quelle », sans garantie d’aucune sorte. Axel Tringa ne peut être tenu responsable des dommages, pertes ou conséquences découlant de l’utilisation de l’Application, y compris, sans s’y limiter, un calcul erroné des jours, une échéance manquée ou le rejet d’une demande de citoyenneté.",
        "terms.8.title": "8. Modifications",
        "terms.8.body": "Nous nous réservons le droit de modifier les présentes Conditions en tout temps. L’utilisation continue de l’Application après une modification constitue votre acceptation des Conditions mises à jour.",
        "terms.9.title": "9. Contact",
        "terms.9.body": "Pour toute question concernant les présentes Conditions, écrivez-nous à <a href=\"mailto:axel@mapletracker.ca\">axel@mapletracker.ca</a>.",
        "legal.tagline": "Suivi indépendant de présence pour la citoyenneté sur iOS et Android.",
        "terms.5.note": "Sur Android, le suivi peut s’arrêter si les autorisations sont retirées, le processus fermé, l’app arrêtée de force ou le téléphone redémarré ; il peut être nécessaire de rouvrir l’app. La saisie manuelle des voyages reste disponible. La politique de confidentialité décrit les comportements de localisation, de sauvegarde, de statistiques et de suppression propres à chaque plateforme."
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
