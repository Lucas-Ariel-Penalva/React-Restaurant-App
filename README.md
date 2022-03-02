# React Restaurant App para Alkemy

### La App se puede ver en funcionamiento acá: 

## https://lucas-ariel-penalva.github.io/React-Restaurant-App/


### Diferencias entre la Build de Github Pages y el Código.

* La Build no hace un POST a Alkemy usando Axios para validar la creación de un usuario. Esto si esta hecho en el código y funciona correctamente.

* La Build usa HashRouter en vez de BrowserRouter para que funcione correctamente en Github Pages. 

--------------

#### Update 2/3/2022, único cambio: Arregle un Bug tanto en la Build como en el código sobre como se hacia la Request para cargar nuevos items de Spoonacular. Ahora deberian poder agregarse nuevos items al menu siempre.


-------------

# Hola, Alkemy 👋

Este README detalla todas las features de la App, los puntos a mejorar y mi experiencia con el challenge.


## 1) Features, funcionalidad y objetivos logrados.


### * Formulario de Registro:

Pide un email valido (chequeado con un REGEX), un password y la confirmación de ese password. El botón para registrarse no se habilita hasta que todos los campos sean validos. Cuando se toca el boton para registrarse, se usa AXIOS para hacer un POST a la dirección de Alkemy. Si el POST es exitoso, se crea la cuenta en Local Storage.


### * Uso de Local Storage para simular una base de datos de usuarios:

Por cada usuario se guarda en Local Storage: 
* Token
* Email
* Password
* Los pedidos de comida que el usuario realizo.

### * Routing, Protected Routes:

Solo se puede acceder al Menú y a la Profile page cuando el usuario esta registrado y logueado. Cuando se intenta acceder a esas Routes sin permiso se dirige al usuario automáticamente a la pagina de Registro.

### * Handling de Routes inexistentes:

Cuando el usuario intenta ingresar una Route inexistente, se lo redirige segun su Status:

* Si esta logueado, se lo dirige al menu.
* Si no esta logueado, se lo dirige a la pagina de registro. 


### * Log off, Delete Account:

El usuario puede hacer un Log Off, lo cual lo devuelve a la pagina de registro sin borrar su cuenta en Local Storage. También puede elegir borrar su cuenta, lo cual elimina toda su información.

Es posible crear múltiples cuentas con distinta información y pedidos guardados.

### * Formulario de Login:

La pagina de registro tiene un Link hacia una pagina de Login, donde el usuario puede volver a entrar a su cuenta con el email y el password que uso al momento de registrar la cuenta. Al volver a ingresar, va a encontrar toda la información sobre sus pedidos pasados en la Profile Page.

### * Menú:

La pagina principal del Menú contiene las tarjetas que muestran los platos, botones para organizar el menú, el componente que muestra la orden que se va realizando y la barra de busqueda que permite agregar comidas de Spoonacular.

El menú carga unos platos de ejemplo (Dummy Data para mostrar la funcionalidad de la App incluso si Spoonacular no responde porque se acabaron los points de la API KEY o por algun otro motivo).

### * Botones de Sorting:

Permite organizar el menú según el criterio elegido: mas barato, mas saludable o con mas likes.

### * Componente para mostrar platos:

Se muestra cada plato en una tarjeta que contiene:

* Imagen.
* Área de texto.
* Titulo.
* Precio.
* Información mas relevante de la comida.
* Un botón para sumarlo a la orden.

En Page Load, estas tarjetas muestran Dummy Data. Se pueden agregar mas platos usando la API de Spoonacular.

### * Componente de Orden/Pedido:

Las comidas pedidas se van sumando a una orden que se muestra en la parte inferior del menú. Se muestra el nombre de cada plato, la cantidad que se esta pidiendo, el costo de cada ítem individual y el total global.

### * Search Bar vinculada a Spoonacular:

Se pueden agregar platos de la API de Spoonacular usando la barra de busqueda. Cuando una persona escribe tres o mas letras, se le pide un autocomplete a Spoonacular. Si hay ítems que encajan con la Query del usuario, se muestran abajo de la barra con un botón que permite agregarlos directamente al menú.


### * Realizar ordenes y verlas en la Profile page:

Cuando se confirma una orden, queda guardada en la cuenta del usuario y luego puede ser vista en la Profile page.

### * Sweet Alerts:

Use Sweet Alerts para pedir una confirmación de cada acción importante (registrarse, loguearse, hacer un pedido, borrar la cuenta).

### * Responsiveness, Iconos y Pseudo-estados:

El sitio es responsive, adaptándose correctamente a Viewports que van desde 360 px a 1200px de ancho. Las fuentes, los margenes, el padding, etc. de la mayoría de los elementos se adaptan según el ancho de pantalla.

Si bien no cubrí explicitamente los anchos de pantalla que sean mayores a 1200px, use CSS grid de tal forma que el sitio debería seguir viéndose bien incluso en resoluciones mas altas.

