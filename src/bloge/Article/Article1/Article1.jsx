import React from 'react'

const Article1 = () => {
  return (
    <div className="flex-1 p-8 overflow-hiden">
    <div className="text-sm text-gray-500 mb-4">
      <a href="#" className="hover:underline">Ressources</a> / <a href="#" className="hover:underline">Communiqués de presse</a>
    </div>

    <h1 className="text-3xl font-bold text-red-700 mb-4">PECB a signé un accord de partenariat avec TechSkills Learning</h1>

    <div className="flex gap-2 mb-6">
      <span className="bg-red-700 text-white px-2 py-1 text-sm rounded">Nouvelles en vedette</span>
      <span className="bg-gray-700 text-white px-2 py-1 text-sm rounded">2024-10-01</span>
    </div>

    <div className="mb-8">
      <h2 className="font-bold mb-2">PECB a signé un accord de partenariat avec TechSkills Learning</h2>
      <p className="mb-4">30 septembre 2024 - PECB a le plaisir d'annoncer l'établissement d'un partenariat mutuellement bénéfique avec TechSkills Learning portant sur l'offre de formations à Madagascar. Ce partenariat combine les services professionnels de PECB et les capacités de TechSkills Learning à offrir des cours de formation avec compétence, des résultats satisfaisants et une expérience exceptionnelle.</p>
      <p>« Nous sommes ravis de commencer ce partenariat avec TechSkills Learning. Cela nous permettra d'accroître la sensibilisation au niveau national à l'importance des normes ISO. Je suis personnellement très heureux et confiant de signer cet accord avec TechSkills Learning» a déclaré Tim Rama, le PDG de PECB. « Au cours des dernières années, notre programme de partenariat a connu une croissance phénoménale, et les initiatives visant spécifiquement à développer et à maintenir des partenariats volontaires ont été un facteur important de notre succès. Je suis très satisfait que nous soyons parvenus à un accord bénéfique pour les deux entreprises », a conclu M. Rama.</p>
    </div>

    {/* Latest News Sidebar */}
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold text-red-700 mb-4">Latest News releases</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">PECB a signé un accord de partenariat avec New Era Etudes et Consulting</h3>
        <p className="mb-2">PECB, un fournisseur mondial de premier plan de services complets d'examen et de certification, est ravi d'annoncer un nouvel accord de partenariat avec New Era Études et Consultin...</p>
        <a href="#" className="text-red-700 hover:underline">Lire la suite</a>
      </div>
      <div>
        <h3 className="font-bold mb-2">Lead SOC 2 Analyst Training Course Available</h3>
        <p className="mb-2">We are happy to announce that the Lead SOC 2 Analyst training course in English, is available now.</p>
        <a href="#" className="text-red-700 hover:underline">Lire la suite</a>
      </div>
    </div>
  </div>
  )
}

export default Article1
