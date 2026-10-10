/**
 * SKILLTECH Company Source of Truth
 * Sourced directly from the official company profile PDF.
 */

export interface WorkforceModel {
  id: string;
  number: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  bestFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface EcosystemService {
  title: string;
  category: 'Talent & HR' | 'Enterprise & Projects' | 'Advisory & Growth';
  description: string;
}

export const COMPANY_INFO = {
  name: 'SKILLTECH',
  tagline: 'Connecting Talent, Projects & Business Opportunities',
  businessType: 'Business Consulting and Services',
  domain: 'HR & Workforce Solutions',
  headquarters: 'Wadala, Mumbai',
  state: 'Maharashtra',
  country: 'India',
  founded: '2020',
  companySize: '51–200',
  associatedMembers: '284+',
  heroHeadline: 'Your Workforce, Our Support.',
  heroSubheadline: 'Flexible talent models for changing business needs.',
  missionStatement:
    'Connecting talent with opportunities through industry-specific skill focus and dynamic services tailored to business needs.',
  closingStatement: 'Connecting People • Projects • Opportunities',
  email: 'skilltechc2c@gmail.com',
  address: 'Dosti Shoppe Link, 2nd Floor, Office No. 23, Wadala, Mumbai – 400037',
  pinCode: '400037',
  contactNote: 'Contact SkillTech for corporate workforce inquiries and consultations.',
};

export const STATS = [
  {
    value: 2020,
    suffix: '',
    label: 'Founded',
    sublabel: 'Established in Mumbai',
  },
  {
    value: 0,
    textValue: 'Mumbai',
    label: 'Headquarters',
    sublabel: 'Maharashtra, India',
  },
  {
    value: 0,
    textValue: '51–200',
    label: 'Company Size',
    sublabel: 'Core operations & consulting',
  },
  {
    value: 284,
    suffix: '+',
    label: 'Associated Members',
    sublabel: 'Active talent network*',
  },
];

export const WORKFORCE_MODELS: WorkforceModel[] = [
  {
    id: 'on-roll',
    number: '01',
    name: 'ON-ROLL',
    title: 'Long-term Workforce',
    subtitle: 'For long-term manpower requirements',
    description: 'Permanent employment for continuing roles.',
    bestFor: 'Strategic core positions, leadership tracks, and sustained functional manpower.',
    points: [
      'Understand role, skills, experience, location and budget.',
      'Source candidates through relevant recruitment channels.',
      'Screen and shortlist against the requirement.',
      'Coordinate interviews, feedback and selection.',
      'Support offer communication, documentation and joining.',
    ],
  },
  {
    id: 'off-roll',
    number: '02',
    name: 'OFF-ROLL',
    title: 'Flexible Deployment',
    subtitle: 'Flexible deployment for client workforce requirements',
    description: 'External staffing structure for client requirements.',
    bestFor: 'Rapid capacity scaling, seasonal operations, and outsourced headcount management.',
    points: [
      'Capture client role, skill, location, shift and deployment needs.',
      'Source, shortlist and deploy suitable candidates.',
      'Maintain client and deployed workforce coordination.',
      'Support attendance, documentation and payroll inputs as applicable.',
      'Handle workforce queries and ongoing coordination.',
    ],
  },
  {
    id: 'short-term',
    number: '03',
    name: 'SHORT-TERM',
    title: 'Defined Projects',
    subtitle: 'Time-bound talent solutions for defined business needs',
    description: 'Talent for time-bound assignments and deliverables.',
    bestFor: 'Temporary surge capacity, time-sensitive milestones, and specialized technical execution.',
    points: [
      'Defined project scope and deliverables.',
      'Specific start and end period.',
      'Quick talent deployment.',
      'Suitable for temporary capacity requirements.',
      'Useful for specialized project support.',
    ],
  },
  {
    id: 'contractual',
    number: '04',
    name: 'CONTRACTUAL',
    title: 'Fixed-Term Roles',
    subtitle: 'Fixed-term / assignment-based workforce requirements',
    description: 'Defined duration, role and engagement terms.',
    bestFor: 'Dedicated interim specialists, maternity/leave cover, and term-contract deliverables.',
    points: [
      'Defined role and engagement duration.',
      'Clear terms and responsibilities.',
      'Role-specific candidate matching.',
      'Joining and documentation support.',
      'HR coordination during the assignment.',
    ],
  },
  {
    id: 'internships',
    number: '05',
    name: 'INTERNSHIPS',
    title: 'Early-Career Talent',
    subtitle: 'Building an early-career talent pipeline',
    description: 'Practical exposure and future talent pipeline.',
    bestFor: 'Campus talent incubation, project assistance, and nurturing future full-time hires.',
    points: [
      'Define department, skills, duration and learning objectives.',
      'Source students and fresh talent.',
      'Coordinate selection and joining.',
      'Allocate interns to practical projects.',
      'Support progress, feedback and completion.',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirement',
    description: 'Role, skills, duration, location and employment model.',
  },
  {
    number: '02',
    title: 'Talent Sourcing',
    description: 'Build a relevant candidate pipeline.',
  },
  {
    number: '03',
    title: 'Screening',
    description: 'Evaluate profiles against the requirement.',
  },
  {
    number: '04',
    title: 'Selection',
    description: 'Coordinate interviews, feedback and communication.',
  },
  {
    number: '05',
    title: 'Onboarding',
    description: 'Documentation, joining and deployment support.',
  },
  {
    number: '06',
    title: 'HR Support',
    description: 'Attendance, payroll inputs, queries and coordination.',
  },
  {
    number: '07',
    title: 'Monitoring',
    description: 'Client / candidate feedback and assignment progress.',
  },
  {
    number: '08',
    title: 'Closure',
    description: 'Completion, transition or exit coordination.',
  },
];

export const ECOSYSTEM_SERVICES: EcosystemService[] = [
  {
    title: 'Recruitment & Human Resource',
    category: 'Talent & HR',
    description: 'Comprehensive talent sourcing, candidate evaluation, interview orchestration, and continuous HR management.',
  },
  {
    title: 'Career Counselling & Mentorship',
    category: 'Talent & HR',
    description: 'Professional guidance, skill mapping, and mentorship programs designed to align career aspirations with market demands.',
  },
  {
    title: 'Campus Ambassador & Internship',
    category: 'Talent & HR',
    description: 'Bridging academia with enterprise through structured university programs and practical early-career internships.',
  },
  {
    title: 'International Assignments',
    category: 'Talent & HR',
    description: 'Global workforce mobility coordination, cross-border staffing requirements, and international project placements.',
  },
  {
    title: 'Work From Home & Part-Time Jobs',
    category: 'Talent & HR',
    description: 'Distributed workforce coordination, remote operational setups, and flexible part-time talent staffing.',
  },
  {
    title: 'Learns & Earn Program',
    category: 'Talent & HR',
    description: 'Practical training initiatives allowing candidates to build hands-on industry experience while earning compensation.',
  },
  {
    title: 'Turnkey Project Management',
    category: 'Enterprise & Projects',
    description: 'End-to-end project execution, milestone delivery, and coordinated team deployment for complete corporate deliverables.',
  },
  {
    title: 'Workspace Solutions',
    category: 'Enterprise & Projects',
    description: 'Tailored infrastructure, desk allocation, and managed workspace arrangements supporting dynamic team sizes.',
  },
  {
    title: 'CA Consulting',
    category: 'Advisory & Growth',
    description: 'Chartered accountancy guidance, compliance assistance, financial structuring, and corporate regulatory coordination.',
  },
  {
    title: 'Digital Marketing',
    category: 'Advisory & Growth',
    description: 'Strategic employer branding, digital outreach, and multi-channel marketing campaigns tailored for business expansion.',
  },
  {
    title: 'Real Estate',
    category: 'Advisory & Growth',
    description: 'Commercial real estate advisory, office space acquisition, and facility transition planning for expanding companies.',
  },
  {
    title: 'Billing Partner & Collaboration',
    category: 'Enterprise & Projects',
    description: 'Transparent commercial billing structures, joint venture collaborations, and vendor partner payroll operations.',
  },
];

export const WHY_SKILLTECH_POINTS = [
  {
    title: 'Industry-Specific Talent Focus',
    description: 'Domain-aligned sourcing methodologies ensuring candidates possess the exact technical and operational capabilities required.',
  },
  {
    title: 'On-Roll & Off-Roll Flexibility',
    description: 'Adaptable models balancing permanent core teams with scalable contract personnel based on commercial cycles.',
  },
  {
    title: 'Short-Term & Contractual Support',
    description: 'Quickly mobilize verified professionals for targeted sprint deliverables without long-term overhead obligations.',
  },
  {
    title: 'Internship & Early-Talent Pipeline',
    description: 'Incubate tomorrow’s top performers through monitored academic partnerships and project-driven student cohorts.',
  },
  {
    title: 'End-to-End HR Coordination',
    description: 'Comprehensive administrative oversight spanning documentation, compliance, attendance inputs, and query resolution.',
  },
  {
    title: 'Broader Business Service Ecosystem',
    description: 'Holistic support extending into workspace management, project delivery, CA consulting, and enterprise growth alliances.',
  },
];
