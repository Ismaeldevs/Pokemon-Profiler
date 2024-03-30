# # # # # # # # # #
# IDEA PRINCIPAL  #
# # # # # # # # # #

- La idea principal de la página web fue crear algo simple, bueno y nada complicado
para el usuario quien desee buscar un pokemon, entonces para ello pense en la estructura de la web:

● Home
● PokemonList - Lista de Pokemones (PokeDex)
● PokeView - Detalles del Pokemon

¿Por que un Home y no directamente se muestre el PokeDex?

Esta pensamiento que tuve al respecto en crear un Home fue para que no sea tan repentino la 
aparición de multiples pokemones y se vea más como una página que tiene los intereses de brindar información
a un usuario que buscar saber detalles de un Pokemon o varios, entonces, fue lo primero a lo que fui a trabajar
pensando un Home donde se de una bienvenida y una muy breve info sobre la página web y para rellenar un poco añadí
algunas curiosidades relevantes sobre Pokemon.

Ahora la PokemonList pues fue hecha como el resto de PokeDex, multiples cards que muestren el nombre e ID del Pokemon
con un limite de 20 pokemones por página, este limite es fácilmente modificable pero para no saturar con muchos pokemones
lo mejor fue dejarlo en predeterminado (20).

Por ultimo de los detalles de los Pokemones, los pokemones traen mucha información y la verdad que fue la parte más "complicada" de 
programar pero iba firme a mi idea de mostrar una página con una descripción del Pokemon, sus detalles principales y estádisticas, al
principio esta idea era mostrar todos esos datos en un Modal desplegable pero mostrarlo en una página iba a ser mejor visto los detalles.

Así que una vez planteada toda mi idea sobre como iba a realizar la página de pokemones pues mi sitio web tenia que llevar un nombre
entonces pense en un nombre que haga referencia a los intereses de la página y decidí en llamarlo: Pokemon Profiler.



# # # # # # # # # #
# INICIALIZACION  #
# # # # # # # # # #

Para inicializar el proyecto se debe abrir la terminal usando ctrl + j o arriba a la izquierda donde dice Terminal damos click > New Terminal,
después en nuestra terminal escribimos:

- npm i => Esto para instalar toda la paqueteria, una vez instalada se escribe lo siguiente:

- npm run dev => Con esto nuestro proyecto se pondra en marcha o se iniciara.



# # # # # # # # # # #
# POKEMON PROFILER  #
# # # # # # # # # # #

¿Cómo se programo Pokemon Profiler?

Para la programación de Pokemon Profiler se utilizo Vite + React.js (con JavaScript).

[./Pages]

Lo primero que hice fue crear las páginas que iba a tener mi web y las cree en una carpeta
llamada Pages y dentro cree cada archivo con el nombre de la página las cuales son:

- Home
- Pokemones
- PokeView

[./Components]

Después cree una carpeta llamada Components donde cree archivos los cuales serán los componentes de mi
página web, una vez creado mis componentes importe los componenetes principales (MainHome, PokemonList, PokemonView, Footer)
a las páginas creadas en Pages

[./App.jsx]

En mi archivo principal instale la dependencia react-router-dom e importe los componentes de la librería para hacer las rutas de mi proyecto,
entonces para ello importe las páginas de Pages y vincule las páginas en mi proyecto con <Route />.

[./Components/MainHome]

En el archivo MainHome trabaje más que nada con etiquetas HTML y estilos con CSS e Bootstrap, esto por que
solo iba a reflejar texto en mi página Home, ya que Home es la primera página que tiene dicho objetivo ser
la bienvenida a Pokemon Profiler dando breve información.
El usuario para ingresar a la PokeDex se creo un Link (Importado de react-router-dom) diseñado como boton con la funcionalidad de redireccionar 
a la persona a la Lista de Pokemones.

[./Components/PokemonList]

Para realizar la PokeDex instale axios para la manipulación de la API de PokéAPI,
una vez instalado axios guarde la API en una constante llamada BASE_URL entonces
con una petición get de axios tomo los datos y los guardo en una constante llamada
response, con los datos guardados en response entro a los datos de los pokemones y los guardo en
las variable de estado (Pokemon y list) y todo esto dentro de la función getPokemones.

Después hago una función llamada getAllPokemones en la cual uso la peticion get con axios
para obtener la información de la API guardada en una constante llamada URL_ALL_POKEMONES que es 
exportada desde [./Constants/endpoints.js], hago el mismo procedimiento de guardar los datos en response
y entrar a los datos de los pokemones (en results) y guardar esos datos en una constante de
estado llamada allPokemones, pero para que las funciones getPokemones y getAllPokemones funcionen debemos
llamarlas... para ello utilizo el Hook de efecto (useEffect) donde dentro de él procedo a llamar las funciones
para que se ejecuten una sola vez.

