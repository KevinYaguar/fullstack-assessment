# Aplicación para crear encuestas 

## Cómo iniciar la aplicación web:
#### Clonar repositorio https://github.com/KevinYaguar/fullstack-assessment.git
#### Utiliza los códigos del archivo sql.txt para generar la base de datos y las tablas con sus respectivos campos.
#### Copiar el código de .env.example y pegarlo en el env. con las variables de entorno que utilizes para tu administrador de base de datos. 
#### Utiliza el código npm install parado sobre los directorios /fullstack-assesment/back y front/fullstack-assessment para instalar todas las dependecias del proyecto.
#### Utiliza npm start parado sobre los directorios /fullstack-assesment/back y front/fullstack-assessment para iniciar la aplicación. Puede probar que el backend está levantado con el endpoint /status.

## Uso de la aplicación web:
#### Al llenar los campos del formulario de la izquierda se completarán automáticamente en la muestra de la derecha.
#### Al momento de querer guardar una opción hay que presionar el botón "agregar opción" para que quede registrada. Una vez que la agregás se generará automáticamente una nueva opción a agregar y se reflejará en la muestra. Si ya no quieres más nuevas opciones puedes quitar la nueva opcion para que no se refleje en la muestra. 
#### La misma lógica de las opciones aplica para las preguntas, para registrar una en la muestra se presiona "agregar pregunta" y si se genera una nueva pregunta a agregar en la muestra. Si ya no se quieren más nuevas preguntas se toca el boton trash para no agregar más. 
#### Al presionar "crear encuesta" se guardarán los datos en la base de datos y aparecerá en el listado de encuestas del select de la derecha para moder verlas. 
