

UTF-8 : Character Encoding
- Dry: Dont repeat yourself
    - Trying  not to repeat. 
    - Ex: External Css
    - Creating reference variable when smthg repeatedly using
- Combinators: +, ~

    - +: The adjacent sibling selector is used to select an element that is directly after another specific element.
    - Sibling elements must have the same parent element, and "adjacent" means "immediately following".

    - ~: The general sibling selector selects all elements that are siblings of a specified element.
    - div + p: It selects p which is imediately after div.
    - div ~ p: It selects all the p after div. 

    - 3n+1 : It selects 1, 4, 10, 13 etc
- Specificity: 
    - Inline css has more imprtance than external and internal.
    - Id selector is more important than Class selector.
    - class selector is mor important than element selector.
    - Id> class> Element (No matter which is first or which is last)
    - Browser counts no.of ids and no.of classes based on that it give importance.
    - [ a,b,c,d] 
    a: 0 for internal/ external styles: 1 for inline styles
    b: No.of times an id appears in the selector
    c: No.of times a class appears
    d: No.of times a type appears
    - Browser checks from left to right
    - Start comparing b if two selectors have same then its tie. then go for c if both are same then check d.
    - Else the one with highest value wins.

- Units:
    - Absolute: px
    - Relative: 1.2, 50%, em
    - font-size:2em // It means size is 2times the size of its parent or inherited value 
    - Ex: let para is present in body.
    - Let the size of body font size is 10px
    -Then size in para inside body will be 2*10px = 20px
    - ALways good to use relative units.
    - When using relative units ask to which it is relative to.
- Directional Properties
    - If we miss any direction then it will take its opposite direction property;
    - Direction: top right bottom left - Similar to clock wise. 
    - 1 Value: Same for all  (top,bottom,right,left)
      2 values: (top, bottom), (left, right)
      3 values: (top),(right,left),(bottom)
      4 values: (top), (right), (bottom), (left)
- Default Values
    - It depends on Browser
    We can check in inspect -> computed. 
    - p: font-size- medium or 16px 
    - Background color: Transparent
    - color:black- not specified
    - border-width: medium -1px
    - border- style: none
    - line-height: medium -1.2
    - text-align: left if ltr, right if rtl
    - overflow: visible
    - float: none
