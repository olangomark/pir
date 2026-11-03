import { Header } from "../../header";
import { Hero1 } from "@/components/hero1";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const QUICK_FACTS = [
  {
    title: "Date",
    value: "November 4–7, 2026",
    detail: "Pre-work: October 30, 1:00–5:00 PM",
  },
  {
    title: "Venue",
    value: "Highland Resort, Soro-Soro, Mambajao, Camiguin Island",
    detail: "Department of Education (DepEd)",
  },
  {
    title: "Organizer",
    value: "Schools Division Office",
    detail: "Cagayan de Oro City",
  },
  {
    title: "Secretariat",
    value: "QMS Secretariat",
    detail: "Registration & coordination",
  },
];

const SPEAKERS = [
  {
    name: "Marilou F. Navaja",
    role: "Administrative Officer V, Budget Officer",
    topic: "Overview on the Preparation of the 2028 Budget Proposal",
  },
  {
    name: "Rodel S. Megollas",
    role: "Planning Officer III, SDO Cagayan de Oro City",
    topic: "2028 Budget Proposal System",
  },
  {
    name: "Rosalio R. Vitorillo",
    role: "Chief, SGOD",
    topic: "Messages",
  },
  {
    name: "Jean S. Macasero",
    role: "Chief, CID",
    topic: "Messages",
  },
  {
    name: "Audie S. Borres",
    role: "Assistant Schools Division Superintendent",
    topic: "Messages",
  },
  {
    name: "Roy Angelo E. Gazo",
    role: "Schools Division Superintendent, OSDS",
    topic: "Messages",
  },
  {
    name: "Beverly Anne E. Nicolasora",
    role: "Senior Education Program Specialist",
    topic: "From Planning to Budgeting: Aligning DEDP and SIP Priorities",
  },
  {
    name: "Eleanor Consejo H. Rollan",
    role: "Senior Education Program Specialist, TWG",
    topic: "M&E of Division Programs (BEMEF)",
  },
  {
    name: "Derrold Marl S. Aves",
    role: "Senior Education Program Specialist, CID",
    topic: "Utilization of the FY 2027 HRD Fund",
  },
  {
    name: "Almira K. Reyes",
    role: "Administrative Officer IV, Procurement Unit, TWG",
    topic: "Enhancing Procurement Planning: PPMP & APP Formulation",
  },
  {
    name: "Arnel A. Calubag, CPA",
    role: "Accountant III",
    topic: "DBM Deliverables and Submission Timeline",
  },
];

