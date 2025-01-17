# Software Design Document (SDD)
## Portfolio Website | Nafiul Khalid

---

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

The **Portfolio Website** for **Nafiul Khalid** is designed to showcase various projects, research, and achievements. It provides a simple and engaging interface for visitors to explore detailed project descriptions, view associated technologies, and interact with images through carousels. The site also includes a **real-time local time display** of **Miami**, where the developer resides, ensuring a personalized experience for visitors.

---

## **2. System Overview**

The portfolio website is a **responsive**, **single-page web application** composed of the following sections:

- **Home Page**: A brief introduction, with links to projects, research, resume, and contact information.
- **Projects Page**: Lists multiple projects with descriptions, technologies, images, and links to GitHub repositories.
- **Real-Time Clock**: Displays the local time in Miami, updated every minute.
- **Footer**: A footer with the developer's name and a lighthearted programming joke.

The site is built using modern web technologies to ensure **usability**, **responsiveness**, and **performance**, with a focus on **mobile-first design**.

---

## **3. Functional Requirements**

### **Home Page**
- Display an introduction with the developer’s name and slogan.
- Provide navigation links to other sections of the website.
- Include social media links (e.g., GitHub, Devpost).
- Show a **real-time local time** for Miami.

### **Projects Page**
- List all projects with the following details:
  - **Title**
  - **Description**
  - **Technologies used**
  - **Link to GitHub repository**
- Display images of each project in a **carousel component**.
- Provide a clickable **GitHub repository** link for each project.

### **Footer**
- Display a footer message with the developer’s name and a programming-related joke.

---

## **4. Non-Functional Requirements**

- **Responsiveness**: The website must function properly on all screen sizes, from mobile to desktop.
- **Usability**: The website should be easy to navigate with a clean and simple design.
- **Performance**: Images, JavaScript, and CSS should be optimized to ensure fast loading times.
- **Accessibility**: The website should ensure high contrast text and accessible navigation for users with disabilities. Also, alternative text should be provided for images.
- **SEO Optimization**: The site should follow **SEO best practices** to improve visibility on search engines.
- **Mobile-First Design**: The layout and design should prioritize mobile devices and then scale up to larger screens.

---

## **5. System Architecture**

The portfolio website follows a **client-server model**. Since the website is static, there is no backend server involved, and all content is pre-built and deployed as static files (HTML, CSS, and JavaScript).

### **Client-Side**:
- Responsible for rendering content and handling user interactions.
- Uses **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap** for layout and functionality.

### **Server-Side**:
- There is no dynamic server-side logic since the website is entirely static.
- The content is hosted and served from **static hosting platforms** like GitHub Pages, Netlify, or Vercel.

---

## **6. Technologies Used**

### **Frontend**:
- **HTML5**: Structuring the content and building semantic web pages.
- **CSS3**: Styling the website, including layout, colors, and typography.
- **JavaScript**: For interactive features such as the real-time clock and carousels.
- **Bootstrap 5**: For responsive design and using pre-built components (e.g., navigation bar, cards, carousel).
- **3Dmol.js**: For 3D visualization (if bioinformatics-related projects are included).
- **FontAwesome / Bootstrap Icons**: For including icons (e.g., GitHub, Devpost).
- **jQuery** (optional): For DOM manipulation, if used.

### **Backend**:
- **None** (static website).

### **External Services**:
- **GitHub**: For hosting project repositories.
- **DevPost**: For showcasing projects and achievements.

---

## **7. User Interface Design**

### **Navigation Bar**:
- A **fixed-top** navigation bar using Bootstrap with links to the **Home**, **Projects**, **Research**, **Resume**, and **Contact** pages.
- The active section should be highlighted to indicate the current page.

### **Projects Section**:
- Each project is displayed as a **card** with a title, description, technologies, and a GitHub repository link.
- Project images are displayed in a **carousel**, providing an interactive way to view project images.

### **Real-Time Clock**:
- A clock that shows the current local time in Miami and updates every minute.

### **Footer**:
- A footer with a thank-you message and a programming-related joke.

---

## **8. Database Design**

There is no need for a database as the portfolio website is **static**. All content, including text, images, and links, is stored directly within the **HTML**, **CSS**, and **JavaScript** files.

---

## **9. Security**

- **HTTPS**: The website will be served over HTTPS to ensure the integrity of content and protect data in transit.
- **Sanitization**: Any user input (e.g., contact form) will be sanitized to prevent cross-site scripting (**XSS**).
- **No Sensitive Data**: The website does not store or handle any sensitive user data, thus minimizing security risks.

---

## **10. Deployment**

The website will be deployed on a static hosting platform such as **GitHub Pages**, **Netlify**, or **Vercel**.

### **CI/CD Pipeline**:
- Continuous deployment can be achieved using **GitHub Actions** or other similar tools, ensuring smooth updates whenever content is modified.

---

## **11. Testing**

- **Unit Testing**: JavaScript functions, particularly the real-time clock, will be tested.
- **Cross-Browser Testing**: Ensuring compatibility across popular browsers such as **Chrome**, **Firefox**, **Safari**, and **Edge**.
- **Mobile Testing**: Testing the website on various mobile devices to ensure responsiveness.
- **Accessibility Testing**: Tools like **WAVE** or **Lighthouse** will be used to ensure accessibility best practices are followed.

---

## **12. Maintenance**

- **Content Updates**: The website content can be updated manually by modifying **HTML** files to add new projects or achievements.
- **Image Optimization**: All images will be compressed and optimized for faster loading.
- **Bug Fixing**: Any broken links, images, or functionality will be fixed promptly.

---

## **13. Risks and Challenges**

- **Cross-Browser Compatibility**: Ensuring that the website functions correctly on older browsers, such as **Internet Explorer**, may be a challenge.
- **Responsive Issues**: Ensuring proper layout and functionality across a wide variety of screen sizes and devices.
- **Performance**: Ensuring fast page load times, particularly if images or media-heavy components are used.

---

## **14. Performance Optimizations**

- **Image Compression**: Images will be compressed using tools like **ImageOptim** or **TinyPNG** to reduce their file size without sacrificing quality.
- **Lazy Loading**: Images and other heavy content will be lazy-loaded to improve initial load times.
- **CDN Usage**: Use a **Content Delivery Network (CDN)** to serve static assets like images and scripts more efficiently, enhancing performance.

---

## **15. Analytics and Monitoring**

- **Google Analytics**: Track site visits and user interaction to gather insights for future improvements.
- **Error Logging**: Implement services like **Sentry** for logging frontend errors and tracking issues in real-time.

---