Por ultimo en mi HTML armo todo lo que sería el titulo con una imagén relacionada a Pokemon 
y para mostrar los pokemones utilizo el siguiente componente:

- [./Components/PokeCard]

En mi componente Pokemonlist.jsx proceso a importar el componente PokeCard donde por medio de Props
le paso los datos obtenidos de la API y este mostrar los datos de los primeros 20 pokemones según el
limite establecido.


[./Components/PokeCard]

En este componente procedo a guardar los datos pasados por props en una variable constante llamada data
y realizo una petición a la url de los datos de data con axios.get, los datos obtenidos los guardo en la
variable response y posteriormente son guardados en una variable de estado creada anteriormente, todo esto
esta colocado dentro de una función llamada getPokemones en la cual es llamada dentro del Hook de efecto (useEffect)
para que se pueda ejecutar una sola vez.

Luego procedo a trabajar en el armado de la Card para hacer que muestre los datos obtenidos o guardados en la variable
de estado y en el footer de la card se coloco un <Link></Link> que va a redireccionar al usuario a una página donde vera
más detalles sobre el pokemon que haya seleccionado.


[./Components/PokemonView]

Este componente sin duda fue el que más trabajo llevo por delante y el que más linea contiene de todo
el proyecto trabajado. La funcionalidad de este componente es mostrar los detalles del Pokemon que haya
seleccionado el usuario y mostrarlo en la página PokeView.

¿Cómo se llevo a cabo este trabajo?

Para ello se importo el useParams para tomar la id del pokemon seleccionado por el usuario,
después se creo una función llamada getPokemon en la cual se creo una constante llamada url donde se guardo
uno de los endpoints importados de [./Constants/endpoints.js] añadiendole por medio de interpolación el id del pokemon
para obtener el enlace con los datos del pokemon, entonces eso se guardo en la variable url, después se hizo lo de siempre
de hacer una petición get por medio de axios a la variable url, los datos obtenidos se guardaron en una variable llamada response
y los cuyos datos obtenidos por medio de response se los guardaron en una variable de estado llamada pokemon.

Una vez hecho esto se crearon varias variables de estados como: species, type, habitat, entre otras, estas variables de estado
guardaran datos respectivos del pokemon, por ejemplo en la variable de estado habitat contendra los datos del habitat del Pokemon,
luego la variable skills guardara los datos de las habilidades del pokemon y así con el resto y todo esto dentro de la función getPokemon.

Después cree distintas funciones donde se realiza un recorrido de los datos de cada variable de estado, osea para entender mejor a lo que me refiero
básicamente creo una función llamada getSkills que recibira por parametros los datos que contiene la variable de estado skills obtenidos de la función
getPokemon, después creo una variable constante que es un array vacio, luego proceso en hacer un forEach para recorrer la url de los datos obtenidos por parametro y los datos que obtengo en el recorrido del ForEach los voy guardando en mi array con el metodo push y guardo los valores de mi array
en la variable de estado skills, este proceso de repitio varias veces pero en algunos fue distintos ya que se tenia que validar e implementar métodos
para conseguir los datos del Pokemon, esto fue por que no todos los pokemon contienen sus datos en el primer objeto, por ahí uno se tiene que meter en
más "profundidad" para lograr tener los datos del pokemon y el tema de la validación fue más que nada por que me tope en datos donde algunos pokemones
tienen en null sus datos por ende para no mostrar datos nulos proceso a mostrar otros datos respecto al Pokemon según lo que quiero mostrar de él.

Sinceramente es lo más resumido posible de lo que se hizo para conseguir los datos del pokemon, ya que si me tengo que poner a contar paso a paso todo
el proceso realmente sería demasiado texto, más del que ya hay de por si.

Ahora para finalizar y mostrar los datos obtenidos del Pokemon del usuario lo hice estructurando la página con react-bootstrap colocando
varias Row, Col, mostrando texto con un CardText y dentro algunos Badge y para dejarlo mejor aplique un poco de CSS para darle una mejor
perspectiva visual cambiando las fuentes de algunos textos, separando items de otros y mucho más.


[./Components/Footer]

Ya por ultimo este componente es de lo más fáciles ya que simplemente es código HTML en el cual por medio de divs se separa items y usando
los Link de react-router-dom los usuarios pueden redireccionarse a las paginas y otros items como mis redes sociales, con la ayuda de CSS se lo pudo
dejar más limpio e ordenado y con fontawesome se le coloco iconos a cada uno de los Link que contienen texto.

# # # # # # # # # # # # # # #
# OPCIONES DE LA PAGINA WEB #
# # # # # # # # # # # # # # #

Las opciones que tenia que tener la página web fueron las siguientes:

- Poder tener una opción de cambiar a modo oscuro
- Cambiar el idioma a inglés y español
- La página tenia que tener paginación.


