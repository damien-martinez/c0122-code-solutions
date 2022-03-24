SELECT "c"."firstName",
        "c"."lastName",
        sum("p"."amount") as "totalPaid"
  FROM "customers" as "c"
  JOIN "payments" as "p" USING ("customerId")
  GROUP BY "c"."customerId"
  ORDER BY "totalPaid" desc
