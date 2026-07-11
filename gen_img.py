import os, html

OUT = r"D:\core\side_hustle\portfolio-site\public\img"
PROJ = os.path.join(OUT, "projects")
os.makedirs(PROJ, exist_ok=True)

CAT_COLOR = {
    "AI / Agents": "#00e5ff",
    "Machine Learning": "#7c3aed",
    "Data": "#2dd4bf",
    "Apps / Games": "#ec4899",
}
CAT_ABBR = {
    "AI / Agents": "AI",
    "Machine Learning": "ML",
    "Data": "DATA",
    "Apps / Games": "APP",
}

projects = [
    ("Pharmaceutical AI Assistant", "AI / Agents", "pharma.svg"),
    ("Document Portal", "AI / Agents", "document-portal.svg"),
    ("Traffic Sign Classification", "Machine Learning", "traffic-sign.svg"),
    ("Attention Mask", "Machine Learning", "attention.svg"),
    ("Bank Marketing Campaign", "Data", "bank-marketing.svg"),
    ("Hotel Booking Cancellation", "Data", "hotel-booking.svg"),
    ("AI-assisted Minesweeper", "AI / Agents", "minesweeper.svg"),
    ("AI Tic-Tac-Toe", "Apps / Games", "tic-tac-toe.svg"),
    ("NYC TLC Data Analysis", "Data", "nyc-tlc.svg"),
]

def grid_lines(color):
    lines = []
    for x in range(0, 601, 40):
        lines.append(f'<line x1="{x}" y1="0" x2="{x}" y2="360"/>')
    for y in range(0, 361, 40):
        lines.append(f'<line x1="0" y1="{y}" x2="600" y2="{y}"/>')
    return f'<g stroke="{color}" stroke-opacity="0.10" stroke-width="1">{"".join(lines)}</g>'

def proj_svg(name, cat):
    c = CAT_COLOR[cat]
    abbr = CAT_ABBR[cat]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="600" height="360">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0f"/>
      <stop offset="1" stop-color="{c}" stop-opacity="0.28"/>
    </linearGradient>
  </defs>
  <rect width="600" height="360" fill="url(#g)"/>
  {grid_lines(c)}
  <circle cx="300" cy="150" r="72" fill="none" stroke="{c}" stroke-width="2" stroke-opacity="0.55"/>
  <circle cx="300" cy="150" r="48" fill="none" stroke="{c}" stroke-width="1" stroke-opacity="0.35"/>
  <text x="300" y="162" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="30" font-weight="500" fill="{c}" fill-opacity="0.9">{abbr}</text>
  <text x="32" y="318" font-family="Space Grotesk, sans-serif" font-size="25" font-weight="700" fill="#e5e7eb">{html.escape(name)}</text>
  <text x="32" y="342" font-family="JetBrains Mono, monospace" font-size="13" fill="{c}">{html.escape(c.upper())}</text>
</svg>'''

for name, cat, fname in projects:
    with open(os.path.join(PROJ, fname), "w", encoding="utf-8") as f:
        f.write(proj_svg(name, cat))
    print("wrote", fname)

# About image (800x600)
about = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0f"/>
      <stop offset="0.6" stop-color="#10101a"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0.35"/>
    </linearGradient>
    <radialGradient id="r" cx="0.7" cy="0.3" r="0.6">
      <stop offset="0" stop-color="#00e5ff" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#00e5ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#a)"/>
  <rect width="800" height="600" fill="url(#r)"/>
  <g stroke="#00e5ff" stroke-opacity="0.12" stroke-width="1">
'''
for x in range(0, 801, 40):
    about += f'    <line x1="{x}" y1="0" x2="{x}" y2="600"/>\n'
for y in range(0, 601, 40):
    about += f'    <line x1="0" y1="{y}" x2="800" y2="{y}"/>\n'
about += '  </g>\n'
# orbital rings + code glyph
about += '''
  <g transform="translate(400,300)" fill="none" stroke="#00e5ff" stroke-opacity="0.5">
    <ellipse rx="180" ry="70" stroke-width="1.5"/>
    <ellipse rx="180" ry="70" stroke-width="1.5" transform="rotate(60)"/>
    <ellipse rx="180" ry="70" stroke-width="1.5" transform="rotate(120)"/>
    <circle r="14" fill="#00e5ff" fill-opacity="0.9" stroke="none"/>
  </g>
  <text x="400" y="316" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="44" font-weight="600" fill="#e5e7eb">&lt;/&gt;</text>
  <text x="400" y="500" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="22" font-weight="600" fill="#9ca3af">Applied AI · from notebook to production</text>
</svg>'''
with open(os.path.join(OUT, "about.svg"), "w", encoding="utf-8") as f:
    f.write(about)
print("wrote about.svg")
print("DONE")
