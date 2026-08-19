/* =====================================================
   ADVICE ENERGY — GRAPHIQUE INTERACTIF PRIX ÉNERGIE
   Vanilla JS + Chart.js (chargé via CDN dans index.html)

   Objectif conversion : rendre visible en un coup d'œil
   la flambée des prix depuis 2022 et pousser les visiteurs
   dont le contrat a été signé/reconduit sur cette période
   à contacter un conseiller pour réévaluer leur contrat.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var canvas = document.getElementById('energyPriceChart');
  if (!canvas || typeof Chart === 'undefined') return;

  /* =====================================================
     1) DONNÉES RÉELLES
     Prix de gros moyens annuels, en €/MWh, hors taxes et
     hors acheminement (électricité : marché spot day-ahead
     EPEX France ; gaz : PEG/TTF).
     Sources : RTE (Bilan électrique), EPEX Spot, SDES —
     Ministère de la Transition écologique ("Prix de
     l'énergie", chiffres clés 2025), Opéra Énergie.
     2007-2015 : ordres de grandeur reconstitués à partir des
     fourchettes publiées (RTE / SDES) pour ces années.
     2016-2024 : valeurs officielles publiées.
     2025-2026 : provisoires, année 2026 en cours.
     "Global / Mix" = moyenne simple électricité + gaz.
     ===================================================== */

  var SERIES = {
    global: { color: '#4338ca' },
    electricite: { color: '#2563eb' },
    gaz: { color: '#ea580c' }
  };

  var SERIES_LABELS = {
    fr: { global: 'Moyenne élec. + gaz', electricite: 'Électricité', gaz: 'Gaz' },
    en: { global: 'Global / Mix', electricite: 'Electricity', gaz: 'Gas' }
  };

  var TENSION_STYLES = {
    stable: { color: '#16a34a' },
    hausse: { color: '#f59e0b' },
    crise: { color: '#dc2626' }
  };

  var TENSION_LABELS = {
    fr: { stable: 'Stable', hausse: 'Tension à la hausse', crise: 'Crise / pic historique' },
    en: { stable: 'Stable', hausse: 'Rising tension', crise: 'Crisis / historic peak' }
  };

  var DATA = [
    { year: 2007, electricite: 38, gaz: 20, tension: 'stable', milestoneId: 'm2007' },
    { year: 2008, electricite: 69, gaz: 25, tension: 'crise', milestoneId: 'm2008' },
    { year: 2009, electricite: 43, gaz: 13, tension: 'stable' },
    { year: 2010, electricite: 47, gaz: 14, tension: 'stable' },
    { year: 2011, electricite: 49, gaz: 17, tension: 'hausse', milestoneId: 'm2011' },
    { year: 2012, electricite: 47, gaz: 18, tension: 'hausse' },
    { year: 2013, electricite: 43, gaz: 17, tension: 'hausse' },
    { year: 2014, electricite: 38, gaz: 15, tension: 'stable' },
    { year: 2015, electricite: 38, gaz: 14, tension: 'stable', milestoneId: 'm2015' },
    { year: 2016, electricite: 34, gaz: 14.1, tension: 'stable' },
    { year: 2017, electricite: 37, gaz: 17.1, tension: 'stable' },
    { year: 2018, electricite: 50.2, gaz: 21.9, tension: 'hausse' },
    { year: 2019, electricite: 39, gaz: 14.6, tension: 'stable' },
    { year: 2020, electricite: 32, gaz: 9.4, tension: 'stable', milestoneId: 'm2020' },
    { year: 2021, electricite: 109.2, gaz: 46.6, tension: 'hausse', milestoneId: 'm2021' },
    { year: 2022, electricite: 276, gaz: 112.1, tension: 'crise', milestoneId: 'm2022' },
    { year: 2023, electricite: 97, gaz: 40.1, tension: 'hausse' },
    { year: 2024, electricite: 58, gaz: 34.1, tension: 'hausse', milestoneId: 'm2024' },
    { year: 2025, electricite: 48, gaz: 37, tension: 'stable' },
    { year: 2026, electricite: 55, gaz: 40, tension: 'hausse', milestoneId: 'm2026' }
  ];

  DATA.forEach(function (d) {
    d.global = Math.round(((d.electricite + d.gaz) / 2) * 10) / 10;
  });

  var BASE_YEAR_VALUES = { global: DATA[0].global, electricite: DATA[0].electricite, gaz: DATA[0].gaz };

  /* =====================================================
     2) JALONS HISTORIQUES (bilingues) + CONSEIL DU COURTIER
     ===================================================== */

  var MILESTONES = {
    m2007: {
      year: 2007,
      range: '2007',
      tension: 'stable',
      fr: {
        title: 'Ouverture totale du marché à la concurrence',
        short: "Fin des monopoles historiques en Europe.",
        geo: "L'Union européenne finalise la libéralisation des marchés de l'électricité et du gaz engagée depuis 1996, dans un contexte de construction du marché intérieur de l'énergie.",
        reg: "Toutes les entreprises et particuliers peuvent désormais choisir librement leur fournisseur d'électricité et de gaz, quelle que soit leur taille. Les anciens monopoles perdent leur exclusivité.",
        eco: "L'arrivée de nouveaux fournisseurs crée une dynamique concurrentielle sur les prix, mais les tarifs réglementés continuent de coexister avec les offres de marché pendant une période de transition.",
        tip: "Un marché tout juste libéralisé : peu d'historique de négociation, mais déjà des écarts de prix entre fournisseurs."
      },
      en: {
        title: 'Full market opening to competition',
        short: 'The end of historic monopolies in Europe.',
        geo: 'The European Union completes the liberalization of the electricity and gas markets launched in 1996, as part of building the internal energy market.',
        reg: 'All businesses and individuals can now freely choose their electricity and gas supplier, regardless of size. Former monopolies lose their exclusivity.',
        eco: 'The arrival of new suppliers creates competitive pressure on prices, but regulated tariffs continue to coexist with market offers during a transition period.',
        tip: 'A newly liberalized market: little negotiation history yet, but price gaps between suppliers already exist.'
      }
    },
    m2008: {
      year: 2008,
      range: '2008',
      tension: 'crise',
      fr: {
        title: 'Crise financière mondiale et pic pétrole/gaz',
        short: 'Flambée puis effondrement des cours de l\'énergie.',
        geo: 'Tensions sur l\'approvisionnement pétrolier et spéculation intense sur les marchés de matières premières avant l\'éclatement de la crise des subprimes à l\'été 2008.',
        reg: 'Aucune réforme majeure cette année-là, mais la volatilité extrême relance le débat sur la nécessité de mécanismes de régulation des marchés de gros de l\'énergie.',
        eco: 'Le baril de pétrole atteint un sommet historique avant de chuter brutalement avec l\'effondrement de la demande industrielle mondiale. Le prix de gros de l\'électricité en France grimpe autour de 69 €/MWh en moyenne annuelle avant de refluer les années suivantes.',
        tip: 'Les entreprises engagées sur des contrats longs à cette période ont payé le prix fort pendant des années.'
      },
      en: {
        title: 'Global financial crisis and oil/gas price peak',
        short: 'A surge followed by a collapse in energy prices.',
        geo: 'Tensions over oil supply and intense speculation on commodity markets ahead of the subprime crisis in summer 2008.',
        reg: 'No major reform that year, but the extreme volatility revives the debate over the need for wholesale energy market regulation.',
        eco: 'Oil prices hit a historic high before collapsing sharply amid the global slump in industrial demand. Wholesale electricity prices in France climb to around €69/MWh on average for the year before easing in subsequent years.',
        tip: 'Businesses locked into long contracts during this period paid a heavy price for years.'
      }
    },
    m2011: {
      year: 2011,
      range: '2011',
      tension: 'hausse',
      fr: {
        title: 'Catastrophe de Fukushima',
        short: 'Sortie du nucléaire dans plusieurs pays européens.',
        geo: "L'accident nucléaire de Fukushima au Japon pousse plusieurs pays, notamment l'Allemagne, à accélérer leur sortie du nucléaire, redessinant les équilibres énergétiques régionaux.",
        reg: 'Renforcement des normes de sûreté nucléaire en Europe (stress tests) et révision des stratégies énergétiques nationales, avec un recours accru prévu au gaz en solution de transition.',
        eco: "La demande de gaz augmente pour compenser la réduction de la production nucléaire, exerçant une pression haussière sur les prix du gaz importé, notamment en Allemagne et au Japon.",
        tip: "Un choc externe suffit à faire grimper les prix du gaz : ne jamais dépendre d'une seule source d'approvisionnement."
      },
      en: {
        title: 'The Fukushima disaster',
        short: 'Several European countries move to phase out nuclear power.',
        geo: 'The Fukushima nuclear accident in Japan pushes several countries, notably Germany, to accelerate their nuclear phase-out, reshaping regional energy balances.',
        reg: 'Stricter nuclear safety standards across Europe (stress tests) and a review of national energy strategies, with greater reliance on gas expected as a transition solution.',
        eco: 'Gas demand rises to offset reduced nuclear output, pushing up imported gas prices, notably in Germany and Japan.',
        tip: 'A single external shock is enough to spike gas prices: never rely on just one supply source.'
      }
    },
    m2015: {
      year: 2015,
      range: '2015-2019',
      tension: 'stable',
      fr: {
        title: 'Période de stabilité relative',
        short: 'Cinq années de prix bas et prévisibles.',
        geo: 'Une offre mondiale abondante (gaz de schiste américain, GNL supplémentaire, surproduction pétrolière) maintient les prix de gros à un niveau bas et stable sur presque toute la décennie 2015-2019.',
        reg: "La fiscalité carbone (ETS) continue de monter progressivement, mais son effet sur les prix reste masqué par l'abondance de l'offre fossile mondiale.",
        eco: "Les prix de gros électricité et gaz évoluent dans un couloir étroit, autour de 35 à 50 €/MWh pour l'électricité. C'est la dernière grande fenêtre de prix bas avant la décennie de volatilité qui suit.",
        tip: "Période calme : rétrospectivement, le meilleur moment pour sécuriser un prix bas sur plusieurs années — une fenêtre de ce type ne s'est plus représentée depuis."
      },
      en: {
        title: 'A period of relative stability',
        short: 'Five years of low, predictable prices.',
        geo: 'Abundant global supply (US shale gas, extra LNG capacity, oil oversupply) keeps wholesale prices low and stable for almost the entire 2015-2019 decade.',
        reg: 'Carbon taxation (ETS) keeps rising gradually, but its effect on prices stays masked by the abundance of global fossil fuel supply.',
        eco: 'Wholesale electricity and gas prices trade in a narrow band, roughly €35-50/MWh for electricity. This was the last major low-price window before the decade of volatility that followed.',
        tip: 'A calm period: in hindsight, the best time to lock in a low price for several years — a window like this hasn\'t reappeared since.'
      }
    },
    m2020: {
      year: 2020,
      range: '2020',
      tension: 'stable',
      fr: {
        title: 'Pandémie de COVID-19',
        short: 'Chute historique de la demande énergétique.',
        geo: 'Confinements généralisés à l\'échelle mondiale entraînant un arrêt brutal de pans entiers de l\'activité économique et des transports.',
        reg: "Mise en place de mesures de soutien exceptionnelles aux entreprises, incluant des reports de charges énergétiques et des dispositifs d'aide sectoriels.",
        eco: "La demande industrielle et tertiaire s'effondre, faisant chuter les prix de gros de l'électricité et du gaz à des niveaux inédits, avant une reprise progressive puis brutale en fin d'année.",
        tip: 'La chute des prix pendant le COVID a été suivie d\'un rebond violent dès 2021 : parier sur une baisse durable des prix est une stratégie risquée.'
      },
      en: {
        title: 'The COVID-19 pandemic',
        short: 'A historic collapse in energy demand.',
        geo: 'Widespread lockdowns worldwide bring entire sections of economic activity and transport to an abrupt halt.',
        reg: 'Exceptional support measures for businesses are introduced, including deferred energy charges and sector-specific aid schemes.',
        eco: 'Industrial and commercial demand collapses, driving wholesale electricity and gas prices down to unprecedented levels, before a gradual and then sharp recovery late in the year.',
        tip: 'The COVID price drop was followed by a violent rebound as early as 2021: betting on a lasting price decrease is a risky strategy.'
      }
    },
    m2021: {
      year: 2021,
      range: '2021',
      tension: 'hausse',
      fr: {
        title: 'Reprise post-Covid et tensions d\'approvisionnement',
        short: 'Goulots d\'étranglement sur le gaz mondial.',
        geo: 'La reprise économique mondiale, plus rapide que prévu, coïncide avec des tensions sur les exportations de GNL et un hiver rigoureux en Asie qui capte une partie de l\'offre.',
        reg: 'Les gouvernements européens commencent à envisager des boucliers tarifaires temporaires face à la remontée rapide des prix de gros, sans réforme structurelle du marché à ce stade.',
        eco: 'La demande rebondit plus vite que l\'offre ne peut s\'ajuster, les stocks de gaz européens entament l\'hiver à un niveau bas, ce qui prépare le terrain à la flambée de 2022.',
        tip: "Les signaux de tension étaient déjà visibles fin 2021 : les entreprises qui ont renégocié tôt ont largement limité la casse en 2022."
      },
      en: {
        title: 'Post-Covid recovery and supply tensions',
        short: 'Bottlenecks in the global gas supply chain.',
        geo: 'The global economic recovery, faster than expected, coincides with tensions over LNG exports and a harsh winter in Asia absorbing part of the supply.',
        reg: 'European governments begin considering temporary tariff shields in response to the rapid rise in wholesale prices, without structural market reform at this stage.',
        eco: 'Demand rebounds faster than supply can adjust; European gas stocks enter winter at a low level, setting the stage for the 2022 price surge.',
        tip: 'Warning signs were already visible in late 2021: businesses that renegotiated early largely limited the damage in 2022.'
      }
    },
    m2022: {
      year: 2022,
      range: '2022',
      tension: 'crise',
      fr: {
        title: 'Guerre en Ukraine et crise énergétique européenne',
        short: 'Pic historique des prix du gaz et de l\'électricité.',
        geo: "L'invasion de l'Ukraine par la Russie en février 2022 et la réduction drastique des livraisons de gaz russe vers l'Europe provoquent une crise d'approvisionnement majeure.",
        reg: "Mise en place généralisée de boucliers tarifaires par les États européens ; le mécanisme de fixation du prix de l'électricité sur le coût marginal du gaz (merit order) amplifie la hausse même pour l'électricité décarbonée.",
        eco: "Le prix de gros de l'électricité atteint 276 €/MWh en moyenne annuelle en France (contre 109 €/MWh en 2021), et le gaz PEG grimpe à 112 €/MWh en moyenne, avec des pointes spot dépassant 340 €/MWh en cours d'année.",
        tip: "🔴 Si votre contrat a été signé ou reconduit à cette période, vous payez très probablement un prix bien supérieur au marché actuel."
      },
      en: {
        title: "Ukraine war and Europe's energy crisis",
        short: 'A historic peak in gas and electricity prices.',
        geo: "Russia's invasion of Ukraine in February 2022 and the drastic cut in Russian gas deliveries to Europe trigger a major supply crisis.",
        reg: 'European governments widely introduce tariff shields; the mechanism pricing electricity off the marginal cost of gas (merit order) amplifies the increase even for decarbonized electricity.',
        eco: 'Wholesale electricity prices reach €276/MWh on average for the year in France (versus €109/MWh in 2021), and PEG gas climbs to €112/MWh on average, with spot spikes exceeding €340/MWh during the year.',
        tip: "🔴 If your contract was signed or renewed during this period, you're very likely paying well above today's market price."
      }
    },
    m2024: {
      year: 2024,
      range: '2023-2024',
      tension: 'hausse',
      fr: {
        title: "Fin des boucliers tarifaires et reconductions à prix élevé",
        short: 'Grand carénage nucléaire et transition énergétique.',
        geo: 'Le marché reste sous tension du fait de la reconfiguration durable des flux gaziers mondiaux et de la diversification des approvisionnements européens vers le GNL.',
        reg: "La sortie progressive des boucliers tarifaires expose de nombreuses entreprises à des tarifs de reconduction fixés sur les niveaux élevés de 2022-2023, souvent sans renégociation active.",
        eco: "Les prix de gros refluent nettement (électricité à 97 €/MWh en 2023 puis 58 €/MWh en 2024 ; gaz à 40 €/MWh puis 34 €/MWh), mais de nombreux contrats professionnels signés pendant la crise sont reconduits tacitement à des niveaux qui n'ont pas suivi cette baisse.",
        tip: "La fin des boucliers tarifaires a reconduit de nombreux contrats à des niveaux encore élevés, sans que l'entreprise s'en rende compte : c'est le moment de comparer votre tarif à celui du marché actuel."
      },
      en: {
        title: 'The end of tariff shields and high-price renewals',
        short: 'Nuclear plant refurbishment and the energy transition.',
        geo: 'The market remains under pressure as global gas flows are reshaped for the long term and European supply diversifies toward LNG.',
        reg: 'As tariff shields are gradually phased out, many businesses are exposed to renewal rates locked in at the elevated 2022-2023 levels, often without active renegotiation.',
        eco: 'Wholesale prices fall sharply (electricity to €97/MWh in 2023 then €58/MWh in 2024; gas to €40/MWh then €34/MWh), but many business contracts signed during the crisis are silently renewed at levels that never followed this decline.',
        tip: 'The end of tariff shields quietly renewed many contracts at still-high levels: now is the time to compare your rate against today\'s market.'
      }
    },
    m2026: {
      year: 2026,
      range: '2025-2026',
      tension: 'hausse',
      fr: {
        title: 'Tensions au Moyen-Orient et plateau de prix élevé',
        short: 'Volatilité géopolitique et marché toujours sous tension.',
        geo: "Les tensions militaires autour de l'Iran et du détroit d'Ormuz début 2026 ont provoqué une envolée temporaire du gaz européen (TTF), passé d'environ 27 €/MWh début décembre 2025 à plus de 62 €/MWh début mars 2026, avant un reflux partiel. Ce détroit est un point de passage stratégique pour une part importante du pétrole et du gaz mondiaux : toute perturbation y ravive immédiatement les craintes de pénurie.",
        reg: "Les approvisionnements se sont diversifiés depuis 2022 (hausse des importations de GNL, notamment américain), réduisant la dépendance européenne à un fournisseur unique, mais sans supprimer la sensibilité des prix aux chocs géopolitiques ponctuels.",
        eco: "Le marché reste sur un plateau élevé par rapport à l'avant-crise : les épisodes de volatilité comme celui du printemps 2026 rappellent qu'un contrat non couvert reste exposé à des hausses brutales et imprévisibles, même après le pic de 2022.",
        tip: "Les tensions au Moyen-Orient rappellent que le marché reste instable : renégocier ou verrouiller un contrat sans le comparer d'abord reste risqué en 2026."
      },
      en: {
        title: 'Middle East tensions and a high price plateau',
        short: 'Geopolitical volatility and a market still under pressure.',
        geo: "Military tensions around Iran and the Strait of Hormuz in early 2026 triggered a temporary spike in European gas (TTF), rising from around €27/MWh in early December 2025 to over €62/MWh in early March 2026, before partially easing. The strait is a strategic chokepoint for a large share of the world's oil and gas: any disruption there immediately revives fears of shortage.",
        reg: 'Supply sources have diversified since 2022 (higher LNG imports, notably from the US), reducing Europe\'s dependence on a single supplier, but without removing price sensitivity to one-off geopolitical shocks.',
        eco: 'The market remains on a high plateau compared with pre-crisis levels: volatility episodes like the one in spring 2026 are a reminder that an uncovered contract remains exposed to sudden, unpredictable spikes, even after the 2022 peak.',
        tip: 'Middle East tensions are a reminder that the market remains unstable: renegotiating or locking in a contract without comparing offers first is still risky in 2026.'
      }
    }
  };

  var MILESTONE_ORDER = ['m2007', 'm2008', 'm2011', 'm2015', 'm2020', 'm2021', 'm2022', 'm2024', 'm2026'];

  /* Bandes de crise ponctuelles (pics aigus) */
  var CRISIS_BANDS = [{ startYear: 2008, endYear: 2009 }, { startYear: 2021, endYear: 2023 }];

  /* Zone d'alerte large : plateau de prix élevé 2022-2026, argument de conversion central */
  var ALERT_ZONE = { startYear: 2022, endYear: 2026 };
  var ALERT_ZONE_LABEL = { fr: 'ZONE À RISQUE — CONTRATS SURPAYÉS', en: 'RISK ZONE — OVERPRICED CONTRACTS' };

  var labels = DATA.map(function (d) { return String(d.year); });
  var activeSeries = 'global';
  var activeMilestoneId = 'm2022';
  var chartLang = 'fr';

  function ms(id) {
    var m = MILESTONES[id];
    if (!m) return null;
    var content = m[chartLang] || m.fr;
    return {
      year: m.year, range: m.range, tension: m.tension,
      title: content.title, short: content.short, geo: content.geo, reg: content.reg, eco: content.eco, tip: content.tip
    };
  }

  /* =====================================================
     3) PLUGINS CANVAS — BANDES DE CRISE + ZONE D'ALERTE
     ===================================================== */

  var crisisBandsPlugin = {
    id: 'crisisBands',
    beforeDatasetsDraw: function (chart) {
      var ctx = chart.ctx;
      var chartArea = chart.chartArea;
      var scales = chart.scales;
      if (!chartArea) return;
      ctx.save();
      CRISIS_BANDS.forEach(function (band) {
        var startIdx = labels.indexOf(String(band.startYear));
        var endIdx = labels.indexOf(String(band.endYear));
        if (startIdx === -1 || endIdx === -1) return;
        var xStart = scales.x.getPixelForValue(startIdx);
        var xEnd = scales.x.getPixelForValue(endIdx);
        ctx.fillStyle = 'rgba(220, 38, 38, 0.06)';
        ctx.fillRect(xStart, chartArea.top, xEnd - xStart, chartArea.bottom - chartArea.top);
      });
      ctx.restore();
    }
  };

  var alertZonePlugin = {
    id: 'alertZone',
    beforeDatasetsDraw: function (chart) {
      var ctx = chart.ctx;
      var chartArea = chart.chartArea;
      var scales = chart.scales;
      if (!chartArea) return;

      var startIdx = labels.indexOf(String(ALERT_ZONE.startYear));
      var endIdx = labels.indexOf(String(ALERT_ZONE.endYear));
      if (startIdx === -1 || endIdx === -1) return;

      var xStart = scales.x.getPixelForValue(startIdx);
      var xEnd = scales.x.getPixelForValue(endIdx);

      ctx.save();
      ctx.fillStyle = 'rgba(220, 38, 38, 0.05)';
      ctx.fillRect(xStart, chartArea.top, xEnd - xStart, chartArea.bottom - chartArea.top);

      ctx.strokeStyle = 'rgba(220, 38, 38, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(xStart, chartArea.top);
      ctx.lineTo(xStart, chartArea.bottom);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.fillStyle = '#dc2626';
      ctx.font = "700 10px 'Manrope', sans-serif";
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      var labelX = Math.min(xStart + 8, chartArea.right - 150);
      ctx.fillText(ALERT_ZONE_LABEL[chartLang] || ALERT_ZONE_LABEL.fr, labelX, chartArea.top + 8);
      ctx.restore();
    }
  };

  /* =====================================================
     4) CONSTRUCTION DES DATASETS
     ===================================================== */

  function buildPointStyles(seriesKey) {
    var radii = [];
    var backgrounds = [];
    var borders = [];
    var borderWidths = [];

    DATA.forEach(function (d) {
      if (d.milestoneId) {
        var isActive = d.milestoneId === activeMilestoneId;
        radii.push(isActive ? 8 : 5.5);
        backgrounds.push('#ffffff');
        borders.push(TENSION_STYLES[d.tension].color);
        borderWidths.push(isActive ? 3 : 2);
      } else {
        radii.push(0);
        backgrounds.push(SERIES[seriesKey].color);
        borders.push(SERIES[seriesKey].color);
        borderWidths.push(0);
      }
    });

    return { radii: radii, backgrounds: backgrounds, borders: borders, borderWidths: borderWidths };
  }

  function buildChartData(seriesKey) {
    var styles = buildPointStyles(seriesKey);
    return {
      labels: labels,
      datasets: [{
        label: SERIES_LABELS[chartLang][seriesKey],
        data: DATA.map(function (d) { return d[seriesKey]; }),
        borderColor: SERIES[seriesKey].color,
        backgroundColor: SERIES[seriesKey].color,
        borderWidth: 2.5,
        tension: 0.35,
        pointRadius: styles.radii,
        pointHoverRadius: styles.radii.map(function (r) { return r > 0 ? r + 2 : 5; }),
        pointBackgroundColor: styles.backgrounds,
        pointBorderColor: styles.borders,
        pointBorderWidth: styles.borderWidths,
        fill: false
      }]
    };
  }

  /* =====================================================
     5) INSTANCIATION DU GRAPHIQUE
     ===================================================== */

  var chart = new Chart(canvas, {
    type: 'line',
    data: buildChartData(activeSeries),
    plugins: [alertZonePlugin, crisisBandsPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', intersect: false },
      layout: { padding: { top: 22 } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94a3b8', font: { size: 11 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 12 }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#e2e8f0' },
          ticks: {
            color: '#94a3b8',
            font: { size: 11 },
            callback: function (value) { return value + ' €'; }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#94a3b8',
          bodyColor: '#1a1a1c',
          borderColor: '#e2e8f0',
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 11, weight: '600' },
          bodyFont: { size: 12.5, weight: '600' },
          displayColors: false,
          callbacks: {
            label: function (context) {
              var index = context.dataIndex;
              var point = DATA[index];
              var lines = [context.parsed.y + ' €/MWh — ' + SERIES_LABELS[chartLang][activeSeries]];
              lines.push(TENSION_LABELS[chartLang][point.tension]);
              if (point.milestoneId) {
                var m = ms(point.milestoneId);
                lines.push(m.title);
                lines.push('');
                lines.push((chartLang === 'en' ? 'Advisor tip: ' : 'Conseil du courtier : ') + m.tip);
              }
              return lines;
            }
          }
        }
      },
      onClick: function (evt, elements) {
        if (!elements || !elements.length) return;
        var index = elements[0].index;
        var point = DATA[index];
        if (point.milestoneId) {
          setActiveMilestone(point.milestoneId);
        }
      },
      onHover: function (evt, elements) {
        var target = evt.native ? evt.native.target : evt.target;
        if (!target) return;
        var overMilestone = elements && elements.length && DATA[elements[0].index].milestoneId;
        target.style.cursor = overMilestone ? 'pointer' : 'default';
      }
    }
  });

  /* =====================================================
     6) STATISTIQUES (KPI)
     ===================================================== */

  function updateStats() {
    var values = DATA.map(function (d) { return d[activeSeries]; });
    var current = values[values.length - 1];
    var peakValue = Math.max.apply(null, values);
    var peakYear = DATA.filter(function (d) { return d[activeSeries] === peakValue; })[0].year;
    var baseValue = BASE_YEAR_VALUES[activeSeries];
    var variation = Math.round(((current - baseValue) / baseValue) * 100);

    var statCurrent = document.getElementById('statCurrent');
    var statPeak = document.getElementById('statPeak');
    var statVariation = document.getElementById('statVariation');
    var statMilestones = document.getElementById('statMilestones');

    if (statCurrent) statCurrent.textContent = current + ' €/MWh';
    if (statPeak) statPeak.textContent = peakValue + ' € (' + peakYear + ')';
    if (statVariation) statVariation.textContent = (variation >= 0 ? '+' : '') + variation + '%';
    if (statMilestones) statMilestones.textContent = MILESTONE_ORDER.length;
  }

  /* =====================================================
     7) CHIPS DE JALONS
     ===================================================== */

  function renderMilestoneChips() {
    var container = document.getElementById('energyMilestones');
    if (!container) return;
    container.innerHTML = '';

    MILESTONE_ORDER.forEach(function (id) {
      var m = MILESTONES[id];
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'energy-milestone-chip' + (id === activeMilestoneId ? ' is-active' : '');

      var dot = document.createElement('span');
      dot.className = 'energy-dot';
      dot.style.background = TENSION_STYLES[m.tension].color;

      var text = document.createElement('span');
      text.textContent = m.range;

      chip.appendChild(dot);
      chip.appendChild(text);
      chip.addEventListener('click', function () { setActiveMilestone(id); });

      container.appendChild(chip);
    });
  }

  /* =====================================================
     8) CARTE DE DÉTAIL (+ conseil du courtier)
     ===================================================== */

  function renderDetail() {
    var m = ms(activeMilestoneId);
    if (!m) return;

    var tensionColor = TENSION_STYLES[m.tension].color;

    var dot = document.getElementById('energyDetailDot');
    var range = document.getElementById('energyDetailRange');
    var title = document.getElementById('energyDetailTitle');
    var short = document.getElementById('energyDetailShort');
    var geo = document.getElementById('energyDetailGeo');
    var reg = document.getElementById('energyDetailReg');
    var eco = document.getElementById('energyDetailEco');
    var header = document.getElementById('energyDetailHeader');
    var tip = document.getElementById('energyDetailTip');

    if (dot) dot.style.background = tensionColor;
    if (range) range.textContent = m.range;
    if (title) title.textContent = m.title;
    if (short) short.textContent = m.short;
    if (geo) geo.textContent = m.geo;
    if (reg) reg.textContent = m.reg;
    if (eco) eco.textContent = m.eco;
    if (header) header.style.background = tensionColor + '0d';
    if (tip) tip.textContent = m.tip;
  }

  /* =====================================================
     9) ÉTAT ACTIF — MILESTONE / SÉRIE
     ===================================================== */

  function setActiveMilestone(id) {
    activeMilestoneId = id;
    var styles = buildPointStyles(activeSeries);
    chart.data.datasets[0].pointRadius = styles.radii;
    chart.data.datasets[0].pointBackgroundColor = styles.backgrounds;
    chart.data.datasets[0].pointBorderColor = styles.borders;
    chart.data.datasets[0].pointBorderWidth = styles.borderWidths;
    chart.update();
    renderMilestoneChips();
    renderDetail();
  }

  function setActiveSeries(seriesKey) {
    activeSeries = seriesKey;
    chart.data = buildChartData(activeSeries);
    chart.update();
    updateStats();

    document.querySelectorAll('.energy-filter').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-series') === seriesKey);
    });
  }

  /* =====================================================
     10) CTA DE CONVERSION — "Mon contrat a été signé
     pendant cette hausse ?"
     ===================================================== */

  var CTA_TEXT = {
    fr: "🔴 Mon contrat a été signé pendant cette hausse ? Évaluer mon potentiel d'économie",
    en: '🔴 Was my contract signed during this spike? Assess my savings potential'
  };

  var WHATSAPP_MESSAGE = {
    fr: "Bonjour Advice Energy, je pense que mon contrat d'énergie a été signé ou reconduit pendant la période de hausse des prix (2022-2024). Je souhaite évaluer mon potentiel d'économie.",
    en: "Hello Advice Energy, I believe my energy contract was signed or renewed during the price spike (2022-2024). I'd like to assess my savings potential."
  };

  function injectCtaStyles() {
    if (document.getElementById('energyCtaAlertStyles')) return;
    var style = document.createElement('style');
    style.id = 'energyCtaAlertStyles';
    style.textContent =
      '.energy-cta-alert{display:flex;align-items:center;gap:12px;margin-top:22px;padding:16px 20px;' +
      'border-radius:var(--radius-lg,20px);background:linear-gradient(120deg,#7e0e17,#a6121e);color:#fff;' +
      'font-family:var(--font-display,"Manrope",sans-serif);font-weight:700;font-size:14.5px;line-height:1.4;' +
      'text-align:left;box-shadow:0 10px 26px -12px rgba(166,18,30,.55);border:none;cursor:pointer;width:100%;' +
      'transition:transform 200ms ease,box-shadow 200ms ease;}' +
      '.energy-cta-alert:hover{transform:translateY(-2px);box-shadow:0 16px 32px -12px rgba(166,18,30,.65);}' +
      '.energy-cta-alert__dot{flex-shrink:0;width:10px;height:10px;border-radius:50%;background:#fff;' +
      'animation:energyCtaPulse 1.6s ease-in-out infinite;}' +
      '@keyframes energyCtaPulse{0%,100%{opacity:1;}50%{opacity:.3;}}' +
      '.energy-advisor-tip{display:flex;gap:10px;align-items:flex-start;margin:0 26px 22px;padding:14px 16px;' +
      'background:rgba(166,18,30,.05);border:1px dashed rgba(166,18,30,.3);border-radius:var(--radius-md,14px);}' +
      '.energy-advisor-tip__icon{flex-shrink:0;width:26px;height:26px;border-radius:50%;background:var(--color-primary,#a6121e);' +
      'color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-display,"Manrope",sans-serif);' +
      'font-weight:800;font-size:13px;}' +
      '.energy-advisor-tip__text{font-size:13.5px;line-height:1.55;color:var(--color-ink,#1a1a1c);}' +
      '.energy-advisor-tip__text strong{font-family:var(--font-display,"Manrope",sans-serif);color:var(--color-primary,#a6121e);' +
      'text-transform:uppercase;font-size:11px;letter-spacing:.04em;display:block;margin-bottom:3px;}' +
      '@media (prefers-reduced-motion: reduce){.energy-cta-alert__dot{animation:none;}' +
      '.energy-cta-alert{transition:none;}}' +
      '@media (max-width:640px){.energy-cta-alert{font-size:13.5px;padding:14px 16px;}' +
      '.energy-advisor-tip{margin:0 18px 18px;}}';
    document.head.appendChild(style);
  }

  function injectAdvisorTip() {
    var host = document.getElementById('energyDetail');
    var grid = document.querySelector('.energy-detail__grid');
    if (!host || !grid || document.getElementById('energyDetailTip')) return;

    var wrap = document.createElement('div');
    wrap.className = 'energy-advisor-tip';

    var icon = document.createElement('span');
    icon.className = 'energy-advisor-tip__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '💡';

    var textWrap = document.createElement('div');
    textWrap.className = 'energy-advisor-tip__text';

    var label = document.createElement('strong');
    label.id = 'energyDetailTipLabel';
    label.textContent = chartLang === 'en' ? 'Advisor tip' : 'Conseil du courtier';

    var tip = document.createElement('span');
    tip.id = 'energyDetailTip';

    textWrap.appendChild(label);
    textWrap.appendChild(tip);
    wrap.appendChild(icon);
    wrap.appendChild(textWrap);

    host.insertBefore(wrap, grid);
  }

  function createCtaButton() {
    var host = document.getElementById('energyDetail') || document.querySelector('.energy-chart__card');
    if (!host || document.getElementById('energyCtaAlert')) return;

    var btn = document.createElement('a');
    btn.id = 'energyCtaAlert';
    btn.className = 'energy-cta-alert';
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.setAttribute('role', 'button');

    var dot = document.createElement('span');
    dot.className = 'energy-cta-alert__dot';
    dot.setAttribute('aria-hidden', 'true');

    var text = document.createElement('span');
    text.id = 'energyCtaAlertText';

    btn.appendChild(dot);
    btn.appendChild(text);

    host.parentNode.insertBefore(btn, host.nextSibling);
    updateCtaButton();
  }

  function updateCtaButton() {
    var btn = document.getElementById('energyCtaAlert');
    var text = document.getElementById('energyCtaAlertText');
    if (!btn || !text) return;

    text.textContent = CTA_TEXT[chartLang] || CTA_TEXT.fr;
    btn.href = 'https://wa.me/33762331210?text=' + encodeURIComponent(WHATSAPP_MESSAGE[chartLang] || WHATSAPP_MESSAGE.fr);
  }

  /* =====================================================
     11) ÉVÉNEMENTS
     ===================================================== */

  document.querySelectorAll('.energy-filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setActiveSeries(btn.getAttribute('data-series'));
    });
  });

  /* =====================================================
     12) BASCULE DE LANGUE (appelée depuis script.js)
     ===================================================== */

  function setChartLanguage(lang) {
    chartLang = (lang === 'en') ? 'en' : 'fr';
    chart.data = buildChartData(activeSeries);
    chart.update();
    updateStats();
    renderMilestoneChips();
    renderDetail();
    updateCtaButton();
    var tipLabel = document.getElementById('energyDetailTipLabel');
    if (tipLabel) tipLabel.textContent = chartLang === 'en' ? 'Advisor tip' : 'Conseil du courtier';
  }

  window.setEnergyChartLanguage = setChartLanguage;

  /* =====================================================
     13) INITIALISATION
     ===================================================== */

  injectCtaStyles();
  injectAdvisorTip();
  updateStats();
  renderMilestoneChips();
  renderDetail();
  createCtaButton();
});