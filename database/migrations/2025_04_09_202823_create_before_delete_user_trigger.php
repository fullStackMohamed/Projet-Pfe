<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared("
        CREATE TRIGGER before_delete_user
        BEFORE DELETE ON users
        FOR EACH ROW
        BEGIN
            INSERT INTO user_archive (user_id, name, email, deleted_at, created_at, updated_at)
            VALUES (OLD.id, OLD.name, OLD.email, NOW(), NOW(), NOW());
        END
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared("DROP TRIGGER IF EXISTS before_delete_user");
    }
};
