ALTER TABLE incoming_waste_dtd
  ADD COLUMN reject_qty NUMERIC NOT NULL DEFAULT 0,
  ADD COLUMN sanitary_qty NUMERIC NOT NULL DEFAULT 0;