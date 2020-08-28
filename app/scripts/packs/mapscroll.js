import 'intersection-observer';
import scrollama from 'scrollama'; // or...
var config = {
  style: 'mapbox://styles/stephadeline/ckcehbxzy0xrs1io40zhrwwd7/draft',
  accessToken:
    'pk.eyJ1Ijoic3RlcGhhZGVsaW5lIiwiYSI6ImNrY2U4a3Q0cDA1dXUzN281ZzRuanB0MmIifQ.KshV869EVdqe2C-Ifyb9qg',
  showMarkers: false,
  theme: 'dark',
  alignment: 'right',
  title: 'HABITAT PESUT DAN ANCAMANNYA',
  subtitle: '',
  byline: '',
  footer: '',
  chapters: [
    {
      id: 'both-intro',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'Pesut di Kalimantan Timur adalah penghuni tetap di dua perairan: Teluk Balikpapan dan Sungai Mahakam.',
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
      title: 'Teluk Balikpapan',
      description:
        'Luas perairan Teluk Balikpapan ditaksir 160 kilometer persegi. Lebar teluk kurang lebih tujuh kilometer dan garis pantainya dipenuhi tanaman bakau.',
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
        'Menurut riset <a href="https://www.ykrasi.org/">Yayasan Konservasi Rare Aquatic Species of Indonesia (RASI)</a> terdapat empat satwa mamalia air, buaya, dan penyu yang mendiami perairan itu.',
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
        '"Dari empat jenis ini yang paling umum ditemukan yakni lumba-lumba Irrawaddy atau pesut laut dengan jumlah populasi sekitar 71 ekor pada 2015," ungkap Peneliti RASI, Danielle Kreb. <br/><br/>Danielle mengatakan RASI meriset temuan tersebut menggunakan metode foto identifikasi sirip punggung.',
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
      title: 'Migrasi dari hilir ke hulu',
      // image: './path/to/image/source.png',
      description:
        'Sejak 2000 hingga 2001, pesut yang mendiami bagian hilir teluk mulai bermigrasi ke hulu karena ancaman habitat.<br/><br/>Apa saja ancamannya?',
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
      title: 'Aktivitas Industri',
      // image: './path/to/image/source.png',
      description:
        'Sekitar 20 tahun silam, perusahaan kayu dan batu bara mulai beroperasi di sekitar Teluk Balikpapan. Aktivitas industri menyebabkan lalu lintas kapal ponton batu bara dan kapal tanker minyak semakin tinggi.<br/><br/>Lalu lintas kapal-kapal tersebut menimbulkan polusi suara yang mengganggu sistem navigasi pesut yang menggunakan sonar. Tak jarang pesut juga rawan tertabrak kapal.',
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
        'Data <a href="https://www.marinetraffic.com/">MarineTraffic</a>, dari Juni 2019 hingga Juli 2020, ada lebih dari 350.000 kapal yang lalu lalang di area Teluk Balikpapan. Lebih dari 35 persen adalah kapal yang dikategorikan kapal tanker atau kapal kargo, yang panjangnya bisa mencapai 200 meter.<br/><br/>“Intensitas lalu lintas di Teluk Balikpapan itu jadi ancaman terbesar pesut,” ujar Koordinator TPI Klandasan, Dinas Pangan Pertanian dan Perikanan (DP3) Balikpapan, Hery Seputro saat dihubungi Kamis (6/8/2020).',
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
      id: 'section-4',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'Sebab di Teluk Balikpapan, semua alur dari lokal sampai internasional melintasi perairan itu, yakni dari nelayan lokal, akses antar wilayah, hingga bongkar muat batu bara dan minyak dengan kapal-kapal asing. “Ditambah lagi rencana ibu kota negara nanti. Lalu lintas lautnya kalau enggak diatasi benar-benar, bakal bahaya semua biota laut,” tutur Hery.',
      location: {
        center: [116.84909, -1.14256],
        zoom: 9.5,
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
    {
      id: 'section-4a',
      title: '',
      // image: './path/to/image/source.png',
      description:
        'Salah satu contoh akibat aktivitas industri adalah bencana tumpahan minyak pada 31 Maret 2018 yang mengancam seluruh penghuni teluk, termasuk pesut. <a href="https://spbn.pusfatja.lapan.go.id/people/profile/minyak_tumpah/?limit=100&offset=0">Pantauan satelit LAPAN</a> mengungkap luas tumpahan minyak lebih dari 20.000 hektar.',
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
      title: 'Ancaman Baru: Pemindahan Ibukota Negara',
      // image: './path/to/image/source.png',
      description:
        'Ibukota baru bakal terbagi menjadi tiga ring cakupan wilayah, dengan area keseluruhan mencakup lebih dari <a href="https://twitter.com/BappenasRI/status/1222009308310728706/photo/1">250 hektar</a>. Lokasi IKN sangat dekat dengan habitat pesut dan akan menjadi ancaman baru bagi pesut di Teluk.',
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
      title: 'Sungai Mahakam',
      // image: './path/to/image/source.png',
      description:
        'Di Sungai Mahakam, diperkirakan ada sekitar 80 ekor pesut, berdasarkan data RASI. Yayasan RASI melakukan survei ke perairan Mahakam setiap tahunnya, dan pada tahun 2018-2019, pesut ditemukan di titik-titik ini.<br/><br/>Temuan lain, kata Danielle, pesut yang berada di Teluk Balikpapan tak sama dengan pesut yang mendiami Sungai Mahakam berdasarkan analisis DNA, meski kedua jenis ini merupakan saudara dekat.',
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
        'Namun sayangnya, sejak 1995 hingga Juni 2019, sudah ada 103 ekor pesut yang mati, dengan rata-rata kematian 4 ekor setiap tahunnya.<br/><br/>Ancaman bagi pesut di sungai Mahakam salah satunya adalah pencemaran logam berat di perairan, serta kapal ponton batu bara yang lalu lalang di sungai.',
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
