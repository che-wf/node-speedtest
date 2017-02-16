## Getting Started
1. Rename `config-sample.js` to `config.js`.
2. Create a spreadsheet in Google Sheets or find one that you want to use to record your network speed tests. Get the id of the spreadsheet and enter it in `config.js`. Also be sure to specify the range. Not sure? Check out the [Sheets API documentation](https://developers.google.com/sheets/api/guides/concepts#a1_notation) about A1 Notation.
3. Set up authorization for your project by following Step 1 in [this tutorial](https://developers.google.com/sheets/api/quickstart/nodejs) for the Google Sheets API. This will at least get you started.
4. Install the dependencies by heading over to your console in the project root directory and setting up the node modules
```
npm install
```
This step essentially replaces [Step 2](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_install_the_client_library) in the Quickstart tutorial.
5. If you are still in the project root, run the script with this command:
```
node www\index.js
```
or if you `cd` into `www`, just
```
node index.js
```
Follow the part of [Step 4](https://developers.google.com/sheets/api/quickstart/nodejs#step_4_run_the_sample) after the command.
<!-- ## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.) -->
