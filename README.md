notifications
=============
With this small js&css library you can create notifications on your web pages. 
It can be a message notification or achivement in your game (i'll do another project for achivement additional features).

####how to install?
Download the .js & .css files and include them in your html file using next code:
 ```html
<link rel="stylesheet" href="notifications.css">
<script src="notifications.js"></script>
```
####how to use?
When you need to show notification, run the fucntion
```js
Noty.show(text,desc,icon,secondicon,theme,action)
```
where 
text (string) - your main text <br>
desc (string) - your additional text<br>
icon (string) - your left icon URL<br>
secondicon (string) - your right icon URL<br>
theme (string) - theme (is dark, when here is 'd' parameter), is white in default<br>
action (function) - function , that runs, when user is clicking at the right icon<br>
You can use not all the parameters.
###demo
[view demo](https://rawgit.com/remixer-dec/notifications/master/test.html)
