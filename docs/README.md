📢 Use this project, [contribute](https://github.com/vtex-apps/shopper-location) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Shopper Location

This app attempts to determine the user's location if not already known, first by requesting permission to use their browser's geolocation feature, then by looking up their location based on their IP address as a fallback. The location is stored in the `shippingData` section of the `orderForm` and can then be used by other apps, such as [Location Availability](https://github.com/vtex-apps/location-availability).

A block is also provided which renders a form allowing the user to manually change their location.

Shopper Location also supports redirecting a user to a URL based off their location determined by the app. See the [Client Redirect](#client-redirect) section.

:information*source: The Google Geolocation API key in your \_Inventory & Shipping* settings is required for the geolocation feature.
:warning: To use the IP lookup fallback, you must have an API key for https://ip-geolocation.whoisxmlapi.com.

## Configuration

1. [Install](https://vtex.io/docs/recipes/store/installing-an-app) `vtex.shopper-location` in the desired account.

2. In your account's admin dashboard, go to `Apps > My Apps` and click the Settings button for Shopper Location.

3. Enter your API key for https://ip-geolocation.whoisxmlapi.com in the provided field and click Save. If you plan to use the `Client Redirect` feature, it is also configured here.

4. Modify your `store-theme` as follows:

- Add the following as dependencies in your theme's manifest if not already present:

```json
    "vtex.store-components": "3.x",
    "vtex.modal-layout": "0.x",
    "vtex.shopper-location": "1.x"
```

- In one of the JSON files in your theme's `store` folder, define the `shopper-location` block and its children, adjusting the props as needed:

```json
"shopper-location": {
    "children": ["modal-trigger#address"],
    "props": {
      "autofill": ["city", "country", "neighborhood", "number", "postalCode", "state", "street"]
    }
  },
  "modal-trigger#address": {
    "children": ["user-address", "modal-layout#address"]
  },
  "user-address": {
    "props": {
      "variation": "bar",
      "showStreet": false,
      "showCityAndState": true,
      "showPostalCode": true,
      "showPrefix": false,
      "showIfEmpty": true
    }
  },
  "modal-layout#address": {
    "children": ["modal-header#address", "modal-content#address"]
  },
  "modal-header#address": {
    "children": ["flex-layout.col#address-header"]
  },
  "flex-layout.col#address-header": {
    "children": ["rich-text#address-header"],
    "props": {
      "paddingLeft": 5
    }
  },
  "rich-text#address-header": {
    "props": {
      "text": "### Change Location"
    }
  },
  "modal-content#address": {
    "children": ["change-location"]
  },
  "change-location": {
		"props":{
      "postalCode": "first",
			"autocomplete": true
    }
	},
```

- Also in one of the JSON files, place the `shopper-location` block in your layout. For example, to place the block in the header:

```json
"flex-layout.row#header-desktop": {
    "props": {
      "blockClass": "main-header",
      "horizontalAlign": "center",
      "verticalAlign": "center",
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "children": [
      "flex-layout.col#logo-desktop",
      "flex-layout.col#category-menu",
      "flex-layout.col#spacer",
      "shopper-location",
      "search-bar",
      "locale-switcher",
      "login",
      "minicart.v2"
    ]
  },
```

### Client Redirect

You have the option to redirect the user to a country specific URL, based on the user's location. In the App Settings, enter the [alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements) and URL for each supported country.

On their first visit, if a user is not on their country's website, a modal will display an option to be redirected to their country specific website. For users located in a country that does not have an entry in the App Settings, no option is displayed.

Additionally, there is an `Automatic Redirect` option, that will redirect the user automatically, without displaying the modal.

#### Props

`shopper-location`:

| Prop name  | Type   | Description                                  | Default value | Accepted values                                                                                                 |
| ---------- | ------ | -------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| `autofill` | `enum` | Define which address fields should be filled | `undefined`   | Array with any of these values `["city", "country", "neighborhood", "number", "postalCode", "state", "street"]` |

`change-location`:

| Prop name      | Type      | Description                                         | Default value | Accepted values |
| -------------- | --------- | --------------------------------------------------- | ------------- | --------------- |
| `postalCode`   | `string`  | Define the postalCode position on the form          | `last`        | `first`,`last`  |
| `autocomplete` | `boolean` | Enables google autocomplete based on the postalCode | `false`       | `true`,`false`  |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                       |
| --------------------------------- |
| `changeLocationAddressContainer`  |
| `changeLocationContainer`         |
| `changeLocationFormContainer`     |
| `changeLocationGeoContainer`      |
| `changeLocationGeoErrorContainer` |
| `changeLocationGeolocationButton` |
| `changeLocationSubmitContainer`   |
| `changeLocationSubmitButton`      |
| `changeLocationTitle`             |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
