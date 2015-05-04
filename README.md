# jquery-mobile-redirect
Simple jQuery plugin for redirecting to mobile version of website. It also provide `Go to desktop website` link support.

## Usage
First, make sure that you have the latest [jQuery 2.x](https://jquery.com/download/) and [jquery-cookie](https://github.com/carhartl/jquery-cookie) plugin imported. Now, simple add to your Javascript:

```javascript
$("#full-page").mobileRedirect({
  mobileUrl: "http://m.your-website.com",
  fullUrl: "http://your-website.com"
});
```

Also provide a link to full (desktop) version of website in your HTML:

```html
<a href="#" id="#full-page">Go to desktop website</a>
```

Note: You must include link/button to the full page on mobile **and** full version (where is automatically hidden) of your website.

## Customization
You can customize a plugin by passing that properties to an argument hash:

```javascript
{
  mobileUrl: "http://m.example.com",
  fullUrl: "http://example.com",
  redirectTimeout: 3000,
  cookieExpirationDays: 365,
  maxMobileWidth: 1024,
  maxMobileHeight: 768
}
```
Values above are default.

## Credits
[jquery-cookie](https://github.com/carhartl/jquery-cookie) plugin by [carhartl](https://github.com/carhartl).

## License
```
The MIT License (MIT)

Copyright (c) 2015 Krzysztof Zbudniewek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