- Shorthand Properties
[shorthand-mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
- Inheritance
    - Certain Properties will be inherited from its parent.
    - Ex: Color, size gets inherited but border, padding, background-color wont inherited.
    - If we use inherit keyword in style then parent values get inherited. 
- Keywords
    - Initial
        * sets default value of a property to an element
    - Inherit
        * Used to iherit the parent properties
- Box Model
    - Box that wraps around every HTML element. 
    - It consists of: margins, borders, padding, and the actual content. 
    1. Total Screen area= [border+padding+margin+content area]= 1280 let.
    - Without (box-sizing:border box)
        - Width:100% -> Content area width= 100% of parent content area width;
        - So box overflows the parent content area.
    - Without (border box and without width provided)
        - Entire box will be within parent content area
        - no explicit width 
        - what remains after assigning border, margin, padding horizontally is assigned as width
        - Then Width of Content area= (Parent content area)- (border+padding+margin)
    - With (border box)
        - Box except margin will be within in given percent of parent content area
        - Width:100% -> (Content area width+ border+ padding) = (100% of parent content area)
    - Entire Box (Including margins) should be 50% of Parent
        - Use border box
        - Then width+2*margin = 50% of parent content area
        Ex:
        Let margin= 5% and border=20px and padding= 5px;
        Then width+ 2*margin= 50% -> width+10= 50 -> width= 40%
- Background
    1. Color - background-color
    2. Image - background-image: url()
    3. Gradient - background
    - Gradient
        - we can control the direction.
        - we can give percentage of each color
        1. Linear Gradient(goes down/up/left/right/diagonally)
            - Default Direction is top to right
            - background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
            Ex: Right -> background-image: linear-gradient(to right, red , yellow);
                Diagonal -> background-image: linear-gradient(to bottom right, red, yellow);
            - Using Angles
                If you want more control over the direction of the gradient, you can define an angle, instead of the predefined directions (to bottom, to top, to right, to left, to bottom right, etc.). 
                A value of 0deg is equivalent to "to top". 
                A value of 90deg is equivalent to "to right". 
                A value of 180deg is equivalent to "to bottom".
                Ex: background-image: linear-gradient(180deg, red, yellow);
        2. Repeating Linear Gradient
            - background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
        3. Radial Gradients
           - A radial gradient is defined by its center.
           - To create a radial gradient you must also define at least two color stops.
           Ex: background-image: radial-gradient(red, yellow, green);
               background-image: radial-gradient(red 5%, yellow 15%, green 60%);
            - We can set the shape also. Default shape is oval. 
            Ex: background-image: radial-gradient(circle, red, yellow, green);
            Different Types:
            closest-side
            farthest-side
            closest-corner
            farthest-corner
                                    

- Font Properties
    - We can given series of font family. So if first one not works then it checks for second font.
    Ex: font-family: Arial, Helvetica, sans-serif;
    - Different font types: serif, sans-serif, monospace, cursive
    - Cursive - cursive writing
    - Monospace- Good for coding, blogs
    - Serif - It keeps some curve on the top and below of the letter
    - sana- serif - Without serif.
- Display

    - Display:none - We cant see the element and space allocated for that
    - Visibility:hidden - We cant see te element but can see the space
    - Opacity - For partial visibility (1- opaque  0-transperent)
- overflow
    - Children will go out of parent height.
    - overflow property is set on parent element
    Default Overflow is visibile. ie if children go out then still children is visible
    overflow:hidden - The children which is overflowing is hidden.
    overflow:scroll - This time scroll bar will come irresoective of overflowing or not which helps to see the overflowing children.
    overflow:auto - If scroll bar is required then only we can see scroll bar. 
    - We can say which direction it should overflow
    overflow-x and overflow-yellow
- whitespace: nowrap
    - Use the above property when words should not go to next line.
    - To make everything come on one line
- text-overflow:ellipsis
    - Get three dots at end indicates some content is there at end
- Float
    - Helpful in articles. Like in articles image appears on side.
    - Float:left -> Pushes the element to left edge of the content area of parent.
    - Float of children does not contribute the height of parent. So float element can overflow the parent.
    - Here if we use overflow:auto - Here it wont give scroll bar if content is overflowing. 
    - Instead it will increase the height of parent. i.e it includes the float element also inside the parent
- Column Layout:
    - Use float:left for every column
- Position:
    - layout Technique
    - Dialog box, fixed nav menu 
    - position: static 
        -> Element falls in normal flow of rendering.
        If postion is static it will pick one by one and put it on screen.
    - position: relative 
        -> same as static but enable four other properties. (top,left,bottom,right)
         like top:100px or bottom:100px will not effect static but effects relative. 
         -If top:100px ->Elements moves 100px down from usual position(top).
    - position: absolute  
        -> W.rt to the html document
        -top:0, right:0
        -> we can position wrt to any ancestor or wrt to html document
        -> Does not flow in normal flow of rendering
        -> Absoulte elements are rendered in the second round
        -> in first round static and relative elements are picked up
        -> If we want to give absoulte element wrt to ancestor then that ancestor should be non static (it can be relative or absoulte)
        if top:50% then wrt ancestor it comes 50% below
        if top:0 then absolute element will be at top of ancestor. 
    - position:fixed
        -> The position is fixed.ie even we scroll the page it will be there. 
        - It is fixed wrt to viewport
        we can use top bottom to control its position. 
- box shadow
   for top and left give negative values. 
   -we can define blur and spread 
   box-shadow: 20px -50px 20px 20px lightgreen;
   20px- move to the right
   50px- move 50px to the top
   blur - blur shadow by 20px;
   spread - spread the shadow upto 20px

- negation pseudo class
    not selector - :not(a) -> not select anchor tag. (except anchor select all elements)
- border image
    - We can set image as border.
    - To make square image as circle - use border-radius:50%

- Transform:
    - Applying mathematical 
    Ex: scaling the box, rotating the box, we can do 3-d transformation.
    - We can translate it- moving the box
    1. transform: translate(200px, 300px,);
    200px - move right
    300px-move down
    -200px- move left
    2. transform:rotate(45deg)
       -45 -> rotate in anticlose wise
       45 -> rotate in closewise 
       - We can also select in which plane it should rotate
       - For that we need to give perspective also.
    3. transform:scale(2,3);
        - By defualt it scales from the center
        2- indicates x direction
        3- indicates y direction. 
- Transition:
    - When css property changes then that transition should be slow.
    for that we can add transition. like we can give time 
    transition: height 2s, line-height 4s;
    ie. - When height changes then make that change slower by 2times
    transition:all 2s;
    i.e - any property changes take 2s. 
    we can apply this to transform property also;
- Resize - The resize property defines if (and how) an element is resizable by the user.

        - Note: The resize property does not apply to inline elements or to block elements where overflow="visible". 
        So, make sure that overflow is set to "scroll", "auto", or "hidden".
        resize: none|both|horizontal|vertical|initial|inherit;
- clear
    - The clear property specifies what elements can float beside the cleared element and on which side
     clear: none|left|right|inherit|both
        none - Allows floating elements on both sides. This is default
        left - No floating elements allowed on the left side
        right- No floating elements allowed on the right side
        both - No floating elements allowed on either the left or the right side
        inherit - The element inherits the clear value of its parent
- clearfix
    - If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container:
    - The overflow: auto clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). 
    - The new, modern clearfix hack however, is safer to use, and the following code is used for most webpages:
    - A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally.

- select>(option[value=$]{$}*5)


- Apache
    - Web server listen on particular port
- Flex
    - [flexfroggy](flexboxfroggy.com)
    - http://flexboxfroggy.com/
    - [flexbox-csstricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- Project
    - https://workshops-server.herokuapp.com/
    - https://vw-angular.s3.ap-south-1.amazonaws.com/


- Vertical margins collapse for block level elements
- Mobile: width:375
- fontawesome.com - for icons

- Day:7 
    - Animation
    - Compressor 
    - Fluid grid, Fluid media  - 12 column responsive grid
    - print 
    - workshop application
    - git 