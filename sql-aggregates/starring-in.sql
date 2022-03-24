

SELECT "g"."name",
      count("g"."name")
  FROM "actors" as "a"
  JOIN "castMembers" as "cm" USING ("actorId")
  JOIN "filmGenre" as "fg" USING ("filmId")
  JOIN "genres" as "g" USING ("genreId")
  WHERE "a"."firstName" = 'Lisa'
  AND "a"."lastName" = 'Monroe'
  GROUP BY "g"."name";
