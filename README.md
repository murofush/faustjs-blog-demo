# About
This is a sample repository where changing the path to [postSlug] does not change the result of `client.usePost()`, only when deployed with ISR to Vercel.

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



(This is a translated, so nuances may be different.)