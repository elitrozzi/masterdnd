const SPELL_ES = {
  'Acid Splash':'Salpicadura Ácida','Blade Ward':'Guardia de Espada','Chill Touch':'Toque Gélido',
  'Dancing Lights':'Luces Danzantes','Druidcraft':'Arte Druídico','Eldritch Blast':'Proyección Sobrenatural',
  'Fire Bolt':'Rayo de Fuego','Friends':'Amigos','Frostbite':'Quemadura de Frío','Guidance':'Orientación',
  'Light':'Luz','Mage Hand':'Mano de Mago','Mending':'Reparar','Message':'Mensaje',
  'Minor Illusion':'Ilusión Menor','Poison Spray':'Rociada de Veneno','Prestidigitation':'Prestidigitación',
  'Produce Flame':'Producir Llama','Ray of Frost':'Rayo de Frío','Resistance':'Resistencia',
  'Sacred Flame':'Llama Sagrada','Shocking Grasp':'Agarre Eléctrico','Spare the Dying':'Salvar al Moribundo',
  'Thaumaturgy':'Taumaturgia','Thornwhip':'Látigo Espinoso','Toll the Dead':'Doblar las Campanas',
  'True Strike':'Golpe Certero','Vicious Mockery':'Burla Despiadada','Green-Flame Blade':'Hoja de Llama Verde',
  'Mind Sliver':'Fragmento Mental','Sword Burst':'Estallido de Espadas','Thunderclap':'Chasquido de Trueno',
  'Shillelagh':'Clava Druídica','Word of Radiance':'Palabra de Radiancia','Infestation':'Infestación',
  'Absorb Elements':'Absorber Elementos','Alarm':'Alarma','Animal Friendship':'Amistad con Animales',
  'Armor of Agathys':'Armadura de Agathys','Arms of Hadar':'Brazos de Hadar','Bane':'Maldecir',
  'Bless':'Bendición','Burning Hands':'Manos Ardientes','Charm Person':'Encantar Persona',
  'Chromatic Orb':'Orbe Cromático','Color Spray':'Rociada de Colores','Command':'Orden',
  'Comprehend Languages':'Entender Idiomas','Cure Wounds':'Curar Heridas','Detect Magic':'Detectar Magia',
  'Detect Evil and Good':'Detectar el Bien y el Mal','Disguise Self':'Disfrazarse',
  'Divine Favor':'Favor Divino','Entangle':'Enredar','Expeditious Retreat':'Retirada Expeditiva',
  'Faerie Fire':'Luz de las Hadas','False Life':'Vida Falsa','Feather Fall':'Caída de Pluma',
  'Find Familiar':'Encontrar Familiar','Fog Cloud':'Nube de Niebla','Goodberry':'Baya Benéfica',
  'Grease':'Grasa','Guiding Bolt':'Rayo Guía','Healing Word':'Palabra Sanadora',
  'Hellish Rebuke':'Represalia Infernal','Heroism':'Heroísmo','Hex':'Maldición',
  "Hunter's Mark":'Marca del Cazador','Ice Knife':'Cuchillo de Hielo','Identify':'Identificar',
  'Inflict Wounds':'Infligir Heridas','Jump':'Saltar','Longstrider':'Paso Largo',
  'Mage Armor':'Armadura del Mago','Magic Missile':'Misil Mágico',
  'Protection from Evil and Good':'Protección contra el Bien y el Mal',
  'Ray of Sickness':'Rayo de Enfermedad','Sanctuary':'Santuario','Shield':'Escudo',
  'Shield of Faith':'Escudo de Fe','Silent Image':'Imagen Silenciosa','Sleep':'Dormir',
  'Speak with Animals':'Hablar con Animales',"Tasha's Hideous Laughter":'Risa Horrenda de Tasha',
  "Tenser's Floating Disk":'Disco Flotante de Tenser','Thunderwave':'Ola de Trueno',
  'Unseen Servant':'Sirviente Invisible','Witch Bolt':'Rayo Brujo','Wrathful Smite':'Golpe Iracundo',
  'Searing Smite':'Golpe Abrasador','Thunderous Smite':'Golpe Atronador',
  'Aid':'Auxilio','Alter Self':'Alteración Personal','Arcane Lock':'Cerrojo Arcano',
  'Augury':'Augurio','Barkskin':'Corteza','Blindness/Deafness':'Ceguera/Sordera',
  'Blur':'Imagen Borrosa','Calm Emotions':'Calmar Emociones','Cloud of Daggers':'Nube de Dagas',
  'Continual Flame':'Llama Continua','Crown of Madness':'Corona de Locura','Darkness':'Oscuridad',
  'Darkvision':'Visión en la Oscuridad','Detect Thoughts':'Detectar Pensamientos',
  'Enhance Ability':'Mejorar Habilidad','Enlarge/Reduce':'Agrandar/Reducir','Enthrall':'Embelesar',
  'Find Steed':'Encontrar Montura','Flame Blade':'Hoja de Llamas','Flaming Sphere':'Esfera de Llamas',
  'Gust of Wind':'Ráfaga de Viento','Heat Metal':'Metal Incandescente','Hold Person':'Paralizar Persona',
  'Invisibility':'Invisibilidad','Knock':'Abrir','Lesser Restoration':'Restauración Menor',
  'Levitate':'Levitar','Magic Weapon':'Arma Mágica',"Melf's Acid Arrow":'Flecha Ácida de Melf',
  'Mirror Image':'Imagen Especular','Misty Step':'Paso Nublado','Moonbeam':'Haz de Luna',
  'Pass Without Trace':'Pasar Sin Rastro','Prayer of Healing':'Oración Sanadora',
  'Protection from Poison':'Protección contra el Veneno','Ray of Enfeeblement':'Rayo de Debilitamiento',
  'Rope Trick':'Truco de la Cuerda','Scorching Ray':'Rayo Abrasador','See Invisibility':'Ver Invisibilidad',
  'Shadow Blade':'Hoja de Sombra','Shatter':'Añicos','Silence':'Silencio',
  'Spider Climb':'Trepar Paredes','Spike Growth':'Espinas','Spiritual Weapon':'Arma Espiritual',
  'Suggestion':'Sugestión','Warding Bond':'Vínculo Guardián','Web':'Telaraña',
  'Zone of Truth':'Zona de la Verdad',"Tasha's Mind Whip":'Látigo Mental de Tasha',
  'Animate Dead':'Animar Muertos','Aura of Vitality':'Aura de Vitalidad',
  'Beacon of Hope':'Faro de Esperanza','Bestow Curse':'Impartir Maldición','Blink':'Parpadeo',
  'Call Lightning':'Convocar Rayo','Clairvoyance':'Clarividencia','Conjure Animals':'Convocar Animales',
  'Counterspell':'Contrahechizo','Create Food and Water':'Crear Alimento y Agua',
  'Daylight':'Luz del Día','Dispel Magic':'Disipar Magia','Elemental Weapon':'Arma Elemental',
  'Fear':'Miedo','Fireball':'Bola de Fuego','Fly':'Volar','Gaseous Form':'Forma Gaseosa',
  'Glyph of Warding':'Glifo de Protección','Haste':'Celeridad','Hunger of Hadar':'Hambre de Hadar',
  'Hypnotic Pattern':'Patrón Hipnótico',"Leomund's Tiny Hut":'Refugio de Leomund',
  'Lightning Bolt':'Rayo','Magic Circle':'Círculo Mágico','Major Image':'Imagen Mayor',
  'Mass Healing Word':'Palabra Sanadora Masiva','Nondetection':'No Detección',
  'Plant Growth':'Crecimiento Vegetal','Protection from Energy':'Protección contra Energía',
  'Remove Curse':'Retirar Maldición','Revivify':'Revivificar','Sending':'Envío de Mensajes',
  'Sleet Storm':'Aguanieve','Slow':'Ralentizar','Speak with Dead':'Hablar con Muertos',
  'Speak with Plants':'Hablar con Plantas','Spirit Guardians':'Guardianes Espirituales',
  'Spirit Shroud':'Mortaja Espiritual','Stinking Cloud':'Nube Hedionda',
  'Thunder Step':'Paso Atronador','Tongues':'Lenguajes','Vampiric Touch':'Toque Vampírico',
  'Water Breathing':'Respirar Bajo el Agua','Water Walk':'Caminar sobre el Agua',
  'Wind Wall':'Muro de Viento','Life Transference':'Transferencia de Vida',
  'Arcane Eye':'Ojo Arcano','Aura of Life':'Aura de Vida','Aura of Purity':'Aura de Pureza',
  'Banishment':'Destierro','Blight':'Plaga','Compulsion':'Compulsión','Confusion':'Confusión',
  'Control Water':'Controlar el Agua','Death Ward':'Resguardo de la Muerte',
  'Dimension Door':'Puerta Dimensional','Divination':'Adivinación','Dominate Beast':'Dominar Bestia',
  "Evard's Black Tentacles":'Tentáculos Negros de Evard','Fabricate':'Fabricar',
  'Fire Shield':'Escudo de Fuego','Freedom of Movement':'Libertad de Movimiento',
  'Greater Invisibility':'Invisibilidad Mayor','Guardian of Faith':'Guardián de la Fe',
  'Ice Storm':'Tormenta de Hielo','Locate Creature':'Localizar Criatura',
  'Phantasmal Killer':'Asesino Fantasmal','Polymorph':'Polimorfismo','Stone Shape':'Conformar Piedra',
  'Stoneskin':'Piel Pétrea','Wall of Fire':'Muro de Fuego',
  'Animate Objects':'Animar Objetos','Antilife Shell':'Escudo Antivida',
  "Bigby's Hand":'Mano de Bigby','Circle of Power':'Círculo de Poder','Cloudkill':'Nube Mortal',
  'Commune':'Comunión','Commune with Nature':'Comunión con la Naturaleza','Cone of Cold':'Cono de Frío',
  'Conjure Elemental':'Convocar Elemental','Contact Other Plane':'Contactar Otro Plano',
  'Contagion':'Contagio','Control Winds':'Controlar Vientos','Creation':'Creación',
  'Destructive Wave':'Ola Destructiva','Dispel Evil and Good':'Disipar el Bien y el Mal',
  'Dominate Person':'Dominar Persona','Dream':'Sueño','Flame Strike':'Columna de Llamas',
  'Geas':'Geas','Greater Restoration':'Restauración Mayor','Hallow':'Consagrar',
  'Hold Monster':'Paralizar Monstruo','Holy Weapon':'Arma Sagrada','Insect Plague':'Plaga de Insectos',
  'Legend Lore':'Leyendas','Mass Cure Wounds':'Curar Heridas Masivo','Mislead':'Engañar',
  'Modify Memory':'Modificar Memoria','Passwall':'Pasomuros','Raise Dead':'Resucitar',
  'Reincarnate':'Reencarnación','Scrying':'Escrutinio','Steel Wind Strike':'Golpe del Viento de Acero',
  'Synaptic Static':'Estática Sináptica','Telekinesis':'Telequinesis',
  'Teleportation Circle':'Círculo de Teletransporte','Wall of Force':'Muro de Fuerza',
  'Wall of Stone':'Muro de Piedra','Enervation':'Enervación',
  'Blade Barrier':'Barrera de Espadas','Chain Lightning':'Cadena de Rayos',
  'Circle of Death':'Círculo de Muerte','Contingency':'Contingencia',
  'Create Undead':'Crear No Muerto','Disintegrate':'Desintegrar','Eyebite':'Mirada Maléfica',
  'Flesh to Stone':'Carne a Piedra','Globe of Invulnerability':'Globo de Invulnerabilidad',
  'Harm':'Dañar','Heal':'Curar',"Heroes' Feast":'Festín de los Héroes',
  'Magic Jar':'Frasco Mágico','Mass Suggestion':'Sugestión Masiva','Mental Prison':'Prisión Mental',
  'Move Earth':'Mover Tierra',"Otiluke's Freezing Sphere":'Esfera Helada de Otiluke',
  "Otto's Irresistible Dance":'Danza Irresistible de Otto','Planar Ally':'Aliado Planar',
  'Soul Cage':'Jaula del Alma','Sunbeam':'Rayo Solar','True Seeing':'Visión Verdadera',
  'Wall of Ice':'Muro de Hielo','Wall of Thorns':'Muro de Espinas','Word of Recall':'Palabra de Regreso',
  'Delayed Blast Fireball':'Bola de Fuego de Explosión Retardada','Divine Word':'Palabra Divina',
  'Etherealness':'Etereidad','Finger of Death':'Dedo de la Muerte','Fire Storm':'Tormenta de Fuego',
  'Forcecage':'Jaula de Fuerza','Mirage Arcane':'Espejismo Arcano',
  "Mordenkainen's Magnificent Mansion":'Magnífica Mansión de Mordenkainen',
  "Mordenkainen's Sword":'Espada de Mordenkainen','Plane Shift':'Cambio de Plano',
  'Prismatic Spray':'Rociada Prismática','Project Image':'Proyectar Imagen',
  'Regenerate':'Regenerar','Resurrection':'Resurrección','Reverse Gravity':'Invertir la Gravedad',
  'Simulacrum':'Simulacro','Symbol':'Símbolo','Teleport':'Teletransporte','Whirlwind':'Torbellino',
  'Antimagic Field':'Campo Antimágico','Clone':'Clon','Control Weather':'Controlar el Clima',
  'Demiplane':'Semiplano','Dominate Monster':'Dominar Monstruo','Earthquake':'Terremoto',
  'Feeblemind':'Debilitar Mente','Glibness':'Locuacidad','Holy Aura':'Aura Sagrada',
  'Incendiary Cloud':'Nube Incendiaria','Maze':'Laberinto','Mind Blank':'Mente en Blanco',
  'Power Word Stun':'Palabra de Poder: Aturdir','Sunburst':'Estallido Solar',
  'Telepathy':'Telepatía','Tsunami':'Tsunami',
  'Astral Projection':'Proyección Astral','Foresight':'Presciencia','Gate':'Portal',
  'Imprisonment':'Encarcelamiento','Mass Heal':'Curación Masiva','Mass Polymorph':'Polimorfismo Masivo',
  'Meteor Swarm':'Lluvia de Meteoritos','Power Word Heal':'Palabra de Poder: Curar',
  'Power Word Kill':'Palabra de Poder: Matar','Prismatic Wall':'Muro Prismático',
  'Shapechange':'Cambio de Forma','Storm of Vengeance':'Tormenta de Venganza',
  'Time Stop':'Detener el Tiempo','True Polymorph':'Polimorfismo Verdadero',
  'True Resurrection':'Resurrección Verdadera','Wish':'Deseo',
};

