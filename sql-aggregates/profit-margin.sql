WITH "costOfFilm" AS (
SELECT "f"."replacementCost",
      "f"."filmId",
      "f"."title"
  FROM "films" AS "f"
  )

  SELECT "f"."filmId",
      "f"."replacementCost" - sum("p"."amount")
  FROM "costOfFilm" AS "f"
  JOIN "inventory" as "i" USING ("filmId")
  JOIN "rentals" as "r" USING ("inventoryId")
  JOIN "payments" as "p" USING ("rentalId")
  GROUP BY "f"."filmId";
