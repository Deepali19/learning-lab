/* =====================================================================
   SITE SETTINGS + PROJECT LIST
   To add a project:
     1. Copy the folder  projects/_template  and rename it (e.g. projects/grade3-clock-town)
     2. Edit the steps inside its index.html
     3. Add one entry to PROJECTS below (copy an existing one and change it)
   ===================================================================== */

window.SITE = {
  name: "Hands-On Learning Lab",
  tagline: "Interactive school projects with step-by-step guides for parents",
  footer: "Free to use. No sign-up. Progress is saved only in your own browser."
};

window.PROJECTS = [
  {
    slug: "grade2-fraction-town",            // must be unique; also used to save progress
    title: "Our Fraction Town",
    grade: "Grade 2",
    subject: "Math",
    topic: "Fractions as parts of a group",
    description: "Explore a 3D town of 10 buildings. Find what fraction are red, have chimneys or are tall, then discover what \"half\" really means.",
    path: "projects/grade2-fraction-town/index.html",
    thumb: "projects/grade2-fraction-town/thumb.svg",
    steps: 11,                                 // number of steps in the guide
    minutes: 45,
    tags: ["3D model", "Parent guide", "Printable"],
    added: "2026-09-25"
  }

  /* Example of the next one (remove the comment marks to use):
  ,{
    slug: "grade2-my-new-project",
    title: "My New Project",
    grade: "Grade 2",
    subject: "Science",
    topic: "Plants",
    description: "Short one-line description.",
    path: "projects/grade2-my-new-project/index.html",
    thumb: "",                                 // leave empty for an automatic picture
    steps: 5,
    minutes: 30,
    tags: ["Parent guide"],
    added: "2026-10-01"
  }
  */
];
