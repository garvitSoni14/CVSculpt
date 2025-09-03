# CVSculpt

**CVSculpt** is a cutting-edge, AI-powered application designed to
create professional, ATS-friendly resumes and cover letters. Built with
a modern tech stack, it leverages **Spring Boot**, **React**, **Tailwind
CSS**, and **Ollama** to deliver a seamless, user-friendly experience
for job seekers aiming to stand out in competitive markets.

------------------------------------------------------------------------

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Architecture](#architecture)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Configuration](#configuration)
-   [Contributing](#contributing)
-   [Contact](#contact)
-   [Show Your Support](#show-your-support)

------------------------------------------------------------------------

## Features

-   **AI-Driven Content Generation**: Powered by Ollama, CVSculpt
    intelligently crafts tailored resumes and cover letters based on
    user input, ensuring ATS compatibility and professional tone.
-   **ATS Optimization**: Generates documents optimized for Applicant
    Tracking Systems, increasing the chances of passing initial
    screenings.
-   **Customizable Templates**: Offers a variety of sleek, modern
    templates styled with Tailwind CSS for professional and visually
    appealing outputs.
-   **Real-Time Preview**: React-based frontend provides live previews
    of resumes and cover letters as users input their details.
-   **Responsive Design**: Fully responsive UI ensures a seamless
    experience across desktop, tablet, and mobile devices.
-   **Secure and Scalable**: Backend powered by Spring Boot ensures
    robust performance, security, and scalability.

------------------------------------------------------------------------

## Tech Stack

-   **Frontend**:
    -   [React](https://reactjs.org/) - Dynamic and interactive user
        interface.
    -   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
        framework for responsive and modern styling.
-   **Backend**:
    -   [Spring Boot](https://spring.io/projects/spring-boot) -
        Java-based framework for building secure and scalable APIs.
-   **AI Integration**:
    -   [Ollama](https://ollama.ai/) - AI engine for generating
        professional and ATS-optimized content.
-   **Other Tools**:
    -   [Maven](https://maven.apache.org/) - Dependency management for
        the backend.
    -   [Node.js](https://nodejs.org/) - JavaScript runtime for the
        frontend.
    -   [Git](https://git-scm.com/) - Version control for collaborative
        development.

------------------------------------------------------------------------

## Architecture

CVSculpt follows a **microservices-inspired architecture** with a clear
separation of concerns:

1.  **Frontend (React + Tailwind CSS)**:
    -   Handles user input, real-time previews, and template rendering.
    -   Communicates with the backend via RESTful APIs.
2.  **Backend (Spring Boot)**:
    -   Manages user data, authentication, and API endpoints.
    -   Integrates with Ollama for AI-driven content generation.
3.  **AI Engine (Ollama)**:
    -   Processes user inputs to generate ATS-friendly resumes and cover
        letters.
    -   Optimizes content based on job descriptions and industry
        standards.
4.  **Data Storage**:
    -   Uses in-memory storage for demo purposes (extensible to
        databases like PostgreSQL or MongoDB for production).

**Architecture Diagram**

``` mermaid
graph TD
    A[User] -->|HTTP Requests| B[Frontend<br>React + Tailwind CSS]
    B -->|REST API| C[Backend<br>Spring Boot]
    C -->|API Calls| D[AI Engine<br>Ollama]
    C -->|Data Operations| E[Data Storage<br>In-Memory / PostgreSQL / MongoDB]
    D -->|Generated Content| C
    B -->|Real-Time Preview| A
```

------------------------------------------------------------------------

## Installation

Follow these steps to set up CVSculpt locally:

### Prerequisites

-   Java 17 or higher
-   Node.js 18 or higher
-   Maven 3.8+
-   Git
-   Ollama (configured with API access)

### Steps

1.  **Clone the Repository**:

    ``` bash
    git clone https://github.com/garvitSoni14/CVSculpt.git
    cd CVSculpt
    ```

2.  **Set Up the Backend**:

    ``` bash
    cd backend
    mvn clean install
    mvn spring-boot:run
    ```

    The backend will run on `http://localhost:8080`.

3.  **Set Up the Frontend**:

    ``` bash
    cd frontend
    npm install
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

4.  **Configure Ollama**:

    -   Follow the [Ollama documentation](https://ollama.ai/docs) to set
        up the AI engine.
    -   Update the backend configuration (`application.properties`) with
        your Ollama API credentials.

5.  **Access the Application**: Open `http://localhost:3000` in your
    browser to start using CVSculpt.

------------------------------------------------------------------------

## Usage

1.  **Input Details**: Enter your personal information, work experience,
    education, and skills as prompt.
2.  **Generate Documents**: Use the AI-powered generator to create a
    resume and cover letter.
3.  **Edit Preview**: Manually add/remove/edit fields in the preview .
4.  **Preview and Download**: Review the generated documents in
    real-time and download them in PDF format.

------------------------------------------------------------------------

## Configuration

The application can be customized via configuration files:

-   **Backend**: Edit
    `backend/src/main/resources/application.properties` to configure:
    -   Server port
    -   Ollama API endpoints and credentials
    -   Database settings (if applicable)
-   **Frontend**: Update `frontend/src/config.js` to modify:
    -   API base URL
    -   Default template settings
    -   Theme customization

------------------------------------------------------------------------

## Contributing

We welcome contributions from the community! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes and commit (`git commit -m "Add your feature"`).
4.  Push to your branch (`git push origin feature/your-feature`).
5.  Open a Pull Request with a detailed description of your changes.

------------------------------------------------------------------------

## Contact

Connect with the project maintainer for inquiries or networking:

-   LinkedIn: [garvitsoni04](https://www.linkedin.com/in/garvitsoni04/)
-   GitHub: [garvitSoni14](https://github.com/garvitSoni14)
-   Email: <garvitsoni.1414@gmail.com>

For project-specific feedback or issues, please use [GitHub
Issues](https://github.com/garvitSoni14/CVSculpt/issues).

------------------------------------------------------------------------

## Show Your Support

If **CVSculpt** helps you create professional resumes or inspires your
development journey: - **Star** this repository on GitHub to show your
appreciation. - **Share** it with friends, job seekers, or the developer
community. - **Contribute**: Suggest improvements or new features.

------------------------------------------------------------------------

**Built by [Garvit Soni](https://github.com/garvitSoni14)**
