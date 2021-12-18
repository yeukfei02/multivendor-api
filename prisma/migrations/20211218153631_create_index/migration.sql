-- CreateIndex
CREATE INDEX "company_code_name_address_user_id_idx" ON "company"("code", "name", "address", "user_id");

-- CreateIndex
CREATE INDEX "last_event_type_user_id_idx" ON "last_event"("type", "user_id");

-- CreateIndex
CREATE INDEX "phone_confirmation_phone_code_ip_used_at_idx" ON "phone_confirmation"("phone", "code", "ip", "used_at");

-- CreateIndex
CREATE INDEX "users_phone_phone_confirmed_type_allow_order_is_active_idx" ON "users"("phone", "phone_confirmed", "type", "allow_order", "is_active");
