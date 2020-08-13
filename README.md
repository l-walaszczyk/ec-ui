# ec-ui

### Front-end part of the "ec" project

The "ec" project is a Single Page Application created for a psychologist Emilia Cwojdzińska. It was designed to provide the Emilia's customers with information about her areas of expertise, services she offers and - most importantly - a way to book an apointment online and pay for it in advance.

## Libraries and frameworks used on the front end

- react
- react-transition-group (for css animations on component mounts/unmounts)
- next (for server-side-rendering - to be SEO friendly and make all urls accessible without loading the main page)
- moment (extended with moment-timezone - to stick to Emilia's local time regardless of the customer's timezone)
- formik (form validation)
- sass (to keep styles code more concise + to use variables and still be compatible with ie11)
- dotenv (to use environmental variables locally)

## Setup

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

For the appointment secheduler (_Umów spotkanie_ in Polish) to work properly you need to have the ec-api running. Click [here](https://github.com/l-walaszczyk/ec-api#readme) for instructions on that.

Once you have your ec-api back end running, you have to create a file named `.env` in the main ec-ui directory and paste the following code (this is the default url of the ec-api running locally):

```
API_URL="http://localhost:3001/api/"
```

### Installing and running

To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

## Link to back-end part of the "ec" project

[ec-api](https://github.com/l-walaszczyk/ec-api)

## Link to the website

[emiliacwojdzinska.pl](https://emiliacwojdzinska.pl)
