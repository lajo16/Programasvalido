---
name: full-visual
description: Crea un explicador animado a pantalla completa (una página HTML con escenas animadas paso a paso) sobre cualquier tema y lo publica como Artifact. Úsalo cuando el usuario escriba /full-visual seguido de un tema, o pida "explícame X con una animación / de forma visual".
---

# /full-visual — explicador animado a pantalla completa

El usuario da un tema (por ejemplo: "explica cómo funciona la batería de un portátil").
Tu trabajo es convertirlo en una página HTML animada, a pantalla completa, que se
entienda sin leer mucho texto, y publicarla con la herramienta Artifact.

## Pasos

1. **Entiende el mecanismo real.** Antes de dibujar, escribe para ti (no en la respuesta)
   las 4–6 ideas clave del tema en orden causal: qué hay dentro, qué se mueve, por qué,
   qué pasa al final. Cada idea será una escena.
2. **Diseña las escenas.** Cada escena tiene:
   - un título corto (3–5 palabras),
   - 1–2 frases de explicación, en lenguaje sencillo,
   - una animación que *muestra* esa idea (partículas que se mueven, barras que se llenan,
     flujos por un circuito, una gráfica que se dibuja). La animación es el contenido,
     no decoración.
   - Si varias escenas comparten el mismo dibujo (p. ej. el interior de una pila),
     reutiliza el mismo SVG y cambia solo el modo de la animación.
3. **Construye la página** en un único archivo `.html`:
   - Escenario a pantalla completa (`height: 100%` en `html` y `body`, nada de `100vh`).
   - SVG con `viewBox` para el dibujo + `requestAnimationFrame` para la animación.
   - Panel de texto con número de escena, título, explicación y un dato numérico vivo
     (porcentaje, voltios, velocidad…) cuando el tema lo tenga.
   - Controles: Anterior / Reproducir-Pausa / Siguiente, puntos de progreso, flechas del
     teclado y deslizar en móvil. Avance automático cada ~10 s mientras se reproduce.
   - Respeta `prefers-reduced-motion` (sin avance automático, animación más lenta).
   - Funciona en móvil (~400 px): el texto pasa debajo del dibujo.
   - Sin librerías salvo que sean imprescindibles; nada de imágenes externas.
   - Idioma: el mismo en que escribe el usuario.
4. **Antes de escribir el archivo** carga la skill `artifact-design` (o haz `quickstart`
   de Artifact) y sigue sus reglas: `<title>` de 2–4 palabras, colores como tokens,
   fuentes de Google Fonts con alternativa, márgenes laterales seguros.
5. **Publica** con la herramienta Artifact (`icon` de una palabra, `description` de una
   frase) y responde con el enlace y una línea sobre qué muestra cada escena.

## Ejemplo de referencia

`explicadores/bateria-portatil.html` en este repositorio es un explicador hecho con esta
skill: 5 escenas (partes de la celda, carga, descarga, el BMS, desgaste). Úsalo como
plantilla de estructura y de controles.
