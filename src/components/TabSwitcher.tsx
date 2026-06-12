import { useState } from 'react';
import type { Project, NowItem } from '../data/site';

interface ContactLink {
  label: string;
  href:  string;
}

interface ContactData {
  body:  string;
  links: ContactLink[];
}

interface Props {
  projects: Project[];
  now:      NowItem[];
  contact:  ContactData;
}

const tabs = ['projects', 'now', 'contact'] as const;
type Tab = typeof tabs[number];

export default function TabSwitcher({ projects, now, contact }: Props) {
  const [active, setActive] = useState<Tab>('projects');

  return (
    <div>
      {/* Tab nav */}
      <nav className="flex border-b border-[#e0e0e0]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={[
              'relative font-condensed text-[0.72rem] font-semibold tracking-[0.16em] uppercase',
              'py-[1.1rem] pr-[1.4rem] mr-2 border-b-2 -mb-px transition-colors duration-150 cursor-pointer bg-transparent border-x-0 border-t-0',
              active === tab
                ? 'text-[#0a0a0a] border-b-[#0a0a0a]'
                : 'text-[#999] border-b-transparent hover:text-[#0a0a0a]',
            ].join(' ')}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Panels */}
      <div className="py-12 animate-panel-in" key={active}>

        {/* ── Projects ── */}
        {active === 'projects' && (
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="project-row grid gap-8 py-8 border-b border-[#e0e0e0] first:border-t first:border-[#e0e0e0] transition-colors duration-150"
                style={{ gridTemplateColumns: '2fr 3fr auto' }}
              >
                {/* Meta */}
                <div>
                  <span className="font-mono text-[0.6rem] text-[#ccc] tracking-[0.08em] block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener"
                      className="font-condensed text-[1.1rem] font-semibold tracking-[0.04em] uppercase text-ink block mb-2 transition-colors duration-150 hover:text-[#999] no-underline"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span className="font-condensed text-[1.1rem] font-semibold tracking-[0.04em] uppercase text-[#ccc] block mb-2">
                      {project.name}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-[0.35rem]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#999] border border-[#bbb] px-[0.4rem] py-[0.1rem]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[0.85rem] leading-[1.8] text-[#444] font-light pt-[0.15rem]">
                  {project.desc || <span className="text-[#ccc] italic">placeholder — add description.</span>}
                </p>

                {/* Arrow */}
                <span className="project-arrow text-[#ccc] text-[1rem] pt-[0.2rem] transition-all duration-150">
                  ↗
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── Now ── */}
        {active === 'now' && (
          <div
            className="grid"
            style={{ gridTemplateColumns: '120px 1fr' }}
          >
            {now.map((item) => (
              <div key={item.label} className="contents">
                <div className="font-condensed text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-[#999] py-[1.4rem] pr-6 border-b border-[#e0e0e0] first:border-t">
                  {item.label}
                </div>
                <div className="text-[0.85rem] leading-[1.8] text-[#444] font-light py-[1.4rem] border-b border-[#e0e0e0]">
                  {item.value || <span className="text-[#ccc] italic">—</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Contact ── */}
        {active === 'contact' && (
          <div className="max-w-[480px]">
            <p className="text-[0.9rem] leading-[1.9] text-[#444] font-light">
              {contact.body}{' '}
              {contact.links.map((link, i) => (
                <span key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-ink font-normal no-underline border-b border-[#bbb] transition-colors duration-150 hover:border-ink"
                  >
                    {link.label}
                  </a>
                  {i < contact.links.length - 1 ? ' or ' : '.'}
                </span>
              ))}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