# [Paginación]

Para realizar la páginación lo que hice fue crear todos variables de estados las cuales fueron limit y offset, la variable de estado
limit fue establecida como 20, osea que mostrara un limite de 20 pokemones y la offset que muestra desde que pokemon tiene que empezar
a mostrar se establecio en 0 pero este se modificara cada vez que se pase a la siguiente página y empezara a mostrar los pokemones desde el siguiente
del ultimo pokemon. Ahora lo que se hizo para lograr esto fue crear una función llamada goPage la cual recibira por paramtros los datos del offset
y se hace un calculo matemático para lograr que del ultimo pokemon pase a mostrar el siguiente de este ultimo, una vez obtenido este dato se lo guarda
en la variable de estado offset para ser transferido ese dato a la BASE_URL y empiece a mostrar los pokemones a partir del offset modificado.

La paginación se la hizo instalando pagination-control que una vez que lo importo y uso la etiqueta le establezco props para que muestre
la cantidad de páginas, el limite, la página en la que se encuentra activo, y la función para cambiar de página y más.


# [Modo Oscuro (DarkMode)]

La opción de cambiar a modo oscuro fue sencilla utilizando Context, para ello cree una carpeta llamada Context y dentro
cree el archivo ThemeContext donde se guardara y retornara los valores según la elección del usuario, yo deje como predeterminado que sea
Light osea que no este en modo oscuro.

Despues fui al archivo [./App.jsx] importe mi contexto ThemeContext.jsx y coloco todas mis rutas de las páginas en un div con un id en el cual
cambiara según el modo seleccionado por el usuario, básicamente, en el archivo [./App.css] se llama la id Light y Dark la cual contienen
los colores que envolveran a la página y según lo que quiera el usuario se mostrara uno o el otro gracias al ThemeContext y para esto pueda funcionar
finalmente envuelvo mi App en [./main.jsx] con el ThemeProvieder y en mis distintas páginas en Pages importando el contexto.

# [Cambiar Idioma]

Para poder cambiar el idioma en la página web lo que se hizo fue instalar react-i18next que es un framework que me facilara la traducción
de los textos en mi web.

Se comenzo creando una carpeta llamada Translations donde dentro se crearon dos carpetas una llamada es (español) y otra en (inglés),
dentro de ambas se creo un archivo .json llamado global, después me fui a mi [./main.jsx] donde importe react-i18next y los archivos
global de la carpeta es y en, después en el mismo main inicialice mis traducciones y dentro la inicialización se coloco que mi página web
inicie con el idioma español y que los recursos son otros idiomas que son es y en, proporcionandole las direcciones de donde sacara las
traducciones de la web.

Después envolvi mi app en un provider i18next y a este provider le paso por medio de props los datos de i18next, y ya por ultimo
en cada uno de mis componentes importe un Hook de i18next que es el useTranslation con el cual iba a tomar los valores traidos del
archivo global y los guardo en una variable de estado, esta variable de estado la coloco en cada etiqueta y el texto que estaba en la 
etiqueta lo coloco en mi archivo global.json en ambas carpetas que lo contengan pero con la diferencia de que uno en español y otro en inglés el texto.

Ahora por ultimo para que el usuario pueda realizar el cambio de idioma de inglés o español opte por utilizar un NavDropdown de react-bootstrap
el cual al hacer click nos mostrara dos opciones que serán inglés y el otro español, ambos items contienen un evento onClick donde dentro se realiza
una función para realizar el cambio de idioma sencillamente.

# [Extra]


Ya por ultimo para terminar con mi página web de Pokemones decidi añadir un buscador en el componente [./Components/PokemonList],
este buscador es util para los usuarios para que no esten realizando pasando de pokemones en pokemones hasta encontrar el que buscan, se les hara
mucho más fácil en un buscador colocar el nombre del pokemon y listo.

Para lograr el buscador lo que hice fue crear un input donde por medio de un evento onChange tomaba los datos del usuario y luego en una función
llamada Search realizo las validaciones y utilizo el método trim para sacarle los espacios en caso de que haya ingreso el nombre con espacios vacios
y después en caso que la validación previamente hecha es correcta se procede a realizar un metodo filter a la función que llama a todos los pokemones
y se terminaria filtrando el nombre buscado y todo esto se lo guarda en la variable de estado list que mostrara el pokemon al usuario y todo el procedimiento de filtración y guardar los datos en la variable de estado se lo hace dentro de una función timeout.


# # # # #
# FINAL #
# # # # #

Sinceramente espero que se haya entendido todo lo que escribi sobre como logre hacer cada cosa importante de la página, mi expresión no es la mejor pero trate de que sea lo mejor entendible posible. Sin más que decir está página estara alojada temporalmente en mi netlify, luego sera removido posiblemente.


» Gracias.


- - - - - - - -


