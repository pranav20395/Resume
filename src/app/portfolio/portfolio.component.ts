import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Few Shot Face Recognition',
      summary: 'Here I explored and developed several models for achieving short face recognition and training, mainly using Siamese neural Network and other Models such as K-NN and SVM and also using the ensemble approach to get better results',
      description: 'I implement various models, like the old fashioned K-Nearest Neighbours, the classic Support Vector Classifier, and newwr models like Siamese Neural Network. We use the dlib library(amongst others) to extract faces from the images in the former 2 models, while the logic of triplets in the latter. The paper explores the challenges of few-shot learning datasets and investigates different methodologies, including novelty models such as the implementation of a threshold to detect new faces in the dataset.',
      projectLink: 'https://github.com/pranav20395/Few-Shot-Face-Recognition',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.KAGGLE, Tag.CNN, Tag.SNN ,Tag.PANDAS],
      pictures: ["../../assets/snn.png", "../../assets/snn_dig.png"]
    },
    {
      id: 2,
      name: 'Space knowlegde graph builder',
      summary: 'Developed a framework for assessing the quality of Knowledge Graphs (KGs) extracted from OIE algorithms by introducing custom metrics based on triplet extraction, entity recognition, and completeness.',
      description: 'Proposed a distance-based mathematical model to quantitatively evaluate the accuracy and structural soundness of extracted graphs against ideal graphs. Analyzed the performance of StanfordIE, ClausIE, and OpenIE6 models, identifying key strengths and limitations through comprehensive metric-driven comparisons.',
      projectLink: 'https://github.com/pranav20395/Space_knowlegde_graph_builder',
      tags: [Tag.PYTHON, Tag.KGs, Tag.Semantic ,Tag.PANDAS],
      pictures: ["../../assets/sp1.png", "../../assets/sp2.png", "../../assets/sp3.png"]
    },
    {
      id: 3,
      name: 'Snakes-Ladders',
      summary: 'This is a Game of Snakes and Ladders, developed using Java and JAVAFX and Scenebuilder.',
      description: 'This is a Game of Snakes and Ladders, developed using Java and JAVAFX and Scenebuilder. The game is played on a 10x10 board with 100 squares. Players take turns rolling a die to move their pieces along the board. If a player lands on a square with a snake, they slide down to a lower square. If they land on a square with a ladder, they climb up to a higher square. The first player to reach the last square wins the game.',
      projectLink: 'https://github.com/pranav20395/Snakes-Ladders',
      tags: [Tag.JAVA, Tag.JAVAFX, Tag.OOPs, Tag.SceneBuilder],
      pictures: ["../../assets/sl1.png", "../../assets/sl2.png"]
    },
    {
      id: 4,
      name: 'healthsake',
      summary: 'This is the code base of HealthSake, an interactive Patient Data Management System developed primarily to facilitate the verification of the patients documents while buying medicines or making medical claims.',
      description: 'A patient data management system is a software system developed primarily to facilitate the verification of the patients’ documents while buying medicines or making medical claims. The focus of this project is to develop a portal that facilitates the secure exchange and verification of electronic health records.',
      projectLink: 'https://github.com/pranav20395/healthsake',
      tags: [Tag.NEXTjs, Tag.Tailwind, Tag.POSTGRESQL, Tag.PRISMA, Tag.Nodemailer, Tag.TYPESCRIPT, Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: []
    },
    {
      id: 5,
      name: 'cric-o-pedia',
      summary: "This is the code base of cric-o-pedia, an interactive platform to chat with other cricket fans and visualise cricket statistics.",
      description: "This project, built for the Designing Interactive Systems course, is a web app where cricket fans can chat live during matches and visualize key cricket statistics. The MVP includes real-time chat and basic stat visualizations. Sprinkles like smooth animations and more detailed stats enhance the experience. It is built using ReactJS, NodeJS, ExpressJS, Tailwind CSS, and a mobile-first workflow.",
      projectLink: 'https://github.com/pranav20395/cric-o-pedia',
      tags: [Tag.Tailwind, Tag.REACTjs, Tag.NODEjs, Tag.EXPRESSjs, Tag.JAVASCRIPT],
      pictures: ["../../assets/c1.png", "../../assets/c2.png", "../../assets/c3.png", "../../assets/c4.png"]
    },
    {
      id: 6,
      name: 'Simple-risc-assembler-and-simulator',
      summary: 'This project is a Simple RISC Assembler and Simulator.',
      description: "This project is a Simple RISC Assembler and Simulator, developed as part of the Computer Organization course at IIIT Delhi (Monsoon 2021). The assembler and simulator read input from stdin and output to stdout. Commands for running them are provided in the respective run scripts. Automated testing is set up using options like --verbose, --no-asm, and --no-sim.",
      projectLink: 'https://github.com/pranav20395/Simple-risc-assembler-and-simulator',
      tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/r1.png", "../../assets/r2.png"]
    },
    {
      id: 7,
      name: 'Knowledge Graph Quality Metrics',
      summary: "Developed a framework for assessing the quality of Knowledge Graphs (KGs) extracted from OIE algorithms by introducing custom metrics based on triplet extraction, entity recognition, and completeness. ",
      description: "In the burgeoning field of knowledge representation, the construction and maintenance of high-quality knowledge graphs (KGs) play a pivotal role in ensuring the accuracy and reliability of information. This research endeavors to establish a comprehensive framework for assessing the quality of knowledge graphs, introducing novel matrices and metrics tailored to capture the intricacies of knowledge representation. Our approach involves the development of quantifiable measures that evaluate aspects such as completeness, consistency, accuracy, and contextual relevance within a knowledge graph.",
      projectLink: 'https://drive.google.com/drive/folders/1rQODPQa1lV4MnwS4rmUynKNfMk6GzwHA?usp=sharing',
      tags: [Tag.PYTHON, Tag.Semantic, Tag.KGs, Tag.PANDAS, Tag.MATHS, Tag.RESEARCH],
      pictures: ["../../assets/kg1.png", "../../assets/kg2.png", "../../assets/kg3.png"]
    },
    // {
    //   id: 8,
    //   name: '12 Barcodes API',
    //   summary: 'The 12 Barcodes API is a user-friendly RESTful API designed to provide a simple and practical solution for generating barcodes in applications.',
    //   description: "This RESTful API serves as a playground to explore and master technologies from the Flask ecosystem and some software design. Embracing the Model-View-Controller (MVC) architecture and DRY principle, I strive for a clean, organized codebase that fosters maintainability and scalability - in the rare chance this project ever grows to something unexpected. To ensure clarity and ease of use, I've meticulously documented this project according to the OpenAPI standard with Swagger. One unique aspect of this project is its reliance on lightweight data processing, foregoing the need for a traditional database. To achieve this, I crafted a buffer to handle images so it deals with image data directly in memory, avoiding the need to write it down. This may impact latency since the images are served without the need for a retrieval move. No need for a persistent storage. This decision reflects my commitment to simplicity. You need a barcode image, you get it. You need a little bit of information for that type of barcode, you get it. ",
    //   projectLink: 'https://github.com/barbaracalderon/the-12-barcodes-api',
    //   tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.POSTMAN],
    //   pictures: ["../../assets/12_01.png", "../../assets/12_02.png", "../../assets/12_03.png", "../../assets/12_04.png", "../../assets/12_05.png"]
    // },
    // {
    //   id: 9,
    //   name: 'Notelock API',
    //   summary: 'Notelock is a Restful API in Java that uses Spring Boot and JWT for authentication and security. Its endpoints are designed to manage resources such as notebooks and notes, with data persisted in a PostgreSQL database.',
    //   description: "Notelock is a robust RESTful API designed to manage notebooks and notes efficiently. Developed using Java with Spring Boot and JWT authentication, Notelock offers endpoints to handle various resources, including notebooks and notes, with data persistence in a PostgreSQL database. With Notelock, users can perform CRUD (Create, Read, Update, Delete) operations on notebooks and notes, facilitating the organization and management of their digital notes. The API prioritizes security and authentication, utilizing JWT tokens for secure user authentication. Built with scalability and reliability in mind, Notelock ensures seamless integration with other systems and applications. Its user-friendly interface and intuitive design make it ideal for developers seeking a reliable solution for managing digital notebooks and notes. Whether you're a developer looking to streamline note management in your applications or an organization in need of a robust note-taking solution, Notelock provides the tools and functionalities to meet your needs effectively.",
    //   projectLink: 'https://github.com/barbaracalderon/notelock',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
    //   pictures: ["../../assets/n_01.png", "../../assets/n_02.png"]
    // },
    // {
    //   id: 10,
    //   name: 'Majority App',
    //   summary: 'Majority App is a web application built using the Dash framework in Python. It provides insights into the voting behavior of US legislators on various bills.',
    //   description: "Majority App is a web application created using Dash, a Python framework designed for building analytical web applications. The primary purpose of Majority App is to provide insights into the voting behavior of US legislators on various bills. This makes it a valuable tool for public affairs professionals and political analysts who seek detailed information about legislative activities. As a mock application developed for educational purposes, Majority App offers several features that facilitate the exploration of legislative data. It includes a tab navigation system that allows users to move between different sections, such as information about the application, details on various bills, and data on individual legislators. The 'About Us' tab provides an overview of the application's capabilities, outlining the tools and features available. The 'Bills' tab allows users to select a specific bill and view comprehensive details, including the primary sponsor and the tally of votes for and against the bill. Meanwhile, the 'Legislators' tab enables users to examine the voting behavior of individual legislators, offering insights into the number of bills they have supported or opposed.",
    //   projectLink: 'https://github.com/barbaracalderon/majority-mock-app',
    //   tags: [Tag.PYTHON, Tag.DASH, Tag.PLOTLY],
    //   pictures: ["../../assets/ma_01.png", "../../assets/ma_02.png", "../../assets/ma_03.png"]
    // },
    // {
    //   id: 11,
    //   name: 'Tutor Mate API',
    //   summary: 'This project is a RESTful API developed in Java and Spring Boot to manage appointments between students and tutors. It uses JDK 17 and PostgreSQL database with the specified database schema.',
    //   description: "Tutor-Mate is a RESTful API developed in Java using Spring Boot, designed to manage appointments between students and tutors. It utilizes JDK 17 and PostgreSQL for database management with a specified schema. The API provides various endpoints to handle resources such as students, tutors, schedules, materials, and appointments. The API's endpoints allow users to perform CRUD operations, enabling the creation, reading, updating, and deletion of records. For instance, the /alunos endpoint manages student data, while the /tutores endpoint manages tutor data. Schedules can be managed via the /agendas endpoint, and educational materials are handled through the /materiais endpoint. The /agendamentos endpoint facilitates viewing and managing appointments specific to students or tutors. Built with a robust set of technologies, the Tutor-Mate API uses Java 17, Spring Boot for application development, Spring Boot Starter Data JPA for data persistence, Spring Boot Starter Web for web application development, and Spring Boot DevTools for enhanced productivity during development. PostgreSQL serves as the relational database, and Project Lombok helps reduce boilerplate code in Java. Maven is used as the dependency management and build automation tool.",
    //   projectLink: 'https://github.com/barbaracalderon/fmt-tutor-mate',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
    //   pictures: ["../../assets/tm_01.png", "../../assets/tm_02.png", "../../assets/tm_03.png"]
    // },
    // {
    //   id: 12,
    //   name: 'The Music Time Machine Project',
    //   summary: 'Choose a day in time and automatically create a Spotify playlist of the top songs playing in the world in that moment.',
    //   description: "This project involves creating a program that interacts with Spotify to transport users back in time musically by retrieving and playing songs from a specific date in the past. To run the Music Time Machine Project, you need Python installed on your computer, a Spotify account, and a Spotify app created through the Spotify Developer Dashboard. The app created in the Developer Dashboard will serve as the project’s base, providing necessary credentials like CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI. These credentials are essential for authenticating and interacting with Spotify's API, and should be securely stored as environment variables in your operating system to protect them from unauthorized access. Once the setup is complete, users can input a specific date in the format YYYY-MM-DD (year-month-day) to use the application. The program will then fetch and play songs that were popular on Spotify on that date, effectively creating a musical time-travel experience. The project includes detailed instructions on how to create a Spotify app and obtain the necessary credentials, as well as how to set environment variables. Screenshots of the app running are also provided for reference. The Music Time Machine Project showcases an ability to integrate Python with external APIs, demonstrating skills in application development and secure credential management. The goal of the project is to provide a nostalgic musical journey for users, allowing them to relive the hits from a specific date in the past through Spotify.",
    //   projectLink: 'https://github.com/barbaracalderon/music-time-machine-spotify',
    //   tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP],
    //   pictures: ["../../assets/mt_01.png", "../../assets/mt_02.png", "../../assets/mt_03.png", "../../assets/mt_04.png"]
    // },
    // {
    //   id: 13,
    //   name: 'Library Manager API',
    //   summary: 'This project is a RESTful API for managing a simple library. It uses JDK 17 and PostgreSQL for the database with the specified database schema.',
    //   description: "The Library Manager API offers various endpoints to handle different entities within a library system, such as librarians, books, members, loans, and visitors. The API allows for creating, reading, updating, and deleting records for each of these entities, ensuring comprehensive management capabilities for the library. The database schema for the project was designed by myself and defined in such a way to allow for structured and organized data storage. The endpoints for managing librarians include operations to create new librarians, retrieve all or specific librarians, update their details, delete them, return their emails, and update their passwords. For loans, the API supports creating new loans, retrieving all or specific loans, updating loan details, and deleting loans. Book management endpoints enable operations to create, retrieve, update, and delete books, as well as list all book titles and authors. The member endpoints allow for the creation of new members, retrieval of all or specific members, updating member details, deleting members, listing member names, and phone numbers, and updating member phone numbers. Similarly, visitor endpoints cover creating new visitors, retrieving all or specific visitors, updating visitor details, and deleting visitors.",
    //   projectLink: 'https://github.com/barbaracalderon/fmt-library-manager',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
    //   pictures: ["../../assets/lm_01.png", "../../assets/lm_02.png", "../../assets/lm_03.png"]
    // },


  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
