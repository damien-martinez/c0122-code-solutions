
-- SELECT "a"."firstName",
--         "a"."lastName",
--         "f"."title"
--   FROM "films" as "f"
--   JOIN "castMembers" as "cm" USING ("filmId")
--   JOIN "actors" as "a" USING ("actorId")
--   WHERE "f"."title" = 'Jersey Sassy'


SELECT "c"."firstName",
        "c"."lastName"
  FROM "customers" as "c"
  JOIN "rentals" as "r" USING ("customerId")
  JOIN "inventory" as "i" USING ("inventoryId")
  JOIN "films" as "f" USING ("filmId")
  WHERE "f"."title" = 'Magic Mallrats'
