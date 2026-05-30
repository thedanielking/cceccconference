import { FadeUp } from "./ui/FadeUp";

export interface PublicationItem{
    id: number;
    title: string;
    Author: string;
    Page: string;    
}

interface PublicationProps{
    publication: PublicationItem;
}

export default function PublicationList({publication}: PublicationProps){
    return (
        <FadeUp delay={Number(`0.${publication.id}`)} duration={Number(`0.${publication.id}`)}>
        <div className="bg-bg-alt rounded px-3 py-2 shadow-sm shadow-primary/10 flex justify-between items-center">

           <div className="flex items-start gap-3 lg:gap-6">

            <p>{publication.id}</p>
            <div className="space-y-1">
                <p className="text-sm lg:text-base mb-2 capitalize font-semibold">{publication.title}</p>
                <p className="text-sm ">Authors: {publication.Author}</p>
                <p className="text-sm ">Volume: 1</p>
                <p className="text-sm ">Page: {publication.Page}</p>
                <p className="text-sm ">Doi: {`10.XXXXX${publication.id}/nccecc.2026`}</p>
                <p className="text-sm ">Published: 15th June, 2026.</p>
            </div>

           </div>

           <div>              
           </div>

        </div>
        </FadeUp>
    )
}