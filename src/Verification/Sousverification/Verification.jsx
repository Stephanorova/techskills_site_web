import React, { useState } from 'react';
import "./index.css"
import axios from 'axios';
import { Card, CardHeader, CardContent, TextField, Button, Typography } from '@mui/material';
import { ChevronUp } from 'lucide-react';



const Verification = () => {
  const [certificat, setCertificat] = useState(null);
  const [Ref, setRef] = useState(null);
  const [error, setError] = useState('');
  
  const handleVerification = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://backendsite-5yjl.onrender.com/verifier/${Ref}`);
      setCertificat(response.data);
      setError('')
    } catch (error) {
      setRef('')
      setError('Etudiant non trouvé');
    }
  };
  
  
  return (
<div className='verifie'>
  <div className="titrehaute">
  <span className='verificationspan'>- / Verification / students</span>
    <h1>
    Verification of student who followed our training courses
    </h1>
  </div>
   <div className='cadre'>
      <form onSubmit={handleVerification} style={{ marginBottom: '10px' }}>
        <TextField
          fullWidth
          label="Certificate Number"
          variant="outlined"
          value={Ref} 
          onChange={(e) => setRef(e.target.value)} 
          style={{ marginBottom: '20px' }}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          check
        </Button>
      </form>

      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {certificat  && (
        <Card>
          <CardHeader title="Résultat de votre vérification" />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <strong>Student's first and last name:</strong>{certificat.NomEtPrenomEtudient}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Training date:</strong> {certificat.DateFormation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Certificate Number:</strong> {certificat.Ref}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Student Number:</strong> {certificat.Num}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Training Name:</strong> {certificat.Formation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Company Name:</strong> {certificat.Societe}
            </Typography>
          </CardContent>
        </Card>
    )}
    </div> 
    
    <span
        className="fixed bottom-4 right-4 bg-red-700 text-white p-2 "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} />
      </span>

      <footer className="py-4 text-center text-gray-600">
        © 2024 TechSkils Learning Institute. All right Reserved.
      </footer>
    </div>
    
  )
}

export default Verification