const ITEM_ES = {
  'Longsword':'Espada Larga','Shortsword':'Espada Corta','Dagger':'Daga',
  'Handaxe':'Hacha de Mano','Battleaxe':'Hacha de Batalla','Greataxe':'Hacha Grande',
  'Greatsword':'Mandoble','Rapier':'Estoque','Mace':'Maza','Flail':'Mangual',
  'Quarterstaff':'Bastón','Longbow':'Arco Largo','Shortbow':'Arco Corto',
  'Javelin':'Jabalina','Spear':'Lanza','Trident':'Tridente','War Pick':'Pico de Guerra',
  'Warhammer':'Martillo de Guerra','Maul':'Mazo Grande','Halberd':'Alabarda',
  'Glaive':'Glaive','Pike':'Pica','Club':'Porra','Light Hammer':'Martillo Ligero',
  'Sickle':'Hoz','Whip':'Látigo','Net':'Red','Sling':'Honda','Dart':'Dardo',
  'Crossbow, Heavy':'Ballesta Pesada','Crossbow, Light':'Ballesta Ligera',
  'Crossbow, Hand':'Ballesta de Mano','Hand Crossbow':'Ballesta de Mano',
  'Shield':'Escudo','Padded Armor':'Armadura Acolchada','Leather Armor':'Armadura de Cuero',
  'Studded Leather Armor':'Cuero Tachonado','Hide Armor':'Armadura de Pieles',
  'Chain Shirt':'Camisa de Malla','Scale Mail':'Cota de Escamas','Breastplate':'Peto',
  'Half Plate Armor':'Media Armadura de Placas','Ring Mail':'Cota de Anillos',
  'Chain Mail':'Cota de Malla','Splint Armor':'Armadura de Bandas','Plate Armor':'Armadura de Placas',
  'Backpack':'Mochila','Torch':'Antorcha','Waterskin':'Odre','Bedroll':'Petate',
  'Blanket':'Manta','Crowbar':'Palanca','Tinderbox':'Yesca','Holy Symbol':'Símbolo Sagrado',
  'Component Pouch':'Bolsa de Componentes','Arcane Focus':'Foco Arcano',
  'Druidic Focus':'Foco Druídico',"Thieves' Tools":'Herramientas de Ladrón',
  "Healer's Kit":'Kit de Curación',"Herbalism Kit":'Kit de Herboristería',
  'Potion of Healing':'Poción de Curación','Potion of Greater Healing':'Poción de Curación Superior',
  'Potion of Superior Healing':'Poción de Curación Excelente',
  'Potion of Supreme Healing':'Poción de Curación Suprema',
  'Ring of Protection':'Anillo de Protección','Cloak of Protection':'Capa de Protección',
  'Bag of Holding':'Bolsa Contenedora','Boots of Speed':'Botas de Velocidad',
  'Ring of Feather Falling':'Anillo de Caída de Pluma',
  'Wand of Magic Missiles':'Varita de Misiles Mágicos','Staff of Healing':'Bastón de Curación',
};

