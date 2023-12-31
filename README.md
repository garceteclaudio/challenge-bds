# Challenge QA

Este es un proyecto de pruebas automatizadas de la pagina web https://www.ebay.com/, los cuales se encuantran desarrollados por Claudio Rodolfo Garcete, principalmente con WebdriverIO y Cucumber. Los test se ejecutan de forma local.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos


- Es necesario tener instalado [node](https://nodejs.org/en/download/) para instalar y ejecutar el proyecto.
- Se requiere la version 113 de google chrome en el dispositivo mobile

### Instalacion

- Clonar el proyecto - `https://github.com/garceteclaudio/challenge-bds.git`.

- Para utilizar el proyecto, se debe abrir una consola bash, situarnos en el directorio raiz del proyecto e instalar las dependencias de la siguiente manera:


```
npm install
```



### Ejecutando las pruebas

Las pruebas son ejecutadas localmente.

- Ubicacarse en la raiz del proyecto.

- Ejecutar el siguiente script:

```
npm run wdio
```

### Reporte de pruebas

- Ubicarse en el archivo reports/html/index.html

![Screenshot](reports.png)


## Construido con
* [WebdriverIO](https://webdriver.io/es/) - Framework E2E utilizado
* [Cucumber](https://cucumber.io/docs/cucumber/) - Framework para escribir los escenarios de prueba en lenguaje GHERKIN
* [NPM](https://www.npmjs.com/) - Manejador de dependencias

## Autor
* **Claudio Rodolfo Garcete** - *Automation Tester* 

## Consultas
* garcete.claudio@gmail.com