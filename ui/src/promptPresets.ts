// Effigy Multi-Domain Prompt & Asset Presets Catalog
// Production-grade prompts covering all six domains for 3D Game Asset, Cinematic Hero, and AI Video generation.

export type EffigyDomain = "laneshark" | "f1" | "diablo" | "flirt" | "chemmate" | "hero";

export type EffigyCategory = "prop" | "character" | "creature";

export interface PromptPresetItem {
  id: string;
  domain: EffigyDomain;
  category: EffigyCategory;
  subCategory: string;
  name: string;
  tagline: string;
  tags: string[];
  prompt3D: string;
  promptCinematic: string;
  promptVideo: string;
}

export interface DomainCategoryMeta {
  id: EffigyDomain;
  label: string;
  icon: string;
  description: string;
  subCategories: string[];
}

// Legacy interface for backward compatibility
export interface CharacterPreset {
  id: string;
  role: "Playable Hero" | "NPC / Faction Leader" | "Enemy / Boss";
  name: string;
  title: string;
  classType: string;
  faceAndHair: string;
  armorAndAttire: string;
  weaponAndStance: string;
  environment: string;
  musicVideoLighting: string;
  cameraMovement: string;
}

export const DOMAIN_CATEGORIES: DomainCategoryMeta[] = [
  {
    "id": "laneshark",
    "label": "LaneShark Bowling",
    "icon": "🎳",
    "description": "Bowling alley mechanics, billiards, retro arcades, sports bar lounge & pro shop.",
    "subCategories": [
      "Bowling Core",
      "Billiards & Rec",
      "Arcade Zone",
      "Sports Bar",
      "Pro Shop",
      "Facility Props"
    ]
  },
  {
    "id": "f1",
    "label": "2026 F1 Paddock",
    "icon": "🏎️",
    "description": "Formula 1 race track, paddock tools, tire systems, telemetry & personnel.",
    "subCategories": [
      "Drivers & Teams",
      "Team Leadership & FIA",
      "Officials & Track Crew",
      "Pit Stop Roles & Crew",
      "Pit Equipment",
      "Pit Wall & Telemetry",
      "2026 Tyres & Wheels",
      "Garage & Workshop",
      "Pit Lane Facilities",
      "Track Barriers & Safety",
      "Lights & Electronic Signals",
      "Recovery & Cranes",
      "Circuit Signage & Brands",
      "Circuit Structures",
      "Official & Service Vehicles",
      "Track Environment & Materials",
      "2026 Car Aero & Cockpit"
]
  },
  {
    "id": "diablo",
    "label": "Diablo JS ARPG",
    "icon": "⚔️",
    "description": "Dark fantasy medieval settlements, crafting forges, gothic arcana, weapons & dungeons.",
    "subCategories": [
      "Settlement",
      "Town NPCs",
      "Crafting",
      "Arcana",
      "Mage Gear",
      "Rogue Gear",
      "Warrior Gear",
      "Dungeons",
      "Enemies & Bosses"
    ]
  },
  {
    "id": "flirt",
    "label": "Flirt Game Cast",
    "icon": "💃",
    "description": "12 stylized contemporary female characters with distinct face sculpts & wardrobes.",
    "subCategories": [
      "Cast",
      "Wardrobes"
    ]
  },
  {
    "id": "chemmate",
    "label": "ChemMate Lab",
    "icon": "🧪",
    "description": "Borosilicate 3.3 laboratory glassware and high-precision digital analytical instruments.",
    "subCategories": [
      "Glassware",
      "Instruments"
    ]
  },
  {
    "id": "hero",
    "label": "Hero Shots & Antiquity",
    "icon": "🎬",
    "description": "Epic music-video cinematic keyframes, classical Roman/Hellenic armor & mythic archetypes.",
    "subCategories": [
      "Monument Hero",
      "Mythic Hero",
      "Gothic Hero",
      "Mystic Hero",
      "Pantheon Leader",
      "Deep Vaults",
      "Colosseum Boss",
      "Undead Elite"
    ]
  }
];

