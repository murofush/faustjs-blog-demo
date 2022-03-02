# About
This is a example repository that changing `[postSlug]` path, does not change the result of `client.usePost()`, only when deployed with ISR to Vercel.

However, replacing the code in `/posts/[postSlug]/index.tx` with the following will solve the problem.

````
  const post = convertPostFromGqty(gqtyPost)
  const categories = convertCategoriesFromGqty(gqtyCategories)
````
to
```
  const categories = convertCategoriesFromGqty(gqtyCategories)
  const post = convertPostFromGqty(gqtyPost) // refer to Post at the end.
```

## For the parts of Faust.js that are implemented differently from the sample

- To be able to　UI test in the storybook, I define the types, use GQTY via Faust.js to get the data, and convert the types in `modules/converter`.

- use ChakraUI and Tailwind.css for the design.

(This is a translated, so nuances may be different.)

