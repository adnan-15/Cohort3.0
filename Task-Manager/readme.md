# Browser Rendering & Event Model

A concise reference on how browsers turn HTML/CSS into pixels, and how
DOM events travel through that structure.

## Live Demo

[Task Manager Application](https://task-managerbyadnan.netlify.app/)

------------------------------------------------------------------------

## 1. Parsing

Parsing is the process of converting raw source code (HTML, CSS, JS)
into a structured, in-memory representation the browser can work with.
The HTML parser reads bytes → characters → tokens → nodes → tree,
building the **DOM**. CSS is parsed separately into the **CSSOM**.
Parsing is not purely sequential --- the browser can pause HTML parsing
to fetch and execute blocking scripts, then resume.

## 2. Tokenization

Tokenization is the first stage of parsing: the raw character stream is
broken into meaningful units called **tokens** (start tags, end tags,
attribute names/values, text, comments). For HTML, this is done by a
tokenizer state machine (per the HTML5 spec) that emits tokens like
`StartTag: <div>`, `Attribute: class="box"`, `Characters: "Hello"`,
`EndTag: </div>`. These tokens are then consumed by the tree
construction stage to build the DOM.

``` text
<p class="intro">Hi</p>

   ↓ tokenize

StartTag(p, class="intro") → Characters("Hi") → EndTag(p)
```

## 3. DOM Tree

The **Document Object Model** is the tree structure built from HTML
tokens. Each element, attribute, and piece of text becomes a node,
nested according to the document's markup. It's a live, in-memory
representation of the page structure --- and the interface JavaScript
uses to read/manipulate content (`document.querySelector`,
`.appendChild`, etc.).

``` text
html
 └─ body
     ├─ h1
     └─ p
         └─ "Hi"
```

## 4. CSSOM Tree

The **CSS Object Model** is the analogous tree built from all CSS rules
(external stylesheets, `<style>` tags, inline styles). Each node holds
computed style information and inherits from its parent, similar to how
CSS cascade/inheritance works. Unlike DOM parsing, CSS is
render-blocking by default --- the browser won't paint until CSSOM is
ready, because styles can drastically change layout.

## 5. Render Tree

The **Render Tree** (a.k.a. layout tree) is built by combining the DOM
and CSSOM: for each visible DOM node, the browser attaches its computed
styles. Nodes with `display: none` are excluded (though
`visibility: hidden` nodes are included but invisible). From the Render
Tree, the browser performs:

-   **Layout (Reflow):** calculates exact position/size of each node.
-   **Paint:** fills in pixels (colors, borders, shadows, text).
-   **Composite:** layers are combined onto the screen (often
    GPU-accelerated).

``` text
DOM + CSSOM → Render Tree → Layout → Paint → Composite
```

## 6. Event Bubbling

When an event fires on an element, it first runs on that element, then
**bubbles up** through its ancestors to the root
(`target → parent → ... → document`). Most DOM events (click, input,
keydown, etc.) bubble by default.

``` js
child.addEventListener('click', () => console.log('child'));

parent.addEventListener('click', () => console.log('parent'));

// Clicking child logs: "child" then "parent"
```

## 7. Event Capturing

Capturing is the **opposite direction** --- the event travels from the
root down to the target before bubbling back up. It's the first of three
phases in the DOM event flow: **Capture → Target → Bubble**. To listen
during capture, pass `{ capture: true }` (or `true`) as the third
argument to `addEventListener`.

``` js
parent.addEventListener('click', () => console.log('parent capture'), true);

child.addEventListener('click', () => console.log('child bubble'));

// Clicking child logs: "parent capture" then "child bubble"
```

## 8. Event Delegation

A pattern that exploits bubbling: instead of attaching a listener to
every child element, attach **one listener on a common ancestor** and
check `event.target` to determine which child triggered it. This is more
memory-efficient and automatically works for dynamically added children.

``` js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicked item:', e.target.textContent);
  }
});
```

------------------------------------------------------------------------

## Summary Flow

``` text
HTML bytes → Tokenize → Parse → DOM Tree ┐
                                          ├─→ Render Tree → Layout → Paint → Composite
CSS bytes  → Tokenize → Parse → CSSOM ────┘

Event flow: Capture (root → target) → Target → Bubble (target → root)
```
