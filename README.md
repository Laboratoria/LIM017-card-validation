# LIM017-card-validation
# Maid Store

Maid Store es un e-commerce digital de productos sobre anime, videojuegos y más.
La interfaz de pago fue pensada para un público que usa e-commerce.

## Authors

- Nay trevejo  - [Mi github](https://www.github.com/sharksumi)


## Features

- Ingreso de data para envío (Nombre, Dirección, correo electrónico.)
- Ingeso completo de la información de las tarjetas (Número de tarjeta, Fecha de Vencimiento, Codigo de seguridad)
- Validacion de tarjeta (Si el numero de la tarjeta es válida o no)
- Oculta todos los dígitos de la tarjeta menos los 4 últimos, como protección de seguridad.


## UX
El UX inicial fue pensado con una maquetacion sencilla. 
![Prototipo 1](https://raw.githubusercontent.com/Sharksumi/LIM017-card-validation/ID-de-tarjeta/src/img/maquetas/prototipo%201.png)
La maquetacion estaba hecha en papel. 

Luego mientras iba avanzando la realizacion del algoritmo se paso la maquetacion a figma.

# Prototipo 2
![Prototipo 2](https://raw.githubusercontent.com/Sharksumi/LIM017-card-validation/ID-de-tarjeta/src/img/maquetas/prototipo%202.png)

El segundo prototipo se realizó en figma con una maquetacion sencilla. 
No se considerararon todos los colores finales, pero si la funcionalidad del Validator.

# Prototipo 3

![Prototipo 3](https://raw.githubusercontent.com/Sharksumi/LIM017-card-validation/ID-de-tarjeta/src/img/maquetas/prototipo3.png)

EL prototipo 3 Contemplaba el diseño de la pagina así como algunos colores que se encontraban n la paleta de la marca. 
Aquí se acerca más al resultado final del diseño de la página web.

#  Final

![Captura de pantalla final](https://raw.githubusercontent.com/Sharksumi/LIM017-card-validation/ID-de-tarjeta/src/img/maquetas/Capturas%20de%20pantalla%201.png)
![Captura de pantalla final2](https://raw.githubusercontent.com/Sharksumi/LIM017-card-validation/ID-de-tarjeta/src/img/maquetas/Captura%20de%20pantalla%202.png)

La pagina final se acerca más al prototipo 3. 
Esta página está diseñada con los coloes que se acercan a los de la marca. 

## Usuarios
Los usuarios de esta página de verificación de tarjetas son los clientes de la marca.
Cuando los usuarios que desean comprar alguno de los productos ofrecidos, se les llevará a esta página para terminar la transacción. 

Los usuarios se encontrarán con las funciones para protección de sus datos.

# Solución
El uso de Maskify y verificacion de tarjeta no solo dan mayor seguridad a las actividades del usuario final.
 
## Plan de acción

En este proyecto prioricé el funcionamiento del algoritmo de Luhn. 
Me centré en crear una estructura básica de HTML y ha realizar un algoritmo que cumpliera con las pruebas necesarias. 
Al principio me encontré con muchas fallas en mi algoritmo hasta que estudié el algoritmo por si solo y realicé un mapa lógico de como debería funcionar.
Una vez con ese mapa se pudo crearr tareas más pequeñas y pruebas unitarias de cada linea de codigo. 

Una vez que el algoritmofuncionaba se continuó con el maskify. 

Cuando se logró enmascarar los digitos de la tarjeta, se pasó al siguiente nivel. 

El UX y el diseño de la página fue lo último que se realizó, con el uso de CSS, utilizandop estilos, grid y más.

Cuando todo estuvo finalizado se hicieron algunas pruebas de funcionalidad. 


De igual manera se seguirá intentando con los objetivos del Hacker Edittion. 
