import  express  from "express"
import path from 'path'

const __dirname = path.resolve(path.dirname(''))

const app = express()
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, "public")))

const pokeObject = {
    "pokemon": [{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "details": "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [1.58],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "002",
        "name": "Ivysaur"
      }, {
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "details": "Quando o bulbo nas costas cresce, parece perder a capacidade de ficar em pé nas patas traseiras.",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.042,
      "avg_spawns": 4.2,
      "spawn_time": "07:00",
      "multipliers": [
        1.2,
        1.6
      ],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }],
      "next_evolution": [{
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "details": "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "candy": "Bulbasaur Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "11:30",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }, {
        "num": "002",
        "name": "Ivysaur"
      }]
    }, {
      "id": 4,
      "num": "004",
      "name": "Charmander",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      "type": [
        "Fogo"
      ],
      "details": "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
      "height": "0.61 m",
      "weight": "8.5 kg",
      "candy": "Charmander Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.253,
      "avg_spawns": 25.3,
      "spawn_time": "08:45",
      "multipliers": [1.65],
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "005",
        "name": "Charmeleon"
      }, {
        "num": "006",
        "name": "Charizard"
      }]
    }, {
      "id": 5,
      "num": "005",
      "name": "Charmeleon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      "type": [
        "Fogo"
      ],
      "details": "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e corta com garras afiadas.",
      "height": "1.09 m",
      "weight": "19.0 kg",
      "candy": "Charmander Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "19:00",
      "multipliers": [1.79],
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "004",
        "name": "Charmander"
      }],
      "next_evolution": [{
        "num": "006",
        "name": "Charizard"
      }]
    }, {
      "id": 6,
      "num": "006",
      "name": "Charizard",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      "type": [
        "Fogo",
        "Voador"
      ],
      "details": "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
      "height": "1.70 m",
      "weight": "90.5 kg",
      "candy": "Charmander Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "13:34",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "004",
        "name": "Charmander"
      }, {
        "num": "005",
        "name": "Charmeleon"
      }]
    }, {
      "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      "type": [
        "Água"
      ],
      "details": "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Squirtle Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.58,
      "avg_spawns": 58,
      "spawn_time": "04:25",
      "multipliers": [2.1],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "008",
        "name": "Wartortle"
      }, {
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 8,
      "num": "008",
      "name": "Wartortle",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      "type": [
        "Água"
      ],
      "details": "É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.",
      "height": "0.99 m",
      "weight": "22.5 kg",
      "candy": "Squirtle Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "07:02",
      "multipliers": [1.4],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }],
      "next_evolution": [{
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 9,
      "num": "009",
      "name": "Blastoise",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      "type": [
        "Água"
      ],
      "details": "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
      "height": "1.60 m",
      "weight": "85.5 kg",
      "candy": "Squirtle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "00:06",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }, {
        "num": "008",
        "name": "Wartortle"
      }]
    }, {
      "id": 10,
      "num": "010",
      "name": "Caterpie",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "type": [
        "Inseto"
      ],
      "details": "Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.",
      "height": "0.30 m",
      "weight": "2.9 kg",
      "candy": "Caterpie Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 3.032,
      "avg_spawns": 303.2,
      "spawn_time": "16:35",
      "multipliers": [1.05],
      "weaknesses": [
        "Fogo",
        "Voador",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "011",
        "name": "Metapod"
      }, {
        "num": "012",
        "name": "Butterfree"
      }]
    }, {
      "id": 11,
      "num": "011",
      "name": "Metapod",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      "type": [
        "Inseto"
      ],
      "details": "Está esperando o momento de evoluir. Nesta fase, ele só pode endurecer, por isso permanece imóvel para evitar ataques.",
      "height": "0.71 m",
      "weight": "9.9 kg",
      "candy": "Caterpie Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 0.187,
      "avg_spawns": 18.7,
      "spawn_time": "02:11",
      "multipliers": [
        3.55,
        3.79
      ],
      "weaknesses": [
        "Fogo",
        "Voador",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "010",
        "name": "Caterpie"
      }],
      "next_evolution": [{
        "num": "012",
        "name": "Butterfree"
      }]
    }, {
      "id": 12,
      "num": "012",
      "name": "Butterfree",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      "type": [
        "Inseto",
        "Voador"
      ],
      "details": "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.",
      "height": "1.09 m",
      "weight": "32.0 kg",
      "candy": "Caterpie Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:23",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Elétrico",
        "Gelo",
        "Voador",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "010",
        "name": "Caterpie"
      }, {
        "num": "011",
        "name": "Metapod"
      }]
    }, {
      "id": 13,
      "num": "013",
      "name": "Weedle",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
      "type": [
        "Inseto",
        "Venenoso"
      ],
      "details": "Cuidado com o ferrão afiado em sua cabeça. Esconde-se na grama e nos arbustos onde come folhas.",
      "height": "0.30 m",
      "weight": "3.2 kg",
      "candy": "Weedle Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 7.12,
      "avg_spawns": 712,
      "spawn_time": "02:21",
      "multipliers": [
        1.01,
        1.09
      ],
      "weaknesses": [
        "Fogo",
        "Voador",
        "Psíquico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "014",
        "name": "Kakuna"
      }, {
        "num": "015",
        "name": "Beedrill"
      }]
    }, {
      "id": 14,
      "num": "014",
      "name": "Kakuna",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "type": [
        "Inseto",
        "Venenoso"
      ],
      "details": "Capaz de se mover apenas ligeiramente. Quando em perigo, pode esticar seu ferrão e envenenar seu inimigo.",
      "height": "0.61 m",
      "weight": "10.0 kg",
      "candy": "Weedle Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 0.44,
      "avg_spawns": 44,
      "spawn_time": "02:30",
      "multipliers": [
        3.01,
        3.41
      ],
      "weaknesses": [
        "Fogo",
        "Voador",
        "Psíquico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "013",
        "name": "Weedle"
      }],
      "next_evolution": [{
        "num": "015",
        "name": "Beedrill"
      }]
    }, {
      "id": 15,
      "num": "015",
      "name": "Beedrill",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
      "type": [
        "Inseto",
        "Venenoso"
      ],
      "details": "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente.",
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Weedle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.051,
      "avg_spawns": 5.1,
      "spawn_time": "04:50",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Voador",
        "Psíquico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "013",
        "name": "Weedle"
      }, {
        "num": "014",
        "name": "Kakuna"
      }]
    }, {
      "id": 16,
      "num": "016",
      "name": "Pidgey",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.",
      "height": "0.30 m",
      "weight": "1.8 kg",
      "candy": "Pidgey Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 15.98,
      "avg_spawns": 1.598,
      "spawn_time": "01:34",
      "multipliers": [
        1.71,
        1.92
      ],
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "017",
        "name": "Pidgeotto"
      }, {
        "num": "018",
        "name": "Pidgeot"
      }]
    }, {
      "id": 17,
      "num": "017",
      "name": "Pidgeotto",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Este Pokémon é cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas.",
      "height": "1.09 m",
      "weight": "30.0 kg",
      "candy": "Pidgey Candy",
      "candy_count": 50,
      "egg": "Not in Eggs",
      "spawn_chance": 1.02,
      "avg_spawns": 102,
      "spawn_time": "01:30",
      "multipliers": [1.79],
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "016",
        "name": "Pidgey"
      }],
      "next_evolution": [{
        "num": "018",
        "name": "Pidgeot"
      }]
    }, {
      "id": 18,
      "num": "018",
      "name": "Pidgeot",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.",
      "height": "1.50 m",
      "weight": "39.5 kg",
      "candy": "Pidgey Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.13,
      "avg_spawns": 13,
      "spawn_time": "01:50",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "016",
        "name": "Pidgey"
      }, {
        "num": "017",
        "name": "Pidgeotto"
      }]
    }, {
      "id": 19,
      "num": "019",
      "name": "Rattata",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
      "type": [
        "Normal"
      ],
      "details": "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.",
      "height": "0.30 m",
      "weight": "3.5 kg",
      "candy": "Rattata Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 13.05,
      "avg_spawns": 1.305,
      "spawn_time": "01:55",
      "multipliers": [
        2.55,
        2.73
      ],
      "weaknesses": [
        "Lutador"
      ],
      "next_evolution": [{
        "num": "020",
        "name": "Raticate"
      }]
    }, {
      "id": 20,
      "num": "020",
      "name": "Raticate",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
      "type": [
        "Normal"
      ],
      "details": "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.",
      "height": "0.71 m",
      "weight": "18.5 kg",
      "candy": "Rattata Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.41,
      "avg_spawns": 41,
      "spawn_time": "01:56",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ],
      "prev_evolution": [{
        "num": "019",
        "name": "Rattata"
      }]
    }, {
      "id": 21,
      "num": "021",
      "name": "Spearow",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Inepto para voar alto. No entanto, ele pode voar muito rápido para proteger seu território.",
      "height": "0.30 m",
      "weight": "2.0 kg",
      "candy": "Spearow Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 4.73,
      "avg_spawns": 473,
      "spawn_time": "12:25",
      "multipliers": [
        2.66,
        2.68
      ],
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "022",
        "name": "Fearow"
      }]
    }, {
      "id": 22,
      "num": "022",
      "name": "Fearow",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Um Pokémon que remonta a muitos anos. Se ele sentir o perigo, ele voa alto e para longe, instantaneamente.",
      "height": "1.19 m",
      "weight": "38.0 kg",
      "candy": "Spearow Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.15,
      "avg_spawns": 15,
      "spawn_time": "01:11",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "021",
        "name": "Spearow"
      }]
    }, {
      "id": 23,
      "num": "023",
      "name": "Ekans",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
      "type": [
        "Venenoso"
      ],
      "details": "Quanto mais velho fica, mais cresce. À noite, ele envolve seu corpo comprido em galhos de árvores para descansar.",
      "height": "2.01 m",
      "weight": "6.9 kg",
      "candy": "Ekans Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.27,
      "avg_spawns": 227,
      "spawn_time": "12:20",
      "multipliers": [
        2.21,
        2.27
      ],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "024",
        "name": "Arbok"
      }]
    }, {
      "id": 24,
      "num": "024",
      "name": "Arbok",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
      "type": [
        "Venenoso"
      ],
      "details": "Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.",
      "height": "3.51 m",
      "weight": "65.0 kg",
      "candy": "Ekans Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "01:50",
      "multipliers": null,
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "023",
        "name": "Ekans"
      }]
    }, {
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      "type": [
        "Elétrico"
      ],
      "details": "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
      "height": "0.41 m",
      "weight": "6.0 kg",
      "candy": "Pikachu Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.21,
      "avg_spawns": 21,
      "spawn_time": "04:00",
      "multipliers": [2.34],
      "weaknesses": [
        "Terra"
      ],
      "next_evolution": [{
        "num": "026",
        "name": "Raichu"
      }]
    }, {
      "id": 26,
      "num": "026",
      "name": "Raichu",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      "type": [
        "Elétrico"
      ],
      "details": "Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão.",
      "height": "0.79 m",
      "weight": "30.0 kg",
      "candy": "Pikachu Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0076,
      "avg_spawns": 0.76,
      "spawn_time": "23:58",
      "multipliers": null,
      "weaknesses": [
        "Terra"
      ],
      "prev_evolution": [{
        "num": "025",
        "name": "Pikachu"
      }]
    }, {
      "id": 27,
      "num": "027",
      "name": "Sandshrew",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
      "type": [
        "Terra"
      ],
      "details": "Adora tomar banho na areia das áreas secas e arenosas. Ao tomar banho de areia, o Pokémon se livra da sujeira e da umidade que se agarram ao seu corpo.",
      "height": "0.61 m",
      "weight": "12.0 kg",
      "candy": "Sandshrew Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.11,
      "avg_spawns": 111,
      "spawn_time": "01:58",
      "multipliers": [2.45],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "next_evolution": [{
        "num": "028",
        "name": "Sandslash"
      }]
    }, {
      "id": 28,
      "num": "028",
      "name": "Sandslash",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
      "type": [
        "Terra"
      ],
      "details": "Quanto mais seca a área onde Sandslash vive, mais duros e suaves os espinhos do Pokémon se sentirão quando tocados.",
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Sandshrew Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.037,
      "avg_spawns": 3.7,
      "spawn_time": "12:34",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "prev_evolution": [{
        "num": "027",
        "name": "Sandshrew"
      }]
    }, {
      "id": 29,
      "num": "029",
      "name": "Nidoran (Female)",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
      "type": [
        "Venenoso"
      ],
      "details": "As fêmeas são mais sensíveis aos cheiros do que os machos. Enquanto forrageiam, eles usam seus bigodes para verificar a direção do vento e ficar a favor do vento dos predadores.",
      "height": "0.41 m",
      "weight": "7.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.38,
      "avg_spawns": 138,
      "spawn_time": "01:51",
      "multipliers": [
        1.63,
        2.48
      ],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "030",
        "name": "Nidorina"
      }, {
        "num": "031",
        "name": "Nidoqueen"
      }]
    }, {
      "id": 30,
      "num": "030",
      "name": "Nidorina",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
      "type": [
        "Venenoso"
      ],
      "details": "O chifre em sua cabeça está atrofiado. Acredita-se que isso aconteça para que os filhos de Nidorina não sejam picados enquanto a mãe os alimenta.",
      "height": "0.79 m",
      "weight": "20.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.088,
      "avg_spawns": 8.8,
      "spawn_time": "07:22",
      "multipliers": [
        1.83,
        2.48
      ],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "029",
        "name": "Nidoran(Female)"
      }],
      "next_evolution": [{
        "num": "031",
        "name": "Nidoqueen"
      }]
    }, {
      "id": 31,
      "num": "031",
      "name": "Nidoqueen",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
      "type": [
        "Venenoso",
        "Terra"
      ],
      "details": "Nidoqueen é melhor na defesa do que no ataque. Com escamas como armaduras, este Pokémon protegerá seus filhos de qualquer tipo de ataque.",
      "height": "1.30 m",
      "weight": "60.0 kg",
      "candy": "Nidoran ♀ (Female) Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "12:35",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Gelo",
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "029",
        "name": "Nidoran(Female)"
      }, {
        "num": "030",
        "name": "Nidorina"
      }]
    }, {
      "id": 32,
      "num": "032",
      "name": "Nidoran (Male)",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
      "type": [
        "Venenoso"
      ],
      "details": "O chifre na testa de um Nidoran macho contém um poderoso veneno. Este é um Pokémon muito cauteloso, sempre esticando suas orelhas grandes.",
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.31,
      "avg_spawns": 131,
      "spawn_time": "01:12",
      "multipliers": [
        1.64,
        1.7
      ],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "033",
        "name": "Nidorino"
      }, {
        "num": "034",
        "name": "Nidoking"
      }]
    }, {
      "id": 33,
      "num": "033",
      "name": "Nidorino",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
      "type": [
        "Venenoso"
      ],
      "details": "Com um chifre que é mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura por uma pedra da lua.",
      "height": "0.89 m",
      "weight": "19.5 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.083,
      "avg_spawns": 8.3,
      "spawn_time": "09:02",
      "multipliers": [1.83],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "032",
        "name": "Nidoran(Male)"
      }],
      "next_evolution": [{
        "num": "034",
        "name": "Nidoking"
      }]
    }, {
      "id": 34,
      "num": "034",
      "name": "Nidoking",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
      "type": [
        "Venenoso",
        "Terra"
      ],
      "details": "Quando está em fúria, é impossível controlar. Mas na presença de uma Nidoqueen com quem conviveu por muito tempo, Nidoking se acalma.",
      "height": "1.40 m",
      "weight": "62.0 kg",
      "candy": "Nidoran ♂ (Male) Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "12:16",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Gelo",
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "032",
        "name": "Nidoran(Male)"
      }, {
        "num": "033",
        "name": "Nidorino"
      }]
    }, {
      "id": 35,
      "num": "035",
      "name": "Clefa",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
      "type": [
        "Normal"
      ],
      "details": "Diz-se que a felicidade virá para aqueles que virem uma reunião de Clefairy dançando sob a lua cheia.",
      "height": "0.61 m",
      "weight": "7.5 kg",
      "candy": "Clefairy Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "03:30",
      "multipliers": [
        2.03,
        2.14
      ],
      "weaknesses": [
        "Lutador"
      ],
      "next_evolution": [{
        "num": "036",
        "name": "Clefable"
      }]
    }, {
      "id": 36,
      "num": "036",
      "name": "Clefable",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
      "type": [
        "Normal"
      ],
      "details": "Um Pokémon fada tímido que raramente é visto, ele correrá e se esconderá no momento em que sentir as pessoas.",
      "height": "1.30 m",
      "weight": "40.0 kg",
      "candy": "Clefairy Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "03:29",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ],
      "prev_evolution": [{
        "num": "035",
        "name": "Clefairy"
      }]
    }, {
      "id": 37,
      "num": "037",
      "name": "Vulpix",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
      "type": [
        "Fogo"
      ],
      "details": "Enquanto jovem, tem seis caudas lindas. Quando cresce, várias novas caudas brotam.",
      "height": "0.61 m",
      "weight": "9.9 kg",
      "candy": "Vulpix Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "13:43",
      "multipliers": [
        2.74,
        2.81
      ],
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "038",
        "name": "Ninetales"
      }]
    }, {
      "id": 38,
      "num": "038",
      "name": "Ninetales",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      "type": [
        "Fogo"
      ],
      "details": "Diz-se que vive 1.000 anos, e cada uma de suas caudas é carregada com poderes sobrenaturais.",
      "height": "1.09 m",
      "weight": "19.9 kg",
      "candy": "Vulpix Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0077,
      "avg_spawns": 0.77,
      "spawn_time": "01:32",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "037",
        "name": "Vulpix"
      }]
    }, {
      "id": 39,
      "num": "039",
      "name": "Jigglypuff",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
      "type": [
        "Normal"
      ],
      "details": "Jigglypuff tem capacidade pulmonar de alto nível, mesmo em comparação com outros Pokémon. Ele não vai parar de cantar suas canções de ninar até que seus inimigos adormeçam",
      "height": "0.51 m",
      "weight": "5.5 kg",
      "candy": "Jigglypuff Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 0.39,
      "avg_spawns": 39,
      "spawn_time": "08:46",
      "multipliers": [1.85],
      "weaknesses": [
        "Lutador"
      ],
      "next_evolution": [{
        "num": "040",
        "name": "Wigglytuff"
      }]
    }, {
      "id": 40,
      "num": "040",
      "name": "Wigglytuff",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
      "type": [
        "Normal"
      ],
      "details": "Quanto mais ar aspira, mais infla. Se os oponentes o pegarem de mau humor, ele se inflará a um tamanho enorme para intimidá-los.",
      "height": "0.99 m",
      "weight": "12.0 kg",
      "candy": "Jigglypuff Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.018,
      "avg_spawns": 1.8,
      "spawn_time": "12:28",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ],
      "prev_evolution": [{
        "num": "039",
        "name": "Jigglypuff"
      }]
    }, {
      "id": 41,
      "num": "041",
      "name": "Zubat",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
      "type": [
        "Venenoso",
        "Voador"
      ],
      "details": "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade.",
      "height": "0.79 m",
      "weight": "7.5 kg",
      "candy": "Zubat Candy",
      "candy_count": 50,
      "egg": "2 km",
      "spawn_chance": 6.52,
      "avg_spawns": 652,
      "spawn_time": "12:28",
      "multipliers": [
        2.6,
        3.67
      ],
      "weaknesses": [
        "Elétrico",
        "Gelo",
        "Psíquico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "042",
        "name": "Golbat"
      }]
    }, {
      "id": 42,
      "num": "042",
      "name": "Golbat",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
      "type": [
        "Venenoso",
        "Voador"
      ],
      "details": "Adora beber o sangue de outras criaturas. Dizem que, se encontrar outros de sua espécie passando fome, às vezes compartilha o sangue que recolheu.",
      "height": "1.60 m",
      "weight": "55.0 kg",
      "candy": "Zubat Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.42,
      "avg_spawns": 42,
      "spawn_time": "02:15",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Gelo",
        "Psíquico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "041",
        "name": "Zubat"
      }]
    }, {
      "id": 43,
      "num": "043",
      "name": "Oddish",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Se exposto ao luar, ele começa a se mover. Ele vaga por toda parte à noite para espalhar suas sementes.",
      "height": "0.51 m",
      "weight": "5.4 kg",
      "candy": "Oddish Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.02,
      "avg_spawns": 102,
      "spawn_time": "03:58",
      "multipliers": [1.5],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "044",
        "name": "Gloom"
      }, {
        "num": "045",
        "name": "Vileplume"
      }]
    }, {
      "id": 44,
      "num": "044",
      "name": "Gloom",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Seus pistilos exalam um odor incrivelmente fétido. O cheiro horrível pode causar desmaios a uma distância de 1,25 milhas",
      "height": "0.79 m",
      "weight": "8.6 kg",
      "candy": "Oddish Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.064,
      "avg_spawns": 6.4,
      "spawn_time": "11:33",
      "multipliers": [1.49],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "043",
        "name": "Oddish"
      }],
      "next_evolution": [{
        "num": "045",
        "name": "Vileplume"
      }]
    }, {
      "id": 45,
      "num": "045",
      "name": "Vileplume",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem nuvens pesadas de pólen tóxico.",
      "height": "1.19 m",
      "weight": "18.6 kg",
      "candy": "Oddish Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0097,
      "avg_spawns": 0.97,
      "spawn_time": "23:58",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "043",
        "name": "Oddish"
      }, {
        "num": "044",
        "name": "Gloom"
      }]
    }, {
      "id": 46,
      "num": "046",
      "name": "Paras",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
      "type": [
        "Inseto",
        "Grama"
      ],
      "details": "Tocas sob o solo para roer as raízes das árvores. Os cogumelos nas costas absorvem a maior parte da nutrição.",
      "height": "0.30 m",
      "weight": "5.4 kg",
      "candy": "Paras Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.36,
      "avg_spawns": 236,
      "spawn_time": "01:42",
      "multipliers": [2.02],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Venenoso",
        "Voador",
        "Inseto",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "047",
        "name": "Parasect"
      }]
    }, {
      "id": 47,
      "num": "047",
      "name": "Parasect",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
      "type": [
        "Inseto",
        "Grama"
      ],
      "details": "O hospedeiro do inseto é drenado de energia pelo cogumelo em suas costas. O cogumelo parece fazer todo o pensamento",
      "height": "0.99 m",
      "weight": "29.5 kg",
      "candy": "Paras Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.074,
      "avg_spawns": 7.4,
      "spawn_time": "01:22",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Venenoso",
        "Voador",
        "Inseto",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "046",
        "name": "Paras"
      }]
    }, {
      "id": 48,
      "num": "048",
      "name": "Venonat",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
      "type": [
        "Inseto",
        "Venenoso"
      ],
      "details": "Seus grandes olhos atuam como radar. Em um lugar claro, você pode ver que eles são aglomerados de muitos olhos minúsculos.",
      "height": "0.99 m",
      "weight": "30.0 kg",
      "candy": "Venonat Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.28,
      "avg_spawns": 228,
      "spawn_time": "02:31",
      "multipliers": [
        1.86,
        1.9
      ],
      "weaknesses": [
        "Fogo",
        "Voador",
        "Psíquico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "049",
        "name": "Venomoth"
      }]
    }, {
      "id": 49,
      "num": "049",
      "name": "Venomoth",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
      "type": [
        "Inseto",
        "Venenoso"
      ],
      "details": "As escamas em pó em suas asas são difíceis de remover da pele. Eles também contêm veneno que vaza em contato.",
      "height": "1.50 m",
      "weight": "12.5 kg",
      "candy": "Venonat Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Voador",
        "Psíquico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "048",
        "name": "Venonat"
      }]
    }, {
      "id": 50,
      "num": "050",
      "name": "Diglett",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
      "type": [
        "Terra"
      ],
      "details": "Se um Diglett cava em um campo, ele deixa o solo perfeitamente arado e ideal para plantar.",
      "height": "0.20 m",
      "weight": "0.8 kg",
      "candy": "Diglett Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.40,
      "avg_spawns": 40,
      "spawn_time": "02:22",
      "multipliers": [2.69],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "next_evolution": [{
        "num": "051",
        "name": "Dugtrio"
      }]
    }, {
      "id": 51,
      "num": "051",
      "name": "Dugtrio",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
      "type": [
        "Terra"
      ],
      "details": "Uma equipe de trigêmeos Diglett. Ele desencadeia enormes terremotos cavando 60 milhas no subsolo.",
      "height": "0.71 m",
      "weight": "33.3 kg",
      "candy": "Dugtrio",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "12:37",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "prev_evolution": [{
        "num": "050",
        "name": "Diglett"
      }]
    }, {
      "id": 52,
      "num": "052",
      "name": "Meowth",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      "type": [
        "Normal"
      ],
      "details": "Adora colecionar coisas brilhantes. Se estiver de bom humor, pode até deixar seu Treinador dar uma olhada em seu tesouro de tesouros.",
      "height": "0.41 m",
      "weight": "4.2 kg",
      "candy": "Meowth Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.86,
      "avg_spawns": 86,
      "spawn_time": "02:54",
      "multipliers": [1.98],
      "weaknesses": [
        "Lutador"
      ],
      "next_evolution": [{
        "num": "053",
        "name": "Persian"
      }]
    }, {
      "id": 53,
      "num": "053",
      "name": "Persian",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
      "type": [
        "Normal"
      ],
      "details": "Fazer com que este Pokémon orgulhoso se aqueça com você exige muito esforço, e ele vai arranhar você no momento em que ficar irritado.",
      "height": "0.99 m",
      "weight": "32.0 kg",
      "candy": "Meowth Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "02:44",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ],
      "prev_evolution": [{
        "num": "052",
        "name": "Meowth"
      }]
    }, {
      "id": 54,
      "num": "054",
      "name": "Psyduck",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      "type": [
        "Água"
      ],
      "details": "Psyduck é constantemente assolado por dores de cabeça. Se o Pokémon deixar seu estranho poder entrar em erupção, aparentemente a dor diminui por um tempo.",
      "height": "0.79 m",
      "weight": "19.6 kg",
      "candy": "Psyduck Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.54,
      "avg_spawns": 254,
      "spawn_time": "03:41",
      "multipliers": [2.27],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "055",
        "name": "Golduck"
      }]
    }, {
      "id": 55,
      "num": "055",
      "name": "Golduck",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
      "type": [
        "Água"
      ],
      "details": "Este Pokémon vive em rios que fluem suavemente. Ele rema pela água com seus longos membros, exibindo suas graciosas habilidades de natação.",
      "height": "1.70 m",
      "weight": "76.6 kg",
      "candy": "Psyduck Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.087,
      "avg_spawns": 8.7,
      "spawn_time": "23:06",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "054",
        "name": "Psyduck"
      }]
    }, {
      "id": 56,
      "num": "056",
      "name": "Mankey",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
      "type": [
        "Lutador"
      ],
      "details": "Um Pokémon ágil que vive em árvores. Ele se irrita facilmente e não hesitará em atacar qualquer coisa.",
      "height": "0.51 m",
      "weight": "28.0 kg",
      "candy": "Mankey Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "12:52",
      "multipliers": [
        2.17,
        2.28
      ],
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "next_evolution": [{
        "num": "057",
        "name": "Primeape"
      }]
    }, {
      "id": 57,
      "num": "057",
      "name": "Primeape",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
      "type": [
        "Lutador"
      ],
      "details": "Só deixa de ficar com raiva quando ninguém mais está por perto. Ver este momento é muito difícil.",
      "height": "0.99 m",
      "weight": "32.0 kg",
      "candy": "Mankey Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.031,
      "avg_spawns": 3.1,
      "spawn_time": "12:33",
      "multipliers": null,
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "056",
        "name": "Mankey"
      }]
    }, {
      "id": 58,
      "num": "058",
      "name": "Growlithe",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
      "type": [
        "Fogo"
      ],
      "details": "Tem uma natureza corajosa e confiável. Ele enfrenta sem medo inimigos maiores e mais fortes.",
      "height": "0.71 m",
      "weight": "19.0 kg",
      "candy": "Growlithe Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.92,
      "avg_spawns": 92,
      "spawn_time": "03:57",
      "multipliers": [
        2.31,
        2.36
      ],
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "059",
        "name": "Arcanine"
      }]
    }, {
      "id": 59,
      "num": "059",
      "name": "Arcanine",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
      "type": [
        "Fogo"
      ],
      "details": "A visão dele correndo mais de 6.200 milhas em um único dia e noite cativou muitas pessoas.",
      "height": "1.91 m",
      "weight": "155.0 kg",
      "candy": "Growlithe Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "03:11",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "058",
        "name": "Growlithe"
      }]
    }, {
      "id": 60,
      "num": "060",
      "name": "Poliwag",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
      "type": [
        "Água"
      ],
      "details": "Para Poliwag, nadar é mais fácil do que caminhar. O padrão de redemoinho em sua barriga é na verdade parte das entranhas do Pokémon que aparecem através da pele.",
      "height": "0.61 m",
      "weight": "12.4 kg",
      "candy": "Poliwag Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 2.19,
      "avg_spawns": 219,
      "spawn_time": "03:40",
      "multipliers": [
        1.72,
        1.73
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "061",
        "name": "Poliwhirl"
      }, {
        "num": "062",
        "name": "Poliwrath"
      }]
    }, {
      "id": 61,
      "num": "061",
      "name": "Poliwhirl",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
      "type": [
        "Água"
      ],
      "details": "Olhar para o redemoinho em sua barriga causa sonolência. Esse traço de Poliwhirl tem sido usado no lugar de canções de ninar para fazer as crianças dormirem.",
      "height": "0.99 m",
      "weight": "20.0 kg",
      "candy": "Poliwag Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.13,
      "avg_spawns": 13,
      "spawn_time": "09:14",
      "multipliers": [1.95],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "060",
        "name": "Poliwag"
      }],
      "next_evolution": [{
        "num": "062",
        "name": "Poliwrath"
      }]
    }, {
      "id": 62,
      "num": "062",
      "name": "Poliwrath",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
      "type": [
        "Água",
        "Lutador"
      ],
      "details": "Seu corpo é músculo sólido. Ao nadar em mares frios, Poliwrath usa seus braços impressionantes para esmagar o gelo à deriva e avançar.",
      "height": "1.30 m",
      "weight": "54.0 kg",
      "candy": "Poliwag Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "01:32",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "060",
        "name": "Poliwag"
      }, {
        "num": "061",
        "name": "Poliwhirl"
      }]
    }, {
      "id": 63,
      "num": "063",
      "name": "Abra",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
      "type": [
        "Psíquico"
      ],
      "details": "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon exerce.",
      "height": "0.89 m",
      "weight": "19.5 kg",
      "candy": "Abra Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.42,
      "avg_spawns": 42,
      "spawn_time": "04:30",
      "multipliers": [
        1.36,
        1.95
      ],
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "next_evolution": [{
        "num": "064",
        "name": "Kadabra"
      }, {
        "num": "065",
        "name": "Alakazam"
      }]
    }, {
      "id": 64,
      "num": "064",
      "name": "Kadabra",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
      "type": [
        "Psíquico"
      ],
      "details": "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro.",
      "height": "1.30 m",
      "weight": "56.5 kg",
      "candy": "Abra Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.027,
      "avg_spawns": 2.7,
      "spawn_time": "11:25",
      "multipliers": [1.4],
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "063",
        "name": "Abra"
      }],
      "next_evolution": [{
        "num": "065",
        "name": "Alakazam"
      }]
    }, {
      "id": 65,
      "num": "065",
      "name": "Alakazam",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
      "type": [
        "Psíquico"
      ],
      "details": "Tem um nível incrivelmente alto de inteligência. Alguns dizem que Alakazam se lembra de tudo o que aconteceu com ele, desde o nascimento até a morte.",
      "height": "1.50 m",
      "weight": "48.0 kg",
      "candy": "Abra Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0073,
      "avg_spawns": 0.73,
      "spawn_time": "12:33",
      "multipliers": null,
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "063",
        "name": "Abra"
      }, {
        "num": "064",
        "name": "Kadabra"
      }]
    }, {
      "id": 66,
      "num": "066",
      "name": "Machop",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
      "type": [
        "Lutador"
      ],
      "details": "Todo o seu corpo é composto por músculos. Mesmo sendo do tamanho de uma criança humana, pode arremessar 100 adultos.",
      "height": "0.79 m",
      "weight": "19.5 kg",
      "candy": "Machop Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.49,
      "avg_spawns": 49,
      "spawn_time": "01:55",
      "multipliers": [
        1.64,
        1.65
      ],
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "next_evolution": [{
        "num": "067",
        "name": "Machoke"
      }, {
        "num": "068",
        "name": "Machamp"
      }]
    }, {
      "id": 67,
      "num": "067",
      "name": "Machoke",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
      "type": [
        "Lutador"
      ],
      "details": "Seu corpo musculoso é tão poderoso que deve usar um cinto de economia de energia para poder regular seus movimentos.",
      "height": "1.50 m",
      "weight": "70.5 kg",
      "candy": "Machop Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "10:32",
      "multipliers": [1.7],
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "066",
        "name": "Machop"
      }],
      "next_evolution": [{
        "num": "068",
        "name": "Machamp"
      }]
    }, {
      "id": 68,
      "num": "068",
      "name": "Machamp",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
      "type": [
        "Lutador"
      ],
      "details": "Ele rapidamente balança seus quatro braços para balançar seus oponentes com socos e golpes incessantes de todos os ângulos.",
      "height": "1.60 m",
      "weight": "130.0 kg",
      "candy": "Machop Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0068,
      "avg_spawns": 0.68,
      "spawn_time": "02:55",
      "multipliers": null,
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "066",
        "name": "Machop"
      }, {
        "num": "067",
        "name": "Machoke"
      }]
    }, {
      "id": 69,
      "num": "069",
      "name": "Bellsprout",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Prefere lugares quentes e úmidos. Ele captura pequenos insetos com suas videiras e os devora.",
      "height": "0.71 m",
      "weight": "4.0 kg",
      "candy": "Bellsprout Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 1.15,
      "avg_spawns": 115,
      "spawn_time": "04:10",
      "multipliers": [1.57],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "070",
        "name": "Weepinbell"
      }, {
        "num": "071",
        "name": "Victreebel"
      }]
    }, {
      "id": 70,
      "num": "070",
      "name": "Weepinbell",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Quando está com fome, engole qualquer coisa que se mova. Sua presa infeliz é dissolvida por ácidos fortes.",
      "height": "0.99 m",
      "weight": "6.4 kg",
      "candy": "Bellsprout Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.072,
      "avg_spawns": 7.2,
      "spawn_time": "09:45",
      "multipliers": [1.59],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "069",
        "name": "Bellsprout"
      }],
      "next_evolution": [{
        "num": "071",
        "name": "Victreebel"
      }]
    }, {
      "id": 71,
      "num": "071",
      "name": "Victreebel",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
      "type": [
        "Grama",
        "Venenoso"
      ],
      "details": "Atrai a presa com o doce aroma do mel. Engolida inteira, a presa é dissolvida em um dia, com ossos e tudo.",
      "height": "1.70 m",
      "weight": "15.5 kg",
      "candy": "Bellsprout Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0059,
      "avg_spawns": 0.59,
      "spawn_time": "12:19",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Voador",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "069",
        "name": "Bellsprout"
      }, {
        "num": "070",
        "name": "Weepinbell"
      }]
    }, {
      "id": 72,
      "num": "072",
      "name": "Tentacool",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
      "type": [
        "Água",
        "Venenoso"
      ],
      "details": "Tentacool não é um nadador particularmente forte. Ele flutua pela superfície de mares rasos enquanto procura por presas.",
      "height": "0.89 m",
      "weight": "45.5 kg",
      "candy": "Tentacool Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.81,
      "avg_spawns": 81,
      "spawn_time": "03:20",
      "multipliers": [2.52],
      "weaknesses": [
        "Elétrico",
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "073",
        "name": "Tentacruel"
      }]
    }, {
      "id": 73,
      "num": "073",
      "name": "Tentacruel",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
      "type": [
        "Água",
        "Venenoso"
      ],
      "details": "Quando as esferas vermelhas na cabeça de Tentacruel brilharem, cuidado. O Pokémon está prestes a disparar uma explosão de ondas ultrassônicas.",
      "height": "1.60 m",
      "weight": "55.0 kg",
      "candy": "Tentacool Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.082,
      "avg_spawns": 8.2,
      "spawn_time": "23:36",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "072",
        "name": "Tentacool"
      }]
    }, {
      "id": 74,
      "num": "074",
      "name": "Geodude",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
      "type": [
        "Pedra",
        "Terra"
      ],
      "details": "Comumente encontrado perto de trilhas de montanha e similares. Se você pisar em um por acidente, ele fica com raiva.",
      "height": "0.41 m",
      "weight": "20.0 kg",
      "candy": "Geodude Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 1.19,
      "avg_spawns": 119,
      "spawn_time": "12:40",
      "multipliers": [
        1.75,
        1.76
      ],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ],
      "next_evolution": [{
        "num": "075",
        "name": "Graveler"
      }, {
        "num": "076",
        "name": "Golem"
      }]
    }, {
      "id": 75,
      "num": "075",
      "name": "Graveler",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
      "type": [
        "Pedra",
        "Terra"
      ],
      "details": "Muitas vezes visto rolando por trilhas de montanha. Obstáculos são apenas coisas para passar direto, não para evitar.",
      "height": "0.99 m",
      "weight": "105.0 kg",
      "candy": "Geodude Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.071,
      "avg_spawns": 7.1,
      "spawn_time": "04:53",
      "multipliers": [
        1.64,
        1.72
      ],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ],
      "prev_evolution": [{
        "num": "074",
        "name": "Geodude"
      }],
      "next_evolution": [{
        "num": "076",
        "name": "Golem"
      }]
    }, {
      "id": 76,
      "num": "076",
      "name": "Golem",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
      "type": [
        "Pedra",
        "Terra"
      ],
      "details": "Uma vez que ele muda de pele, seu corpo fica macio e esbranquiçado. Sua pele endurece quando exposta ao ar.",
      "height": "1.40 m",
      "weight": "300.0 kg",
      "candy": "Geodude Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0047,
      "avg_spawns": 0.47,
      "spawn_time": "12:16",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ],
      "prev_evolution": [{
        "num": "074",
        "name": "Geodude"
      }, {
        "num": "075",
        "name": "Graveler"
      }]
    }, {
      "id": 77,
      "num": "077",
      "name": "Ponyta",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
      "type": [
        "Fogo"
      ],
      "details": "Ele não pode funcionar corretamente quando é recém-nascido. À medida que corre com outros de sua espécie, suas pernas ficam mais fortes.",
      "height": "0.99 m",
      "weight": "30.0 kg",
      "candy": "Ponyta Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.51,
      "avg_spawns": 51,
      "spawn_time": "02:50",
      "multipliers": [
        1.48,
        1.5
      ],
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "078",
        "name": "Rapidash"
      }]
    }, {
      "id": 78,
      "num": "078",
      "name": "Rapidash",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
      "type": [
        "Fogo"
      ],
      "details": "Este Pokémon pode ser visto galopando pelos campos a velocidades de até 150 mph, sua juba de fogo tremulando ao vento.",
      "height": "1.70 m",
      "weight": "95.0 kg",
      "candy": "Ponyta Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "04:00",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "077",
        "name": "Ponyta"
      }]
    }, {
      "id": 79,
      "num": "079",
      "name": "Slowpoke",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
      "type": [
        "Água",
        "Psíquico"
      ],
      "details": "De raciocínio lento e alheio, este Pokémon não sentirá nenhuma dor se sua cauda for comida. Ele também não notará quando sua cauda crescer novamente.",
      "height": "1.19 m",
      "weight": "36.0 kg",
      "candy": "Slowpoke Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.05,
      "avg_spawns": 105,
      "spawn_time": "07:12",
      "multipliers": [2.21],
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "next_evolution": [{
        "num": "080",
        "name": "Slowbro"
      }]
    }, {
      "id": 80,
      "num": "080",
      "name": "Slowbro",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
      "type": [
        "Água",
        "Psíquico"
      ],
      "details": "Slowpoke se tornou Slowbro quando um Shellder mordeu sua cauda. Sabores doces que escorrem da cauda fazem com que o Shellder se sinta como se sua vida fosse um sonho.",
      "height": "1.60 m",
      "weight": "78.5 kg",
      "candy": "Slowpoke Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.036,
      "avg_spawns": 3.6,
      "spawn_time": "02:56",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "079",
        "name": "Slowpoke"
      }]
    }, {
      "id": 81,
      "num": "081",
      "name": "Magnemite",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
      "type": [
        "Elétrico"
      ],
      "details": "Às vezes, o Magnemite fica sem eletricidade e acaba no chão. Se você der baterias a um Magnemite aterrado, ele começará a se mover novamente.",
      "height": "0.30 m",
      "weight": "6.0 kg",
      "candy": "Magnemite Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.71,
      "avg_spawns": 71,
      "spawn_time": "04:04",
      "multipliers": [
        2.16,
        2.17
      ],
      "weaknesses": [
        "Fogo",
        "Água",
        "Terra"
      ],
      "next_evolution": [{
        "num": "082",
        "name": "Magneton"
      }]
    }, {
      "id": 82,
      "num": "082",
      "name": "Magneton",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
      "type": [
        "Elétrico"
      ],
      "details": "Este Pokémon são três Magnemite que se ligaram. Magneton envia poderosas ondas de rádio para estudar seus arredores.",
      "height": "0.99 m",
      "weight": "60.0 kg",
      "candy": "Magnemite Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.023,
      "avg_spawns": 2.3,
      "spawn_time": "15:25",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Água",
        "Terra"
      ],
      "prev_evolution": [{
        "num": "081",
        "name": "Magnemite"
      }]
    }, {
      "id": 83,
      "num": "083",
      "name": "Farfetch'd",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "O talo que este Pokémon carrega em suas asas serve como uma espada para derrubar os oponentes. Em uma situação terrível, o talo também pode servir como alimento.",
      "height": "0.79 m",
      "weight": "15.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.0212,
      "avg_spawns": 2.12,
      "spawn_time": "01:09",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ]
    }, {
      "id": 84,
      "num": "084",
      "name": "Doduo",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Suas asas curtas dificultam o vôo. Em vez disso, este Pokémon corre em alta velocidade nas pernas desenvolvidas.",
      "height": "1.40 m",
      "weight": "39.2 kg",
      "candy": "Doduo Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "05:10",
      "multipliers": [
        2.19,
        2.24
      ],
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "next_evolution": [{
        "num": "085",
        "name": "Dodrio"
      }]
    }, {
      "id": 85,
      "num": "085",
      "name": "Dodrio",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
      "type": [
        "Normal",
        "Voador"
      ],
      "details": "Uma das duas cabeças de Doduo se divide para formar uma espécie única. Ele corre perto de 40 mph em pradarias.",
      "height": "1.80 m",
      "weight": "85.2 kg",
      "candy": "Doduo Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "02:12",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "084",
        "name": "Doduo"
      }]
    }, {
      "id": 86,
      "num": "086",
      "name": "Seel",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
      "type": [
        "Água"
      ],
      "details": "Adora condições de frio congelante. Aprecia nadar em um clima frio de cerca de 14 graus Fahrenheit.",
      "height": "1.09 m",
      "weight": "90.0 kg",
      "candy": "Seel Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.28,
      "avg_spawns": 28,
      "spawn_time": "06:46",
      "multipliers": [
        1.04,
        1.96
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "087",
        "name": "Dewgong"
      }]
    }, {
      "id": 87,
      "num": "087",
      "name": "Dewgong",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
      "type": [
        "Água",
        "Gelo"
      ],
      "details": "Todo o seu corpo é branco como a neve. Incólume mesmo pelo frio intenso, nada poderosamente em águas geladas.",
      "height": "1.70 m",
      "weight": "120.0 kg",
      "candy": "Seel Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.013,
      "avg_spawns": 1.3,
      "spawn_time": "06:04",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "086",
        "name": "Seel"
      }]
    }, {
      "id": 88,
      "num": "088",
      "name": "Grimer",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
      "type": [
        "Venenoso"
      ],
      "details": "Feito de lodo congelado. Cheira muito pútrido ao toque. Mesmo as ervas daninhas não crescerão em seu caminho.",
      "height": "0.89 m",
      "weight": "30.0 kg",
      "candy": "Grimer Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "15:11",
      "multipliers": [2.44],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "089",
        "name": "Muk"
      }]
    }, {
      "id": 89,
      "num": "089",
      "name": "Muk",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
      "type": [
        "Venenoso"
      ],
      "details": "O cheiro é tão horrível que pode causar desmaios. Através da degeneração do nariz, perdeu o olfato.",
      "height": "1.19 m",
      "weight": "30.0 kg",
      "candy": "Grimer Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "01:28",
      "multipliers": null,
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "088",
        "name": "Grimer"
      }]
    }, {
      "id": 90,
      "num": "090",
      "name": "Shellder",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
      "type": [
        "Água"
      ],
      "details": "Ele nada voltado para trás abrindo e fechando sua concha de duas peças. É surpreendentemente rápido.",
      "height": "0.30 m",
      "weight": "4.0 kg",
      "candy": "Shellder Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "07:39",
      "multipliers": [2.65],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "091",
        "name": "Cloyster"
      }]
    }, {
      "id": 91,
      "num": "091",
      "name": "Cloyster",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
      "type": [
        "Água",
        "Gelo"
      ],
      "details": "Sua casca é extremamente dura. Não pode ser quebrado, mesmo com uma bomba. A concha abre apenas quando está atacando.",
      "height": "1.50 m",
      "weight": "132.5 kg",
      "candy": "Shellder Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.015,
      "avg_spawns": 1.5,
      "spawn_time": "02:33",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "090",
        "name": "Shellder"
      }]
    }, {
      "id": 92,
      "num": "092",
      "name": "Gastly",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
      "type": [
        "Fantasma",
        "Venenoso"
      ],
      "details": "Nascido de gases, qualquer um desmaiaria se engolido por seu corpo gasoso, que contém veneno.",
      "height": "1.30 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 25,
      "egg": "5 km",
      "spawn_chance": 0.79,
      "avg_spawns": 79,
      "spawn_time": "04:21",
      "multipliers": [1.78],
      "weaknesses": [
        "Terra",
        "Psíquico",
        "Fantasma",
        "Sombrio"
      ],
      "next_evolution": [{
        "num": "093",
        "name": "Haunter"
      }, {
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 93,
      "num": "093",
      "name": "Haunter",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
      "type": [
        "Fantasma",
        "Venenoso"
      ],
      "details": "Sua língua é feita de gás. Se lambido, sua vítima começa a tremer constantemente até que a morte finalmente chegue.",
      "height": "1.60 m",
      "weight": "0.1 kg",
      "candy": "Gastly Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.052,
      "avg_spawns": 5.2,
      "spawn_time": "00:10",
      "multipliers": [
        1.56,
        1.8
      ],
      "weaknesses": [
        "Terra",
        "Psíquico",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }],
      "next_evolution": [{
        "num": "094",
        "name": "Gengar"
      }]
    }, {
      "id": 94,
      "num": "094",
      "name": "Gengar",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      "type": [
        "Fantasma",
        "Venenoso"
      ],
      "details": "Na noite de lua cheia, se as sombras se movem sozinhas e riem, deve ser culpa de Gengar.",
      "height": "1.50 m",
      "weight": "40.5 kg",
      "candy": "Gastly Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "03:55",
      "multipliers": null,
      "weaknesses": [
        "Terra",
        "Psíquico",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "092",
        "name": "Gastly"
      }, {
        "num": "093",
        "name": "Haunter"
      }]
    }, {
      "id": 95,
      "num": "095",
      "name": "Onix",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
      "type": [
        "Pedra",
        "Terra"
      ],
      "details": "À medida que escava o solo, absorve muitos objetos duros. Isso é o que torna seu corpo tão sólido.",
      "height": "8.79 m",
      "weight": "210.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.10,
      "avg_spawns": 10,
      "spawn_time": "01:18",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ]
    }, {
      "id": 96,
      "num": "096",
      "name": "Drowzee",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
      "type": [
        "Psíquico"
      ],
      "details": "Se você dormir com ele o tempo todo, às vezes ele mostrará sonhos que comeu no passado.",
      "height": "0.99 m",
      "weight": "32.4 kg",
      "candy": "Drowzee Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 3.21,
      "avg_spawns": 321,
      "spawn_time": "01:51",
      "multipliers": [
        2.08,
        2.09
      ],
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "next_evolution": [{
        "num": "097",
        "name": "Hypno"
      }]
    }, {
      "id": 97,
      "num": "097",
      "name": "Hypno",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
      "type": [
        "Psíquico"
      ],
      "details": "Evite o contato visual se encontrar um. Ele tentará colocá-lo para dormir usando seu pêndulo.",
      "height": "1.60 m",
      "weight": "75.6 kg",
      "candy": "Drowzee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.10,
      "avg_spawns": 10,
      "spawn_time": "02:17",
      "multipliers": null,
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "096",
        "name": "Drowzee"
      }]
    }, {
      "id": 98,
      "num": "098",
      "name": "Krabby",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
      "type": [
        "Água"
      ],
      "details": "Pode ser encontrado perto do mar. As pinças grandes voltam a crescer se forem arrancadas de seus soquetes.",
      "height": "0.41 m",
      "weight": "6.5 kg",
      "candy": "Krabby Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.12,
      "avg_spawns": 212,
      "spawn_time": "03:33",
      "multipliers": [
        2.36,
        2.4
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "099",
        "name": "Kingler"
      }]
    }, {
      "id": 99,
      "num": "099",
      "name": "Kingler",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
      "type": [
        "Água"
      ],
      "details": "Sua pinça grande e dura tem força de 10.000 cavalos de potência. No entanto, sendo tão grande, é difícil de se mover.",
      "height": "1.30 m",
      "weight": "60.0 kg",
      "candy": "Krabby Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.062,
      "avg_spawns": 6.2,
      "spawn_time": "03:44",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "098",
        "name": "Krabby"
      }]
    }, {
      "id": 100,
      "num": "100",
      "name": "Voltorb",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
      "type": [
        "Elétrico"
      ],
      "details": "Diz-se que se camufla como uma Pokébola. Ele se autodestruirá com muito pouco estímulo.",
      "height": "0.51 m",
      "weight": "10.4 kg",
      "candy": "Voltorb Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.65,
      "avg_spawns": 65,
      "spawn_time": "04:36",
      "multipliers": [
        2.01,
        2.02
      ],
      "weaknesses": [
        "Terra"
      ],
      "next_evolution": [{
        "num": "101",
        "name": "Electrode"
      }]
    }, {
      "id": 101,
      "num": "101",
      "name": "Electrode",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
      "type": [
        "Elétrico"
      ],
      "details": "Armazena energia elétrica dentro de seu corpo. Mesmo o menor choque pode desencadear uma enorme explosão.",
      "height": "1.19 m",
      "weight": "66.6 kg",
      "candy": "Voltorb Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "04:10",
      "multipliers": null,
      "weaknesses": [
        "Terra"
      ],
      "prev_evolution": [{
        "num": "100",
        "name": "Voltorb"
      }]
    }, {
      "id": 102,
      "num": "102",
      "name": "Exeggcute",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
      "type": [
        "Grama",
        "Psíquico"
      ],
      "details": "Embora possa parecer apenas um monte de ovos, é um Pokémon adequado. Exeggcute se comunica com outros de seu tipo via telepatia, aparentemente.",
      "height": "0.41 m",
      "weight": "2.5 kg",
      "candy": "Exeggcute Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.78,
      "avg_spawns": 78,
      "spawn_time": "09:09",
      "multipliers": [
        2.7,
        3.18
      ],
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Venenoso",
        "Voador",
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "next_evolution": [{
        "num": "103",
        "name": "Exeggutor"
      }]
    }, {
      "id": 103,
      "num": "103",
      "name": "Exeggutor",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
      "type": [
        "Grama",
        "Psíquico"
      ],
      "details": "Cada uma das três cabeças de Exeggutor está pensando em pensamentos diferentes. Os três não parecem estar muito interessados ​​um no outro.",
      "height": "2.01 m",
      "weight": "120.0 kg",
      "candy": "Exeggcute Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "12:34",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Venenoso",
        "Voador",
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "102",
        "name": "Exeggcute"
      }]
    }, {
      "id": 104,
      "num": "104",
      "name": "Cubone",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
      "type": [
        "Terra"
      ],
      "details": "Quando a memória de sua mãe falecida o leva às lágrimas, seus gritos ecoam tristemente dentro do crânio que ele usa em sua cabeça.",
      "height": "0.41 m",
      "weight": "6.5 kg",
      "candy": "Cubone Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.61,
      "avg_spawns": 61,
      "spawn_time": "01:51",
      "multipliers": [1.67],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "next_evolution": [{
        "num": "105",
        "name": "Marowak"
      }]
    }, {
      "id": 105,
      "num": "105",
      "name": "Marowak",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
      "type": [
        "Terra"
      ],
      "details": "Este Pokémon superou sua tristeza para evoluir um novo corpo robusto. Marowak enfrenta seus oponentes com bravura, usando um osso como arma.",
      "height": "0.99 m",
      "weight": "45.0 kg",
      "candy": "Cubone Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "03:59",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo"
      ],
      "prev_evolution": [{
        "num": "104",
        "name": "Cubone"
      }]
    }, {
      "id": 106,
      "num": "106",
      "name": "Hitmonlee",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
      "type": [
        "Lutador"
      ],
      "details": "Este incrível Pokémon tem um incrível senso de equilíbrio. Pode chutar sucessivamente de qualquer posição.",
      "height": "1.50 m",
      "weight": "49.8 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "03:59",
      "multipliers": null,
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ]
    }, {
      "id": 107,
      "num": "107",
      "name": "Hitmonchan",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
      "type": [
        "Lutador"
      ],
      "details": "Seus socos cortam o ar. Eles são lançados a uma velocidade tão alta que até um leve arranhão pode causar uma queimadura.",
      "height": "1.40 m",
      "weight": "50.2 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:58",
      "multipliers": null,
      "weaknesses": [
        "Voador",
        "Psíquico",
        "Fada"
      ]
    }, {
      "id": 108,
      "num": "108",
      "name": "Lickitung",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
      "type": [
        "Normal"
      ],
      "details": "Se a saliva pegajosa deste Pokémon entrar em contato com você e você não a limpar, uma coceira intensa se instalará. A coceira também não desaparecerá.",
      "height": "1.19 m",
      "weight": "65.5 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.011,
      "avg_spawns": 1.1,
      "spawn_time": "02:46",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 109,
      "num": "109",
      "name": "Koffing",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
      "type": [
        "Venenoso"
      ],
      "details": "Seu corpo está cheio de gás venenoso. Ele flutua em lixões, procurando a fumaça do lixo cru e apodrecido.",
      "height": "0.61 m",
      "weight": "1.0 kg",
      "candy": "Koffing Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.20,
      "avg_spawns": 20,
      "spawn_time": "08:16",
      "multipliers": [1.11],
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "next_evolution": [{
        "num": "110",
        "name": "Weezing"
      }]
    }, {
      "id": 110,
      "num": "110",
      "name": "Weezing",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
      "type": [
        "Venenoso"
      ],
      "details": "Mistura gases entre seus dois corpos. Dizem que esses Pokémon foram vistos em toda a região de Galar no passado.",
      "height": "1.19 m",
      "weight": "9.5 kg",
      "candy": "Koffing Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.016,
      "avg_spawns": 1.6,
      "spawn_time": "12:17",
      "multipliers": null,
      "weaknesses": [
        "Terra",
        "Psíquico"
      ],
      "prev_evolution": [{
        "num": "109",
        "name": "Koffing"
      }]
    }, {
      "id": 111,
      "num": "111",
      "name": "Rhyhorn",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
      "type": [
        "Terra",
        "Pedra"
      ],
      "details": "Forte, mas não muito brilhante, este Pokémon pode destruir até um arranha-céu com seus ataques de ataque.",
      "height": "0.99 m",
      "weight": "115.0 kg",
      "candy": "Rhyhorn Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.63,
      "avg_spawns": 63,
      "spawn_time": "03:21",
      "multipliers": [1.91],
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ],
      "next_evolution": [{
        "num": "112",
        "name": "Rhydon"
      }]
    }, {
      "id": 112,
      "num": "112",
      "name": "Rhydon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
      "type": [
        "Terra",
        "Pedra"
      ],
      "details": "Ele começa a andar nas patas traseiras após a evolução. Ele pode fazer buracos através de pedregulhos com seu chifre.",
      "height": "1.91 m",
      "weight": "120.0 kg",
      "candy": "Rhyhorn Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:50",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Grama",
        "Gelo",
        "Lutador",
        "Terra",
        "Ferro"
      ],
      "prev_evolution": [{
        "num": "111",
        "name": "Rhyhorn"
      }]
    }, {
      "id": 113,
      "num": "113",
      "name": "Chansey",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
      "type": [
        "Normal"
      ],
      "details": "O ovo que Chansey carrega não é apenas delicioso, mas também repleto de nutrição. É usado como um ingrediente culinário de alta classe.",
      "height": "1.09 m",
      "weight": "34.6 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.013,
      "avg_spawns": 1.3,
      "spawn_time": "04:46",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 114,
      "num": "114",
      "name": "Tangela",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
      "type": [
        "Grama"
      ],
      "details": "Escondido sob um emaranhado de trepadeiras que cresce sem parar, mesmo que as trepadeiras sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério.",
      "height": "0.99 m",
      "weight": "35.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.228,
      "avg_spawns": 22.8,
      "spawn_time": "23:13",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Gelo",
        "Venenoso",
        "Voador",
        "Inseto"
      ]
    }, {
      "id": 115,
      "num": "115",
      "name": "Kangaskhan",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
      "type": [
        "Normal"
      ],
      "details": "Embora esteja carregando seu bebê em uma bolsa na barriga, Kangaskhan é rápido em seus pés. Ele intimida seus oponentes com jabs rápidos.",
      "height": "2.21 m",
      "weight": "80.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.0086,
      "avg_spawns": 0.86,
      "spawn_time": "02:40",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 116,
      "num": "116",
      "name": "Horsea",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
      "type": [
        "Água"
      ],
      "details": "Horsea faz sua casa em oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta e escapa.",
      "height": "0.41 m",
      "weight": "8.0 kg",
      "candy": "Horsea Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.13,
      "avg_spawns": 113,
      "spawn_time": "02:53",
      "multipliers": [2.23],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "117",
        "name": "Seadra"
      }]
    }, {
      "id": 117,
      "num": "117",
      "name": "Seadra",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
      "type": [
        "Água"
      ],
      "details": "São os machos que criam a prole. Enquanto Seadra está criando filhotes, os espinhos em suas costas secretam um veneno mais espesso e forte.",
      "height": "1.19 m",
      "weight": "25.0 kg",
      "candy": "Horsea Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "03:18",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "116",
        "name": "Horsea"
      }]
    }, {
      "id": 118,
      "num": "118",
      "name": "Goldeen",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
      "type": [
        "Água"
      ],
      "details": "Suas barbatanas dorsais, peitorais e caudais ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água.",
      "height": "0.61 m",
      "weight": "15.0 kg",
      "candy": "Goldeen Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.18,
      "avg_spawns": 218,
      "spawn_time": "03:14",
      "multipliers": [
        2.15,
        2.2
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "119",
        "name": "Seaking"
      }]
    }, {
      "id": 119,
      "num": "119",
      "name": "Seaking",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
      "type": [
        "Água"
      ],
      "details": "No outono, seu corpo fica mais gorduroso ao se preparar para propor a um companheiro. Adquire cores bonitas.",
      "height": "1.30 m",
      "weight": "39.0 kg",
      "candy": "Goldeen Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.08,
      "avg_spawns": 8,
      "spawn_time": "05:21",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "118",
        "name": "Goldeen"
      }]
    }, {
      "id": 120,
      "num": "120",
      "name": "Staryu",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
      "type": [
        "Água"
      ],
      "details": "Se você visitar uma praia no final do verão, poderá ver grupos de Staryus se iluminando em um ritmo constante.",
      "height": "0.79 m",
      "weight": "34.5 kg",
      "candy": "Staryu Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 1.95,
      "avg_spawns": 195,
      "spawn_time": "22:59",
      "multipliers": [
        2.38,
        2.41
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "121",
        "name": "Starmie"
      }]
    }, {
      "id": 121,
      "num": "121",
      "name": "Starmie",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
      "type": [
        "Água",
        "Psíquico"
      ],
      "details": "Este Pokémon tem um órgão conhecido como núcleo. O órgão brilha em sete cores quando Starmie está liberando seus poderosos poderes psíquicos.",
      "height": "1.09 m",
      "weight": "80.0 kg",
      "candy": "Staryu Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "06:57",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Inseto",
        "Fantasma",
        "Sombrio"
      ],
      "prev_evolution": [{
        "num": "120",
        "name": "Staryu"
      }]
    }, {
      "id": 122,
      "num": "122",
      "name": "Mr. Mime",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
      "type": [
        "Psíquico"
      ],
      "details": "A largura de suas mãos pode não ser coincidência – muitos cientistas acreditam que suas palmas se tornaram maiores especificamente para a mímica.",
      "height": "1.30 m",
      "weight": "54.5 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.0031,
      "avg_spawns": 0.31,
      "spawn_time": "01:51",
      "multipliers": null,
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ]
    }, {
      "id": 123,
      "num": "123",
      "name": "Scyther",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
      "type": [
        "Inseto",
        "Voador"
      ],
      "details": "À medida que Scyther luta mais e mais batalhas, suas foices ficam cada vez mais afiadas. Com um único corte, Scyther pode derrubar uma árvore enorme.",
      "height": "1.50 m",
      "weight": "56.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.14,
      "avg_spawns": 14,
      "spawn_time": "05:43",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Elétrico",
        "Gelo",
        "Voador",
        "Pedra"
      ]
    }, {
      "id": 124,
      "num": "124",
      "name": "Jynx",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
      "type": [
        "Gelo",
        "Psíquico"
      ],
      "details": "Em certas partes de Galar, Jynx já foi temida e adorada como a Rainha do Gelo.",
      "height": "1.40 m",
      "weight": "40.6 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.35,
      "avg_spawns": 35,
      "spawn_time": "05:41",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Inseto",
        "Pedra",
        "Fantasma",
        "Sombrio",
        "Ferro"
      ]
    }, {
      "id": 125,
      "num": "125",
      "name": "Electabuzz",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
      "type": [
        "Elétrico"
      ],
      "details": "Muitas usinas de energia mantêm Pokémon do tipo Ground por perto como uma defesa contra Electabuzz que vem em busca de eletricidade.",
      "height": "1.09 m",
      "weight": "30.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.074,
      "avg_spawns": 7.4,
      "spawn_time": "04:28",
      "multipliers": null,
      "weaknesses": [
        "Terra"
      ]
    }, {
      "id": 126,
      "num": "126",
      "name": "Magmar",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
      "type": [
        "Fogo"
      ],
      "details": "Magmar despacha sua presa com fogo. Mas ele se arrepende desse hábito quando percebe que queimou sua presa pretendida em uma batata frita carbonizada.",
      "height": "1.30 m",
      "weight": "44.5 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.10,
      "avg_spawns": 10,
      "spawn_time": "20:36",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ]
    }, {
      "id": 127,
      "num": "127",
      "name": "Pinsir",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
      "type": [
        "Inseto"
      ],
      "details": "Esses Pokémon julgam uns aos outros com base em pinças. Pinças mais grossas e impressionantes aumentam a popularidade com o sexo oposto.",
      "height": "1.50 m",
      "weight": "55.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.99,
      "avg_spawns": 99,
      "spawn_time": "03:25",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Voador",
        "Pedra"
      ]
    }, {
      "id": 128,
      "num": "128",
      "name": "Tauros",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
      "type": [
        "Normal"
      ],
      "details": "Quando Tauros começa a se chicotear com suas caudas, é um aviso de que o Pokémon está prestes a atacar com uma velocidade impressionante.",
      "height": "1.40 m",
      "weight": "88.4 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.12,
      "avg_spawns": 12,
      "spawn_time": "00:37",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 129,
      "num": "129",
      "name": "Magikarp",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
      "type": [
        "Água"
      ],
      "details": "É praticamente inútil em termos de potência e velocidade. É o Pokémon mais fraco e patético do mundo.",
      "height": "0.89 m",
      "weight": "10.0 kg",
      "candy": "Magikarp Candy",
      "candy_count": 400,
      "egg": "2 km",
      "spawn_chance": 4.78,
      "avg_spawns": 478,
      "spawn_time": "14:26",
      "multipliers": [
        10.1,
        11.8
      ],
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "next_evolution": [{
        "num": "130",
        "name": "Gyarados"
      }]
    }, {
      "id": 130,
      "num": "130",
      "name": "Gyarados",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      "type": [
        "Água",
        "Voador"
      ],
      "details": "Tem uma natureza extremamente agressiva. O Hyper Beam que dispara de sua boca incinera totalmente todos os alvos.",
      "height": "6.50 m",
      "weight": "235.0 kg",
      "candy": "Magikarp Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0032,
      "avg_spawns": 0.32,
      "spawn_time": "02:15",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "129",
        "name": "Magikarp"
      }]
    }, {
      "id": 131,
      "num": "131",
      "name": "Lapras",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
      "type": [
        "Água",
        "Gelo"
      ],
      "details": "Um Pokémon inteligente e bondoso, ele desliza pela superfície do mar enquanto sua bela música ecoa ao seu redor.",
      "height": "2.49 m",
      "weight": "220.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.006,
      "avg_spawns": 0.6,
      "spawn_time": "08:59",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Pedra"
      ]
    }, {
      "id": 132,
      "num": "132",
      "name": "Ditto",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      "type": [
        "Normal"
      ],
      "details": "Ele pode reconstituir toda a sua estrutura celular para se transformar no que vê, mas volta ao normal quando relaxa.",
      "height": "0.30 m",
      "weight": "4.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 133,
      "num": "133",
      "name": "Eevee",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      "type": [
        "Normal"
      ],
      "details": "Tem a capacidade de alterar a composição do seu corpo para se adequar ao ambiente circundante.",
      "height": "0.30 m",
      "weight": "6.5 kg",
      "candy": "Eevee Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 2.75,
      "avg_spawns": 275,
      "spawn_time": "05:32",
      "multipliers": [
        2.02,
        2.64
      ],
      "weaknesses": [
        "Lutador"
      ],
      "next_evolution": [{
        "num": "134",
        "name": "Vaporeon"
      }, {
        "num": "135",
        "name": "Jolteon"
      }, {
        "num": "136",
        "name": "Flareon"
      }]
    }, {
      "id": 134,
      "num": "134",
      "name": "Vaporeon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
      "type": [
        "Água"
      ],
      "details": "Quando as barbatanas do Vaporeon começam a vibrar, é sinal de que a chuva virá dentro de algumas horas.",
      "height": "0.99 m",
      "weight": "29.0 kg",
      "candy": "Eevee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.014,
      "avg_spawns": 1.4,
      "spawn_time": "10:54",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama"
      ],
      "prev_evolution": [{
        "num": "133",
        "name": "Eevee"
      }]
    }, {
      "id": 135,
      "num": "135",
      "name": "Jolteon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
      "type": [
        "Elétrico"
      ],
      "details": "Se estiver irritado ou assustado, a pele por todo o corpo se eriça como agulhas afiadas que perfuram os inimigos.",
      "height": "0.79 m",
      "weight": "24.5 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "02:30",
      "multipliers": null,
      "weaknesses": [
        "Terra"
      ],
      "prev_evolution": [{
        "num": "133",
        "name": "Eevee"
      }]
    }, {
      "id": 136,
      "num": "136",
      "name": "Flareon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
      "type": [
        "Fogo"
      ],
      "details": "Depois de armazenar calor suficiente, a temperatura corporal deste Pokémon pode atingir até 1.700 graus Fahrenheit.",
      "height": "0.89 m",
      "weight": "25.0 kg",
      "candy": "Eevee Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "07:02",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Terra",
        "Pedra"
      ],
      "prev_evolution": [{
        "num": "133",
        "name": "Eevee"
      }]
    }, {
      "id": 137,
      "num": "137",
      "name": "Porygon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
      "type": [
        "Normal"
      ],
      "details": "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado via programação de computador.",
      "height": "0.79 m",
      "weight": "36.5 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "02:49",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 138,
      "num": "138",
      "name": "Omanyte",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
      "type": [
        "Pedra",
        "Água"
      ],
      "details": "Como alguns omanitas conseguem escapar após serem restaurados ou são soltos na natureza por pessoas, essa espécie está se tornando um problema.",
      "height": "0.41 m",
      "weight": "7.5 kg",
      "candy": "Omanyte Candy",
      "candy_count": 50,
      "egg": "10 km",
      "spawn_chance": 0.14,
      "avg_spawns": 14,
      "spawn_time": "10:23",
      "multipliers": [2.12],
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Terra"
      ],
      "next_evolution": [{
        "num": "139",
        "name": "Omastar"
      }]
    }, {
      "id": 139,
      "num": "139",
      "name": "Omastar",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
      "type": [
        "Pedra",
        "Água"
      ],
      "details": "Pesado por uma concha grande e pesada, Omastar não conseguia se mover muito rápido. Alguns dizem que foi extinto porque não conseguia pegar comida.",
      "height": "0.99 m",
      "weight": "35.0 kg",
      "candy": "None",
      "egg": "Omanyte Candy",
      "spawn_chance": 0.0061,
      "avg_spawns": 0.61,
      "spawn_time": "05:04",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Terra"
      ],
      "prev_evolution": [{
        "num": "138",
        "name": "Omanyte"
      }]
    }, {
      "id": 140,
      "num": "140",
      "name": "Kabuto",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
      "type": [
        "Pedra",
        "Água"
      ],
      "details": "Esta espécie está quase totalmente extinta. Kabuto muda a cada três dias, tornando suas conchas cada vez mais duras.",
      "height": "0.51 m",
      "weight": "11.5 kg",
      "candy": "Kabuto Candy",
      "candy_count": 50,
      "egg": "10 km",
      "spawn_chance": 0.10,
      "avg_spawns": 10,
      "spawn_time": "00:05",
      "multipliers": [
        1.97,
        2.37
      ],
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Terra"
      ],
      "next_evolution": [{
        "num": "141",
        "name": "Kabutops"
      }]
    }, {
      "id": 141,
      "num": "141",
      "name": "Kabutops",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
      "type": [
        "Pedra",
        "Água"
      ],
      "details": "Kabutops corta sua presa e suga os fluidos. As partes do corpo descartadas se tornam comida para outros Pokémon.",
      "height": "1.30 m",
      "weight": "40.5 kg",
      "candy": "Kabuto Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0032,
      "avg_spawns": 0.32,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
        "Elétrico",
        "Grama",
        "Lutador",
        "Terra"
      ],
      "prev_evolution": [{
        "num": "140",
        "name": "Kabuto"
      }]
    }, {
      "id": 142,
      "num": "142",
      "name": "Aerodactyl",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
      "type": [
        "Pedra",
        "Voador"
      ],
      "details": "Este é um Pokémon feroz dos tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado.",
      "height": "1.80 m",
      "weight": "59.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.018,
      "avg_spawns": 1.8,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Elétrico",
        "Gelo",
        "Pedra",
        "Ferro"
      ]
    }, {
      "id": 143,
      "num": "143",
      "name": "Snorlax",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      "type": [
        "Normal"
      ],
      "details": "Ele não fica satisfeito a menos que coma mais de 880 quilos de comida todos os dias. Quando termina de comer, ele adormece prontamente.",
      "height": "2.11 m",
      "weight": "460.0 kg",
      "candy": "None",
      "egg": "10 km",
      "spawn_chance": 0.016,
      "avg_spawns": 1.6,
      "spawn_time": "23:40",
      "multipliers": null,
      "weaknesses": [
        "Lutador"
      ]
    }, {
      "id": 144,
      "num": "144",
      "name": "Articuno",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
      "type": [
        "Gelo",
        "Voador"
      ],
      "details": "Dizem que as belas asas azuis deste Pokémon são feitas de gelo. Articuno voa sobre montanhas nevadas, sua longa cauda esvoaçando atrás dele.",
      "height": "1.70 m",
      "weight": "55.4 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Fogo",
        "Elétrico",
        "Pedra",
        "Ferro"
      ]
    }, {
      "id": 145,
      "num": "145",
      "name": "Zapdos",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
      "type": [
        "Elétrico",
        "Voador"
      ],
      "details": "Este Pokémon tem controle total sobre a eletricidade. Há histórias de Zapdos aninhando-se nas profundezas escuras de nuvens negras como breu.",
      "height": "1.60 m",
      "weight": "52.6 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Gelo",
        "Pedra"
      ]
    }, {
      "id": 146,
      "num": "146",
      "name": "Moltres",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
      "type": [
        "Fogo",
        "Voador"
      ],
      "details": "É um dos Pokémon pássaros lendários. Quando Moltres bate suas asas flamejantes, elas brilham com um brilho vermelho deslumbrante.",
      "height": "2.01 m",
      "weight": "60.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Água",
        "Elétrico",
        "Pedra"
      ]
    }, {
      "id": 147,
      "num": "147",
      "name": "Dratini",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
      "type": [
        "Dragão"
      ],
      "details": "Dratini mora perto de corpos de água que fluem rapidamente, como as piscinas de cachoeiras. À medida que cresce, Dratini muda de pele muitas vezes.",
      "height": "1.80 m",
      "weight": "3.3 kg",
      "candy": "Dratini Candy",
      "candy_count": 25,
      "egg": "10 km",
      "spawn_chance": 0.30,
      "avg_spawns": 30,
      "spawn_time": "06:41",
      "multipliers": [
        1.83,
        1.84
      ],
      "weaknesses": [
        "Gelo",
        "Dragão",
        "Fada"
      ],
      "next_evolution": [{
        "num": "148",
        "name": "Dragonair"
      }, {
        "num": "149",
        "name": "Dragonite"
      }]
    }, {
      "id": 148,
      "num": "148",
      "name": "Dragonair",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
      "type": [
        "Dragão"
      ],
      "details": "Este Pokémon vive em oceanos e lagos intocados. Ele pode controlar o clima e usa esse poder para voar no céu, cavalgando no vento.",
      "height": "3.99 m",
      "weight": "16.5 kg",
      "candy": "Dratini Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.02,
      "avg_spawns": 2,
      "spawn_time": "11:57",
      "multipliers": [2.05],
      "weaknesses": [
        "Gelo",
        "Dragão",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }],
      "next_evolution": [{
        "num": "149",
        "name": "Dragonite"
      }]
    }, {
      "id": 149,
      "num": "149",
      "name": "Dragonite",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      "type": [
        "Dragão",
        "Voador"
      ],
      "details": "É um Pokémon de bom coração. Se detectar uma pessoa ou Pokémon se afogando, Dragonite simplesmente deve ajudá-los.",
      "height": "2.21 m",
      "weight": "210.0 kg",
      "candy": "Dratini Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0011,
      "avg_spawns": 0.11,
      "spawn_time": "23:38",
      "multipliers": null,
      "weaknesses": [
        "Gelo",
        "Pedra",
        "Dragão",
        "Fada"
      ],
      "prev_evolution": [{
        "num": "147",
        "name": "Dratini"
      }, {
        "num": "148",
        "name": "Dragonair"
      }]
    }, {
      "id": 150,
      "num": "150",
      "name": "Mewtwo",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      "type": [
        "Psíquico"
      ],
      "details": "Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes.",
      "height": "2.01 m",
      "weight": "122.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ]
    }, {
      "id": 151,
      "num": "151",
      "name": "Mew",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      "type": [
        "Psíquico"
      ],
      "details": "Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto.",
      "height": "0.41 m",
      "weight": "4.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Inseto",
        "Fantasma",
        "Sombrio"
      ]
    }]
  }
  
const pokedex = pokeObject.pokemon


const port = 3000

app.listen(port, () => {
    console.log(`Meu servidor esta rodando na porta ${port}`)
})

app.get("/", (req, res) => {
    res.render("index.ejs",{
        pokedex
  
    })
   
})

app.get('/detalhes/:id', (req, res) => {
    const pokemonAtual = pokedex.filter((element)=> element.id == req.params.id)
    res.render('detalhes.ejs', {
        pokemonAtual
    })

})
