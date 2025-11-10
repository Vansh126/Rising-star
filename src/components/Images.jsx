import React from 'react';

const Images = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black dark:bg-white">
            <h1 className="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
                Stay Tuned!! <br />
                <br />
                Coming Soon
            </h1>
        </div>
    );
};

export default Images;

// import React, { useEffect } from "react";
// import gsap from "gsap";

// const InertiaController = () => {
//     useEffect(() => {
//         let sections = document.querySelectorAll(".section"),
//             images = document.querySelectorAll(".background"),
//             headings = document.querySelectorAll(".section-title"),
//             outerWrappers = document.querySelectorAll(".wrapper-outer"),
//             innerWrappers = document.querySelectorAll(".wrapper-inner"),
//             currentIndex = -1,
//             wrap = (index, max) => (index + max) % max,
//             animating;

//         gsap.set(outerWrappers, { yPercent: 100 });
//         gsap.set(innerWrappers, { yPercent: -100 });

//         const gotoSection = (index, direction) => {
//             index = wrap(index, sections.length);
//             animating = true;

//             let fromTop = direction === -1;
//             let dFactor = fromTop ? -1 : 1;
//             let tl = gsap.timeline({
//                 defaults: { duration: 1.25, ease: "power1.inOut" },
//                 onComplete: () => (animating = false),
//             });

//             if (currentIndex >= 0) {
//                 gsap.set(sections[currentIndex], { zIndex: 0 });
//                 tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
//             }

//             gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
//             tl.fromTo([outerWrappers[index], innerWrappers[index]],
//                 { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//                 { yPercent: 0 },
//                 0
//             )
//                 .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
//                 .fromTo(headings[index], { autoAlpha: 0, yPercent: 150 * dFactor }, {
//                     autoAlpha: 1,
//                     yPercent: 0,
//                     duration: 1,
//                     ease: "power2",
//                     stagger: { each: 0.02, from: "random" },
//                 }, 0.2);

//             currentIndex = index;
//         };

//         const navigateSectionById = (id) => {
//             let index = Array.from(sections).findIndex(section => section.id === id);
//             if (index !== -1 && index !== currentIndex) {
//                 gotoSection(index, index > currentIndex ? 1 : -1);
//             }
//         };

//         let lastTap = 0;
//         document.addEventListener("touchend", (event) => {
//             let currentTime = new Date().getTime();
//             let tapLength = currentTime - lastTap;
//             if (tapLength < 500 && tapLength > 0) {
//                 gotoSection(currentIndex + 1, 1);
//                 event.preventDefault();
//             }
//             lastTap = currentTime;
//         });

//         window.addEventListener("wheel", (event) => {
//             if (event.deltaY < 0 && !animating) {
//                 gotoSection(currentIndex - 1, -1);
//             } else if (event.deltaY > 0 && !animating) {
//                 gotoSection(currentIndex + 1, 1);
//             }
//         });

//         document.querySelectorAll("nav a").forEach(a => {
//             a.addEventListener("click", e => {
//                 e.preventDefault();
//                 navigateSectionById(e.currentTarget.getAttribute("href").slice(1));
//             });
//         });

//         gotoSection(0, 1);
//     }, []);

//     const sectionsData = [
//         { id: "first", title: "City Skyline", bgUrl: "https://images.unsplash.com/photo-1605629713998-167cdc70afa2?crop=entropy&cs=srgb&fm=jpg&q=85" },
//         { id: "second", title: "Flowers of friendship", bgUrl: "https://images.unsplash.com/photo-1503796964332-e25e282e390f?crop=entropy&cs=srgb&fm=jpg&q=85" },
//         { id: "third", title: "Waves in the Ocean", bgUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?crop=entropy&cs=srgb&fm=jpg&q=85" },
//         { id: "fourth", title: "New York City", bgUrl: "https://images.unsplash.com/photo-1584351583369-6baf055b51a7?crop=entropy&cs=srgb&fm=jpg&q=85" },
//         { id: "fifth", title: "Dark side of the moon", bgUrl: "https://images.unsplash.com/photo-1516663713099-37eb6d60c825?crop=entropy&cs=srgb&fm=jpg&q=85" },
//     ];

//     return (
//         <div className="app-container relative">
//             <header className="fixed top-0 left-0 w-full flex justify-between px-5% z-30 h-28 text-white text-sm tracking-widest uppercase">
//                 <nav className="flex gap-4">
//                     {sectionsData.map((s, i) => (
//                         <a key={i} href={`#${s.id}`}>{i + 1}</a>
//                     ))}
//                 </nav>
//             </header>

//             {sectionsData.map((s, i) => (
//                 <Section key={i} id={s.id} title={s.title} bgUrl={s.bgUrl} />
//             ))}
//         </div>
//     );
// };

// const Section = ({ id, title, bgUrl }) => (
//     <section id={id} className="section fixed top-0 w-full h-full invisible">
//         <div className="wrapper-outer w-full h-full overflow-hidden">
//             <div className="wrapper-inner w-full h-full overflow-hidden">
//                 <div
//                     className="background w-full h-full flex items-center justify-center absolute bg-cover bg-center"
//                     style={{ backgroundImage: `url(${bgUrl})` }}
//                 >
//                     <h2 className="section-title text-white text-6xl sm:text-8xl md:text-9xl font-serif tracking-widest text-center">{title}</h2>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

// export default InertiaController;