export const PROMPT_PRESETS: PromptPresetItem[] = [
  {
    "id": "ls-pin",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Regulation Bowling Pin",
    "tagline": "15-inch hard rock maple core with glossy Surlyn coat & red stripes",
    "tags": [
      "bowling",
      "tenpin",
      "pin",
      "laneshark",
      "strike",
      "maple",
      "surlyn"
    ],
    "prompt3D": "Full 3D game asset model of a regulation American tenpin bowling pin. Lathe-turned hard rock maple core encapsulated in a glossy white Surlyn ionomer plastic outer shell with two distinct bright crimson red neck stripes. Regulation dimensions: 15 inches height, 4.75 inches diameter at widest belly, flat base with nylon friction plug. Centered subject, level camera at mid height, isolated on pure neutral light-grey background (#d8d8d8), studio lighting, clean silhouette, high-fidelity PBR albedo, normal map, roughness 0.12, game-ready 3D asset turnaround.",
    "promptCinematic": "Cinematic macro hero shot of a gleaming white regulation tenpin standing pristine at the apex of a glossy synthetic bowling lane. Dramatic low-angle camera, reflections of overhead neon signs and ceiling light racks on the glossy Surlyn surface, subtle scuff marks on the neck stripe from tournament strikes, 35mm film photography, shallow depth of field, anamorphic lens flare, rich contrast.",
    "promptVideo": "Low-angle slow-motion camera gliding forward toward a solitary regulation tenpin on a gleaming lane. In the background, out-of-focus lane lights pulse and an out-of-focus spinning reactive resin ball enters frame right, hurtling toward the pocket. 24fps cinematic footage, shallow depth of field, dynamic anticipation."
  },
  {
    "id": "ls-ball-resin",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Reactive Resin Bowling Ball",
    "tagline": "16lb marbled reactive resin ball with asymmetrical core & finger grips",
    "tags": [
      "bowling",
      "ball",
      "reactive-resin",
      "hook",
      "laneshark",
      "sports"
    ],
    "prompt3D": "16-pound high-performance reactive resin bowling ball, 8.5-inch diameter spherical geometry, marbled deep cobalt blue, metallic copper, and midnight pearl swirl finish. Three precision-drilled finger holes with neon green silicone finger inserts and an oval thumb slug. Centered subject, level eye-height camera, isolated on flat neutral light-grey background (#d8d8d8), studio three-point lighting, clean spherical silhouette, PBR roughness 0.18, subtle pearlescent clearcoat reflection.",
    "promptCinematic": "Macro cinematic close-up of a marbled cobalt and copper reactive resin bowling ball resting on a polished mahogany return rack. Droplets of condensation, crisp laser-engraved manufacturer logos with gold leaf inlay, moody neon blue and amber bar illumination reflecting across the glossy curve, 35mm anamorphic lens, creamy bokeh, hyper-detailed texture.",
    "promptVideo": "Smooth orbiting arc shot around a spinning marbled bowling ball revolving slowly on a mechanical display spinner. Overhead spotlights highlight the swirling metallic mica flakes suspended within the transparent resin layer. 24fps macro cinema shot, creamy depth of field, steady motion."
  },
  {
    "id": "ls-ball-return",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Automated Ball Return with Hand Blower",
    "tagline": "Sub-floor elevator lift with integrated circular warm-air hand vent & ball rack",
    "tags": [
      "ball-return",
      "hand-blower",
      "bowling-mechanics",
      "laneshark",
      "equipment"
    ],
    "prompt3D": "Commercial bowling alley automated ball return lift and staging rack. High-impact molded charcoal plastic casing with brushed aluminum trim, circular warm-air hand blower vent with stainless mesh grille, dual chrome tubular rails holding up to 12 bowling balls, under-lane conveyor elevator housing. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), PBR textures, clean industrial silhouette.",
    "promptCinematic": "Atmospheric wide-angle hero photograph of an automated ball return station in a bustling retro-modern bowling alley. Two vibrant reactive resin balls emerging from the lower lift track with a gentle mechanical clack, subtle warm air shimmer rising from the chrome hand dryer blower, neon overhead signage reflecting off chrome guide rails, 35mm film aesthetic, Kodak Portra tone.",
    "promptVideo": "Slow pedestal crane down from the overhead monitors to the chrome ball return rack as a glossy violet bowling ball pops up smoothly from the subway elevator track, rolling forward to gently tap the queued balls. Soft warm air wisps up from the hand blower. 24fps cinema capture, shallow depth of field."
  },
  {
    "id": "ls-pinsetter",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Mechanical Pinsetter Machine",
    "tagline": "Heavy-duty industrial pin elevator wheel, distributor carpet & sweep rake",
    "tags": [
      "pinsetter",
      "machinery",
      "sweep-arm",
      "cables",
      "laneshark",
      "industrial"
    ],
    "prompt3D": "Heavy industrial mechanical bowling pinsetter machine (Brunswick A-2 / AMF 82-70 style). Welded steel framework, rotating circular pin elevator wheel, sweeping rake arm with protective rubber bumper, distributor carpet track, motorized pulley belts, hydraulic cables, and pin spotting cell deck. Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), realistic weathered industrial paint, grease stains, PBR textures.",
    "promptCinematic": "Dramatic back-of-house industrial photograph of a roaring mechanical pinsetter in mid-cycle. Steel sweeping arm clearing fallen pins, rotating pin elevator ferris wheel lifting white pins into the distributor track, glowing warm tungsten maintenance bulbs casting long mechanical shadows, airborne dust motes, 35mm grain, gritty documentary realism.",
    "promptVideo": "High-speed 60fps slowed to 24fps tracking shot behind the lane mask looking into the pinsetter mechanism. The heavy steel rake sweeps downward across the lane deck, then the distributor carriage spots ten fresh pins onto the pindeck with mechanical precision. Sparks and dust motes illuminated by industrial tungsten utility lamps."
  },
  {
    "id": "ls-lane-oil",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Synthetic Bowling Lane with Oil Pattern",
    "tagline": "60ft regulation synthetic maple boards with chevron arrows & blue oil sheen",
    "tags": [
      "lane",
      "synthetic-maple",
      "oil-pattern",
      "arrows",
      "laneshark",
      "pindeck"
    ],
    "prompt3D": "Section of regulation synthetic bowling lane (39 individual composite maple and pine boards, 41.5 inches width). Realistic chevron range-finder arrows, foul line guide dots, and an authentic USBC oil conditioner sheen pattern (35ft oil gradient transitioning to dry backends). Centered subject, isometric three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR glossiness maps showing the oil barrier cutoff.",
    "promptCinematic": "Low-angle dramatic hero shot looking down the length of a freshly conditioned synthetic bowling lane. Overhead strip LED fixtures reflect in a razor-sharp gradient along the oil pattern, contrasting the slick wet head-end with the matte dry friction zone near the pin deck. Vivid blue lane markers, glowing neon accents in the background, 35mm cinematic film grade.",
    "promptVideo": "Extreme low-angle tracking shot skimming 1 inch above the synthetic lane surface, rushing forward down the oil pattern toward the headpin. Light reflections stretch and shimmer across the conditioned wood grain texture before terminating abruptly at the dry breakpoint. 24fps dynamic dolly rush, cinematic anamorphic lens."
  },
  {
    "id": "ls-gutters",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Bowling Lane Side Gutters",
    "tagline": "Concave U-channel PVC gutters with drop-off ramps & matte scuff finish",
    "tags": [
      "gutters",
      "channels",
      "pvc",
      "laneshark",
      "bowling-props"
    ],
    "prompt3D": "Pair of regulation bowling alley side gutters (9.25 inches width, concave U-channel profile). Matte charcoal high-impact PVC/extruded urethane construction with molded drop-off ramps and interlocking mounting flanges. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR matte plastic finish with subtle scuff maps, clean modular game asset geometry.",
    "promptCinematic": "Moody cinematic perspective along the dark concave curvature of a bowling alley gutter channel. Subtle scuff marks from stray bowling balls, ambient pink and teal neon light grazing the textured rubber surface, shallow depth of field focusing on the drop-out lip near the pin pit, 35mm film aesthetic.",
    "promptVideo": "Slow macro camera track gliding along the inside curve of the matte PVC gutter. A stray bowling ball rolls past camera into the drop-down pit with a hollow reverberating thud. 24fps atmospheric shot, neon light reflections trailing across the channel."
  },
  {
    "id": "ls-approach",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Approach Area with Foul Line",
    "tagline": "15ft synthetic maple approach with alignment dots & optical foul sensor",
    "tags": [
      "approach",
      "foul-line",
      "alignment-dots",
      "synthetic-wood",
      "laneshark"
    ],
    "prompt3D": "Regulation bowling alley approach area (15ft synthetic maple slide boards) terminating at the black synthetic foul line. Embedded circular maple alignment dots and seven target locator markers, integrated black infrared beam emitter housing on side kickbacks. Centered subject, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), satin wood finish PBR textures, clean planar asset.",
    "promptCinematic": "Cinematic hero shot of the approach area at the foul line from a bowler's perspective. Polished synthetic maple planks glowing under warm pendant lamps, crisp black foul line cutting cleanly across the boards, the glistening conditioned lane stretching ahead into deep shadow, 35mm film grain, moody atmospheric composition.",
    "promptVideo": "Steadycam push-in tracking across the approach boards toward the foul line at walking speed, slowing to a gentle halt right at the black marker line as overhead spotlights flare softly into the lens. 24fps cinema footage, smooth forward momentum."
  },
  {
    "id": "ls-lane-oiler",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Motorized Lane Oiling Machine",
    "tagline": "Autonomous computerized lane conditioner with fluid tank & micro-duster roller",
    "tags": [
      "lane-oiler",
      "kegel",
      "maintenance",
      "robotics",
      "laneshark"
    ],
    "prompt3D": "Autonomous motorized bowling lane oiling and conditioning machine (Kegel / Sanction Technology style). Sleek aerodynamic molded ABS outer shell in charcoal and safety orange, digital touchscreen display panel, internal fluid reservoir tank, polyurethane traction drive wheels, microfiber cleaning duster roller, squeegee assembly. Centered subject, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures, clean industrial silhouette.",
    "promptCinematic": "Dramatic hero photograph of a computerized motorized lane oiling machine parked at the head of a bowling lane during morning preparation. Polished metallic chassis reflecting overhead fluorescent banks, illuminated LCD control panel displaying fluid telemetry graphics, mist nozzles visible beneath the chassis, 35mm film photography, crisp industrial details.",
    "promptVideo": "Slow lateral tracking shot following the motorized lane machine as it glides autonomously down the synthetic lane, laying down a micro-layer of blue conditioner fluid while its traction wheels rotate smoothly. Soft mechanical hum, 24fps cinema capture, low-angle perspective."
  },
  {
    "id": "ls-monitors",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Overhead Multi-Screen Scoring Monitors",
    "tagline": "Ceiling-truss mounted triple display cluster with animated 90s scoreboards",
    "tags": [
      "monitors",
      "scoring",
      "screens",
      "truss",
      "retro-animations",
      "laneshark"
    ],
    "prompt3D": "Overhead multi-screen bowling lane scoring display cluster. Rigid welded steel ceiling truss mount, three 43-inch commercial flat-panel LED monitors angled downward at 15 degrees, retro 90s animated strike/spare scorekeeping graphic interfaces displayed on screens, cable management conduits. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), emissive screen textures, clean PBR materials.",
    "promptCinematic": "Vibrant hero photo looking up at a suspended trio of overhead scoring monitors in a lively bowling center. Bright retro 16-bit bowling animations and score tallies glowing with saturated cyan, yellow, and magenta against dark venue ceilings, ambient neon glow, subtle lens bloom, 35mm film look.",
    "promptVideo": "Slow upward tilt from the bowler seating area to the vibrant overhead scoring monitors as a digital 'STRIKE!' animation flashes across all three screens with pulsating colorful confetti graphics. 24fps cinematic footage, dynamic light reflections on surrounding ceiling rafters."
  },
  {
    "id": "ls-score-console",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Scorekeeping Console with Keypad",
    "tagline": "Freestanding pedestal terminal with silicone numeric keypad & LCD touchscreen",
    "tags": [
      "score-console",
      "keypad",
      "touchscreen",
      "terminal",
      "pedestal",
      "laneshark"
    ],
    "prompt3D": "Freestanding bowler scorekeeping console pedestal. Heavy cast-iron base, tubular steel upright stand, tilted console pod featuring a sealed silicone membrane numeric keypad, trackball controller, and an integrated 15-inch color LCD touch interface showing lane player lineups. Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR matte and semi-gloss textures.",
    "promptCinematic": "Moody close-up of a bowling scoring console standing between two lanes. Fingerprints on the backlit touch screen, illuminated tactile rubber buttons glowing softly in amber and green, drink holder ring on side containing a condensation-covered cup, 35mm film grain, shallow depth of field.",
    "promptVideo": "Gentle slow-motion push-in toward the glowing keypad console. An illuminated cursor moves across the screen as a new bowler name is entered, followed by the screen pulsing with a green confirmation chime graphic. 24fps cinema shot, intimate perspective."
  },
  {
    "id": "ls-bowler-bench",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Bowling Core",
    "name": "Bowler Bench Seating",
    "tagline": "Modular curved fiberglass bench with marine vinyl cushions & lower ball rack",
    "tags": [
      "bench",
      "seating",
      "furniture",
      "ball-storage",
      "laneshark",
      "lounge"
    ],
    "prompt3D": "Modern bowling center modular bowler seating unit. Curved fiberglass curved frame in charcoal grey, high-resilience molded marine-grade vinyl cushions in teal and mustard yellow, integrated lower steel mesh rack for bowling ball bags and street shoes, built-in dual swivel cupholders. Centered subject, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR leatherette and powder-coat steel maps.",
    "promptCinematic": "Stylized cinematic still of a curved retro-modern bowling alley booth seating area. Warm overhead pendant lamps casting pools of golden light on the tufted vinyl seats, a pair of rental shoes and a bowling bag resting on the lower rack, cozy social atmosphere, 35mm film texture, rich nostalgic tones.",
    "promptVideo": "Smooth orbiting arc shot around the curved bowler bench unit. Soft ambient shadows shift across the vinyl upholstery and powder-coated steel frame as background bowling alley activity moves softly out of focus. 24fps cinematic camera motion."
  },
  {
    "id": "ls-pool-table",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Full-Size Felt Slate Billiard Table",
    "tagline": "9ft tournament table with electric blue Simonis cloth & mother-of-pearl sights",
    "tags": [
      "billiards",
      "pool-table",
      "slate",
      "simonis-felt",
      "laneshark",
      "recreation"
    ],
    "prompt3D": "Regulation 9-foot tournament slate billiard table. Solid hardwood cabinet with rich walnut veneer, 1-inch diamond-honed 3-piece Brazilian slate bed covered in tournament electric blue Simonis 860 worsted wool cloth, K-66 profile rubber cushion rails with inlaid mother-of-pearl diamond sights, genuine leather drop pockets with brass shield irons. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood and woven felt textures.",
    "promptCinematic": "Dramatic overhead three-quarter hero photo of a tournament billiard table under a suspended three-shade brass billiard lamp. The electric blue felt cloth glows vividly under the warm downward light cones, deep shadow falls across the carved walnut legs, crisp reflections on the polished wooden rails, 35mm film aesthetic.",
    "promptVideo": "Slow descending crane shot starting high above the suspended brass pool lamp, lowering smoothly to eye level with the pristine blue felt table surface where a racked triangle of phenolic balls rests motionless. 24fps cinema capture, rich lighting transition."
  },
  {
    "id": "ls-pool-balls",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Regulation Pool Ball Set",
    "tagline": "16-piece cast phenolic resin balls (solids, stripes, 8-ball & dotted cue ball)",
    "tags": [
      "billiards",
      "pool-balls",
      "aramith",
      "8-ball",
      "solids-stripes",
      "laneshark"
    ],
    "prompt3D": "Complete 16-piece regulation pool ball set (2.25-inch diameter). Cast phenolic resin (Aramith style), comprising balls 1 through 7 (vibrant solids), the black 8-ball, balls 9 through 15 (crisp white stripes), and an unblemished white cue ball with red training dots. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), high-gloss PBR clearcoat reflection, clean spherical topology.",
    "promptCinematic": "Extreme macro hero photograph of the gleaming black 8-ball resting adjacent to the striped 9-ball on smooth billiard cloth. Razor-sharp reflections of overhead stained-glass lamps in the resin clearcoat, subtle micro-scuffs from break shots, shallow depth of field, 35mm film grain, sumptuous color depth.",
    "promptVideo": "Low-angle slow-motion 60fps slowed to 24fps shot of the cue ball colliding with the racked triangle of pool balls, bursting them outward in an explosive, satisfying spray across the felt surface. Macro lens, motion blur on fast-moving spheres, cinematic sound visualization."
  },
  {
    "id": "ls-pool-cues",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Maple Pool Cues",
    "tagline": "58-inch 2-piece Canadian maple cues with Irish linen wrap & leather tips",
    "tags": [
      "pool-cue",
      "maple",
      "irish-linen",
      "billiards",
      "laneshark"
    ],
    "prompt3D": "Pair of professional 58-inch two-piece billiard cues. Kiln-dried Canadian hard rock maple construction, exotic cocobolo and curly maple spliced inlays, pressed black-and-white Irish linen handle wrap, mirror-polished stainless steel 5/16x14 joint pin collar, 13mm layered leather tip on a white Aegis ferrule. Centered subject, level camera, angled diagonal presentation, isolated on neutral light-grey background (#d8d8d8), PBR wood and linen materials.",
    "promptCinematic": "Dramatic hero still of two finely crafted maple pool cues resting crossed against the rail of a pool table. The intricate wood spliced inlays and fibrous Irish linen wrap catch warm side lighting, fine chalk residue dusting the leather tip, 35mm film photography, rich warm wood tones.",
    "promptVideo": "Slow vertical pan along the length of a handcrafted maple pool cue from the rubber bumper, across the intricate cocobolo butt inlays, along the textured linen wrap, and ending at the chalked blue leather tip. 24fps cinematic macro camera glide."
  },
  {
    "id": "ls-chalk",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Master Billiard Chalk Cubes",
    "tagline": "1-inch blue chalk cubes with wrapped paper labels & concave cue depressions",
    "tags": [
      "chalk",
      "master-chalk",
      "billiards",
      "accessories",
      "laneshark"
    ],
    "prompt3D": "Set of four regulation blue billiard chalk cubes (Master brand style). 1-inch cubic geometry with wrapped paper label band around the perimeter, concave spherical thumb/cue depression on the top face, powdery chalk dust texture and micro-crumble bevels. Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), realistic matte powdery PBR texture maps.",
    "promptCinematic": "Ultra-close macro still of a single blue chalk cube resting on dark wood railing beside a pool cue tip. Loose ultramarine chalk dust grains scattered across the polished timber grain, soft warm directional side lighting creating dramatic relief, 35mm film grain, hyper-tactile texture.",
    "promptVideo": "Extreme close-up 24fps shot as a pool cue tip is twisted into the concave depression of the blue chalk cube, releasing a miniature cloud of blue powder particles that drift softly through a golden shaft of light. Anamorphic macro lens."
  },
  {
    "id": "ls-racks",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Wooden Triangle & Diamond Racks",
    "tagline": "Solid quarter-sawn oak 8-ball triangle & 9-ball diamond ball racks",
    "tags": [
      "triangle-rack",
      "diamond-rack",
      "oak",
      "billiards",
      "laneshark"
    ],
    "prompt3D": "Matching pair of solid hardwood billiard ball racks: an 8-ball equilateral triangle rack and a 9-ball diamond rack. Crafted from solid quarter-sawn dark oak with reinforced spline joints, smoothly routed interior bevels for ball clearance, and a satin polyurethane finish. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood grain textures, clean geometric silhouette.",
    "promptCinematic": "Moody top-down three-quarter photograph of a dark oak triangular ball rack framing fifteen tightly packed colorful billiard balls on green felt. The warm grain of the oak contrasts with the jewel tones of the phenolic balls, rich chiaroscuro shadows, 35mm film aesthetic.",
    "promptVideo": "Slow overhead vertical tilt as hands lift the wooden triangle rack smoothly off the packed balls, leaving the tight cluster resting perfectly undisturbed on the felt. 24fps cinematic footage, steady mechanical motion."
  },
  {
    "id": "ls-cue-rack",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Billiards & Rec",
    "name": "Wall-Mounted Cue Rack",
    "tagline": "Solid mahogany vertical wall rack with brass cue clips & ball storage shelf",
    "tags": [
      "cue-rack",
      "wall-mount",
      "mahogany",
      "brass",
      "billiards",
      "laneshark"
    ],
    "prompt3D": "Wall-mounted solid hardwood two-piece billiard cue display rack. Upper clip bar with eight spring-loaded brass cue clips, lower shelf unit with contoured ball cup recesses for a full 16-ball set and chalk storage ledge, rich mahogany stain finish with brass mounting hardware. Centered subject, frontal perspective, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood and brass materials.",
    "promptCinematic": "Atmospheric photograph of a mahogany wall-mounted cue rack hanging on an exposed brick wall inside a dimly lit pool hall. Eight polished maple cues standing in rank, their brass collars glinting under a nearby vintage sconce light, 35mm film grain, moody lounge ambiance.",
    "promptVideo": "Slow horizontal camera tracking shot past the row of pool cues seated in the wall rack, moving across the polished shafts and brass clips to reveal the full set of billiard balls resting in the lower shelf. 24fps cinema movement."
  },
  {
    "id": "ls-arcade-retro",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Arcade Zone",
    "name": "Retro 80s/90s Arcade Cabinet",
    "tagline": "Upright cabinet with 25-inch curved CRT, dual 8-way joysticks & coin doors",
    "tags": [
      "arcade",
      "cabinet",
      "crt",
      "retro",
      "joystick",
      "laneshark",
      "gaming"
    ],
    "prompt3D": "Upright vintage commercial arcade cabinet (late 80s/early 90s JAMMA style). Laminated black vinyl side panels with vibrant retro side-art decals, backlit acrylic marquee sign, curved 25-inch cathode ray tube (CRT) monitor with authentic scanlines, tilted steel control panel with dual 8-way red ball-top joysticks and twelve concave push buttons, dual cast-iron coin reject doors with illuminated 25¢ inserts. Centered subject, three-quarter view, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), PBR textures.",
    "promptCinematic": "Vibrant cinematic hero photo of a retro arcade cabinet operating in a dark, atmospheric arcade hall. The CRT screen casts an electric magenta and cyan glow onto the metal control panel and joystick ball tops, the backlit marquee beams brightly, colorful carpet reflections, 35mm film grain, 1980s nostalgia aesthetic.",
    "promptVideo": "Slow creeping low-angle push-in toward the glowing CRT screen of the arcade cabinet. The pixelated demo reel loops with dynamic color shifts that illuminate the dual joysticks while ambient arcade synth chimes echo in the atmospheric haze. 24fps cinema capture."
  },
  {
    "id": "ls-claw-machine",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Arcade Zone",
    "name": "Claw Prize Crane Machine",
    "tagline": "Motorized X-Y gantry, 3-prong stainless claw & illuminated prize chamber",
    "tags": [
      "claw-machine",
      "crane",
      "arcade",
      "plush",
      "prizes",
      "laneshark"
    ],
    "prompt3D": "Commercial glass arcade claw crane prize machine. Powder-coated steel framework in bright electric yellow, four tempered glass viewing panels, motorized overhead X-Y gantry rail, suspended stainless steel 3-prong mechanical claw with braided drop cord, front control console with analog joystick and oversized illuminated 'DROP' button, plush prize pit inside. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR glass, metal, and plastic textures.",
    "promptCinematic": "Colorful cinematic shot of an arcade claw machine bursting with vibrant plush toys inside the illuminated glass chamber. Interior chasing LED light strips cast dazzling reflections off the polished glass panels, the shiny chrome 3-prong claw hovers menacingly above the toys, 35mm film look, cheerful carnival atmosphere.",
    "promptVideo": "Eye-level tracking shot as the motorized overhead crane gantry whirs smoothly along the ceiling rails, stopping abruptly over a plush prize before the stainless 3-prong claw drops downward in slow motion. 24fps cinematic footage with LED chase lights pulsing."
  },
  {
    "id": "ls-air-hockey",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Arcade Zone",
    "name": "Air Hockey Table with Pucks & Mallets",
    "tagline": "Perforated 8ft playfield, overhead digital score bridge, mallets & pucks",
    "tags": [
      "air-hockey",
      "table",
      "mallets",
      "pucks",
      "arcade",
      "laneshark"
    ],
    "prompt3D": "Commercial tournament air hockey table. 8-foot perforated white laminate playfield with microscopic air holes, high-output centrifugal blower plenum beneath, extruded aluminum rebound side rails, electronic overhead score arch bridge with digital LED digits, two red ergonomic high-impact polycarbonate strikers/mallets with felt bases, two fluorescent red air hockey pucks. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Dynamic hero photograph of an air hockey table in tournament trim. The overhead LED scoreboard casts a red glow across the glossy white playfield, dual mallets placed ready at opposite ends, dramatic motion blur on a hovering red puck drifting on a cushion of air, 35mm film grain, sports arcade energy.",
    "promptVideo": "Fast-paced low-angle tracking shot along the playfield surface as a red polycarbonate puck glides effortlessly on the invisible air cushion, bouncing sharply off the aluminum bank rail with an energetic clatter. 24fps cinematic sports motion."
  },
  {
    "id": "ls-bar-counter",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Sports Bar",
    "name": "Polished Mahogany Bar with Draft Taps",
    "tagline": "Deep-varnished mahogany counter with brass rail & 12-tap draft beer tower",
    "tags": [
      "bar",
      "mahogany",
      "beer-taps",
      "counter",
      "draft-system",
      "laneshark"
    ],
    "prompt3D": "High-end sports bar counter section. Deep-varnished solid mahogany bartop with bullnose armrest edge, recessed stainless steel drain drip trays, brass footrail along base, integrated 12-tap glycol-chilled stainless draft beer dispensing tower with custom ceramic tap handles, dark wainscot front paneling. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood, brass, and stainless steel textures.",
    "promptCinematic": "Atmospheric hero photo of a polished mahogany bar counter in a luxury bowling lounge. Amber pendant lamps reflecting warmly in the mirror-finish wood surface, frosty condensation beading on the stainless draft beer taps, soft ambient lounge glow, 35mm film photography, rich warm shadows.",
    "promptVideo": "Slow dolly tracking shot gliding along the polished mahogany bartop past condensation-covered draft beer taps, gleaming glassware, and brass fixtures, moving into the warm ambiance of the sports lounge. 24fps cinema capture, rich depth of field."
  },
  {
    "id": "ls-bar-stool",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Sports Bar",
    "name": "Cushioned Swivel Bar Stools",
    "tagline": "Tufted black leatherette seat with chrome pedestal base & 360-degree footrest",
    "tags": [
      "bar-stool",
      "swivel",
      "chrome",
      "leatherette",
      "furniture",
      "laneshark"
    ],
    "prompt3D": "Pair of upscale sports lounge swivel bar stools. 30-inch seat height, deep button-tufted black faux leather cushioned seat with 360-degree ball-bearing swivel mechanism, heavy polished chrome tubular pedestal base with circular weighted floor flange and welded chrome footrest ring. Centered subject, three-quarter perspective, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), PBR chrome and leatherette materials.",
    "promptCinematic": "Moody cinematic shot of two empty swivel bar stools bathed in the warm neon glow of a sports bar lounge. Crisp specular highlights on the chrome pedestal and footrest rings, supple texture on the tufted leatherette upholstery, 35mm film grain, atmospheric nightlife mood.",
    "promptVideo": "Gentle orbiting arc camera move circling a sleek leatherette bar stool, catching gleaming light reflections along the curved chrome base and footring while background bar lights blur into soft circular bokeh. 24fps cinema shot."
  },
  {
    "id": "ls-high-top",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Sports Bar",
    "name": "High-Top Lounge Tables and Chairs",
    "tagline": "36-inch dark walnut cocktail table with cast-iron pedestal & matching chairs",
    "tags": [
      "high-top",
      "table",
      "cocktail-table",
      "walnut",
      "cast-iron",
      "laneshark"
    ],
    "prompt3D": "Set of high-top sports bar cocktail table with two matching industrial bar chairs. Round 36-inch solid dark walnut tabletop with distressed bevel edge, cast-iron X-frame pedestal base in matte black powder-coat, matching walnut and curved black steel high-back chairs. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood and cast-iron textures, clean silhouette.",
    "promptCinematic": "Intimate cinematic still of a high-top walnut table set beside a sports bar window. A pint of dark ale and a basket of bar snacks resting on the table, warm sunlight cutting across the rich walnut wood grain, 35mm film aesthetic, cozy hospitality composition.",
    "promptVideo": "Slow pedestal crane move rising smoothly from the cast-iron table base up to the dark walnut tabletop where soft candle flicker illuminates a frosty beverage glass. 24fps cinema capture, smooth vertical movement."
  },
  {
    "id": "ls-glassware-bar",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Sports Bar",
    "name": "Beer Bottles, Cocktail & Pint Glasses",
    "tagline": "Chilled amber longnecks, 16oz shaker pints with foam & coupe cocktail glass",
    "tags": [
      "glassware",
      "beer-bottles",
      "pint-glass",
      "cocktails",
      "bar-props",
      "laneshark"
    ],
    "prompt3D": "Commercial sports bar beverage glassware collection. Two 12oz amber longneck beer bottles with condensation droplets, two 16oz conical shaker pint glasses filled with amber beer and thick foam head, a classic coupe cocktail glass with lemon twist garnish, and a heavy cut-crystal old fashioned rocks glass with large ice cube. Centered subject, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), PBR glass transmission, liquid IOR, realistic refraction.",
    "promptCinematic": "Seductive macro hero photograph of a frosty pint glass filled with golden craft beer topped with a creamy head of white foam, accompanied by amber bottles on a dark bar surface. Amber backlighting shines through the effervescent carbonation bubbles, 35mm film grain, commercial beverage photography quality.",
    "promptVideo": "Extreme macro slow-motion 60fps slowed to 24fps shot focusing on rising carbonation bubbles inside a chilled pint of beer as droplets of condensation slide down the exterior glass wall onto the mahogany counter. Anamorphic lens, golden light spill."
  },
  {
    "id": "ls-sports-tvs",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Sports Bar",
    "name": "Overhead Flat-Screen Sports TVs",
    "tagline": "Articulated dual 75-inch commercial display TVs with live sports broadcast",
    "tags": [
      "sports-tvs",
      "flat-screen",
      "displays",
      "broadcast",
      "ceiling-mount",
      "laneshark"
    ],
    "prompt3D": "Dual ceiling-mounted 75-inch ultra-narrow-bezel commercial sports display TVs. Heavy-duty black steel articulated dual-tilt ceiling mount, vivid emissive 4K displays showing a football field broadcast with on-screen scoreboard overlays and stats ticker, realistic power and HDMI cable bundles running into ceiling conduit. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR plastics, metals, and emissive screen panels.",
    "promptCinematic": "Low-angle hero photo looking up at massive flat-screen sports TVs suspended from the timber rafters of a bustling sports lounge. Bright green stadium turf and colorful broadcast graphics illuminating the faces of patrons below, subtle screen bloom, 35mm film aesthetic.",
    "promptVideo": "Slow upward tilt from the bar counter up to the glowing overhead commercial display panels as live game action plays with smooth motion, screen reflections glinting off ceiling fixtures. 24fps cinema camera tilt."
  },
  {
    "id": "ls-ball-shelves",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Pro Shop",
    "name": "Custom Bowling Ball Display Shelves",
    "tagline": "5-tier birch plywood & black steel display rack holding 32 marbled balls",
    "tags": [
      "display-shelves",
      "pro-shop",
      "bowling-balls",
      "retail",
      "laneshark"
    ],
    "prompt3D": "Commercial pro shop multi-tier bowling ball display fixture. Welded black powder-coated steel frame with five stepped natural birch plywood shelves, thirty-two contoured circular ball cradle cutouts displaying an assortment of colorful marbled reactive resin bowling balls, lower storage bin for ball boxes. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR retail display asset.",
    "promptCinematic": "Vibrant retail hero shot of stepped pro shop display shelves packed with rows of swirling marbled bowling balls under clean halogen track lighting. Each ball displays a unique pearlescent sheen, pristine wood shelves, 35mm film photography, crisp retail catalog quality.",
    "promptVideo": "Smooth lateral dolly tracking shot across the tiered pro shop shelving, admiring the colorful lineup of marbled reactive resin bowling balls resting in their individual cradles under crisp spotlighting. 24fps cinema capture."
  },
  {
    "id": "ls-wrist-support",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Pro Shop",
    "name": "Bowling Wrist Support & Grip Glove",
    "tagline": "Aircraft aluminum ratchet-dial wrist brace with goatskin leather grip glove",
    "tags": [
      "wrist-support",
      "grip-glove",
      "gear",
      "pro-shop",
      "laneshark"
    ],
    "prompt3D": "Professional bowling wrist support brace and leather grip glove set. Anodized red aircraft aluminum contoured backplate with micro-adjustable ratchet dial, padded breathable neoprene forearm cuff with dual velcro straps, accompanied by a premium goatskin leather bowling grip glove with textured rubber finger grips. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), PBR metal, leather, and fabric textures.",
    "promptCinematic": "Technical macro hero photo of a precision bowling wrist support brace resting on a pro shop workbench. Brushed aluminum adjustment dials and heavy-duty nylon stitching highlighted by cool side lighting, subtle reflections on the metallic frame, 35mm film grain, athletic equipment aesthetic.",
    "promptVideo": "Slow orbiting camera movement around the technical wrist brace assembly, highlighting the micro-ratchet dials and supple leather glove details under precision workbench spotlights. 24fps macro footage."
  },
  {
    "id": "ls-bowling-shoes",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Pro Shop",
    "name": "Rental & Performance Bowling Shoes",
    "tagline": "Athletic shoes with interchangeable microfiber slide soles alongside vintage rental pairs",
    "tags": [
      "bowling-shoes",
      "slide-sole",
      "rentals",
      "footwear",
      "pro-shop",
      "laneshark"
    ],
    "prompt3D": "Pair of modern performance bowling shoes alongside a pair of classic retro rental shoes. Performance pair: athletic synthetic leather with interchangeable white microfiber slide sole on left foot and grooved rubber traction brake sole on right foot. Rental pair: retro split leather two-tone red and blue with stamped heel size numbering. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR leather and rubber maps.",
    "promptCinematic": "Hero still of high-performance bowling shoes placed neatly beside a classic pair of numbered rental shoes on a polished bench. Sharp contrast between the worn vintage rental leather and the high-tech microfiber sliding sole, 35mm film photography, rich nostalgic color grade.",
    "promptVideo": "Gentle slow-motion pan across the contrasting footwear, showcasing the specialized slide sole technology and vintage rental stamps in rich cinematic focus. 24fps cinema movement."
  },
  {
    "id": "ls-drill-machine",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Pro Shop",
    "name": "Dual-Spindle Ball Drilling Machine",
    "tagline": "Precision cast-iron milling press with pitch angle dials & circular clamping jig",
    "tags": [
      "drill-machine",
      "ball-drilling",
      "pitch-gauges",
      "pro-shop",
      "laneshark",
      "tools"
    ],
    "prompt3D": "Heavy cast-iron professional bowling ball drilling press machine. Massive cast-iron base, precision circular ball clamping jig with mechanical pitch angle dials (lateral and forward/reverse pitches), dual belt-driven drill spindle head with carbide drilling bits, calibrated depth stop scale, vacuum dust collection shroud. Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR industrial cast-iron, grease, and brass gauges.",
    "promptCinematic": "Dramatic industrial photo of a pro shop ball drilling press clamped onto a marbled bowling ball. Fine spirals of resin swarf shavings resting on the pitch gauge dials, intense task lamp illuminating the carbide drill bit positioned millimeter-precise over the ball surface, 35mm film grain, artisan craft aesthetic.",
    "promptVideo": "Slow macro push-in focusing on the carbide drill bit as it spins at high RPM, descending smoothly into the surface of a clamped bowling ball, sending colorful resin shavings curling outward into the vacuum shroud. 24fps cinema capture, shallow depth of field."
  },
  {
    "id": "ls-trophy-case",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Pro Shop",
    "name": "Tournament Trophy Showcase & Trophies",
    "tagline": "Illuminated glass case housing gold bowler figurines, silver cups & marble bases",
    "tags": [
      "trophy-case",
      "trophies",
      "awards",
      "championship",
      "pro-shop",
      "laneshark"
    ],
    "prompt3D": "Glass pro shop tournament trophy showcase cabinet. Extruded aluminum satin black frame, tempered glass shelves, mirrored rear backing, illuminated by recessed top LED spotlights. Housing an array of tiered bowling trophies with gold-plated bowler figurines, polished silver champion loving cups, and engraved genuine walnut and Italian marble plinths. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), PBR reflective glass, gold, silver, and marble materials.",
    "promptCinematic": "Prestigious hero photograph of an illuminated trophy showcase filled with gleaming gold and silver bowling tournament trophies. Specular starburst reflections off polished brass figurines, engraved commemorative plaques honoring historic 300 perfect games, 35mm film photography, victorious ambiance.",
    "promptVideo": "Slow vertical pedestal crane shot ascending smoothly past the tiered shelves of gleaming trophies, capturing the dazzling light refractions off polished gold cups and etched crystal bowling pins. 24fps cinematic footage."
  },
  {
    "id": "ls-lockers",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Facility Props",
    "name": "Metal Locker Bank with Wooden Benches",
    "tagline": "2-tier sage green louvered steel lockers with solid oak butcher-block bench",
    "tags": [
      "lockers",
      "locker-room",
      "metal-lockers",
      "bench",
      "facility",
      "laneshark"
    ],
    "prompt3D": "Bank of commercial bowling center metal lockers with freestanding locker room bench. Row of three two-tier ventilated sheet steel lockers in industrial sage green powder-coat, louvered ventilation slots, recessed chrome padlock hasps, number plate inserts. Accompanied by a 6-foot butcher-block solid maple locker bench supported on cast-iron pedestal legs. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures.",
    "promptCinematic": "Atmospheric hero photo of vintage green metal lockers in a bowling alley locker alcove. Warm shafts of afternoon light slicing through the louvered doors, a gym duffel bag resting on the thick maple wood bench, 35mm film grain, moody retro locker room tone.",
    "promptVideo": "Slow tracking shot gliding along the row of green louvered metal lockers, passing over a bowling bag on the wooden bench to reveal the worn padlocks and painted locker numbers. 24fps cinema footage."
  },
  {
    "id": "ls-restrooms",
    "domain": "laneshark",
    "category": "prop",
    "subCategory": "Facility Props",
    "name": "Commercial Restroom Sanitary Fixtures",
    "tagline": "Vitreous china sinks, touchless sensor faucets & stainless steel partition stalls",
    "tags": [
      "restroom",
      "fixtures",
      "sanitary",
      "stainless-steel",
      "facility",
      "laneshark"
    ],
    "prompt3D": "Commercial bowling facility restroom sanitary unit. Pair of wall-hung vitreous china lavatory washbasins with touchless chrome sensor faucets, commercial stainless steel restroom stall partition doors with gravity-close hinges and occupancy indicators, wall-mounted brushed stainless steel high-speed hand dryer. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR ceramic, chrome, and stainless steel textures.",
    "promptCinematic": "Pristine architectural photograph of a modern commercial restroom suite. Mirror reflections stretching across polished white subway tile walls, gleaming chrome sensor faucets casting clean highlights, cool commercial lighting, 35mm film aesthetic.",
    "promptVideo": "Smooth forward dolly push through the commercial restroom space, showcasing the clean lines of stainless partitions and sanitary ceramic fixtures in crisp architectural focus. 24fps cinema capture."
  },
      {
    "id": "f1-drv-norris",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Lando Norris (#1) - McLaren F1 Team",
    "tagline": "2025 World Champion in McLaren papaya and anthracite Nomex race suit with #1 livery",
    "tags": [
      "driver",
      "mclaren",
      "norris",
      "champion",
      "papaya",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Lando Norris. Athletic lean build, standing in symmetrical neutral A-pose with arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 McLaren Formula 1 multi-layer Nomex race suit in vibrant papaya orange and matte anthracite grey with gold #1 world champion accents and crisp embroidered sponsor badges. Thin-soled black suede racing boots with papaya laces, articulated stretch panels on elbows and knees, high-grip Nomex racing gloves. Wearing an FIA-homologated Bell carbon-fiber helmet with neon yellow accents and mirrored rainbow iridium visor. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR fabric and carbon textures.",
    "promptCinematic": "Moody hero portrait of Lando Norris standing in the neon-lit McLaren garage before evening qualifying. Helmet visor reflecting amber and cyan pit gantry lights in high contrast, crisp embroidered sponsor patches on papaya Nomex suit, cinematic 35mm film photography, shallow depth of field, tense motorsport atmosphere.",
    "promptVideo": "Slow cinematic orbit around Lando Norris in the McLaren pit bay as mechanics prepare his MCL40 in the background, camera tracking smoothly from his iridium helmet down across the sponsor-embroidered Nomex suit. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-piastri",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Oscar Piastri (#81) - McLaren F1 Team",
    "tagline": "McLaren race winner in papaya and anthracite race suit with Australian flag #81 accents",
    "tags": [
      "driver",
      "mclaren",
      "piastri",
      "papaya",
      "australia",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Oscar Piastri. Athletic build, symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 McLaren Nomex race suit in papaya orange and anthracite with green-and-gold #81 Australian detail trims. High-grip racing gloves, thin suede boots, Bell carbon-fiber helmet featuring Australian southern cross motif and silver reflective visor. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean silhouette for 3D character rigging, realistic PBR fabric textures.",
    "promptCinematic": "Calm, focused cinematic portrait of Oscar Piastri sitting on the McLaren pit wall holding his helmet under his arm, sunset golden hour glinting across the pit straight asphalt behind him, 35mm film photography, soft atmospheric lighting.",
    "promptVideo": "Smooth low-angle tracking shot of Oscar Piastri walking through the Monza paddock in his team race suit, team members giving high-fives as he heads toward the garage. 24fps cinema capture."
  },
  {
    "id": "f1-drv-leclerc",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Charles Leclerc (#16) - Scuderia Ferrari HP",
    "tagline": "Ferrari talisman in Rosso Corsa Nomex suit with white-and-red Mon\u00e9gasque #16 graphics",
    "tags": [
      "driver",
      "ferrari",
      "leclerc",
      "rosso-corsa",
      "monaco",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Charles Leclerc. Toned athletic physique, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Scuderia Ferrari HP fireproof Nomex race suit in deep Rosso Corsa red with white HP roundels, black side stripes, and Prancing Horse shield embroidery. Matching red suede racing boots and high-grip white Nomex gloves. Bell HP77 carbon-fiber helmet with Monaco red-and-white diagonal flag stripes and iridescent blue iridium visor. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Dramatic high-contrast portrait of Charles Leclerc in the Ferrari Monza garage, surrounded by red mechanic uniforms and warm spotlight pools, deep red reflections on his polished helmet shell, intense focused gaze, 35mm film cinematography.",
    "promptVideo": "Dynamic push-in tracking shot toward Charles Leclerc standing beside his Ferrari SF-26 on the starting grid, tifosi flags waving in the packed grandstands behind him. 24fps sports documentary style."
  },
  {
    "id": "f1-drv-hamilton",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Lewis Hamilton (#44) - Scuderia Ferrari HP",
    "tagline": "Seven-time champion in scarlet Ferrari HP suit with iconic neon yellow #44 helmet accents",
    "tags": [
      "driver",
      "ferrari",
      "hamilton",
      "legend",
      "rosso-corsa",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of seven-time World Champion Lewis Hamilton. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Scuderia Ferrari HP race suit in radiant Rosso Corsa with tailored bespoke fit, embroidered #44 insignia in fluorescent yellow, Ferrari shield crest, and sponsor badges. Bell carbon helmet in signature neon yellow and royal purple with tinted smoked visor. Suede racing boots, ergonomic gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR Nomex and carbon fiber textures.",
    "promptCinematic": "Iconic cinematic portrait of Lewis Hamilton wearing his neon-yellow Ferrari helmet with visor raised, standing under the illuminated Singapore night race floodlights, intense determination, 35mm film aesthetic, rich red and neon tones.",
    "promptVideo": "Steadicam shot leading Lewis Hamilton down the red-carpeted Ferrari motorhome corridor out into the bustling Silverstone paddock, flashbulbs popping in the background. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-verstappen",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Max Verstappen (#3) - Oracle Red Bull Racing",
    "tagline": "Red Bull champion in matte navy Nomex race suit with #3 Dutch lion helmet",
    "tags": [
      "driver",
      "red-bull",
      "verstappen",
      "champion",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Max Verstappen. Muscular athletic build, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Oracle Red Bull Racing Nomex fireproof suit in matte dark navy with red, yellow, and white Red Bull Ford Powertrains sponsor embroidery. Schuberth SF4 carbon-fiber helmet adorned with royal Dutch orange lion graphics and mirrored gold visor. Thin suede navy racing boots with red soles, high-grip gloves. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean silhouette for rigging, PBR textures.",
    "promptCinematic": "Intense cinematic photograph of Max Verstappen standing in front of the Red Bull garage telemetry bank, dark blue shadows, golden neon rim light outlining his shoulders and helmet, 35mm film photography, razor-sharp motorsport focus.",
    "promptVideo": "Slow lateral tracking shot across Max Verstappen tightening his racing glove wrist straps in the Spa-Francorchamps pit lane, pit crew wheeling pre-warmed tyres behind him. 24fps cinema capture."
  },
  {
    "id": "f1-drv-hadjar",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Isack Hadjar (#6) - Oracle Red Bull Racing",
    "tagline": "Red Bull prodigy in navy team race suit with #6 French tricolour helmet details",
    "tags": [
      "driver",
      "red-bull",
      "hadjar",
      "rookie",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Isack Hadjar. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Oracle Red Bull Racing race suit in matte navy with red charging bull crests and #6 driver designation. Arai carbon helmet featuring French tricolor and vibrant Red Bull athlete graphics with chrome visor. High-grip Nomex racing gloves and boots. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Candid cinematic paddock portrait of Isack Hadjar listening attentively to his race engineer on headphones, soft morning sunlight casting long shadows across the Austrian Red Bull Ring paddock, 35mm film grain.",
    "promptVideo": "Smooth pedestal crane move descending from the Red Bull gantry down to Isack Hadjar climbing into the RB22 cockpit, adjusting his steering wheel. 24fps cinematic sports broadcast style."
  },
  {
    "id": "f1-drv-russell",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "George Russell (#63) - Mercedes-AMG Petronas F1",
    "tagline": "Mercedes team leader in matte black and silver Nomex suit with Petronas teal #63 accents",
    "tags": [
      "driver",
      "mercedes",
      "russell",
      "petronas",
      "silver-arrows",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver George Russell. Tall athletic build, symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Mercedes-AMG Petronas fireproof suit in sleek carbon black and metallic silver with vibrant Petronas green pin-striping and embroidered sponsor patches. Bell HP77 carbon helmet in striking bright blue and red graphic wrap with chrome iridium visor. Black suede boots with silver eyelets. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR fabric and carbon textures.",
    "promptCinematic": "Sleek architectural portrait of George Russell standing in the pristine silver Mercedes pit garage, cool high-CRI overhead LED lighting casting razor-sharp highlights on his racing overalls, 35mm film photography.",
    "promptVideo": "Forward tracking shot following George Russell walking purposefully along the Silverstone pit lane, silver-arrows crew prepping the W17 car in synchronized precision behind him. 24fps cinema capture."
  },
  {
    "id": "f1-drv-antonelli",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Kimi Antonelli (#12) - Mercedes-AMG Petronas F1",
    "tagline": "Mercedes young star in black and Petronas teal suit with Italian tricolour #12 helmet",
    "tags": [
      "driver",
      "mercedes",
      "antonelli",
      "young-gun",
      "italy",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Kimi Antonelli. Youthful athletic build, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Mercedes-AMG Petronas fireproof suit in matte black with emerald Petronas teal accents and #12 numbering. Bell carbon helmet with Italian flag colors and electric blue accents, reflective silver visor. Suede boots and racing gloves. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Cinematic portrait of Kimi Antonelli sitting in the Mercedes hospitality lounge holding his race helmet, focused expression, soft natural window light contrasting with dark team jacket, 35mm film grain.",
    "promptVideo": "Slow-motion 60fps tracking shot of Kimi Antonelli putting on his balaclava and helmet before strapping into the Mercedes W17, eyes filled with concentration. 24fps cinematic playback."
  },
  {
    "id": "f1-drv-alonso",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Fernando Alonso (#14) - Aston Martin Aramco F1",
    "tagline": "Two-time champion in British Racing Green Nomex suit with Asturias blue-and-yellow #14 helmet",
    "tags": [
      "driver",
      "aston-martin",
      "alonso",
      "champion",
      "racing-green",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 veteran Fernando Alonso. Athletic seasoned build, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Aston Martin Aramco Honda race suit in British Racing Green with neon lime accents, Aramco sponsor patches, and #14 designation. Bell HP77 carbon helmet in Asturias light blue, yellow, and Spanish red with chrome mirrored visor. Dark racing boots, ergonomic gloves. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR textures.",
    "promptCinematic": "Atmospheric cinematic portrait of Fernando Alonso debriefing with Adrian Newey in the Aston Martin garage, warm halogen work lights glinting on the British Racing Green car panels, 35mm film photography.",
    "promptVideo": "Dynamic arc camera movement around Fernando Alonso inspecting the active front wing of his AMR26, gesturing with his mechanic as green LED indicators pulse. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-stroll",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Lance Stroll (#18) - Aston Martin Aramco F1",
    "tagline": "Aston Martin driver in British Racing Green race suit with Canadian maple leaf #18 helmet",
    "tags": [
      "driver",
      "aston-martin",
      "stroll",
      "canada",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Lance Stroll. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Aston Martin Aramco Nomex suit in metallic British Racing Green with lime accents and Canadian flag badge. Bell carbon helmet with gloss white and green patterns, red maple leaf motif, dark smoke visor. Racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Moody garage shot of Lance Stroll leaning against the pit wall telemetry station reviewing steering telemetry on a tablet, overcast Montreal sky overhead, 35mm film grain.",
    "promptVideo": "Smooth lateral slider shot following Lance Stroll as he steps out of the Aston Martin hospitality trailer into the paddock walkway. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-gasly",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Pierre Gasly (#10) - BWT Alpine F1 Team",
    "tagline": "Grand Prix winner in BWT Alpine vibrant pink and metallic blue race suit with #10 graphics",
    "tags": [
      "driver",
      "alpine",
      "gasly",
      "bwt",
      "france",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Pierre Gasly. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 BWT Alpine Formula 1 suit featuring iconic dual-color split: vibrant BWT hot pink and deep metallic Alpine blue with embroidered sponsor patches and #10 numbering. Bell carbon helmet featuring French tricolor and gold accents, mirrored pink iridium visor. High-grip gloves, blue racing boots. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Vibrant night-race portrait of Pierre Gasly on the Marina Bay pit straight, neon pink and cyan trackside light panels reflecting in his helmet visor, 35mm film cinematography.",
    "promptVideo": "Low-angle dolly shot tracking alongside Pierre Gasly walking across the pit lane working area toward his Alpine A526 car. 24fps cinema capture."
  },
  {
    "id": "f1-drv-colapinto",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Franco Colapinto (#43) - BWT Alpine F1 Team",
    "tagline": "Argentine sensation in pink-and-blue Alpine race suit with Albiceleste #43 helmet",
    "tags": [
      "driver",
      "alpine",
      "colapinto",
      "argentina",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Franco Colapinto. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 BWT Alpine fireproof suit in hot pink and royal blue with Argentine flag crest and #43 insignia. Bell carbon helmet in sky blue, white, and golden Sol de Mayo sun graphics with chrome visor. Racing gloves, blue Nomex boots. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Heroic sports photograph of Franco Colapinto greeting cheering fans at the paddock fence, afternoon sun flaring behind him, 35mm film grain, euphoric racing atmosphere.",
    "promptVideo": "Forward tracking shot moving with Franco Colapinto as he steps into the Alpine garage, high-fiving mechanics holding tyre blankets. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-lawson",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Liam Lawson (#30) - Visa Cash App Racing Bulls",
    "tagline": "Racing Bulls driver in white and electric blue Nomex suit with New Zealand fern #30 helmet",
    "tags": [
      "driver",
      "racing-bulls",
      "vcarb",
      "lawson",
      "new-zealand",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Liam Lawson. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Visa Cash App Racing Bulls Nomex suit in crisp matte white with electric blue side stripes, Cash App green accents, and #30 numbering. Arai carbon helmet in matte black with New Zealand silver fern and red kiwi accents, mirrored silver visor. Racing boots and gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Intense close-up portrait of Liam Lawson standing at the garage entrance in Suzuka during a rain delay, raindrops falling on his white Nomex shoulders, 35mm film aesthetic.",
    "promptVideo": "Smooth 360-degree orbital camera pan around Liam Lawson strapping his helmet chin strap tight before entering the VCARB 03. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-lindblad",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Arvid Lindblad (#41) - Visa Cash App Racing Bulls",
    "tagline": "Rising rookie talent in white and blue Racing Bulls suit with dual Swedish-British #41 helmet",
    "tags": [
      "driver",
      "racing-bulls",
      "vcarb",
      "lindblad",
      "rookie",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Arvid Lindblad. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Visa Cash App Racing Bulls race suit in white and electric blue with Red Bull athlete branding and #41 number. Bell carbon helmet with yellow, blue, and red geometric graphics, mirrored blue visor. Racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Atmospheric paddock portrait of Arvid Lindblad talking with team principal Alan Permane beside the pit wall, golden hour light filtering through the tree canopy at Imola, 35mm film photography.",
    "promptVideo": "Dolly tracking shot pushing in on Arvid Lindblad as he adjusts his radio earpiece inside the garage before the start of FP1. 24fps cinema capture."
  },
  {
    "id": "f1-drv-hulkenberg",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Nico H\u00fclkenberg (#27) - Audi F1 Team",
    "tagline": "Audi works driver in titanium silver and matte black race suit with vibrant green #27 helmet",
    "tags": [
      "driver",
      "audi",
      "hulkenberg",
      "titanium",
      "silver",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Nico H\u00fclkenberg. Tall athletic frame, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Audi F1 Team works Nomex fireproof suit in brushed titanium silver and matte black with red Audi Sport accent bands and #27 numbering. Schuberth SF4 carbon-fiber helmet in signature high-visibility fluorescent green and matte black with chrome visor. Black boots, ergonomic gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Ultra-sleek industrial portrait of Nico H\u00fclkenberg standing before the new Audi R26 chassis inside the gleaming titanium-paneled garage, dramatic monochrome tones with red accents, 35mm film photography.",
    "promptVideo": "Smooth pedestal crane shot rising from Nico H\u00fclkenberg's racing boots up to his neon-green helmet as the Audi V6 hybrid engine fires up with a throaty roar in the background. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-bortoleto",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Gabriel Bortoleto (#5) - Audi F1 Team",
    "tagline": "Brazilian prodigy in Audi titanium works suit with yellow-and-green #5 Brazilian helmet",
    "tags": [
      "driver",
      "audi",
      "bortoleto",
      "brazil",
      "rookie",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Gabriel Bortoleto. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Audi F1 Team fireproof suit in titanium silver and charcoal black with red Audi Sport geometric stripes and #5 logo. Bell carbon helmet decorated with vibrant Brazilian canary yellow, emerald green, and deep blue graphics with gold iridium visor. Racing boots and gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Dynamic hero shot of Gabriel Bortoleto holding his yellow-and-green helmet on his hip, looking out over the Interlagos starting grid under dramatic stormy skies, 35mm film grain.",
    "promptVideo": "Forward tracking gimbal shot accompanying Gabriel Bortoleto as he jogs onto the starting grid, fans waving Brazilian flags in the background. 24fps cinema capture."
  },
  {
    "id": "f1-drv-bearman",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Oliver Bearman (#87) - TGR Haas F1 Team",
    "tagline": "Haas driver in white, black and red Toyota Gazoo Racing suit with British #87 helmet",
    "tags": [
      "driver",
      "haas",
      "bearman",
      "toyota",
      "tgr",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Oliver Bearman. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 TGR Haas Formula 1 Team race suit in clean matte white with bold black and red Toyota Gazoo Racing angular color blocks and #87 embroidery. Bell HP77 carbon helmet in Union Jack navy, white, and red with chrome visor. Black racing boots and Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Focused cinematic portrait of Oliver Bearman strapped into the Haas VF-26 cockpit on the Bahrain grid, brake cooling smoke drifting past his helmet, 35mm film photography.",
    "promptVideo": "Close-up tracking shot moving along the side of the Haas VF-26 as Oliver Bearman clips his steering wheel onto the column and tests the paddle shifters. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-camara",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Rafael C\u00e2mara - TGR Haas F1 Team",
    "tagline": "Haas mid-season debutant in TGR white-black-red Nomex suit with Brazilian lion helmet",
    "tags": [
      "driver",
      "haas",
      "camara",
      "toyota",
      "brazil",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Rafael C\u00e2mara. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 TGR Haas F1 Team fireproof suit in white, black, and red Toyota Gazoo Racing livery with Brazilian flag embroidery. Bell carbon helmet in vivid yellow, dark green, and royal blue with mirrored silver visor. Racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Emotional candid portrait of Rafael C\u00e2mara standing on the S\u00e3o Paulo grid before his debut home Grand Prix, eyes shining behind his visor, 35mm film grain.",
    "promptVideo": "Tracking shot following Rafael C\u00e2mara as he emerges from the Haas garage into the roaring applause of the Brazilian grandstands. 24fps cinema capture."
  },
  {
    "id": "f1-drv-albon",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Alex Albon (#23) - Atlassian Williams F1",
    "tagline": "Williams talisman in Atlassian deep royal blue suit with vibrant red-and-blue #23 helmet",
    "tags": [
      "driver",
      "williams",
      "albon",
      "atlassian",
      "thailand",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Alex Albon. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Atlassian Williams Racing suit in deep royal blue and navy with crisp white and cyan Atlassian sponsor graphics and #23 numbering. Bell carbon helmet with Thai flag motifs, bright red and blue geometric shapes, and chrome iridium visor. Dark blue racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Candid warm portrait of Alex Albon laughing with his engineering team inside the Williams hospitality suite, late afternoon sunshine streaming through glass windows, 35mm film photography.",
    "promptVideo": "Smooth Steadicam shot tracking alongside Alex Albon as he walks down the pit wall to inspect track surface conditions before qualifying. 24fps cinema capture."
  },
  {
    "id": "f1-drv-sainz",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Carlos Sainz (#55) - Atlassian Williams F1",
    "tagline": "Smooth operator in royal blue Williams suit with Spanish red-and-yellow chili #55 helmet",
    "tags": [
      "driver",
      "williams",
      "sainz",
      "atlassian",
      "spain",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Carlos Sainz. Athletic build, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Atlassian Williams Racing Nomex suit in royal blue and cyan with embroidered #55 insignia and Spanish flag motif on belt. Schuberth SF4 carbon helmet in deep glossy black with Spanish red and yellow stripes, red chili logo, and smoked tinted visor. Suede racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Moody, high-drama portrait of Carlos Sainz standing next to the Williams FW48 under garage spotlights, arms crossed in quiet concentration, 35mm film aesthetic.",
    "promptVideo": "Dramatic low-angle dolly push toward Carlos Sainz as he places his red chili helmet onto the cockpit halo of the Williams car. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-perez",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Sergio P\u00e9rez (#11) - Cadillac F1 Team",
    "tagline": "Cadillac veteran in monochrome black-and-white split suit with Mexican tricolour #11 helmet",
    "tags": [
      "driver",
      "cadillac",
      "perez",
      "mexico",
      "checo",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Sergio 'Checo' P\u00e9rez. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Cadillac F1 Team fireproof Nomex suit in bold asymmetrical monochrome black and crisp white split with Cadillac crest embroidery and #11 designation. Bell HP77 carbon helmet with Aztec geometric motifs, Mexican green-white-red tricolor, and gold iridium visor. Black and white leather racing boots, gloves. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Heroic motorsport portrait of Sergio P\u00e9rez bathed in stadium floodlights at the Mexico City GP, towering Foro Sol grandstand packed with fans in the background, 35mm film photography.",
    "promptVideo": "Dynamic crane shot descending from the Cadillac garage gantry down to Sergio P\u00e9rez stepping onto the pit lane for the pre-race national anthem. 24fps cinema capture."
  },
  {
    "id": "f1-drv-bottas",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Valtteri Bottas (#77) - Cadillac F1 Team",
    "tagline": "Cadillac pilot in black-and-white suit with Tiffany blue and Finnish cross #77 helmet",
    "tags": [
      "driver",
      "cadillac",
      "bottas",
      "finland",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Valtteri Bottas. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Cadillac F1 Team race suit in monochrome split black and white with silver foil piping and #77 branding. Stilo carbon helmet featuring custom Tiffany blue paint, Finnish cross graphics, and chrome visor. Black racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Relaxed yet determined portrait of Valtteri Bottas standing beside his Cadillac MAC-26, smiling as he adjusts his helmet strap in the Melbourne paddock, 35mm film grain.",
    "promptVideo": "Tracking shot following Valtteri Bottas cycling an electric paddock bike through the team motorhome village before turning into the Cadillac hospitality entrance. 24fps cinematic footage."
  },
  {
    "id": "f1-drv-ocon",
    "domain": "f1",
    "category": "character",
    "subCategory": "Drivers & Teams",
    "name": "Esteban Ocon (#31) - Grand Prix Driver & Reserve",
    "tagline": "Grand Prix winner in white-and-red Nomex suit with signature French Eiffel #31 helmet",
    "tags": [
      "driver",
      "haas",
      "ocon",
      "reserve",
      "france",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D game character model of Formula 1 driver Esteban Ocon. Tall lean build, symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing 2026 specification Nomex race suit with #31 driver insignia and sponsor patches. Bell carbon helmet decorated with vibrant red, blue tricolor, and Eiffel Tower graphic wrap with mirrored red visor. Thin racing boots and gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Moody black-and-white portrait of Esteban Ocon standing in the pit lane shadow during sunset, sharp light cutting across his visor and racing suit, 35mm film photography.",
    "promptVideo": "Smooth tracking shot following Esteban Ocon through the garage doors as mechanics wheel a set of blanketed tyres past the lens. 24fps cinema capture."
  },
  {
    "id": "f1-tp-stella",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Andrea Stella - McLaren Team Principal",
    "tagline": "McLaren team principal in black team softshell jacket with dual-ear comms headset",
    "tags": [
      "team-principal",
      "mclaren",
      "stella",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of McLaren Team Principal Andrea Stella. Standing in calm professional pose, arms relaxed at sides. Wearing official McLaren team black technical softshell jacket with subtle papaya orange zipper pulls and sponsor logos, dark technical trousers, team trainers. Wearing a professional carbon-fiber dual-ear pit wall headset with flexible boom microphone around neck, paddock VIP security pass on McLaren lanyard. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR fabric textures.",
    "promptCinematic": "Intense portrait of Andrea Stella seated at the McLaren pit wall telemetry console under canopy shadow, analytical eyes reviewing digital lap delta graphs, 35mm film grain.",
    "promptVideo": "Slow tracking shot along the pit wall passing behind team engineers to frame Andrea Stella watching the pit stop countdown timer with focused composure. 24fps cinematic footage."
  },
  {
    "id": "f1-tp-vasseur",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Fr\u00e9d\u00e9ric Vasseur - Ferrari Team Principal",
    "tagline": "Scuderia Ferrari team principal in iconic Rosso Corsa team polo and radio headset",
    "tags": [
      "team-principal",
      "ferrari",
      "vasseur",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Scuderia Ferrari Team Principal Fr\u00e9d\u00e9ric Vasseur. Symmetrical standing pose, approachable expression. Wearing official Ferrari red technical polo shirt with white HP badge and Prancing Horse embroidery, black trousers, Puma motorsport shoes. Fitted with carbon noise-canceling pit radio headset with red band and boom mic. VIP paddock lanyard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Candid cinematic photograph of Fr\u00e9d\u00e9ric Vasseur smiling as he debriefs with Charles Leclerc on the Monza pit wall, sea of red tifosi flags behind him, 35mm film aesthetic.",
    "promptVideo": "Steadicam shot tracking Fr\u00e9d\u00e9ric Vasseur walking through the Ferrari garage greeting mechanics on his way to the pit wall. 24fps cinematic footage."
  },
  {
    "id": "f1-tp-wolff",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Toto Wolff - Mercedes Team Principal",
    "tagline": "Mercedes-AMG team principal in crisp white team shirt and Bose carbon headset",
    "tags": [
      "team-principal",
      "mercedes",
      "wolff",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Mercedes Team Principal Toto Wolff. Tall commanding posture, standing in neutral pose. Wearing official Mercedes-AMG Petronas white technical button-down team shirt with rolled cuffs, black tailored trousers, black leather trainers. Heavy-duty carbon-fiber pit intercom headset with boom mic around his neck, paddock accreditation badge. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Dramatic high-contrast photograph of Toto Wolff slamming his fist on the pit wall desk in passionate reaction to a race incident, overhead floodlights gleaming on monitors, 35mm film photography.",
    "promptVideo": "Smooth slider shot framing Toto Wolff intently studying timing monitor telemetry on the Mercedes pit perch as rain drops begin striking the canopy. 24fps cinema capture."
  },
  {
    "id": "f1-tp-newey",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Adrian Newey - Aston Martin Managing Technical Partner",
    "tagline": "Legendary aerodynamicist in Aston Martin racing green kit with iconic red A4 sketchpad",
    "tags": [
      "team-principal",
      "aston-martin",
      "newey",
      "legend",
      "aero",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of legendary technical mastermind Adrian Newey. Standing in thoughtful observational pose, holding a classic red hardbound A4 sketchpad and drafting pen in hands. Wearing official Aston Martin Aramco technical polo in British Racing Green with lime accents, khaki team trousers, lightweight trainers. Team radio headset resting on one ear. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Intimate cinematic portrait of Adrian Newey sketching complex aerodynamic flow vortex lines in his notebook beside the AMR26 rear diffuser, warm garage lighting, 35mm film grain.",
    "promptVideo": "Low-angle tracking shot as Adrian Newey walks slowly around the front wing of the Aston Martin, crouching down to inspect the ground-effect tunnel inlet. 24fps cinematic footage."
  },
  {
    "id": "f1-tp-mekies",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Laurent Mekies - Oracle Red Bull Racing Team Principal",
    "tagline": "Red Bull team principal in dark navy team polo with headset and telemetry tablet",
    "tags": [
      "team-principal",
      "red-bull",
      "mekies",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Red Bull Team Principal Laurent Mekies. Symmetrical standing pose holding a ruggedized telemetry tablet. Wearing official Oracle Red Bull Racing dark navy polo with red charging bull crest and sponsor embroidery, dark trousers, team running shoes. Riedel dual-ear intercom headset. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Cinematic portrait of Laurent Mekies discussing pit stop strategy with Gianpiero Lambiase on the Red Bull pit gantry, 35mm film photography.",
    "promptVideo": "Push-in camera move on Laurent Mekies as he gives the green light gesture to the race engineer on the pit wall. 24fps cinema capture."
  },
  {
    "id": "f1-tp-binotto",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Mattia Binotto - Audi F1 Team Principal & COO",
    "tagline": "Audi works leader in black-and-silver technical softshell with signature round eyeglasses",
    "tags": [
      "team-principal",
      "audi",
      "binotto",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Audi F1 Team Principal Mattia Binotto. Standing with calm composure, wearing signature round tortoiseshell spectacles. Dressed in official Audi F1 Team black and titanium silver technical jacket with red Audi Sport accent band, black trousers, team shoes. Intercom headset resting on shoulders, official VIP paddock pass. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Architectural portrait of Mattia Binotto standing beside the new Audi R26 engine bench inside the pristine Hinwil factory, high-contrast cool LED illumination, 35mm film aesthetic.",
    "promptVideo": "Dolly move past carbon-fiber component racks to reveal Mattia Binotto examining telemetry graphs with his chief engineer. 24fps cinematic footage."
  },
  {
    "id": "f1-tp-komatsu",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Ayao Komatsu - TGR Haas F1 Team Principal",
    "tagline": "Haas team boss in white-and-red Toyota Gazoo Racing team jacket with radio headset",
    "tags": [
      "team-principal",
      "haas",
      "komatsu",
      "toyota",
      "tgr",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of TGR Haas Team Principal Ayao Komatsu. Symmetrical standing pose, focused analytical expression. Wearing official TGR Haas Team white, black, and red softshell jacket with Toyota Gazoo Racing logos, dark trousers, athletic sneakers. High-grade noise-canceling radio headset with boom microphone. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Candid garage shot of Ayao Komatsu gesturing enthusiastically with his race engineering crew over tire degradation charts, warm ambient lighting, 35mm film grain.",
    "promptVideo": "Tracking shot following Ayao Komatsu as he steps from the Haas engineering office out to the pit wall during a crucial safety car window. 24fps cinema capture."
  },
  {
    "id": "f1-tp-vowles",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "James Vowles - Atlassian Williams Team Principal",
    "tagline": "Williams strategist and leader in Atlassian royal blue polo with pit headset",
    "tags": [
      "team-principal",
      "williams",
      "vowles",
      "leadership",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Williams Team Principal James Vowles. Standing in authoritative communicative pose. Wearing official Atlassian Williams Racing royal blue polo with cyan accents, navy trousers, team running shoes. Fitted with carbon-fiber pit wall intercom headset with boom mic, VIP paddock security pass on blue lanyard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Crisp portrait of James Vowles on the pit wall speaking calmly into his radio headset as cars roar past the start-finish straight, 35mm film photography.",
    "promptVideo": "Smooth pedestal crane move descending to James Vowles applauding his mechanics after a successful double-points finish. 24fps cinematic footage."
  },
  {
    "id": "f1-fia-maylander",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "Bernd Mayl\u00e4nder - Official FIA Safety Car Driver",
    "tagline": "Legendary safety car driver in FIA black Nomex race suit with official badge",
    "tags": [
      "official",
      "safety-car",
      "maylander",
      "fia",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of Bernd Mayl\u00e4nder, the official FIA Safety Car driver since 2000. Standing in confident neutral A-pose. Wearing official FIA black Nomex fireproof race suit with white FIA crest, Safety Car driver emblem, and silver trim. Black racing boots, ergonomic driving gloves. Stilo carbon helmet with German flag accents and clear visor resting under his arm. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Heroic portrait of Bernd Mayl\u00e4nder leaning against the door of his silver Mercedes-AMG GT 63 PRO Safety Car on the pit lane, roof light bar pulsing amber in the evening drizzle, 35mm film aesthetic.",
    "promptVideo": "Tracking shot moving with Bernd Mayl\u00e4nder as he fastens his helmet strap and slides into the driver bucket seat of the Safety Car before deployment. 24fps cinema capture."
  },
  {
    "id": "f1-fia-medical",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "FIA Medical Rescue Team (Doctor & Driver)",
    "tagline": "FIA track doctor and medical car driver in fireproof medical suits with trauma backpack",
    "tags": [
      "official",
      "medical-car",
      "doctor",
      "fia",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of an official FIA Medical Car Rescue Doctor. Standing in symmetrical pose holding a heavy-duty neon-yellow emergency trauma medical backpack. Wearing official FIA fireproof Nomex suit in high-visibility fluorescent orange and black with reflective medical cross emblems and 'FIA MEDICAL' lettering across back. Suede safety boots, Nomex gloves, open-face carbon helmet with comms mic. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Dramatic high-urgency shot of the FIA medical doctor and driver standing by the Mercedes-AMG GT 63 S Medical Car on the pit exit, red emergency beacons flashing, 35mm film grain.",
    "promptVideo": "Rapid handheld tracking shot rushing alongside the medical crew sprinting to the medical car as a red flag is declared. 24fps sports documentary style."
  },
  {
    "id": "f1-fia-scrutineer",
    "domain": "f1",
    "category": "character",
    "subCategory": "Team Leadership & FIA",
    "name": "FIA Technical Scrutineer & Steward",
    "tagline": "Official FIA technical delegate in royal blue uniform holding digital plank deflection gauge",
    "tags": [
      "official",
      "scrutineer",
      "fia",
      "steward",
      "inspection",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of an FIA Technical Scrutineer. Standing in neutral inspecting pose holding an official digital precision skid-block deflection gauge and aluminum clipboard. Wearing official FIA technical delegate uniform: royal blue polo shirt with embroidered FIA crest, durable navy cargo trousers with tool loops, steel-toe workshop shoes, official FIA lanyard pass. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR fabric textures.",
    "promptCinematic": "Serious documentary photograph of an FIA technical scrutineer kneeling beside a car floor on the pit lane weighbridge, measuring ground clearance with optical lasers, 35mm film photography.",
    "promptVideo": "Slow tracking camera moving around the scrutineer as he applies tamper-evident FIA barcode security seals to an inspected gearbox. 24fps cinema capture."
  },
  {
    "id": "f1-crew-marshal",
    "domain": "f1",
    "category": "character",
    "subCategory": "Officials & Track Crew",
    "name": "Track Safety Marshal with Warning Flag",
    "tagline": "Trackside safety volunteer in high-vis safety orange coveralls holding official marshal flag",
    "tags": [
      "marshal",
      "safety",
      "trackside",
      "flag",
      "orange",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of a Formula 1 Track Safety Marshal. Standing in active ready stance, gripping an official wooden flag pole with rolled yellow nylon flag in hand. Wearing heavy-duty high-visibility safety orange fire-retardant overalls with dual reflective silver bands across chest and legs, black steel-toe work boots, heavy-duty leather safety work gloves, white hard hat with hearing protection ear muffs, track marshal accreditation tabard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR fabric textures.",
    "promptCinematic": "Dynamic low-angle portrait of an orange-clad track marshal waving a yellow flag vigorously from an elevated marshal post as rain slicked cars blast past in spray, 35mm film grain.",
    "promptVideo": "Pan shot across the Armco barrier following a track safety marshal running to clear carbon-fiber debris from the racing line between car passes. 24fps cinematic footage."
  },
  {
    "id": "f1-crew-fire",
    "domain": "f1",
    "category": "character",
    "subCategory": "Officials & Track Crew",
    "name": "Trackside Fire Marshal with Extinguisher",
    "tagline": "Emergency fire intervention marshal in aluminized safety suit holding AFFF foam nozzle",
    "tags": [
      "fire-marshal",
      "extinguisher",
      "safety",
      "fire",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of a specialized Formula 1 Fire Intervention Marshal. Standing in braced stance holding the heavy discharge horn of a 50kg AFFF foam fire extinguisher. Wearing full aluminized fire-proximity safety coveralls with gold-coated reflective face shield, heat-resistant Kevlar boots, heavy aluminized gauntlets, and high-pressure hose strapped to waist. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Dramatic high-tension photograph of a fire marshal advancing through smoke toward a glowing red brake rotor fire with extinguisher horn raised, 35mm film photography.",
    "promptVideo": "Fast-paced handheld tracking shot running behind fire marshals deploying high-pressure foam around a smoldering engine bay. 24fps cinematic sports footage."
  },
  {
    "id": "f1-crew-media",
    "domain": "f1",
    "category": "character",
    "subCategory": "Officials & Track Crew",
    "name": "Broadcast Cameraman & Paddock Photographer",
    "tagline": "Accredited trackside photographer with telephoto lens camera and media tabard",
    "tags": [
      "media",
      "cameraman",
      "photographer",
      "broadcast",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of an accredited Formula 1 Trackside Photographer. Standing with professional DSLR camera and massive 400mm f/2.8 telephoto lens resting on a carbon monopod. Wearing official FIA neon-pink accredited media photo tabard over technical outdoor jacket, rugged cargo pants with lens pouch belts, sturdy trail shoes, hearing protection ear plugs, baseball cap turned backwards. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Atmospheric shot of a trackside photographer kneeling at the Monaco hairpin barrier opening, camera panning with a screaming F1 car inches from the lens, 35mm film grain.",
    "promptVideo": "Smooth slider shot framing a broadcast TV camera operator tracking cars from an elevated scaffold tower overlooking the Parabolica curve. 24fps cinema capture."
  },
  {
    "id": "f1-crew-pirelli",
    "domain": "f1",
    "category": "character",
    "subCategory": "Officials & Track Crew",
    "name": "Pirelli Trackside Tyre Technician",
    "tagline": "Official Pirelli motorsport technician in yellow-and-black uniform with digital tread gauge",
    "tags": [
      "pirelli",
      "tyres",
      "technician",
      "official",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of a Pirelli Motorsport Tyre Engineer. Standing in neutral pose holding a digital infrared tread depth and temperature needle probe. Wearing official Pirelli technical uniform: black and vibrant yellow polo with Pirelli red logo embroidery, dark technical trousers, safety shoes, Pirelli lanyard and data clipboard. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Documentary photograph of a Pirelli technician measuring the core temperature of a steaming, blistered slick tyre immediately after a race stint, 35mm film photography.",
    "promptVideo": "Close-up tracking camera following the Pirelli engineer as he scans barcode labels on a freshly arrived rack of pre-heated slick tyres. 24fps cinematic footage."
  },
  {
    "id": "f1-pit-gunner",
    "domain": "f1",
    "category": "character",
    "subCategory": "Pit Stop Roles & Crew",
    "name": "Pit Stop Wheel Gunner Specialist",
    "tagline": "Pit stop mechanic in deep squat holding high-torque pneumatic Paoli wheel gun",
    "tags": [
      "pit-stop",
      "gunner",
      "paoli",
      "wheel-gun",
      "mechanic",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of an F1 Pit Stop Wheel Gunner. Locked in a low ergonomic crouching squat, firmly gripping a dual-handle high-speed pneumatic Paoli wheel nut gun with braided yellow high-pressure air hose attached. Wearing full fireproof Nomex pit suit, closed-face aerodynamic pit stop helmet with dark tinted visor, heavy-duty Kevlar palm mechanics gloves, ergonomic molded knee pads, steel-toe racing pit boots. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean dynamic rigging pose, PBR textures.",
    "promptCinematic": "High-speed 1000fps freeze-frame photograph of a wheel gunner engaging the center nut, carbon dust exploding in a ring around the wheel hub under blinding pit lights, 35mm film grain.",
    "promptVideo": "Hyper-fast dynamic zoom into the wheel gunner's hands as the Paoli gun hammers the center nut loose in 0.8 seconds, then signals release with a thumb tap. 24fps cinematic playback."
  },
  {
    "id": "f1-pit-jack-front-op",
    "domain": "f1",
    "category": "character",
    "subCategory": "Pit Stop Roles & Crew",
    "name": "Front Quick-Lift Jack Operator",
    "tagline": "Front jack operator poised at the nose with titanium cantilever quick-drop jack",
    "tags": [
      "pit-stop",
      "jack",
      "front-jack",
      "quick-lift",
      "mechanic",
      "f1",
      "personnel"
    ],
    "prompt3D": "Full body 3D character model of an F1 Front Jack Operator. Standing in poised athletic stance holding the long tubular handle of a carbon-and-titanium quick-lift front jack, nose cradle ready to slide under car nosecone. Wearing fireproof Nomex team pit suit, full-face helmet with clear visor, protective chest guard, Kevlar gloves, high-traction boots. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Tense front-on cinematic shot looking directly down the pit box as the front jack operator locks eyes with the approaching race car arriving at 80 km/h, 35mm film aesthetic.",
    "promptVideo": "Slow-motion tracking shot of the front jack levering down in one explosive movement, lifting the 768kg race car into the air as 4 tyres are swapped simultaneously. 24fps cinema capture."
  },
  {
    "id": "f1-wheel-gun",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "High-Speed Pneumatic Wheel Gun",
    "tagline": "Paoli DP 6000 1-inch drive pneumatic wheel nut gun with carbon-fiber housing",
    "tags": [
      "pit-equipment",
      "wheel-gun",
      "paoli",
      "pneumatic",
      "f1",
      "tool"
    ],
    "prompt3D": "Formula 1 Paoli high-speed pneumatic wheel gun. Ergonomic dual-handle design with lightweight carbon-composite motor housing, 1-inch spline drive anvil, integrated LED confirmation sensor light ring, and flexible high-pressure air connector. Finished in anodized team colors with laser-etched torque markings. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR mechanical textures.",
    "promptCinematic": "Dramatic close-up of a carbon Paoli wheel gun resting in a mechanic holster on the pit box floor, pneumatic hose curving into the dark background, 35mm film photography.",
    "promptVideo": "Macro camera track orbiting the anvil and trigger mechanism of the pneumatic wheel gun. 24fps cinema capture."
  },
  {
    "id": "f1-pit-jack-front",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Front Quick-Lift Pit Jack",
    "tagline": "Aircraft-grade aluminum quick-release front jack with nosecone rubber cradle and castor wheels",
    "tags": [
      "pit-equipment",
      "jack",
      "front-jack",
      "quick-release",
      "f1",
      "tool"
    ],
    "prompt3D": "Formula 1 quick-lift front pit jack. Lightweight aircraft-grade welded tubular aluminum and titanium frame with team anodized color finish, long leverage handle with ergonomic rubber grips, quick-drop release trigger lever, dual high-speed urethane castor wheels with needle bearings, contoured rubber-padded nosecone lifting cradle with self-centering guide rollers. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic and rubber textures.",
    "promptCinematic": "Hero macro photograph of a titanium front pit jack resting on stenciled pit box asphalt, pneumatic hoses and team logo decals gleaming in pit lane floodlights, 35mm film photography.",
    "promptVideo": "Smooth rotational camera arc around the front pit jack, highlighting the precision quick-release pivot mechanism and urethane roller bearings. 24fps cinematic footage."
  },
  {
    "id": "f1-pit-jack-rear",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Rear Crash-Structure Pit Jack",
    "tagline": "Rear quick-lift jack with specialized cradle fitting FIA impact crash structure",
    "tags": [
      "pit-equipment",
      "jack",
      "rear-jack",
      "crash-structure",
      "f1",
      "tool"
    ],
    "prompt3D": "Formula 1 rear quick-lift pit jack. High-tensile steel and aluminum cantilever frame, long tubular lever handle with dual grip crossbar, wide-track roller wheels, precision-machined titanium lifting cradle custom contoured to engage securely beneath the FIA rear carbon-composite impact crash structure without touching the diffuser. Team livery powder-coat finish. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR mechanical textures.",
    "promptCinematic": "Low-angle shot from the rear of the pit box as the rear jack engages the carbon crash structure, rain lights pulsing red above the jack cradle, 35mm film grain.",
    "promptVideo": "Lateral camera push-in showing the rear jack mechanism pivoting cleanly up and releasing instantly with the foot trip lever. 24fps cinematic capture."
  },
  {
    "id": "f1-pit-gantry-boom",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Overhead Pit Stop Gantry & Boom Rig",
    "tagline": "Cantilevered carbon-and-aluminum overhead truss boom carrying pneumatic air lines and LED release lights",
    "tags": [
      "pit-equipment",
      "gantry",
      "boom",
      "lights",
      "overhead",
      "f1"
    ],
    "prompt3D": "Formula 1 overhead cantilever pit stop gantry system. Modular carbon-fiber and square aluminum box truss boom extending out 6 meters from the pit building facade over the pit box. Equipped with four coiled helical pneumatic Paoli air hoses with automatic spring retractors, banks of high-intensity LED downlight fixtures illuminating the car footprint, overhead stereoscopic sensor cameras, and central dual-sided electronic red/green pit release traffic light cluster. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Looking up at the massive cantilevered pit gantry against the dark night sky of Abu Dhabi, brilliant white LED light beams cutting through tire smoke and heat haze, 35mm film photography.",
    "promptVideo": "Smooth vertical crane move descending from the pit gantry truss structure down through the hanging coiled air lines to the pit stop floor markings below. 24fps cinema capture."
  },
  {
    "id": "f1-pit-release-light",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Electronic Pit Stop Release Traffic Light",
    "tagline": "Gantry-mounted electronic release signal with automated sensor interlocks and green/red LED array",
    "tags": [
      "pit-equipment",
      "release-light",
      "traffic-light",
      "signal",
      "f1"
    ],
    "prompt3D": "Official electronic Formula 1 pit release traffic light unit. Cylindrical carbon-fiber housing designed to mount beneath the overhead gantry boom. Equipped with dual-sided ultra-high-luminance LED matrix clusters: solid red ring with center lock symbol, and bright emerald green chevron signal. Integrated telemetry antenna and optical fail-safe release lockout sensor. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon and optical LED textures.",
    "promptCinematic": "Tense extreme close-up of the pit release light switching from glowing red to sudden brilliant green, reflection flashing across the driver's helmet visor, 35mm film grain.",
    "promptVideo": "High-speed camera tracking the millisecond transition of the release light turning green as the four wheel guns confirm nut engagement. 24fps cinematic sports footage."
  },
  {
    "id": "f1-pit-blanket-station",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Digital Tyre Warming Blanket & Controller Station",
    "tagline": "Pirelli-certified multi-layer electric tire heating wraps with multi-channel digital flight case controller",
    "tags": [
      "pit-equipment",
      "tyre-blanket",
      "warming",
      "pirelli",
      "controller",
      "f1"
    ],
    "prompt3D": "Complete Formula 1 electric tyre blanket warming system. Includes four heavy-duty thermal insulation wraps fitted over 18-inch Pirelli slick wheels, featuring durable Nomex outer shell in team livery, internal carbon heating filaments, clear inspection windows, and quick-release Velcro flaps. Connected via thick insulated wiring looms to a heavy-duty aluminum touring flight case controller console with digital LED temperature readouts, rotary dials, and master circuit breakers. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR fabric, rubber, and aluminum textures.",
    "promptCinematic": "Atmospheric garage shot of tire blankets steaming in the cold morning air of Silverstone, glowing digital readouts displaying '80\u00b0C' in amber LEDs, 35mm film photography.",
    "promptVideo": "Dolly move past rows of blanketed tires connected to humming power distribution consoles as technicians check heat distribution with infrared laser guns. 24fps cinematic footage."
  },
  {
    "id": "f1-pit-spare-nose",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Spare Front Wing & Nosecone on Stand",
    "tagline": "Fully assembled 2026 carbon-fiber front wing assembly mounted on quick-deploy garage stand",
    "tags": [
      "pit-equipment",
      "front-wing",
      "nosecone",
      "aerodynamics",
      "spare",
      "f1"
    ],
    "prompt3D": "Complete spare 2026 Formula 1 front wing and nosecone assembly mounted on a mobile tubular titanium display stand. Full carbon-composite construction with intricate multi-element active front wing flaps, endplate dive planes, integrated FIA camera pods, and team livery decals with driver race number. Stand features lockable castor wheels and protective rubber locating pins. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon weave and glossy paint textures.",
    "promptCinematic": "Detailed hero shot of a spare front wing assembly gleaming under garage spotlights, intricate raw carbon-fiber weave visible through clear-coat lacquer, 35mm film photography.",
    "promptVideo": "Slow tracking shot gliding along the complex curvature of the active front wing flaps and aerodynamic vanes. 24fps cinema capture."
  },
  {
    "id": "f1-pit-starter-wand",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "External Pneumatic Engine Starter Wand",
    "tagline": "Heavy-duty high-speed external starter wand with dog-clutch probe fitting rear gearbox socket",
    "tags": [
      "pit-equipment",
      "starter",
      "engine-starter",
      "pneumatic",
      "f1",
      "tool"
    ],
    "prompt3D": "Formula 1 external pneumatic engine starter wand. Long tubular aluminum shaft with dual rubber motorcycle-style throttle grips, high-torque industrial pneumatic motor head, reinforced braided air hose connection, and splined hardened steel dog-clutch probe tip engineered to engage the starter drive socket behind the rear crash structure. Team logo badge and safety warning decals. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic textures.",
    "promptCinematic": "Candid action photograph of a mechanic sliding the starter wand into the rear of the car as the hybrid power unit cranks into high-compression life with a cloud of exhaust vapor, 35mm film grain.",
    "promptVideo": "Close-up tracking the starter operator engaging the probe and triggering the motor, sound of high-torque starter spinning up the engine. 24fps cinematic footage."
  },
  {
    "id": "f1-pit-wheel-fire-ext",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Equipment",
    "name": "Pit Lane Wheeled Fire Extinguisher Trolley",
    "tagline": "Twin-cylinder 50kg AFFF foam and CO2 wheeled rapid-deployment extinguisher unit",
    "tags": [
      "pit-equipment",
      "fire-extinguisher",
      "safety",
      "trolley",
      "f1"
    ],
    "prompt3D": "Formula 1 pit lane rapid-intervention wheeled fire extinguisher trolley. Heavy-duty red steel tubular handcart chassis with large solid-rubber wheels. Carrying twin 25kg high-pressure cylinders (AFFF aqueous film-forming foam and Carbon Dioxide) with brass manifold valves, pressure gauges, coiled 10-meter reinforced discharge hose, and long fiberglass discharge horn with squeeze-grip trigger nozzle. High-visibility safety inspection tags and team ID decals. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Moody photograph of the wheeled extinguisher unit stationed at the pit box entrance, reflections of neon pit lights distorting across the curved red cylinder tanks, 35mm film aesthetic.",
    "promptVideo": "Smooth 180-degree orbit around the wheeled fire extinguisher cart parked along the pit lane safety apron. 24fps cinema capture."
  },
  {
    "id": "f1-pw-telemetry-stand",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Wall & Telemetry",
    "name": "Pit Wall Command Telemetry Stand",
    "tagline": "Multi-tier aluminum pit wall canopy stand with stacked ultra-bright telemetry displays and swivel seats",
    "tags": [
      "pit-wall",
      "telemetry",
      "monitors",
      "command",
      "f1"
    ],
    "prompt3D": "Formula 1 pit wall command telemetry stand. Precision-engineered modular extruded aluminum superstructure with aerodynamic curved canopy roof and tinted polycarbonate side wind/rain baffles. Features an elevated grated aluminum walkway platform with safety handrails, eight heavy-duty swivel bucket stools, and two full-width rows of stacked high-nit anti-glare flat panel displays displaying live GPS track maps, throttle/brake telemetry traces, weather radar, and timing screens. Push-to-talk intercom panels, cup holders, and cable bridge conduits. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Cinematic night-race view looking inside the pit wall stand as strategists in headsets debate lap deltas under the glow of 16 multicolor data monitors, 35mm film photography.",
    "promptVideo": "Slow lateral dolly shot gliding along the front of the pit wall stand as the Team Principal and Chief Strategist lean forward to watch a crucial pit stop. 24fps cinema capture."
  },
  {
    "id": "f1-pw-headset",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Wall & Telemetry",
    "name": "Riedel Team Radio Intercom Headset",
    "tagline": "Dual-ear active noise-cancelling carbon-fiber pit radio headset with flexible electret boom mic",
    "tags": [
      "pit-wall",
      "headset",
      "riedel",
      "radio",
      "comms",
      "f1"
    ],
    "prompt3D": "Formula 1 professional team radio intercom headset. Molded carbon-fiber earcups with ultra-dense gel-filled acoustic isolation ear cushions, padded spring-steel headband with team color leather wrap, flexible gooseneck electret boom microphone with foam pop filter, inline push-to-talk (PTT) switch capsule, and heavy-duty coiled polyurethane audio cable terminating in a quick-disconnect 7-pin XLR connector. Rotary volume dial on left cup. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Hero still-life photograph of a team radio headset resting on a carbon pit wall console beside a data binder, soft daylight glinting off the carbon earcups, 35mm film grain.",
    "promptVideo": "Macro camera pan rotating around the headset headband and microphone tip, showing the intricate tactile switches and audio cabling. 24fps cinematic footage."
  },
  {
    "id": "f1-pw-cable-bridge",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Wall & Telemetry",
    "name": "Pit Lane Cable Bridge Conduit",
    "tagline": "Heavy-duty diamond-plate steel cable bridge routing fiber optics and umbilical data across the pit lane",
    "tags": [
      "pit-wall",
      "cable-bridge",
      "conduit",
      "fiber",
      "pit-lane",
      "f1"
    ],
    "prompt3D": "Heavy-duty Formula 1 pit lane cable conduit bridge. Modular diamond-plate galvanized steel ramps with hinged yellow safety lids, designed to allow race cars and trolleys to drive smoothly over vital umbilical cables. Houses massive bundles of multi-strand fiber-optic telemetry feeds, high-voltage power conduits, and pneumatic air lines spanning from the garage facade to the pit wall command stand. Contrasting black and yellow hazard safety stripes on ramp chamfers. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Low-angle perspective down the pit lane working lane showing the cable bridge with cars rolling across the diamond-plate ramps, tire scrub marks visible on the yellow hazard paint, 35mm film photography.",
    "promptVideo": "Smooth tracking shot following the path of the heavy umbilical cabling from the pit garage floor through the cable bridge to the pit wall console. 24fps cinema capture."
  },
  {
    "id": "f1-pw-pitboard",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Wall & Telemetry",
    "name": "Trackside Manual Carbon Pit Board",
    "tagline": "Lightweight carbon-fiber frame pit board with slot-in fluorescent yellow number plaques",
    "tags": [
      "pit-wall",
      "pitboard",
      "signaling",
      "laps",
      "f1"
    ],
    "prompt3D": "Official Formula 1 manual trackside pit board. Lightweight high-modulus carbon-fiber ladder frame with ergonomic foam grip handles and an extended telescoping aluminum reach arm. Features multi-tier horizontal slotted rails holding interchangeable high-contrast fluorescent neon-yellow plastic letters and numbers displaying 'P1 +2.4 L48'. Includes an organized aluminum flight case storage box with full alpha-numeric plaque sets. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon and plastic textures.",
    "promptCinematic": "Dramatic high-speed photograph of a mechanic holding the pit board out over the debris fence as a car flashes past at 320 km/h in a blur of speed, 35mm film grain.",
    "promptVideo": "Slow-motion camera tilt down the pit board frame as the mechanic slides in a new gap card before extending it over the pit wall. 24fps cinematic footage."
  },
  {
    "id": "f1-tyre-slick-soft",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "2026 Pirelli P Zero Soft Tyre (Red)",
    "tagline": "2026 specification 18-inch soft compound slick with red sidewalls and chequered flag motif",
    "tags": [
      "tyre",
      "wheel",
      "pirelli",
      "soft",
      "red",
      "2026",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 official 18-inch Pirelli P Zero Soft racing slick tyre mounted on a BBS forged magnesium center-lock rim. Features 2026 narrower dimensions (25mm narrower front, 30mm narrower rear), smooth semi-gloss vulcanized slick rubber surface, bright red sidewall branding with official Pirelli logos, and the new 2026 FIA chequered flag sidewall motif. Forged dark gunmetal magnesium wheel rim with red center-lock nut, flush carbon-composite aerodynamic wheel cover fairing, and micro valve stem sensors. Centered subject, three-quarter isometric view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR rubber and metal textures.",
    "promptCinematic": "High-end product hero photograph of a pristine pre-heated Pirelli Soft tyre, heat ripples rising off the red-striped rubber surface under crisp studio lighting, 35mm film photography.",
    "promptVideo": "Smooth 360-degree rotation around the 2026 Pirelli Soft tyre showcasing the aerodynamic rim cover and vulcanized sidewall graphics. 24fps cinema capture."
  },
  {
    "id": "f1-tyre-slick-med",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "2026 Pirelli P Zero Medium Tyre (Yellow)",
    "tagline": "2026 specification 18-inch medium compound slick with vibrant yellow sidewall livery",
    "tags": [
      "tyre",
      "wheel",
      "pirelli",
      "medium",
      "yellow",
      "2026",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 official 18-inch Pirelli P Zero Medium racing slick tyre mounted on a BBS forged magnesium center-lock rim. 2026 technical dimensions, pristine smooth vulcanized black slick tread, vibrant yellow sidewall branding with Pirelli P Zero logos and chequered flag graphics. Matte black wheel rim with titanium center nut and aerodynamic wheel fairing. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Macro shot of the bright yellow Pirelli branding on the tyre sidewall, crisp contrasting highlights against the matte vulcanized rubber, 35mm film grain.",
    "promptVideo": "Dolly tracking move passing down a stack of four yellow-striped Medium compound tyres resting on a paddock tyre trolley. 24fps cinematic footage."
  },
  {
    "id": "f1-tyre-slick-hard",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "2026 Pirelli P Zero Hard Tyre (White)",
    "tagline": "2026 specification 18-inch high-durability hard compound slick with clean white sidewalls",
    "tags": [
      "tyre",
      "wheel",
      "pirelli",
      "hard",
      "white",
      "2026",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 official 18-inch Pirelli P Zero Hard racing slick tyre mounted on a forged magnesium wheel rim. 2026 technical dimensions, durable dense slick rubber compound, clean white sidewall branding with Pirelli lettering and chequered flag motif. Forged lightweight wheel rim with center-lock mechanism and aerodynamic wheel cover. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Moody low-key hero shot of a white-banded Hard tyre in the dim ambient light of the garage corner, high-contrast rim lighting, 35mm film photography.",
    "promptVideo": "Slow pedestal camera move rising from the tyre footprint on the asphalt up across the white sidewall branding. 24fps cinema capture."
  },
  {
    "id": "f1-tyre-inter",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "2026 Pirelli Cinturato Intermediate Tyre (Green)",
    "tagline": "2026 18-inch grooved intermediate wet tyre with green sidewalls and directional drainage tread",
    "tags": [
      "tyre",
      "wheel",
      "pirelli",
      "intermediate",
      "green",
      "grooved",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 official 18-inch Pirelli Cinturato Intermediate wet weather tyre. Features deep directional water-displacement tread sipes and drainage channels carved into high-grip synthetic rubber compound, vibrant green sidewall branding with Pirelli Cinturato markings and chequered flag graphic. Mounted on a forged BBS magnesium center-lock wheel rim with green center nut and aero wheel cover. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR tread and metal textures.",
    "promptCinematic": "Rain-soaked hero photograph of a green Intermediate tyre with water droplets glistening on the deep directional tread grooves, 35mm film aesthetic.",
    "promptVideo": "Macro camera track following the intricate curved water-channelling sipes across the intermediate tread surface. 24fps cinematic footage."
  },
  {
    "id": "f1-tyre-wet",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "2026 Pirelli Cinturato Full Wet Tyre (Blue)",
    "tagline": "2026 18-inch full wet tyre with deep anti-hydroplaning tread blocks and blue sidewall branding",
    "tags": [
      "tyre",
      "wheel",
      "pirelli",
      "wet",
      "blue",
      "grooved",
      "rain",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 official 18-inch Pirelli Cinturato Full Wet extreme weather tyre. Features aggressive deep tread blocks and wide longitudinal and lateral evacuation grooves capable of dispersing 85 liters of water per second. Brilliant blue sidewall branding with Pirelli Cinturato logos and 2026 chequered flag motif. Mounted on a forged center-lock magnesium rim with blue center nut. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Dramatic photograph of blue Full Wet tyres lined up along the sodden Spa pit lane as heavy rain pours down from gray thunderclouds, 35mm film grain.",
    "promptVideo": "Extreme slow-motion shot of a Full Wet tyre rotating at high speed through standing water, spraying dual rooster tails of mist. 24fps cinematic footage."
  },
  {
    "id": "f1-tyre-worn",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "Grained & Marbled Worn Race Tyre",
    "tagline": "Post-stint race tyre showing heavy rubber graining, blistering, and melted track marbles",
    "tags": [
      "tyre",
      "wheel",
      "worn",
      "graining",
      "blisters",
      "marbles",
      "f1"
    ],
    "prompt3D": "Heavily degraded and worn Formula 1 racing tyre after a 30-lap high-abrasion stint. The once-smooth slick rubber surface is covered in realistic thermal blisters, feathered diagonal graining across the inner shoulder, melted rubber pick-up marbles fused to the crown, and dull weathered sidewall branding with brake dust scorching on the wheel rim. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), highly detailed PBR textures depicting realistic rubber thermal wear.",
    "promptCinematic": "Gritty close-up photograph of a shredded, marbled race tyre sitting on the parc ferm\u00e9 scales, heat waves rippling in the air above the scarred rubber, 35mm film photography.",
    "promptVideo": "Rotational camera move examining the harsh thermal blisters and rubber pickup across the worn tire shoulder. 24fps cinema capture."
  },
  {
    "id": "f1-tyre-trolley",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Tyres & Wheels",
    "name": "Paddock Heavy-Duty Tyre Transport Trolley",
    "tagline": "Tubular steel 4-wheel transport cart loaded with stacked pre-warmed tyre sets",
    "tags": [
      "tyre",
      "trolley",
      "paddock",
      "wheels",
      "f1",
      "equipment"
    ],
    "prompt3D": "Formula 1 heavy-duty tyre transport trolley. Welded tubular steel frame powder-coated in team colors, equipped with four heavy-duty lockable pneumatic caster wheels and a curved towing handle. Racked with two full sets (8 wheels) of pre-warmed 18-inch Pirelli slick tyres wrapped in insulated electric tire blankets with connected thermal wiring looms. Integrated battery pack mounting bracket on lower shelf. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic and rubber textures.",
    "promptCinematic": "Atmospheric shot of a mechanic wheeling a tyre trolley through the bustling pit lane as evening shadows lengthen across the asphalt, 35mm film grain.",
    "promptVideo": "Tracking shot following the tyre trolley rolling over pit lane expansion joints, blankets steaming gently in the cool air. 24fps cinematic footage."
  },
  {
    "id": "f1-gar-bay-shell",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Modular Concrete Pit Garage Bay",
    "tagline": "Complete architectural concrete garage bay with overhead ducting, drainage, and rear partitions",
    "tags": [
      "garage",
      "bay",
      "pit-building",
      "architecture",
      "concrete",
      "f1"
    ],
    "prompt3D": "Complete Formula 1 modular pit garage interior shell. Deep concrete structural bay (15m deep by 5m wide) with high ceiling, exposed overhead HVAC ductwork, cable management ladders, recessed drainage channels in the floor, and industrial perimeter power distribution conduits. Rear wall fitted with modular branded composite partition panels, built-in flush monitor screens, and illuminated team crests. Centered interior perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean architectural PBR textures.",
    "promptCinematic": "Wide-angle architectural photograph of an empty, gleaming pit garage bay illuminated by high-CRI white ceiling light panels, razor-sharp reflections on the floor, 35mm film photography.",
    "promptVideo": "Smooth forward dolly tracking shot pushing into the depth of the empty team garage from the pit apron back to the engineering partition. 24fps cinema capture."
  },
  {
    "id": "f1-gar-trestles",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "High-Density Titanium Chassis Trestles",
    "tagline": "Adjustable height titanium workshop car stands supporting chassis at waist height",
    "tags": [
      "garage",
      "trestles",
      "stands",
      "chassis",
      "tool",
      "f1"
    ],
    "prompt3D": "Pair of Formula 1 heavy-duty chassis workshop trestles (front and rear). Fabricated from welded high-grade tubular titanium with triangular bracing, precision height-adjustment pins, lockable leveling screw feet, and contoured high-density polyurethane rubber cradles designed to support the carbon monocoque and rear crash structure securely at comfortable mechanic working height. Team color powder-coat accents. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Hero still-life of titanium chassis trestles positioned inside the garage, ready to receive the incoming race car, 35mm film grain.",
    "promptVideo": "Slow rotational camera move around the titanium trestle joints highlighting the precision TIG welds and rubber protective pads. 24fps cinematic footage."
  },
  {
    "id": "f1-gar-setup-pad",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Laser-Levelled Setup Flat Patch & Scales",
    "tagline": "Ultra-flat precision aluminum setup platform with four integrated electronic corner weight scales",
    "tags": [
      "garage",
      "setup-pad",
      "scales",
      "flat-patch",
      "alignment",
      "f1"
    ],
    "prompt3D": "Formula 1 precision setup flat patch platform. Modular high-rigidity CNC-machined aluminum surface plates with laser-calibrated leveling screw jacks ensuring sub-millimeter flatness across the entire car footprint. Includes four integrated ultra-thin electronic corner weight load-cell scales beneath the tyre contact patches, digital readout telemetry interface, and optical laser alignment targets on perimeter pylons for camber and toe verification. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR aluminum textures.",
    "promptCinematic": "Atmospheric garage shot of race engineers kneeling around the setup flat patch adjusting pushrod ride height with laser levels, 35mm film photography.",
    "promptVideo": "Pedestal crane move descending onto the glowing digital corner scale displays showing 50.2% cross weight distribution. 24fps cinema capture."
  },
  {
    "id": "f1-gar-tool-rollcab",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Snap-on Professional Shadow-Board Tool Cabinet",
    "tagline": "Multi-drawer high-gloss roll cab with custom two-tone CNC foam shadow trays and titanium tools",
    "tags": [
      "garage",
      "toolcab",
      "snap-on",
      "tools",
      "shadow-board",
      "f1"
    ],
    "prompt3D": "Formula 1 professional mechanic mobile roller tool cabinet. Heavy-duty steel construction with high-gloss automotive powder coat in team colors, heavy-duty ball-bearing slide drawers, stainless steel worktop with raised lip, and lockable swivel rubber casters. Top drawers slid open to reveal custom CNC laser-cut two-tone high-density foam shadow trays holding titanium combination wrenches, calibrated torque drivers, 1/4-inch drive ratchets, and carbon-handled picks with zero missing tools. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic textures.",
    "promptCinematic": "Close-up photograph of gleaming titanium wrenches neatly organized in two-tone laser-cut foam, shop light reflecting on chrome sockets, 35mm film grain.",
    "promptVideo": "Smooth tracking shot across the open tool drawer as a mechanic's gloved hand reaches in and selects a calibrated 10mm torque wrench. 24fps cinema capture."
  },
  {
    "id": "f1-gar-fluid-heater",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Engine Pre-Heating Fluid Circulation Cart",
    "tagline": "Mobile thermal cart circulating 90\u00b0C oil and coolant through engine block prior to ignition",
    "tags": [
      "garage",
      "heater",
      "pre-heater",
      "engine",
      "cooling",
      "f1"
    ],
    "prompt3D": "Formula 1 engine pre-heating fluid circulation cart. Compact stainless steel mobile cabinet housing dual electric thermal heating elements, digital temperature controllers, high-pressure circulation pumps, and quick-disconnect dry-break silicone fluid hoses leading to engine block ports. Digital LED display showing current core temperature at 85\u00b0C. Mounted on lockable industrial casters with team logo identification. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Moody photograph of the fluid heater humming beside the stripped race car, heat haze shimmering above the engine airbox inlet, 35mm film photography.",
    "promptVideo": "Dolly move along the braided heater hoses leading into the 1.6L V6 hybrid power unit as warning LEDs pulse amber. 24fps cinema capture."
  },
  {
    "id": "f1-gar-cooling-blowers",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Centrifugal Brake & Radiator Cooling Blowers",
    "tagline": "High-volume electric cooling duct fans with custom molded carbon sidepod nozzles",
    "tags": [
      "garage",
      "blowers",
      "cooling",
      "fans",
      "brakes",
      "f1"
    ],
    "prompt3D": "Pair of Formula 1 mobile centrifugal cooling blower units. High-output electric squirrel-cage fan assemblies mounted in bright yellow impact-resistant polyethylene housings, fitted with flexible heavy-duty ducting that terminates in custom-molded carbon-fiber nozzles shaped to slot directly into car sidepod radiator intakes and front brake duct scoops. Sturdy tubular steel carry frames with rubber isolation feet. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean PBR plastic and carbon textures.",
    "promptCinematic": "Action shot of mechanics inserting cooling blowers into the sidepods immediately as the car arrives in the garage, heat venting from the louvers, 35mm film grain.",
    "promptVideo": "Close-up tracking the air blast from the cooling duct fans as dry ice smoke is drawn through the radiator cores. 24fps cinematic footage."
  },
  {
    "id": "f1-gar-flight-cases",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Garage & Workshop",
    "name": "Heavy-Duty Aluminum Touring Flight Cases",
    "tagline": "Stack of ruggedized ATA flight cases with butterfly latches, steel ball corners, and stencil labels",
    "tags": [
      "garage",
      "flight-case",
      "logistics",
      "freight",
      "touring",
      "f1"
    ],
    "prompt3D": "Stack of three heavy-duty Formula 1 touring flight cases (large, medium, small). Heavy-gauge black birch plywood panels reinforced with thick extruded aluminum angle edging, recessed spring-loaded steel butterfly twist latches, heavy-duty recessed carry handles, and heavy steel ball corner reinforcements. Exterior faces marked with team stencils, FIA freight customs inspection stickers, and white stenciled labels reading 'SPARE AERO - WING ELEMENTS'. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Gritty documentary photograph of stacked flight cases in the paddock freight bay under heavy rain, water beading on the textured black laminate, 35mm film photography.",
    "promptVideo": "Pan shot across rows of silver-edged flight cases lining the garage rear wall as logistics crew load freight crates. 24fps cinema capture."
  },
  {
    "id": "f1-pl-tagheuer-clock",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Lane Facilities",
    "name": "TAG Heuer Official Pit Lane Master Clock",
    "tagline": "Iconic 1.2-meter diameter track clock inspired by the 1986 Series 1 chronograph design",
    "tags": [
      "pit-lane",
      "clock",
      "tag-heuer",
      "timing",
      "official",
      "f1"
    ],
    "prompt3D": "Official Formula 1 TAG Heuer Pit Lane Master Clock (replacing Rolex from 2025/2026). Large 1.2-meter diameter circular outdoor track clock mounted to the pit building gantry. Features brushed stainless steel bezel inspired by the iconic 1986 TAG Heuer Series 1 chronograph, high-contrast matte black dial face, vibrant red and green TAG Heuer crest logo, white luminous hour markers, red sweeping seconds hand, and high-visibility LED backlighting for night visibility. Weatherproof anti-reflective mineral crystal glass. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic and glass textures.",
    "promptCinematic": "Crisp hero photograph of the iconic TAG Heuer pit lane clock at 14:58 local time, two minutes before race formation lap under clear blue Monaco skies, 35mm film photography.",
    "promptVideo": "Slow upward tilt from the pit straight asphalt up to the sweeping red seconds hand of the TAG Heuer master clock counting down the final seconds. 24fps cinematic footage."
  },
  {
    "id": "f1-pl-speed-limit",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Pit Lane Facilities",
    "name": "Pit Lane Speed Limit 60/80 Signs & Timing Line",
    "tagline": "High-contrast reflective and LED speed limit notification boards with asphalt timing grooves",
    "tags": [
      "pit-lane",
      "speed-limit",
      "timing",
      "signs",
      "f1"
    ],
    "prompt3D": "Formula 1 pit lane entry speed limit notification assembly. Free-standing heavy-duty tubular steel gantry posts holding large circular high-intensity reflective speed limit signs with bold black numerals ('80' for open tracks, '60' for tight street tracks) encircled by a thick red border, paired with an integrated pulsing amber LED flasher unit. Accompanied by a stenciled white pit lane demarcation speed line across the asphalt with cut-in transponder timing loop sealant. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Looking past the '80' speed limit sign down the narrow pit lane as an F1 car triggers its pit limiter, exhaust popping rhythmically in the braking zone, 35mm film grain.",
    "promptVideo": "Dolly shot across the painted speed limit line showing the embedded timing transponder wire cut into the pavement. 24fps cinema capture."
  },
  {
    "id": "f1-trk-armco",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "Triple-W-Beam Galvanized Steel Armco Guardrail",
    "tagline": "Heavy-duty triple-stacked corrugated steel barrier mounted to I-beam posts with C-spacers",
    "tags": [
      "barrier",
      "armco",
      "guardrail",
      "safety",
      "steel",
      "f1"
    ],
    "prompt3D": "Formula 1 triple-tier W-beam Armco safety crash barrier. Heavy galvanized corrugated steel beams (310mm profile) stacked three levels high on structural steel I-beam posts with energy-absorbing C-channel spacers and high-tensile connecting bolts. Includes smooth end-terminal wrap sections and mounted yellow reflective prism reflectors. Realistic galvanized zinc spangle finish with subtle tire rubber rub marks. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR metallic textures.",
    "promptCinematic": "Dramatic low-angle perspective looking down the Armco barrier along the Monaco barriers at the swimming pool chicane, 35mm film photography.",
    "promptVideo": "High-speed camera tracking alongside the corrugated Armco barrier as a racing car blasts past inches away from the steel surface. 24fps cinema capture."
  },
  {
    "id": "f1-trk-tecpro",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "TecPro FIA High-Speed Energy Absorption Barrier",
    "tagline": "Interlocking rotationally molded high-density polyethylene modules with internal polyurethane foam core",
    "tags": [
      "barrier",
      "tecpro",
      "safety",
      "impact",
      "f1"
    ],
    "prompt3D": "Formula 1 FIA-homologated TecPro high-speed impact safety barrier assembly. Segment of interlocking rotationally molded high-density polyethylene (HDPE) barrier blocks (1.2m tall) in alternating safety red, grey, and white. Internally filled with energy-absorbing flexible polyurethane foam and flexible steel reinforcing core, linked by heavy-duty woven high-tensile nylon straps and steel shackles. Weathered plastic texture with scuff marks. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR plastic and metal textures.",
    "promptCinematic": "Hero still-life of red-and-white TecPro barrier blocks lining a high-speed runoff corner at Monza, tire marbles scattered at their base, 35mm film photography.",
    "promptVideo": "Slow tracking camera moving parallel to the interlocking TecPro blocks demonstrating their flexible modular linking straps. 24fps cinematic footage."
  },
  {
    "id": "f1-trk-safer-barrier",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "Steel and Foam Energy Reduction (SAFER) Barrier",
    "tagline": "Tubular structural steel impact face backed by closed-cell polystyrene foam blocks on concrete wall",
    "tags": [
      "barrier",
      "safer",
      "safety",
      "impact",
      "miami",
      "vegas",
      "f1"
    ],
    "prompt3D": "Formula 1 SAFER (Steel and Foam Energy Reduction) barrier system (used on high-speed walls in Miami and Las Vegas). Continuous structural tubular steel impact face painted glossy safety white with sponsor decals, backed by dense closed-cell extruded polystyrene foam crush blocks anchored against a heavy permanent reinforced concrete retaining wall. Features internal anchoring cables and steel transition shoes. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "High-impact motorsport photograph of an F1 car skimming centimeters from the white SAFER barrier wall under Las Vegas boulevard neon lights, 35mm film grain.",
    "promptVideo": "Forward tracking shot running flush along the steel tubes of the SAFER barrier into a high-speed apex curve. 24fps cinema capture."
  },
  {
    "id": "f1-trk-tyrewall",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "Bolted Multi-Row Tyre Wall with Conveyor Belting",
    "tagline": "4-row deep bolted radial tyre wall faced with thick vulcanized conveyor belt shield",
    "tags": [
      "barrier",
      "tyrewall",
      "tyres",
      "safety",
      "conveyor-belt",
      "f1"
    ],
    "prompt3D": "Formula 1 multi-row tyre safety barrier. Four rows deep of interlocking radial car tyres bolted together with galvanized steel through-bolts and steel washers, fronted by a continuous thick black vulcanized rubber conveyor belt impact shield bolted securely across the tyre faces to prevent car penetration. Sponsor advert banners stenciled across conveyor belt face. Base resting on asphalt apron. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR rubber textures.",
    "promptCinematic": "Atmospheric shot of a tire wall at the end of a gravel trap in Suzuka, raindrops clinging to the textured rubber belting, 35mm film photography.",
    "promptVideo": "Camera push-in exploring the heavy bolt connections and multi-layered tire arrangement inside the safety barrier. 24fps cinema capture."
  },
  {
    "id": "f1-trk-catch-fence",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "FIA Grade-1 Catch & Debris Fence",
    "tagline": "Heavy tubular steel posts with 4-meter tensioned high-tensile wire mesh and angled top overhang",
    "tags": [
      "barrier",
      "fence",
      "catch-fence",
      "debris",
      "safety",
      "f1"
    ],
    "prompt3D": "Official FIA Grade-1 track safety debris catch fence. Heavy tubular steel vertical posts (4 meters tall) set at 4-meter intervals with forward-angled top overhang brackets, supporting multi-strand tensioned high-tensile steel cables and double-layer woven carbon-steel mesh designed to contain vehicle debris while maintaining spectator visibility. Heavy steel base plates bolted into concrete retaining wall. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic mesh textures.",
    "promptCinematic": "Shooting through the high-tensile catch fence wire mesh as cars scream past down the main straight, camera focus shifting from fence wire to passing race car, 35mm film grain.",
    "promptVideo": "Pedestal crane move rising up the steel catch fence post from the concrete barrier to the tensioned overhang cables above. 24fps cinematic footage."
  },
  {
    "id": "f1-trk-kerbs-apex",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "Standard FIA Cambered Apex Kerb",
    "tagline": "Alternating red and white 1-meter segmented concrete curb slabs with drainage relief",
    "tags": [
      "track",
      "kerb",
      "apex",
      "rumble",
      "curb",
      "f1"
    ],
    "prompt3D": "Formula 1 FIA standard cambered apex kerb assembly. 10-meter long curved section of alternating safety red and white painted concrete curb blocks (1-meter segments). 800mm wide cambered cross-section with subtle positive slope, rounded lip transition from track asphalt, textured non-skid paint finish, and black rubber tire scrub marks deposited on the red-and-white paint. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR concrete and rubber textures.",
    "promptCinematic": "Low-angle hero macro shot of the red and white apex curb at Ascari chicane, heat haze shimmering above the textured concrete, 35mm film photography.",
    "promptVideo": "Ultra-low ground level tracking shot gliding along the red and white curb as an F1 car rides the apex kerb, bottom skid plate sparking. 24fps cinema capture."
  },
  {
    "id": "f1-trk-sausage-kerb",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Barriers & Safety",
    "name": "High-Visibility Sausage Curb Chicane Marker",
    "tagline": "150mm raised bright yellow teardrop concrete curb module preventing corner cutting",
    "tags": [
      "track",
      "kerb",
      "sausage-kerb",
      "chicane",
      "yellow",
      "f1"
    ],
    "prompt3D": "Formula 1 sausage curb (disincentive curb for chicane apexes). Heavy cast-concrete raised curb block (150mm high by 2 meters long) with rounded teardrop cross-section profile painted in high-visibility traffic yellow. Heavy steel rebar anchor pins bolted into track sub-base, skid marks and carbon fiber scuff marks on top ridge. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR concrete textures.",
    "promptCinematic": "Dramatic shot looking over a yellow sausage kerb at the Monza chicane as a car jumps over the apex, sparks showering behind it, 35mm film grain.",
    "promptVideo": "Slow tracking camera moving parallel to the yellow sausage kerb highlighting the steep deterrent profile. 24fps cinematic footage."
  },
  {
    "id": "f1-sig-start-gantry",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Lights & Electronic Signals",
    "name": "Official FIA 5-Pair Red Starting Light Gantry",
    "tagline": "Spanning overhead starting lights truss with 5 dual red light columns, amber abort, and green wave lights",
    "tags": [
      "lights",
      "start-gantry",
      "starting-lights",
      "fia",
      "gantry",
      "f1"
    ],
    "prompt3D": "Official FIA Formula 1 start light gantry. High-rigidity steel overhead gantry box truss spanning across the start/finish straight. Centered on five distinct vertical columns of paired high-power red LED cluster lamps (10 red lights total) that illuminate sequentially at 1-second intervals before extinguishing simultaneously to start the race. Flanked by secondary amber abort lights and green wave restart lights. Matte black anti-glare sun hoods over each lamp housing. Centered subject, front perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR metallic and optical LED textures.",
    "promptCinematic": "Iconic high-tension shot looking down the starting grid as all five red lights illuminate simultaneously, silence before the roar of 22 engines, 35mm film photography.",
    "promptVideo": "Close-up high-speed 4K shot capturing the 5 red lights coming on one by one in precise cadence, then clicking off to black. 24fps cinematic footage."
  },
  {
    "id": "f1-sig-flag-panel",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Lights & Electronic Signals",
    "name": "Digital Electronic LED Marshal Flag Panel",
    "tagline": "EM Motorsport / FIA full-color daylight-visible matrix panel showing digital flags, SC, and VSC",
    "tags": [
      "lights",
      "flag-panel",
      "digital-flag",
      "marshal",
      "led",
      "f1"
    ],
    "prompt3D": "Official FIA / EM Motorsport trackside digital electronic marshal flag panel. Ruggedized aluminum housing (1m by 1m) with high-density ultra-bright daylight-visible full-color LED matrix display protected by anti-glare polycarbonate shield. Shown displaying an animated waving yellow flag condition with bold 'YELLOW' text and secondary 'VSC' warning symbol. Heavy tubular steel mounting arm clamped to catch fence post. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Moody night-race shot of a digital flag panel flashing brilliant yellow against the dark sky, casting an eerie amber glow over the barrier grass, 35mm film grain.",
    "promptVideo": "Dolly shot approaching the digital flag panel as it dynamically transitions from green flag status to flashing double yellow hazard mode. 24fps cinema capture."
  },
  {
    "id": "f1-sig-floodlight-tower",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Lights & Electronic Signals",
    "name": "High-Mast Stadium Floodlight Tower",
    "tagline": "45-meter galvanized steel lattice mast topped with 48 high-output 5600K sports lighting LED luminaires",
    "tags": [
      "lights",
      "floodlight",
      "tower",
      "night-race",
      "stadium",
      "f1"
    ],
    "prompt3D": "Formula 1 night-race high-mast stadium floodlight tower. 45-meter tall galvanized steel lattice truss monopole structure with internal maintenance ladder and safety rest platforms. Crowned by a wide rectangular steel headframe holding 48 high-output 5600K daylight-balanced LED sports stadium floodlights with individual glare-control louvers. Transformer control cabinets and concrete foundation pad at base. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR steel and glass textures.",
    "promptCinematic": "Looking directly up into the blinding white light array of a floodlight tower during the Singapore night Grand Prix, palm tree silhouettes flanking the frame, 35mm film photography.",
    "promptVideo": "Smooth vertical crane move descending the lattice tower from the blazing floodlights down to the dark asphalt below where race cars streak by like comets. 24fps cinema capture."
  },
  {
    "id": "f1-rec-crane-fixed",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Recovery & Cranes",
    "name": "Pedestal-Mounted Telescopic Trackside Crane",
    "tagline": "Permanent heavy-duty hydraulic telescopic crane station iconic to Monaco and street circuits",
    "tags": [
      "recovery",
      "crane",
      "monaco",
      "telescopic",
      "lift",
      "f1"
    ],
    "prompt3D": "Formula 1 permanent trackside telescopic recovery crane (as seen throughout Monaco and Baku street circuits). Heavy-duty pedestal base bolted into reinforced concrete quay, supporting a rotating 360-degree crane turret with operator cabin, multi-stage hydraulic telescopic boom arm extending 15 meters over the safety fences, high-capacity winch cable, and specialized 4-point car lifting sling. Finished in safety yellow and white industrial paint with warning decals. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR mechanical textures.",
    "promptCinematic": "Dramatic high-angle photograph of the Monaco recovery crane lifting an F1 car high above the harbour yachts and azure sea, 35mm film photography.",
    "promptVideo": "Slow cinematic crane move panning with the boom arm as it hovers over the track barrier to retrieve a stranded car. 24fps cinema capture."
  },
  {
    "id": "f1-rec-telehandler",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Recovery & Cranes",
    "name": "Manitou-Style 4x4 Telescopic Forklift",
    "tagline": "Heavy-duty all-terrain telehandler tractor with telescopic boom and car lifting hook attachment",
    "tags": [
      "recovery",
      "telehandler",
      "tractor",
      "manitou",
      "forklift",
      "f1"
    ],
    "prompt3D": "Formula 1 circuit rapid-recovery telescopic handler (Manitou/JCB style). Heavy-duty all-wheel-drive 4x4 off-road chassis with massive chevron-tread turf tyres, fully enclosed safety ROPS operator cab with amber warning beacon, heavy extendable two-stage telescopic boom, and front quick-attach lifting jib with swivel hook and safety latches for car recovery straps. Industrial safety red and black paint with reflective safety chevrons. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR vehicular textures.",
    "promptCinematic": "Hero shot of the heavy telehandler rumbling across the gravel trap at Silverstone under stormy skies, recovery sling swinging from its boom, 35mm film grain.",
    "promptVideo": "Ground-level tracking shot following the massive telehandler rolling into the runoff area to recover a beached car. 24fps cinematic footage."
  },
  {
    "id": "f1-rec-sling",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Recovery & Cranes",
    "name": "4-Point Roll Hoop Car Recovery Lifting Sling",
    "tagline": "Specialized high-tensile webbing sling with forged alloy master link hooking directly to roll hoop",
    "tags": [
      "recovery",
      "sling",
      "lifting",
      "crane",
      "roll-hoop",
      "f1"
    ],
    "prompt3D": "Formula 1 official car lifting sling. Four-leg high-tensile polyester webbing sling assembly in bright safety orange with protective anti-abrasion Cordura sleeves. Fitted with a forged heavy-duty alloy master oval ring for crane hook connection, four self-locking swivel safety hooks with rubber coated snouts, and specialized quick-release titanium eyelet adapter that locks into the car's roll-hoop extraction socket behind the cockpit. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR synthetic webbing and forged alloy textures.",
    "promptCinematic": "Detailed close-up photograph of the recovery sling hooked to the roll-hoop of an F1 car, tensioning as the crane cable tightens, 35mm film photography.",
    "promptVideo": "Smooth rotational camera arc examining the heavy forged links and tensioned straps of the recovery sling. 24fps cinema capture."
  },
  {
    "id": "f1-sgn-partner-boards",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Signage & Brands",
    "name": "2026 Global Partner Barrier Boards",
    "tagline": "Vibrant composite perimeter boards featuring 2026 partners: Aramco, AWS, DHL, Heineken, Pirelli",
    "tags": [
      "signage",
      "brands",
      "sponsors",
      "aramco",
      "dhl",
      "pirelli",
      "f1"
    ],
    "prompt3D": "Formula 1 2026 official global partner advertising barrier board set. Modular composite panels designed to mount directly along Armco, concrete, and TecPro barriers. Set includes high-resolution printed liveries for official 2026 global partners: Aramco cyan-and-green, AWS orange-and-white, DHL bright red-and-yellow, Heineken 0.0 green-and-white, Pirelli red-and-yellow, and LVMH / TAG Heuer branding. UV-resistant anti-glare finish with realistic subtle road spray dirt at bottom edge. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR graphic textures.",
    "promptCinematic": "Shooting down the high-speed main straight as the colorful global partner barrier boards blur into vibrant streaks of color beside a passing car, 35mm film grain.",
    "promptVideo": "Fast panning camera tracking parallel to the barrier boards as race cars roar past in close formation. 24fps cinema capture."
  },
  {
    "id": "f1-sgn-brake-markers",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Signage & Brands",
    "name": "High-Contrast Trackside Braking Distance Markers",
    "tagline": "Set of freestanding lightweight styrofoam distance signs: 300m, 200m, 150m, 100m, 50m",
    "tags": [
      "signage",
      "brake-marker",
      "braking",
      "distance",
      "trackside",
      "f1"
    ],
    "prompt3D": "Set of five Formula 1 trackside braking distance marker boards (300m, 200m, 150m, 100m, 50m). Lightweight breakaway styrofoam core construction with weatherproof high-contrast screen-printed graphics (bold black numerals on stark white reflective background). Supported on lightweight breakaway fiberglass stakes anchored into track verge grass. Subtle weathering and dirt spray on bases. Centered subject, staggered isometric lineup, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Low-angle perspective looking through the 100m braking board as an F1 car locks its front left tyre in a cloud of white smoke at the end of the straight, 35mm film photography.",
    "promptVideo": "High-speed tracking shot passing each braking marker in rapid succession: 300, 200, 150, 100, 50... into the tight hairpin corner. 24fps cinema capture."
  },
  {
    "id": "f1-sgn-timing-tower",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Signage & Brands",
    "name": "Electronic Leaderboard Pylon & Timing Tower",
    "tagline": "Towering vertical LED timing pylon displaying top 20 driver positions, gap deltas, and lap counter",
    "tags": [
      "signage",
      "timing-tower",
      "leaderboard",
      "pylon",
      "led",
      "f1"
    ],
    "prompt3D": "Formula 1 circuit electronic timing tower pylon. 30-meter vertical steel lattice tower covered in full-color high-luminance outdoor LED matrix panels. Displays live top-20 driver three-letter acronyms (VER, NOR, LEC, HAM, RUS, PIA...), current lap number, time intervals (+1.2s), team color bars, and rotating partner sponsor advertisements at the crown. Galvanized structural support legs and power substation cabinet at base. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), clean PBR steel and LED textures.",
    "promptCinematic": "Towering night-race photograph of the glowing electronic timing tower reflecting across the wet pit lane asphalt in Singapore, 35mm film grain.",
    "promptVideo": "Smooth vertical camera pedestal rising up the height of the timing tower as driver positions dynamically scramble and update. 24fps cinematic footage."
  },
  {
    "id": "f1-str-pit-building",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Structures",
    "name": "Multi-Story Pit Building & Paddock Club Complex",
    "tagline": "Full architectural pit complex: ground floor garages, second floor Paddock Club, and rooftop VIP suites",
    "tags": [
      "structure",
      "pit-building",
      "architecture",
      "paddock-club",
      "garages",
      "f1"
    ],
    "prompt3D": "Complete modern Formula 1 pit building architectural model. Multi-story steel, glass, and concrete construction (100 meters long). Ground floor features 11 double-bay garages with roller shutters and overhead gantry mounts. Second level features luxury glazed floor-to-ceiling Paddock Club hospitality suites with cantilevered outdoor viewing balconies. Top deck features VIP rooftop terrace with tension-fabric shade sails, sponsor billboards, and podium balcony rostrum. Centered architectural perspective, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean modern architectural PBR textures.",
    "promptCinematic": "Breathtaking wide-angle dusk photograph of the illuminated pit building complex at Yas Marina, VIP hospitality suites glowing with golden ambient light, 35mm film photography.",
    "promptVideo": "Sweeping cinematic drone orbit around the pit building complex as the race cars exit the garages for the formation lap. 24fps cinema capture."
  },
  {
    "id": "f1-str-podium",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Structures",
    "name": "Formula 1 Victory Ceremony Podium & Rostrum",
    "tagline": "Three-tier victory rostrum with cantilever balcony, national anthem flag poles, and backdrop LED screen",
    "tags": [
      "structure",
      "podium",
      "ceremony",
      "victory",
      "trophies",
      "f1"
    ],
    "prompt3D": "Official Formula 1 victory podium rostrum. Three-tier cantilevered championship stage with stepped pedestals marked '1', '2', '3' in brushed titanium. Features official F1 backdrop graphic wall with sponsor logos, three automated telescoping flag poles for national anthems, green carpet runner, and stainless steel safety railings. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic and acrylic textures.",
    "promptCinematic": "Euphoric victory celebration on the Monza podium, champagne spray catching the golden sunlight like diamonds, sea of fans chanting below, 35mm film photography.",
    "promptVideo": "Slow-motion camera tilt up from the podium base to the drivers hoisting massive gold trophies aloft amidst a shower of red and white confetti. 24fps cinematic sports footage."
  },
  {
    "id": "f1-str-grandstand",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Structures",
    "name": "Covered Tiered Permanent Stadium Grandstand",
    "tagline": "Massive multi-tier covered grandstand with cantilevered tensile fabric canopy and thousands of seats",
    "tags": [
      "structure",
      "grandstand",
      "stadium",
      "spectators",
      "architecture",
      "f1"
    ],
    "prompt3D": "Formula 1 permanent stadium grandstand module. Reinforced concrete tiered seating bowl with 50 rows of individual folding polypropylene bucket seats in contrasting team colors, structural steel columns supporting a massive sweeping cantilevered white tensile fabric canopy roof, internal access vomitories, staircases, and safety handrails. Ground floor concessions and restroom portals. Centered architectural view, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR concrete and fabric textures.",
    "promptCinematic": "Looking out from the top row of the packed grandstand across the race track as the pack of 22 cars screams into Turn 1, sea of flags rippling in the wind, 35mm film grain.",
    "promptVideo": "Sweeping crane shot gliding along the curved grandstand roofline revealing thousands of cheering fans in the stands below. 24fps cinema capture."
  },
  {
    "id": "f1-str-motorhome",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Circuit Structures",
    "name": "Multi-Story Team Hospitality Motorhome",
    "tagline": "Three-story mobile palace with smoked glass curtain walls, dining decks, and team branding",
    "tags": [
      "structure",
      "motorhome",
      "hospitality",
      "paddock",
      "f1"
    ],
    "prompt3D": "Formula 1 team hospitality motorhome palace (modular mobile building). Three stories of precision glass and brushed aluminum construction with smoked double-glazed curtain walls, second-floor open-air dining terrace with wood-deck flooring, private driver meeting suites, and commercial catering kitchen on ground level. Massive team branding and sponsor crests across the exterior facade. Centered architectural perspective, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR glass and metal textures.",
    "promptCinematic": "Sleek evening shot in the Monaco paddock between towering team motorhomes, warm ambient patio lights reflecting in the mirrored glass facades, 35mm film photography.",
    "promptVideo": "Steadicam walk-through moving along the pedestrian alley between competing team hospitality motorhomes as drivers and celebrities mingle. 24fps cinema capture."
  },
  {
    "id": "f1-veh-safety-car",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Official & Service Vehicles",
    "name": "2026 Mercedes-AMG GT 63 PRO Official Safety Car",
    "tagline": "First AWD official safety car in silver and red livery with aerodynamic roof LED light bar",
    "tags": [
      "vehicle",
      "safety-car",
      "mercedes",
      "amg",
      "gt63",
      "official",
      "f1"
    ],
    "prompt3D": "2026 Mercedes-AMG GT 63 PRO 4MATIC+ Official FIA Formula 1 Safety Car. High-performance all-wheel-drive sports coupe in official metallic silver and bright red livery with official FIA Safety Car door graphics. Features carbon-fiber fixed rear wing, front splitter, carbon-ceramic brakes, and a custom low-drag aerodynamic roof-mounted carbon light bar with dual-color LED emergency beacons (flashing amber for track hold, green to wave lapped cars through). Detailed cockpit interior with dual telemetry display screens, FIA radio intercom, and roll cage. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR automotive paint and carbon textures.",
    "promptCinematic": "High-octane hero shot of the Mercedes-AMG Safety Car leading the screaming pack through the rain at Silverstone, headlights piercing the gray mist and amber roof lights flashing, 35mm film photography.",
    "promptVideo": "Dynamic tracking shot from a chase car following inches behind the Mercedes-AMG Safety Car as it slides through a fast chicane, tires smoking lightly. 24fps cinema capture."
  },
  {
    "id": "f1-veh-medical-car",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Official & Service Vehicles",
    "name": "2026 Mercedes-AMG GT 63 S Official Medical Car",
    "tagline": "High-performance medical rescue fastback equipped with full emergency resuscitation kit",
    "tags": [
      "vehicle",
      "medical-car",
      "mercedes",
      "amg",
      "medical",
      "rescue",
      "f1"
    ],
    "prompt3D": "2026 Mercedes-AMG GT 63 S 4MATIC+ Official FIA Medical Car. High-performance 4-door fastback in official metallic silver with fluorescent red medical graphics, green medical cross crests, and 'FIA MEDICAL' door lettering. Features aerodynamic roof-mounted emergency LED strobe light bar in flashing green and amber. Rear cargo hatch loaded with specialized medical trauma gear: defibrillator, oxygen tanks, spinal board, and burn treatment kits. 4-point racing harness bucket seats inside. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR automotive textures.",
    "promptCinematic": "Urgent cinematic photograph of the Mercedes Medical Car idling at the pit exit line, engine rumbling with exhausts smoking in the chilly morning air, 35mm film grain.",
    "promptVideo": "Fast panning shot following the Medical Car accelerating flat-out down the main straight following the grid on lap one. 24fps cinematic sports footage."
  },
  {
    "id": "f1-veh-transporter-truck",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Official & Service Vehicles",
    "name": "Official Team Transporter Articulated Semi-Truck",
    "tagline": "Double-decker articulated race car transporter truck in high-gloss team livery with rear tail-lift",
    "tags": [
      "vehicle",
      "truck",
      "transporter",
      "semi",
      "logistics",
      "f1"
    ],
    "prompt3D": "Formula 1 official team race car transporter semi-truck. European cab-over articulated tractor unit paired with a sleek custom aerodynamic double-deck enclosed box trailer. Finished in flawless high-gloss team livery with large team crest and sponsor logos. Trailer features fold-out hydraulic dual-car rear elevator lift, deployable side awnings, tinted exterior upper office windows, and polished chrome alloy wheel rims. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR automotive textures.",
    "promptCinematic": "Paddock hero photograph of twin immaculate team transporter trucks parked in perfect alignment, mirror finish on black paint reflecting paddock activity, 35mm film photography.",
    "promptVideo": "Slow tracking shot moving along the side of the 16-meter transporter trailer as the hydraulic rear tail-lift lowers a covered race car to the ground. 24fps cinema capture."
  },
  {
    "id": "f1-env-racing-line",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Environment & Materials",
    "name": "High-Grip Circuit Asphalt & Rubbered Racing Line",
    "tagline": "Fine-aggregate circuit asphalt texture with dense dark rubbered groove line laid down on apexes",
    "tags": [
      "environment",
      "asphalt",
      "racing-line",
      "texture",
      "rubber",
      "f1"
    ],
    "prompt3D": "Formula 1 high-grip circuit tarmac track surface module. Specialized fine-aggregate open-pore asphalt pavement with crisp white thermoplastic track boundary edge lines. Features a distinct, dark vulcanized rubber racing line deposited heavily along the braking zone and corner apex where thousands of hot slick tires have embedded molten rubber into the asphalt pores. Subtle oil sheen and micro aggregate texture. Centered subject, level camera, three-quarter top-down view, isolated on neutral light-grey background (#d8d8d8), clean high-resolution PBR surface textures.",
    "promptCinematic": "Extreme low-angle macro photograph of the dark rubbered racing line on the track apex, heat waves distorting the distant curbs under blistering noon sun, 35mm film grain.",
    "promptVideo": "High-speed camera skimming 5 inches above the dark rubbered groove, tracking rapidly through a sweeping parabolica corner. 24fps cinema capture."
  },
  {
    "id": "f1-env-tyre-marbles",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Environment & Materials",
    "name": "Discarded Shredded Tyre Marbles Offline Decal",
    "tagline": "Clusters of vulcanized rubber marbles and tyre clag discarded off the racing line on corner exits",
    "tags": [
      "environment",
      "marbles",
      "rubber",
      "debris",
      "decal",
      "f1"
    ],
    "prompt3D": "Formula 1 tyre marbles and rubber debris scatter decal. Irregular dense clusters of shredded vulcanized rubber marbles (small clags of melted tire rubber ranging from 5mm to 30mm) discarded offline on high-speed corner exits and braking zones. Textured weathered black rubber with subtle grey track dust coating. Centered subject, top-down perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR debris textures.",
    "promptCinematic": "Gritty close-up of spent rubber marbles piled against the kerb edge, discarded like dark gravel off the racing line, 35mm film photography.",
    "promptVideo": "Macro camera track floating across the textured carpet of rubber marbles strewn across the track margins. 24fps cinema capture."
  },
  {
    "id": "f1-env-wet-asphalt",
    "domain": "f1",
    "category": "prop",
    "subCategory": "Track Environment & Materials",
    "name": "Wet Track Surface with Puddles & Spray Texture",
    "tagline": "Glossy reflective wet asphalt with standing water pools, tire ruts, and airborne mist particles",
    "tags": [
      "environment",
      "wet",
      "rain",
      "puddles",
      "spray",
      "f1"
    ],
    "prompt3D": "Dynamic wet Formula 1 track surface module. High-gloss saturated asphalt pavement with realistic standing water puddles reflecting environment lighting, hydroplaning tire water clearance tracks, and wet spray texture. Includes contrasting painted track boundary lines with reduced specular grip. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR wet surface shaders with Fresnel reflections.",
    "promptCinematic": "Mirror reflections of track floodlights rippling in dark puddles on the wet straight as evening rain falls, 35mm film photography.",
    "promptVideo": "Dolly tracking shot gliding over the glossy wet tarmac as raindrops create expanding concentric rings in the surface water. 24fps cinema capture."
  },
  {
    "id": "f1-car-active-front-wing",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "2026 Active Front Wing Assembly",
    "tagline": "Dynamic active aero front wing actuating between high-downforce Corner Mode and low-drag Straight Mode",
    "tags": [
      "car",
      "front-wing",
      "active-aero",
      "2026",
      "aerodynamics",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 Active Front Wing assembly. Precision carbon-fiber construction conforming to 2026 technical regulations (narrower 1900mm width, shorter overhang). Features dual active flap elements with hydraulic actuator linkages that mechanically adjust between high-angle Corner Mode (maximum downforce) and flat Straight Mode (minimum drag). Complex aerodynamic vortex endplates, dive planes, and raw carbon weave finish with team livery accents. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon and actuator textures.",
    "promptCinematic": "Dramatic hero shot of the active front wing flaps tilting down into Straight Mode as the car hits 340 km/h on the Monza straight, 35mm film photography.",
    "promptVideo": "Slow-motion mechanical demonstration showing the active front wing flaps smoothly articulating between Corner Mode and Straight Mode configurations. 24fps cinematic footage."
  },
  {
    "id": "f1-car-active-rear-wing",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "2026 Active Rear Wing Assembly",
    "tagline": "Dual-element active rear wing adjusting angle of attack dynamically without DRS",
    "tags": [
      "car",
      "rear-wing",
      "active-aero",
      "2026",
      "aerodynamics",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 Active Rear Wing assembly (replaces traditional DRS under 2026 regulations). Carbon-composite dual-element wing with twin swan-neck mounting pylons, sculpted endplates with integrated vertical LED rain lights, and internal electro-hydraulic actuators that actively pitch the main plane and flap between high-downforce Corner Mode and low-drag Straight Mode. Integrated rear impact crash structure mount. Centered subject, three-quarter perspective, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon textures.",
    "promptCinematic": "Looking directly at the rear active wing as the car accelerates out of the final turn, endplate rain lights glowing bright crimson in the twilight, 35mm film grain.",
    "promptVideo": "Camera orbit around the rear wing showing the active flap mechanism cycling between high-downforce and low-drag settings. 24fps cinema capture."
  },
  {
    "id": "f1-car-halo-ring",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "2026 Titanium Cockpit Halo & Fairing",
    "tagline": "FIA Grade-1 curved grade-5 titanium cockpit safety ring with aerodynamic carbon fairing",
    "tags": [
      "car",
      "halo",
      "safety",
      "titanium",
      "cockpit",
      "f1"
    ],
    "prompt3D": "Official 2026 Formula 1 Cockpit Halo safety structure. Precision welded Grade-5 titanium tubular hoop capable of withstanding 125kN of vertical and lateral crush load. Sheathed in an ultra-thin aerodynamic carbon-fiber fairing with micro vortex-generating trip strips on the upper curved loop and central forward strut. Finished in matte carbon weave with team livery color accents and driver name decal. Centered subject, three-quarter perspective, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR titanium and carbon textures.",
    "promptCinematic": "Cockpit point-of-view looking out past the central Halo titanium pillar as rain streaks across the aerodynamic fairing at 300 km/h, 35mm film photography.",
    "promptVideo": "Smooth 360-degree camera sweep around the titanium Halo ring showing the sculpted aerodynamic fairing and driver egress clearances. 24fps cinematic footage."
  },
  {
    "id": "f1-car-steering-wheel",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "Molded Carbon PCU-8D Steering Wheel",
    "tagline": "Bespoke ergonomic carbon wheel with central 4.3-inch OLED color display, rotary dials, and tactile paddle shifters",
    "tags": [
      "car",
      "steering-wheel",
      "pcu-8d",
      "cockpit",
      "telemetry",
      "carbon",
      "f1"
    ],
    "prompt3D": "2026 Formula 1 multifunction steering wheel (PCU-8D specification). Molded carbon-fiber frame with custom ergonomic hand-sculpted silicone grip handles tailored to driver palm impressions. Features a central 4.3-inch ultra-bright OLED color telemetry display screen showing gear, speed, delta times, and ERS energy bars, bordered by top RPM shift lights (green, red, blue LEDs). Equipped with 16 tactile push-buttons, 5 multi-turn rotary dials for differential and engine mapping, dual thumb rotaries, and rear magnetic carbon shift paddles and analog dual-clutch bite paddles. Centered subject, straight-on view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Extreme close-up of the glowing steering wheel display in the dark cockpit under night floodlights, driver's gloved fingers adjusting brake bias on the rotary dial, 35mm film grain.",
    "promptVideo": "Dynamic push-in to the steering wheel display as the driver clicks the carbon paddle shifter with a crisp mechanical snap. 24fps cinematic footage."
  },
  {
    "id": "f1-car-t-cam-pod",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "Aerodynamic Roll-Hoop T-Cam Broadcast Pod",
    "tagline": "Symmetrical carbon camera housing mounted atop the engine airbox with team identification wrap",
    "tags": [
      "car",
      "t-cam",
      "camera",
      "broadcast",
      "roll-hoop",
      "f1"
    ],
    "prompt3D": "Formula 1 official onboard broadcast T-Cam camera pod. Sculpted aerodynamic carbon-composite winglet housing engineered to mount flush atop the roll-hoop engine airbox intake. Houses dual 4K broadcast lenses (forward-facing helmet view and rear-facing wing view) protected by revolving tear-off film strips. Wrapped in fluorescent neon-yellow or team-color identification vinyl indicating car #1 or car #2. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon and optical glass textures.",
    "promptCinematic": "Hero shot of the neon-yellow T-Cam pod perched above the engine intake, rain droplets streaming backwards off the aerodynamic lens cowl, 35mm film photography.",
    "promptVideo": "Transitioning smoothly from an exterior view of the T-Cam pod directly into its wide-angle 4K onboard driver helmet perspective. 24fps cinema capture."
  },
  {
    "id": "f1-car-ers-status-lights",
    "domain": "f1",
    "category": "prop",
    "subCategory": "2026 Car Aero & Cockpit",
    "name": "Dual-Color High-Voltage ERS Status LED Array",
    "tagline": "Cockpit and roll-hoop LED indicator clusters glowing green for electrical safety or amber for live high-voltage",
    "tags": [
      "car",
      "ers",
      "hybrid",
      "safety",
      "led",
      "lights",
      "f1"
    ],
    "prompt3D": "Formula 1 Energy Recovery System (ERS) high-voltage safety indicator light module. Pair of sealed weatherproof LED warning beacons mounted adjacent to the cockpit opening and roll-hoop structure. Features ultra-bright dual-mode LEDs that glow steady emerald green when the 350kW hybrid electrical system is safely grounded and de-energized, or pulsing amber hazard warning when live electrical insulation fault is detected. Clear polycarbonate lens and carbon mounting bezel. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR optical textures.",
    "promptCinematic": "Close-up of the green ERS light glowing brightly beside the cockpit as marshals touch the car chassis during a pit stop, 35mm film photography.",
    "promptVideo": "Camera focusing on the ERS light cluster switching state from standby amber to safe green as the car enters parc ferm\u00e9. 24fps cinematic footage."
  },
{
    "id": "d-town-house",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Settlement",
    "name": "Medieval Stone Town Building",
    "tagline": "Timber-framed gothic masonry town house with slate shingles & leaded windows",
    "tags": [
      "settlement",
      "building",
      "stone",
      "medieval",
      "town",
      "gothic",
      "diablo"
    ],
    "prompt3D": "Gothic medieval timber-framed stone town building. Multi-story construction with rough-hewn granite ground floor masonry, dark aged oak half-timber upper stories with weathered plaster infill, pitched roof with cracked dark slate shingles, iron-reinforced timber shutters, leaded diamond-pane glass windows, stone chimney with soot buildup. Centered subject, level camera, three-quarter isometric perspective, isolated on neutral light-grey background (#d8d8d8), clean PBR masonry and weathered wood textures, game-ready modular building asset.",
    "promptCinematic": "Moody atmospheric hero photograph of an ominous medieval stone town house in a fog-shrouded dark fantasy hamlet. Faint orange candle flicker visible behind frosted leaded-glass windows, cold rain glistening on dark slate roof tiles, cobblestone street below lined with moss and mud, 35mm film grain, dark fantasy ARPG aesthetic.",
    "promptVideo": "Slow pedestal crane move descending from the wet slate roof gables down to the heavy iron-studded oak doorway of the medieval stone house, as rain trickles from the eaves into puddles reflecting the gloomy overcast sky. 24fps cinematic footage."
  },
  {
    "id": "d-cottage",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Settlement",
    "name": "Weathered Wooden Timber Cottage",
    "tagline": "Thatched peasant dwelling with mossy timber beams, cracked daub & smoking stone chimney",
    "tags": [
      "cottage",
      "thatched",
      "timber",
      "peasant",
      "rustic",
      "settlement",
      "diablo"
    ],
    "prompt3D": "Weathered rustic peasant timber cottage. Low-slung single-story dwelling, crooked hand-hewn oak support beams, cracked wattle and daub whitewashed walls with exposed lath, thick thatched straw roof overgrown with green moss and wildflowers, small fieldstone chimney with gentle smoke plume, rough plank door with forged iron strap hinges. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), PBR textures, clean silhouette.",
    "promptCinematic": "Grim dark fantasy landscape photograph of an isolated thatched peasant cottage at twilight. Pale blue mist curling around the sagging wooden eaves, warm amber firelight glowing through uneven timber cracks, dead withered trees framing the composition, 35mm film photography, evocative melancholic atmosphere.",
    "promptVideo": "Slow tracking shot creeping low through muddy weeds toward the weathered wooden cottage as gentle wisps of chimney smoke drift horizontally in the cold mountain breeze. 24fps cinema capture, dark folk horror mood."
  },
  {
    "id": "d-fortress-wall",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Settlement",
    "name": "Crumbling Fortress Wall & Iron Gate",
    "tagline": "Ruined granite rampart with battlements, arrow slits & heavy rusted iron portcullis",
    "tags": [
      "fortress",
      "wall",
      "gate",
      "portcullis",
      "rampart",
      "ruins",
      "diablo"
    ],
    "prompt3D": "Section of ruined medieval fortress curtain wall with reinforced gatehouse arch. Massive weathered ashlar granite blocks with carved arrow loops, crenellated battlements with machicolations, iron braziers on corbels, heavy arched stone gateway housing a raised spiked wrought-iron portcullis gate with massive hoisting chains. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), realistic stone erosion, moss, and rust PBR textures.",
    "promptCinematic": "Epic hero photograph of a towering ruined stone fortress wall under a blood-red eclipse sky. Heavy iron portcullis casting spiked geometric shadows across the muddy threshold, torches mounted in dragon-claw sconces flickering in the damp wind, 35mm film grain, legendary dark fantasy aesthetic.",
    "promptVideo": "Dramatic low-angle push-in gliding through the arched stone portal beneath the suspended spiked iron portcullis, entering the foreboding courtyard beyond as fog billows past the weathered granite masonry. 24fps cinematic camera move."
  },
  {
    "id": "d-cobblestones",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Settlement",
    "name": "Town Square Cobblestone Paving",
    "tagline": "Uneven wet basalt cobblestones with muddy seams, wheel ruts & stone gutter drainage",
    "tags": [
      "cobblestones",
      "paving",
      "ground",
      "basalt",
      "town-square",
      "diablo"
    ],
    "prompt3D": "Modular terrain tile of medieval town square cobblestone paving. Irregular hand-laid dark basalt cobbles with rounded weathered tops, deep recessed mortar joints filled with wet earth, moss patches, worn horse-cart wagon wheel ruts, central concave stone drainage gutter. Centered subject, isometric top-down three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), high-fidelity PBR displacement and normal maps.",
    "promptCinematic": "Low-angle macro hero shot skimming across rain-soaked town cobblestones at dusk. Puddles in the basalt depressions catching vibrant amber reflections of tavern lanterns and torch flames, wet sheen on dark volcanic stones, shallow depth of field, 35mm film aesthetic.",
    "promptVideo": "Smooth low-angle tracking shot gliding 6 inches above the wet cobblestones, following the path of wagon ruts as rain ripples across small puddles reflecting the ominous gothic town above. 24fps cinema capture."
  },
  {
    "id": "d-market-stall",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Settlement",
    "name": "Rustic Market Stall with Goods",
    "tagline": "Rough timber trestle stall with patched canvas awning, barrels & herb baskets",
    "tags": [
      "market-stall",
      "vendor",
      "props",
      "trade",
      "burlap",
      "barrels",
      "diablo"
    ],
    "prompt3D": "Medieval open-air market merchant stall. Rough-sawn weathered pine trestle table, patched hemp canvas canopy awning supported by crooked wooden posts, stacked oak barrels with forged iron hoops, hanging braided garlic bulbs, wicker baskets overflowing with dried medicinal herbs, roots, clay jugs, and rolled vellum trade parchment. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), PBR textures, modular village asset.",
    "promptCinematic": "Atmospheric photo of a deserted market stall in a dark fantasy village under a stormy sky. Wind whipping the frayed edges of the canvas awning, clay potion jugs and dried herbs catching the golden flicker of a nearby torch, 35mm film grain, rich medieval merchant ambiance.",
    "promptVideo": "Slow orbiting arc shot around the rustic market stall as the ragged canvas canopy billows in an ominous gust of wind, shifting shadows across the stacked barrels and herb baskets. 24fps cinema footage."
  },
  {
    "id": "d-npc-blacksmith",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Town NPCs",
    "name": "Grizzled Blacksmith at the Forge",
    "tagline": "Muscular veteran smith with soot-stained beard, singed leather apron & heavy tongs",
    "tags": [
      "blacksmith",
      "npc",
      "forge",
      "artisan",
      "grizzled",
      "crafting",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of a grizzled medieval blacksmith NPC. Broad-shouldered muscular physique, weathered face with soot streaks and singed bushy brown-and-gray beard, intense focused brown eyes. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing a heavy scorched cowhide leather apron over a rolled-sleeve homespun linen tunic, reinforced leather trousers with knee patches, steel-toe smithing boots, thick heat-resistant leather gauntlets. Holding forged iron smithing tongs in one hand. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR textures.",
    "promptCinematic": "Dramatic chiaroscuro portrait of the grizzled village blacksmith standing before his blazing charcoal forge. Intense orange firelight carving deep shadows into his weathered, soot-stained face and muscular arms, glowing embers rising like fireflies around his leather apron, 35mm film photography, powerful artisan presence.",
    "promptVideo": "Slow-motion push-in on the blacksmith wiping sweat and soot from his brow with a thick leather forearm, then turning his smoldering gaze toward the camera with an unyielding nod as sparks from the forge dance in the background. 24fps cinematic footage."
  },
  {
    "id": "d-npc-mystic",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Town NPCs",
    "name": "Mysterious Hooded Mystic / Alchemist",
    "tagline": "Cloaked sorceress with glowing eyes, potion bandoliers & floating arcane reagents",
    "tags": [
      "mystic",
      "alchemist",
      "npc",
      "hooded",
      "potions",
      "arcana",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of a mysterious village mystic and alchemist NPC. Slender silhouette, wearing an oversized cowl hood casting deep shadow over her face, revealing only luminous glowing violet eyes and subtle runic cheek tattoos. Symmetrical neutral A-pose, arms slightly away from sides. Draped in layered tattered robes of deep indigo wool and crushed velvet, crisscrossed leather potion bandoliers holding glowing glass vials of crimson, emerald, and azure elixirs, dried raven talismans, enchanted bone charms dangling from belt. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Haunting cinematic hero portrait of the hooded mystic leaning over an ancient wooden counter. Violet arcane light spilling from glass potion vials onto her porcelain skin beneath the deep hood, swirling purple incense smoke curling around her fingertips, 35mm film grain, bewitching dark fantasy atmosphere.",
    "promptVideo": "Slow creeping push-in toward the hooded mystic as she raises an uncorked glowing azure vial, whispering an incantation that causes the liquid to glow brightly and cast pulsating caustic light patterns across her shrouded face. 24fps cinema footage."
  },
  {
    "id": "d-npc-scholar",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Town NPCs",
    "name": "Town Elder Scholar",
    "tagline": "Elder sage in fur-trimmed velvet robes, brass spectacles & massive ancient tome",
    "tags": [
      "scholar",
      "elder",
      "sage",
      "lore",
      "npc",
      "tome",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of an elderly town scholar NPC. Stooped wise posture, long cascading white beard reaching mid-chest, kind yet burdened green eyes, antique brass-rimmed spectacles resting on crooked nose. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing long heavy dark emerald velvet robes trimmed with wolf fur, embroidered gold sigils along hem, leather belt holding an inkwell, quill case, and brass astrological astrolabe. Holding a massive leather-bound chronicle tome with brass clasps. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Intimate hero portrait of the town elder scholar seated in a candlelit scriptorium surrounded by towering stacks of dusty parchment. Warm golden candlelight reflecting in his brass spectacles, fragile weathered hands turning an ancient brittle vellum page, 35mm film aesthetic, scholarly gravitas.",
    "promptVideo": "Slow upward tilt from the massive open grimoire on the wooden desk to the scholar's thoughtful face as he looks up, his eyes widening in grave realization of an ancient prophecy. 24fps cinematic footage, soft dust particles floating in golden light shafts."
  },
  {
    "id": "d-npc-merchant",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Town NPCs",
    "name": "Traveling Weapon Merchant",
    "tagline": "Nomadic arms dealer in patched furs with heavy wooden backpack frame of blades",
    "tags": [
      "merchant",
      "trader",
      "weapons",
      "backpack",
      "npc",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of a nomadic traveling arms merchant NPC. Hardy weathered traveler, rugged face with eye patch, scarred grin. Symmetrical neutral A-pose, arms 45 degrees from body. Wearing a layered wool traveling cloak, reinforced studded leather jerkin, fur-lined boots, fingerless gloves. Carrying a massive wooden pack-frame on his back meticulously strapped with an arsenal of weapons: notched broadswords, hunting bows, bundled javelins, round wooden buckler, copper coin purses and weighing scales hanging from hip. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Gritty cinematic portrait of the traveling merchant resting at a dark crossroads campfire. Firelight glinting off the dozens of steel blades strapped to his wooden pack frame, coins jingling between calloused fingers, mysterious knowing smirk, 35mm film photography, classic dark fantasy RPG mood.",
    "promptVideo": "Slow 360-degree orbiting camera circling the nomadic arms dealer as he unslings his heavy weapon pack with a heavy metallic clatter, presenting a gleaming damascus dagger to the camera with an inviting flourish. 24fps cinema capture."
  },
  {
    "id": "d-craft-anvil",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Crafting",
    "name": "Heavy Blacksmith Anvil on Tree Stump",
    "tagline": "300lb cast steel London-pattern anvil bolted to charred oak stump with iron staples",
    "tags": [
      "anvil",
      "blacksmith",
      "crafting",
      "steel",
      "forge",
      "diablo"
    ],
    "prompt3D": "Heavy professional blacksmith anvil and mounting base. 300-pound London-pattern forged steel anvil with elongated horn, flat face showing hammer rebound indentations, square pritchel and hardy holes, mounted securely atop a charred solid oak tree stump with forged iron U-staples and leather hammer holding loops. Centered subject, three-quarter view, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), PBR hardened steel, rust, and charred bark textures.",
    "promptCinematic": "Hero still of a massive steel anvil bathed in the glow of a nearby forge. Cold steel surface gleaming with orange reflections, tiny glowing sparks bouncing across the horn, dark shadows pooling beneath the charred stump, 35mm film grain, monumental industrial craft aesthetic.",
    "promptVideo": "Extreme close-up 60fps slowed to 24fps as a glowing red-hot steel billet is struck against the anvil face, detonating an explosive burst of orange sparks that spray across the frame in slow motion. Anamorphic lens, visceral sound design visualization."
  },
  {
    "id": "d-craft-forge",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Crafting",
    "name": "Blazing Charcoal Forge with Bellows",
    "tagline": "Stone hearth with white-hot charcoal bed, iron fire pot & double-chamber leather bellows",
    "tags": [
      "forge",
      "hearth",
      "bellows",
      "charcoal",
      "blacksmith",
      "crafting",
      "diablo"
    ],
    "prompt3D": "Medieval blacksmith open-hearth charcoal forge. Heavy fieldstone masonry hearth with arched smoke hood, cast-iron fire pot glowing with white-hot and orange incandescent lump charcoal, side tuyere air pipe connected to a large double-chamber leather and oak bellows with hand lever, attached iron tool holding rail. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), emissive hot coal textures, realistic soot, PBR materials.",
    "promptCinematic": "Dramatic hero photo looking into the glowing belly of an active charcoal forge. Brilliant yellow-white heat radiating from the coal core, tongues of flame licking up the soot-blackened stone chimney hood, bellows creaking in the shadows, 35mm film aesthetic, intense thermal contrast.",
    "promptVideo": "Slow tracking shot pushing toward the blazing forge hearth as the leather bellows expands and contracts with a deep pneumatic wheeze, stoking the coals into a furious blinding white-hot brilliance that throws shimmering heat waves across the screen. 24fps cinematic footage."
  },
  {
    "id": "d-craft-trough",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Crafting",
    "name": "Iron-Banded Water Cooling Trough",
    "tagline": "Hollowed oak log slack tub bound in forged iron hoops with rising steam wisps",
    "tags": [
      "slack-tub",
      "trough",
      "quenching",
      "water",
      "cooling",
      "crafting",
      "diablo"
    ],
    "prompt3D": "Blacksmith water cooling slack tub / quenching trough. Hollowed-out solid oak log trough bound by three heavy hand-forged iron structural hoops with hammered rivets, filled with murky quenching water, rising steam wisps, charred timber rim where hot irons have rested, drain bung plug at base. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), PBR wet wood, iron rust, and water surface textures.",
    "promptCinematic": "Moody hero photograph of a steaming blacksmith quenching trough inside a dark smithy. Eerie plumes of white vapor curling off the dark water surface, orange forge light glimmering on the rippling surface, 35mm film photography, tactile workshop ambiance.",
    "promptVideo": "Slow-motion 60fps slowed to 24fps shot as a glowing orange steel blade is plunged into the dark quenching water of the trough, instantly erupting with a furious hiss, boiling bubbles, and dense white steam billows that obscure the camera lens. 24fps cinema footage."
  },
  {
    "id": "d-craft-tools",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Crafting",
    "name": "Smithing Tongs, Hammers & Whetstones",
    "tagline": "Cross-peen forging hammers, curved bolt tongs, hardy cutters & natural whetstones",
    "tags": [
      "tools",
      "hammer",
      "tongs",
      "whetstone",
      "smithing",
      "crafting",
      "diablo"
    ],
    "prompt3D": "Set of medieval master blacksmith hand tools. Forged steel 3-pound cross-peen forging hammer with charred ash wood handle, heavy ball-peen hammer, long-handled curved jaw bolt tongs, flat-jaw tongs, hot cut hardy chisel, and a natural slate whetstone with oil sheen. Centered subject, level eye-height camera, arranged neatly, isolated on neutral light-grey background (#d8d8d8), PBR steel, polished wood, and mineral stone textures.",
    "promptCinematic": "Macro still of artisan smithing tools laid out on an oil-stained wooden workbench. The hardened steel hammer face displays a mirror polish ringed by dark forged scale, the fibrous grain of the ash wood handle caught in warm side light, 35mm film grain, exceptional tactile detail.",
    "promptVideo": "Slow macro glide across the row of hand-forged smithing tools, capturing the glint of steel edges and polished wooden grips under warm workshop lighting. 24fps cinema capture, shallow depth of field."
  },
  {
    "id": "d-craft-racks",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Crafting",
    "name": "Weapon Rack with Unfinished Blades",
    "tagline": "Heavy rough-timber A-frame rack holding raw forged sword blanks & half-ground axes",
    "tags": [
      "weapon-rack",
      "sword-blanks",
      "unfinished",
      "workshop",
      "crafting",
      "diablo"
    ],
    "prompt3D": "Workshop A-frame timber weapon storage rack. Heavy rough-hewn oak construction with slotted crossbars, displaying a collection of weapons in various stages of forging: black scale-covered sword blanks, half-ground flamberge blades, rough-forged battleaxe heads, spearpoints, tongs, and leather wrapping strips. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures, clean silhouette.",
    "promptCinematic": "Atmospheric photo of a rustic weapon rack standing in the shadows of a fortress armory. The raw hammered textures of unpolished iron blades catching glints of moonlight through high arrow slits, 35mm film aesthetic, gritty medieval workshop scene.",
    "promptVideo": "Smooth dolly track past the loaded timber weapon rack, moving across the silhouette of raw sword blanks and forged axe heads as dust motes drift peacefully through shafts of light. 24fps cinema footage."
  },
  {
    "id": "d-arcana-grimoire",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Arcana",
    "name": "Ancient Leather-Bound Spell Grimoire",
    "tagline": "Dragonhide folio with brass corner bosses, embossed demonic seal & vellum ribbons",
    "tags": [
      "grimoire",
      "spellbook",
      "magic",
      "arcana",
      "leather",
      "diablo"
    ],
    "prompt3D": "Ancient eldritch spell grimoire book. Heavy blackened dragonhide leather binding with embossed ouroboros and demonic sigils, antiqued brass protective corner brackets with filigree rivets, heavy dual brass hinged locking clasps, thick deckle-edged aged vellum pages with red inked marginalia, woven crimson silk bookmark ribbons. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR leather, metal, and parchment textures.",
    "promptCinematic": "Dramatic hero photograph of the ancient grimoire resting upon a dark velvet cloth. Faint violet luminescence bleeding through the cracked leather seams and page edges, illuminated demonic sigil glowing with soft magic, 35mm film photography, ominous occult aesthetic.",
    "promptVideo": "Slow creeping push-in toward the locked grimoire as the heavy brass clasp clicks open by itself with a sharp metallic snap, and the thick leather cover slowly creaks open to reveal glowing runic pages turning in an invisible breeze. 24fps cinematic footage."
  },
  {
    "id": "d-arcana-bookcase",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Arcana",
    "name": "Gothic Carved Bookcase with Scrolls",
    "tagline": "12ft carved dark oak gothic bookcase with pointed arch crest, vellum scrolls & jars",
    "tags": [
      "bookcase",
      "gothic",
      "scrolls",
      "arcana",
      "library",
      "shelves",
      "diablo"
    ],
    "prompt3D": "Gothic arcane library bookcase. 12-foot tall dark carved oak shelving unit with pointed arch tracery crest, carved gargoyle corbels, deep shelves packed with hundreds of ancient leather-bound tomes, rolled vellum scrolls with wax seals, glass jars holding glowing alchemical specimens, brass hourglasses, and dripping tallow candles. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
    "promptCinematic": "Moody atmospheric hero photograph looking up at a towering gothic bookcase in a ruined cathedral scriptorium. Warm candlelight catching the gilded spines of forgotten books, shadows stretching up into the ribbed vaulted ceiling, 35mm film grain, dark scholarly wonder.",
    "promptVideo": "Slow vertical pedestal crane shot ascending smoothly past the crammed shelves of ancient tomes and rolled scrolls, capturing the flicker of candlelight on aged leather and glowing potion jars. 24fps cinema movement."
  },
  {
    "id": "d-arcana-alchemy",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Arcana",
    "name": "Alchemy Distillation Table",
    "tagline": "Workbench with glass alembic retorts, coiled copper tubing & blue spirit burners",
    "tags": [
      "alchemy",
      "distillation",
      "alembic",
      "workbench",
      "arcana",
      "diablo"
    ],
    "prompt3D": "Medieval arcane alchemy distillation workbench. Heavy stained timber table with iron drawer pulls, featuring an intricate distillation apparatus: blown glass alembic retorts, coiled copper cooling condensers, glass receiver flasks containing boiling luminescent emerald and violet liquids, brass spirit burners with dancing blue flames, mortar and pestle with crushed minerals, scattered dried herbs. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR glass transmission, copper, and wood textures.",
    "promptCinematic": "Enchanting hero photograph of the alchemy distillation workbench in full operation. Glowing blue flame from the brass burner illuminating vibrant green boiling liquid inside the glass retort, steam condensing into droplets along the copper coil, 35mm film look, occult laboratory mastery.",
    "promptVideo": "Macro camera glide following a glowing droplet of distilled potion as it drips from the glass alembic spout into a bubbling crystalline receiver vial, sending ripples through luminous emerald elixir. 24fps cinema footage."
  },
  {
    "id": "d-arcana-lectern",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Arcana",
    "name": "Candle-Lit Wooden Cathedral Lectern",
    "tagline": "Carved oak pedestal stand holding open illuminated manuscript & dripping candles",
    "tags": [
      "lectern",
      "manuscript",
      "candles",
      "cathedral",
      "arcana",
      "diablo"
    ],
    "prompt3D": "Cathedral ecclesiastical wooden manuscript lectern. Slanted book rest carved with gothic trefoil arches supported by a turned solid oak pedestal base with carved claw feet. Holding an open illuminated Latin manuscript on vellum with gold leaf initials, twin forged iron candle sconce brackets holding dripping white tallow candles with warm burning wicks and wax stalactites. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), PBR textures.",
    "promptCinematic": "Hero still of an open illuminated gospel resting on the candle-lit cathedral lectern. Golden candlelight glinting off the raised gold leaf manuscript letters, thick layers of melted tallow cascading down the dark oak wood, 35mm film photography, reverent gothic tone.",
    "promptVideo": "Slow circular arc shot around the candle-lit lectern as the twin flame wicks flicker softly in a gentle draft, casting dancing shadows across the Latin illuminated text. 24fps cinematic footage."
  },
  {
    "id": "d-arcana-altar",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Arcana",
    "name": "Glowing Enchanting Altar",
    "tagline": "Hexagonal runic stone altar table with pulsating mana grooves & floating runes",
    "tags": [
      "altar",
      "enchanting",
      "runes",
      "mana",
      "magic",
      "arcana",
      "diablo"
    ],
    "prompt3D": "Dark fantasy enchanting altar pedestal. Hexagonal carved black obsidian stone monument, intricately carved channels and geometric sigils inlaid with glowing sapphire mana crystals, central circular depression for weapon imbuement, floating translucent runic glyphs slowly rotating above the stone surface. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), emissive rune glow, PBR dark stone and crystal textures.",
    "promptCinematic": "Spectacular hero photograph of the enchanting altar blazing with arcane energy in an ancient subterranean vault. Brilliant cyan and violet light pulsing from the obsidian runes, casting mystical reflections against damp stone cavern walls, 35mm film aesthetic, magical power.",
    "promptVideo": "Slow-motion push-in toward the center of the enchanting altar as the runic grooves flare with intense azure luminescence and the floating magical glyphs spin in harmonic convergence. 24fps cinema capture."
  },
  {
    "id": "d-mage-staff",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Mage Gear",
    "name": "Ornate Crystalline Staff",
    "tagline": "Gnarled elderwood staff crowned with levitating uncut amethyst crystal in gold",
    "tags": [
      "staff",
      "mage",
      "crystal",
      "elderwood",
      "caster",
      "magic",
      "diablo"
    ],
    "prompt3D": "High-tier wizard spellcasting staff. Slender gnarled petrified elderwood shaft wrapped in spiral gold wire and dark leather grip, crowned by an ornate cast bronze armature cradling a raw, uncut amethyst crystal cluster that levitates freely with pulsating violet energy particles, bronze pointed butt spike. Centered subject, vertical orientation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood, metal, and translucent crystal maps.",
    "promptCinematic": "Hero photograph of the crystalline staff held upright against a dark starry void. The raw amethyst crystal apex crackling with miniature violet lightning arcs, soft purple glow illuminating the gnarled elderwood grain, 35mm film grain, high-fantasy sorcery aesthetic.",
    "promptVideo": "Vertical pan ascending slowly up the twisted elderwood staff, passing the wire wrap and leather grip, arriving at the levitating amethyst crown as it pulses with a wave of violet energy that ripples outward across the lens. 24fps cinema footage."
  },
  {
    "id": "d-mage-wand",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Mage Gear",
    "name": "Engraved Bone & Silver Wand",
    "tagline": "Slender ancient dragon-bone wand carved with celestial glyphs & sterling filigree",
    "tags": [
      "wand",
      "bone",
      "silver",
      "glyphs",
      "mage",
      "diablo"
    ],
    "prompt3D": "Masterwork battlemage spellcasting wand. 14-inch slender wand carved from ancient ivory dragon bone, etched along its length with glowing celestial runes inlaid with powdered lapis lazuli, sterling silver filigree pommel cap set with a cabochon sapphire, braided silver wire handle wrap. Centered subject, diagonal presentation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR bone, silver, and gemstone textures.",
    "promptCinematic": "Macro still of the engraved bone wand resting on dark black velvet. The sterling silver filigree reflecting pinpoint star-like highlights, faint blue light glowing from within the carved celestial glyphs, 35mm film photography, exquisite craftsmanship.",
    "promptVideo": "Slow macro tracking shot gliding from the silver pommel along the engraved bone shaft to the needle-sharp tip, which crackles with a tiny electric spark of blue mana. 24fps cinema footage."
  },
  {
    "id": "d-mage-orb",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Mage Gear",
    "name": "Floating Arcane Focus / Orb",
    "tagline": "Swirling obsidian & glass sphere crackling with internal lightning above brass ring",
    "tags": [
      "orb",
      "arcane-focus",
      "floating",
      "lightning",
      "mage",
      "diablo"
    ],
    "prompt3D": "Floating off-hand arcane focus orb. Spherical hollow orb of smoky quartz and cracked obsidian with a core of swirling violet plasma and miniature lightning storms, surrounded by two concentric counter-rotating gyroscopic rings of engraved antiqued brass. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), emissive plasma core, PBR glass and brass textures.",
    "promptCinematic": "Dramatic hero photo of the floating arcane orb hovering just above an open palm. Crackling arcs of violet lightning illuminating the sorcerer's fingertips, reflections warping across the smoky glass sphere, 35mm film aesthetic, magical mysticism.",
    "promptVideo": "Slow orbiting camera circling the floating arcane orb as its concentric brass rings spin smoothly in opposite directions while internal plasma flares illuminate the lens with anamorphic purple streaks. 24fps cinema capture."
  },
  {
    "id": "d-mage-spellbook",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Mage Gear",
    "name": "Illuminated Arcane Spellbook",
    "tagline": "Open vellum grimoire displaying transmutation circles, gold-leaf & glowing sigils",
    "tags": [
      "spellbook",
      "transmutation",
      "illuminated",
      "sigils",
      "mage",
      "diablo"
    ],
    "prompt3D": "Open arcane spellbook ready for casting. Bound in royal blue morocco leather with silver tooling, displaying two open thick vellum pages with intricate red-and-gold transmutation circles, runic calligraphy, astronomical planetary charts, and glowing ethereal sigils hovering 2mm off the page. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR leather, gold leaf, and parchment textures.",
    "promptCinematic": "Hero still looking down into the open arcane spellbook on an altar. Transmutation diagrams and celestial charts shimmering with golden magical incandescence, delicate vellum fibers visible under raking light, 35mm film grain, scholarly arcane wonder.",
    "promptVideo": "Gentle slow-motion zoom into the transmutation circle on the open page as the golden geometric lines begin to rotate and glow with intense magical illumination. 24fps cinematic footage."
  },
  {
    "id": "d-mage-amulet",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Mage Gear",
    "name": "Glowing Enchanted Runic Amulet",
    "tagline": "Antique gold pendant holding faceted star ruby wrapped in protective warding runes",
    "tags": [
      "amulet",
      "ruby",
      "warding",
      "jewelry",
      "mage",
      "pendant",
      "diablo"
    ],
    "prompt3D": "Enchanted arcane protective amulet. Heavy ornate pendant cast in antique 22k gold, featuring an openwork filigree bezel holding a large faceted star ruby that emits a deep inner crimson pulse, surrounded by etched protective warding runes, hung on a heavy gold link chain with dragon-head clasp. Centered subject, level camera, frontal view, isolated on neutral light-grey background (#d8d8d8), PBR gold, gemstone refraction, and ruby emission.",
    "promptCinematic": "Macro hero photograph of the ruby amulet resting against dark chainmail. Brilliant red internal facets refracting candlelight into sharp crimson caustics, intricate gold filigree showing ancient hand-chiseled tooling, 35mm film photography, opulent relic.",
    "promptVideo": "Macro orbit around the suspended ruby amulet, capturing the fiery internal star reflection shifting across the gemstone facets as it emits a gentle, rhythmic crimson pulse. 24fps cinema footage."
  },
  {
    "id": "d-rogue-bow",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Composite Recurve Bow",
    "tagline": "Laminated horn, wood & sinew recurve bow with snake-skin backing & bone tips",
    "tags": [
      "bow",
      "recurve",
      "composite",
      "rogue",
      "archer",
      "diablo"
    ],
    "prompt3D": "Mastercraft composite recurve bow. Multi-layer laminate construction of horn belly, maple wood core, and sinew backing wrapped in dried viper snake-skin, reinforced carved bone nocks with double string grooves, contoured leather riser grip with mother-of-pearl arrow pass, Flemish twist Dacron bowstring with brass nocking points. Centered subject, diagonal profile view, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR materials.",
    "promptCinematic": "Hero still of the recurve bow strung and resting against a woodland rock. The iridescent scales of the viper-skin backing catching dappled forest sunlight, taut bowstring vibrating softly in the wind, 35mm film aesthetic, deadly precision hunting gear.",
    "promptVideo": "Slow-motion tracking shot moving along the elegant curved limbs of the recurve bow from nock to handle as an arrow is knocked and drawn back with smooth, lethal grace. 24fps cinema capture."
  },
  {
    "id": "d-rogue-crossbow",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Heavy Siege Crossbow (Arbalest)",
    "tagline": "Heavy iron & walnut arbalest with forged steel prod stirrup & mechanical windlass",
    "tags": [
      "crossbow",
      "arbalest",
      "siege",
      "mechanics",
      "rogue",
      "diablo"
    ],
    "prompt3D": "Heavy siege crossbow / arbalest. Carved solid walnut stock with brass lock plates and trigger lever, heavy forged spring-steel prod bow with foot stirrup for cocking, geared mechanical windlass crank assembly with dual cords and brass pulleys, bone arrow track inlay with steel bolt retention spring. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR wood, steel, and brass textures.",
    "promptCinematic": "Hero photo of the heavy siege arbalest resting on a stone battlement. The oily sheen on the thick steel prod reflecting the cold overcast sky, massive mechanical gears of the windlass showing heavy precision, 35mm film photography, brutal medieval engineering.",
    "promptVideo": "Slow tracking shot along the walnut stock of the arbalest as a heavy steel-tipped bolt is slid into the bone groove and the trigger lever clicks into locked tension with a heavy mechanical snap. 24fps cinematic footage."
  },
  {
    "id": "d-rogue-quiver",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Leather Quiver with Barbed Arrows",
    "tagline": "Hardened leather hip quiver filled with goose-feather fletched barbed hunting arrows",
    "tags": [
      "quiver",
      "arrows",
      "barbed",
      "fletching",
      "rogue",
      "archer",
      "diablo"
    ],
    "prompt3D": "Hardened boiled leather archer's quiver and arrows. Cylindrical hip quiver crafted from dark brown cuir-bouilli leather stamped with floral geometric tooling, reinforced iron base cap, adjustable shoulder harness with forged bronze buckle, holding twenty ash-shaft hunting arrows with black-and-grey goose-feather fletchings, silk thread bindings, and hand-forged steel barbed bodkin arrowheads. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures.",
    "promptCinematic": "Atmospheric still of the leather quiver slung over a ranger's shoulder in a shadowy pine forest. Morning dew drops clinging to the dark goose fletchings, wickedly sharp steel bodkin points glinting in raking sunbeams, 35mm film grain, rugged survival aesthetic.",
    "promptVideo": "Smooth vertical pan gliding up the tooled leather quiver body to reveal the dense crown of goose-feather fletchings, as an arrow is plucked smoothly upward into the air. 24fps cinema footage."
  },
  {
    "id": "d-rogue-daggers",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Dual Assassin Daggers",
    "tagline": "Matched damascus punch daggers with serrated spines, fuller & blackened sharkskin grip",
    "tags": [
      "daggers",
      "assassin",
      "damascus",
      "blades",
      "rogue",
      "dual-wield",
      "diablo"
    ],
    "prompt3D": "Pair of matched masterwork assassin daggers. 10-inch double-edged folded damascus steel blades with swirling raindrop pattern, deep central fullers, wicked serrated thumb spines near the ricasso, downward-curving blackened steel crossguards, handles wrapped in ray/sharkskin with twisted silver wire, faceted steel skull-crusher pommels. Centered subject, crossed X-layout, level camera, isolated on neutral light-grey background (#d8d8d8), PBR damascus steel and sharkskin maps.",
    "promptCinematic": "Hero still of dual damascus daggers crossed over black silk. Razor-honed mirrored edges catching pinpoint highlights, undulating damascus steel grain rippling with predatory beauty, 35mm film photography, lethal assassin weaponry.",
    "promptVideo": "Slow-motion 360-degree orbit around the crossed damascus daggers, with light reflections traveling like liquid along the razor-sharp cutting edges and serrated spines. 24fps cinema capture."
  },
  {
    "id": "d-rogue-knives",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Poisoned Throwing Knives",
    "tagline": "Balanced leaf-blade throwing daggers with grooved blood channels coated in venom",
    "tags": [
      "throwing-knives",
      "poison",
      "venom",
      "blades",
      "rogue",
      "diablo"
    ],
    "prompt3D": "Set of three perfectly balanced throwing knives. Single-piece skeletonized spring-steel construction with aerodynamic leaf-shaped blades, tapered center of gravity, precision grooved blood channels coated with a glistening viscous emerald green serpent venom residue, cord-wrapped finger grips with lanyard loops. Centered subject, fanned arrangement, level camera, isolated on neutral light-grey background (#d8d8d8), PBR steel, paracord, and green venom glossiness textures.",
    "promptCinematic": "Macro hero shot of three poisoned throwing knives stuck into a weathered oak post. Glistening green venom droplet suspended at the tip of the center blade, cold steel bevels contrasting with the toxic sheen, 35mm film grain, lethal danger.",
    "promptVideo": "Extreme close-up as a viscous droplet of green venom slides slowly down the blade fuller to the needle-sharp point, dripping off into the shadows in slow motion. 24fps cinema footage."
  },
  {
    "id": "d-rogue-armor",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Rogue Gear",
    "name": "Supple Studded Leather Armor",
    "tagline": "Form-fitting boiled leather cuirass with brass dome studs & articulated pauldrons",
    "tags": [
      "armor",
      "studded-leather",
      "cuirass",
      "rogue",
      "shadow",
      "diablo"
    ],
    "prompt3D": "Complete set of mastercrafted studded leather armor on wooden armor stand. Form-fitting cuirass of blackened vegetable-tanned cuir-bouilli boiled leather, reinforced across the chest with rows of antiqued brass domed studs, articulated layered leather shoulder pauldrons, supple suede side lacing for silent movement, matching studded bracers and greaves with brass buckle straps. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), PBR leather and brass textures.",
    "promptCinematic": "Hero still of the studded leather armor bathed in soft moonlight. Subtle oil sheen on the blackened leather hide, brass dome studs catching golden glints, supple flexibility visible in the articulated joints, 35mm film photography, master of shadows look.",
    "promptVideo": "Slow circular orbit around the studded leather armor stand, tracing the hand-stitched seams and brass studs under dramatic moody rim lighting. 24fps cinema capture."
  },
  {
    "id": "d-paladin-sword",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Warrior Gear",
    "name": "Two-Handed Flamberge Greatsword",
    "tagline": "6ft undulating wave-blade zweihander with side-ring crossguard & leather ricasso",
    "tags": [
      "flamberge",
      "greatsword",
      "zweihander",
      "two-handed",
      "paladin",
      "warrior",
      "diablo"
    ],
    "prompt3D": "Monumental two-handed flamberge greatsword (zweihander). 6-foot overall length with undulating flame-shaped double-edged carbon steel blade, flared parrying hooks (parierhaken) above a brown leather-wrapped ricasso grip, massive forged steel crossguard with dual protective side rings, extended two-handed hardwood grip wrapped in corded oxblood leather, heavy fluted octagonal scent-stopper steel pommel. Centered subject, vertical diagonal presentation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR steel and leather maps.",
    "promptCinematic": "Hero photograph of the flamberge greatsword planted point-down into cracked stone before a ruined fortress. The serpentine wave-blade gleaming with cold steel reflections, worn leather ricasso showing the grip of a veteran warrior, 35mm film aesthetic, legendary weapon presence.",
    "promptVideo": "Slow upward tilt starting from the wavy flamberge blade tip grounded in stone, gliding up the undulating cutting edge, past the parrying hooks, to the massive crossguard and leather hilt. 24fps cinematic camera motion."
  },
  {
    "id": "d-paladin-axe",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Warrior Gear",
    "name": "Notched Double-Bitted Battleaxe",
    "tagline": "Heavy bearded double-bit axe with chipped cutting edges & rune-carved ash haft",
    "tags": [
      "battleaxe",
      "axe",
      "double-bitted",
      "warrior",
      "runes",
      "diablo"
    ],
    "prompt3D": "Heavy double-bitted bearded battleaxe. Massive forged carbon steel axe head with twin crescent cutting edges showing battle notches, etched runic protective warding inscriptions along the central eye socket, heavy iron reinforcement side splints, 36-inch straight ash wood haft carved with interlocking Nordic knotwork, wire-wrapped lower grip with iron pommel ring. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR steel and carved wood textures.",
    "promptCinematic": "Hero still of the heavy battleaxe resting against a shattered wooden shield. Deep battle scars and microscopic chips along the tempered steel bit, the grain of the ash wood haft catching warm firelight, 35mm film grain, brutal warrior aesthetic.",
    "promptVideo": "Slow-motion orbit around the double-bitted axe head as warm embers from a nearby fire float past the scarred steel blade and rune-engraved eye. 24fps cinema capture."
  },
  {
    "id": "d-paladin-shield",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Warrior Gear",
    "name": "Engraved Holy Tower Shield",
    "tagline": "Curved oak & banded steel tower scutum engraved with sunburst holy crest & battle scars",
    "tags": [
      "shield",
      "tower-shield",
      "holy",
      "sunburst",
      "paladin",
      "warrior",
      "diablo"
    ],
    "prompt3D": "Massive paladin holy tower scutum shield. Curved 48-inch vertical body of laminated oak covered in heavy rawhide, reinforced with a heavy perimeter rim of riveted forged steel, central raised steel boss engraved with an radiant sunburst cross emblem, battle scars, sword gouges, interior padded leather arm strap and forged iron hand grip. Centered subject, three-quarter view, level camera, isolated on neutral light-grey background (#d8d8d8), PBR wood, steel, and chipped enamel textures.",
    "promptCinematic": "Hero photo of the holy tower shield standing upright in a cathedral courtyard. Shaft of sunlight piercing the gloom to illuminate the engraved golden sunburst crest, deep sword dents and arrow splinter marks testifying to survived sieges, 35mm film photography, righteous guardian presence.",
    "promptVideo": "Slow push-in toward the engraved sunburst crest of the towering shield as light breaks through dark storm clouds above, reflecting brilliantly off the polished steel boss. 24fps cinematic footage."
  },
  {
    "id": "d-paladin-flail",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Warrior Gear",
    "name": "Spiked Morningstar Flail",
    "tagline": "Spiked cast-iron ball suspended by hardened steel chain from iron-bound hardwood handle",
    "tags": [
      "flail",
      "morningstar",
      "spikes",
      "chain",
      "warrior",
      "diablo"
    ],
    "prompt3D": "Medieval spiked morningstar war flail. Solid cast-iron 4-inch spherical head studded with sixteen pyramidal crushing spikes, attached by a 14-inch heavy-duty twisted steel link chain with swivel eyelet to an iron-bound ash hardwood handle, studded pommel cap with braided leather wrist lanyard. Centered subject, level camera, dynamic S-curve chain presentation, isolated on neutral light-grey background (#d8d8d8), PBR steel, rust, and wood textures.",
    "promptCinematic": "Hero still of the spiked morningstar flail resting on a blood-stained flagstone floor. Cold iron spikes glistening under harsh torchlight, heavy steel chain coiled menacingly around the wooden shaft, 35mm film grain, visceral medieval combat instrument.",
    "promptVideo": "Slow-motion tracking shot moving along the heavy links of the steel chain to the spiked iron sphere as it swings with slow, hypnotic weight in mid-air. 24fps cinema footage."
  },
  {
    "id": "d-paladin-plate",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Warrior Gear",
    "name": "Full Gothic Fluted Plate Armor",
    "tagline": "15th-century fluted gothic plate harness with sallet helmet & bellows visor",
    "tags": [
      "plate-armor",
      "gothic",
      "sallet",
      "harness",
      "paladin",
      "knight",
      "diablo"
    ],
    "prompt3D": "Complete suit of 15th-century gothic fluted full plate armor on wooden display stand. Cold-rolled tempered steel construction with elaborate decorative fluting ribs, articulated cuirass with plackart and fauld, layered gothic pauldrons, fully articulated gauntlets with brass knuckledusters, poleyns, greaves, and pointed sabatons. Crowned by a German sallet helmet with articulated bellows visor and matching beaver gorget. Centered subject, three-quarter view, level eye-height camera, isolated on neutral light-grey background (#d8d8d8), mirror-polished PBR steel with blued trim.",
    "promptCinematic": "Monumental hero photograph of the full gothic plate armor standing in a grand cathedral apse. Stained glass window light reflecting across the radiant fluted steel plates in jewel tones, majestic knightly silhouette, 35mm film photography, museum-grade armor aesthetic.",
    "promptVideo": "Slow ascending pedestal crane shot moving up the fluted gothic plate armor from the pointed sabatons, past the articulated cuirass, to the sharp gaze of the sallet helmet visor as volumetric light rays filter through cathedral arches. 24fps cinematic footage."
  },
  {
    "id": "d-crypt-cage",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Hanging Iron Torture Gibbet Cage",
    "tagline": "Spherical iron bar basket suspended by heavy rusted chains with hinged padlock hatch",
    "tags": [
      "gibbet",
      "cage",
      "torture",
      "dungeon",
      "crypt",
      "iron",
      "diablo"
    ],
    "prompt3D": "Dungeon hanging iron torture gibbet cage. Spherical cage fabricated from curved wrought-iron flat bars joined by heavy domed rivets, hinged bottom entrance hatch with rusted padlock hasp, suspended from a heavy-link iron ceiling chain with swivel hook, inside holding skeletal remains in tattered rags. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR rusted iron, bone, and decay textures.",
    "promptCinematic": "Creepy hero photograph of the hanging iron gibbet cage swaying gently in a damp stone dungeon corridor. Distant torchlight casting long warped cage-bar shadows across weeping mossy walls, 35mm film grain, terrifying dark fantasy dungeon horror.",
    "promptVideo": "Slow-motion eerie orbit around the suspended gibbet cage as it creaks and turns slowly in a draft, its rusted iron bars casting shifting shadows through low-hanging subterranean fog. 24fps cinema capture."
  },
  {
    "id": "d-crypt-sarcophagus",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Cracked Stone Sarcophagus with Effigy",
    "tagline": "Limestone tomb chest with broken lid showing knightly carved effigy & skeletal remains",
    "tags": [
      "sarcophagus",
      "tomb",
      "crypt",
      "effigy",
      "limestone",
      "dungeon",
      "diablo"
    ],
    "prompt3D": "Ancient crypt stone burial sarcophagus. Heavy weathered limestone tomb box with carved gothic arch relief panels along sides, heavy cracked slab lid carved with the reclining funerary effigy of an armored templar knight, lid shifted askew revealing the dark interior cavity with skeletal remains and a rusted sword hilt. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), PBR cracked stone, moss, and dust maps.",
    "promptCinematic": "Moody hero photograph of the cracked stone sarcophagus resting on the damp flagstones of a crypt. Cold greenish graveyard mist swirling around the base, faint spectral light emanating from within the cracked fissure of the tomb lid, 35mm film photography, chilling gothic horror.",
    "promptVideo": "Slow creeping push-in toward the shifted lid of the ancient stone sarcophagus as subterranean mist pours over the edges like dry ice and a faint cyan soul light pulses within. 24fps cinema capture."
  },
  {
    "id": "d-crypt-brazier",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Hanging Iron Brazier Chandelier",
    "tagline": "Circular forged iron chandelier with spiked rim holding burning coal braziers & chains",
    "tags": [
      "brazier",
      "chandelier",
      "fire",
      "chains",
      "dungeon",
      "crypt",
      "diablo"
    ],
    "prompt3D": "Heavy dungeon hanging fire brazier chandelier. Circular wrought-iron ring (5ft diameter) studded with outward-curving spikes, holding four perforated cast-iron burning coal bowls glowing with incandescent coals and crackling flames, suspended by four heavy forged steel chains meeting at a central ceiling ring. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), emissive fire and coal textures, soot, PBR iron.",
    "promptCinematic": "Dramatic low-angle hero photograph looking up at the burning iron brazier chandelier suspended in a dark crypt vault. Roaring orange flames and fiery embers rising toward the soot-blackened stone ribbed ceiling, dramatic chiaroscuro shadows, 35mm film grain, authentic dungeon atmosphere.",
    "promptVideo": "Slow descending crane shot moving down past the hanging iron brazier chandelier as tongues of orange flame lick upward and glowing embers drift lazily past the camera lens into the darkness below. 24fps cinematic footage."
  },
  {
    "id": "d-crypt-portcullis",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Spiked Heavy Iron Portcullis",
    "tagline": "Vertical sliding grate of spiked heavy iron beams raised by heavy winch chains",
    "tags": [
      "portcullis",
      "iron-gate",
      "spikes",
      "dungeon",
      "gate",
      "diablo"
    ],
    "prompt3D": "Heavy fortified dungeon iron portcullis gate. Grid of thick forged square iron vertical bars terminating in vicious tapered spear points at the base, interlocking horizontal iron cross-straps fastened with heavy peened rivets, dual heavy link lifting chains running up into stone guide grooves. Centered subject, frontal three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), PBR pitted iron, rust, and oil textures.",
    "promptCinematic": "Ominous hero photo of the spiked iron portcullis raised halfway, framing a dark bloodstained altar room beyond. Torchlight glinting off the sharp downward-facing iron spikes, water dripping from stone arches, 35mm film aesthetic, dungeon entrance tension.",
    "promptVideo": "Low-angle camera tracking forward toward the suspended portcullis as the winch chains rattle loudly and the massive iron gate slams down into the stone floor with a deafening crash, throwing dust into the air. 24fps cinema footage."
  },
  {
    "id": "d-crypt-torch",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Eerie Dragon-Claw Wall Sconce Torch",
    "tagline": "Forged iron dragon-claw wall bracket holding pitch-soaked burning timber torch",
    "tags": [
      "torch",
      "sconce",
      "dragon-claw",
      "dungeon",
      "fire",
      "lighting",
      "diablo"
    ],
    "prompt3D": "Medieval dungeon wall torch and mounting sconce. Elaborate hand-forged black iron wall bracket shaped as a snarling dragon claw gripping a pitch-soaked wrapped linen and pine timber torch, realistic animated flame mesh with smoke plume and dripping pitch embers, wall mount plate with square iron masonry spikes. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), emissive flame textures, soot, PBR materials.",
    "promptCinematic": "Moody macro still of the dragon-claw wall sconce torch blazing against a weeping stone wall. Orange flame illuminating trickles of moisture and black soot on the ancient limestone blocks, dripping flaming pitch creating tiny sparks, 35mm film photography, intense chiaroscuro.",
    "promptVideo": "Slow tracking shot passing the burning dragon-claw torch as the flame wavers in a sudden subterranean draft, casting elongated demonic shadows dancing across the stone masonry corridor. 24fps cinema capture."
  },
  {
    "id": "d-crypt-altar",
    "domain": "diablo",
    "category": "prop",
    "subCategory": "Dungeons",
    "name": "Cursed Blood Altar",
    "tagline": "Monolithic black obsidian sacrificial slab with carved blood collection troughs & skull basin",
    "tags": [
      "blood-altar",
      "sacrificial",
      "obsidian",
      "crypt",
      "cursed",
      "dark-magic",
      "diablo"
    ],
    "prompt3D": "Unholy demonic sacrificial blood altar monument. Monolithic rectangular slab of polished black obsidian, carved perimeter blood collection drainage gutters leading to a central hollowed skull basin, sides etched with glowing crimson demonic runes and screaming faces in relief, bloodstains dried into the crevices, black iron skull-topped candle pillars at corners. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR obsidian, blood gloss, and emissive runes.",
    "promptCinematic": "Horrifying hero photograph of the cursed blood altar inside a subterranean catacomb. Viscous crimson liquid glistening inside the carved stone channels, glowing blood runes pulsing with dark malevolent power, skulls piled around the obsidian base, 35mm film grain, high-budget dark fantasy horror.",
    "promptVideo": "Slow creeping push-in over the surface of the obsidian altar as fresh blood slowly fills the carved runic channels, igniting them into a furious pulsing crimson luminescence that casts hellish red light across the entire chamber. 24fps cinematic footage."
  },
  {
    "id": "d-foe-skeleton",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Enemies & Bosses",
    "name": "Skeleton Warrior with Rusted Scythe",
    "tagline": "Animated desiccated skeleton in rusted chainmail coif with rusted scythe & rotten shield",
    "tags": [
      "skeleton",
      "undead",
      "enemy",
      "scythe",
      "chainmail",
      "minion",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of an undead skeleton warrior. Bleached human skeleton anatomy with leathery tendon fragments and desiccated cartilage, hollow skull with glowing pinpoint yellow eye motes. Symmetrical neutral A-pose with arms 45 degrees away from ribs, feet shoulder-width apart. Wearing fragments of corroded iron chainmail coif and hauberk with missing links, rotting leather belt. Holding a two-handed agricultural harvest scythe with pitted rusted iron blade and cracked wooden snath in one hand, carrying a rotten wood buckler on other forearm. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette for 3D animation, PBR bone, rust, and wood textures.",
    "promptCinematic": "Terrifying hero photograph of an undead skeleton warrior emerging from the shadows of a ruined crypt. Pinpoint yellow soul lights blazing inside deep hollow eye sockets, rusted chainmail glinting in cold moonlight, razor-sharp rusted scythe raised menacingly, 35mm film photography, classic gothic undead horror.",
    "promptVideo": "Unsettling stop-motion-like jerky tracking shot as the skeleton warrior advances forward out of the graveyard mist, its jaw clattering open in a silent scream while the rusted scythe blade gleams in the pale moonlight. 24fps cinema capture."
  },
  {
    "id": "d-foe-cultist",
    "domain": "diablo",
    "category": "character",
    "subCategory": "Enemies & Bosses",
    "name": "Hooded Blood Cultist",
    "tagline": "Sinister ritualist in crimson/charcoal robes, carved bone mask & wavy ritual kris dagger",
    "tags": [
      "cultist",
      "blood-cult",
      "hooded",
      "ritualist",
      "dagger",
      "enemy",
      "diablo"
    ],
    "prompt3D": "Full body 3D game character model of a sinister blood cultist ritualist. Symmetrical neutral A-pose with arms 45 degrees from torso. Draped in voluminous layered hooded robes of dark charcoal wool and dried blood-soaked crimson silk, hem frayed and spattered with gore. Face concealed by a carved animal bone mask etched with blasphemous sigils. Wearing leather wrist wraps, ceremonial bone talismans, and holding a wavy flame-shaped ceremonial kris dagger with brass hilt in right hand, left hand holding an iron incense censer. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Ominous cinematic portrait of the blood cultist standing in the center of an unholy ritual circle. Flickering red candlelight reflecting off the grotesque carved bone mask, crimson robes rustling in a subterranean wind, wavy dagger held aloft dripping with fresh dark ichor, 35mm film grain, occult horror masterpiece.",
    "promptVideo": "Slow-motion push-in toward the hooded cultist as he lowers his wavy ritual dagger toward an altar, whispering dark incantations as his carved bone mask turns slowly toward the camera with chilling malevolence. 24fps cinematic footage."
  },
  {
    "id": "d-foe-brute",
    "domain": "diablo",
    "category": "creature",
    "subCategory": "Enemies & Bosses",
    "name": "Lumbering Demonic Brute",
    "tagline": "Colossal muscular horned demon with leathery charcoal skin, fiery veins & stone club",
    "tags": [
      "demonic-brute",
      "demon",
      "creature",
      "boss",
      "horns",
      "stone-club",
      "diablo"
    ],
    "prompt3D": "Full body 3D game creature model of a colossal demonic brute. Massive hunched muscular anatomy with leathery charcoal-grey rhinoceros-like hide, volcanic cracked veins glowing with molten orange lava beneath the skin, two massive curled ram-like horns protruding from brow, glowing burning ember eyes, gaping fanged maw with protruding tusks. Symmetrical neutral three-quarter combat stance, arms apart, heavy clawed fists, hooved rear legs. Wielding an immense rough-hewn stone pillar club bound in iron chains. Centered subject, level camera at chest height, isolated on pure neutral light-grey background (#d8d8d8), clean silhouette for monster rigging, high-fidelity PBR skin and molten emission textures.",
    "promptCinematic": "Epic hero photograph of the towering demonic brute roaring amidst the ruins of a burning fortress. Molten veins pulsing across its massive chest and shoulders, smoke and sulfur curling from its gaping fanged jaws, holding the colossal stone club aloft against an apocalyptic red sky, 35mm film photography, colossal creature feature.",
    "promptVideo": "Terrifying low-angle tracking shot as the colossal demonic brute stomps forward, shaking the camera with heavy footfalls as it roars and slams its massive stone club into the ground, detonating a shockwave of glowing sparks and shattered debris. 24fps cinema capture."
  },
  {
    "id": "d-foe-abomination",
    "domain": "diablo",
    "category": "creature",
    "subCategory": "Enemies & Bosses",
    "name": "Grotesque Crypt Abomination",
    "tagline": "Fused monstrosity of stitched corpses, mismatched limbs, distended ribcage maw & cleaver",
    "tags": [
      "abomination",
      "flesh-golem",
      "stitched",
      "undead",
      "creature",
      "horror",
      "diablo"
    ],
    "prompt3D": "Full body 3D game creature model of a grotesque crypt flesh abomination. Towering asymmetrical monster assembled from stitched corpses and necrotic flesh, crude thick iron suture wires binding mismatched torsos and limbs, swollen bloated belly split open to reveal an internal ribcage maw with jagged teeth, three asymmetrical arms (one massive swollen arm holding a rusted meat cleaver, one withered skeletal arm, one hooked claw), weeping sores, embalming fluid containers strapped to back with brass pipes. Centered subject, wide combat stance, level camera, isolated on pure neutral light-grey background (#d8d8d8), PBR necrotic flesh, rusted iron, and gore textures.",
    "promptCinematic": "Horrific cinematic hero photograph of the flesh abomination lumbering down a flooded crypt corridor. Green embalming fluid dripping from its stitched seams into murky standing water, massive rusted meat cleaver scraping along the stone wall, 35mm film grain, body horror masterpiece.",
    "promptVideo": "Slow-motion creeping low-angle shot as the massive flesh abomination drags its rusted cleaver across the wet flagstones, the gaping ribcage maw in its chest pulsing and snapping with foul guttural growls. 24fps cinema capture."
  },
  {
    "id": "d-boss-gatekeeper",
    "domain": "diablo",
    "category": "creature",
    "subCategory": "Enemies & Bosses",
    "name": "Terrifying Dungeon Gatekeeper Boss",
    "tagline": "Towering ancient armored death knight archdemon with flaming zweihander & skull armor",
    "tags": [
      "gatekeeper",
      "boss",
      "death-knight",
      "archdemon",
      "flaming-sword",
      "diablo"
    ],
    "prompt3D": "Full body 3D game boss model of the Dungeon Gatekeeper. 10-foot tall demonic death knight champion in colossal blackened baroque plate armor encrusted with screaming skull motifs and soul gems. Four curved obsidian horns arching backward from a horned dread helm, hollow eye slits blazing with incandescent blue soul-fire, expansive tattered cape of flayed soul-cloth billowing behind. Standing in an imposing combat stance, wielding an immense two-handed executioner greatsword enveloped in unholy blue ethereal flames. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean silhouette for boss rigging, PBR materials with emissive soul-fire.",
    "promptCinematic": "Awe-inspiring cinematic hero photograph of the Dungeon Gatekeeper Boss standing at the threshold of the abyss. Massive executioner greatsword blazing with ethereal soul fire that casts cascading cyan illumination across his towering black plate armor, flayed cape billowing in an unnatural vortex, 35mm film photography, ultimate dark fantasy boss encounter.",
    "promptVideo": "Epic low-angle slow-motion crane shot circling the towering Gatekeeper Boss as he slowly draws his flaming greatsword across the stone threshold, igniting a trail of blue fire across the floor while his soul-fire eyes flare with blinding intensity. 24fps cinema capture, monumental scale."
  },
  {
    "id": "fg-char-01",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Ari — The Adventurous Free Spirit",
    "tagline": "28yo travel blogger & yoga instructor; Stage 1 flowy boho maxi dress, Stage 2 hike sundress & scarf, Stage 3 silk kimono lounge robe",
    "tags": [
      "ari",
      "bohemian",
      "travel-blogger",
      "yoga",
      "free-spirit",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Ari, a 28-year-old travel blogger and yoga instructor with a warm sun-kissed complexion, expressive hazel eyes, playful authentic smile, and wavy chestnut hair with subtle sun-bleached highlights. Symmetrical neutral A-pose with arms 45 degrees from torso, open hands, feet hip-width apart. Stage 1 outfit: flowy bohemian terracotta-and-teal patterned maxi dress with artisan silver ethnic jewelry and flat leather sandals (modular wardrobe variants: Stage 2 casual sundress with light woven scarf and white sneakers; Stage 3 emerald silk kimono lounge robe). Centered subject, level eye-height camera, pure neutral light-grey background (#d8d8d8), clean silhouette for 52-joint humanoid rigging, high-fidelity PBR textures.",
    "promptCinematic": "Vibrant golden-hour portrait of Ari, the adventurous travel blogger, at an indie outdoor cafe draped in string lights. Flowy bohemian maxi dress and layered artisan jewelry catching warm sunset rays, empathetic and curious eyes crinkling in a genuine laugh, travel journal on the table, 35mm film photography, shallow depth of field, warm wanderlust aesthetic.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Ari stands in a relaxed bohemian posture, shifting her weight gently from hip to hip as she listens attentively. She laughs warmly at a shared story, reaches out playfully as if brushing an arm, and leans forward slightly with curious eyes to share a secret. 24fps smooth conversational body language."
  },
  {
    "id": "fg-char-02",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Bella — The Ambitious Executive",
    "tagline": "32yo marketing executive; Stage 1 tailored blazer & pencil skirt, Stage 2 cocktail dress, Stage 3 satin evening slip dress",
    "tags": [
      "bella",
      "executive",
      "career",
      "tailored",
      "ambitious",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Bella, a 32-year-old marketing executive with sculpted cheekbones, confident analytical green eyes, and sleek dark espresso hair styled in a polished waves-back blowout. Symmetrical neutral A-pose with arms 45 degrees from sides, open palms. Stage 1 outfit: bespoke tailored charcoal blazer over an ivory silk blouse, high-waisted pencil skirt, and pointed-toe stiletto heels (modular wardrobe variants: Stage 2 midnight-blue cocktail dress with statement gold earrings; Stage 3 champagne satin evening slip dress). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR wool, silk, and leather textures.",
    "promptCinematic": "Sophisticated hero portrait of Bella at a contemporary art gallery wine tasting overlooking the city skyline at dusk. Tailored blazer and silk blouse illuminated by warm gallery track lighting, witty confident half-smile, crystal wine glass in hand, 35mm film aesthetic, refined romantic allure.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Bella maintains poised, confident posture during intellectual sparring, gesturing articulately with one hand before tilting her head with an appreciative, softened smile as she lets her guard down. 24fps smooth conversational animation."
  },
  {
    "id": "fg-char-03",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Clara — The Creative Artist",
    "tagline": "26yo freelance illustrator & poet; Stage 1 paint-stained sweater & jeans, Stage 2 boho top & skirt, Stage 3 lace-trimmed evening gown",
    "tags": [
      "clara",
      "artist",
      "illustrator",
      "poet",
      "creative",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Clara, a 26-year-old freelance illustrator and poet with dreamy amber eyes, gentle introspective expression, and soft auburn waves loosely pinned with vintage clips. Symmetrical neutral A-pose with arms 45 degrees from torso. Stage 1 outfit: cozy oversized heather-sage knit sweater, cuffed denim jeans with subtle pastel paint smudges, and ankle boots (modular wardrobe variants: Stage 2 flowing bohemian embroidered blouse with midi skirt and artisan rings; Stage 3 ethereal ivory lace-trimmed evening gown). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR knit and denim textures.",
    "promptCinematic": "Dreamy atmospheric portrait of Clara sketching in a quiet rain-streaked corner cafe. Soft overcast window light illuminating her auburn hair and expressive amber eyes, open watercolor sketchbook and poetry volume beside a steaming teacup, 35mm film grain, poetic emotional warmth.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Clara holds slow, soulful eye contact while listening empathetically, gently tucking a lock of auburn hair behind her ear and tracing a quick imaginative doodle pattern in the air with a shy, loyal smile. 24fps smooth companion motion."
  },
  {
    "id": "fg-char-04",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Dana — The Fitness Enthusiast",
    "tagline": "29yo personal trainer & marathoner; Stage 1 athleisure tank & leggings, Stage 2 sporty dress & trainers, Stage 3 athletic track set",
    "tags": [
      "dana",
      "fitness",
      "trainer",
      "marathon",
      "athletic",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Dana, a 29-year-old personal trainer and marathon runner with a toned athletic build, radiant sun-warmed complexion, bright brown eyes, and a high ponytail. Symmetrical neutral A-pose with arms 45 degrees from sides. Stage 1 outfit: fitted performance athleisure tank top in cobalt blue, sculpted high-waisted compression leggings, and lightweight running sneakers (modular wardrobe variants: Stage 2 pleated sporty tennis dress with white trainers; Stage 3 matching performance sports top and running shorts set). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR technical fabric textures.",
    "promptCinematic": "Energetic sunrise portrait of Dana pausing after a morning park run. Golden dawn light catching her athletic silhouette and motivational smile, fitness smartwatch on wrist, lush park trees in soft bokeh behind her, 35mm film photography, vibrant health and discipline.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Dana bounces lightly on the balls of her feet with upbeat, encouraging energy, gesturing enthusiastically as she proposes an active challenge and breaks into a warm, competitive laugh. 24fps smooth companion animation."
  },
  {
    "id": "fg-char-05",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Elena — The Intellectual Bookworm",
    "tagline": "30yo librarian & historian; Stage 1 cardigan, blouse, skirt & flats, Stage 2 midi dress & scarf, Stage 3 plush reading robe & glasses",
    "tags": [
      "elena",
      "librarian",
      "bookworm",
      "intellectual",
      "historian",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Elena, a 30-year-old librarian and history buff with thoughtful dark hazel eyes, round tortoiseshell reading glasses, and neat chestnut hair in a classic low chignon. Symmetrical neutral A-pose with arms 45 degrees from torso. Stage 1 outfit: warm burgundy cable-knit cardigan over a cream collared blouse, pleated tweed knee-length skirt, and leather ballet flats (modular wardrobe variants: Stage 2 refined olive midi dress with patterned silk scarf; Stage 3 cozy velvet reading robe with reading glasses). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Cozy dark-academia portrait of Elena among towering mahogany bookshelves in a historic library. Warm desk lamp glow illuminating her tortoiseshell glasses and thoughtful smile as she holds an open classic hardcover volume, 35mm film aesthetic, quiet intellectual passion.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Elena adjusts her reading glasses thoughtfully, tilts her head with inquisitive focus as she poses a deep question, and offers a warm, engaged smile as the literary debate turns playful. 24fps smooth companion motion."
  },
  {
    "id": "fg-char-06",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Fiona — The Party Socialite",
    "tagline": "27yo event planner; Stage 1 sparkly top, jeans & heels, Stage 2 glamorous mini dress & jewelry, Stage 3 chic evening lounge bodysuit",
    "tags": [
      "fiona",
      "socialite",
      "event-planner",
      "charismatic",
      "party",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Fiona, a 27-year-old event planner with bubbly extroverted charm, sparkling blue eyes, glossy coral lips, and voluminous honey-blonde curls. Symmetrical neutral A-pose with arms 45 degrees from torso. Stage 1 outfit: rose-gold sequin camisole top, tailored dark-wash designer jeans, and strappy metallic heels (modular wardrobe variants: Stage 2 glamorous ruby cocktail mini dress with crystal drop jewelry; Stage 3 chic black lace-trim evening loungewear set). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR sequin and fabric textures.",
    "promptCinematic": "Vibrant night-out portrait of Fiona at a rooftop cocktail lounge with glowing city bokeh behind her. Shimmering sequin top catching warm amber and magenta lounge lighting, charismatic laughing eyes, craft cocktail glass on the bar, 35mm film grain, infectious energy.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Fiona sways rhythmically to upbeat lounge music, laughs at a playful tease, and gestures invitingly with a sparkling smile as if asking the viewer to dance. 24fps smooth conversational animation."
  },
  {
    "id": "fg-char-07",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Gia — The Nature Lover",
    "tagline": "31yo environmental activist & hiker; Stage 1 flannel, cargo pants & boots, Stage 2 flowy top & shorts, Stage 3 earthy cotton tunic",
    "tags": [
      "gia",
      "nature",
      "activist",
      "hiker",
      "eco",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Gia, a 31-year-old environmental activist and trail hiker with grounded compassionate brown eyes, natural sun-freckled skin, and braided dark brown hair. Symmetrical neutral A-pose with arms 45 degrees from sides. Stage 1 outfit: rolled-sleeve forest-green plaid flannel shirt over a hemp tee, durable khaki cargo pants, and rugged leather hiking boots (modular wardrobe variants: Stage 2 breezy linen flowy top with trail shorts; Stage 3 soft earthy organic cotton lounge tunic). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR cotton, flannel, and leather textures.",
    "promptCinematic": "Golden-hour outdoor portrait of Gia on a scenic mountain overlook surrounded by wildflowers and pine trees. Warm sunset rays highlighting her braided hair and sincere, grounded smile, botanical field notebook in hand, 35mm film photography, natural beauty.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Gia stands with calm, grounded poise, gesturing warmly as she shares an outdoor trail story and looking upward briefly as if pointing out constellations in the night sky before smiling back at the camera. 24fps smooth motion."
  },
  {
    "id": "fg-char-08",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Harper — The Tech Geek",
    "tagline": "25yo software developer & gamer; Stage 1 graphic tee, hoodie & jeans, Stage 2 smart-casual button-up, Stage 3 cozy oversized shirt",
    "tags": [
      "harper",
      "developer",
      "gamer",
      "tech-geek",
      "sci-fi",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Harper, a 25-year-old software developer and gamer with clever violet-hazel eyes, quirky smile, and a stylish dark bob with subtle cyan streak. Symmetrical neutral A-pose with arms 45 degrees from torso. Stage 1 outfit: retro sci-fi graphic tee under an open charcoal zip hoodie, slim denim jeans, and high-top sneakers (modular wardrobe variants: Stage 2 smart-casual patterned button-up shirt with geek-chic accessories and slacks; Stage 3 cozy oversized cotton button-down lounge shirt). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Warm indie-tech portrait of Harper in a studio apartment filled with dual coding monitors, retro arcade collectibles, and soft LED bias lighting. Genuine excited smile as she discusses a hackathon puzzle, 35mm film aesthetic, endearing geek charm.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Harper perks up with animated excitement when a shared sci-fi or coding interest is mentioned, gesturing playfully with both hands as she geeks out and grins with relaxed confidence. 24fps smooth companion animation."
  },
  {
    "id": "fg-char-09",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Isla — The Music Aficionado",
    "tagline": "28yo DJ & vinyl collector; Stage 1 band tee, leather jacket & boots, Stage 2 crop top & trousers, Stage 3 relaxed silk lounge top",
    "tags": [
      "isla",
      "dj",
      "vinyl",
      "musician",
      "edgy",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Isla, a 28-year-old DJ and vinyl collector with expressive smoky eyes, passionate artistic demeanor, and textured jet-black shag waves. Symmetrical neutral A-pose with arms 45 degrees from sides. Stage 1 outfit: vintage faded band tee under a fitted black leather moto jacket, dark slim jeans, and buckled ankle boots (modular wardrobe variants: Stage 2 performative ribbed crop top with high-waisted wide-leg trousers; Stage 3 draped charcoal silk evening top and lounge pants). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR leather and denim textures.",
    "promptCinematic": "Atmospheric portrait of Isla inside a cozy independent vinyl record shop bathed in warm tungsten and neon signage. Leather jacket catching warm highlights as she holds a rare vinyl LP sleeve, soulful expressive gaze, 35mm film grain, indie musical magnetism.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Isla nods subtly to an internal rhythm, her posture opening up with passionate warmth as she talks about a favorite melody and shares an expressive, soulful smile. 24fps smooth companion motion."
  },
  {
    "id": "fg-char-10",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Jade — The Culinary Explorer",
    "tagline": "33yo chef & food blogger; Stage 1 chef apron over dress & flats, Stage 2 flowing blouse & skirt, Stage 3 silk evening wrap & apron",
    "tags": [
      "jade",
      "chef",
      "culinary",
      "foodie",
      "warm",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Jade, a 33-year-old chef and food blogger with warm nurturing brown eyes, radiant olive complexion, and glossy dark curls swept into a neat updo with face-framing tendrils. Symmetrical neutral A-pose with arms 45 degrees from torso. Stage 1 outfit: artisan linen cross-back chef apron over a terracotta knit dress and comfortable leather flats (modular wardrobe variants: Stage 2 elegant flowing cream silk blouse with pleated midi skirt; Stage 3 burgundy silk lounge wrap with tailored apron accent). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR linen and silk textures.",
    "promptCinematic": "Rich sensory portrait of Jade in a rustic-modern test kitchen lined with copper cookware, fresh herbs, and wine pairings. Warm golden kitchen light illuminating her appreciative smile as she plates an exotic dish, 35mm film photography, culinary warmth and romance.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Jade gestures expressively as she describes a dish's flavors, offers a playful tasting gesture toward the viewer, and laughs with warm, nurturing appreciation. 24fps smooth conversational animation."
  },
  {
    "id": "fg-char-11",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Kira — The Mysterious Traveler",
    "tagline": "29yo street photographer; Stage 1 leather jacket, scarf & boots, Stage 2 layered urban top & pants, Stage 3 draped evening wrap dress",
    "tags": [
      "kira",
      "photographer",
      "traveler",
      "mysterious",
      "nomadic",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Kira, a 29-year-old freelance street photographer with an enigmatic introspective aura, striking grey-green eyes, and windswept dark brown hair. Symmetrical neutral A-pose with arms 45 degrees from sides. Stage 1 outfit: weathered espresso leather jacket, woven burgundy travel scarf, slim dark trousers, and nomadic lace-up boots (modular wardrobe variants: Stage 2 adventurous layered asymmetrical top and tailored cargo trousers; Stage 3 midnight-plum draped wrap dress). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR leather and woven wool textures.",
    "promptCinematic": "Cinematic twilight portrait of Kira in a lantern-lit cobblestone alleyway holding a vintage 35mm rangefinder camera. Soft rain reflections on the stones, stolen enigmatic glance and subtle knowing smile, 35mm film grain, poetic urban mystery.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Kira observes the viewer with a quiet, intriguing gaze, tilts her head as if framing a photograph, and rewards a thoughtful question with a rare, deeply genuine smile. 24fps smooth companion motion."
  },
  {
    "id": "fg-char-12",
    "domain": "flirt",
    "category": "character",
    "subCategory": "Cast",
    "name": "Lena — The Wellness Guru",
    "tagline": "30yo meditation coach & herbalist; Stage 1 yoga pants, tank & shawl, Stage 2 flowy tunic dress, Stage 3 serene silk wrap robe",
    "tags": [
      "lena",
      "wellness",
      "meditation",
      "herbalist",
      "serene",
      "flirt-game",
      "character"
    ],
    "prompt3D": "Full body 3D game character model of Lena, a 30-year-old meditation coach and herbalist with serene hazel-green eyes, luminous dewy skin, balanced empathetic expression, and long wavy honey-brown hair with a delicate braid. Symmetrical neutral A-pose with arms relaxed 45 degrees from torso, open palms. Stage 1 outfit: sage-green bamboo tank top, soft draped cashmere meditation shawl, high-waisted yoga pants, and woven slides (modular wardrobe variants: Stage 2 harmonious flowing linen tunic dress with crystal pendant; Stage 3 serene pearl-toned silk wrap robe). Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Tranquil sunlit portrait of Lena in a botanical tea and mindfulness studio filled with dried herbs, ceramic teapots, and quartz crystals. Soft morning light illuminating her calm, soulful eyes and gentle smile, 35mm film aesthetic, holistic serenity.",
    "promptVideo": "Natural interactive companion motion (Kimodo / AI Video): Lena takes a calm, centering breath, places a gentle hand over her heart in an empathetic gesture, and leans in with peaceful, attentive warmth as she speaks softly. 24fps smooth companion animation."
  },
  {
    "id": "fg-wardrobe-street",
    "domain": "flirt",
    "category": "prop",
    "subCategory": "Wardrobes",
    "name": "Casual Streetwear Collection",
    "tagline": "Cropped oversized fleece hoodie, distressed high-rise denim, sneakers & crossbody bag",
    "tags": [
      "wardrobe",
      "streetwear",
      "hoodie",
      "denim",
      "sneakers",
      "outfit",
      "flirt-game"
    ],
    "prompt3D": "Full modular 3D clothing outfit set on an invisible mannequin. Oversized heavy-fleece cropped hoodie in heather oatmeal with dropped shoulders and thick drawstrings, high-rise light-wash distressed denim jeans with authentic brass hardware and fringed knee rips, chunky white leather designer platform sneakers with multi-layered soles, and an adjustable black nylon tactical crossbody messenger bag. Symmetrical display pose, level camera, isolated on pure neutral light-grey background (#d8d8d8), high-fidelity PBR fabric, denim, and leather textures.",
    "promptCinematic": "Trendy fashion editorial photograph of the casual streetwear outfit displayed in a minimalist Tokyo boutique window. Warm streetlamps reflecting on the glass, textured fleece and distressed denim catching clean architectural light, 35mm film photography, modern urban fashion style.",
    "promptVideo": "Smooth 360-degree rotation around the complete streetwear outfit display, capturing the tactile fleece ribbing, genuine denim twill weave, and chunky sneaker geometry under soft fashion studio lighting. 24fps cinema footage."
  },
  {
    "id": "fg-wardrobe-dress",
    "domain": "flirt",
    "category": "prop",
    "subCategory": "Wardrobes",
    "name": "Chic Evening Dress Collection",
    "tagline": "Midnight navy silk cowl-neck backless slip gown with metallic stiletto heels & jewelry",
    "tags": [
      "wardrobe",
      "evening-dress",
      "silk",
      "gown",
      "stilettos",
      "fashion",
      "flirt-game"
    ],
    "prompt3D": "Luxury evening gown ensemble on an invisible mannequin. Bias-cut midnight navy pure mulberry silk charmeuse floor-length slip gown with draped cowl neckline, dramatic low backless cut with crisscrossing spaghetti ties, accompanied by champagne metallic stiletto sandals with delicate ankle buckles, and a crystal-pavé minimalist pendant necklace. Symmetrical display pose, level camera, isolated on pure neutral light-grey background (#d8d8d8), PBR liquid silk sheen, metallic reflections, and crystal refractions.",
    "promptCinematic": "Glamorous red-carpet hero photograph of the midnight silk evening gown illuminated by flashing paparazzi lights. The fluid silk charmeuse catching liquid blue and silver light highlights with breathtaking drape, 35mm film grain, high-couture elegance.",
    "promptVideo": "Slow vertical pan descending down the fluid silk cowl gown, catching the mesmerizing shimmer of the midnight fabric in motion before reaching the delicate metallic stilettos. 24fps cinematic fashion footage."
  },
  {
    "id": "fg-wardrobe-gym",
    "domain": "flirt",
    "category": "prop",
    "subCategory": "Wardrobes",
    "name": "Fitness & Gym Gear Collection",
    "tagline": "Seamless compression sports bra, high-waisted performance leggings & knit runners",
    "tags": [
      "wardrobe",
      "gym",
      "fitness",
      "leggings",
      "sports-bra",
      "activewear",
      "flirt-game"
    ],
    "prompt3D": "High-performance women's activewear outfit set on an invisible mannequin. Compressive seamless racerback sports bra in dusty mauve with ribbed underband support, matching high-waisted sculpting compression leggings with moisture-wicking contour panels, lightweight breathable engineered knit running trainers in blush and white, and silicone gym hydration bottle. Symmetrical display pose, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR knit, elastane, and rubber textures.",
    "promptCinematic": "Dynamic athletic campaign photograph of the seamless fitness set in a sleek boutique gym studio. Clean morning sun pouring across polished wood floors, highlighting the breathable knit weave and compressive fabric contours, 35mm film photography, premium athletic brand aesthetic.",
    "promptVideo": "Slow circular orbit around the activewear ensemble, showcasing the contour ribbed details and technical knit textures under soft commercial studio lighting. 24fps cinema capture."
  },
  {
    "id": "fg-wardrobe-office",
    "domain": "flirt",
    "category": "prop",
    "subCategory": "Wardrobes",
    "name": "Tailored Office Wear Collection",
    "tagline": "Structured camel wool blazer, ivory silk blouse, black cigarette trousers & pumps",
    "tags": [
      "wardrobe",
      "office",
      "blazer",
      "tailored",
      "trousers",
      "corporate",
      "flirt-game"
    ],
    "prompt3D": "Executive women's business wear ensemble on an invisible mannequin. Structured tailored camel-hair wool single-breasted blazer with peaked lapels and horn buttons, ivory pure silk crepe button-down blouse with concealed placket, high-waisted black wool-blend slim cigarette trousers with sharp front creases, and classic pointed-toe Italian black leather court pumps. Symmetrical display pose, level camera, isolated on pure neutral light-grey background (#d8d8d8), PBR wool, silk, and polished leather textures.",
    "promptCinematic": "Sleek executive fashion photograph of the tailored office ensemble in an architectural gallery setting. Clean geometric light patterns casting subtle shadows across the camel wool blazer and silk blouse, 35mm film aesthetic, sophisticated modern professional styling.",
    "promptVideo": "Smooth vertical dolly shot rising from the polished leather court pumps, past the sharp crease of the cigarette trousers, to the tailored lines of the camel blazer lapels. 24fps cinema capture."
  },
  {
    "id": "fg-wardrobe-lounge",
    "domain": "flirt",
    "category": "prop",
    "subCategory": "Wardrobes",
    "name": "Relaxed Home Loungewear Collection",
    "tagline": "Oversized ribbed cashmere sweater, soft modal lounge shorts & shearling slippers",
    "tags": [
      "wardrobe",
      "loungewear",
      "cashmere",
      "sweater",
      "slippers",
      "cozy",
      "flirt-game"
    ],
    "prompt3D": "Cozy luxury loungewear outfit on an invisible mannequin. Oversized chunky ribbed Mongolian cashmere turtleneck sweater in cloud heather grey with rolled cuffs, ultra-soft washed modal jersey lounge shorts in pale blush with drawstring waist, and plush genuine shearling sheepskin indoor slide slippers in natural ivory. Symmetrical display pose, level camera, isolated on pure neutral light-grey background (#d8d8d8), ultra-detailed PBR fluffy cashmere and shearling textures.",
    "promptCinematic": "Warm, inviting hero photograph of the cashmere loungewear set draped beside a roaring stone fireplace. Golden embers and soft firelight highlighting the fluffy fibers of the cashmere knit and shearling slippers, 35mm film photography, cozy hygge comfort.",
    "promptVideo": "Gentle slow-motion zoom toward the plush cashmere sweater display, capturing the tactile softness of the woolen knit under soft warm ambient lighting. 24fps cinema footage."
  },
  {
    "id": "cm-beaker",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Borosilicate Griffin Beakers",
    "tagline": "250ml & 500ml low-form borosilicate 3.3 glass beakers with pour spout & white enamel scale",
    "tags": [
      "beaker",
      "griffin-beaker",
      "glassware",
      "borosilicate",
      "laboratory",
      "chemmate"
    ],
    "prompt3D": "Set of two laboratory low-form Griffin beakers (250ml and 500ml). Fabricated from optical-grade Borosilicate 3.3 glass (2.0mm wall thickness, IOR 1.52, transmission 0.96, roughness 0.015), slightly flared rim with contoured pour spout, printed white ceramic enamel dual-scale graduation marks (milliliters), frosted white marking spot for pencil labels, flat stable circular base. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR glass transmission, clearcoat 1.0, realistic internal liquid refraction.",
    "promptCinematic": "Macro hero photograph of a 500ml borosilicate glass beaker filled with a luminous copper sulfate blue chemical solution on a laboratory bench. Clean overhead laboratory LED strips refracting through the curved glass meniscus, crisp white measurement graduation marks sharp against the vibrant cobalt blue liquid, 35mm film photography, crisp scientific clarity.",
    "promptVideo": "Slow macro tracking shot gliding across the curved glass wall of a borosilicate beaker as a crystalline chemical reagent is dropped in, dissolving into mesmerizing swirling turquoise plumes that billow through the clear solution. 24fps cinema capture, clean laboratory lighting."
  },
  {
    "id": "cm-flask-erlenmeyer",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Conical Erlenmeyer Flasks",
    "tagline": "250ml & 500ml conical flasks with narrow neck, reinforced beaded rim & measurement scale",
    "tags": [
      "flask",
      "erlenmeyer",
      "conical",
      "borosilicate",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Pair of laboratory conical Erlenmeyer flasks (250ml and 500ml). Conical body with wide flat bottom tapering to a narrow cylindrical neck, heavy-duty reinforced beaded top rim, Borosilicate 3.3 clear glass construction (IOR 1.52), printed white enamel graduation markings and frosted labeling patch. One flask contains a transparent golden amber chemical solution with a subtle liquid vortex. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), high-fidelity PBR glass transmission.",
    "promptCinematic": "Cinematic hero photograph of an Erlenmeyer flask resting on a white ceramic magnetic stirrer plate. The golden liquid inside swirling in a miniature kinetic vortex, overhead fluorescent banks reflecting in elongated white highlights down the conical glass slopes, 35mm film grain, high-end pharmaceutical research aesthetic.",
    "promptVideo": "Slow-motion push-in on an Erlenmeyer flask as a PTFE stir bar inside spins up, creating an elegant swirling liquid vortex in the amber solution that reaches down toward the bottom of the flask. 24fps cinema capture, shallow depth of field."
  },
  {
    "id": "cm-flask-round",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Round-Bottom Boiling Flasks",
    "tagline": "500ml single-neck spherical boiling flask with precision ground glass ST 24/40 joint",
    "tags": [
      "round-bottom-flask",
      "boiling-flask",
      "ground-joint",
      "st24-40",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory single-neck round-bottom boiling flask (500ml capacity). Perfectly spherical lower body blown from heavy-wall Borosilicate 3.3 glass, transitioning to a reinforced cylindrical neck featuring a precision ground glass Standard Taper ST 24/40 outer joint with frosted mating texture, resting safely on a blue cork support ring. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), clean PBR glass transmission and frosted joint roughness maps.",
    "promptCinematic": "Hero still of a round-bottom boiling flask clamped within a laboratory distillation apparatus. Soft blue flame from an oil bath illuminating the spherical glass belly, vapors swirling inside the flask neck beneath the frosted joint, 35mm film photography, classic synthetic chemistry beauty.",
    "promptVideo": "Slow orbiting camera move circling the spherical round-bottom flask clamped in place on a lab stand, capturing the warm amber light refractions through the boiling liquid and the frosted glass joint details. 24fps cinema footage."
  },
  {
    "id": "cm-condenser-liebig",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Liebig Condenser Columns",
    "tagline": "300mm straight vapor tube condenser with water jacket, hose barbs & ST 24/40 joints",
    "tags": [
      "condenser",
      "liebig",
      "distillation",
      "cooling-jacket",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory Liebig distillation condenser column (300mm jacket length). Straight inner borosilicate vapor tube enclosed within an outer sealed cooling water jacket, two glass serrated hose barb side-arms for water inlet and outlet, Standard Taper ST 24/40 ground glass inner joint at bottom and outer joint at top. Centered subject, angled 45-degree diagonal presentation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR dual-surface glass transmission, realistic water layer inside jacket.",
    "promptCinematic": "Dramatic technical photograph of a Liebig condenser column in operation during fractional distillation. Condensation droplets beading along the inner vapor tube, clear cooling water flowing through the outer jacket with subtle air bubbles catching laboratory LED lighting, 35mm film grain, precise scientific instrumentation.",
    "promptVideo": "Macro tracking shot gliding along the length of the Liebig condenser column as purified chemical droplets condense along the interior glass wall, sliding smoothly downward toward the receiving flask. 24fps cinematic footage."
  },
  {
    "id": "cm-condenser-graham",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Graham Coiled Condensers",
    "tagline": "Internal spiral glass coiled condenser with high surface area cooling jacket & ground joints",
    "tags": [
      "graham-condenser",
      "coiled-condenser",
      "spiral",
      "distillation",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory Graham coiled condenser column (300mm jacket length). Intricate inner borosilicate spiral glass coil of twelve turns enclosed within a cylindrical cooling water jacket, twin serrated glass hose nozzles for coolant tubing, precision Standard Taper ST 24/40 ground glass joints. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR complex glass refractive geometry, pristine clean transparency.",
    "promptCinematic": "Mesmerizing macro hero photo of a Graham condenser's internal glass spiral. Soft cyan backlight illuminating the winding curves of the coiled vapor tube, liquid reflections cascading down each spiral loop, 35mm film photography, architectural glass elegance.",
    "promptVideo": "Slow vertical pan descending through the helical loops of the Graham condenser as warm vapor twists downward through the cold water jacket, condensing into luminous droplets. 24fps cinema footage."
  },
  {
    "id": "cm-funnel-sep",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Separatory Funnels with PTFE Stopcock",
    "tagline": "500ml pear-shaped funnel with precision PTFE stopcock valve & ST 24/40 glass stopper",
    "tags": [
      "separatory-funnel",
      "extraction",
      "ptfe-stopcock",
      "biphasic",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory pear-shaped separatory funnel (500ml capacity). Conical pear body blown from Borosilicate 3.3 glass, upper ST 24/40 ground glass neck fitted with a hollow hexagonal glass stopper, lower delivery stem featuring a precision-machined white virgin PTFE stopcock plug valve with red retaining nut. Inside shows a distinct biphasic liquid extraction with a clear organic layer resting on an amber aqueous layer. Centered subject, vertical orientation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR glass, PTFE, and biphasic liquid interfaces.",
    "promptCinematic": "Hero photograph of the separatory funnel held in an iron ring stand. Razor-sharp liquid-liquid meniscus line glowing between the emerald green organic phase and clear aqueous phase, white PTFE valve handle standing out in crisp focus, 35mm film aesthetic, liquid extraction art.",
    "promptVideo": "Macro camera tracking shot focusing on the PTFE stopcock as it is rotated 90 degrees open, allowing the lower amber liquid phase to drain smoothly through the narrow glass stem until the meniscus reaches the stopcock, which snaps shut with precision. 24fps cinema footage."
  },
  {
    "id": "cm-grad-cylinder",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Hexagonal Base Graduated Cylinders",
    "tagline": "100ml tall cylindrical tube with anti-roll hexagonal base, raised pour spout & dual scale",
    "tags": [
      "graduated-cylinder",
      "volumetric",
      "hexagonal-base",
      "borosilicate",
      "chemmate"
    ],
    "prompt3D": "Laboratory 100ml graduated cylinder. Tall cylindrical Borosilicate 3.3 glass column with molded hexagonal anti-roll base, reinforced top pour spout with protective yellow polyethylene bumper ring, ceramic baked-on blue dual-scale graduation markings in 1.0ml increments with sub-divisions. Filled to 75ml with a translucent crimson liquid displaying a sharp concave meniscus. Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR glass transmission, meniscus refraction.",
    "promptCinematic": "Extreme macro hero photograph of the graduated cylinder at the 75ml line. The curved concave liquid meniscus aligned razor-sharp with the blue graduation mark, clean laboratory backlight illuminating the crimson fluid, 35mm film grain, analytical precision.",
    "promptVideo": "Slow-motion push-in toward the meniscus line of the graduated cylinder as a glass pipette dispenses two final drops of crimson reagent, bringing the bottom of the curved meniscus into perfect alignment with the 75.0ml graduation ring. 24fps cinema capture."
  },
  {
    "id": "cm-pipette-vol",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Glass Volumetric Pipettes",
    "tagline": "25ml Class A single-mark volumetric transfer pipette with etched ring & drawn tip",
    "tags": [
      "pipette",
      "volumetric",
      "class-a",
      "transfer-pipette",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory Class A 25ml volumetric transfer pipette. Slender Borosilicate glass suction tube leading to an elongated central cylindrical expansion bulb, tapering down to a narrow delivery jet tip, etched circular calibration ring mark near the top with blue enameled volume and tolerance specification ('25ml ±0.03ml 20°C'). Centered subject, diagonal presentation, level camera, isolated on neutral light-grey background (#d8d8d8), PBR glass maps, clean geometric silhouette.",
    "promptCinematic": "Macro still of the Class A volumetric pipette suspended vertically above a titration flask. Delicate amber solution filling the central bulb, a single luminous droplet clinging to the precision-drawn delivery tip, 35mm film photography, analytical chemistry mastery.",
    "promptVideo": "Slow vertical camera glide traveling down the slender glass suction stem of the pipette, expanding over the clear solution inside the volumetric bulb, and ending at the delivery tip as a droplet detaches and falls smoothly in slow motion. 24fps cinema footage."
  },
  {
    "id": "cm-test-tubes",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Glassware",
    "name": "Test Tubes in Acrylic/Wire Rack",
    "tagline": "24-place stainless wire rack holding rimless borosilicate tubes with colorful solutions",
    "tags": [
      "test-tubes",
      "rack",
      "wire-rack",
      "solutions",
      "reagents",
      "glassware",
      "chemmate"
    ],
    "prompt3D": "Laboratory test tube rack assembly. Electropolished 316 stainless steel wire rack with three tiers and 24 circular apertures, holding twelve 16x150mm rimless borosilicate glass test tubes filled with a spectrum of vibrant chemical solutions (cyan, magenta, amber, emerald, violet), two tubes inverted on drainage drying pins. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), PBR glass, stainless steel wire, and multi-colored liquid refractions.",
    "promptCinematic": "Vibrant laboratory hero photo of the stainless rack of colorful test tubes under diffused overhead lighting. The jewel-like colored chemical solutions casting kaleidoscopic caustic light reflections onto the white benchtop below, 35mm film photography, cheerful scientific inquiry.",
    "promptVideo": "Smooth lateral dolly tracking shot gliding past the row of colorful test tubes, capturing the vibrant liquid color transitions from cobalt to amber to emerald with sparkling caustic refractions. 24fps cinema capture."
  },
  {
    "id": "cm-balance",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Precision Digital Analytical Balance",
    "tagline": "0.0001g readability balance with 3-sided sliding glass draft shield & cyan OLED display",
    "tags": [
      "analytical-balance",
      "scale",
      "draft-shield",
      "precision",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "High-precision digital analytical balance (0.0001g readability). Die-cast aluminum and chemical-resistant polymer housing in clean laboratory white, three-sided sliding glass draft shield chamber with stainless door handles, 90mm circular stainless steel weighing pan, integrated levelling spirit bubble, front control membrane keypad with TARE and CAL buttons, bright cyan OLED digital display reading '0.0000 g [STABLE]'. Datum at tabletop Y=0 with rubber levelling feet. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR plastics, brushed stainless steel, and emissive display textures.",
    "promptCinematic": "Macro hero photograph of the analytical balance inside a pharmaceutical cleanroom. Soft overhead cleanroom lights reflecting off the three glass draft panels, brilliant cyan digits glowing on the display, a tiny crystal sample resting on the mirror-finish weighing pan, 35mm film grain, high-precision laboratory perfection.",
    "promptVideo": "Slow cinematic camera push-in at eye level focusing on the digital analytical balance. The sliding glass draft door glides shut smoothly, eliminating air currents. The bright cyan OLED digital display stabilizes on a precise 4-decimal reading '0.0000 g' with the green 'STABLE' flag illuminating. 24fps macro cinema footage, shallow depth of field."
  },
  {
    "id": "cm-centrifuge",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Benchtop High-Speed Micro-Centrifuge",
    "tagline": "15,000 RPM benchtop centrifuge with click-lock safety lid & 12-place angle rotor",
    "tags": [
      "centrifuge",
      "micro-centrifuge",
      "rotor",
      "rpm",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "High-speed laboratory benchtop micro-centrifuge. Compact aerodynamic casing in powder-coated laboratory off-white with dark charcoal bezel, motorized click-lock transparent polycarbonate safety lid, anodized aluminum 12-place 45-degree angle rotor holding 1.5ml microcentrifuge tubes with colored snap caps, digital front panel with dual backlit blue LCD displays for RPM/RCF and timer countdown, rotary setting dial, emergency lid release port. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), clean PBR materials.",
    "promptCinematic": "Technical hero photograph of the high-speed centrifuge with its transparent lid raised to display the precision aluminum rotor and colorful micro-tubes. Clean studio lighting catching the brushed metal texture of the rotor and digital displays, 35mm film aesthetic, biotechnology research quality.",
    "promptVideo": "Slow-motion push-in as the centrifuge safety lid clicks shut with a solid motorized latch, and the digital RPM display begins spooling up rapidly from 0 to 14,800 RPM with a soft turbine-like whine. 24fps cinematic footage."
  },
  {
    "id": "cm-stirrer",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Heated Magnetic Stirrer with Stir Bar",
    "tagline": "White ceramic heating plate with dual analog rotary dials & octagonal PTFE stir bar",
    "tags": [
      "magnetic-stirrer",
      "hotplate",
      "ceramic-plate",
      "stir-bar",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "Laboratory heated magnetic plate stirrer. Cast aluminum base with white chemical-resistant baked ceramic top heating plate (7x7 inch), dual analog rotary control knobs for temperature (up to 380°C) and stirring speed (100-1500 RPM) with green/red status LED indicator lamps, accompanied by an octagonal white PTFE Teflon magnetic stir bar with pivot ring resting on the plate. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR ceramic, metal, and plastic textures.",
    "promptCinematic": "Hero still of the heated magnetic stirrer in operation under low laboratory ambient light. The hotplate surface emitting a faint thermal warmth, amber status indicator LEDs glowing brightly, an Erlenmeyer flask resting on the plate with a spinning vortex, 35mm film photography, synthetic bench chemistry.",
    "promptVideo": "Slow orbiting arc shot around the ceramic hotplate stirrer as the speed dial is turned, causing the PTFE stir bar inside a solution to accelerate smoothly into a quiet, high-speed spin. 24fps cinema capture."
  },
  {
    "id": "cm-ph-meter",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Benchtop Digital pH Meter",
    "tagline": "Microprocessor pH/mV meter with articulated electrode arm & combination glass bulb probe",
    "tags": [
      "ph-meter",
      "electrode",
      "articulated-arm",
      "analytics",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "Benchtop digital laboratory pH and conductivity meter. Slanted console housing with sealed wipe-clean capacitive touch keypad, large multi-parameter backlit LCD screen showing pH 7.00, mV, and temperature readings. Attached counterbalanced articulated stainless steel electrode holder arm supporting a blue epoxy-body combination glass bulb pH probe with BNC cable, dipping into a sample beaker of buffer solution. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures.",
    "promptCinematic": "Analytical hero photograph of the glass pH bulb electrode submerged in a clear beaker solution. The sensitive glass hydration bulb glowing with blue ambient highlights, digital display in the background reading 'pH 7.02 [STABLE]', 35mm film aesthetic, analytical chemistry precision.",
    "promptVideo": "Macro push-in focusing on the glass bulb of the pH electrode immersed in liquid as microscopic air bubbles rise past the sensor and the background LCD screen stabilizes on a green checkmark icon. 24fps cinema capture."
  },
  {
    "id": "cm-spectrophotometer",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "UV-Vis Spectrophotometer",
    "tagline": "Double-beam UV-Vis spectrophotometer with hinged sample chamber for 10mm quartz cuvettes",
    "tags": [
      "spectrophotometer",
      "uv-vis",
      "cuvette",
      "optics",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "Laboratory benchtop UV-Vis spectrophotometer instrument. Sleek rectangular unibody housing in matte laboratory white and graphite grey, top-hinged sample compartment door opening to reveal a 4-cell carousel holder for 10mm optical quartz cuvettes, integrated 7-inch color graphic touchscreen display showing an absorption spectrum curve with peak detection markers, rear USB and printer interface panel. Datum at tabletop with vibration-dampening feet. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR materials.",
    "promptCinematic": "Hero still of the UV-Vis spectrophotometer with its sample lid open, revealing a precision quartz cuvette filled with fluorescent rhodamine red solution. Blue monochromatic light path beam passing through the cuvette, touchscreen display graphing the spectral absorption peak in crisp detail, 35mm film grain, spectroscopic research.",
    "promptVideo": "Slow-motion push-in as a gloved hand places an optical quartz cuvette into the spectrophotometer sample stage, closes the hinged lid, and taps 'SCAN' on the touchscreen, initiating an animated wavelength absorbance sweep. 24fps cinematic footage."
  },
  {
    "id": "cm-dropper-bottles",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Amber Glass Dropper Bottles",
    "tagline": "60ml actinic amber glass reagent bottles with black rubber pipette bulbs & GHS hazard labels",
    "tags": [
      "dropper-bottle",
      "amber-glass",
      "reagents",
      "pipette-bulb",
      "ghs-label",
      "chemmate"
    ],
    "prompt3D": "Set of three laboratory amber glass dropper bottles (60ml and 125ml capacity). Actinic amber soda-lime glass bottles protecting light-sensitive reagents, black phenolic screw cap with integrated natural rubber suction bulb and precision tapered glass dropper pipette, authentic GHS chemical hazard warning labels with red diamond pictograms ('FLAMMABLE' and 'CORROSIVE'). Centered subject, level eye-height camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR amber glass transmission, rubber, and matte paper textures.",
    "promptCinematic": "Moody macro hero photo of three amber dropper bottles grouped on a lab bench. Rich golden-brown amber glass glowing with deep warm backlighting, rubber dropper bulbs catching soft highlights, chemical hazard pictograms sharp and legible, 35mm film photography, authentic organic chemistry ambiance.",
    "promptVideo": "Macro camera track as the rubber bulb of an amber dropper bottle is gently squeezed, drawing a clear chemical reagent up into the calibrated glass pipette tube inside the bottle in smooth slow motion. 24fps cinema capture."
  },
  {
    "id": "cm-pipette-carousel",
    "domain": "chemmate",
    "category": "prop",
    "subCategory": "Instruments",
    "name": "Micropipette Carousel Stand",
    "tagline": "Rotating acrylic carousel rack holding 6 adjustable micropipettes (0.5uL to 1000uL)",
    "tags": [
      "micropipette",
      "carousel",
      "pipettor",
      "molecular-biology",
      "instruments",
      "chemmate"
    ],
    "prompt3D": "Laboratory rotating micropipette carousel stand loaded with six precision pipettors. Weighted circular base with 360-degree ball-bearing rotating clear acrylic carousel disc holding six single-channel adjustable micropipettes with color-coded volume push-buttons (0.5-10uL grey, 2-20uL yellow, 20-200uL orange, 100-1000uL blue), digital micrometer volume counter windows, ergonomic finger hook, stainless steel tip ejector sleeves. Centered subject, level camera, three-quarter view, isolated on neutral light-grey background (#d8d8d8), PBR textures, clean industrial silhouette.",
    "promptCinematic": "Hero still of the rotating micropipette carousel illuminated by cool laboratory spotlighting. The color-coded adjustment plungers popping against the brushed stainless steel shafts and acrylic carousel stand, 35mm film photography, molecular biology and genetics research aesthetic.",
    "promptVideo": "Smooth 360-degree rotation of the micropipette carousel stand as a gloved hand reaches into frame, lifts a blue 1000uL pipettor smoothly from its hanger, and clicks the tip ejector button. 24fps cinema capture, clean laboratory lighting."
  },
  {
    "id": "hero-roman-warrior",
    "domain": "hero",
    "category": "character",
    "subCategory": "Monument Hero",
    "name": "Roman Warrior Woman on Temple Steps",
    "tagline": "Regal Hellenic warrior in antique bronze cuirass, cascading crimson velvet cape & vertical broadsword",
    "tags": [
      "roman-warrior",
      "hero-shot",
      "music-video",
      "cuirass",
      "crimson-cape",
      "broadsword",
      "corinthian-columns",
      "cinematic"
    ],
    "prompt3D": "Full body 3D game character model of Aurelia, the Regal Roman Warrior Woman. Striking athletic warrior woman with fierce amber eyes, sun-bronzed skin, and long sun-streaked brunette waves. Symmetrical neutral A-pose with arms 45 degrees from torso, hands open, feet shoulder-width apart. Wearing an ornate sculpted antique bronze cuirass with anatomical muscle relief motifs and embossed lion crest, articulated bronze shoulder pauldrons, filigree bronze vambraces and greaves, dark leather gladiator pteryges skirt, and a voluminous floor-length crimson-red velvet cape draped from pauldrons cascading down behind. Accompanied by a two-handed double-edged steel broadsword with bronze eagle crossguard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean silhouette for 3D rigging, high-fidelity PBR bronze, steel, leather, and velvet textures.",
    "promptCinematic": "Cinematic music video keyframe photograph of a regal Roman warrior woman standing centered on grand ancient monument steps. Striking athletic woman with fierce amber eyes and long sun-streaked brunette waves billowing in the wind. Wearing an ornate sculpted antique bronze cuirass with anatomical relief motifs, articulated lion pauldrons, filigree bronze vambraces and greaves, and a massive voluminous crimson-red velvet cape draped from pauldrons and cascading dramatically down weathered marble steps. Both hands resting calmly atop the pommel crossguard of a two-handed double-edged steel broadsword held vertically with its tip resting on the stone step. Monumental classical architecture, towering fluted Corinthian marble columns, classical bas-relief carvings in background. Moody cinematic backlight, warm golden rim light on hair and shoulders, 35mm film grain, volumetric dust motes, symmetrical medium-wide framing, Zack Snyder epic music video aesthetic, 8k resolution.",
    "promptVideo": "Slow-motion low-angle tracking push-in starting at the broadsword tip resting on the cracked marble steps, slowly tilting upward past the flowing folds of the cascading crimson velvet cape billowing in the wind, arriving at the warrior woman's stoic, commanding gaze as golden sunlight flares between towering Corinthian columns behind her. 24fps cinematic footage, anamorphic lens, epic music video style."
  },
  {
    "id": "hero-valkyrie",
    "domain": "hero",
    "category": "character",
    "subCategory": "Mythic Hero",
    "name": "Brynhild Frost-Vein",
    "tagline": "Valkyrie War-Caller in blackened scale-mail, white wolf pelt & winged battleaxe",
    "tags": [
      "valkyrie",
      "mythic",
      "norse",
      "shield-maiden",
      "battleaxe",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of Brynhild Frost-Vein, Valkyrie War-Caller. Fierce northern shieldmaiden with icy pale blue eyes, warrior war-paint streaks across cheekbones, and platinum blonde Viking braided hair with silver beads. Symmetrical neutral A-pose with arms 45 degrees away from sides. Wearing layered blackened damascus steel scale-mail armor, white wolf-pelt shoulder mantle, runic etched steel vambraces, and a battle-worn midnight navy blue wool cape with silver trim. Accompanied by a heavy winged battleaxe. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR textures.",
    "promptCinematic": "Cinematic music video keyframe photograph of Brynhild Frost-Vein, Valkyrie War-Caller. Fierce northern shieldmaiden with icy pale blue eyes, warrior war-paint streaks across cheekbones, and platinum blonde Viking braids with silver beads. Layered blackened damascus steel scale-mail armor, white wolf-pelt mantle, holding a heavy winged battleaxe across her shoulders in a defiant war stance. Location: an ancient windswept Scandinavian cliffside temple overlooking frozen glacial fjords. Lighting & mood: cold Nordic rim lighting, misty snow squalls drifting through the air, dramatic volumetric god-rays piercing dark storm clouds, 35mm film photography, Kodak Portra aesthetic, epic scale.",
    "promptVideo": "Wide cinematic establishing pan transitioning into an intimate circular arc orbit around Brynhild standing on a windswept cliffside as snow flurries swirl past the anamorphic lens in slow motion, her wolf-pelt mantle rippling in the glacial gale. 24fps cinema capture, high-budget mythic music video."
  },
  {
    "id": "hero-blood-knight",
    "domain": "hero",
    "category": "character",
    "subCategory": "Gothic Hero",
    "name": "Valerius the Sanguine",
    "tagline": "Blood Knight Champion in fluted gothic plate, crimson chalice surcoat & executioner blade",
    "tags": [
      "blood-knight",
      "crusader",
      "gothic-plate",
      "paladin",
      "executioner-sword",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of Valerius the Sanguine, Blood Knight Champion. Battle-hardened knight with a scarred jawline, piercing dark eyes, and slicked-back raven hair with silver-streaked temples. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing heavy gothic fluted steel plate armor with brass trim, jagged spiked pauldrons, an ornate crimson velvet surcoat bearing an embossed chalice emblem, and a heavy double-layered dark cape. Accompanied by a massive runic executioner greatsword. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR steel and velvet maps.",
    "promptCinematic": "Cinematic music video keyframe photograph of Valerius the Sanguine, Blood Knight Champion. Scarred jawline, piercing dark eyes, slicked-back raven hair. Fluted gothic steel plate armor with brass trim, crimson velvet chalice surcoat, resting gloved hand on the pommel of a massive runic executioner sword resting on his shoulder. Location: the shattered stone colonnade of a cathedral courtyard with fallen gargoyles and burning braziers. Lighting: dramatic chiaroscuro, flickering torchlight embers, deep gothic shadows, 35mm film grain.",
    "promptVideo": "Dramatic crane descent from burning gothic cathedral arches down to eye-level with the Blood Knight, tracking forward as smoke and fiery sparks drift across the frame and red cape flutters in the hot updraft. 24fps cinematic footage."
  },
  {
    "id": "hero-spellblade",
    "domain": "hero",
    "category": "character",
    "subCategory": "Mystic Hero",
    "name": "Morrigan Dusk-Weaver",
    "tagline": "Gothic Spellblade in leather corset cuirass, violet silk capelet & lightning rapier",
    "tags": [
      "spellblade",
      "sorceress",
      "duelist",
      "corset",
      "rapier",
      "lightning",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of Morrigan Dusk-Weaver, Gothic Spellblade. Ethereal raven-haired sorceress with pale porcelain skin, subtle violet runic eye markings, and dark hair blowing wildly. Symmetrical neutral A-pose with arms 45 degrees from sides. Wearing a tightly fitted black leather corset cuirass with gilded filigree, flowing violet silk hooded capelet, articulated steel finger gauntlets, and thigh-high leather dueling boots. Accompanied by a slender rapier coated in violet lightning and a levitating arcane orb. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Cinematic music video keyframe photograph of Morrigan Dusk-Weaver, Gothic Spellblade. Ethereal raven hair blowing wildly, pale skin with violet runic eye marks. Black leather corset cuirass with gilded filigree, flowing violet silk capelet, holding a glowing lightning rapier in one hand and floating spell orb in the other. Location: an ancient astronomical observatory ruin under a starry night sky with a shimmering celestial eclipse. Lighting: deep twilight mood, glowing violet and cyan emissive magic lighting up face and armor, anamorphic lens flares, 35mm film aesthetic.",
    "promptVideo": "Dynamic fast push-in with subtle speed-ramp toward Morrigan as violet electrical lightning dances along her slender rapier blade and reflects off her intense eyes, while the violet silk capelet billows in cosmic wind. 24fps cinema capture."
  },
  {
    "id": "hero-oracle",
    "domain": "hero",
    "category": "character",
    "subCategory": "Pantheon Leader",
    "name": "Pythia the Blind",
    "tagline": "High Oracle of the Pantheon in gold-embroidered silk blindfold, Grecian robes & throne",
    "tags": [
      "oracle",
      "priestess",
      "pantheon",
      "grecian",
      "robes",
      "throne",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of Pythia the Blind, High Oracle of the Pantheon. Serene yet haunting mystical priestess with a blindfold of gold embroidered silk over her eyes, subtle silver facial tattoos, and cascading waist-length dark curls. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing layered pleated Grecian silk robes in deep maroon and ivory, ornate golden serpent armlets, a laurel crown of polished bronze leaves, and heavy gold pendant chains. Accompanied by an ancient bronze incense burner. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
    "promptCinematic": "Cinematic music video keyframe photograph of Pythia the Blind, High Oracle of the Pantheon. Gold embroidered silk blindfold, cascading dark curls, layered pleated Grecian silk robes in deep maroon and ivory, ornate golden serpent armlets, bronze laurel crown. Seated upon an ornate carved stone throne holding a smoking bronze censer. Location: inner sanctum of a classical sunlit temple filled with towering marble columns and reflecting water pools. Lighting: ethereal golden hour sunlight streaming through roof fissures, golden dust motes dancing, 35mm film grain, 8k resolution.",
    "promptVideo": "Slow, meditative camera glide across a marble water reflection pool, rising gracefully to reveal the Oracle seated upon her carved throne as coils of fragrant blue incense smoke drift through golden light beams. 24fps cinematic footage."
  },
  {
    "id": "hero-blacksmith",
    "domain": "hero",
    "category": "character",
    "subCategory": "Deep Vaults",
    "name": "Master Torvald",
    "tagline": "Runesmith of the Deep Vaults with braided beard, dragonhide apron & magma hammer",
    "tags": [
      "runesmith",
      "dwarf",
      "blacksmith",
      "magma",
      "hammer",
      "deep-vaults",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of Master Torvald, Runesmith of the Deep Vaults. Burly veteran dwarven blacksmith with a thick braided gray beard decorated with bronze rings, soot-stained rugged face, and intense fiery gaze. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing a heavy dragonhide protective apron over dwarven chainmail, heavy iron-plated tongs and hammer holster, studded leather vambraces. Accompanied by a glowing red-hot rune-hammer. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures with emissive rune glow.",
    "promptCinematic": "Cinematic music video keyframe photograph of Master Torvald, Runesmith of the Deep Vaults. Thick braided gray beard with bronze rings, soot-stained rugged face, dragonhide apron over dwarven chainmail. Raising a glowing red-hot rune-hammer above an immense obsidian anvil, sparks frozen in mid-air. Location: a subterranean magma forge with massive carved stone dwarf pillars and flowing lava troughs. Lighting: intense fiery orange under-lighting from magma channels, high-contrast industrial shadows, atmospheric embers, 35mm film photography.",
    "promptVideo": "Rapid dynamic tracking shot rushing past stone pillars and racks of glowing swords, snapping into sharp focus on Master Torvald as his glowing rune-hammer strikes the anvil with a blinding detonation of orange sparks. 24fps cinema capture."
  },
  {
    "id": "hero-corrupted-gen",
    "domain": "hero",
    "category": "character",
    "subCategory": "Colosseum Boss",
    "name": "General Malakor the Fallen",
    "tagline": "Corrupted Colosseum Sovereign in spiked obsidian plate, horned battle-mask & giant axe",
    "tags": [
      "malakor",
      "boss",
      "colosseum",
      "corrupted",
      "warlord",
      "battle-axe",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of General Malakor the Fallen, Corrupted Colosseum Sovereign. Monstrous corrupted warlord with ash-gray skin, glowing fiery orange demonic eyes, and a horned iron battle-mask covering the lower face. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing colossal spiked obsidian and blackened bronze plate armor, jagged horned shoulder mantles, chains dangling from pauldrons, and a ragged shredded blood-soaked war cape. Accompanied by a giant serrated demonic battle-axe. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR materials.",
    "promptCinematic": "Cinematic music video keyframe photograph of General Malakor the Fallen. Horned iron battle-mask, ash-gray skin, glowing orange eyes. Colossal spiked obsidian plate armor, ragged blood-soaked war cape, standing menacingly with giant serrated battle-axe atop a pile of defeated gladiators. Location: the ruined center floor of an ancient blood-stained Roman colosseum under an apocalyptic red sky. Lighting: apocalyptic overcast lighting, ominous blood-red rim highlights, heavy dark smoke billowing, 35mm film grain.",
    "promptVideo": "Terrifying low-angle creeping push-in from ground level looking up at General Malakor's colossal height as he slams his giant serrated battle-axe into the arena sand, sending up a cloud of red dust while his cape whips violently in apocalyptic wind. 24fps cinematic footage."
  },
  {
    "id": "hero-crypt-wight",
    "domain": "hero",
    "category": "character",
    "subCategory": "Undead Elite",
    "name": "Wight Crypt Lord",
    "tagline": "Undead Tomb Guardian with cyan soul flames, ancient rusted spatha & tattered shroud",
    "tags": [
      "crypt-wight",
      "undead",
      "soul-flames",
      "spatha",
      "tomb-guardian",
      "hero"
    ],
    "prompt3D": "Full body 3D game character model of the Wight Crypt Lord, Undead Tomb Guardian. Ancient desiccated skeletal warrior with glowing cyan soul flames burning inside hollow eye sockets, fragments of leathery skin clinging to skull. Symmetrical neutral A-pose with arms 45 degrees from torso. Wearing rusted century-old chainmail hauberk with missing links, oxidized bronze breastplate overgrown with crypt fungi, and tattered rotted funeral shroud wraps. Accompanied by a chipped, rusted ancient spatha sword. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures with emissive cyan soul flame.",
    "promptCinematic": "Cinematic music video keyframe photograph of the Wight Crypt Lord. Glowing cyan soul flames burning inside hollow skull eye sockets, rusted century-old chainmail, oxidized bronze breastplate, gripping a chipped ancient spatha sword with two hands. Location: a subterranean burial crypt with stacked stone ossuary wall niches and low-hanging green graveyard mist. Lighting: cold spectral cyan luminescence, deep subterranean darkness, creepy silhouettes cast along damp stone walls, 35mm film photography.",
    "promptVideo": "Eerie Dutch-angle tracking shot through ancient crumbling stone archways as the Wight Crypt Lord emerges slowly from the green graveyard fog, its skeletal hands raising the rusted spatha sword as cyan soul fire flares brightly in its eye sockets. 24fps cinema capture."
  }
];

export const CHARACTER_PRESETS: CharacterPreset[] = [
  {
    "id": "hero-amazon",
    "role": "Playable Hero",
    "name": "Aurelia the Unbroken",
    "title": "Amazonian Vanguard",
    "classType": "Spartan / Amazonian Warrior",
    "faceAndHair": "striking athletic warrior woman with fierce amber eyes, tanned skin, and long sun-streaked brunette waves billowing in the wind",
    "armorAndAttire": "ornate embossed bronze cuirass with sculpted anatomical relief, ornate lion-crested pauldrons, filigree bronze bracers, gladiator war-skirt, and an expansive floor-length crimson red velvet cloak draping dramatically to the stone floor",
    "weaponAndStance": "holding a heavy steel two-handed broadsword vertically in front of her, both hands resting atop the crossguard pommel with the blade point touching the marble ground, poised and commanding posture",
    "environment": "standing at the top of grand ancient Roman pantheon marble steps, flanked by weathered classical carved stone statues and monumental Corinthian columns",
    "musicVideoLighting": "moody cinematic daylight, soft atmospheric haze, warm stone diffuse reflections, rich crimson contrast, 35mm film grain, Zack Snyder epic aesthetic",
    "cameraMovement": "slow-motion low-angle tracking push-in, starting at the sword tip resting on marble steps and tilting upward to reveal her stoic, commanding gaze as the crimson cape billows in the wind"
  },
  {
    "id": "hero-valkyrie",
    "role": "Playable Hero",
    "name": "Brynhild Frost-Vein",
    "title": "Valkyrie War-Caller",
    "classType": "Norse Shield-Maiden",
    "faceAndHair": "fierce northern shieldmaiden with icy pale blue eyes, warrior war-paint streaks across cheekbones, and platinum blonde Viking braided hair with silver beads",
    "armorAndAttire": "layered blackened damascus steel scale-mail armor, white wolf-pelt shoulder mantle, runic etched steel vambraces, and a battle-worn midnight navy blue wool cape with silver trim",
    "weaponAndStance": "holding a heavy winged battleaxe across her shoulders in a defiant war stance, one foot forward on a carved rune-stone",
    "environment": "an ancient windswept Scandinavian cliffside temple overlooking frozen glacial fjords, surrounded by ancient mossy carved standing stones",
    "musicVideoLighting": "cold Nordic rim lighting, misty snow squalls drifting through the air, dramatic volumetric god-rays piercing through dark storm clouds",
    "cameraMovement": "wide cinematic establishing pan that transitions into an intimate circular arc orbit around her as snow flurries swirl past the lens in slow motion"
  },
  {
    "id": "hero-blood-knight",
    "role": "Playable Hero",
    "name": "Valerius the Sanguine",
    "title": "Blood Knight Champion",
    "classType": "Heavy Plate Crusader",
    "faceAndHair": "battle-hardened knight with a scarred jawline, piercing dark eyes, and slicked-back raven hair with silver-streaked temples",
    "armorAndAttire": "heavy gothic fluted steel plate armor with brass trim, jagged spiked pauldrons, an ornate crimson velvet surcoat bearing an embossed chalice emblem, and a heavy double-layered dark cape",
    "weaponAndStance": "resting one gloved hand on the pommel of a massive runic executioner sword resting on his shoulder, stoic heroic stance",
    "environment": "the shattered stone colonnade of a cathedral courtyard with fallen gargoyles and burning braziers",
    "musicVideoLighting": "dramatic chiaroscuro lighting, flickering torchlight embers, deep gothic shadows, cinematic filmic color grade",
    "cameraMovement": "dramatic crane descent from burning cathedral arches down to eye-level, tracking forward as smoke and fiery sparks drift across the frame"
  },
  {
    "id": "hero-spellblade",
    "role": "Playable Hero",
    "name": "Morrigan Dusk-Weaver",
    "title": "Gothic Spellblade",
    "classType": "Sorceress / Duelist",
    "faceAndHair": "ethereal raven-haired sorceress with pale porcelain skin, subtle violet runic eye markings, and dark hair blowing wildly",
    "armorAndAttire": "tightly fitted black leather corset cuirass with gilded filigree, flowing violet silk hooded capelet, articulated steel finger gauntlets, and thigh-high leather dueling boots",
    "weaponAndStance": "holding a slender glowing rapier coated in violet lightning in one hand, while hovering a levitating spell orb in her other palm",
    "environment": "an ancient astronomical observatory atop a ruin, under a starry night sky with a shimmering celestial eclipse",
    "musicVideoLighting": "deep twilight mood, glowing violet and cyan emissive magic lighting up her face and armor, anamorphic lens flares",
    "cameraMovement": "dynamic fast push-in with subtle speed-ramp, emphasizing the glowing magic reflections in her eyes as the cape flutters"
  },
  {
    "id": "npc-oracle",
    "role": "NPC / Faction Leader",
    "name": "Pythia the Blind",
    "title": "High Oracle of the Pantheon",
    "classType": "Mystic / Faction Leader",
    "faceAndHair": "serene yet haunting mystical priestess with a blindfold of gold embroidered silk over her eyes, subtle silver facial tattoos, and cascading waist-length dark curls",
    "armorAndAttire": "layered pleated Grecian silk robes in deep maroon and ivory, ornate golden serpent armlets, a laurel crown of polished bronze leaves, and heavy gold pendant chains",
    "weaponAndStance": "seated upon an ornate carved stone throne, holding an ancient bronze incense burner emitting thick fragrant coils of smoke",
    "environment": "the inner sanctum of a classical sunlit temple filled with towering marble columns, reflecting water pools, and scattered rose petals",
    "musicVideoLighting": "ethereal golden hour sunlight streaming through temple roof fissures, golden dust motes dancing in the air, soft heavenly glow",
    "cameraMovement": "slow, meditative glide across the water reflection pool, rising gracefully to reveal the Oracle surrounded by curling incense smoke"
  },
  {
    "id": "npc-blacksmith",
    "role": "NPC / Faction Leader",
    "name": "Master Torvald",
    "title": "Runesmith of the Deep Vaults",
    "classType": "Master Artisan",
    "faceAndHair": "burly veteran dwarven blacksmith with a thick braided gray beard decorated with bronze rings, soot-stained rugged face, and intense fiery gaze",
    "armorAndAttire": "heavy dragonhide protective apron over dwarven chainmail, heavy iron-plated tongs and hammer holster, studded leather vambraces",
    "weaponAndStance": "raising a glowing red-hot rune-hammer above an immense obsidian anvil, sparks frozen in mid-air",
    "environment": "a subterranean magma forge with massive carved stone dwarf pillars, flowing lava troughs, and hanging weapon racks",
    "musicVideoLighting": "intense fiery orange under-lighting from magma channels, high-contrast industrial shadows, atmospheric embers",
    "cameraMovement": "rapid tracking shot past racks of glowing swords, snapping into focus as the hammer strikes the anvil with a burst of sparks"
  },
  {
    "id": "enemy-corrupted-general",
    "role": "Enemy / Boss",
    "name": "General Malakor the Fallen",
    "title": "Corrupted Colosseum Sovereign",
    "classType": "Demonic Warmaster Boss",
    "faceAndHair": "monstrous corrupted warlord with ash-gray skin, glowing fiery orange demonic eyes, and a horned iron battle-mask covering the lower face",
    "armorAndAttire": "colossal spiked obsidian and blackened bronze plate armor, jagged horned shoulder mantles, chains dangling from pauldrons, and a ragged shredded blood-soaked war cape",
    "weaponAndStance": "wielding a giant serrated demonic battle-axe dripping with dark ichor, standing menacingly atop a pile of defeated gladiators",
    "environment": "the ruined center floor of an ancient blood-stained Roman colosseum, surrounded by crumbling stone spectator tiers under an apocalyptic red sky",
    "musicVideoLighting": "apocalyptic overcast lighting, ominous blood-red rim highlights, heavy dark smoke billowing in the background",
    "cameraMovement": "terrifying low-angle creeping push-in from ground level looking up at his imposing height as he slams his axe into the dirt"
  },
  {
    "id": "enemy-crypt-wight",
    "role": "Enemy / Boss",
    "name": "Wight Crypt Lord",
    "title": "Undead Tomb Guardian",
    "classType": "Undead Elite",
    "faceAndHair": "ancient desiccated skeletal warrior with glowing cyan soul flames burning inside hollow eye sockets, fragments of leathery skin clinging to skull",
    "armorAndAttire": "rusted century-old chainmail hauberk with missing links, oxidized bronze breastplate overgrown with crypt fungi, and tattered rotted funeral shroud wraps",
    "weaponAndStance": "gripping a chipped, rusted ancient spatha sword with two hands, advancing forward with unnatural jerky stop-motion motion",
    "environment": "a subterranean burial crypt with stacked stone ossuary wall niches, broken tombs, and low-hanging green graveyard mist",
    "musicVideoLighting": "cold spectral cyan luminescence, deep subterranean darkness, creepy silhouettes cast along the damp stone walls",
    "cameraMovement": "eerie Dutch-angle tracking shot through stone archways as the crypt lord emerges slowly from the shadows"
  }
];
