# POC_TypeScript
A simple POC about TypeScript basics.
 
# About
This is a TypeScrypt back-end project that allows you to do a CRUD (Create, Read, Update,Delete) about movies collections.

# How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgresSQL database using the dump
4. Run the back end 

```bash
npm run dev
```

# Routes
1) get("/movies")
Get all the movies from the database
format:
 {
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status:string,
    notes?:string
   }

2)get("/movies/platform")
Get all the movies from a certain type of platform
format:
{
platform: string
}


3)post("/movies");
Create and post new movies
format:
{
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status:string,
    notes?:string
}

4)put("/movies/:id");
Update the movie's section of "status" and "notes" with params

5)delete("/movies/:id");
Delete a movie with params