const RACE_MAP = {
  'Human':'human','Variant Human':'human','Mark of Finding Human':'human',
  'Elf':'elf','High Elf':'elf','Wood Elf':'elf','Dark Elf':'elf','Drow':'elf',
  'Eladrin':'elf','Sea Elf':'elf','Shadar-kai':'elf',
  'Dwarf':'dwarf','Hill Dwarf':'dwarf','Mountain Dwarf':'dwarf','Mark of Warding Dwarf':'dwarf',
  'Halfling':'halfling','Lightfoot Halfling':'halfling','Stout Halfling':'halfling',
  'Ghostwise Halfling':'halfling',
  'Dragonborn':'dragonborn','Black Dragonborn':'dragonborn','Blue Dragonborn':'dragonborn',
  'Brass Dragonborn':'dragonborn','Bronze Dragonborn':'dragonborn','Copper Dragonborn':'dragonborn',
  'Gold Dragonborn':'dragonborn','Green Dragonborn':'dragonborn','Red Dragonborn':'dragonborn',
  'Silver Dragonborn':'dragonborn','White Dragonborn':'dragonborn',
  'Tiefling':'tiefling','Asmodeus Tiefling':'tiefling','Zariel Tiefling':'tiefling',
  'Dispater Tiefling':'tiefling','Glasya Tiefling':'tiefling','Infernal Tiefling':'tiefling',
  'Half-Orc':'half-orc','Mark of Finding Half-Orc':'half-orc',
  'Gnome':'gnome','Forest Gnome':'gnome','Rock Gnome':'gnome','Deep Gnome':'gnome',
  'Mark of Scribing Gnome':'gnome',
  'Aasimar':'aasimar','Protector Aasimar':'aasimar','Scourge Aasimar':'aasimar',
  'Fallen Aasimar':'aasimar',
  'Tabaxi':'tabaxi','Firbolg':'firbolg','Kenku':'kenku',
  'Half-Elf':'elf','Kalashtar':'human','Shifter':'human','Changeling':'human',
  'Warforged':'human','Lizardfolk':'human','Tortle':'human','Triton':'human',
  'Yuan-ti Pureblood':'human','Githyanki':'human','Githzerai':'human',
  'Fairy':'human','Harengon':'human','Owlin':'human','Lineage':'human',
};

