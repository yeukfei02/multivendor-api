-- CreateTable
CREATE TABLE "delivery_address" (
    "id" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "geo_code" TEXT NOT NULL,
    "last_used" TIMESTAMP(3),
    "comment" TEXT,
    "phone" TEXT NOT NULL,
    "user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delivery_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "delivery_address_address_geo_code_last_used_comment_phone_u_idx" ON "delivery_address"("address", "geo_code", "last_used", "comment", "phone", "user_id");

-- AddForeignKey
ALTER TABLE "delivery_address" ADD CONSTRAINT "delivery_address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
