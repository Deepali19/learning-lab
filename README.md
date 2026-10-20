# Hands-On Learning Lab: plan for building the website

This plan walks you through putting your educational projects on a free public website. The folder already contains everything the site needs. You don't need to write any code. You just test it, upload it, and add new projects over time.

---

## 1. What you are building

A **static website**: plain HTML files with no server, database or login. That keeps it free to host, fast and safe for kids.

```
Home page (index.html)
 ├─ Search box + Grade / Subject filters
 ├─ Project cards with a progress bar ("3 of 11 steps done")
 └─ Each card opens a project page:
      ├─ Interactive activity (e.g. the 3D Fraction Town)
      ├─ Step-by-step parent guide: Do / Ask / Explain / Listen for / If stuck
      ├─ "Mark step done" button that saves progress in the browser
      └─ Print parent guide button
```

## 2. Files and what each one does

```
learning-lab/
├─ index.html                          Home page. You normally never edit this.
├─ projects.js                         Site name + LIST OF PROJECTS. Edit this to add projects.
├─ README.md                           This plan
├─ assets/
│   └─ progress.js                     Saves "steps done" in the visitor's browser
└─ projects/
    ├─ young learners-fraction-town/
    │   ├─ index.html                  The 3D Fraction Town project + parent guide
    │   └─ thumb.svg                   Picture shown on the home page card
    └─ _template/
        └─ index.html                  Copy this to start a new project
```

**How progress tracking works:** when a parent clicks "Mark step done", the site saves it in that browser's local storage. Nothing is sent anywhere, and there are no accounts. If they use a different device or clear the browser, their progress starts fresh.

---

## 3. Phase 1: Test on your computer (10 min)

1. Unzip `learning-lab.zip`.
2. Double-click `index.html`. The home page should open in your browser.
3. Click the **Our Fraction Town** card and check these things:
   - The 3D town appears. It needs internet because the 3D library loads online.
   - Clicking "Mark step done" puts a green tick on that step.
   - Going back with **← All projects** shows the progress bar on the card.
4. If progress doesn't save (Safari sometimes blocks this for local files), run a mini web server instead. On a Mac, open Terminal and type:
   ```
   cd ~/Downloads/learning-lab      (or wherever you unzipped it)
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser. Press Ctrl+C in Terminal to stop it.

---

## 4. Phase 2: Put it online for free (15–20 min)

Pick **one** option. Option A is recommended because updating the site later is easy.

### Option A: GitHub Pages (recommended)
1. Create a free account at https://github.com.
2. Click **+ → New repository**.
   - Name: `learning-lab`. This becomes part of your web address.
   - Visibility: **Public**. Free Pages hosting needs a public repository.
   - Tick **Add a README**, then click **Create repository**.
3. In the repository, click **Add file → Upload files**. Drag **everything inside** the `learning-lab` folder into the upload box: `index.html`, `projects.js`, `assets`, `projects`. Don't drag the outer folder itself.
4. Click **Commit changes**.
5. Go to **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**, then **Save**
6. Wait 1–2 minutes and refresh. GitHub shows your link: `https://YOUR-USERNAME.github.io/learning-lab/`
7. Open the link on your phone and your computer to check it works.

**To update later:** open the file on GitHub, click the pencil icon, edit and commit. Or use **Upload files** again to replace files. The site updates in about a minute.

### Option B: Netlify Drop (fastest, no account needed to try)
1. Go to https://app.netlify.com/drop
2. Drag the whole `learning-lab` folder onto the page.
3. You get a link straight away, such as `random-name.netlify.app`.
4. Create a free account to keep the site permanently and rename it (Site settings → Change site name).
5. **To update:** drag the updated folder onto the site's **Deploys** tab.

### Option C: Cloudflare Pages
This works the same way as Netlify: go to Workers & Pages → Create → Pages → Upload assets.

---

## 5. Phase 3 (optional): Your own web address