const CLASS_MAP = {
  'Fighter':'fighter','Wizard':'wizard','Rogue':'rogue','Cleric':'cleric',
  'Ranger':'ranger','Paladin':'paladin','Barbarian':'barbarian','Bard':'bard',
  'Druid':'druid','Monk':'monk','Sorcerer':'sorcerer','Warlock':'warlock',
  'Artificer':'fighter','Blood Hunter':'ranger','Mystic':'wizard',
};

const BG_MAP = {
  'Acolyte':'acolyte','Charlatan':'charlatan','Criminal':'criminal','Spy':'criminal',
  'Entertainer':'entertainer','Gladiator':'entertainer','Folk Hero':'folk-hero',
  'Guild Artisan':'guild-artisan','Guild Merchant':'guild-artisan','Hermit':'hermit',
  'Noble':'noble','Knight':'noble','Outlander':'outlander','Sage':'sage',
  'Sailor':'sailor','Pirate':'sailor','Soldier':'soldier','Urchin':'urchin',
  'City Watch':'soldier','Clan Crafter':'guild-artisan','Cloistered Scholar':'sage',
  'Courtier':'noble','Far Traveler':'outlander','Inheritor':'noble',
  'Investigator':'sage','Knight of the Order':'soldier','Mercenary Veteran':'soldier',
  'Urban Bounty Hunter':'criminal','Uthgardt Tribe Member':'outlander',
  'Waterdhavian Noble':'noble','Anthropologist':'sage','Archaeologist':'sage',
  'Athlete':'folk-hero','Celebrity Adventurer\'s Scion':'noble',
  'Feylost':'outlander','Haunted One':'hermit','Ruined':'outlander',
  'Witchlight Hand':'entertainer','Pirate':'sailor',
};

