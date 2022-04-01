


SELECT "f"."releaseYear",
      "g"."name" as "genreName"
  FROM "films" as "f"
  JOIN "filmGenre" as "fg" USING ("filmId")
  JOIN "genres" as "g" USING ("genreId")
  WHERE "f"."title" = 'Boogie Amelie';