Además de eso, use Font Awesome y SVGs para varios iconos, y se aplican varios Pseudo-estados cuando es útil para indicarle algo al usuario (modificaciones en hover, focus y active, que son mayormente cambios de colores o transforms de Scale).


----------------------------------------

Con estas Features se cumplen *todos los objetivos principales y requerimientos del challenge*.


## 2) Deuda técnica y mejoras posibles.

Dado el tiempo limitado y que esto es un take-home project totalmente individual (y no algo para ser presentado a usuarios reales) en ocasiones tuve que programar rápido y tome atajos que no deberían tomarse en la producción de una App real.

Si bien mi solución al challenge cumple con todos los requisitos principales y además tiene otras features agregadas, quiero detallar los problemas existentes y las formas en las que se podría mejorar.


### Lógica:


* Hubiese sido util incorporar el Context API para prevenir el Prop-drilling. Esto aun no es un problema mayor, pero si esta aplicación creciera en Scope se volveria muy complicado seguir lidiando con Props de la forma actual.

* La View del Menú esta guardando piezas importantes de State que absolutamente deberían ser elevadas ("Lifting state up", como dice la documentación de React). Es por esto que el menú y la orden en progreso se limpian cuando se va a otra Route, algo que no es deseable.

* Actualmente no hay suficiente Error Handling. Se avisa al usuario de ciertos errores usando Sweet Alerts, pero faltan Checks y notificaciones importantes que mejorarían la User Experience.

* En Log Out o Delete Account: Se puede ver durante un momento el texto que se muestra cuando aun no se hizo una orden.



### Estilos y CSS: 

* React y TailwindCSS van excelentes juntos, pero para que funcione y produzca código claro es imperativo extraer partes de la App en componentes *apenas* tenga sentido hacerlo. Yo extraje varias partes de la App en componentes, pero no las suficientes. Por eso se pueden ver botones o inputs con estilos practicamente idénticos uno al lado del otro, cuando lo mejor es tener una Single-Source-Of-Truth para cada uno de esos elementos. Tailwind me permitió avanzar mas rapido mientras hacia Custom-CSS, pero al no extraer la suficiente cantidad de componentes el HTML se hizo extenso en ciertas áreas y puede resultar difícil de leer.


* No hice CSS especifico para dispositivos que tienen Dark-Mode enabled. Esto hace que los elementos puedan variar de color de formas que no programe especificamente.

* Al comenzar el proyecto, tuve la ambición de hacerlo totalmente accesible a Screen Readers y pase mucho tiempo leyendo y aprendiendo al respecto. La falta de tiempo me llevo a abandonar esa intención pero en algunas partes del HTML aun se pueden ver restos de ese intento de cubrir a Screen Readers.

* Al ser un proyecto individual y no basarme en ningún otro sitio o template, tuve que hacer toda la interfaz sobre la marcha. Por eso algunos elementos se ven extraños, hay algunos problemas ligeros de alineación de ciertos elementos y bordes que sobresalen uno o dos píxeles mas de lo que deberían.


Muchos de estos problemas se podrían arreglar tan solo en un día, pero *termine este challenge con el tiempo exacto* y no quiero introducir cambios importantes en la lógica en el mismo día de la fecha de entrega.

Me parecía importante detallar los problemas y mostrar que entiendo cuales serian las mejores practicas en una situación real.



## 3) Mi experiencia con el challenge.

Como mi solución al challenge cumple con todos los requisitos, en cierto sentido seria apropiado encontrarla aceptable o sentirse conforme. Sin embargo, soy conciente de no haber usado el tiempo disponible de la mejor forma, lo cual impacto la calidad del código. Cometí un error al establecer las prioridades.

Si me hubiese limitado a cumplir estrictamente con lo que se pidió en los requerimientos, seria posible entregar una App con código realmente limpio. Sin embargo, invertí mucho tiempo en Features extra como simular una base de datos, la profile page que muestra pedidos pasados, una funcion de Login separada de la de Registro, etc.

Actualmente mi especialidad son los temas mas vinculados a la programación pura: estructuras de datos, algoritmos, análisis de complejidad temporal, etc. Resolví cientos de problemas usando Javascript mientras practicaba estas habilidades, algo que hice inicialmente como preparación para entrevistas técnicas. Así llegue a estar [en el Top 0,2% de usuarios de Codewars](https://www.codewars.com/users/Lucas%20Ariel).

Como tengo tanta experiencia con algoritmos, todo lo que tenga que ver con hacer Sorts, Filters o Maps es extremadamente trivial para mi. Por eso pensé que podía agregar toda clase de Features Extras en muy poco tiempo, pero al estar usando Local Storage y tener que coordinarlo también con los componentes de React, termine consumiendo mas tiempo del esperado.

Si pudiera hacerlo devuelta, preferiría limitar el Scope del proyecto e incrementar la calidad del código para hacerlo mas mantenible y claro.

Lo tomo como una experiencia de aprendizaje sumamente positiva y un buen proyecto para sumar a mi CV.

## Muchas gracias al equipo de Alkemy por tomarse el tiempo de revisar mi solución y leer este README.
