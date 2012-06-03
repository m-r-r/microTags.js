microTags.js
============

µTags is a small JavaScript library to create simple tag clouds.

HTML Code
---------

In order to create a tag cloud, you need to put your tags in a list, like this:

    <ul id="tagcloud">
      <li>Tag 1</li>
      <li>Tag 2</li>
      <li>Tag 3</li>
      <li>Tag 4</li>
      <li>Tag 5</li>
      <li>Tag 6</li>
    </ul>

Then you have to add a `data-count` attribute to all you tags:

    <ul id="tagcloud">
      <li data-count="5">Tag 1</li>
      <li data-count="2">Tag 2</li>
      <li data-count="0">Tag 3</li>
      <li data-count="3">Tag 4</li>
      <li data-count="2">Tag 5</li>
      <li data-count="1">Tag 6</li>
    </li>

The higher is the `data-count` attribute, the bigger will be the tag. 
The value must be a positive integer.

The tags must be inline blocks:

    <style>
    #tagcloud li {
      display: inline-block;
      list-style-type: none;
    }
    </style>

Of course, don't forget to load µTags:

    <script type="text/javascript" src="microTags.js"></script>

Now that you have the HTML code, you can launch µTags :-)


JavaScript code
---------------

When the DOM is loaded, you can create the tag cloud like this:

    var myTagCloud = new µTags(el);

You can also modify the settings:

    var myTagCloud = new µTags(el, {
        'max-size': 3,             // maximum font size in em
        'min-size': 0.7,           // minimum font size in em  
        'max-angle': 15,           // maximum tilt angle in degrees
        'min-angle': -15           // minimum tilt angle in degrees
    });

You will see something like this:

![Screenshot](screenshot.png)

*Have fun*
