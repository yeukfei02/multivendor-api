-- DropIndex
DROP INDEX "brand_name_slug_is_active_idx";

-- DropIndex
DROP INDEX "category_sub_id_name_slug_icon_priority_is_active_idx";

-- DropIndex
DROP INDEX "category_product_sub_id_is_active_category_id_product_id_idx";

-- DropIndex
DROP INDEX "company_code_name_address_user_id_idx";

-- DropIndex
DROP INDEX "delivery_address_address_geo_code_last_used_comment_phone_u_idx";

-- DropIndex
DROP INDEX "last_event_type_user_id_idx";

-- DropIndex
DROP INDEX "order_number_status_comment_address_delivery_at_delivery_pr_idx";

-- DropIndex
DROP INDEX "order_item_price_count_order_id_product_id_idx";

-- DropIndex
DROP INDEX "phone_confirmation_phone_code_ip_used_at_idx";

-- DropIndex
DROP INDEX "product_name_slug_description_price_photo_weight_is_active__idx";

-- DropIndex
DROP INDEX "users_phone_phone_confirmed_type_allow_order_is_active_idx";

-- DropIndex
DROP INDEX "vendor_name_slug_payment_delivery_description_working_hours_idx";

-- DropIndex
DROP INDEX "vendor_product_price_min_count_unit_vendor_id_product_id_idx";

-- CreateIndex
CREATE INDEX "index_brand_on_name" ON "brand"("name");

-- CreateIndex
CREATE INDEX "index_brand_on_slug" ON "brand"("slug");

-- CreateIndex
CREATE INDEX "index_brand_on_is_active" ON "brand"("is_active");

-- CreateIndex
CREATE INDEX "index_brand_on_created_at" ON "brand"("created_at");

-- CreateIndex
CREATE INDEX "index_brand_on_updated_at" ON "brand"("updated_at");

-- CreateIndex
CREATE INDEX "index_category_on_sub_id" ON "category"("sub_id");

-- CreateIndex
CREATE INDEX "index_category_on_name" ON "category"("name");

-- CreateIndex
CREATE INDEX "index_category_on_slug" ON "category"("slug");

-- CreateIndex
CREATE INDEX "index_category_on_icon" ON "category"("icon");

-- CreateIndex
CREATE INDEX "index_category_on_priority" ON "category"("priority");

-- CreateIndex
CREATE INDEX "index_category_on_is_active" ON "category"("is_active");

-- CreateIndex
CREATE INDEX "index_category_on_created_at" ON "category"("created_at");

-- CreateIndex
CREATE INDEX "index_category_on_updated_at" ON "category"("updated_at");

-- CreateIndex
CREATE INDEX "index_category_product_on_sub_id" ON "category_product"("sub_id");

-- CreateIndex
CREATE INDEX "index_category_product_on_is_active" ON "category_product"("is_active");

-- CreateIndex
CREATE INDEX "index_category_product_on_category_id" ON "category_product"("category_id");

-- CreateIndex
CREATE INDEX "index_category_product_on_product_id" ON "category_product"("product_id");

-- CreateIndex
CREATE INDEX "index_category_product_on_created_at" ON "category_product"("created_at");

-- CreateIndex
CREATE INDEX "index_category_product_on_updated_at" ON "category_product"("updated_at");

-- CreateIndex
CREATE INDEX "index_company_on_code" ON "company"("code");

-- CreateIndex
CREATE INDEX "index_company_on_name" ON "company"("name");

-- CreateIndex
CREATE INDEX "index_company_on_address" ON "company"("address");

-- CreateIndex
CREATE INDEX "index_company_on_user_id" ON "company"("user_id");

-- CreateIndex
CREATE INDEX "index_company_on_created_at" ON "company"("created_at");

-- CreateIndex
CREATE INDEX "index_company_on_updated_at" ON "company"("updated_at");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_address" ON "delivery_address"("address");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_geo_code" ON "delivery_address"("geo_code");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_last_used" ON "delivery_address"("last_used");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_comment" ON "delivery_address"("comment");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_phone" ON "delivery_address"("phone");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_user_id" ON "delivery_address"("user_id");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_created_at" ON "delivery_address"("created_at");

-- CreateIndex
CREATE INDEX "index_delivery_address_on_updated_at" ON "delivery_address"("updated_at");

-- CreateIndex
CREATE INDEX "index_last_event_on_type" ON "last_event"("type");

-- CreateIndex
CREATE INDEX "index_last_event_on_user_id" ON "last_event"("user_id");

-- CreateIndex
CREATE INDEX "index_last_event_on_created_at" ON "last_event"("created_at");

-- CreateIndex
CREATE INDEX "index_last_event_on_updated_at" ON "last_event"("updated_at");

-- CreateIndex
CREATE INDEX "index_order_on_number" ON "order"("number");

-- CreateIndex
CREATE INDEX "index_order_on_status" ON "order"("status");

-- CreateIndex
CREATE INDEX "index_order_on_comment" ON "order"("comment");

