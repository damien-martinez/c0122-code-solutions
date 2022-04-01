

SELECT "a"."firstName",
        "a"."lastName",
        "f"."title"
  FROM "films" as "f"
  JOIN "castMembers" as "cm" USING ("filmId")
  JOIN "actors" as "a" USING ("actorId")
  WHERE "f"."title" = 'Jersey Sassy'
