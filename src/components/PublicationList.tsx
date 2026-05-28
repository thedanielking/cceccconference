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
              {/* Document icon mockup */}
              <div className="w-18 h-22.5 bg-white border-[1.5px] border-border-default rounded-lg lg:flex flex-col items-center justify-center gap-1.5 shrink-0 relative overflow-hidden hidden">
                    {/* Dog-ear corner */}
                    <div
                      className="absolute top-0 right-0 w-4.5 h-4.5 bg-border-default"
                      style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                    />
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="text-[9px] font-bold text-accent-red tracking-[0.5px]">
                      PDF
                    </span>
                  </div>
           </div>

        </div>
        </FadeUp>
    )
}