1. Buy a domain, such as `handsonlearninglab.in`, from any registrar (GoDaddy, Namecheap, Cloudflare, etc.).
2. **For GitHub Pages:**
   - In Settings → Pages → Custom domain, type your domain and click Save.
   - At your registrar, add these DNS records:
     - Four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
     - One **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`
   - After the DNS updates (a few minutes up to 24 hours), tick **Enforce HTTPS**.
3. **For Netlify:** go to Domain management → Add a domain and follow the on-screen DNS steps.

---

## 6. Phase 4: Add a new project (about 30–60 min each)

1. **Copy the template.** Duplicate `projects/_template` and rename it with lowercase letters and dashes, e.g. `projects/young learners-shapes-park`.
2. **Edit the new `index.html`:**
   - At the top of the script, set `PROJECT.slug` to match the folder name, then set the title and subtitle.
   - Write the steps in `STEPS`. Each step has: title, goal, show, ask (a list), explain, look, stuck.
   - Put the activity inside `<div id="activity">`. It can be a picture, an embedded video, or a 3D model you ask Claude to make.
3. **Add a card picture (optional).** Save an image as `thumb.svg` or `thumb.png` in the project folder. If you skip this, the site makes a coloured card automatically.
4. **Register the project in `projects.js`.** Copy the existing entry and change `slug`, `title`, `grade`, `subject`, `topic`, `description`, `path` (must end in `/index.html`), `thumb`, `steps` (must equal the number of steps) and `minutes`.
5. **Test locally** (Phase 1), then **upload** the new folder and the updated `projects.js` (Phase 2).

New grades and subjects appear in the home page filters automatically.

**Tip:** you can ask Claude to "make a new project for this school sheet using the _template format". Then just drop the result into the folder.

---

## 7. Checklist before making it public

**Privacy and child safety**
- [ ] No student names, roll numbers, group lists, photos of children or school addresses anywhere on the site.
- [ ] Don't upload the school's circulars or PDFs. Write the activity in your own words, as the Fraction Town page does.
- [ ] No comment boxes, chat or sign-up forms. This avoids collecting children's data.
- [ ] If you add visitor statistics later, use a privacy-friendly tool that doesn't use cookies (e.g. Plausible, GoatCounter or Cloudflare Web Analytics).

**Content quality**
- [ ] The maths and science in every step are correct, and the expected answers match the model.
- [ ] Language suits the grade: short sentences, plain words.
- [ ] Each project works on a phone, a tablet and a laptop.
- [ ] The printed guide looks right (use Print → Save as PDF to preview it).

**Footer / about**
- [ ] Add a line such as: "Made by a parent for home practice. Not affiliated with any school." You can change the footer text in `projects.js`.

---

## 8. Keeping it running

| When | What to do |
|---|---|
| Each new project | Follow Phase 4, test on a phone, upload |
| Monthly | Open every project once to check the 3D models still load |
| Before big changes | Download a copy of the site (GitHub: Code → Download ZIP) as a backup |
| Each school term | Add that term's projects; group them by grade in `projects.js` |

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| The 3D town is blank | You need internet, because the 3D library loads from cdnjs.cloudflare.com. Try Chrome. |
| Progress isn't saved | Private/incognito mode doesn't keep it. Safari with local files: use the Phase 1 server. |
| "404" on GitHub Pages | Check that `index.html` is at the top level of the repository, not inside a subfolder. Web links are case-sensitive, so folder names must match `projects.js` exactly. |
| Changes don't show | Wait 1–2 minutes, then hard-refresh (Cmd+Shift+R on Mac). |
| A new project isn't on the home page | Check for a missing comma between entries in `projects.js`. |

---

## 10. Ideas for later

- **More projects:** shapes, time and clocks, money, measurement, plants and animals.
- **"Grown-up tips" page:** how to use the guides and how long to spend per session.
- **Printable worksheets:** one A4 practice sheet per project.
- **Languages:** add Hindi or Marathi versions of the explanations.
- **Home-page difficulty badge:** Starter / Explorer / Challenge.
