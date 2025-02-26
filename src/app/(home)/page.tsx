import { metadataImage } from "@/lib/metadata";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import HomePage from "./page.client";

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	return metadataImage.withImage(page.slugs, {
		title:
			"Hilton's Converter",
		description:
			"Use File System Access API. to convert local files",
        openGraph: {
        	title: "Hilton's Converter",
		    description: "Use File System Access API. to convert local files",
            images:['/android.svg'],
            locale: 'en_US',
    
        },
	});
}

export default function Page() {
	return (
		<div>
			<HomePage />
		</div>
	);
}
