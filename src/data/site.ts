export const identity = {
  handle:  'shortbusmenace',
  since:   '2025',
  status:  'lets get it',
  bio:     'building because I can.',
};

export const links = [
  { label: 'github',       href: 'https://github.com/shortbusmenace2' },
  // { label: 'signal bridge', href: 'https://signalbridge.substack.com' },
  { label: 'x',            href: 'https://x.com/shortbusmenace' },
  { label: 'ukraineaidmap', href: 'https://ukraineaidmap.org', flag: true },
  { label: 'aidtrack',     href: 'https://aidtrack.org' },
];

export interface Project {
  name:  string;
  href?: string;
  url?:  string;
  desc:  string;
  tags:  string[];
}

export const projects: Project[] = [
  {
    name: 'UkraineAidMap',
    href: 'https://ukraineaidmap.org',
    url:  'ukraineaidmap.org',
    desc: 'Mapping aid and resources for Ukraine. Real-time, open, public. Updated regularly.',
    tags: ['map', 'open source'],
  },
  {
    name: 'AidTrack',
    href: 'https://aidtrack.org',
    url:  'aidtrack.org',
    desc: 'Resource tracking database for NGOs. Operational clarity for aid distribution at scale.',
    tags: ['database', 'ngo',],
  },
  // Add more projects here
];

export interface NowItem {
  label: string;
  value: string;
}

export const now: NowItem[] = [
  { label: 'BUILDING',  value: 'maintaining existing projects rn' },
  { label: 'READING',   value: 'crime and punishment' },
  { label: 'THINKING',  value: 'life is really good when you turn off your brain' },
  { label: 'UPDATED',   value: '6/11/2026' },
];

export const contact = {
  lines: [
    { label: 'x',            href: 'https://x.com/shortbusmenace',        text: 'x.com/shortbusmenace' },
    // { label: 'substack',     href: 'https://signalbridge.substack.com',   text: 'signalbridge.substack.com' },
  ],
};
