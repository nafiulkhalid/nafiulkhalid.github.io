## Software Design Documemt for Portfolio Website


## **Table of Contents**

1. [Introduction](#1-introduction)
2. [System Overview](#2-system-overview)
3. [Functional Requirements](#3-functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [System Architecture](#5-system-architecture)
6. [Technologies Used](#6-technologies-used)
7. [User Interface Design](#7-user-interface-design)
8. [Database Design](#8-database-design)
9. [Security](#9-security)
10. [Deployment](#10-deployment)
11. [Testing](#11-testing)
12. [Maintenance](#12-maintenance)
13. [Risks and Challenges](#13-risks-and-challenges)
14. [Performance Optimizations](#14-performance-optimizations)
15. [Analytics and Monitoring](#15-analytics-and-monitoring)

---

## **1. Introduction**

The **Portfolio Website** is designed to showcase various projects, research, and achievements. It provides a simple and engaging interface for visitors to explore detailed project descriptions, view associated technologies, and interact with images through carousels. The site also includes a **real-time local time display** of **Miami**, where I resides, ensuring a personalized experience for visitors.

### Basic Idea: 
Website with separate webpages, accessible via naviagtion bar. <br>
Publising via GitHub Pages <br>
Allocated timeline 48hours --> 2 hour of design & plan, 36 hours of development, 10 hours in hand for debugging & adjustment.

---

## **2. System Overview**

The portfolio website is a **responsive**, **multi-page web application** composed of the following pages:

- **Home**: A brief introduction, with links to projects, research, resume, and contact information.
- **Projects**: Lists multiple projects with descriptions, technologies, images, and links to GitHub repositories.
- **Research**: Research publications with descriptions, & also research centered experiences and achievements
- **Resume**: An Windows'85 inspired animation to present my resume in that animated desktop
- **Contact**: An tetris inspired background & feedback box to connect me in mail.

---

## **3. Functional Requirements**
--> Keep in mind, "Less is more!"<br>

### **General**
- Gridded white background with black stripes
- Footer: Black background, white text, & an appreciation text in center
- Nav bar: Black background, full name in left (clickable to homepage), & webpage options in right (focus on alignment & spacing)

### **Homepage**
- Display an introduction : Image & basic summary (Use flex & grid box)
      - Summary
      - Social Media (Links) (Logos Preferred)
      - Local Time (So the viewer / recruiters can connect or compare) (Make sure the clock updates regularly)
- Good Space
- A two folded overview
      - right : why Computer Science or SWE?
      - left : tech stacks
- A Cartoon running (to break monotonuousness) -- WallE, Mario, Ball, MIT Cheetah
- Story highlight -- "Two Graduates, One Morning"
- CTA : GIF cube & request to visit other webpages

### **Projects**
- Two fold introduction:
      - Left : A catchy sentence (Google's XYZ formula) + Technical social links
      - Right : A picture (David & Hackharvard-24)
- Projects Display:
      - Title
      - Description
      - Technologies Used
      - Project Related Photos (Auto Slide)
- A joke for humor at end
- Make the projects starting from right-left order, if previous was right, next is left & vice versa

### **Research**
- Start with a catch phrase, "It starts with 'why?'" -- Try a little animation at that phrase
- List Publications: two folded - one Side for journal, one side for description - & like projects start from right-left order, add links to researchGate
- Academic Conferences List: A photo auto-slide, & at right, a list in bullet points

### **Resume**
- Black Background
- Animation of a Windows'85 model
        - Start End responding buttons
        - Enlarge & fades to a desktop ('85s)
        - Two folders in desktop -- My computer , Resume
        - Resume is clickable & opens resume

### **Contact**
- Tetris inspired background on general background
- A catch phrase at top
- Two fold:
        - Left : A little note to inspire them to write me
        - Right : A box to send me their words
---

## **4. System Architecture**

The portfolio website follows a **client-server model**. Since the website is static, there is no backend server involved, and all content is pre-built and deployed as static files (HTML, CSS, and JavaScript).

### **Client-Side**:
- Responsible for rendering content and handling user interactions.
- Uses **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap** for layout and functionality.

### **Server-Side**:
- There is no dynamic server-side logic since the website is entirely static.
- The content is hosted and served from **static hosting platforms** like GitHub Pages, Netlify, or Vercel.

---

## **5. Technologies Used**

### **Frontend**:
- **HTML5**: Structuring the content and building semantic web pages.
- **CSS3**: Styling the website, including layout, colors, and typography.
- **JavaScript**: For interactive features such as the real-time clock and carousels.
- **Bootstrap 5**: For responsive design and using pre-built components (e.g., navigation bar, cards, carousel).
- **FontAwesome / Bootstrap Icons**: For including icons (e.g., GitHub, Devpost).

### **Backend**:
- **None** (static website).

### **External Services**:
- **GitHub**: For hosting project repositories.
- **DevPost**: For showcasing projects and achievements.

---

## **6. Database Design**

There is no need for a database as the portfolio website is **static**. All content, including text, images, and links, is stored directly within the **HTML**, **CSS**, and **JavaScript** files.

---

## **7. Security**

- **HTTPS**: The website will be served over HTTPS to ensure the integrity of content and protect data in transit.
- **Sanitization**: Any user input (e.g., contact form) will be sanitized to prevent cross-site scripting (**XSS**).
- **No Sensitive Data**: The website does not store or handle any sensitive user data, thus minimizing security risks.

---

## **8. Deployment**

The website will be deployed on a static hosting platform -- **GitHub Pages**.

### **CI/CD Pipeline**:
- Continuous deployment can be achieved using **GitHub Actions** or other similar tools, ensuring smooth updates whenever content is modified.

---

## **9. Testing**

- **Unit Testing**: JavaScript functions, particularly the real-time clock, will be tested.
- **Cross-Browser Testing**: Ensuring compatibility across popular browsers such as **Chrome**, **Firefox**, **Safari**, and **Edge**.
- **Mobile Testing**: Testing the website on various mobile devices to ensure responsiveness.
- **Accessibility Testing**: Tools like **WAVE** or **Lighthouse** will be used to ensure accessibility best practices are followed.

---

## **10. Maintenance**

- **Content Updates**: The website content can be updated manually by modifying **HTML** files to add new projects or achievements.
- **Image Optimization**: All images will be compressed and optimized for faster loading.
- **Bug Fixing**: Any broken links, images, or functionality will be fixed promptly.

---

## **11. Risks and Challenges**

- **Cross-Browser Compatibility**: Ensuring that the website functions correctly on older browsers, such as **Internet Explorer**, may be a challenge.
- **Responsive Issues**: Ensuring proper layout and functionality across a wide variety of screen sizes and devices.
- **Performance**: Ensuring fast page load times, particularly if images or media-heavy components are used.

---

