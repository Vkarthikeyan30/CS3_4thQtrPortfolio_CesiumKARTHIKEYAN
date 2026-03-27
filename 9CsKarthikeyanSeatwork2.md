# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

Guided Questions:
Step 1: The position, top, and left made the sidebar somewhat asymmetrically positioned.  This can allow for more creative freedom over your works.  I noticed that when I changed values like making top 60px, its position changed again and made the sidebar slightly lower.

Step 2: Nothing seemed to happen when I scrolled the page.  The footer behaves differently because it has a fixed position, not a relative one, so it would not change.

Step 3: When an element has position: absolute, it is positioned relative to the nearest element with a non-static position.  It is different from fixed because it can change depending on the nearest element with a non-static position.

Step 4: I think "notice" appeared at the top of the page because the nearest box with a non-static position, in this case content with an absolute position, was also at the top of the page.  When the z-indexes are switched, the "notice" text is not visible anymore, and the orange box is also smaller in length.

Reflection Questions:
a. Static - It is the default behavior of html elements.  They flow according to the html file itself, making it easily readable, and are unaffected by css positions like top/bottom/right/left/etc.
Relative - Keeps the element relative to its original position while still allowing you to move it while preserving the original layout of the element
Absolute - Keeps the element relative to the nearest non-static positioned element
Fixed - Keeps the element in a fixed position, unchanging
b. When an element is given css position values like top, left, etc; It is positioned relative to the nearest element with a non-static value.  For example, a child element that was 60px from the top/bottom/left/right would be positioned relative to their parent element 60px away from it.
c. Sticky depends on the user's scroll position.  It can behave like a relative element for a while, but when it reaches a certain point, it will behave like a fixed element.
d. To highlight important information, I would make sure that important things a general description of the event would be positioned in the center of the webpage.  Schedules could be positioned relative to a specific day of the event, etc.  I would try to make it similar to a mind map so that the things in the website are all easy to find based on a branch of topics.