const AGENDA_DAYS = [
  {
    label: "Pre-Work",
    date: "October 30, 2026",
    time: "1:00 – 5:00 PM",
    color: "bg-muted text-muted-foreground",
    sessions: [
      {
        time: "1:00 – 5:00 PM",
        title: "Overview on the Preparation of the 2028 Budget Proposal",
        speaker: "Marilou F. Navaja — Administrative Officer V, Budget Officer",
      },
      {
        time: "1:00 – 5:00 PM",
        title: "2028 Budget Proposal System",
        speaker: "Rodel S. Megollas — Planning Officer III, SDO Cagayan de Oro City",
      },
    ],
  },
  {
    label: "Day 1",
    date: "November 4, 2026",
    color: "bg-primary text-primary-foreground",
    sessions: [
      {
        time: "11:00 – 12:00 NN",
        title: "Registration",
        speaker: "Secretariat",
      },
      {
        time: "1:00 – 4:00 PM",
        title: "QMS Meeting",
        speaker: "",
      },
    ],
  },
  {
    label: "Day 2",
    date: "November 5, 2026",
    color: "bg-primary text-primary-foreground",
    sessions: [
      {
        time: "8:00 – 8:10 AM",
        title: "Opening Ceremonies",
        speaker: "",
      },
      {
        time: "8:10 – 8:30 AM",
        title: "Acknowledgement of Participants",
        speaker: "Marilou F. Navaja — Administrative Officer V, Budget Officer",
      },
      {
        time: "8:30 – 9:00 AM",
        title: "Messages",
        speaker: "Jean S. Macasero — Chief, CID · Audie S. Borres — Assistant SDS, Roy Angelo E. Gazo — SDS, OSDS"
      },
      {
        time: "9:00 – 9:10 AM",
        title: "Ice Breaker",
        speaker: "OSDS",
      },
      {
        time: "9:10 – 10:10 AM",
        title: "From Planning to Budgeting: Aligning DEDP and SIP Priorities for an Effective, Evidence-based and Responsive WFP 2027 and 2028 Budget Proposal",
        speaker: "Beverly Anne E. Nicolasora — Senior Education Program Specialist",
      },
      {
        time: "10:10 – 10:20 AM",
        title: "Ice Breaker",
        speaker: "SGOD",
      },
      {
        time: "10:20 – 11:20 AM",
        title: "Monitoring & Evaluation of Division Programs: Aligning the Division Targets with the Basic Education Monitoring and Evaluation Framework (BEMEF)",
        speaker: "Eleanor Consejo H. Rollan — Senior EPS",
      },
      {
        time: "12:20 – 12:30 PM",
        title: "Preliminaries",
        speaker: "TWG",
      },
      {
        time: "12:30 – 1:30 PM",
        title: "Utilization of the FY 2027 HRD Fund",
        speaker: "Derrold Marl S. Aves — Senior EPS",
      },
      {
        time: "1:30 – 1:40 PM",
        title: "Ice Breaker",
        speaker: "CID",
      },
      {
        time: "1:40 – 2:40 PM",
        title: "Enhancing Procurement Planning: A Practical Orientation on PPMP Preparation, Market Scooping, and APP Formulation",
        speaker: "Almira K. Reyes — Administrative Officer IV, Procurement Unit",
      },
      {
        time: "2:40 – 3:40 PM",
        title: "Ice Breaker",
        speaker: "TWG",
      },
      {
        time: "3:40 – 4:40 PM",
        title: "DBM Deliverables and Submission Timeline",
        speaker: "Arnel A. Calubag, CPA — Accountant III",
      }
    ],
  },
  {
    label: "Day 3",
    date: "November 6, 2026",
    color: "bg-primary text-primary-foreground",
    sessions: [
      {
        time: "8:00 – 12:00 NN",
        title: "Workshop Activity",
        speaker: "",
      },
      {
        time: "1:00 – 5:00 PM",
        title: "Workshop Activity",
        speaker: "",
      },
      {
        time: "Output Collection",
        title: "Submission of 2027 WFP ",
        speaker: "Please go to submission section",
      },
    ],
  },
  {
    label: "Day 4",
    date: "November 7, 2026",
    color: "bg-primary text-primary-foreground",
    sessions: [
      {
        time: "8:00 – 12:00 NN",
        title: "Workshop / Submission of Outputs",
        speaker: "",
      },
      {
        time: "1:00 – 5:00 PM",
        title: "Closing Program",
        speaker: "Homebound",
      },
      {
        time: "All day",
        title: "Submission of 2028 Budget Proposal Output",
        speaker: "Please go to submission section",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      {/* ===== Section 1: Hero ===== */}
      <Hero1
        badge={{ text: "DepEd SDO Cagayan de Oro City", className: "bg-green-100 text-green-800 border-green-200" }}
        heading="EDUCATIONAL LEADERSHIP FOR STRATEGIC PLANNING AND RESOURCE STEWARDSHIP: A WORKSHOP ON THE PREPARATION OF THE CY 2027 WORK AND FINANCIAL PLAN AND PROPOSED CY 2028 BUDGET"
        description={
          "A four-day seminar and workshop on strategic planning alignment, resource stewardship, and preparation of the CY 2027 Work and Financial Plan and proposed CY 2028 Budget."
        }
        buttons={{
          primary: { text: "View Full Agenda", url: "#agenda" },
        }}
        image={{
          src: "/ss.png",
          alt: "Seminar venue illustration",
          className: "w-full",
        }}
      />

      {/* ===== Section 2: Quick Facts ===== */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-medium text-center mb-2">Event Details</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            All you need to know about the Preparation of the 2028 Budget Proposal seminar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_FACTS.map((fact) => (
              <Card key={fact.title} size="sm">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{fact.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{fact.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 3: About ===== */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4">About the Seminar</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This four-day seminar and workshop equips division personnel with the
                knowledge and tools to prepare the CY 2027 Work and Financial Plan and the
                proposed CY 2028 Budget. Sessions cover planning-to-budgeting alignment,
                monitoring and evaluation under the Basic Education Monitoring and
                Evaluation Framework (BEMEF), HRD fund utilization, procurement planning
                (PPMP and APP formulation), and DBM deliverables and submission timelines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participants will engage in hands-on workshop activities across Days 3 and 4,
                culminating in the submission of outputs and a closing program on November 7,
                2026.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-serif text-lg">Key Topics</CardTitle>
                  <Badge variant="outline">4 Days</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                    <li>DEDP / SIP alignment for WFP 2027–2028</li>
                    <li>BEMEF monitoring and evaluation</li>
                    <li>FY 2027 HRD fund utilization</li>
                    <li>PPMP preparation and APP formulation</li>
                    <li>DBM deliverables and submission timeline</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-serif text-lg">Organizer</CardTitle>
                  <Badge variant="outline">DepEd</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    Schools Division Office (SDO) Cagayan de Oro City
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Speakers ===== */}
      <section className="py-16 bg-muted" id="speakers">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-2">Speakers &amp; Facilitators</h2>
              <p className="text-muted-foreground">Division and TWG resource persons</p>
            </div>
            <Badge variant="outline">11 Resource Persons</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS.map((speaker) => (
              <Card key={speaker.name} size="sm">
                <CardContent className="pt-6 pb-4">
                  <h3 className="font-serif text-lg font-medium mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{speaker.role}</p>
                  <p className="text-xs font-medium">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: Agenda ===== */}
      <section className="py-16" id="agenda">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-medium text-center mb-16">Activity Matrix</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {AGENDA_DAYS.map((day) => (
              <Card key={day.label} className="flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={day.color}>
                        {day.label}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">
                        {day.date}
                      </span>
                    </div>
                    {day.time && (
                      <span className="text-xs font-medium text-muted-foreground">
                        {day.time}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex-1">
                  <ul className="space-y-3">
                    {day.sessions.map((session, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-xs font-medium text-muted-foreground w-20 shrink-0">
                          {session.time}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{session.title}</p>
                          {session.speaker && (
                            <p className="text-xs text-muted-foreground">
                              {session.speaker}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 6: Submission & Templates ===== */}
      <section className="py-16  bg-slate-950 text-slate-200" id="submit">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium mb-4">
              Submit Outputs &amp; Download Templates
            </h2>
            <p className="text-slate-400 mb-8">
              Submit your workshop outputs via OneDrive and download the required templates below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                render={
                  <a
                    href="https://link.depedcdo.online/Ys3aNb"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                className="bg-blue-500 hover:bg-blue-400 text-white font-medium"
              >
                Submit to OneDrive
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                render={<a href="https://s3.depedcdo.online/PAPs-PREXC.xlsx" download />}
                nativeButton={false}
                className="text-white font-semibold border-white/40 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                PAPs-PREXC File
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href="https://s3.depedcdo.online/Expenditure.xls" download />}
                nativeButton={false}
                className="text-white font-semibold border-white/40 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                Expenditure Template
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<a href="https://s3.depedcdo.online/BP-Forms_Templates-2028.xlsb" download />}
                nativeButton={false}
                className="text-white font-semibold border-white/40 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                BP Forms Templates 2028
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Footer ===== */}
      <footer className="py-10 border-t bg-muted/50">
        <div className="container mx-auto">
        </div>
      </footer>
    </main>
  );
}
