import './index.css'
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "PECB a signé un accord de partenariat avec Smart Univers",
    date: "2024-10-03",
    content: "01 octobre 2024 - PECB a le plaisir d'annoncer l'établissement d'un partenariat mutuellement bénéfique avec Smart Univers portant sur l'offre de formations au Mali. Ce partenariat combine les services professionnels de PECB et les capacités de Smart Univers à offrir des cours de formation avec compétence, des résultats satisfaisants et une expérience exceptionnelle.",
    content0: `"Nous sommes ravis d'initier ce partenariat avec Smart Univers. Il nous permettra d'accroître la sensibilisation au niveau national à l'importance des normes ISO. Je suis personnellement très heureux et confiant de signer cet accord\", a déclaré Tim Rama, le PDG de PECB. \"Nos partenariats et notre réseau s'élargit constamment et nous n'oublions pas notre objectif de proposer la meilleure qualité de formation dans le marché malien et à l'international\", a conclu M. Rama.`,
    content1:`« C'est un partenariat très important qui s'installe entre deux structures soucieuses d'apporter des services de formation de qualité, nous en sommes également ravis. Il facilitera l'accès aux formations et certifications internationales aux professionnels maliens en particulier, et africains en général. C'est avec enthousiasme que je signe cet accord, qui j'en suis convaincu, initie une collaboration très fructueuse. » a conclu Seydou Baye TANGARA, Manager de Smart Univers.`,
    content2: "À propos de Smart Univers SMART UNIVERS intervient dans le cadre des prestations informatiques et la formation. Nous développons des solutions sur mesures et proposons des formations de qualités dans le but de contribuer à l’atteinte des objectifs d’optimisation des entreprises de tous les secteurs ; cela à travers le maintien opérationnel des infrastructures informatiques, le renforcement des capacités et la spécialisation des employés. SMART UNIVERS est spécialisée dans l’infogérance, la conception et le développement, ainsi que dans la proposition des thématiques de formation aux entreprises de tous secteurs et aux particuliers.",
    excerpt: "PECB, un fournisseur mondial de premier plan de services complets d'examen et de certification, est ravi d'annoncer un nouvel accord de partenariat avec Smart Univers..."
  },
  {
    id: 2,
    title: "PECB a signé un accord de partenariat avec New Era Etudes et Consulting",
    date: "2024-10-03",
    content: `9 septembre 2024  PECB, un fournisseur mondial de premier plan de services complets d'examen et de certification, est ravi d'annoncer un nouvel accord de partenariat avec New Era Etudes et Consulting, un prestataire de conseil en management et de formation pour les particuliers et les entreprises portant sur l’offre de formation. Ce partenariat apportera une expertise et des connaissances qui, à leur tour, élargiront notre capacité à fournir une gamme complète de services afin que nos clients puissent bénéficier de la grande valeur des cours de formation PECB.`,
    content0: `Notre partenariat avec New Era Etudes et Consulting élargira nos activités, en aidant nos clients à rester à la pointe et à apporter de la valeur ajoutée à leurs entreprises. Nous voyons un avenir prometteur sur le marché marocain, a déclaré Tim Rama, le PDG de PECB. "Nous ne perdons jamais de vue notre objectif fondamental qui consiste à aider nos clients à bâtir, développer et protéger leur entreprise. Nous sommes particulièrement impressionnés par l'esprit de collaboration de New Era Etudes et Consulting, son approche d'équipe et son attention au service à la clientèle, ainsi que par sa force de développement », a conclu M. Rama.`,
    content1: `«Le partenariat entre New Era Études et Consulting et PECB représente une alliance stratégique qui combine l’expertise locale et la reconnaissance internationale. New Era Études et Consulting, avec sa connaissance approfondie ainsi avec ça dynamiques régionales et ses besoins spécifiques des entreprises, s'associe à PECB, un leader mondial dans les certifications professionnelles, notamment en matière de la Qualité, l’environnement, la gestion des risques, la sécurité de l'information... Ce partenariat permet d’offrir aux entreprises et aux professionnels la chance de se former et de se certifier selon des standards internationaux, leur donnant non seulement les compétences, mais aussi la confiance nécessaire pour atteindre de nouveaux sommets, renforçant ainsi leur crédibilité et leur compétitivité sur la scène internationale. Ensemble, ils contribuent à l'élévation des standards de compétence dans divers secteurs, tout en répondant aux besoins croissants en matière de conformité et de bonnes pratiques. Cette collaboration promet de fournir des solutions novatrices adaptées aux défis actuels, tout en renforçant la capacité des entreprises à évoluer dans un environnement globalisé et de plus en plus exigeant. Nous sommes convaincus que cette collaboration renforcera notre position sur le marché et nous permettra de mieux répondre aux besoins de nos clients en matière de formation et de certification. » a déclaré  AYASSIN ABDELLATIF, Gérant de New Era Etudes et Consulting.`,
    content2: `À propos de PECB : PECB est un organisme de certification qui propose des programmes de formation, de certification et de certificat pour les individus dans un large éventail de disciplines.Nous aidons les professionnels et les organisations à faire preuve d'engagement et de compétence en leur offrant des programmes d'éducation, d'évaluation, de certification et de certificat par rapport à des normes rigoureuses reconnues à l'échelle internationale. Notre mission est de fournir à nos clients des services complets qui inspirent la confiance, l'amélioration continue, démontrent la reconnaissance et profitent à la société dans son ensemble. Pour plus d'informations sur les principaux objectifs et activités de PECB.`,
    content3: `À propos de New  Etudes et Consulting: c’est un cabinet spécialisé dans l’accompagnement, l’audit et la formation des entreprises et des personnes. Nous sommes basés au Maroc, dédié à offrir des solutions de formation et de conseil de haute qualité. Nous sommes spécialisés dans divers domaines, apportant une valeur ajoutée significative à nos clients grâce à notre expertise et notre approche personnalisée.`,
    content4: `Notre mission est de guider les entreprises vers l’efficacité, l’excellence et l’innovation au sein de leurs équipes et de leurs systèmes. En leur apportant une réponse efficace et claires à leurs besoins afin d’atteindre les meilleurs résultats.`,
    excerpt: "PECB, un fournisseur mondial de premier plan de services complets d'examen et de certification, est ravi d'annoncer un nouvel accord de partenariat avec New Era Etudes et Consultin..."
  },
  {
    id: 3,
    title: "Lead SOC 2 Analyst Training Course Available",
    date: "2024-10-03",
    content: `We are happy to announce that the Lead SOC 2 Analyst training course in English, is available now.`,
    content1: `In current the digital age, information security is a critical concern for most industries. SOC 2 compliance is crucial for organizations handling sensitive data and outsourcing key business operations. SOC 2 compliance demonstrates a commitment to data security and privacy. This training course equips participants with the skills to manage and mitigate information security risks, align with regulatory requirements, and build trust with clients and stakeholders.`,
    content2: `For more information regarding the latest training course contact us at: administration@tech-skills.com.`,
    excerpt: "We are happy to announce that the Lead SOC 2 Analyst training course in English, is available now."
  }
];
const Bloge = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <div className="bloge w-64 bg-gray-100 4p-">
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
      <div className="md:w-1/3 bg-gray-100 p-4">
        <div className="rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Latest News releases</h2>
          {articles.map((article) => (
            <div key={article.id} className="mb-4">
              <h3 className="font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.excerpt}</p>
              <span
                className="text-blue-600 hover:underline mt-2"
                onClick={() => setSelectedArticle(article)}
              >
                Lire la suite
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/3 p-4">
        <div className="border-b border-gray-300 mb-4">
          <p className="text-sm text-gray-500">
            / Ressources / Communiqués de presse
          </p>
        </div>
        <h1 className="text-2xl font-bold text-red-800 mb-4">
          {selectedArticle.title}
        </h1>
        <div className="flex items-center mb-4">
          <span className="bg-red-800 text-white px-2 py-1 text-sm mr-2">
            Nouvelles en vedette
          </span>
          <span className="bg-gray-300 text-gray-700 px-2 py-1 text-sm">
            {selectedArticle.date}
          </span>
        </div>
        <p className="mb-4">{selectedArticle.content}</p>
        <p className="mb-4">{selectedArticle.content0}</p>
        <p className="mb-4">{selectedArticle.content1}</p>
        <p className="mb-4">{selectedArticle.content2}</p>
        <p className="mb-4">{selectedArticle.content3}</p>
        <p className="mb-4">{selectedArticle.content4}</p>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white p-2 rounded">in</button>
          <button className="bg-blue-700 text-white p-2 rounded">f</button>
          <button className="bg-blue-900 text-white p-2 rounded">t</button>
        </div>
      </div>
      <span
        className="fixed bottom-4 right-4 bg-red-700 text-white p-2 "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} />
      </span>
    </div>
    </div>
  )
}

export default Bloge
