# H1

## H2

### H3

#### H4

##### H5

###### H6

![](https://skill-icons-livid.vercel.app/icons?i=nuxt,vue,tailwind,ts)

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"double quotes" and 'single quotes'

## Emphasis

Normal

**Bold**, **Bold**

*Italic*, *Italic*

~~Strike through~~, ~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar

## Code

Inline `code`

Indented code

```text
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Block code "fences"

Syntax Highlighting

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

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Minion](https://octodex.github.com/images/minion.png)![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text](https://octodex.github.com/images/dojocat.jpg "The Dojocat")

With a reference later in the document defining the URL location:

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[1](#user-content-fn-first){#user-content-fnref-first aria-described-by="footnote-label" dataFootnoteRef=""}.

Footnote 2 link[2](#user-content-fn-second){#user-content-fnref-second aria-described-by="footnote-label" dataFootnoteRef=""}.

Inline footnote^ [Text of inline footnote] definition.

Duplicated footnote reference[2](#user-content-fn-second){#user-content-fnref-second-2 aria-described-by="footnote-label" dataFootnoteRef=""}.

## Footnotes

1. Footnote **can have markup**
   :br
   and multiple paragraphs. [↩](#user-content-fnref-first){.data-footnote-backref ariaLabel="Back to reference 1" dataFootnoteBackref=""}
2. Footnote text. [↩](#user-content-fnref-second){.data-footnote-backref ariaLabel="Back to reference 2" dataFootnoteBackref=""} [↩2](#user-content-fnref-second-2){.data-footnote-backref ariaLabel="Back to reference 2-2" dataFootnoteBackref=""}
