import 'intersection-observer';
import scrollama from 'scrollama'; // or...
var config = {
  style: 'mapbox://styles/stephadeline/ckcehbxzy0xrs1io40zhrwwd7/draft',
  accessToken:
    'pk.eyJ1Ijoic3RlcGhhZGVsaW5lIiwiYSI6ImNrY2U4a3Q0cDA1dXUzN281ZzRuanB0MmIifQ.KshV869EVdqe2C-Ifyb9qg',
  showMarkers: false,
  theme: 'dark',
  alignment: 'right',
  title: 'Threats to the Irawaddy Dolphin Population',
  subtitle: '',
  byline: '',
  footer: '',
  chapters: [
    {
      id: 'both-intro',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'Irrawaddy dolphins in East Kalimantan inhabit two large waters: Balikpapan Bay and Mahakam River.',
      location: {
        center: [116.84909, -0.8],
        zoom: 8,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'telukbppnew',
          opacity: 1,
        },
        {
          layer: 'mahakamair',
          opacity: 1,
        },
        {
          layer: 'mahakam1819',
          opacity: 0,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'telukbppnew',
          opacity: 0,
        },
        {
          layer: 'mahakamair',
          opacity: 0,
        },
      ],
    },
    {
      id: 'section-intro',
      title: 'Balikpapan Bay',
      description:
        'Balikpapan Bay occupies an area that spans out over 160 square kilometers. Tobacco plants inhabit its coastline.',
      location: {
        center: [116.84909, -1.14256],
        zoom: 9,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'mahakam1819',
          opacity: 0,
        },
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'telukbppnew',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'telukbppnew',
          opacity: 0,
        },
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
      ],
    },
    {
      id: 'section-1',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'According to research done by the conservation organization <a href="https://www.ykrasi.org/">Rare Aquatic Species of Indonesia (RASI)</a>, four species of marine mammals -- the Irrawaddy dolphin, bottle-nose dolphin, finless porpoise and dugong -- as well as crocodiles and turtles call Balikpapan Bay home.',
      svg: true,
      location: {
        center: [116.84909, -1.14256],
        zoom: 9,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'allbpp',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'allbpp',
          opacity: 0,
        },
      ],
    },
    {
      id: 'section-1a',
      title: '',
      // image: './path/to/image/source.png',
      description:
        '“Of the four species of marine mammals, the most prominent is the Irrawaddy dolphin, with a total population of 71 in 2015,” RASI researcher Danielle Kreb said.',
      location: {
        center: [116.84909, -1.14256],
        zoom: 9.98,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
      ],
    },
    {
      id: 'section-2',
      title: 'Migration from downstream to upstream',
      // image: './path/to/image/source.png',
      description:
        'Starting in 2000-2001, however, Irrawaddy dolphins that inhabited the downstream area of the bay have migrated to the river source due to threats to its habitat.<br/><br/>One of the biggest threats is ship traffic.',
      svg: true,
      location: {
        center: [116.84909, -1.14256],
        zoom: 9.98,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },

        {
          layer: 'orcaella-2001',
          opacity: 1,
        },
        {
          layer: 'orcaella-2008',
          opacity: 1,
        },
        {
          layer: 'orcaella-2011',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'orcaella-2001',
          opacity: 0,
        },
        {
          layer: 'orcaella-2008',
          opacity: 0,
        },
        {
          layer: 'orcaella-2011',
          opacity: 0,
        },
      ],
    },
    {
      id: 'section-3',
      title: 'Threats from industrial expansion',
      // image: './path/to/image/source.png',
      description:
        'About 20 years ago, wood and coal companies started operating around Balikpapan Bay, increasing industrial activity and traffic of coal pontoons and oil tankers.<br/><br/> Those ships cause noise pollution, which disrupts the navigation of Irrawaddy dolphins who rely on sonar systems to know where they’re going. It is not uncommon for Irrawaddy dolphins to crash into ships.',
      location: {
        center: [116.84909, -1.14256],
        zoom: 9,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 1,
        },
      ],
    },
    {
      id: 'section-3a',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'According to data from <a href="https://www.marinetraffic.com/">MarineTraffic</a>, a global ship tracking company, more than 350,000 ships passed through the Balikpapan Bay area between June 2019 and July 2020. More than 35 percent of that traffic was from vessels categorized as tankers or cargo ships, whose lengths reach 200 meters. <br/><br/>“The intensity of the traffic in Balikpapan Bay is the biggest threat to the Irrawaddy dolphin,” said Hery Seputro, said Hery Seputro, a coordinator for the Agency for Food, Agriculture and Fishery in Klandasan, Balikpapan',
      location: {
        center: [116.84909, -1.14256],
        zoom: 9,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 1,
        },
        {
          layer: 'tumpahanbppall',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 1,
        },
      ],
    },
    // {
    //   id: 'section-4',
    //   title: '',
    //   // image: './path/to/image/source.png',
    //   description:
    //     'Sebab di Teluk Balikpapan, semua alur dari lokal sampai internasional melintasi perairan itu, yakni dari nelayan lokal, akses antar wilayah, hingga bongkar muat batu bara dan minyak dengan kapal-kapal asing. “Ditambah lagi rencana ibu kota negara nanti. Lalu lintas lautnya kalau enggak diatasi benar-benar, bakal bahaya semua biota laut,” tutur Hery.',
    //   location: {
    //     center: [116.84909, -1.14256],
    //     zoom: 9.5,
    //     pitch: 0,
    //     bearing: 0.0,
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: 'pesut-teluk-bpp-2015',
    //       opacity: 1,
    //     },
    //     {
    //       layer: 'titikkapal',
    //       opacity: 1,
    //     },
    //     {
    //       layer: 'tumpahanbppall',
    //       opacity: 0,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: 'pesut-teluk-bpp-2015',
    //       opacity: 1,
    //     },
    //     {
    //       layer: 'titikkapal',
    //       opacity: 1,
    //     },
    //   ],
    // },
    {
      id: 'section-4a',
      title: 'Oil spill',
      // image: './path/to/image/source.png',
      description:
        'The PT Pertamina oil spill that occurred  tragedy that happened on March 31, 2018, threatenedin Balikpapan was a threat to the entire Balikpapan Bay ecosystem.<br/><br/>The oil spread across around 20,000 hectares of water in the bay, according to satellite data from <a href="https://spbn.pusfatja.lapan.go.id/people/profile/minyak_tumpah/?limit=100&offset=0">LAPAN</a>.',
      svg: true,
      location: {
        center: [116.84909, -1.14256],
        zoom: 9.5,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'tumpahanbppall',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'tumpahanbppall',
          opacity: 1,
        },
      ],
    },
    {
      id: 'section-5a',
      title: "Indonesia's new capital: a new threat",
      // image: './path/to/image/source.png',
      description:
        'Indonesia’s new capital will cover an area of <a href="https://twitter.com/BappenasRI/status/1222009308310728706/photo/1">more than 250 hectares</a> very close to Irrawaddy dolphin habitats, which poses a new threat to the dolphin population in the Balikpapan Bay due to its proximity.',
      svg: true,
      location: {
        center: [116.9, -1],
        zoom: 9,
        pitch: 0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'ikn',
          opacity: 1,
        },
        {
          layer: 'titikkapal',
          opacity: 0,
        },
        {
          layer: 'tumpahanbppall',
          opacity: 0,
        },
        {
          layer: 'labels',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 1,
        },
        {
          layer: 'ikn',
          opacity: 0,
        },
      ],
    },
    {
      id: 'mahakam-1',
      title: 'Mahakam River',
      // image: './path/to/image/source.png',
      description:
        'The Mahakam River is home to around 80 Irrawaddy dolphins, based on data from RASI collected in 2018-2019.  Kreb also found based on DNA analysis that despite their similarities, Irrawaddy dolphins in the Balikpapan Bay are not the same as those that live on the Mahakam River.',
      location: {
        center: [116.3991, -0.10803],
        zoom: 7.88,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'mahakam1819',
          opacity: 1,
        },
        {
          layer: 'mahakamair',
          opacity: 0,
        },
        {
          layer: 'batas',
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'mahakam1819',
          opacity: 0,
        },
        {
          layer: 'batas',
          opacity: 0,
        },
      ],
    },
    {
      id: 'mahakam-2',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'Between 1995 and June 2019, 103 Irrawaddy dolphins have been found dead in the river, with an average of 4 deaths recorded each year. The worst decline in the last 20 years was in 2018, when 11 dolphins were found dead. In 2019, the number of recorded deaths dropped to five.',
      location: {
        center: [116.2991, -0.10803],
        zoom: 8.44,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'mahakamair',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'pesut-teluk-bpp-2015',
          opacity: 0,
        },
        {
          layer: 'mahakam1819',
          opacity: 0,
        },
      ],
    },
  ],
};
///START SCRIPT

var layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
};

var alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty',
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function(prop) {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
  var titleText = document.createElement('h1');
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement('h2');
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement('p');
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement('div');
  var chapter = document.createElement('div');

  if (record.title) {
    var title = document.createElement('h3');
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement('p');
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  if (record.svg) {
    var svg = document.createElement('div');
    svg.setAttribute('id', 'svg-' + record.id);
    chapter.appendChild(svg);
  }
  if (record.chart) {
    var chart = document.createElement('div');
    chart.setAttribute('id', 'chart-' + record.id);
    chart.innerHTML +=
      '<object type="text/html" data="bubble-chart.html" ></object>';
    chapter.appendChild(chart);
  }

  container.setAttribute('id', record.id);
  container.classList.add('step');
  if (idx === 0) {
    container.classList.add('active');
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
  var footerText = document.createElement('p');
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute('id', 'footer');
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = url => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery
    ? '&pluginName=journalismScrollytelling'
    : '?pluginName=journalismScrollytelling';
  return {
    url: url + suffix,
  };
};

var map = new mapboxgl.Map({
  container: 'map-scrolly',
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  scrollZoom: false,
  transformRequest: transformRequest,
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on('load', function() {
  // setup the instance, pass callback functions
  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true,
    })
    .onStepEnter(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id
      );
      response.element.classList.add('active');
      map.flyTo(chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
    })
    .onStepExit(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id
      );
      response.element.classList.remove('active');
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);
