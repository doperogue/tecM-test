const awards = [
      {
        name: 'James Peebles',
        category: 'Physics',
        research: 'Theoretical discoveries in physical cosmology',
        year: 2019,
      },
      {
        name: 'Michel Mayor',
        category: 'Physics',
        research: 'Discovery of an exoplanet orbiting a solar-type star',
        year: 2019,
      },
      {
        name: 'Didier Queloz',
        category: 'Physics',
        research: 'Discovery of an exoplanet orbiting a solar-type star',
        year: 2019,
      },
      {
        name: 'John B. Goodenough',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
      },
      {
        name: 'M. Stanley Whittingham',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
      },
      {
        name: 'Akira Yoshino',
        category: 'Chemistry',
        research: 'Development of lithium-ion batteries',
        year: 2019,
      },
      {
        name: 'Arthur Ashkin',
        category: 'Physics',
        research: 'Optical tweezers and their application to biological systems',
        year: 2018,
      },
      {
        name: 'Gerard Mourou',
        category: 'Physics',
        research: 'Method of generating high-intensity, ultra-short optical pulses',
        year: 2018,
      },
      {
        name: 'Donna Strickland',
        category: 'Physics',
        research: 'Method of generating high-intensity, ultra-short optical pulses',
        year: 2018,
      },
      {
        name: 'Frances H. Arnold',
        category: 'Chemistry',
        research: 'Directed evolution of enzymes',
        year: 2018,
      },
      {
        name: 'George P. Smith',
        category: 'Chemistry',
        research: 'Phage display of peptides and antibodies.',
        year: 2018,
      },
      {
        name: 'Sir Gregory P. Winter',
        category: 'Chemistry',
        research: 'Phage display of peptides and antibodies.',
        year: 2018,
      },
    ];


function calcAward(awards) {
      const prizes = {};

      const prizeData = {};

      // Memoize prizes for each year

      // Couldn't complete the implementation, although the formula for share would be (1 / (no. of unique researcher * no of participants in winner's study);
     


      awards.map((el) => {
            if (prizes[el.year]) {
                  if (prizes[el.year][el.category]) {
                        prizes[el.year][el.category].winners.push({name: el.name});
                  } else {
                        prizes[el.year][el.category] = {winners: [{name: el.name}]};
                  }
            }
            else {
                  prizes[el.year] = {};
                  prizes[el.year][el.category] = {winners: [{name: el.name }]};
            }
      });

      return prizes;
}


console.log(calcAward(awards))