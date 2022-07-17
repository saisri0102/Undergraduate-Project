# Critical Rendering Path (CRP)
- Tokenizing (understand the words) -> DOM node
- Browser data structures
    - DOM Tree (Tree of HTML elements)
    - CSSOM Tree (CSS Object Model)
    - DOM + CSSOM -> Render Tree
- Render Tree is used for layout purpose
- Some steps in showing a page
    - Parsing the page (Going through the HTML and creating the DOM and CSSOM)
    - Rendering the page
        - Where every element should appear on the viewport
        - Then painting every pixel on the page
- JS script includes are parser-blocking
- CSS is render-blocking (DOM will be constructed, but page elements will not appear as long as CSS is not parsed and understood)
- JS blocks on CSSOM construction

