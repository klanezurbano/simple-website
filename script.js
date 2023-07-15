import 'bootstrap';

const trList = document.getElementById('tr-list');

const studentList = [
  {
    portfolio: {
      title: "Alba, John Ernelle Concepcion",
      link: "https://ernellealba.github.io/",
      classes: "",
    },
    project1: {
      title: "Cuppa Joy Milktea",
      link: "https://ernellealba.github.io/Cuppa-Joy-Milktea/",
      classes: "",
    },
    project2: {
      title: "Group 9: Anime Connect",
      link: "https://github.com/ErnelleAlba/Anime-Connect/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Alcala, Jowanuss Mico Marco Mabiya",
      link: "https://micoalcala.github.io/",
      classes: "",
    },
    project1: {
      title: "Wing Airlines",
      link: "https://micoalcala.github.io/Wing-Airlines-Company/",
      classes: "",
    },
    project2: {
      title: "Group 10: Super Search Universe",
      link: "https://github.com/MicoAlcala/SuperSearch_Universe/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Bandoles, Jodymendo Escultor",
      link: "https://jodymendobandoles.github.io/",
      classes: "",
    },
    project1: {
      title: "BuildMeUp",
      link: "https://jodymendobandoles.github.io/BuildMeUp/",
      classes: "",
    },
    project2: {
      title: "Group 3: Global Trivia",
      link: "https://github.com/GerwinBG/GlobalTrivia/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Tic-Tac-Toe",
        link: "https://jodymendobandoles.github.io/Tic-Tac-Toe/",
      }
    ]
  },
  {
    portfolio: {
      title: "Banez, Ederick Salceda",
      link: "https://esbanez.github.io/",
      classes: "",
    },
    project1: {
      title: "Interior Furniture Banez",
      link: "https://esbanez.github.io/Interior-furniture-Banez/",
      classes: "",
    },
    project2: {
      title: "Group 9: Anime Connect",
      link: "https://github.com/ErnelleAlba/Anime-Connect/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Catbagan, Gisel Jean Agang",
      link: "https://giseljeancatbagan.github.io/",
      classes: "",
    },
    project1: {
      title: "Maxsof",
      link: "https://giseljeancatbagan.github.io/maxsof/",
      classes: "",
    },
    project2: {
      title: "Group 8: Brainiac Clash",
      link: "https://github.com/NikkiZapuiz/Brainiac-Clash/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Consignado, Dominic Ilano",
      link: "https://nickconsignado.github.io/",
      classes: "",
    },
    project1: {
      title: "Redwall Chinese Cuisine",
      link: "https://nickconsignado.github.io/Redwall-Chinese-Cuisine/",
      classes: "",
    },
    project2: {
      title: "Group 6: Rapid Jobs Board",
      link: "https://github.com/NickConsignado/Rapid-Jobs-Board-Germany/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Music Player",
        link: "https://nickconsignado.github.io/my-player/",
      }
    ]
  },
  {
    portfolio: {
      title: "Elmido, Kier Miguel Dayawon",
      link: "https://kiermiguel2020.github.io/",
      classes: "table-warning",
    },
    project1: {
      title: "Raked Store Repair Service",
      link: "https://kiermiguel2020.github.io/raked-store-repair-service/",
      classes: "",
    },
    project2: {
      title: "Group 12: ShopSavvy",
      link: "https://github.com/AlvinQuizon/ShopSavvy/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Feliciano, Roldan E",
      link: "https://felicianoroldan.github.io/",
      classes: "",
    },
    project1: {
      title: "SteadFastness",
      link: "https://felicianoroldan.github.io/SteadFastness/",
      classes: "",
    },
    project2: {
      title: "Group 7: Exploredia",
      link: "https://github.com/RiyaVillamor/Exploredia/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Fuentes, Tynneth Jhoel",
      link: "https://tjfuentes.github.io/",
      classes: "",
    },
    project1: {
      title: "Color Hue Prints",
      link: "https://tjfuentes.github.io/color-hue-prints/",
      classes: "",
    },
    project2: {
      title: "Group 5: F2P Games",
      link: "https://github.com/GalePerez/F2PGames/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Tic-Tac-Toe",
        link: "https://tjfuentes.github.io/tic-tac-toe/",
      }
    ]
  },
  {
    portfolio: {
      title: "Gindoy, Gerwin Beley",
      link: "https://gerwinbg.github.io/",
      classes: "",
    },
    project1: {
      title: "Eyog Dental",
      link: "https://gerwinbg.github.io/eyog-dental/",
      classes: "",
    },
    project2: {
      title: "Group 3: Global Trivia",
      link: "https://github.com/GerwinBG/GlobalTrivia/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "To Do List",
        link: "https://gerwinbg.github.io/to-do-list/",
      }
    ]
  },
  {
    portfolio: {
      title: "Lynch, Christine Elaine Estolano",
      link: "https://elainelynch.github.io/",
      classes: "",
    },
    project1: {
      title: "Blizzard Tech Services",
      link: "https://elainelynch.github.io/blizzard-tech-services/",
      classes: "",
    },
    project2: {
      title: "Group 1: The Linguist",
      link: "https://github.com/elainelynch/thelinguist/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Malaguia, April Jay Dablo",
      link: "https://malaguiaajay.github.io/",
      classes: "",
    },
    project1: {
      title: "Kuya Rey's Foodhouse",
      link: "https://malaguiaajay.github.io/Kuya-Rey-foodhouse/",
      classes: "",
    },
    project2: {
      title: "Group 6: Rapid Jobs Board",
      link: "https://github.com/NickConsignado/Rapid-Jobs-Board-Germany/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Invoice Slip App",
        link: "https://malaguiaajay.github.io/simple-invoice-slip/",
      }
    ]
  },
  {
    portfolio: {
      title: "Marin, Matthew Rich Francisco",
      link: "https://matthewmarin.github.io/",
      classes: "",
    },
    project1: {
      title: "CapMedia Creatives",
      link: "https://matthewmarin.github.io/CapMedia-Creatives/",
      classes: "",
    },
    project2: {
      title: "Group 2: Cinehub",
      link: "https://github.com/matthewmarin/Cinehub/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Rock Paper Scissors Game",
        link: "https://matthewmarin.github.io/Rock-Paper-Scissor/",
      }, {
        title: "Tic-Tac-Toe",
        link: "https://matthewmarin.github.io/TicTacToe/",
      }
    ]
  },
  {
    portfolio: {
      title: "Muti, Daniah Batugan",
      link: "https://daniah-muti.github.io/",
      classes: "",
    },
    project1: {
      title: "HAQQu",
      link: "https://daniah-muti.github.io/HAQQu/",
      classes: "",
    },
    project2: {
      title: "Group 4: Kairos",
      link: "https://github.com/LymarPaller/kairos-weatherapp/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Ong, Mark Anthony Martirez",
      link: "https://ongmarkanthony.github.io/",
      classes: "table-warning",
    },
    project1: {
      title: "Gourmet Delights",
      link: "https://ongmarkanthony.github.io/delight-gourmet/",
      classes: "",
    },
    project2: {
      title: "Group 11: Meet Kristine!",
      link: "https://github.com/ongmarkanthony/meetKristine/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Information Form",
        link: "https://github.com/ongmarkanthony/simpleApp",
        classes: "table-warning",
      }
    ]
  },
  {
    portfolio: {
      title: "Paller, Lymar Paul Alib",
      link: "https://lymarpaller.github.io/",
      classes: "",
    },
    project1: {
      title: "By.Olivia",
      link: "https://lymarpaller.github.io/by.olivia/",
      classes: "",
    },
    project2: {
      title: "Group 4: Kairos",
      link: "https://github.com/LymarPaller/kairos-weatherapp/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Vowel Counter",
        link: "https://lymarpaller.github.io/vowel.counter/",
      }
    ]
  },
  {
    portfolio: {
      title: "Perez, Jeimyre Gale Lobingco",
      link: "https://galeperez.github.io/",
      classes: "",
    },
    project1: {
      title: "Aurora Studios",
      link: "https://galeperez.github.io/aurora-studios/",
      classes: "",
    },
    project2: {
      title: "Group 5: F2P Games",
      link: "https://github.com/GalePerez/F2PGames/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Tic-Tac-Toe",
        link: "https://galeperez.github.io/tictactoe/",
      }
    ]
  },
  {
    portfolio: {
      title: "Quizon, Alvin Tongol",
      link: "https://alvinquizon.github.io/",
      classes: "",
    },
    project1: {
      title: "Mad Baker",
      link: "https://alvinquizon.github.io/Mad-Baker/",
      classes: "",
    },
    project2: {
      title: "Group 12: ShopSavvy",
      link: "https://github.com/AlvinQuizon/ShopSavvy/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Regua, Rey John Christian Gimena",
      link: "https://reyjohnregua.github.io/",
      classes: "",
    },
    project1: {
      title: "Kathys BW",
      link: "https://reyjohnregua.github.io/kathys-bw/",
      classes: "",
    },
    project2: {
      title: "Group 2: Cinehub",
      link: "https://github.com/matthewmarin/Cinehub/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Relativo, Ryan Alcantara",
      link: "https://ryanrelativo.github.io/",
      classes: "table-warning",
    },
    project1: {
      title: "Shamrock",
      link: "https://ryanrelativo.github.io/Shamrock-ESL/",
      classes: "",
    },
    project2: {
      title: "Group 10: Super Search Universe",
      link: "https://github.com/MicoAlcala/SuperSearch_Universe/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Rubio, Maricar Laquian",
      link: "https://maricarrubio.github.io/",
      classes: "",
    },
    project1: {
      title: "Victoria Bay Resort",
      link: "https://maricarrubio.github.io/victoriabayresort/",
      classes: "",
    },
    project2: {
      title: "Group 1: The Linguist",
      link: "https://github.com/elainelynch/thelinguist/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Seneres, Mark Dave Sarauso",
      link: "https://markseneres.github.io/",
      classes: "",
    },
    project1: {
      title: "Tasty Bites",
      link: "https://markseneres.github.io/TastyBites/",
      classes: "",
    },
    project2: {
      title: "Group 11: Meet Kristine!",
      link: "https://github.com/ongmarkanthony/meetKristine/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Villamor, Mariya Venturina",
      link: "https://riyavillamor.github.io/",
      classes: "",
    },
    project1: {
      title: "Cuisina",
      link: "https://riyavillamor.github.io/Cuisina/",
      classes: "",
    },
    project2: {
      title: "Group 7: Exploredia",
      link: "https://github.com/RiyaVillamor/Exploredia/commits/main",
      classes: "",
    },
    otherApps: []
  },
  {
    portfolio: {
      title: "Zapuiz, Ma Nikki Panal",
      link: "https://nikkizapuiz.github.io/",
      classes: "",
    },
    project1: {
      title: "Chasing Umami",
      link: "https://nikkizapuiz.github.io/Chasing-Umami/",
      classes: "",
    },
    project2: {
      title: "Group 8: Brainiac Clash",
      link: "https://github.com/NikkiZapuiz/Brainiac-Clash/commits/main",
      classes: "",
    },
    otherApps: [
      {
        title: "Knowledge Check",
        link: "https://nikkizapuiz.github.io/simpleApp/",
      }, {
        title: "Tic-Tac-Toe",
        link: "https://nikkizapuiz.github.io/TicTacToe/",
      }
    ]
  },
  // {
  //   portfolio: {
  //     title: "studentName",
  //     link: "portfolio",
  //     classes: "table-warning",
  //   },
  //   project1: {
  //     title: "title",
  //     link: "link",
  //     classes: "",
  //   },
  //   otherApps: [
  //     {
  //       title: "title",
  //       link: "link",
  //     }
  //   ]
  // }
];

for (let student of studentList) {
  const otherAppsList = document.createElement('td');
  otherAppsList.classList.add('text-center');

  for (let i=0; i<student.otherApps.length; i++) {
    if (i !== 0) {
      otherAppsList.appendChild(document.createElement('br'));
    }

    const linkElement = document.createElement('a');
    linkElement.href = student.otherApps[i].link;
    linkElement.textContent = student.otherApps[i].title;

    otherAppsList.appendChild(linkElement);
  }

  const trElement = document.createElement('tr');
  trElement.innerHTML = `
    <tr>
      <td class="${student.portfolio.classes}"><a href="${student.portfolio.link}">${student.portfolio.title}</a></td>
      <td class="text-center ${student.project1.classes}"><a href="${student.project1.link}">${student.project1.title}</a></td>
      <td class="text-center ${student.project2.classes}"><a href="${student.project2.link}">${student.project2.title}</a></td>
      ${otherAppsList.outerHTML}
    </tr>
  `;

  trList.appendChild(trElement);
}