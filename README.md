# RHIC Analysis Group website

A responsive, dependency-free static site for the Brookhaven National Laboratory RHIC Analysis Group. It is ready to publish with GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.

GitHub will display the public site URL after deployment finishes.

## Preview locally

Open `index.html` directly in a browser. For the most accurate preview, serve this folder with any local static-file server.

## Content and design sources

- Group content: `Lab_Research_Groups_RHIC Analysis Group_compiled.docx`
- Brand guidance: [BNL Brand Center](https://www.bnl.gov/brandcenter/)
- Story imagery and captions:
  - [Gluons May Play Central Role in Baryon Number Conservation](https://www.bnl.gov/newsroom/news.php?a=122692)
  - [Transformation of RHIC to EIC Begins](https://www.bnl.gov/newsroom/news.php?a=122863)
  - [A Smashing Success: RHIC Wraps up Final Collisions](https://www.bnl.gov/newsroom/news.php?a=122794)
  - [Energy Department Announces Genesis Mission Challenges](https://www.bnl.gov/newsroom/news.php?a=122827)
  - [Scientists Capture a Glimpse into the Quantum Vacuum](https://www.bnl.gov/newsroom/news.php?a=122738)
  - [First Physics Results from the sPHENIX Particle Detector](https://www.bnl.gov/newsroom/news.php?a=122373)
  - [AI Streamlines Deluge of Data from Particle Collisions](https://www.bnl.gov/newsroom/news.php?a=122693)

The intro uses the supplied transparent high-resolution sPHENIX/STAR final-collision event display on a dark background, credited to the sPHENIX and STAR Collaborations. Member cards link to each person’s official BNL staff profile.

The site uses BNL's official digital teal (`#105C78`), cerulean (`#00ADDC`), and lime (`#B2D33B`), with Arial as the approved web fallback. The official BNL logo file is used without alteration and is given clear space.

Before external publication, confirm intended image use against [BNL Newsroom photo permissions](https://www.bnl.gov/newsroom/permissions.php).

## Maintenance

- Edit member and publication records in `script.js`.
- Edit page copy and section order in `index.html`.
- Edit colors, typography, spacing, and responsive behavior in `styles.css`.
- Keep image credits and source-story links with any reused BNL Newsroom imagery.
