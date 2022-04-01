

SELECT count("c"."cityId") as "count",
      "co"."name"
  FROM "cities" as "c"
  JOIN "countries" as "co" USING ("countryId")
  GROUP BY "co"."name";
