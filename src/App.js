import React from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import './App.css';

function App() {
  const columns = ["Trabalho Duro", "Afeto", "Dominância", "Abstração", "Tempo", "Empatia", "Status",
    "Planejamento", "Terminar a Tarefa", "Sociabilidade", "Negociação", "Exposição", "Qualidade",
    "Lealdade", "Liderança", "Flexibilidade"]

  const data = [
    {
      subject: 'Trabalho Duro', A: 17, B: 15, C: 9, D: 10, fullMark: 20,
    },
    {
      subject: 'Afeto', A: 12, B: 10, C: 10, D: 12, fullMark: 20,
    },
    {
      subject: 'Dominância', A: 5, B: 10, C: 5, D: 12, fullMark: 20,
    },
    {
      subject: 'Abstração', A: 11, B: 7, C: 3, D: 12, fullMark: 20,
    },
    {
      subject: 'Tempo', A: 8, B: 10, C: 7, D: 12, fullMark: 20,
    },
    {
      subject: 'Empatia', A: 8, B: 11, C: 9, D: 12, fullMark: 20,
    },
    {
      subject: 'Status', A: 5, B: 19, C: 12, D: 12, fullMark: 20,
    },
    {
      subject: 'Planejamento', A: 9, B: 10, C: 9, D: 12, fullMark: 20,
    },
    {
      subject: 'Terminar a Tarefa', A: 6, B: 14, C: 8, D: 12, fullMark: 20,
    },
    {
      subject: 'Sociabilidade', A: 16, B: 16, C: 14, D: 12, fullMark: 20,
    },
    {
      subject: 'Negociação', A: 17, B: 10, C: 10, D: 15, fullMark: 20,
    },
    {
      subject: 'Exposição', A: 12, B: 19, C: 15, D: 12, fullMark: 20,
    },
    {
      subject: 'Qualidade', A: 18, B: 9, C: 10, D: 12, fullMark: 20,
    },
    {
      subject: 'Lealdade', A: 19, B: 12, C: 10, D: 12, fullMark: 20,
    },
    {
      subject: 'Liderança', A: 17, B: 13, C: 10, D: 12, fullMark: 20,
    },
    {
      subject: 'Flexibilidade', A: 13, B: 10, C: 10, D: 12, fullMark: 20,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={600} data={data} style={{ color: '#ffff' }}>
          <PolarGrid style={{ color: '#ffff' }}/>
          <PolarAngleAxis dataKey={'subject'} style={{ color: '#ffff' }} />
          <PolarRadiusAxis angle={90} domain={[0, 20]} />
          <Radar name="Daniel" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Sandro" dataKey="B" stroke="#82ca9d" fill="#82ca88" fillOpacity={0.6} />
          <Radar name="Sato" dataKey="C" stroke="#E5C077" fill="#E5C077" fillOpacity={0.6} />
          <Radar name="Hurá" dataKey="D" stroke="#C7E7F8" fill="#C7E7F8" fillOpacity={0.6} />
          <Radar name="JC" dataKey="E" stroke="#FFE0E6" fill="#FFE0E6" fillOpacity={0.6} />
          <Radar name="Junqueira" dataKey="F" stroke="#dced71" fill="#dced71" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </header>
    </div>
  );
}

export default App;
