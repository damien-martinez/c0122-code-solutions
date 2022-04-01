SELECT "c"."firstName",
        "c"."lastName",
        "p"."amount"
  FROM "payments" as "p"
  JOIN "customers" as "c" USING ("customerId")
  ORDER BY "p"."amount" DESC
  LIMIT 10;
