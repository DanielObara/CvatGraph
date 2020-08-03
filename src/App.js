import React from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import './App.css';

function App() {
  const columns = ["Trabalho Duro", "Afeto", "Dominância", "Abstração", "Tempo", "Empatia", "Status", "Planejamento", "Terminar a Tarefa", "Sociabilidade", "Negociação", "Exposição", "Qualidade", "Lealdade", "Liderança", "Flexibilidade"]
  const daniel = [
    14,
    10,
    9,
    17,
    9,
    16,
    10,
    10,
    15,
    14,
    13,
    14,
    9,
    17,
    12,
    11,
  ]

  const data = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={600} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={columns} />
          <PolarRadiusAxis angle={90} domain={[0, 20]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </header>
    </div>
  );
}

export default App;
