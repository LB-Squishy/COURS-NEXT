import { getImage } from "@/lib/serverActions";

async function page() {
    const imgData = await getImage();
    return (
        <div>
            <h1>Une image</h1>
            <img src={imgData[0].download_url} alt="imgtest" />
        </div>
    );
}

export default page;
