-- CreateTable
CREATE TABLE "category" (
    "id" UUID NOT NULL,
    "sub_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "icon" TEXT,
    "priority" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_product" (
    "id" UUID NOT NULL,
    "sub_id" UUID NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "category_id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "category_sub_id_name_slug_icon_priority_is_active_idx" ON "category"("sub_id", "name", "slug", "icon", "priority", "is_active");

-- CreateIndex
CREATE INDEX "category_product_sub_id_is_active_category_id_product_id_idx" ON "category_product"("sub_id", "is_active", "category_id", "product_id");

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
