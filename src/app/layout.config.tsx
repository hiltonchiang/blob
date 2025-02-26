import { Icon } from "@iconify/react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<div className="flex items-center gap-2">
				<img src='/android.svg' />
				<span className="font-bold text-xl">Hilton's Converter</span>
			</div>
		),
	},
	githubUrl: "https://github.com/hiltonchiang/blob",
};
