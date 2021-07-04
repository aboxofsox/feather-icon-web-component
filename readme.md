# Feather Icons Web Component
A super simple web component for [Feather Icons](https://feathericons.com/)

[![CDN - jsDelivr](https://img.shields.io/static/v1?label=CDN&message=jsDelivr&color=%23ff5626&logo=jsDelivr&logoColor=%23ff5626)](https://cdn.jsdelivr.net/gh/aboxofsox/feather-icon-web-component@0.2.0/dist/feather-icon-wc.js)
[![Replit - Demo](https://img.shields.io/badge/Replit-Demo-1d2333?logo=replit&logoColor=667881)](https://replit.com/@aboxofsox/feather-icons-web-comonent)

## Usage
- Copy the CND link above
- Slap it into the `src` of your `<script>` tag.
- Create your `<feather-icon>` tag
- Profit


## Attributes
`icon` - name of the icon you'd like to use. For a full list, check out [Feather Icons](https://feathericons.com/).

`width` - in pixels.

`height` - in pixels.

`color`


## Example

```html
<feather-icon
    icon="github"
    width="50"
    height="50"
    color="slateblue"
></feather-icon>
```
## Build Your Own

### Prereqs
- npm

### esbuild
`npm run build`

`npm run dev`
