import { FadeUp } from "./ui/FadeUp";

export interface PublicationItem{
    id: number;
    title: string;
    Author: string;
    Page: string;  
    fileName: string;  
    doi: string;
}

interface PublicationProps{
    publication: PublicationItem;
}

export default function PublicationList({publication}: PublicationProps){
    const handleDownload = (fileName: string, publisherName: string): void =>{
        //in public folder
        const fileUrl = `../${fileName}`;

        const link = document.createElement('a');
        link.href = fileUrl;
        //new name for user's download file
        link.setAttribute('download', `${publisherName.replace(/s+/g, '_')}_Publications.pdf`);

        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    return (
        <FadeUp delay={Number(`0.${publication.id}`)} duration={Number(`0.${publication.id}`)}>
        <div className="bg-bg-alt rounded px-3 py-2 shadow-sm shadow-primary/10 flex flex-col lg:flex-row lg:justify-between">

           <div className="flex items-start gap-3 lg:gap-6">

            <p>{publication.id}</p>
            <div className="space-y-1">
                <p className="text-sm lg:text-base mb-2 capitalize font-semibold">{publication.title}</p>
                <p className="text-sm ">Authors: {publication.Author}</p>
                <p className="text-sm ">Volume: 1</p>
                <p className="text-sm ">Page: {publication.Page}</p>
                <p className="text-xs lg:text-sm ">
                    Doi: 
                    <a href={publication.doi} target="_blank" className="text-sm ml-1 italic text-blue-800 hover:underline">{publication.doi}</a>
                </p>
                <p className="text-sm ">Published: 15th June, 2026.</p>
            </div>

           </div>

           <div className="self-end flex-1"> 
            <button className="bg-primary-light border border-primary-border rounded px-3 py-1 text-[10.5px] font-bold text-primary-dark tracking-[0.5px] cursor-pointer" onClick={()=> handleDownload(publication.fileName, publication.Author)}>Download</button>             
           </div>

        </div>
        </FadeUp>
    )
}