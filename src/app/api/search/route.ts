import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
export const dynamic = 'force-dynamic'
export const { GET } = createFromSource(source);
