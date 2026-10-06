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
    description: 'Supported the development of an airflow preconditioning test bench for thermal energy storage research at Georgia Tech’s Water-Energy Research Laboratory.',
    bullets: [
      ['Frame & Tubing Organization', 'Designed 3D-printed mounts that slide into T-slot framing to organize the dry and humid air lines and support a compact layout.'],
      ['Component Mounting', 'Measured mass flow controllers with calipers and designed holders to secure them while keeping components accessible.'],
      ['Valve & Sensor Supports', 'Developed valve holders that allow operation without twisting connected tubing, along with clamps to protect fragile humidity sensors and secure their wiring.'],
      ['Design Iteration', 'Refined supports as system components changed and developed a preliminary exhaust valve mount to support future testing.']
    ],
    tags: 'RESEARCH / ADDITIVE MANUFACTURING / HARDWARE FIXTURES',
    image: 'assets/projects/bench.jpg',
  }
};
