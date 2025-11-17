---
projectId: "multifx"
title: "MultiFX Pedal"
description: "A Raspberry Pi OS based audio effects plugin manager and GUI as a part of an open-source guitar pedal project for Open Source Hardware Enterprise"
technologies: ["python"]
githubUrl: https://github.com/OSHE-Github/MultiFX
---
For [OSHE](https://oshe.io/), I lead the software development for the MultiFX
team. I worked with several undergraduate electrical and computer engineers to
create an open-source guitar effects pedal that hosts LV2 plugins on a 
Raspberry Pi via [mod-host](https://github.com/mod-audio/mod-host), an
open-source plugin hosting platform.

I was largely responsible for rewriting the GUI, focusing on readability,
usability, and making interacting with plugins as intuitive as possible given
the hardware on the pedal using **Python** with the **PyQt5** library. I also
worked on back-end features like loading profiles from an attached USB drive
and interfacing with mod-host to add, remove, and re-order plugins.

## Reflection

I joined this project in the middle of development in August 2025 after all the
previous software developers had left. We were also committing to completing
the project this semester. The code-base was rough and there were plenty of
features that had to be completed in a short time frame. As a result, this was
one of the hardest projects I've ever been a part of. We all had to work
incredibly hard to pull through, but thankfully we did.

I started the semester by cleaning up and refactoring the code-base for a
cleaner seperation-of-concerns between files, code style, and correcting some
questionable practices and bugs, all while trying to create a cleaner API that
better obeys the DRY (don't repeat yourself) principle. I then spent most of
my time learning PyQt5 while developing new UI components according to the
[mock-up](https://www.figma.com/design/TLO7ZNR5uS26gEMimy19Ka/MultiFX-GUI?node-id=6-3&t=2VGT92RHjY3YY6Q2-1)
I made beforehand. I then had a framework of where back-end features would be
called, so I started working on communicating with mod-host via socket
commands.

The project became a massive time crunch towards week-9 of the semester when
the project was due at the start of week-12. A recent power outage had fried
the board's hat, meaning we couldn't get audio through. We were all frantic
trying to complete the promised features, which taught me that there was a time
to quit worrying about writing perfect code and start focusing on making core
features that work (which was a good experience because I can sometimes be a
neat-freak about my code).

We were able to hit all the marks by the end of the deadline despite all
setbacks.
