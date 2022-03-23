-- Add 'HTML', 'CSS', and 'JavaScript' to the
-- languages table and retrieve the resulting
-- rows. The "languageId" and "updatedAt" are auto-generated.

-- insert into "products" ("name", "description", "price", "category")
-- values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
--        ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
-- returning *;


INSERT into "languages" ("name")
values ('HTML'),
        ('CSS'),
        ('JavaScript')
returning *;
