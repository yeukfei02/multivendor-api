-- CreateTable
CREATE TABLE "order" (
    "id" UUID NOT NULL,
    "number" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "comment" TEXT,
    "address" TEXT NOT NULL,
    "delivery_at" TIMESTAMP(3),
    "delivery_price" DECIMAL(65,30),
    "discount" DECIMAL(65,30),
    "total" DECIMAL(65,30),
    "user_id" UUID NOT NULL,
    "company_id" UUID NOT NULL,
    "vendor_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendor" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "payment" TEXT NOT NULL,
    "delivery" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "working_hours" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_number_status_comment_address_delivery_at_delivery_pr_idx" ON "order"("number", "status", "comment", "address", "delivery_at", "delivery_price", "discount", "total", "user_id", "company_id", "vendor_id");

-- CreateIndex
CREATE INDEX "vendor_name_slug_payment_delivery_description_working_hours_idx" ON "vendor"("name", "slug", "payment", "delivery", "description", "working_hours", "rating");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
