# Publicist TypeScript Challenge

## Setup

This project was created with React's Create React App scripts. To
install the dependencies, please run:

```
yarn install
```

The development server can then be run via:

```
yarn start
```

## Goals

The goal of this challenge is to take a rich JSON document and render
some HTML from it. This challenge is loosely based upon how we manage
and include written content within our front-end applications.

An emphasis will be placed on fully typing the different kinds of nodes
that must be rendered. Please try to use the type system to its fullest
extent and fully leverage the types and interfaces you will define when
rendering React components.

### Content Node Types

All Content Nodes will have a `type` property which dictates what type
of node it is. From there, Content Nodes are divided into three main
groups:

1. Block Content Nodes: Contain child nodes via their `nodes` property.
   They also can have arbitrary `attributes`.
2. Text Content Nodes: Have a `text` property and are essentially leaf
   nodes in our content tree.
3. Media Content Nodes: Have an `attributes` property and are leaf nodes
   as well.

#### Block Content Nodes

The general structure of for these nodes is as follows:

|property|description|
|--------|-----------|
|`type`|Type of content type|
|`nodes`|List of child nodes for block content node|
|`attributes`|Optional attribute object where the values are always strings|

Below are all of the possible Block Content Node types and their
corresponding HTML element type:

|type|HTML element|
|----|------------|
|`header1`|`<h1>`|
|`header2`|`<h2>`|
|`header3`|`<h3>`|
|`paragraph`|`<p>`|
|`hyperlink`|`<a>`|
|`numbered_list`|`<ol>`|
|`bullet_list`|`<ul>`|
|`list_item`|`<li>`|

#### Text Content Nodes

The general structure of for these nodes is:

|property|description|
|--------|-----------|
|`type`|Type of content type|
|`text`|String of text. Not defined for `break` type|

Below are all of the possible Text Content Node types and their
corresponding HTML element type:

|type|HTML element|
|----|------------|
|`bold`|`<strong>`|
|`italic`|`<em>`|
|`underline`|`<u>`|
|`break`|`<br>`|
|`text`|**No element**. This represents a Text Node in the DOM|

#### Media Content Nodes

The general structure of for these nodes is:

|property|description|
|--------|-----------|
|`type`|Type of content type|
|`attributes`|Required attribute object where the values are always strings. A `src` is always included|

Below are all of the possible Block Content Node types and their
corresponding HTML element type:

|type|HTML element|
|----|------------|
|`image`|`<img>`|
|`video`|`<video>`|

When rendering these types of content nodes, the `attributes` property
should be used as the corresponding HTML element's set of attributes.
For example:

```json
{
    "type": "image",
    "attributes": {
        "src": "https://www.publicist.co/images/default-avatar-v1.png",
        "alt": "Default avatar"
    }
}
```

Would produce the following rendered HTML:

```html
<img src="https://www.publicist.co/images/default-avatar-v1.png" alt="Default avatar" />
```

### Bonus

As a bonus, please create a simple carousel slider that wrap the 3
`<TextSection>` components and periodically slides between the 3
elements.

The goal of the carousel bonus would be to:

1. Use a bit of React state (or a reducer) to manage which element is
   shown and to trigger the transition from one `<TextSection>` element
   to another.
2. Use CSS to animate and transition between the elements. The
   `@emotion/styled` library has been included for this purpose and a
   couple of Styled components could be created to achieve this feature.

References:
- https://emotion.sh/docs/styled
