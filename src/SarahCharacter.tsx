type Props = { className?: string }

/** A hand-built, lightweight vector character; facial details stay editable in source. */
export default function SarahCharacter({ className = '' }: Props) {
  return <svg className={className} viewBox="0 0 420 530" role="img" aria-label="Illustration of Sarah examining a materials sample" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hair" x1=".1" y1="0" x2=".9" y2="1"><stop stopColor="#68432f"/><stop offset=".48" stopColor="#39291f"/><stop offset="1" stopColor="#241d19"/></linearGradient>
      <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f6c8a4"/><stop offset="1" stopColor="#e9a983"/></linearGradient>
    </defs>
    <ellipse cx="212" cy="507" rx="126" ry="13" fill="#263d3a" opacity=".12"/>
    <g className="character-body">
      <path d="M114 263Q117 220 161 207h101q42 13 48 56l24 192H94z" fill="#426c72" stroke="#253b3b" strokeWidth="4"/>
      <path d="m163 211 48 53 48-53 24 244H142z" fill="#f4efe3" stroke="#253b3b" strokeWidth="4"/>
      <path d="m160 214 51 49-31 33-39-67zm101 0-50 49 31 33 39-67" fill="#e6dfd2" stroke="#253b3b" strokeWidth="3"/>
      <path d="M159 281h105M153 322h116M148 363h126" stroke="#d8d0c3" strokeWidth="2"/>
      <path d="M95 449h241l-2 24H94z" fill="#253b3b"/>
      <path d="M154 297q-34 19-45 60l-34 94q-5 15 11 19l13 3q14 3 21-11l49-89" fill="url(#skin)" stroke="#53392e" strokeWidth="4"/>
      <path d="M283 289q32 23 45 59l33 71q8 18-8 27l-12 7q-14 8-23-7l-48-80" fill="url(#skin)" stroke="#53392e" strokeWidth="4"/>
    </g>
    <g className="character-head">
      <path d="M125 161q-7-101 83-116 88 5 93 97l-5 137q-31 34-89 33-62-6-83-42z" fill="url(#hair)" stroke="#30231d" strokeWidth="4"/>
      <path d="M149 112q3-59 62-62 61 1 68 59l-11 64q-10 47-57 54-42-8-54-48z" fill="url(#skin)" stroke="#53392e" strokeWidth="3"/>
      <path d="M145 130q0-83 67-87 74-3 83 73-22-35-41-54-19 29-61 38-25 6-48 3z" fill="url(#hair)"/>
      <path d="M147 118q-7 90 8 151l-22 74q-36-64-29-154 4-78 40-119 9-11 24-17z" fill="url(#hair)" stroke="#30231d" strokeWidth="4"/>
      <path d="M278 112q26 62 7 146l28 58q27-76 18-155-8-71-48-105z" fill="url(#hair)" stroke="#30231d" strokeWidth="4"/>
      <path d="M168 147q15-10 31-1m37 0q17-10 31 1" fill="none" stroke="#493128" strokeWidth="5" strokeLinecap="round"/>
      <g fill="none" stroke="#282824" strokeWidth="5">
        <path d="M158 151q18-13 40-3l-2 27q-3 15-19 14-17-1-19-17z"/><path d="M235 148q17-9 35 3l-1 22q-3 16-19 16-15 0-17-15z"/><path d="M198 157q18-6 37-2"/>
      </g>
      <ellipse cx="180" cy="163" rx="4" ry="6" fill="#342d28"/><ellipse cx="254" cy="162" rx="4" ry="6" fill="#342d28"/>
      <path d="M214 165q-8 26 3 27" fill="none" stroke="#c78468" strokeWidth="3" strokeLinecap="round"/>
      <path d="M199 210q17 10 34-1" fill="none" stroke="#a65f55" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="232" cy="213" r="2.5" fill="#47342d"/>
    </g>
    <g className="character-sample">
      <path d="M55 271q-9-7-3-17l15-24q6-8 15-2l26 18q8 5 2 14l-16 25q-5 8-14 3z" fill="#d5b373" stroke="#473d2c" strokeWidth="4"/>
      <path d="m62 253 29 20m-19-33 30 20m-42 3 32-18m-24 33 32-18" stroke="#fff0c7" strokeWidth="2" opacity=".8"/>
    </g>
    <g className="character-grab">
      <path d="M332 340q-6 11 2 17l10 9q10 7 17-2l8-12q5-8-3-14l-11-8q-11-7-17 3z" fill="url(#skin)" stroke="#53392e" strokeWidth="3"/>
    </g>
  </svg>
}
