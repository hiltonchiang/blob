import { metadataImage } from "@/lib/metadata";
import { generateOGImage } from "fumadocs-ui/og";

export const GET = metadataImage.createAPI((_page) => {
	return generateOGImage({
		title: "file-conv",
		description: "A React hook for integrating with the File System Access API",
		site: "file-conv",
	});
});

export function generateStaticParams() {
	return metadataImage.generateParams();
}