-- CreateIndex
CREATE INDEX "index_order_on_address" ON "order"("address");

-- CreateIndex
CREATE INDEX "index_order_on_delivery_at" ON "order"("delivery_at");

-- CreateIndex
CREATE INDEX "index_order_on_delivery_price" ON "order"("delivery_price");

-- CreateIndex
CREATE INDEX "index_order_on_discount" ON "order"("discount");

-- CreateIndex
CREATE INDEX "index_order_on_total" ON "order"("total");

-- CreateIndex
CREATE INDEX "index_order_on_user_id" ON "order"("user_id");

-- CreateIndex
CREATE INDEX "index_order_on_company_id" ON "order"("company_id");

-- CreateIndex
CREATE INDEX "index_order_on_vendor_id" ON "order"("vendor_id");

-- CreateIndex
CREATE INDEX "index_order_on_created_at" ON "order"("created_at");

-- CreateIndex
CREATE INDEX "index_order_on_updated_at" ON "order"("updated_at");

-- CreateIndex
CREATE INDEX "index_order_item_on_price" ON "order_item"("price");

-- CreateIndex
CREATE INDEX "index_order_item_on_count" ON "order_item"("count");

-- CreateIndex
CREATE INDEX "index_order_item_on_order_id" ON "order_item"("order_id");

-- CreateIndex
CREATE INDEX "index_order_item_on_product_id" ON "order_item"("product_id");

-- CreateIndex
CREATE INDEX "index_order_item_on_created_at" ON "order_item"("created_at");

-- CreateIndex
CREATE INDEX "index_order_item_on_updated_at" ON "order_item"("updated_at");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_phone" ON "phone_confirmation"("phone");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_code" ON "phone_confirmation"("code");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_ip" ON "phone_confirmation"("ip");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_used_at" ON "phone_confirmation"("used_at");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_created_at" ON "phone_confirmation"("created_at");

-- CreateIndex
CREATE INDEX "index_phone_confirmation_on_updated_at" ON "phone_confirmation"("updated_at");

-- CreateIndex
CREATE INDEX "index_product_on_name" ON "product"("name");

-- CreateIndex
CREATE INDEX "index_product_on_slug" ON "product"("slug");

-- CreateIndex
CREATE INDEX "index_product_on_description" ON "product"("description");

-- CreateIndex
CREATE INDEX "index_product_on_price" ON "product"("price");

-- CreateIndex
CREATE INDEX "index_product_on_photo" ON "product"("photo");

-- CreateIndex
CREATE INDEX "index_product_on_weight" ON "product"("weight");

-- CreateIndex
CREATE INDEX "index_product_on_is_active" ON "product"("is_active");

-- CreateIndex
CREATE INDEX "index_product_on_brand_id" ON "product"("brand_id");

-- CreateIndex
CREATE INDEX "index_product_on_created_at" ON "product"("created_at");

-- CreateIndex
CREATE INDEX "index_product_on_updated_at" ON "product"("updated_at");

-- CreateIndex
CREATE INDEX "index_users_on_phone" ON "users"("phone");

-- CreateIndex
CREATE INDEX "index_users_on_phone_confirmed" ON "users"("phone_confirmed");

-- CreateIndex
CREATE INDEX "index_users_on_type" ON "users"("type");

-- CreateIndex
CREATE INDEX "index_users_on_allow_order" ON "users"("allow_order");

-- CreateIndex
CREATE INDEX "index_users_on_is_active" ON "users"("is_active");

-- CreateIndex
CREATE INDEX "index_users_on_created_at" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "index_users_on_updated_at" ON "users"("updated_at");

-- CreateIndex
CREATE INDEX "index_vendor_on_name" ON "vendor"("name");

-- CreateIndex
CREATE INDEX "index_vendor_on_slug" ON "vendor"("slug");

-- CreateIndex
CREATE INDEX "index_vendor_on_payment" ON "vendor"("payment");

-- CreateIndex
CREATE INDEX "index_vendor_on_delivery" ON "vendor"("delivery");

-- CreateIndex
CREATE INDEX "index_vendor_on_description" ON "vendor"("description");

-- CreateIndex
CREATE INDEX "index_vendor_on_working_hours" ON "vendor"("working_hours");

-- CreateIndex
CREATE INDEX "index_vendor_on_rating" ON "vendor"("rating");

-- CreateIndex
CREATE INDEX "index_vendor_on_created_at" ON "vendor"("created_at");

-- CreateIndex
CREATE INDEX "index_vendor_on_updated_at" ON "vendor"("updated_at");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_price" ON "vendor_product"("price");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_min_count" ON "vendor_product"("min_count");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_unit" ON "vendor_product"("unit");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_vendor_id" ON "vendor_product"("vendor_id");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_product_id" ON "vendor_product"("product_id");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_created_at" ON "vendor_product"("created_at");

-- CreateIndex
CREATE INDEX "index_vendor_product_on_updated_at" ON "vendor_product"("updated_at");
