¿Cómo arrancar el proyecto?

1. En la terminal de tu computadora dirigete a la carpeta donde quieres tener el proyecto.

2. Usar el comando: 
git clone git@github.com:Crismcollins/Products_List.git
o 
https://github.com/Crismcollins/Products_List.git
según tu preferencia.

3. Abrir el proyecto en Visual Studio Code u otro IDE de preferencia.

4. Crear archivo .env y configurar la env BACKEND_URL a la url https://fakestoreapi.com, puedes ver en el archivo .env-example como se usa la env.

5. Instalar las dependencias con el gestor de paquetes de tu preferencia:
npm install
o
yarn 

6. instalar los pods con los comandos:
cd ios && pod install && cd ..
o
yarn pods

7. Ejecutar el proyecto:
yarn start
o
yarn ios


Para logear en la app, puedes utilizar las siguientes credenciales:
username: donero
password: ewedon

FAQS
1. Probablemente cuando instales los pods, tengas un mensaje de error similar a este:
"undefined method 'exist' for File:Class"
En tal caso, debes instalar la versión de ruby 3.2.2 en tu computadora, y la version de bundler compatible para dicha versión:

a. Instalar el manager de versiones de ruby:
brew install rbenv ruby-build

b. Inicializarlo:
rbenv init

c. Instalar la versión de ruby en el manager:
rbenv install 3.2.2

d. Instalar el bundler con una versión compatible con la versión 3.2.2 de ruby:
gem install bundler -v 2.4.22

e. Asegurarse de que la version de ruby que entrega este comando sea la 3.2.2:
rbenv local

f. Instalar las gem del bundler:
bundler install

g. Instalar los pods
bundler exec pod install --project-directory=ios

En caso de que quieras ejecutar con otra versión de ruby en tu computadora:
a. puedes dirigirte al archivo .ruby-version en el directorio raíz del proyecto y cambiar la versión que gustes.
b. En el Gemfile debes apuntar a la versión de cocoapods en la que estas trabajando.
c. Instalar el bundler compatible con la versión de ruby y cocoapods que desees:
gem install bundler -v x.x.xx

2. El login es sensible a mayúsculas, por lo que debes asegurarte de respetarlar al momento de hacer login.