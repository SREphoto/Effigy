"""
Script to generate all F1 2026 Master 3D Asset List presets and update promptPresets.ts.
"""

import json
import re

F1_PRESETS = [
    # ==========================================
    # 1. PEOPLE: DRIVERS & TEAMS (11 Teams, 22 Seats + Mid-Season / Reserves)
    # ==========================================
    {
        "id": "f1-drv-norris",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Lando Norris (#1) - McLaren F1 Team",
        "tagline": "2025 World Champion in McLaren papaya and anthracite Nomex race suit with #1 livery",
        "tags": ["driver", "mclaren", "norris", "champion", "papaya", "f1", "personnel"],
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
        "tags": ["driver", "mclaren", "piastri", "papaya", "australia", "f1", "personnel"],
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
        "tagline": "Ferrari talisman in Rosso Corsa Nomex suit with white-and-red Monégasque #16 graphics",
        "tags": ["driver", "ferrari", "leclerc", "rosso-corsa", "monaco", "f1", "personnel"],
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
        "tags": ["driver", "ferrari", "hamilton", "legend", "rosso-corsa", "f1", "personnel"],
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
        "tags": ["driver", "red-bull", "verstappen", "champion", "f1", "personnel"],
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
        "tags": ["driver", "red-bull", "hadjar", "rookie", "f1", "personnel"],
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
        "tags": ["driver", "mercedes", "russell", "petronas", "silver-arrows", "f1", "personnel"],
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
        "tags": ["driver", "mercedes", "antonelli", "young-gun", "italy", "f1", "personnel"],
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
        "tags": ["driver", "aston-martin", "alonso", "champion", "racing-green", "f1", "personnel"],
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
        "tags": ["driver", "aston-martin", "stroll", "canada", "f1", "personnel"],
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
        "tags": ["driver", "alpine", "gasly", "bwt", "france", "f1", "personnel"],
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
        "tags": ["driver", "alpine", "colapinto", "argentina", "f1", "personnel"],
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
        "tags": ["driver", "racing-bulls", "vcarb", "lawson", "new-zealand", "f1", "personnel"],
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
        "tags": ["driver", "racing-bulls", "vcarb", "lindblad", "rookie", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Arvid Lindblad. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Visa Cash App Racing Bulls race suit in white and electric blue with Red Bull athlete branding and #41 number. Bell carbon helmet with yellow, blue, and red geometric graphics, mirrored blue visor. Racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Atmospheric paddock portrait of Arvid Lindblad talking with team principal Alan Permane beside the pit wall, golden hour light filtering through the tree canopy at Imola, 35mm film photography.",
        "promptVideo": "Dolly tracking shot pushing in on Arvid Lindblad as he adjusts his radio earpiece inside the garage before the start of FP1. 24fps cinema capture."
    },
    {
        "id": "f1-drv-hulkenberg",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Nico Hülkenberg (#27) - Audi F1 Team",
        "tagline": "Audi works driver in titanium silver and matte black race suit with vibrant green #27 helmet",
        "tags": ["driver", "audi", "hulkenberg", "titanium", "silver", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Nico Hülkenberg. Tall athletic frame, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Audi F1 Team works Nomex fireproof suit in brushed titanium silver and matte black with red Audi Sport accent bands and #27 numbering. Schuberth SF4 carbon-fiber helmet in signature high-visibility fluorescent green and matte black with chrome visor. Black boots, ergonomic gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Ultra-sleek industrial portrait of Nico Hülkenberg standing before the new Audi R26 chassis inside the gleaming titanium-paneled garage, dramatic monochrome tones with red accents, 35mm film photography.",
        "promptVideo": "Smooth pedestal crane shot rising from Nico Hülkenberg's racing boots up to his neon-green helmet as the Audi V6 hybrid engine fires up with a throaty roar in the background. 24fps cinematic footage."
    },
    {
        "id": "f1-drv-bortoleto",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Gabriel Bortoleto (#5) - Audi F1 Team",
        "tagline": "Brazilian prodigy in Audi titanium works suit with yellow-and-green #5 Brazilian helmet",
        "tags": ["driver", "audi", "bortoleto", "brazil", "rookie", "f1", "personnel"],
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
        "tags": ["driver", "haas", "bearman", "toyota", "tgr", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Oliver Bearman. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 TGR Haas Formula 1 Team race suit in clean matte white with bold black and red Toyota Gazoo Racing angular color blocks and #87 embroidery. Bell HP77 carbon helmet in Union Jack navy, white, and red with chrome visor. Black racing boots and Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Focused cinematic portrait of Oliver Bearman strapped into the Haas VF-26 cockpit on the Bahrain grid, brake cooling smoke drifting past his helmet, 35mm film photography.",
        "promptVideo": "Close-up tracking shot moving along the side of the Haas VF-26 as Oliver Bearman clips his steering wheel onto the column and tests the paddle shifters. 24fps cinematic footage."
    },
    {
        "id": "f1-drv-camara",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Rafael Câmara - TGR Haas F1 Team",
        "tagline": "Haas mid-season debutant in TGR white-black-red Nomex suit with Brazilian lion helmet",
        "tags": ["driver", "haas", "camara", "toyota", "brazil", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Rafael Câmara. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 TGR Haas F1 Team fireproof suit in white, black, and red Toyota Gazoo Racing livery with Brazilian flag embroidery. Bell carbon helmet in vivid yellow, dark green, and royal blue with mirrored silver visor. Racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Emotional candid portrait of Rafael Câmara standing on the São Paulo grid before his debut home Grand Prix, eyes shining behind his visor, 35mm film grain.",
        "promptVideo": "Tracking shot following Rafael Câmara as he emerges from the Haas garage into the roaring applause of the Brazilian grandstands. 24fps cinema capture."
    },
    {
        "id": "f1-drv-albon",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Alex Albon (#23) - Atlassian Williams F1",
        "tagline": "Williams talisman in Atlassian deep royal blue suit with vibrant red-and-blue #23 helmet",
        "tags": ["driver", "williams", "albon", "atlassian", "thailand", "f1", "personnel"],
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
        "tags": ["driver", "williams", "sainz", "atlassian", "spain", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Carlos Sainz. Athletic build, standing in symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Atlassian Williams Racing Nomex suit in royal blue and cyan with embroidered #55 insignia and Spanish flag motif on belt. Schuberth SF4 carbon helmet in deep glossy black with Spanish red and yellow stripes, red chili logo, and smoked tinted visor. Suede racing boots, Nomex gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Moody, high-drama portrait of Carlos Sainz standing next to the Williams FW48 under garage spotlights, arms crossed in quiet concentration, 35mm film aesthetic.",
        "promptVideo": "Dramatic low-angle dolly push toward Carlos Sainz as he places his red chili helmet onto the cockpit halo of the Williams car. 24fps cinematic footage."
    },
    {
        "id": "f1-drv-perez",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Sergio Pérez (#11) - Cadillac F1 Team",
        "tagline": "Cadillac veteran in monochrome black-and-white split suit with Mexican tricolour #11 helmet",
        "tags": ["driver", "cadillac", "perez", "mexico", "checo", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Sergio 'Checo' Pérez. Symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing official 2026 Cadillac F1 Team fireproof Nomex suit in bold asymmetrical monochrome black and crisp white split with Cadillac crest embroidery and #11 designation. Bell HP77 carbon helmet with Aztec geometric motifs, Mexican green-white-red tricolor, and gold iridium visor. Black and white leather racing boots, gloves. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Heroic motorsport portrait of Sergio Pérez bathed in stadium floodlights at the Mexico City GP, towering Foro Sol grandstand packed with fans in the background, 35mm film photography.",
        "promptVideo": "Dynamic crane shot descending from the Cadillac garage gantry down to Sergio Pérez stepping onto the pit lane for the pre-race national anthem. 24fps cinema capture."
    },
    {
        "id": "f1-drv-bottas",
        "domain": "f1",
        "category": "character",
        "subCategory": "Drivers & Teams",
        "name": "Valtteri Bottas (#77) - Cadillac F1 Team",
        "tagline": "Cadillac pilot in black-and-white suit with Tiffany blue and Finnish cross #77 helmet",
        "tags": ["driver", "cadillac", "bottas", "finland", "f1", "personnel"],
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
        "tags": ["driver", "haas", "ocon", "reserve", "france", "f1", "personnel"],
        "prompt3D": "Full body 3D game character model of Formula 1 driver Esteban Ocon. Tall lean build, symmetrical neutral A-pose, arms 45 degrees from torso, feet shoulder-width apart. Wearing 2026 specification Nomex race suit with #31 driver insignia and sponsor patches. Bell carbon helmet decorated with vibrant red, blue tricolor, and Eiffel Tower graphic wrap with mirrored red visor. Thin racing boots and gloves. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Moody black-and-white portrait of Esteban Ocon standing in the pit lane shadow during sunset, sharp light cutting across his visor and racing suit, 35mm film photography.",
        "promptVideo": "Smooth tracking shot following Esteban Ocon through the garage doors as mechanics wheel a set of blanketed tyres past the lens. 24fps cinema capture."
    },

    # ==========================================
    # 2. PEOPLE: TEAM LEADERSHIP & FIA OFFICIALS
    # ==========================================
    {
        "id": "f1-tp-stella",
        "domain": "f1",
        "category": "character",
        "subCategory": "Team Leadership & FIA",
        "name": "Andrea Stella - McLaren Team Principal",
        "tagline": "McLaren team principal in black team softshell jacket with dual-ear comms headset",
        "tags": ["team-principal", "mclaren", "stella", "leadership", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of McLaren Team Principal Andrea Stella. Standing in calm professional pose, arms relaxed at sides. Wearing official McLaren team black technical softshell jacket with subtle papaya orange zipper pulls and sponsor logos, dark technical trousers, team trainers. Wearing a professional carbon-fiber dual-ear pit wall headset with flexible boom microphone around neck, paddock VIP security pass on McLaren lanyard. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, high-fidelity PBR fabric textures.",
        "promptCinematic": "Intense portrait of Andrea Stella seated at the McLaren pit wall telemetry console under canopy shadow, analytical eyes reviewing digital lap delta graphs, 35mm film grain.",
        "promptVideo": "Slow tracking shot along the pit wall passing behind team engineers to frame Andrea Stella watching the pit stop countdown timer with focused composure. 24fps cinematic footage."
    },
    {
        "id": "f1-tp-vasseur",
        "domain": "f1",
        "category": "character",
        "subCategory": "Team Leadership & FIA",
        "name": "Frédéric Vasseur - Ferrari Team Principal",
        "tagline": "Scuderia Ferrari team principal in iconic Rosso Corsa team polo and radio headset",
        "tags": ["team-principal", "ferrari", "vasseur", "leadership", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of Scuderia Ferrari Team Principal Frédéric Vasseur. Symmetrical standing pose, approachable expression. Wearing official Ferrari red technical polo shirt with white HP badge and Prancing Horse embroidery, black trousers, Puma motorsport shoes. Fitted with carbon noise-canceling pit radio headset with red band and boom mic. VIP paddock lanyard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Candid cinematic photograph of Frédéric Vasseur smiling as he debriefs with Charles Leclerc on the Monza pit wall, sea of red tifosi flags behind him, 35mm film aesthetic.",
        "promptVideo": "Steadicam shot tracking Frédéric Vasseur walking through the Ferrari garage greeting mechanics on his way to the pit wall. 24fps cinematic footage."
    },
    {
        "id": "f1-tp-wolff",
        "domain": "f1",
        "category": "character",
        "subCategory": "Team Leadership & FIA",
        "name": "Toto Wolff - Mercedes Team Principal",
        "tagline": "Mercedes-AMG team principal in crisp white team shirt and Bose carbon headset",
        "tags": ["team-principal", "mercedes", "wolff", "leadership", "f1", "personnel"],
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
        "tags": ["team-principal", "aston-martin", "newey", "legend", "aero", "f1", "personnel"],
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
        "tags": ["team-principal", "red-bull", "mekies", "leadership", "f1", "personnel"],
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
        "tags": ["team-principal", "audi", "binotto", "leadership", "f1", "personnel"],
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
        "tags": ["team-principal", "haas", "komatsu", "toyota", "tgr", "f1", "personnel"],
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
        "tags": ["team-principal", "williams", "vowles", "leadership", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of Williams Team Principal James Vowles. Standing in authoritative communicative pose. Wearing official Atlassian Williams Racing royal blue polo with cyan accents, navy trousers, team running shoes. Fitted with carbon-fiber pit wall intercom headset with boom mic, VIP paddock security pass on blue lanyard. Centered subject, level camera, pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Crisp portrait of James Vowles on the pit wall speaking calmly into his radio headset as cars roar past the start-finish straight, 35mm film photography.",
        "promptVideo": "Smooth pedestal crane move descending to James Vowles applauding his mechanics after a successful double-points finish. 24fps cinematic footage."
    },
    {
        "id": "f1-fia-maylander",
        "domain": "f1",
        "category": "character",
        "subCategory": "Team Leadership & FIA",
        "name": "Bernd Mayländer - Official FIA Safety Car Driver",
        "tagline": "Legendary safety car driver in FIA black Nomex race suit with official badge",
        "tags": ["official", "safety-car", "maylander", "fia", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of Bernd Mayländer, the official FIA Safety Car driver since 2000. Standing in confident neutral A-pose. Wearing official FIA black Nomex fireproof race suit with white FIA crest, Safety Car driver emblem, and silver trim. Black racing boots, ergonomic driving gloves. Stilo carbon helmet with German flag accents and clear visor resting under his arm. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Heroic portrait of Bernd Mayländer leaning against the door of his silver Mercedes-AMG GT 63 PRO Safety Car on the pit lane, roof light bar pulsing amber in the evening drizzle, 35mm film aesthetic.",
        "promptVideo": "Tracking shot moving with Bernd Mayländer as he fastens his helmet strap and slides into the driver bucket seat of the Safety Car before deployment. 24fps cinema capture."
    },
    {
        "id": "f1-fia-medical",
        "domain": "f1",
        "category": "character",
        "subCategory": "Team Leadership & FIA",
        "name": "FIA Medical Rescue Team (Doctor & Driver)",
        "tagline": "FIA track doctor and medical car driver in fireproof medical suits with trauma backpack",
        "tags": ["official", "medical-car", "doctor", "fia", "f1", "personnel"],
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
        "tags": ["official", "scrutineer", "fia", "steward", "inspection", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of an FIA Technical Scrutineer. Standing in neutral inspecting pose holding an official digital precision skid-block deflection gauge and aluminum clipboard. Wearing official FIA technical delegate uniform: royal blue polo shirt with embroidered FIA crest, durable navy cargo trousers with tool loops, steel-toe workshop shoes, official FIA lanyard pass. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR fabric textures.",
        "promptCinematic": "Serious documentary photograph of an FIA technical scrutineer kneeling beside a car floor on the pit lane weighbridge, measuring ground clearance with optical lasers, 35mm film photography.",
        "promptVideo": "Slow tracking camera moving around the scrutineer as he applies tamper-evident FIA barcode security seals to an inspected gearbox. 24fps cinema capture."
    },

    # ==========================================
    # 3. PEOPLE: OFFICIALS & TRACK CREW
    # ==========================================
    {
        "id": "f1-crew-marshal",
        "domain": "f1",
        "category": "character",
        "subCategory": "Officials & Track Crew",
        "name": "Track Safety Marshal with Warning Flag",
        "tagline": "Trackside safety volunteer in high-vis safety orange coveralls holding official marshal flag",
        "tags": ["marshal", "safety", "trackside", "flag", "orange", "f1", "personnel"],
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
        "tags": ["fire-marshal", "extinguisher", "safety", "fire", "f1", "personnel"],
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
        "tags": ["media", "cameraman", "photographer", "broadcast", "f1", "personnel"],
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
        "tags": ["pirelli", "tyres", "technician", "official", "f1", "personnel"],
        "prompt3D": "Full body 3D character model of a Pirelli Motorsport Tyre Engineer. Standing in neutral pose holding a digital infrared tread depth and temperature needle probe. Wearing official Pirelli technical uniform: black and vibrant yellow polo with Pirelli red logo embroidery, dark technical trousers, safety shoes, Pirelli lanyard and data clipboard. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean rigging silhouette, PBR textures.",
        "promptCinematic": "Documentary photograph of a Pirelli technician measuring the core temperature of a steaming, blistered slick tyre immediately after a race stint, 35mm film photography.",
        "promptVideo": "Close-up tracking camera following the Pirelli engineer as he scans barcode labels on a freshly arrived rack of pre-heated slick tyres. 24fps cinematic footage."
    },

    # ==========================================
    # 4. PIT STOP: ROLES & EQUIPMENT
    # ==========================================
    {
        "id": "f1-pit-gunner",
        "domain": "f1",
        "category": "character",
        "subCategory": "Pit Stop Roles & Crew",
        "name": "Pit Stop Wheel Gunner Specialist",
        "tagline": "Pit stop mechanic in deep squat holding high-torque pneumatic Paoli wheel gun",
        "tags": ["pit-stop", "gunner", "paoli", "wheel-gun", "mechanic", "f1", "personnel"],
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
        "tags": ["pit-stop", "jack", "front-jack", "quick-lift", "mechanic", "f1", "personnel"],
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
        "tags": ["pit-equipment", "wheel-gun", "paoli", "pneumatic", "f1", "tool"],
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
        "tags": ["pit-equipment", "jack", "front-jack", "quick-release", "f1", "tool"],
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
        "tags": ["pit-equipment", "jack", "rear-jack", "crash-structure", "f1", "tool"],
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
        "tags": ["pit-equipment", "gantry", "boom", "lights", "overhead", "f1"],
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
        "tags": ["pit-equipment", "release-light", "traffic-light", "signal", "f1"],
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
        "tags": ["pit-equipment", "tyre-blanket", "warming", "pirelli", "controller", "f1"],
        "prompt3D": "Complete Formula 1 electric tyre blanket warming system. Includes four heavy-duty thermal insulation wraps fitted over 18-inch Pirelli slick wheels, featuring durable Nomex outer shell in team livery, internal carbon heating filaments, clear inspection windows, and quick-release Velcro flaps. Connected via thick insulated wiring looms to a heavy-duty aluminum touring flight case controller console with digital LED temperature readouts, rotary dials, and master circuit breakers. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR fabric, rubber, and aluminum textures.",
        "promptCinematic": "Atmospheric garage shot of tire blankets steaming in the cold morning air of Silverstone, glowing digital readouts displaying '80°C' in amber LEDs, 35mm film photography.",
        "promptVideo": "Dolly move past rows of blanketed tires connected to humming power distribution consoles as technicians check heat distribution with infrared laser guns. 24fps cinematic footage."
    },
    {
        "id": "f1-pit-spare-nose",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Pit Equipment",
        "name": "Spare Front Wing & Nosecone on Stand",
        "tagline": "Fully assembled 2026 carbon-fiber front wing assembly mounted on quick-deploy garage stand",
        "tags": ["pit-equipment", "front-wing", "nosecone", "aerodynamics", "spare", "f1"],
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
        "tags": ["pit-equipment", "starter", "engine-starter", "pneumatic", "f1", "tool"],
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
        "tags": ["pit-equipment", "fire-extinguisher", "safety", "trolley", "f1"],
        "prompt3D": "Formula 1 pit lane rapid-intervention wheeled fire extinguisher trolley. Heavy-duty red steel tubular handcart chassis with large solid-rubber wheels. Carrying twin 25kg high-pressure cylinders (AFFF aqueous film-forming foam and Carbon Dioxide) with brass manifold valves, pressure gauges, coiled 10-meter reinforced discharge hose, and long fiberglass discharge horn with squeeze-grip trigger nozzle. High-visibility safety inspection tags and team ID decals. Centered subject, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR textures.",
        "promptCinematic": "Moody photograph of the wheeled extinguisher unit stationed at the pit box entrance, reflections of neon pit lights distorting across the curved red cylinder tanks, 35mm film aesthetic.",
        "promptVideo": "Smooth 180-degree orbit around the wheeled fire extinguisher cart parked along the pit lane safety apron. 24fps cinema capture."
    },

    # ==========================================
    # 5. PIT WALL & TELEMETRY
    # ==========================================
    {
        "id": "f1-pw-telemetry-stand",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Pit Wall & Telemetry",
        "name": "Pit Wall Command Telemetry Stand",
        "tagline": "Multi-tier aluminum pit wall canopy stand with stacked ultra-bright telemetry displays and swivel seats",
        "tags": ["pit-wall", "telemetry", "monitors", "command", "f1"],
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
        "tags": ["pit-wall", "headset", "riedel", "radio", "comms", "f1"],
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
        "tags": ["pit-wall", "cable-bridge", "conduit", "fiber", "pit-lane", "f1"],
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
        "tags": ["pit-wall", "pitboard", "signaling", "laps", "f1"],
        "prompt3D": "Official Formula 1 manual trackside pit board. Lightweight high-modulus carbon-fiber ladder frame with ergonomic foam grip handles and an extended telescoping aluminum reach arm. Features multi-tier horizontal slotted rails holding interchangeable high-contrast fluorescent neon-yellow plastic letters and numbers displaying 'P1 +2.4 L48'. Includes an organized aluminum flight case storage box with full alpha-numeric plaque sets. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR carbon and plastic textures.",
        "promptCinematic": "Dramatic high-speed photograph of a mechanic holding the pit board out over the debris fence as a car flashes past at 320 km/h in a blur of speed, 35mm film grain.",
        "promptVideo": "Slow-motion camera tilt down the pit board frame as the mechanic slides in a new gap card before extending it over the pit wall. 24fps cinematic footage."
    },

    # ==========================================
    # 6. 2026 TYRES & WHEELS
    # ==========================================
    {
        "id": "f1-tyre-slick-soft",
        "domain": "f1",
        "category": "prop",
        "subCategory": "2026 Tyres & Wheels",
        "name": "2026 Pirelli P Zero Soft Tyre (Red)",
        "tagline": "2026 specification 18-inch soft compound slick with red sidewalls and chequered flag motif",
        "tags": ["tyre", "wheel", "pirelli", "soft", "red", "2026", "f1"],
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
        "tags": ["tyre", "wheel", "pirelli", "medium", "yellow", "2026", "f1"],
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
        "tags": ["tyre", "wheel", "pirelli", "hard", "white", "2026", "f1"],
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
        "tags": ["tyre", "wheel", "pirelli", "intermediate", "green", "grooved", "f1"],
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
        "tags": ["tyre", "wheel", "pirelli", "wet", "blue", "grooved", "rain", "f1"],
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
        "tags": ["tyre", "wheel", "worn", "graining", "blisters", "marbles", "f1"],
        "prompt3D": "Heavily degraded and worn Formula 1 racing tyre after a 30-lap high-abrasion stint. The once-smooth slick rubber surface is covered in realistic thermal blisters, feathered diagonal graining across the inner shoulder, melted rubber pick-up marbles fused to the crown, and dull weathered sidewall branding with brake dust scorching on the wheel rim. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), highly detailed PBR textures depicting realistic rubber thermal wear.",
        "promptCinematic": "Gritty close-up photograph of a shredded, marbled race tyre sitting on the parc fermé scales, heat waves rippling in the air above the scarred rubber, 35mm film photography.",
        "promptVideo": "Rotational camera move examining the harsh thermal blisters and rubber pickup across the worn tire shoulder. 24fps cinema capture."
    },
    {
        "id": "f1-tyre-trolley",
        "domain": "f1",
        "category": "prop",
        "subCategory": "2026 Tyres & Wheels",
        "name": "Paddock Heavy-Duty Tyre Transport Trolley",
        "tagline": "Tubular steel 4-wheel transport cart loaded with stacked pre-warmed tyre sets",
        "tags": ["tyre", "trolley", "paddock", "wheels", "f1", "equipment"],
        "prompt3D": "Formula 1 heavy-duty tyre transport trolley. Welded tubular steel frame powder-coated in team colors, equipped with four heavy-duty lockable pneumatic caster wheels and a curved towing handle. Racked with two full sets (8 wheels) of pre-warmed 18-inch Pirelli slick tyres wrapped in insulated electric tire blankets with connected thermal wiring looms. Integrated battery pack mounting bracket on lower shelf. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR metallic and rubber textures.",
        "promptCinematic": "Atmospheric shot of a mechanic wheeling a tyre trolley through the bustling pit lane as evening shadows lengthen across the asphalt, 35mm film grain.",
        "promptVideo": "Tracking shot following the tyre trolley rolling over pit lane expansion joints, blankets steaming gently in the cool air. 24fps cinematic footage."
    },

    # ==========================================
    # 7. GARAGE & WORKSHOP FACILITIES
    # ==========================================
    {
        "id": "f1-gar-bay-shell",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Garage & Workshop",
        "name": "Modular Concrete Pit Garage Bay",
        "tagline": "Complete architectural concrete garage bay with overhead ducting, drainage, and rear partitions",
        "tags": ["garage", "bay", "pit-building", "architecture", "concrete", "f1"],
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
        "tags": ["garage", "trestles", "stands", "chassis", "tool", "f1"],
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
        "tags": ["garage", "setup-pad", "scales", "flat-patch", "alignment", "f1"],
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
        "tags": ["garage", "toolcab", "snap-on", "tools", "shadow-board", "f1"],
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
        "tagline": "Mobile thermal cart circulating 90°C oil and coolant through engine block prior to ignition",
        "tags": ["garage", "heater", "pre-heater", "engine", "cooling", "f1"],
        "prompt3D": "Formula 1 engine pre-heating fluid circulation cart. Compact stainless steel mobile cabinet housing dual electric thermal heating elements, digital temperature controllers, high-pressure circulation pumps, and quick-disconnect dry-break silicone fluid hoses leading to engine block ports. Digital LED display showing current core temperature at 85°C. Mounted on lockable industrial casters with team logo identification. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
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
        "tags": ["garage", "blowers", "cooling", "fans", "brakes", "f1"],
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
        "tags": ["garage", "flight-case", "logistics", "freight", "touring", "f1"],
        "prompt3D": "Stack of three heavy-duty Formula 1 touring flight cases (large, medium, small). Heavy-gauge black birch plywood panels reinforced with thick extruded aluminum angle edging, recessed spring-loaded steel butterfly twist latches, heavy-duty recessed carry handles, and heavy steel ball corner reinforcements. Exterior faces marked with team stencils, FIA freight customs inspection stickers, and white stenciled labels reading 'SPARE AERO - WING ELEMENTS'. Centered subject, three-quarter view, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR textures.",
        "promptCinematic": "Gritty documentary photograph of stacked flight cases in the paddock freight bay under heavy rain, water beading on the textured black laminate, 35mm film photography.",
        "promptVideo": "Pan shot across rows of silver-edged flight cases lining the garage rear wall as logistics crew load freight crates. 24fps cinema capture."
    },

    # ==========================================
    # 8. PIT LANE & TRACK BARRIERS
    # ==========================================
    {
        "id": "f1-pl-tagheuer-clock",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Pit Lane Facilities",
        "name": "TAG Heuer Official Pit Lane Master Clock",
        "tagline": "Iconic 1.2-meter diameter track clock inspired by the 1986 Series 1 chronograph design",
        "tags": ["pit-lane", "clock", "tag-heuer", "timing", "official", "f1"],
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
        "tags": ["pit-lane", "speed-limit", "timing", "signs", "f1"],
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
        "tags": ["barrier", "armco", "guardrail", "safety", "steel", "f1"],
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
        "tags": ["barrier", "tecpro", "safety", "impact", "f1"],
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
        "tags": ["barrier", "safer", "safety", "impact", "miami", "vegas", "f1"],
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
        "tags": ["barrier", "tyrewall", "tyres", "safety", "conveyor-belt", "f1"],
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
        "tags": ["barrier", "fence", "catch-fence", "debris", "safety", "f1"],
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
        "tags": ["track", "kerb", "apex", "rumble", "curb", "f1"],
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
        "tags": ["track", "kerb", "sausage-kerb", "chicane", "yellow", "f1"],
        "prompt3D": "Formula 1 sausage curb (disincentive curb for chicane apexes). Heavy cast-concrete raised curb block (150mm high by 2 meters long) with rounded teardrop cross-section profile painted in high-visibility traffic yellow. Heavy steel rebar anchor pins bolted into track sub-base, skid marks and carbon fiber scuff marks on top ridge. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR concrete textures.",
        "promptCinematic": "Dramatic shot looking over a yellow sausage kerb at the Monza chicane as a car jumps over the apex, sparks showering behind it, 35mm film grain.",
        "promptVideo": "Slow tracking camera moving parallel to the yellow sausage kerb highlighting the steep deterrent profile. 24fps cinematic footage."
    },

    # ==========================================
    # 9. TRACK LIGHTS & ELECTRONIC SIGNALS
    # ==========================================
    {
        "id": "f1-sig-start-gantry",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Lights & Electronic Signals",
        "name": "Official FIA 5-Pair Red Starting Light Gantry",
        "tagline": "Spanning overhead starting lights truss with 5 dual red light columns, amber abort, and green wave lights",
        "tags": ["lights", "start-gantry", "starting-lights", "fia", "gantry", "f1"],
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
        "tags": ["lights", "flag-panel", "digital-flag", "marshal", "led", "f1"],
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
        "tags": ["lights", "floodlight", "tower", "night-race", "stadium", "f1"],
        "prompt3D": "Formula 1 night-race high-mast stadium floodlight tower. 45-meter tall galvanized steel lattice truss monopole structure with internal maintenance ladder and safety rest platforms. Crowned by a wide rectangular steel headframe holding 48 high-output 5600K daylight-balanced LED sports stadium floodlights with individual glare-control louvers. Transformer control cabinets and concrete foundation pad at base. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR steel and glass textures.",
        "promptCinematic": "Looking directly up into the blinding white light array of a floodlight tower during the Singapore night Grand Prix, palm tree silhouettes flanking the frame, 35mm film photography.",
        "promptVideo": "Smooth vertical crane move descending the lattice tower from the blazing floodlights down to the dark asphalt below where race cars streak by like comets. 24fps cinema capture."
    },

    # ==========================================
    # 10. RECOVERY & CRANES
    # ==========================================
    {
        "id": "f1-rec-crane-fixed",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Recovery & Cranes",
        "name": "Pedestal-Mounted Telescopic Trackside Crane",
        "tagline": "Permanent heavy-duty hydraulic telescopic crane station iconic to Monaco and street circuits",
        "tags": ["recovery", "crane", "monaco", "telescopic", "lift", "f1"],
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
        "tags": ["recovery", "telehandler", "tractor", "manitou", "forklift", "f1"],
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
        "tags": ["recovery", "sling", "lifting", "crane", "roll-hoop", "f1"],
        "prompt3D": "Formula 1 official car lifting sling. Four-leg high-tensile polyester webbing sling assembly in bright safety orange with protective anti-abrasion Cordura sleeves. Fitted with a forged heavy-duty alloy master oval ring for crane hook connection, four self-locking swivel safety hooks with rubber coated snouts, and specialized quick-release titanium eyelet adapter that locks into the car's roll-hoop extraction socket behind the cockpit. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR synthetic webbing and forged alloy textures.",
        "promptCinematic": "Detailed close-up photograph of the recovery sling hooked to the roll-hoop of an F1 car, tensioning as the crane cable tightens, 35mm film photography.",
        "promptVideo": "Smooth rotational camera arc examining the heavy forged links and tensioned straps of the recovery sling. 24fps cinema capture."
    },

    # ==========================================
    # 11. CIRCUIT SIGNAGE & BRANDING
    # ==========================================
    {
        "id": "f1-sgn-partner-boards",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Circuit Signage & Brands",
        "name": "2026 Global Partner Barrier Boards",
        "tagline": "Vibrant composite perimeter boards featuring 2026 partners: Aramco, AWS, DHL, Heineken, Pirelli",
        "tags": ["signage", "brands", "sponsors", "aramco", "dhl", "pirelli", "f1"],
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
        "tags": ["signage", "brake-marker", "braking", "distance", "trackside", "f1"],
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
        "tags": ["signage", "timing-tower", "leaderboard", "pylon", "led", "f1"],
        "prompt3D": "Formula 1 circuit electronic timing tower pylon. 30-meter vertical steel lattice tower covered in full-color high-luminance outdoor LED matrix panels. Displays live top-20 driver three-letter acronyms (VER, NOR, LEC, HAM, RUS, PIA...), current lap number, time intervals (+1.2s), team color bars, and rotating partner sponsor advertisements at the crown. Galvanized structural support legs and power substation cabinet at base. Centered subject, level camera, three-quarter perspective, isolated on neutral light-grey background (#d8d8d8), clean PBR steel and LED textures.",
        "promptCinematic": "Towering night-race photograph of the glowing electronic timing tower reflecting across the wet pit lane asphalt in Singapore, 35mm film grain.",
        "promptVideo": "Smooth vertical camera pedestal rising up the height of the timing tower as driver positions dynamically scramble and update. 24fps cinematic footage."
    },

    # ==========================================
    # 12. CIRCUIT STRUCTURES
    # ==========================================
    {
        "id": "f1-str-pit-building",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Circuit Structures",
        "name": "Multi-Story Pit Building & Paddock Club Complex",
        "tagline": "Full architectural pit complex: ground floor garages, second floor Paddock Club, and rooftop VIP suites",
        "tags": ["structure", "pit-building", "architecture", "paddock-club", "garages", "f1"],
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
        "tags": ["structure", "podium", "ceremony", "victory", "trophies", "f1"],
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
        "tags": ["structure", "grandstand", "stadium", "spectators", "architecture", "f1"],
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
        "tags": ["structure", "motorhome", "hospitality", "paddock", "f1"],
        "prompt3D": "Formula 1 team hospitality motorhome palace (modular mobile building). Three stories of precision glass and brushed aluminum construction with smoked double-glazed curtain walls, second-floor open-air dining terrace with wood-deck flooring, private driver meeting suites, and commercial catering kitchen on ground level. Massive team branding and sponsor crests across the exterior facade. Centered architectural perspective, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR glass and metal textures.",
        "promptCinematic": "Sleek evening shot in the Monaco paddock between towering team motorhomes, warm ambient patio lights reflecting in the mirrored glass facades, 35mm film photography.",
        "promptVideo": "Steadicam walk-through moving along the pedestrian alley between competing team hospitality motorhomes as drivers and celebrities mingle. 24fps cinema capture."
    },

    # ==========================================
    # 13. OFFICIAL & SERVICE VEHICLES
    # ==========================================
    {
        "id": "f1-veh-safety-car",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Official & Service Vehicles",
        "name": "2026 Mercedes-AMG GT 63 PRO Official Safety Car",
        "tagline": "First AWD official safety car in silver and red livery with aerodynamic roof LED light bar",
        "tags": ["vehicle", "safety-car", "mercedes", "amg", "gt63", "official", "f1"],
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
        "tags": ["vehicle", "medical-car", "mercedes", "amg", "medical", "rescue", "f1"],
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
        "tags": ["vehicle", "truck", "transporter", "semi", "logistics", "f1"],
        "prompt3D": "Formula 1 official team race car transporter semi-truck. European cab-over articulated tractor unit paired with a sleek custom aerodynamic double-deck enclosed box trailer. Finished in flawless high-gloss team livery with large team crest and sponsor logos. Trailer features fold-out hydraulic dual-car rear elevator lift, deployable side awnings, tinted exterior upper office windows, and polished chrome alloy wheel rims. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR automotive textures.",
        "promptCinematic": "Paddock hero photograph of twin immaculate team transporter trucks parked in perfect alignment, mirror finish on black paint reflecting paddock activity, 35mm film photography.",
        "promptVideo": "Slow tracking shot moving along the side of the 16-meter transporter trailer as the hydraulic rear tail-lift lowers a covered race car to the ground. 24fps cinema capture."
    },

    # ==========================================
    # 14. TRACK ENVIRONMENT & MATERIALS
    # ==========================================
    {
        "id": "f1-env-racing-line",
        "domain": "f1",
        "category": "prop",
        "subCategory": "Track Environment & Materials",
        "name": "High-Grip Circuit Asphalt & Rubbered Racing Line",
        "tagline": "Fine-aggregate circuit asphalt texture with dense dark rubbered groove line laid down on apexes",
        "tags": ["environment", "asphalt", "racing-line", "texture", "rubber", "f1"],
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
        "tags": ["environment", "marbles", "rubber", "debris", "decal", "f1"],
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
        "tags": ["environment", "wet", "rain", "puddles", "spray", "f1"],
        "prompt3D": "Dynamic wet Formula 1 track surface module. High-gloss saturated asphalt pavement with realistic standing water puddles reflecting environment lighting, hydroplaning tire water clearance tracks, and wet spray texture. Includes contrasting painted track boundary lines with reduced specular grip. Centered subject, three-quarter perspective, level camera, isolated on neutral light-grey background (#d8d8d8), clean PBR wet surface shaders with Fresnel reflections.",
        "promptCinematic": "Mirror reflections of track floodlights rippling in dark puddles on the wet straight as evening rain falls, 35mm film photography.",
        "promptVideo": "Dolly tracking shot gliding over the glossy wet tarmac as raindrops create expanding concentric rings in the surface water. 24fps cinema capture."
    },

    # ==========================================
    # 15. 2026 CAR AERO & COCKPIT TECH
    # ==========================================
    {
        "id": "f1-car-active-front-wing",
        "domain": "f1",
        "category": "prop",
        "subCategory": "2026 Car Aero & Cockpit",
        "name": "2026 Active Front Wing Assembly",
        "tagline": "Dynamic active aero front wing actuating between high-downforce Corner Mode and low-drag Straight Mode",
        "tags": ["car", "front-wing", "active-aero", "2026", "aerodynamics", "f1"],
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
        "tags": ["car", "rear-wing", "active-aero", "2026", "aerodynamics", "f1"],
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
        "tags": ["car", "halo", "safety", "titanium", "cockpit", "f1"],
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
        "tags": ["car", "steering-wheel", "pcu-8d", "cockpit", "telemetry", "carbon", "f1"],
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
        "tags": ["car", "t-cam", "camera", "broadcast", "roll-hoop", "f1"],
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
        "tags": ["car", "ers", "hybrid", "safety", "led", "lights", "f1"],
        "prompt3D": "Formula 1 Energy Recovery System (ERS) high-voltage safety indicator light module. Pair of sealed weatherproof LED warning beacons mounted adjacent to the cockpit opening and roll-hoop structure. Features ultra-bright dual-mode LEDs that glow steady emerald green when the 350kW hybrid electrical system is safely grounded and de-energized, or pulsing amber hazard warning when live electrical insulation fault is detected. Clear polycarbonate lens and carbon mounting bezel. Centered subject, level camera, isolated on pure neutral light-grey background (#d8d8d8), clean PBR optical textures.",
        "promptCinematic": "Close-up of the green ERS light glowing brightly beside the cockpit as marshals touch the car chassis during a pit stop, 35mm film photography.",
        "promptVideo": "Camera focusing on the ERS light cluster switching state from standby amber to safe green as the car enters parc fermé. 24fps cinematic footage."
    }
]

print(f"Total F1 presets ready: {len(F1_PRESETS)}")

def update_prompt_presets():
    with open("ui/src/promptPresets.ts", "r") as f:
        content = f.read()

    # 1. Update F1 subcategories in DOMAIN_CATEGORIES
    new_subcategories = [
        "Drivers & Teams",
        "Team Leadership & FIA",
        "Officials & Track Crew",
        "Pit Stop Roles & Crew",
        "Pit Equipment",
        "Pit Stop Equipment",
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
    subcats_str = json.dumps(new_subcategories, indent=6)
    
    # Replace subcategories of f1 in DOMAIN_CATEGORIES
    pattern = r'(\{\s*"id":\s*"f1",\s*"label":\s*"2026 F1 Paddock",\s*"icon":\s*"🏎️",\s*"description":\s*"[^"]*",\s*"subCategories":\s*)\[[^\]]*\]'
    content = re.sub(pattern, r'\g<1>' + subcats_str, content)

    # 2. Replace F1 items in PROMPT_PRESETS
    # Find start and end of F1 items in PROMPT_PRESETS
    f1_start_match = re.search(r'\{\s*"id":\s*"f1-[^"]*",\s*"domain":\s*"f1"', content)
    if not f1_start_match:
        print("Could not find start of F1 presets in PROMPT_PRESETS")
        return

    start_idx = f1_start_match.start()

    # Find the start of the next domain after F1 (diablo)
    diablo_match = re.search(r'\{\s*"id":\s*"d-[^"]*",\s*"domain":\s*"diablo"', content)
    if not diablo_match:
        print("Could not find start of Diablo presets after F1")
        return

    end_idx = diablo_match.start()

    # Format F1 presets as TypeScript JSON array items
    f1_items_ts = ""
    for p in F1_PRESETS:
        f1_items_ts += "  " + json.dumps(p, indent=2).replace("\n", "\n  ") + ",\n"

    new_content = content[:start_idx] + f1_items_ts + content[end_idx:]

    with open("ui/src/promptPresets.ts", "w") as f:
        f.write(new_content)
    
    print("Successfully updated ui/src/promptPresets.ts with all F1 2026 presets!")

if __name__ == "__main__":
    update_prompt_presets()
