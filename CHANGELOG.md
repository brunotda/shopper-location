# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Add postalCode to locationForm

## [1.4.4] - 2022-03-31

### Fixed

- Arabic translation

## [1.4.3] - 2022-03-23

### Fixed

- Arabic translation

## [1.4.2] - 2022-03-17

### Fixed

- Arabic translation

### Added

- Quality engineering actions

## [1.4.1] - 2021-12-01

### Added
- Added validation when an invalid input is selected
- Aded a error message then the zip code brings back null results
- Added clear inputs when the zip code is invalid

## [1.4.0] - 2021-10-29

### Added

- I18n Ar, Hu.

### Fixed

- I18n Fi.

## [1.3.1] - 2021-06-16

### Added
- `isDisposable` to the address so it don't keep it after the order is placed
## [1.3.0] - 2021-06-08

### Fixed
- Selected address not showing up on the form
### Added
- Custom autofill, define which address fields will be filled with the property `autofill` on the `shopper-location` interface
- Autocomplete address based on the postalCode using Google's API, can be set for the `change-location` interface
- Adjust postalCode position at the form , can be set for the `change-location` interface
- `notRequired` and `hideFields` can be set on the `change-location` interface
## [1.2.0] - 2021-04-23

### Added

- I18n Fi.
- Crowdin configuration file.

## [1.1.2] - 2021-03-12

## [1.1.1] - 2021-03-02

### Fixed
- When there's no mapped country, displays the country code instead

## [1.1.0] - 2021-03-01

### Added

- Update Region ID on address change

## [1.0.2] - 2021-02-17

### Fixed

- Error loading address form

### Added

- Missing countries

## [1.0.1] - 2021-01-11

### Fixed

- metadata and screenshots to app store

## [1.0.0] - 2021-01-06

### Added

- metadata to app store

## [0.2.1] - 2020-11-30

### Fixed

- Improve modal form layout

## [0.2.0] - 2020-11-16

### Added

- Optional client redirect based on location

## [0.1.4] - 2020-09-25

### Fixed

- Change priority of fields from Google response to determine shopper's city
- Add maxWidth to "Find My Location" error message container on location form

## [0.1.3] - 2020-09-23

### Added

- Error message if user has blocked browser location but tries to use `Find My Location` button

### Fixed

- `addressType` field will be automatically set if user inputs address manually

## [0.1.2] - 2020-09-22

### Fixed

- Hide Change Location map on mobile

## [0.1.1] - 2020-09-22

### Added

- Allow shopper to change country (options shown will be the countries that the store ships to plus the country the shopper is currently located in)

### Changed

- Update docs to recommend `modal-layout` and list CSS handles

## [0.1.0] - 2020-09-09

### Added

- Map to the address form

## [0.0.1] - 2020-09-03

### Added

- initial release
