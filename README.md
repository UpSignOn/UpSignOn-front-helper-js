UpSignOn is an account manager for your users that lets your website or app retrieve user data without any form. It improves security, builds trust with your users, increases your conversion rates, and provides you with verified and up-to-date data. To know more, visit our website: https://upsignon.eu/en/

## Script doc (for use in a website)

The script sets the `UpSignOn` variable which exposes [this API](module.d.ts).

- `addButtonContent`: renders the UpSignOn button
- `changeText`: replaces the text part of the previous rendered button with some other HTML content
- `getProtocolURI`: computes the deep-link of the button

For cases where you need to do custom things, we also expose the following internal methods

- `getSVGLogo`: returns the logo as an svg string
- `getButtonText`: returns the "Confidential connexion" translation in the user's language
- `getDownloadText`: returns the "Download the UpSignOn app" translation in the user's language
- `color`: returns the UpSignOn main color 'rgb(0, 171, 169)'

## Licence

You are authorized to use and reproduce this software which is provided as is without garantee of any kind.

These graphical resources, including the svg logos and its color, remain the property of UpSignOn but you are authorized to use them when referencing UpSignOn.
