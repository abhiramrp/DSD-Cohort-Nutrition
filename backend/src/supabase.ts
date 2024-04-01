import "reflect-metadata";
import { createClient } from "@supabase/supabase-js";

import { DATABASE_KEY, DATABASE_URL } from "./config";

export const supabase = createClient(DATABASE_URL, DATABASE_KEY);