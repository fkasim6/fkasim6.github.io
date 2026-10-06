// Edit your project text and image filenames here.
// Put real photos in assets/projects/solar.jpg, combat.jpg, and bench.jpg.
const PORTFOLIO_PROJECTS = {
  solar: {
    kicker: '01 / ENERGY SYSTEMS',
    title: 'Solar energy system',
    description: 'A personal solar-powered build combining a solar panel, an 18650 battery, power regulation, and LED lighting. The goal is to learn how energy generation, storage, and an electrical load work as one system. Components have been purchased; assembly and testing are the next steps.',
    tags: 'IN PROGRESS / SOLAR POWER / BATTERY STORAGE',
    image: 'assets/projects/solar.jpg',
  },
  combat: {
    kicker: '02 / COMBAT ROBOTICS',
    title: '3 lb combat robot',
    description: 'As lead chassis designer for a RoboJackets hammer saw robot, I work on the chassis and weapon assembly while considering armor, electronics space, wheel clearance, and drivetrain integration. The project connects CAD design with the practical constraints of a compact competition robot.',
    description: 'A collaborative build of a 3 lb combat robot designed around weight limits, impact resistance, and a hammer saw weapon.',
bullets: [
  ['Chassis & Geometry (CAD)', 'Modeled the core tub and weapon assembly, separating curved armor panels from structural components to maximize internal space and simplify machining.'],
  ['Electronics & Packaging', 'Designed wiring channels and internal mounts for the battery, ESCs, and receiver.'],
  ['Assembly & Drive Tuning', 'Built the drivetrain and weapon systems, adjusting belt tension and mechanical clearances.'],
  ['Arena Performance', 'Competed in April, passed technical inspection, and finished with a 1–2 record across three bouts.']
],
    tags: 'SOLIDWORKS / CHASSIS DESIGN / MECHANICAL INTEGRATION',
    image: 'assets/projects/combat.jpg',
  },
  bench: {
    kicker: '03 / ENGINEERING RESEARCH',
    title: 'Experimental test bench',
    description: 'Designed a T-frame and 3D-printed mounts to support valves, mass flow controllers, pipes, and other experimental components. Also developed an electrical enclosure for Arduinos and the voltage supply. Using printed parts made changes easier as the experiment evolved.',
    tags: 'RESEARCH / ADDITIVE MANUFACTURING / HARDWARE FIXTURES',
    image: 'assets/projects/bench.jpg',
  }
};
