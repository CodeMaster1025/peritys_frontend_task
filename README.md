<h1>Next.js E-commerce Website</h1>

<p>This project is a fully functional, responsive e-commerce website developed using Next.js and Tailwind CSS, based on the provided Figma design. It integrates with the <a href="https://fakestoreapi.com/">Fake Store API</a> to manage backend functionalities, offering a complete shopping experience from browsing products to checkout.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#configuration">Configuration</a></li>
  <li><a href="#scripts">Scripts</a></li>
  <li><a href="#folder-structure">Folder Structure</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#project-highlights">Project Highlights</a></li>
  <li><a href="#future-enhancements">Future Enhancements</a></li>
</ul>

<h2 id="overview">Overview</h2>
<p>This e-commerce application was created as a project to demonstrate a full-stack shopping website with essential e-commerce features. It allows users to browse products, manage their cart, and complete checkout. Admin users can manage product listings, while regular users can enjoy a smooth shopping experience.</p>

<h2 id="features">Features</h2>
<ul>
  <li><strong>UI Implementation:</strong> Responsive UI based on Figma design, styled with Tailwind CSS.</li>
  <li><strong>API Integration:</strong> Dynamic data fetching from Fake Store API for products and details.</li>
  <li><strong>Authentication System:</strong> User login and session management via NextAuth.js.</li>
  <li><strong>Shopping Cart:</strong> Persistent cart allowing quantity adjustments and item removal.</li>
  <li><strong>Responsive Design:</strong> Optimized for mobile and desktop viewing.</li>
  <li><strong>State Management:</strong> Managed via React Context or Redux.</li>
  <li><strong>SEO Optimization:</strong> Enhanced with Next.js SEO capabilities.</li>
  <li><strong>Testing & Deployment:</strong> Unit and integration tests with Jest, deploy on Vercel.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>
<p>To set up this project locally:</p>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/Khushisrivastava9/peritys_frontend_task.git</code></pre>
  <li>Install dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Set up environment variables (see <a href="#configuration">Configuration</a> below).</li>
  <li>Run the application locally:</li>
  <pre><code>npm run dev</code></pre>
  <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a>.</li>
</ol>

<h2 id="configuration">Configuration</h2>
<p>To configure the application, create a <code>.env.local</code> file in the root directory with the following variables:</p>
<pre><code>NEXT_PUBLIC_API_URL=https://fakestoreapi.com/
NEXTAUTH_URL=http://localhost:3000

<h2 id="scripts">Scripts</h2>
<ul>
  <li><code>npm run dev</code> - Runs the application in development mode.</li>
  <li><code>npm run build</code> - Builds the application for production.</li>
  <li><code>npm run start</code> - Starts the production server.</li>
  <li><code>npm run test</code> - Runs tests using Jest.</li>
</ul>

<h2 id="folder-structure">Folder Structure</h2>
<ul>
  <li><code>/components</code> - Reusable components for UI.</li>
  <li><code>/pages</code> - Next.js page routes for the application.</li>
  <li><code>/lib</code> - API integrations and helper functions.</li>
  <li><code>/styles</code> - Global and component-specific styles using Tailwind CSS.</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> Next.js, Tailwind CSS, React</li>
  <li><strong>API Integration:</strong> Fake Store API</li>
  <li><strong>Authentication:</strong> NextAuth.js</li>
  <li><strong>State Management:</strong> React Context / Redux</li>
  <li><strong>Testing:</strong> Jest, React Testing Library</li>
  <li><strong>Deployment:</strong> Vercel</li>
</ul>

<h2 id="project-highlights">Project Highlights</h2>
<ul>
  <li>Responsive design with Tailwind CSS, closely following Figma specifications.</li>
  <li>Shopping cart and checkout features.</li>
  <li>SEO optimization for better search engine visibility.</li>
  <li>Efficient API handling with Next.js’s data fetching capabilities.</li>
</ul>

<h2 id="future-enhancements">Future Enhancements</h2>
<ul>
  <li>Live product search, filters, and sorting options.</li>
  <li>User reviews and rating system.</li>
  <li>User dashboard for tracking orders and managing account settings.</li>
</ul>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License.</p>
