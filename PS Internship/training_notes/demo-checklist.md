## Things to care of in Milestone 1 (and later)
- RWD
    - Fluid layout
    - Fluid images
    - Mobile-first approach
- SEO
    - meta description
    - Site map
- SEO and Accessibility
    - semantic tags
    - img should have proper alt attribute (do not say "Image of mountains with rising sun" -> instead "mountains with rising sun")
        - presentational images should be provided with alt=""
    - Use proper labels (you can use sr-only etc. to hide form sighted people)
    - Properly use forms
```html
<form action="" method="post">
    <div class="form-group">
        <label for="username">Name</label>
        <input type="text" id="username" name="uname" value="john" />
    </div>

    <div class="form-group">
        <label for="password">Password</label>
        <input type="text" id="password" name="password" />
    </div>

    <div class="form-group">
        <button type="submit">Submit</button>
        <input type="reset" value="Reset" />
        <button type="reset">Reset</button>
    </div>
</form>
```
- Run your page through NVDA and Lighthouse, and 2 browsers - Chrome, Firefox, Edge (2 browsers at least)
- Run your pages through W3C HTML and CSS validator
- Optional: Minify the CSS using a CSS minifier, and include it in place of the source CSS. KEEP THE ORIGINAL. DO NOT DISCARD IT!!!
- Name CSS classes well
- And a lot more (we will discuss with examples in some session)