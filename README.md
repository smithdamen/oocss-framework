# OOCSS/Grid Framework

###### A fluid grid system for desktop and mobile devices with an object-oriented approach to CSS and HTML.HTML

This grid is usable on any screen size by simply applying the appropriate classes where needed to apply the desired layout depending on the size of the screen your page is being viewed on. The grid is divided into 12 columns and the classes will tell the element how many columns to span in the layout. 

##### Classes

```HTML
<div class="container">
    <div class="row">
        <div class="col-12"> <!-- spans 12 columns -->
            <div class="col">
                <!-- your content goes here -->
            </div>
        </div>
    </div>
</div>
```

For each screen size, there is a set of classes that will take effect only when the browser meets the required screen size.

Classes are defined as a column, the number of columns to span, and the appropriate size.

```CSS
.col-12-lg {}
.col-12-md {}
.col-12-sm {}
.col-12-xs {}
```

Your HTML becomes easy to lay out since all you have to do is apply the appropriate classes. Your page can display any type of layout you desire for different screen sizes.sizes

```HTML
<div class="container">
    <div class="row">
        <div class="col-4-lg col-6-md col-6-sm col-12-sm">
            <div class="col">
                <!-- your content goes here -->
            </div>
        </div>
    </div>
</div>
```

This code block has 3 layouts. The section spans 4 columns on large screen sizes, 6 columns on small and medium screen sizes, and 12 columns on extra small screen sizes.

[Demo page](http://smithdamen.github.io/oocss-framework)

##### TODO 

* Add box css class as the default content object
* Add stylings for sub-classes within the box object
  * .box-header
  * .box-feature
  * .box-content
  * .box-footer
* Add responsive navigation bar object
* Add responsive buttons
* Add full-screen/full-width banner object
* Add theme stylesheet for custom styles without needing to edit the grid stylesheet