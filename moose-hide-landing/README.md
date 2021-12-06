We used [Next.js](https://nextjs.org/) and [`npm`](https://www.npmjs.com/) to bootstrap this website!

# Getting Started
First, we'll need to make sure that [node](install node link) and [git](git install) are installed. so do that if you haven't already.

Second, clone our git repo:
```
git clone https://github.com/ctfarrell/mhl-site.git
```
Then we can use npm to install all dependencies
```
npm install
```
Now we can run the dev server!
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
and **Welcome to Moose Hide Landing!**
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/welcome.png" alt="mhl-homepage" />
</p>
# The Integrations

Finally there are three key integrations that we'll need to setup to get the site fully working:
1. **Jotform** - for reserving Pavilions and other fun things.
2. **FaunaDB** - for our database that stores Hunter Education Card Data
3. **Infura** - for our blockchain integration

**Last** we'll want to deploy the site on either [Vercel](#deploy-on-vercel) or [Netlify](#deploy-on-netlify), both are super easy and we linked to instructions on how to do that below!

## Setup Jotform

*future content* @jcgill
## Setup FaunaDB

To get started with FaunaDB, we'll need to [create an account](https://dashboard.fauna.com/accounts/register)

In Fauna we'll create:
1. a database
2. a collection in that database
3. two indices in the collection to be able to search for user info
4. secure keys to access the database from our application

To create your database, click on any of the multiple `create a database` links on the Fauna Dashboards:
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_create_db.png" alt="create database" />
</p>

Then we'll need to create a collection, kind of like a table, inside the database. 
_It is very important that we name the collection **`mhl-citizens`**_
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_create_collection.png" alt="create collection" />
</p>

Next we'll create two indexes:
The first index will have an index name of **`ID`** and a value of **`citizenId`**
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_create_index.png" alt="create ID index" />
</p>

The second index will have an index name of **`address`** and a value of **`address`**
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_create_address_index.png" alt="create address index" />
</p>

The last step is to create a Fauna DB Security Key for your API.
We'll navigate to the Security Tab and Create an Admin Key for your Database
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_create_key.png" alt="create address index" />
</p>

Copy the Key Value and paste it in the document
`mhl-site/moose-hide-landing/utils/mhl-citizens.js` on line 26 as the value for the secret key.
<p align="center">
  <img src="https://github.com/ctfarrell/mhl-site/blob/main/fauna_key_paste.png" alt="create address index" />
</p>
Save the `mhl-citizens` document and you're all ready to go!

## Setup Infura
## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

An easy way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Netlify

Another easy way to deploy your Next.js app is to use the [Netlify](https://www.netlify.com/with/nextjs/).

Here is the [Netlify build Documentation](https://docs.netlify.com/configure-builds/get-started/) to host your site from a git repo and some specific [Next.js documentation for Netlify](https://docs.netlify.com/configure-builds/common-configurations/next-js/) for more details.