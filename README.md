Hey there!

This is a (Star Wars Agents)[https://starwarsagents.vercel.app/]. An Assingment Project created with [Next.js](https://nextjs.org) (a React Framework), Typescript and Tailwind CSS.

For, running it locally, paste the following command in terminal:

```bash
git clone --branch main --single-branch https://github.com/DeepakSRawat/star-wars-directory.git
```

After Cloning completed, install module and run the project by following command:

```bash
npm i
npm run dev
```

## Project Detail

this project using the [Star Wars API (SWAPI)](https://swapi.dev/) and for Image fetching i used [Picsum Photos](https://picsum.photos/) because i didn't find any star wars character image api 😁. may be in future i tried to do some jugad for that.

### Features

-   use server side component for fast load and optimization and image loader on client side.
-   create a random static bg-color generator which using hash so that bg-color for every character is unique to them and for making photo statically unique to every character i use picsum photos seeding.
-   create a client side search field for searching partiall character name.
-   create a pagination at bottom which show total number of page based on current results with prev and next button and first and last button.
-   make website responsive for mobile tab and pc screen size.
-   handle error and redirect them to not found page.
