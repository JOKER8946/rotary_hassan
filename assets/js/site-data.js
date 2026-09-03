/* =====================================================================
   ROTARY CLUB HASSAN — SHARED SITE DATA
   ---------------------------------------------------------------------
   Single source of truth for the Rotary-year calendar and every event.
   Loaded by work.html (month grid) and month.html (month event list).

   MONTHS — the 12 months of the Rotary year, July to June.
     key      : URL value, i.e. month.html?m=july
     status   : 'completed' (record of what happened) | 'planned'
     events   : ordered EVENTS keys shown for that month

   EVENTS — one entry per event/initiative.
     cardTitle / blurb / image / alt / dateBadge  -> the card
     title / description / outcomes / partner / photos -> the detail popup
     A photo without `src` renders as a titled placeholder tile.
   ===================================================================== */

const MONTHS = [
  { key: 'july',      label: 'July',      year: '2026', num: '01', emoji: '🎖️',  status: 'completed',
    events: ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7'] },
  { key: 'august',    label: 'August',    year: '2026', num: '02', emoji: '🏫',  status: 'planned', events: ['3'] },
  { key: 'september', label: 'September', year: '2026', num: '03', emoji: '🎓',  status: 'planned', events: ['6'] },
  { key: 'october',   label: 'October',   year: '2026', num: '04', emoji: '🚀',  status: 'planned', events: ['7'] },
  { key: 'november',  label: 'November',  year: '2026', num: '05', emoji: '🏡',  status: 'planned', events: ['10'] },
  { key: 'december',  label: 'December',  year: '2026', num: '06', emoji: '🏥',  status: 'planned', events: ['1'] },
  { key: 'january',   label: 'January',   year: '2027', num: '07', emoji: '🏗️',  status: 'planned', events: ['12'] },
  { key: 'february',  label: 'February',  year: '2027', num: '08', emoji: '🩺',  status: 'planned', events: ['8'] },
  { key: 'march',     label: 'March',     year: '2027', num: '09', emoji: '👩‍⚕️', status: 'planned', events: ['4'] },
  { key: 'april',     label: 'April',     year: '2027', num: '10', emoji: '🛣️',  status: 'planned', events: ['9'] },
  { key: 'may',       label: 'May',       year: '2027', num: '11', emoji: '👁️',  status: 'planned', events: ['2'] },
  { key: 'june',      label: 'June',      year: '2027', num: '12', emoji: '💻',  status: 'planned', events: ['11'] }
];

const EVENTS = {

  /* ---- JULY 2026: EVENTS ACTUALLY CONDUCTED (source: MYTHRI July edition & meeting minutes) ---- */
  "j1": {
    cardTitle: "RO Water Purifier for KSOU",
    blurb: "A purifier worth ₹35,000 donated to Karnataka State Open University, Hassan, with Doctors' Day and CA Day honours.",
    image: "assets/july2026/ksou_water_purifier.jpg",
    alt: "RO water purifier handed over at Karnataka State Open University, Hassan",
    dateBadge: "🗓️ 1 July",
    title: "RO Water Purifier for Karnataka State Open University",
    tag: "Water & Sanitation",
    date: "1 July 2026",
    description: "The 2026–27 Rotary year opened with a service project: the Rotary Club of Hassan donated an RO water purifier worth ₹35,000 to Karnataka State Open University, SMK Nagar, Arsikere Road, Hassan. The unit was sponsored by club member Rtn. Pani Kumar B and provides safe drinking water to thousands of students, staff members and visitors. On the same occasion the club celebrated Doctors' Day, Chartered Accountants' Day and GST Day by honouring the doctors and chartered accountants of the club, followed by a well-attended breakfast meeting.",
    outcomes: [
      "RO water purifier worth ₹35,000 installed at Karnataka State Open University, Hassan",
      "Safe drinking water for thousands of students, staff members and visitors",
      "Doctors' Day, Chartered Accountants' Day and GST Day marked by honouring club professionals",
      "Breakfast meeting held the same morning with excellent member attendance"
    ],
    partner: "Karnataka State Open University, Hassan · Purifier sponsored by Rtn. Pani Kumar B",
    photos: [
      { title: "Purifier Handover", desc: "The RO unit installed and handed over at KSOU", src: "assets/july2026/ksou_water_purifier.jpg" },
      { title: "Members at KSOU", desc: "Club members at the university after the handover", src: "assets/july2026/ksou_group.jpg" },
      { title: "Breakfast Meeting", desc: "Members at the breakfast meeting that followed", src: "assets/july2026/ksou_breakfast_meeting.jpg" }
    ]
  },

  "j2": {
    cardTitle: "Installation Preparation Meeting",
    blurb: "Programme flow, backstage coordination, and committee responsibilities finalised for the Installation Ceremony.",
    image: "assets/july2026/prep_meeting_table.jpg",
    alt: "Members at the installation preparation meeting, Chiranthana office, Hassan",
    dateBadge: "🗓️ 2 July",
    title: "Installation Preparation Meeting",
    tag: "Club Meeting",
    date: "2 July 2026 · Chiranthana, K. R. Puram",
    description: "The weekly meeting at the Chiranthana office was devoted to preparations for the Installation Ceremony of 9 July. The main programme agenda and the micro agenda (backstage coordination plan) were reviewed and finalised — programme flow, stage management, guest felicitation, induction kits and oath copies, sound and audiovisual support, registration, fellowship and refreshments. The Master of Ceremony responsibility was entrusted to Rtn. PAG Pradeep, and committee-wise duties were assigned with guidance from senior Rotarians.",
    outcomes: [
      "Main programme agenda and backstage micro agenda reviewed and approved",
      "Master of Ceremony responsibility entrusted to Rtn. PAG Pradeep",
      "Committee-wise responsibilities assigned for every segment of the ceremony",
      "Venue, guest invitations, hospitality and logistics confirmed"
    ],
    partner: "Chiranthana, K. R. Puram, Hassan",
    photos: [
      { title: "Planning Session", desc: "Members reviewing the programme agenda", src: "assets/july2026/prep_meeting_table.jpg" },
      { title: "Guidance from Seniors", desc: "Senior Rotarians advising on arrangements", src: "assets/july2026/prep_meeting_dais.jpg" }
    ]
  },

  "j3": {
    cardTitle: "Team Aikyam Installation Ceremony",
    blurb: "Rtn. Dr. Geetha Kiran A installed as the club's first lady president by PDG Rtn. Keshav H. R., with the full Board.",
    image: "assets/july2026/installation_office_bearers.jpg",
    alt: "Installation of Team Aikyam office bearers, Nandagokula Convention Centre, Hassan",
    dateBadge: "🗓️ 9 July",
    title: "Team Aikyam Installation Ceremony",
    tag: "Club Milestone",
    date: "9 July 2026 · Nandagokula Convention Centre",
    description: "The Installation Ceremony for the Rotary Year 2026–27 was held at Nandagokula Convention Centre, Hassan. Rtn. Dr. Geetha Kiran A assumed office as President — the first lady president of the club — with Rtn. Sunitha Somashekar as Secretary and Rtn. Nirmal Kumar Jain as Treasurer, along with the Board of Directors, office bearers, and newly inducted members with their families. Responsibilities were handed over by Immediate Past President Rtn. Mahesh D. R. Installation Officer and Chief Guest PDG Rtn. Keshav H. R. installed the President and Board and unveiled the RI theme “Create Lasting Impact”, and Assistant Governor Rtn. A. Manjunath presented the vision and plans of District 3182. The programme was anchored by Rtn. PAG Pradeep.",
    outcomes: [
      "President, Secretary, Treasurer, Sergeant-at-Arms and Board of Directors installed for 2026–27",
      "Newly inducted members formally inducted along with their families",
      "RI theme “Create Lasting Impact” unveiled by the Installation Officer",
      "Secretary presented the club's action plan and activities for the Rotary year"
    ],
    partner: "Installation Officer & Chief Guest: PDG Rtn. Keshav H. R., RI District 3182",
    photos: [
      { title: "Installation of Office Bearers", desc: "The new team on stage at Nandagokula Convention Centre", src: "assets/july2026/installation_office_bearers.jpg" },
      { title: "Installation of the Secretary", desc: "Rtn. Sunitha Somashekar installed as Secretary", src: "assets/july2026/installation_secretary.jpg" },
      { title: "Address by the Chief Guest", desc: "PDG Rtn. Keshav H. R. addressing the gathering", src: "assets/july2026/installation_chief_guest.jpg" },
      { title: "Members & Families", desc: "Rotarians, Anns and families at the ceremony", src: "assets/july2026/installation_group.jpg" }
    ]
  },

  "j4": {
    cardTitle: "Classification Talks by New Members",
    blurb: "Newly inducted members shared their professional journeys; addressed by PDG Rtn. M. K. G. Kumar and IPDG Rtn. K. Palaksha.",
    image: "assets/july2026/classification_group.jpg",
    alt: "Members after the classification talks at Chiranthana, K. R. Puram, Hassan",
    dateBadge: "🗓️ 16 July",
    title: "Classification Talks by New Members",
    tag: "New Members",
    date: "16 July 2026 · Chiranthana, K. R. Puram",
    description: "The weekly meeting was given over to classification talks by the club's newly inducted members, who introduced themselves and shared their professional backgrounds, interests and aspirations for Rotary service. PDG Rtn. M. K. G. Kumar welcomed the new members into the Rotary family and spoke on the significance of Rotary's service initiatives, while IPDG Rtn. K. Palaksha spoke about the functioning and achievements of the club and assured the new members of his continued guidance. The Vote of Thanks was proposed by Secretary Rtn. Sunitha Somashekar.",
    outcomes: [
      "Newly inducted members delivered their classification talks to the club",
      "Addressed by PDG Rtn. M. K. G. Kumar and IPDG Rtn. K. Palaksha",
      "Stronger fellowship and understanding between new and existing members"
    ],
    partner: "Chiranthana, K. R. Puram, Hassan",
    photos: [
      { title: "After the Session", desc: "Members and new inductees together", src: "assets/july2026/classification_group.jpg" },
      { title: "Address by PDG", desc: "PDG Rtn. M. K. G. Kumar welcoming the new members", src: "assets/july2026/classification_pdg.jpg" },
      { title: "New Members", desc: "Newly inducted members at the meeting", src: "assets/july2026/classification_members.jpg" }
    ]
  },

  "j5": {
    cardTitle: "Orientation Programme for New Members",
    blurb: "Three sessions on Rotary's history, its structure from RI to club committees, and the roles of office bearers.",
    image: "assets/july2026/orientation_pdg_ramesh.jpg",
    alt: "PDG Rtn. B. N. Ramesh addressing the orientation programme for new members",
    dateBadge: "🗓️ 23 July",
    title: "Orientation Programme for New Members",
    tag: "New Members",
    date: "23 July 2026 · Chiranthana, Hassan",
    description: "An orientation programme gave the newly inducted members a full picture of Rotary International — its history, organisational structure and leadership responsibilities. PDG Rtn. B. N. Ramesh traced Rotary's journey from its founding in 1905 to its place among the world's largest humanitarian service organisations. IPDG Rtn. K. Palaksha explained the hierarchy from Rotary International through zones, districts, clubs and club committees, and the leadership responsibilities at each level. PAG Rtn. Pradeep presented the roles and responsibilities of office bearers and committee members, emphasising teamwork, accountability, communication and active participation.",
    outcomes: [
      "Three structured sessions on Rotary history, RI structure and member responsibilities",
      "Roles of the President, Secretary, Treasurer, Directors and Committee Chairs explained in detail",
      "Interactive question-and-reflection session with the new members"
    ],
    partner: "Resource persons: PDG Rtn. B. N. Ramesh, IPDG Rtn. K. Palaksha, PAG Rtn. Pradeep",
    photos: [
      { title: "Origin of Rotary", desc: "PDG Rtn. B. N. Ramesh on Rotary's history", src: "assets/july2026/orientation_pdg_ramesh.jpg" },
      { title: "Rotary Structure", desc: "Session on RI, zones, districts and club committees", src: "assets/july2026/orientation_ipdg.jpg" },
      { title: "Roles & Responsibilities", desc: "PAG Rtn. Pradeep on office bearer responsibilities", src: "assets/july2026/orientation_pradeep.jpg" }
    ]
  },

  "j6": {
    cardTitle: "Rotaract MCE Installation Ceremony",
    blurb: "Our President installed Rtr. Suraj C. S. and his team at the Rotaract Club of Malnad College of Engineering.",
    image: "assets/july2026/rotaract_collaring.jpg",
    alt: "Installation of the Rotaract Club of Malnad College of Engineering president",
    dateBadge: "🗓️ 24 July",
    title: "Rotaract Club of MCE — Installation Ceremony",
    tag: "Youth Service",
    date: "24 July 2026 · Alumni Hall, MCE Hassan",
    description: "The Installation Ceremony of the Rotaract Club of Malnad College of Engineering, sponsored by the Rotary Club of Hassan, was held at the Alumni Hall, MCE, Hassan. President Rtn. Dr. Geetha Kiran A served as Installation Officer and formally installed Rtr. Suraj C. S. as President for 2026–27 along with his team; outgoing President Rtr. Lekhana V was appreciated for her service and leadership. The ceremony was graced by District Governor Rtn. B. M. Bhat, Rtn. A. Manjunath, Rtn. D. R. Mahesh, Rtr. Reshma Ramesh and Rtr. Yashwanth L. S., marking the start of a new Rotaract year dedicated to leadership, fellowship and community service.",
    outcomes: [
      "Rtr. Suraj C. S. installed as Rotaract President for 2026–27 along with his team",
      "Outgoing President Rtr. Lekhana V recognised for her year of service",
      "Graced by District Governor Rtn. B. M. Bhat and district Rotary and Rotaract leaders"
    ],
    partner: "Rotaract Club of Malnad College of Engineering, Hassan (sponsored by RC Hassan)",
    photos: [
      { title: "Installing the President", desc: "Rtr. Suraj C. S. installed by our President", src: "assets/july2026/rotaract_collaring.jpg" },
      { title: "The New Rotaract Team", desc: "Office bearers and dignitaries on stage", src: "assets/july2026/rotaract_group.jpg" },
      { title: "On the Dais", desc: "Rotary and Rotaract leaders at the ceremony", src: "assets/july2026/rotaract_dais.jpg" },
      { title: "Installation Officer's Address", desc: "President Rtn. Dr. Geetha Kiran A addressing the Rotaractors", src: "assets/july2026/rotaract_president_address.jpg" }
    ]
  },

  "j7": {
    cardTitle: "Expert Session: “Sukha–Dukha”",
    blurb: "Dr. H. L. Mallesh Gowda on balancing happiness and sorrow, plus the Team VISTARA 2026 invitation to the club.",
    image: "assets/july2026/sukhadukha_felicitation.jpg",
    alt: "Guest speaker Dr. H. L. Mallesh Gowda felicitated at Rotary Suvarna Bhavan, Hassan",
    dateBadge: "🗓️ 30 July",
    title: "Expert Session: “Sukha–Dukha”",
    tag: "Fellowship",
    date: "30 July 2026 · Rotary Suvarna Bhavan",
    description: "At the weekly meeting at Rotary Suvarna Bhavan, Dr. H. L. Mallesh Gowda — retired Professor of Kannada and President of the District Kannada Sahitya Parishat, Hassan — delivered an expert session on “Sukha–Dukha” (happiness and sorrow). Drawing on literature, philosophy and everyday life, he spoke about maintaining emotional balance in both joyful and difficult times and encouraged members to cultivate resilience, gratitude, compassion and positive thinking. The organising committee of Team VISTARA 2026 also visited the club and invited members to register for the District Membership Development & Public Image Seminar and Awards Night, to be held in Hassan on 29 and 30 August 2026.",
    outcomes: [
      "Expert session on “Sukha–Dukha” by Dr. H. L. Mallesh Gowda",
      "Team VISTARA 2026 committee invited members to the district seminar on 29–30 August 2026",
      "Club President, office bearers and members attended the installation ceremonies of all clubs in Zone 9 through July"
    ],
    partner: "Guest speaker: Dr. H. L. Mallesh Gowda, District Kannada Sahitya Parishat, Hassan",
    photos: [
      { title: "Felicitating the Speaker", desc: "Dr. H. L. Mallesh Gowda welcomed to the club", src: "assets/july2026/sukhadukha_felicitation.jpg" },
      { title: "On the Dais", desc: "The guest speaker with the club's leadership", src: "assets/july2026/sukhadukha_dais.jpg" },
      { title: "President's Remarks", desc: "President Rtn. Dr. Geetha Kiran A addressing the meeting", src: "assets/july2026/president_address.jpg" },
      { title: "Members at the Session", desc: "Members at Rotary Suvarna Bhavan", src: "assets/july2026/sukhadukha_audience.jpg" }
    ]
  },

  /* ---- PLANNED INITIATIVES FOR THE REST OF THE ROTARY YEAR ---- */
  "1": {
    cardTitle: "Annual Community Wellness Drive",
    blurb: "Comprehensive health screening, blood donation, and eye care camp across Hassan district.",
    image: null,
    placeholder: "PHOTO: Year-End Mega Health Camp",
    dateBadge: "🗓️ December",
    title: "Blood Donation Drives",
    tag: "Health",
    date: "Held across Hassan District",
    description: "Voluntary blood donation camps organized across Hassan district in collaboration with Hassan Institute of Medical Sciences (HIMS) and local blood banks. Designed to address critical blood supply needs for emergency surgeries and medical care.",
    outcomes: [
      "Organized 4 major blood donation camps across Hassan district",
      "Targeted 300+ voluntary donor units collected",
      "Maintained active emergency donor registry for rare blood types"
    ],
    partner: "HIMS Blood Bank & Indian Red Cross Hassan",
    photos: [
      { title: "Active Donation Camp", desc: "Rotary members and community donors at work" },
      { title: "Donor Registration Desk", desc: "Volunteers registering blood donors" },
      { title: "Medical Screening Unit", desc: "Health checkup prior to blood donation" },
      { title: "Certificate Distribution", desc: "Honoring blood donors with Rotary certificates" }
    ]
  },

  "2": {
    cardTitle: "Eye & Organ Donation Awareness",
    blurb: "Awareness campaigns, marathons, and walkathons promoting eye and organ donation.",
    image: null,
    placeholder: "PHOTO: Eye/organ donation campaign",
    dateBadge: "🗓️ May",
    title: "Eye & Organ Donation Awareness",
    tag: "Health",
    date: "Awareness Campaign Drives",
    description: "Public awareness campaigns, walkathons, and pledge drives encouraging citizens of Hassan to pledge their eyes and organs for donation.",
    outcomes: [
      "Conducted public awareness rally in Hassan city center",
      "Collected 500+ signed organ donation pledge forms",
      "Distributed educational literature in local Kannada & English"
    ],
    partner: "District Health Office & Local Eye Banks",
    photos: [
      { title: "Awareness Walkathon", desc: "Rotary members marching through Hassan city" },
      { title: "Pledge Counter", desc: "Citizens signing organ donation pledges" },
      { title: "Doctor Address", desc: "Medical experts highlighting eye donation impact" },
      { title: "Banners & Placards", desc: "Public awareness display banners" }
    ]
  },

  "3": {
    cardTitle: "School Development Initiatives",
    blurb: "Upgrading rural school premises, drinking water stations, and hygiene under Happy School.",
    image: null,
    placeholder: "PHOTO: School development / Happy School",
    dateBadge: "🗓️ August",
    title: "School Development Initiatives",
    tag: "Education",
    date: "Happy School Initiative",
    description: "Under Rotary's Happy School Initiative, upgrading government and rural schools in Hassan with clean drinking water stations, renovated toilet facilities, desks, and vibrant learning spaces.",
    outcomes: [
      "Adopted 3 government schools in Hassan district",
      "Installed purified drinking water units and clean sanitation facilities",
      "Provided dual desks, blackboards, and classroom painting"
    ],
    partner: "Department of School Education & Literacy, Hassan",
    photos: [
      { title: "Clean Water Station", desc: "Purified water unit installed at school" },
      { title: "Sanitation Facility", desc: "Upgraded toilet block for school children" },
      { title: "Classroom Desks", desc: "New dual desks supplied to students" },
      { title: "Campus Painting", desc: "Vibrant educational mural art on school walls" }
    ]
  },

  "4": {
    cardTitle: "Women's Health Awareness",
    blurb: "Dedicated health checkup camps and screening sessions focused on women's wellness.",
    image: null,
    placeholder: "PHOTO: Women's health awareness session",
    dateBadge: "🗓️ March",
    title: "Women's Health Awareness",
    tag: "Health",
    date: "Wellness Workshops",
    description: "Dedicated workshops, health screening camps, and hygiene awareness sessions focusing on women's wellness, anemia prevention, and cervical health led by expert Gynaecologists.",
    outcomes: [
      "Organized 6 specialized women's health checkup camps",
      "Provided free health screening & anemia testing for 600+ women",
      "Distributed hygiene kits and health guidance handbooks"
    ],
    partner: "HIMS Hassan & Rotary Anns Club Hassan",
    photos: [
      { title: "Health Screening Camp", desc: "Doctors counseling women at medical camp" },
      { title: "Hygiene Kit Distribution", desc: "Distributing wellness supplies to attendees" },
      { title: "Doctor Awareness Talk", desc: "Informative session on women's health" },
      { title: "Participant Registration", desc: "Women registering for free health checkup" }
    ]
  },

  /* Not currently scheduled to a month — see the note in the task file. */
  "5": {
    cardTitle: "Youth Skill Development",
    blurb: "Capacity-building workshops, soft skills training, and leadership seminars for students.",
    image: null,
    placeholder: "PHOTO: Youth skill development bootcamp",
    dateBadge: "🗓️ To be scheduled",
    title: "Youth Skill Development",
    tag: "Youth",
    date: "Student Bootcamps",
    description: "Capacity-building workshops, soft skills training, and leadership seminars for high school and college students to enhance employability and personal growth.",
    outcomes: [
      "Reached 1,000+ high school & college students across Hassan",
      "Conducted workshops on communication, leadership & digital skills",
      "Provided career counseling with industry professionals"
    ],
    partner: "Malnad College of Engineering & Local Degree Colleges",
    photos: [
      { title: "Skill Workshop", desc: "Interactive student bootcamp session" },
      { title: "Group Exercise", desc: "Teamwork and problem-solving activities" },
      { title: "Resource Speaker", desc: "Industry expert guiding college youth" },
      { title: "Student Feedback", desc: "Students sharing key workshop takeaways" }
    ]
  },

  "6": {
    cardTitle: "Career Guidance & Scholarships",
    blurb: "Counselling, mentorship, and financial scholarships for 10th and PUC students.",
    image: null,
    placeholder: "PHOTO: Career counselling session",
    dateBadge: "🗓️ September",
    title: "Career Guidance & Scholarships",
    tag: "Education",
    date: "Academic Support Drive",
    description: "Specialized career guidance programs and financial scholarship distribution for deserving 10th standard and PUC students from economically weaker sections.",
    outcomes: [
      "Hosted annual career guidance summit for 10th & 12th standard students",
      "Awarded merit-cum-means scholarships to 30+ deserving students",
      "Published comprehensive higher education roadmap guide"
    ],
    partner: "Hassan District PU Education Board & Rotary Education Trust",
    photos: [
      { title: "Career Summit", desc: "Students attending career guidance presentation" },
      { title: "Scholarship Awarding", desc: "President & Dignitaries distributing scholarship cheques" },
      { title: "Mentorship Session", desc: "One-on-one student career counseling" },
      { title: "Booklet Distribution", desc: "Handing out career roadmaps to parents & kids" }
    ]
  },

  "7": {
    cardTitle: "Startup & Entrepreneurship Awareness",
    blurb: "Sessions building innovation and startup culture among young entrepreneurs in Hassan.",
    image: null,
    placeholder: "PHOTO: Startup/entrepreneurship session",
    dateBadge: "🗓️ October",
    title: "Startup & Entrepreneurship Awareness",
    tag: "Enterprise",
    date: "Innovation Seminars",
    description: "Interactive seminars and mentoring sessions in collaboration with ME-RIISE Foundation to ignite innovation and guide aspiring entrepreneurs on setting up ventures.",
    outcomes: [
      "Conducted 2 major startup workshops for engineering & degree students",
      "Mentored 15+ student innovation project teams",
      "Provided guidance on government startup grants & incubation"
    ],
    partner: "ME-RIISE Foundation & Chathur Pravarthan Pvt. Ltd.",
    photos: [
      { title: "Startup Seminar", desc: "Founder address on entrepreneurial mindset" },
      { title: "Idea Pitching Session", desc: "Students presenting startup ideas" },
      { title: "Incubation Tour", desc: "Visiting ME-RIISE startup incubation facility" },
      { title: "Mentor Q&A", desc: "Panel discussion with successful entrepreneurs" }
    ]
  },

  "8": {
    cardTitle: "CPR & First Aid Training",
    blurb: "Certified training programs run in partnership with the Indian Red Cross Society.",
    image: null,
    placeholder: "PHOTO: CPR / first aid training",
    dateBadge: "🗓️ February",
    title: "CPR & First Aid Training",
    tag: "Health",
    date: "Certification Drives",
    description: "Hands-on life-saving CPR (Cardiopulmonary Resuscitation) and emergency first-aid training sessions for police personnel, teachers, college students, and general public.",
    outcomes: [
      "Trained 400+ citizens in basic life support and CPR",
      "Distributed emergency first-aid kits to local public schools",
      "Issued certified completion badges to trained participants"
    ],
    partner: "Indian Red Cross Society Hassan Branch",
    photos: [
      { title: "Hands-on CPR Demo", desc: "Trainer demonstrating chest compressions on mannequin" },
      { title: "Participant Practice", desc: "Students practicing CPR techniques" },
      { title: "First Aid Kit Handover", desc: "Handing over emergency kits to school headmasters" },
      { title: "Certificate Distribution", desc: "Awarding first-responder certificates" }
    ]
  },

  "9": {
    cardTitle: "Road Safety Campaign",
    blurb: "Educational programs, helmet rallies, and reflector drives promoting road safety.",
    image: null,
    placeholder: "PHOTO: Road safety campaign",
    dateBadge: "🗓️ April",
    title: "Road Safety Campaign",
    tag: "Community",
    date: "Public Safety Drives",
    description: "Public safety awareness drives, helmet awareness rallies, traffic signal education, and reflector distribution for two-wheelers and bicycles across Hassan.",
    outcomes: [
      "Distributed 200+ safety helmets to two-wheeler riders",
      "Applied reflective tape on 500+ rural bicycles and bullock carts",
      "Partnered with Traffic Police for road sign awareness signage"
    ],
    partner: "Hassan District Police & Traffic Department",
    photos: [
      { title: "Helmet Rally", desc: "Rotary members & traffic police leading bike rally" },
      { title: "Reflector Drive", desc: "Fixing reflector stickers on rural vehicles" },
      { title: "Traffic Awareness", desc: "Distributing safety flyers at major junctions" },
      { title: "Police Partnership", desc: "Rotary leaders with District Superintendent of Police" }
    ]
  },

  "10": {
    cardTitle: "Happy Village Project",
    blurb: "Integrated development work supporting solar street lighting & village health camps.",
    image: null,
    placeholder: "PHOTO: Happy Village project",
    dateBadge: "🗓️ November",
    title: "Happy Village Project",
    tag: "Community",
    date: "Integrated Rural Development",
    description: "Comprehensive development of a selected rural village in Hassan district covering solar street lighting, health checkups, clean drinking water, and sanitation.",
    outcomes: [
      "Installed 15 solar streetlights in chosen adopted village",
      "Conducted comprehensive health screening for all village residents",
      "Established village community library and youth sports center"
    ],
    partner: "Local Gram Panchayat & District Administration",
    photos: [
      { title: "Solar Light Installation", desc: "Engineers setting up solar streetlights in village" },
      { title: "Village Medical Camp", desc: "Free health screening for villagers" },
      { title: "Gram Panchayat Meeting", desc: "Rotary leaders discussing village development" },
      { title: "Community Library", desc: "Inauguration of village book collection" }
    ]
  },

  "11": {
    cardTitle: "Digital Literacy for School Children",
    blurb: "Foundational computer skills and digital literacy programs for students across Hassan schools.",
    image: null,
    placeholder: "PHOTO: Digital literacy for school kids",
    dateBadge: "🗓️ June",
    title: "Digital Literacy for School Children",
    tag: "Education",
    date: "School Computer Rotations",
    description: "Equipping rural school students with basic computer literacy, safe internet browsing practices, and digital learning tools through mobile computer labs.",
    outcomes: [
      "Trained 500+ rural students in basic computer operation & typing",
      "Supplied refurbished computers to 2 rural school labs",
      "Conducted digital safety & cyber awareness sessions"
    ],
    partner: "BharatOne Services & Local Education Authorities",
    photos: [
      { title: "Computer Training Class", desc: "Children learning desktop computer basics" },
      { title: "PC Donation", desc: "Donating desktop computer sets to rural school" },
      { title: "Cyber Safety Talk", desc: "Session on safe internet practices" },
      { title: "Student Certificate", desc: "Proud students holding digital literacy certificates" }
    ]
  },

  "12": {
    cardTitle: "Bus Shelter Project",
    blurb: "Built with the support of Rtn. Ramesh Kothari, serving daily commuters in Hassan city.",
    image: null,
    placeholder: "PHOTO: Bus shelter construction",
    dateBadge: "🗓️ January",
    title: "Bus Shelter Project",
    tag: "Infrastructure",
    date: "Commuter Infrastructure",
    description: "Construction of modern, weather-proof public commuter bus shelters in Hassan, funded with the support of Rtn. Ramesh Kothari, providing shelter for daily passengers.",
    outcomes: [
      "Constructed durable passenger bus shelter with seating & solar lighting",
      "Provided clean, shaded waiting area for 200+ daily commuters",
      "Maintained public sanitation around bus stop location"
    ],
    partner: "Hassan City Municipal Council & Rtn. Ramesh Kothari",
    photos: [
      { title: "Shelter Construction", desc: "Civil foundation & structure assembly phase" },
      { title: "Inauguration Ceremony", desc: "Rotary leaders & municipal officials ribbon cutting" },
      { title: "Public Commuters", desc: "Local citizens utilizing comfortable shelter seating" },
      { title: "Night Solar Lighting", desc: "Illuminated shelter view during evening hours" }
    ]
  }
};

/* Helpers shared by work.html and month.html */
const SiteData = {
  months: MONTHS,
  events: EVENTS,
  getMonth(key) {
    return MONTHS.find(m => m.key === key) || null;
  },
  monthEvents(key) {
    const month = SiteData.getMonth(key);
    if (!month) return [];
    return month.events.map(id => EVENTS[id]).filter(Boolean);
  },
  /* Previous / next month within the Rotary year, wrapping June -> July */
  neighbours(key) {
    const i = MONTHS.findIndex(m => m.key === key);
    if (i === -1) return { prev: null, next: null };
    return {
      prev: MONTHS[(i - 1 + MONTHS.length) % MONTHS.length],
      next: MONTHS[(i + 1) % MONTHS.length]
    };
  }
};
