SELECT * FROM usersINSERT INTO products (
    product_id,
    product_name,
    image_brand,
    image,
    description,
    price
    created_at,
    updated_at
  )
VALUES (
    product_id:integer,
    'product_name:character varying',
    'image_brand:text',
    'image:character varying',
    'description:text',
    'created_at:timestamp with time zone',
    'updated_at:timestamp with time zone'
  );