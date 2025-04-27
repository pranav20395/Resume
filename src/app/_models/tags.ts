
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly KGs = new Tag('KGs', '#5a7581');
    static readonly Semantic = new Tag('Semantic', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly KAGGLE = new Tag('KAGGLE', '#5a7581');
    static readonly CNN = new Tag('CNN', '#5a7581');
    static readonly SNN = new Tag('Siamese Nural Network', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly VUEJS = new Tag('Vue.JS', '#192129');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');
    static readonly MATHS = new Tag('Maths', '#5a7581');
    static readonly RESEARCH = new Tag('Research', '#5a7581');
    static readonly EXPRESSjs = new Tag('Express.js', '#5a7581');
    static readonly NODEjs = new Tag('Node.js', '#5a7581');
    static readonly NEXTjs = new Tag('Next.js', '#5a7581');
    static readonly Tailwind = new Tag('Tailwind CSS', '#5a7581');
    static readonly REACTjs = new Tag('React.js', '#5a7581');
    static readonly TAILWIND = new Tag('Tailwind CSS', '#5a7581');
    static readonly GITHUB = new Tag('GitHub', '#5a7581');
    static readonly GIT = new Tag('Git', '#5a7581');
    static readonly JAVAFX = new Tag('JavaFX', '#5a7581');
    static readonly OOPs = new Tag('OOPs', '#5a7581');
    static readonly SceneBuilder = new Tag('SceneBuilder', '#5a7581');
    static readonly PRISMA = new Tag('Prisma', '#5a7581');
    static readonly Nodemailer = new Tag('Nodemailer', '#5a7581');
    









    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}