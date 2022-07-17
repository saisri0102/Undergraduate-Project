# Handle bars
- Expressions 
    - {{}} - variables inside template are surrounded by double curly braces.
- Comments
    - {{!--TypeYourCommentHere--}}
    - <!-- I am learning {{language}} -->
- Block
    - In Handlebars, blocks are expressions that have a block opening ({{# }}) and closing ({{/}}).
     - {{#if boolean}} Some Content here {{/if}}

- Each Helper

    - The each helper is used to iterate over an array. The syntax of the helper is {{#each ArrayName}} YourContent {{/each}} .
    -  We can refer to the individual array items by using the keyword this inside the block. The index of the array’s element can be rendered by using {{@index}}. 

    - Ex:   {{#each countries}} <!--For array-->
            {{@index}} : {{this}}<br>
            {{/each}}
            {{#each names}} <!--Object-->
            Name : {{firstName}} {{lastName}}<br>
            {{/each}}

- If Helper
    -  The unless helper {{else}} is the inverse of the if helper. It renders the block when the condition evaluates to a falsy value.
    - Ex:   {{#if countries}}
            The countries are present.
            {{else}}
            The countries are not present.
            {{/if}}




