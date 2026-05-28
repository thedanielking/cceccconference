import { FadeUp } from "./ui/FadeUp";

interface CommitteeMember {
    id: number;
    name: string;
    institution: string;
    country: string;
    role?: string; // Optional field for specific roles like "Chairman"
  }

export default function ConferenceCommittee(){  

const scientificCommittee: CommitteeMember[] = [
  {
    id: 1,
    name: "Emeritus Prof. I.P Jain",
    institution: "Center for Non-Conventional Energy Resources, University of Rajasthan, Jaipur",
    country: "India"
  },
  {
    id: 2,
    name: "Prof. U.E. Uno",
    institution: "Federal University of Technology Minna",
    country: "Nigeria"
  },
  {
    id: 3,
    name: "Prof. D.T. Hallinan",
    institution: "Florida State University",
    country: "USA"
  },
  {
    id: 4,
    name: "Prof. B. Adebisi",
    institution: "Manchester Metropolitan University",
    country: "UK"
  },
  {
    id: 5,
    name: "Prof. P.A. Aderonmu",
    institution: "Redeemer University, Ede",
    country: "Nigeria"
  },
  {
    id: 6,
    name: "Prof. I.B. Ijeh",
    institution: "Michael Okpara University of Agriculture",
    country: "Nigeria"
  },
  {
    id: 7,
    name: "Prof. R.T. Loto",
    institution: "Covenant University",
    country: "Nigeria"
  },
  {
    id: 8,
    name: "Prof. E.G. Njoroge",
    institution: "University of Pretoria",
    country: "South Africa"
  },
  {
    id: 9,
    name: "Prof. S.O. Oyedepo",
    institution: "Bells University of Technology",
    country: "Nigeria"
  },
  {
    id: 10,
    name: "Dr. M. Madhuku",
    institution: "iThemba LABS",
    country: "South Africa"
  }
];

 const localOrganizingCommittee: CommitteeMember[] = [
  {
    id: 1,
    name: "M.E. EMETERE",
    institution: "Bowen University",
    country: "Nigeria",
    role: "Chairman"
  },
  {
    id: 2,
    name: "E.M. Abraham",
    institution: "Alex Ekwueme Federal University",
    country: "Nigeria"
  },
  {
    id: 3,
    name: "T.E. Oladimeji",
    institution: "Covenant University",
    country: "Nigeria"
  },
  {
    id: 4,
    name: "O.O. Ometan",
    institution: "Lagos State University",
    country: "Nigeria"
  },
  {
    id: 5,
    name: "F.B. Elehinafe",
    institution: "Olusegun Agagu University of Science and Technology",
    country: "Nigeria"
  },
  {
    id: 6,
    name: "T.J. Ayua",
    institution: "University of the Gambia",
    country: "The Gambia"
  },
  {
    id: 7,
    name: "S. Akpabio",
    institution: "Trinity University",
    country: "Nigeria"
  },
  {
    id: 8,
    name: "A.M. Abubakar",
    institution: "Modibbo Adama University",
    country: "Nigeria"
  }
];



     return (
        <section className="bg-bg-alt py-10 px-8 lg:px-20 font-sans">
            <FadeUp delay={1} duration={0.5}>
             {/* Section header */}
        <div className="flex flex-col items-center mb-14 flex-wrap">
          <div>
            <p className="text-[11px] font-bold text-primary tracking-widest uppercase text-center mb-2.5">
              Conference Committee
            </p>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] leading-[1.15] text-center font-heading max-w-115 capitalize">
              Meet those behind the conference
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-8">

            <div className="flex-1 flex flex-col  text-justify">
                <h4 className="text-primary-dark font-semibold">Scientific Committee</h4>
                {scientificCommittee.map((member)=> (
                    <div className="flex gap-2 mb-2 ">
                        {member.id}.
                        <p>
                            {member.name}, {member.institution}, {member.country} {!member.role ? "" : `(${member.role})`}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex-1 flex flex-col ">
                <h4 className="text-primary-dark font-semibold">Local Organizing Committee</h4>
                {localOrganizingCommittee.map((member)=> (
                    <div className="flex gap-2 mb-2 ">
                        {member.id}.
                        <p>
                            {member.name}, {member.institution}, {member.country} {!member.role ? "" : `(${member.role})`}
                        </p>
                    </div>
                ))}
            </div>

        </div>
        </FadeUp>
        </section>
     )
}



