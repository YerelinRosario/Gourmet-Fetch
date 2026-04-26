# 🍽️ Gourmet Fetch

> Aplicación web para explorar recetas del mundo, conectada a una API real y construida con HTML, CSS y JavaScript puro.

---

## 📖 Descripción

**Gourmet Fetch** es una aplicación web desarrollada con **HTML, CSS y JavaScript** que consume la API pública [TheMealDB](https://www.themealdb.com/) para mostrar recetas de forma dinámica, organizada y visualmente atractiva.

El proyecto fue creado como **práctica final de JavaScript**, cumpliendo con el objetivo de conectarse a una API, obtener datos con `fetch` y presentarlos en la interfaz de manera clara y responsive.

La aplicación permite explorar recetas de tres formas diferentes:

- 🗂️ **Por categoría**
- 🔍 **Por nombre**
- 🔢 **Por ID**

---

## 🚀 Funcionalidades

### 1. Explorar por categoría
Selecciona una categoría en la página principal y se realizará una consulta automática a la API para mostrar los platos correspondientes.

Categorías disponibles: `Beef`, `Breakfast`, `Chicken`, `Dessert`, `Lamb`, `Pasta`, `Seafood`, `Vegetarian`

### 2. Buscar por nombre
Escribe el nombre de una receta en el buscador y obtén resultados dinámicos relacionados con ese texto.

### 3. Buscar por ID
Ingresa el ID de una comida específica para encontrarla directamente en la base de datos.

### 4. Modal de detalles
Cada tarjeta incluye un botón **"Ver Detalles"** que abre un modal con información completa del plato:

- 🖼️ Imagen del plato
- 📛 Nombre
- 🏷️ Categoría
- 🌍 Área o tipo de cocina
- 🧂 Ingredientes
- 📋 Instrucciones de preparación

### 5. Diseño responsive
La interfaz se adapta a diferentes tamaños de pantalla, ofreciendo una experiencia agradable tanto en computadoras como en dispositivos móviles.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de las páginas |
| CSS3 | Estilos visuales y diseño responsive |
| JavaScript | Lógica, consumo de API y renderizado dinámico |
| Fetch API | Comunicación con TheMealDB |
| TheMealDB API | Fuente de datos de recetas |

---

## 📁 Estructura del proyecto

```
gourmet-fetch/
│
├── index.html          # Página principal (explorar por categoría)
├── buscar.html         # Página de búsqueda por nombre
├── id.html             # Página de búsqueda por ID
│
├── css/
│   └── style.css       # Estilos globales y responsive
│
└── js/
    ├── categorias.js   # Lógica de exploración por categoría
    ├── buscar.js       # Lógica de búsqueda por nombre
    ├── id.js           # Lógica de búsqueda por ID
    └── modal.js        # Lógica del modal de detalles (reutilizado en todas las páginas)
```

---

## 🌐 API utilizada

Este proyecto consume la API pública de **[TheMealDB](https://www.themealdb.com/)**.

### Endpoints utilizados

**Obtener comidas por categoría:**
```
GET https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
```

**Buscar una comida por nombre:**
```
GET https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
```

**Obtener detalles de una comida por ID:**
```
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
```

---

## ⚙️ Cómo funciona

```
Usuario selecciona categoría / escribe nombre / ingresa ID
            │
            ▼
    Fetch a TheMealDB API
            │
            ▼
  Se renderizan tarjetas con imagen y nombre
            │
            ▼
  Usuario hace clic en "Ver Detalles"
            │
            ▼
  Fetch por ID → Se llena el modal con info completa
```

---

## 🎯 Objetivo académico

Este proyecto fue desarrollado para cumplir con una práctica final de JavaScript cuyo objetivo era:

- ✅ Conectarse a una API pública
- ✅ Usar `fetch` para obtener datos
- ✅ Mostrar la información dinámicamente
- ✅ Crear una interfaz agradable a nivel visual
- ✅ Aplicar HTML, CSS y JavaScript de manera organizada

---

## 🔮 Mejoras futuras

- [ ] Agregar enlace al video de YouTube de la receta
- [ ] Mejorar animaciones del modal
- [ ] Reutilizar la lógica de creación de cards en un archivo compartido
- [ ] Añadir loaders más visuales
- [ ] Incluir mensajes de error más personalizados

---

## 👤 Autor

Yerelin Vanessa Rosario
Proyecto desarrollado como práctica final de JavaScript.

---

## 📌 Estado del proyecto

✅ **Funcional y completo**