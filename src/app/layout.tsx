import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning={true}>
			{Boolean(
				process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID &&
					process.env.NEXT_PUBLIC_UMAMI_URL,
			) && (
				<script
					defer={true}
					src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
					data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
				/>
			)}
            <link
                rel="icon"
                type="image/svg"
                sizes="32x32"
                href={`/favicons/android.svg`}
            />

			<body className="flex min-h-screen flex-col">
				<RootProvider
					search={{
						enabled: false,
                        options: {
                            type: 'static',
                        },
                    }}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
