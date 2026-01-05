# Unidad 1 – Principios Básicos de JavaScript y Backend

Repositorio base para la Unidad 1 del curso de Backend I.

Este repositorio contiene los ejemplos desarrollados en la clase, pensados para ejecutarse con Node.js desde consola y ser una referencia para el estudio.

---

## 📌 Objetivos
- Introducir JavaScript en entorno backend
- Comprender Node.js y la ejecución por consola
- Reforzar conceptos de variables, funciones y clases
- Entender  el uso de **variables estáticas**

---

## ⚙️ Requisitos

- Node.js instalado (v20 o superior)  [NodeJS](https://nodejs.org/es/download)
- Editor de código (Visual Studio Code) [Vs Code](https://code.visualstudio.com/)


---

## 📂 Estructura del Proyecto

```
unidad-01/
│
├── src/
│   ├── 01-console.js
│   ├── 02-variables.js
│   ├── 03-functions.js
│   ├── 04-mostrarLista.js
│   ├── 05-class-persona.js
│   └── 06-class-contador.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## 💻 Ejemplos desarrollados

### 1️⃣ Consola en Node.js – `01-console.js`

```js
console.log("Hola desde Node.js");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
```

---

### 2️⃣ Variables y mutabilidad – `02-variables.js`

```js
let nombre = "Pepe";
let edad = 25;

console.log(nombre);
console.log(edad);

edad = edad + 1;
console.log(edad);

const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);
```

---

### 3️⃣ Funciones tradicionales y flecha – `03-functiones.js`

```js
function sumar(a, b) {
  return a + b;
}

const sumarFlecha = (a, b) => a + b;

console.log(sumar(2, 3));
console.log(sumarFlecha(4, 5));
```

---

### 4️⃣ Hands On Lab – mostrarLista – `04-mostrarLista.js`
