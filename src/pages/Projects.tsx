import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-[var(--bg)] dark:bg-[var(--bg-dark)] text-black dark:text-white pt-20 pb-20">
      <section className="w-full pt-10 pb-14">
        <div className="max-w-[1850px] mx-auto px-6 xl:px-8">
          <h1 className="text-[3.2rem] xl:text-[4.5rem] font-black leading-[0.95] tracking-[-0.02em] uppercase text-black dark:text-white">
            Projects
          </h1>

          <p className="mt-6 text-[1rem] xl:text-[1.08rem] leading-[1.65] text-gray-700 dark:text-gray-300">
            A selection of academic, professional, and personal projects
            exploring game design, interactive systems, and real-time 3D
            applications.
          </p>

          <div className="mt-8 h-px w-full bg-black/10 dark:bg-white/10" />
        </div>
      </section>

      <ProjectSection
        id="escalation"
        title="Escalation"
        role="Game Designer / Unreal Engine Developer"
        meta="University Project · Unreal Engine"
        images={["/escalation.png"]}
        videoUrl="https://youtu.be/7p8JwH6oYfU"
        overview={[
          "Escalation is a hack-and-slash prototype developed during my fifth year at ICAN in a team of three. I was responsible for game design and level design, creating a combat-focused level culminating in a boss fight designed to validate the player's understanding of previously introduced mechanics.",
          "The project focused on building a clear learning curve through enemy pattern recognition. Early encounters introduced simple behaviours, while later encounters recombined those patterns to progressively increase complexity and pressure.",
        ]}
        keyContribution="I designed the encounter progression around a pyramidal learning model: enemies introduce individual patterns, lieutenants recombine them, traps are later reintroduced alongside enemies, and the final boss combines previously learned mechanics into a single high-pressure encounter requiring mastery of timing, positioning, and pattern recognition."
        details={[
          "I also helped design the player ability kit including cone attack, thrust attack, heavy attack, and a multi-charge dash. Abilities were structured around personal cooldowns and global cooldown logic to maintain combat readability and prevent chaotic ability spam.",
          "On the level design side, the level was structured as a sequence of combat lessons: enemies first teach mechanics individually before encounters combine them with traps and stronger enemies to test player adaptation.",
        ]}
      />

      <ProjectSection
        id="lmt"
        title="Laser Master Tournament"
        role="Game Designer / Developer"
        meta="University Project · Unreal Engine · Blueprints"
        images={["/lmt.png"]}
        videoUrl="https://youtu.be/UDnU5fgX8n4"
        overview={[
          "Laser Master Tournament is a first-person traversal prototype developed during my fifth year at ICAN. The project was created solo over three months to explore fast-paced movement mechanics and design a full level centered around player mobility and speed.",
          "The experience focuses on movement readability and progressive challenge. The level introduces traversal mechanics step by step before combining them into longer sequences that require players to maintain momentum while navigating increasingly demanding obstacles.",
        ]}
        keyContribution="I designed and implemented the entire traversal gameplay loop, including wall run, wall jump, vaulting, climbing, sliding, and air control mechanics. The level architecture was intentionally built to force players to chain these abilities together, turning the environment itself into a movement puzzle that rewards timing, spatial awareness, and momentum mastery."
        details={[
          "To reinforce replayability, I implemented a timer and checkpoint system allowing players to retry sections instantly and improve their performance, encouraging experimentation and route optimisation. The environment was designed as a futuristic sports arena where the player performs traversal challenges in front of a virtual audience. Large-scale architecture, dynamic screens, and clear traversal paths guide the player through the course.",
          "Because the project was developed solo, I was responsible for the level design, player movement mechanics, and the implementation of gameplay systems in Unreal Engine Blueprints, including traversal abilities, laser traps, and checkpoint logic.",
        ]}
        reverse
        altBackground
      />

      <ProjectSection
        id="techtraining"
        title="TechTraining"
        role="Designer / Developer"
        meta="Professional Project · Unity · Augmented Reality · NDA Protected"
        images={[
          "/techtraining.png",
          "/techtraining.mp4",
          "/techtraining1.PNG",
          "/techtraining2.PNG",
        ]}
        overview={[
          "TechTraining is an augmented reality training application developed at Axeal for a defense client. The objective was to design an interactive tool allowing foreign soldiers to understand complex technological systems through the manipulation of 3D models and visual explanations.",
          "The application combines interface elements, diagrams, and augmented reality visualizations to present technical concepts in a more engaging and intuitive way than traditional documentation or classroom training.",
        ]}
        keyContribution="I designed and implemented interactive training scenarios allowing users to explore technical equipment through 3D models in augmented reality. The goal was to transform complex technological explanations into clear, interactive learning experiences combining interface design, spatial visualization, and guided information."
        details={[
          "The project involved collaboration between multiple stakeholders, including the client and a partner company responsible for a visual scripting plug-in used within Unity. I coordinated development progress through regular meetings and iterative feedback cycles.",
          "I was responsible for integrating validated content into the application, including 3D models, interface elements, and visual effects, ensuring that the final experience remained both educational and engaging for the end users. Frequent requirement changes required careful scope management. To maintain production stability, I structured validation milestones during meetings and increased feedback frequency to ensure alignment between the client and development team.",
        ]}
      />

      <ProjectSection
        id="hagily"
        title="Hagily"
        role="Designer / Developer / 3D Modeler"
        meta="Professional Project · Unity / Unreal · Digital Twin · NDA Protected"
        images={["/hagily.png", "/hagily1.png", "/hagily2.png", "/hagily3.png"]}
        overview={[
          "Hagily is a digital twin application developed at Axeal for industrial predictive maintenance. The project aimed to visualize and monitor complex industrial systems in order to detect clogging phenomena inside radioactive material tanks and assist technicians in decision-making. The application translates industrial monitoring data into a clear 3D environment where technicians can visualize equipment, understand system states, and anticipate potential failures before they impact production.",
        ]}
        keyContribution="I contributed to the design and implementation of the digital twin interface and 3D visualization pipeline, translating industrial data and system states into clear visual indicators inside a real-time 3D environment. The goal was to transform complex technical information into an intuitive spatial representation usable by technicians."
        details={[
          "Working alongside a mechanical engineer, we designed the application as a serious-game-inspired experience combining technical accuracy with intuitive interaction and clear visual communication.",
          "I produced and optimized the 3D models of the industrial installation using Blender based on real factory references. After polygon optimization and UV mapping, these assets were integrated into the real-time environment to represent system states and clogging scenarios. Adapting video-game technologies to an industrial environment required translating complex engineering concepts into accessible visual tools, demonstrating the benefits of real-time 3D simulation for industrial monitoring and training.",
        ]}
        reverse
        altBackground
      />

      <ProjectSection
        id="enginify"
        title="Enginify"
        role="System Designer / Unreal Engine Developer"
        meta="Professional Project (Axeal) · Unreal Engine 5 · Augmented Reality · NDA Protected"
        images={[
          "/enginify.png",
          "/enginify1.PNG",
          "/enginify2.PNG",
          "/enginify3.PNG",
        ]}
        overview={[
          "Enginify is an augmented reality application developed at Axeal to present the functioning of an industrial engine and its factory installation process. The goal was to create a clear and interactive experience allowing users to understand the system and its operational workflow.",
          "The project combined real-time 3D visualization, interface design, and augmented reality interaction to transform complex industrial information into a more accessible and engaging experience.",
        ]}
        keyContribution="I designed and implemented the application flow that connected interface interactions, animated engine steps, and augmented reality visualization into a guided learning experience. The goal was to transform technical operating procedures into a clear, interactive sequence that users could explore step by step directly in a life-sized AR context."
        details={[
          "Using reference videos provided by the client, I reproduced the different operational steps of the machine and integrated them into Unreal Engine 5. Each stage of the experience was structured and validated with the client to ensure clarity and technical accuracy. I designed the interface logic and implemented Blueprint systems linking UI interactions to animations and contextual information, allowing users to explore each component and its associated documentation.",
          "A key challenge was researching and prototyping augmented reality workflows in Unreal Engine 5. Through experimentation and testing, I produced a functional prototype compatible with iPad Air 5, gaining experience with AR deployment and mobile integration.",
        ]}
      />

      <ProjectSection
        id="nest"
        title="NEST"
        role="Game Designer / 3D Modeler"
        meta="University Project · Unity · Game Connection Showcase"
        images={["/nest.png", "/nest2.png", "/nest3.jpg"]}
        videoUrl="https://youtu.be/cr5gtlCeVSY"
        overview={[
          "NEST is a hybrid game prototype developed during my third year at ICAN within a team of five students. The project explored the combination of a Trading Card Game with vehicle management in a hostile desert environment. Players control the N.E.S.T. vehicle while navigating the dangerous Zone. Using radar information and card-based abilities, they must manage resources, plan routes, and survive encounters while investigating the origin of a mysterious signal.",
        ]}
        keyContribution="I designed core gameplay concepts around the fusion of a TCG system and rogue-like vehicle exploration. My focus was to create a gameplay loop where card combinations influence vehicle movement, tactical encounters, and resource management during exploration."
        details={[
          "The experience alternates between exploration phases and tactical encounters. During travel, players must plan routes carefully to avoid hazards such as sandstorms or fuel shortages while scanning sectors using the radar system. Combat and interactions rely on card mechanics that control the vehicle's abilities and actions, creating a strategic layer where card combinations determine survival and progress.",
          "In addition to gameplay design, I contributed to the creation of the 3D vehicle and environment assets used during exploration phases. The project was selected to be presented at Game Connection, highlighting the overall quality of the concept and the work produced by the team.",
        ]}
        reverse
        altBackground
      />

      <ProjectSection
        id="omerta"
        title="Omertà"
        role="Game & Level Designer"
        meta="University Project · Unity"
        images={[
          "/omerta1.png",
          "/omerta2.png",
          "/omerta3.png",
          "/omerta4.png",
        ]}
        videoUrl="https://youtu.be/ev5goZBzv_4"
        overview={[
          "Omertà is a first-person rail shooter prototype developed during my fourth year at ICAN within a team of nine students. The project revisits classic rail shooter mechanics in a stylized film noir universe where players confront the Mafia controlling the city. Players progress through scripted shooting sequences where enemies appear in carefully staged encounters. Slow-motion mechanics allow players to analyze situations, prioritize targets, and manage increasingly complex enemy waves.",
        ]}
        keyContribution="I led the game design and level design direction of the project, defining encounter structure, enemy placement logic, and pacing of the rail shooter sequences to create a balanced shooting challenge focused on timing, target prioritization, and environmental interaction."
        details={[
          "The experience was designed around high-precision shooting sequences combined with a player-triggered slow-motion ability. This mechanic allowed players to read enemy behaviour, choose priorities, and react strategically during intense encounters. The level design emphasized cinematic staging inspired by film noir aesthetics, with destructible elements and environmental interactions adding tactical possibilities during combat.",
          "Due to the COVID pandemic, the entire project was produced remotely. I coordinated the game and level design team while presenting design progress to the class and ensuring alignment between gameplay intentions and implementation. The project was completed within a one-month production cycle, requiring rapid iteration and clear communication between the nine team members involved.",
        ]}
      />

      <ProjectSection
        id="lueur"
        title="Une Lueur d'Espoir"
        role="Game Designer"
        meta="Game Jam Winner · Unity · Perpignan Game Jam 2020"
        images={["/lueur.png", "/lueur2.png"]}
        overview={[
          "'Une Lueur d'Espoir' is a game created during the Perpignan Game Jam 2020, where it received the award for Best Project. The concept revolves around transforming the idea of generosity into a core gameplay mechanic rather than a narrative theme.",
          "Players collect light from a central source and distribute it to NPCs throughout the level. Managing this shared resource becomes the core challenge as the player must maintain balance within the environment.",
        ]}
        keyContribution="I designed the core gameplay concept built around the mechanic of giving. Instead of focusing on traditional accumulation mechanics, the game encourages players to redistribute resources and maintain balance between characters within the level."
        details={[
          "NPC behaviour was designed around the absence of light. When deprived of it, characters transform and begin attempting to steal light from nearby targets, creating emergent tension between cooperation and survival.",
          "The gameplay loop revolves around collecting light at the center of the map and redistributing it strategically to prevent the spread of darkness while maximizing the global resource level to achieve the highest possible score.",
          "My role focused on defining the core mechanics, designing the gameplay loop, and shaping the overall concept that drove the project to win the Game Jam.",
        ]}
        reverse
        altBackground
      />

      <ProjectSection
        id="singularite"
        title="Singularité"
        role="Game / Level Designer"
        meta="University Project · Unity · C#"
        videoUrl="https://www.youtube.com/watch?v=-oy2IiNVSPQ"
        images={[
          "/singularite1.png",
          "/singularite2.png",
          "/singularite3.png",
          "/singularite4.png",
          "/singularite5.png",
        ]}
        overview={[
          "Singularité is a prototype developed during my second year at ICAN within a team of two. The project explored a puzzle-action game built around a central dash mechanic, focusing on precision movement and spatial awareness.",
          "Players navigate a hostile station by dashing, clinging to surfaces, and chaining movement actions to progress through encounters and reach the core of the Andora station.",
        ]}
        keyContribution="I designed the core gameplay around the dash mechanic, structuring the experience so that traversal, combat, and level progression all relied on the player's ability to read surfaces, manage charges, and position themselves strategically."
        details={[
          "The movement system revolves around two types of jumps consuming charges that can be restored by clinging to surfaces. This created a traversal loop where momentum, timing, and environmental awareness were essential.",
          "Level layouts were built to constantly test the player's mastery of the dash mechanic by forcing different angles of approach, encouraging experimentation and observation. Additional mechanics such as temporary control inversion introduced moments of tension that forced players to adapt their spatial understanding under pressure.",
        ]}
      />
    </main>
  );
}
