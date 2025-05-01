# H1
## H2
### H3
#### H4
##### H5
###### H6

![](https://skill-icons-livid.vercel.app/icons?i=nuxt,vue,tailwind,ts)

## Horizontal Rules

___

---

***

## Emphasis

Normal

**Bold**, __Bold__

*Italic*, _Italic_

~Strike through~, ~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Syntax Highlighting

- Support [ 'diff', 'bash', 'shell', 'vue', 'html', 'css', 'js', 'ts', 'cpp', 'c', 'python', 'rust', 'md', 'mdc', 'json', 'yaml' ]

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

```py
print("Hello World")
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

## Images

![Minion](https://octodex.github.com/images/minion.png)![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text](https://octodex.github.com/images/dojocat.jpg 'The Dojocat')

With a reference later in the document defining the URL location:

### [Footnotes]

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