const STAT_IDS = {1:'str',2:'dex',3:'con',4:'int',5:'wis',6:'cha'};

const SAVE_MAP = {
  'strength-saving-throws':'str','dexterity-saving-throws':'dex',
  'constitution-saving-throws':'con','intelligence-saving-throws':'int',
  'wisdom-saving-throws':'wis','charisma-saving-throws':'cha',
};

const SKILL_KEYS = new Set([
  'athletics','acrobatics','sleight-of-hand','stealth','arcana','history',
  'investigation','nature','religion','animal-handling','insight','medicine',
  'perception','survival','deception','intimidation','performance','persuasion',
]);

function mapCharacter(d) {
  // --- Stats ---
  const base = {};
  for (const s of (d.stats || [])) {
    const k = STAT_IDS[s.id]; if (k) base[k] = s.value || 10;
  }
  for (const s of (d.bonusStats || [])) {
    const k = STAT_IDS[s.id]; if (k && s.value) base[k] = (base[k] || 10) + s.value;
  }
  for (const s of (d.overrideStats || [])) {
    const k = STAT_IDS[s.id]; if (k && s.value != null) base[k] = s.value;
  }
  const stats = {
    str: base.str || 10, dex: base.dex || 10, con: base.con || 10,
    int: base.int || 10, wis: base.wis || 10, cha: base.cha || 10,
  };

  // --- Proficiencies (from all modifier sources) ---
  const allMods = [
    ...(d.modifiers?.race || []), ...(d.modifiers?.class || []),
    ...(d.modifiers?.background || []), ...(d.modifiers?.feat || []),
  ];
  const skillProfs = [], saveProfs = [];
  for (const mod of allMods) {
    if (mod.type !== 'proficiency') continue;
    const sub = mod.subType || '';
    if (SAVE_MAP[sub]) { saveProfs.push(SAVE_MAP[sub]); continue; }
    // Normalize DnD Beyond skill subtype to match MasterDnD keys
    const normalized = sub.replace(/_/g, '-').toLowerCase();
    if (SKILL_KEYS.has(normalized)) skillProfs.push(normalized);
  }

  // --- Race / Class / Background ---
  const raceObj = d.race?.definition || {};
  const raceFull = raceObj.fullName || raceObj.name || '';
  const raceKey = RACE_MAP[raceFull] || RACE_MAP[raceObj.name] || 'human';

  const primaryClass = (d.classes || [])[0] || {};
  const classDef = primaryClass.definition || {};
  const classFull = classDef.name || '';
  const classKey = CLASS_MAP[classFull] || 'fighter';
  const level = primaryClass.level || 1;

  const bgDef = d.background?.definition || {};
  const bgFull = bgDef.name || '';
  const bgKey = BG_MAP[bgFull] || 'sage';

  // --- HP ---
  const conMod = Math.floor((stats.con - 10) / 2);
  const hitDie = classDef.hitDie || 8;
  // Use DnD Beyond's calculated base HP; fall back to estimating from class
  const hp = d.baseHitPoints ||
    (hitDie + conMod + (level > 1 ? (level - 1) * (Math.ceil(hitDie / 2) + conMod) : 0));

  // --- CA ---
  const dexMod = Math.floor((stats.dex - 10) / 2);
  // DnD Beyond calculates AC from equipped armor + dex; we use simple base
  const ca = 10 + dexMod;

  // --- Inventory ---
  const inventory = (d.inventory || []).map(item => {
    const def = item.definition || {};
    const rawName = def.name || 'Objeto';
    return {
      id: `ddb_${item.id || Math.random().toString(36).slice(2)}`,
      name: ITEM_ES[rawName] || rawName,
      qty: item.quantity || 1,
      weight: def.weight || 0,
      type: def.filterType || def.type || 'Misc',
      equipped: item.equipped || false,
    };
  });

  // --- Spells (class spells + racial/feat spells) ---
  const spellsSeen = new Set();
  const knownSpells = [];
  const addSpell = (def) => {
    if (!def || spellsSeen.has(def.id)) return;
    spellsSeen.add(def.id);
    const rawName = def.name || 'Hechizo';
    knownSpells.push({
      id: `ddb_${def.id}`,
      name: SPELL_ES[rawName] || rawName,
      level: def.level ?? 0,
    });
  };
  for (const cs of (d.classSpells || [])) {
    for (const sp of (cs.spells || [])) addSpell(sp.definition);
  }
  for (const src of ['race','class','background','feat','item']) {
    for (const sp of (d.spells?.[src] || [])) addSpell(sp.definition);
  }

  // --- Notes / Trasfondo ---
  const traits = d.traits || {};
  const notes = d.notes || {};
  const parts = [];
  if (traits.personalityTraits) parts.push(`Rasgos de personalidad:\n${traits.personalityTraits}`);
  if (traits.ideals) parts.push(`Ideales:\n${traits.ideals}`);
  if (traits.bonds) parts.push(`Vínculos:\n${traits.bonds}`);
  if (traits.flaws) parts.push(`Defectos:\n${traits.flaws}`);
  if (notes.backstory) parts.push(`Trasfondo:\n${notes.backstory}`);
  const charNotes = parts.join('\n\n');

  return {
    name: d.name || 'Personaje importado',
    race: raceKey, raceFull,
    class: classKey, classFull,
    background: bgKey, bgFull,
    level, stats, hp, ca,
    skillProfs: [...new Set(skillProfs)],
    saveProfs: [...new Set(saveProfs)],
    inventory, knownSpells, charNotes,
  };
}


module.exports = { mapCharacter };
